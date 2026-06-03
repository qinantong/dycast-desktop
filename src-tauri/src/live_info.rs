use std::collections::HashMap;
use std::sync::Arc;

use regex::Regex;
use reqwest::cookie::{CookieStore, Jar};
use reqwest::header::{
    HeaderMap, HeaderName, HeaderValue, ACCEPT, ACCEPT_LANGUAGE, COOKIE, ORIGIN, REFERER,
    USER_AGENT,
};
use serde::Serialize;
use tauri::State;

const UA: &str =
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36";

pub struct HttpState {
    client: reqwest::Client,
    jar: Arc<Jar>,
}

impl HttpState {
    pub fn new() -> Self {
        let jar = Arc::new(Jar::default());
        let client = reqwest::Client::builder()
            .cookie_provider(Arc::clone(&jar))
            .user_agent(UA)
            .build()
            .expect("failed to build reqwest client");

        Self { client, jar }
    }

    fn ingest_webview_cookies(&self, cookies: &str) {
        if cookies.trim().is_empty() {
            return;
        }
        let Ok(url) = "https://live.douyin.com/".parse() else {
            return;
        };
        for cookie in cookies.split(';') {
            let cookie = cookie.trim();
            if !cookie.is_empty() {
                self.jar.add_cookie_str(cookie, &url);
            }
        }
    }

    pub fn cookie_header(&self, cookies: &str) -> String {
        self.ingest_webview_cookies(cookies);
        let Ok(url) = "https://live.douyin.com/".parse() else {
            return cookies.to_string();
        };
        self.jar
            .cookies(&url)
            .and_then(|value| value.to_str().ok().map(|s| s.to_string()))
            .unwrap_or_else(|| cookies.to_string())
    }
}

#[derive(Debug, Serialize)]
pub struct LiveInfo {
    #[serde(rename = "roomId")]
    room_id: String,
    #[serde(rename = "uniqueId")]
    unique_id: String,
    avatar: String,
    cover: String,
    nickname: String,
    title: String,
    status: i32,
}

fn regex_capture(text: &str, pattern: &str) -> String {
    Regex::new(pattern)
        .ok()
        .and_then(|re| re.captures(text))
        .and_then(|captures| captures.get(1).map(|m| m.as_str().to_string()))
        .unwrap_or_default()
}

fn js_unescape(input: String) -> String {
    input
        .replace("\\u0026", "&")
        .replace("\\/", "/")
        .replace("\\\"", "\"")
}

fn room_region(html: &str, room_num: &str) -> String {
    let room_store_key = "\"roomStore\":{\"roomInfo\":{\"room\":";
    if let Some(idx) = html.find(room_store_key) {
        return html[idx..html.len().min(idx + 300_000)].to_string();
    }

    let web_rid_key = format!("\"web_rid\":\"{}\"", room_num);
    if let Some(idx) = html.find(&web_rid_key) {
        let start = idx.saturating_sub(100_000);
        let end = html.len().min(idx + 200_000);
        return html[start..end].to_string();
    }

    html.to_string()
}

fn parse_live_info(html: &str, room_num: &str) -> Option<LiveInfo> {
    let normalized = js_unescape(html.to_string());
    let region = room_region(&normalized, room_num);

    let mut room_id = regex_capture(&region, r#""room":\{"id_str":"([0-9]+?)""#);
    if room_id.is_empty() {
        room_id = regex_capture(&region, r#""roomId":"([0-9]+?)","web_rid":"[0-9]+?""#);
    }

    let unique_id = regex_capture(&normalized, r#""user_unique_id":"([0-9]+?)""#);
    if room_id.is_empty() || unique_id.is_empty() {
        return None;
    }

    let status = regex_capture(&region, r#""room":\{[\s\S]*?"status":([0-9]+)"#)
        .parse::<i32>()
        .unwrap_or(4);

    Some(LiveInfo {
        room_id,
        unique_id,
        avatar: regex_capture(
            &region,
            r#""anchor":\{[\s\S]*?"avatar_thumb":\{[\s\S]*?"url_list":\["([^"]+?)""#,
        ),
        cover: regex_capture(&region, r#""cover":\{[\s\S]*?"url_list":\["([^"]+?)""#),
        nickname: regex_capture(&region, r#""anchor":\{[\s\S]*?"nickname":"([^"]*?)""#),
        title: regex_capture(&region, r#""room":\{[\s\S]*?"title":"([^"]*?)""#),
        status,
    })
}

async fn fetch_live_html_inner(
    state: &HttpState,
    room_num: &str,
    cookies: &str,
) -> Result<String, String> {
    state.ingest_webview_cookies(cookies);
    let mut headers = HeaderMap::new();
    headers.insert(USER_AGENT, HeaderValue::from_static(UA));
    headers.insert(
        REFERER,
        HeaderValue::from_static("https://live.douyin.com/"),
    );
    headers.insert(
        ACCEPT,
        HeaderValue::from_static(
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
        ),
    );
    headers.insert(
        ACCEPT_LANGUAGE,
        HeaderValue::from_static("zh-CN,zh;q=0.9,en;q=0.8"),
    );
    let cookie_header = state.cookie_header(cookies);
    if !cookie_header.trim().is_empty() {
        let cookie_value =
            HeaderValue::from_str(&cookie_header).map_err(|e| format!("Cookie 无效: {}", e))?;
        headers.insert(COOKIE, cookie_value);
    }

    let url = format!("https://live.douyin.com/{}", room_num);
    let response = state
        .client
        .get(url)
        .headers(headers)
        .send()
        .await
        .map_err(|e| format!("请求直播间页面失败: {}", e))?;
    let status = response.status();
    let html = response
        .text()
        .await
        .map_err(|e| format!("读取直播间页面失败: {}", e))?;

    if !status.is_success() {
        return Err(format!("请求直播间页面失败: HTTP {}", status));
    }

    Ok(html)
}

#[tauri::command]
pub async fn fetch_live_info(
    state: State<'_, Arc<HttpState>>,
    room_num: String,
    cookies: String,
) -> Result<LiveInfo, String> {
    let first_html = fetch_live_html_inner(&state, &room_num, &cookies).await?;
    if let Some(info) = parse_live_info(&first_html, &room_num) {
        return Ok(info);
    }

    let second_html = fetch_live_html_inner(&state, &room_num, &cookies).await?;
    parse_live_info(&second_html, &room_num).ok_or_else(|| "Get Live Info Error".to_string())
}

#[tauri::command]
pub async fn fetch_live_html(
    state: State<'_, Arc<HttpState>>,
    room_num: String,
    cookies: String,
) -> Result<String, String> {
    fetch_live_html_inner(&state, &room_num, &cookies).await
}

#[tauri::command]
pub async fn fetch_binary(
    state: State<'_, Arc<HttpState>>,
    url: String,
    cookies: String,
) -> Result<Vec<u8>, String> {
    state.ingest_webview_cookies(&cookies);
    let cookie_header = state.cookie_header(&cookies);
    let mut headers = HeaderMap::new();
    headers.insert(USER_AGENT, HeaderValue::from_static(UA));
    headers.insert(ORIGIN, HeaderValue::from_static("https://live.douyin.com"));
    headers.insert(
        REFERER,
        HeaderValue::from_static("https://live.douyin.com/"),
    );
    headers.insert(ACCEPT, HeaderValue::from_static("*/*"));
    headers.insert(
        ACCEPT_LANGUAGE,
        HeaderValue::from_static("zh-CN,zh;q=0.9,en;q=0.8"),
    );
    if !cookie_header.trim().is_empty() {
        let cookie_value =
            HeaderValue::from_str(&cookie_header).map_err(|e| format!("Cookie 无效: {}", e))?;
        headers.insert(COOKIE, cookie_value);
    }

    let response = state
        .client
        .get(url)
        .headers(headers)
        .send()
        .await
        .map_err(|e| format!("请求失败: {}", e))?;
    let status = response.status();
    let bytes = response
        .bytes()
        .await
        .map_err(|e| format!("读取响应失败: {}", e))?;
    if !status.is_success() {
        return Err(format!("请求失败: HTTP {}", status));
    }
    Ok(bytes.to_vec())
}

#[tauri::command]
pub async fn fetch_head(
    state: State<'_, Arc<HttpState>>,
    url: String,
    cookies: String,
    headers: HashMap<String, String>,
) -> Result<(), String> {
    state.ingest_webview_cookies(&cookies);
    let cookie_header = state.cookie_header(&cookies);
    let mut header_map = HeaderMap::new();
    header_map.insert(USER_AGENT, HeaderValue::from_static(UA));
    header_map.insert(ORIGIN, HeaderValue::from_static("https://live.douyin.com"));
    header_map.insert(
        REFERER,
        HeaderValue::from_static("https://live.douyin.com/"),
    );
    header_map.insert(ACCEPT, HeaderValue::from_static("*/*"));
    header_map.insert(
        ACCEPT_LANGUAGE,
        HeaderValue::from_static("zh-CN,zh;q=0.9,en;q=0.8"),
    );
    if !cookie_header.trim().is_empty() {
        let cookie_value =
            HeaderValue::from_str(&cookie_header).map_err(|e| format!("Cookie 无效: {}", e))?;
        header_map.insert(COOKIE, cookie_value);
    }
    for (key, value) in headers {
        let name =
            HeaderName::from_bytes(key.as_bytes()).map_err(|e| format!("请求头无效: {}", e))?;
        let value = HeaderValue::from_str(&value).map_err(|e| format!("请求头值无效: {}", e))?;
        header_map.insert(name, value);
    }

    let response = state
        .client
        .head(url)
        .headers(header_map)
        .send()
        .await
        .map_err(|e| format!("请求失败: {}", e))?;
    let status = response.status();
    if !status.is_success() {
        return Err(format!("请求失败: HTTP {}", status));
    }
    Ok(())
}
