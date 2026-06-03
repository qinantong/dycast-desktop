use std::collections::HashMap;
use std::sync::{Arc, Mutex};

use base64::Engine;
use futures_util::{SinkExt, StreamExt};
use serde::{Deserialize, Serialize};
use tauri::{AppHandle, Emitter};
use tokio::sync::mpsc;
use tokio_tungstenite::connect_async;
use tokio_tungstenite::tungstenite::client::IntoClientRequest;
use tokio_tungstenite::tungstenite::http::header::{COOKIE, ORIGIN, REFERER, USER_AGENT};
use tokio_tungstenite::tungstenite::{Error as WsError, Message};

use crate::live_info::HttpState;

type WsSender = mpsc::UnboundedSender<Message>;
type WsCloseSignal = mpsc::Sender<()>;

pub struct WsState {
    connections: HashMap<u64, (WsSender, WsCloseSignal)>,
    next_id: u64,
}

impl WsState {
    pub fn new() -> Self {
        Self {
            connections: HashMap::new(),
            next_id: 1,
        }
    }
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct WsMessagePayload {
    pub id: u64,
    pub data: String,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct WsEventPayload {
    pub id: u64,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct WsClosePayload {
    pub id: u64,
    pub code: u16,
    pub reason: String,
}

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct WsErrorPayload {
    pub id: u64,
    pub error: String,
}

const UA: &str =
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36";

#[tauri::command]
pub async fn ws_connect(
    app: AppHandle,
    state: tauri::State<'_, Arc<Mutex<WsState>>>,
    http_state: tauri::State<'_, Arc<HttpState>>,
    url: String,
    cookies: String,
) -> Result<u64, String> {
    let cookie_header = http_state.cookie_header(&cookies);
    let parsed_url = url::Url::parse(&url).map_err(|e| format!("WebSocket URL 无效: {}", e))?;
    let request_url = parsed_url.as_str();
    let mut request = request_url
        .into_client_request()
        .map_err(|e| format!("构建请求失败: {}", e))?;
    let headers = request.headers_mut();
    headers.insert(
        USER_AGENT,
        UA.parse().map_err(|e| format!("User-Agent 无效: {}", e))?,
    );
    headers.insert(
        ORIGIN,
        "https://live.douyin.com"
            .parse()
            .map_err(|e| format!("Origin 无效: {}", e))?,
    );
    headers.insert(
        REFERER,
        "https://live.douyin.com/"
            .parse()
            .map_err(|e| format!("Referer 无效: {}", e))?,
    );
    if !cookie_header.is_empty() {
        headers.insert(
            COOKIE,
            cookie_header
                .parse()
                .map_err(|e| format!("Cookie 无效: {}", e))?,
        );
    }

    let (ws_stream, _response) = connect_async(request).await.map_err(|e| match e {
        WsError::Http(response) => format!("WebSocket 连接失败: HTTP {}", response.status()),
        other => format!("WebSocket 连接失败: {}", other),
    })?;

    let (mut write, mut read) = ws_stream.split();
    let (send_tx, mut send_rx) = mpsc::unbounded_channel::<Message>();
    let (close_tx, mut close_rx) = mpsc::channel::<()>(1);

    let id = {
        let mut state = state.lock().map_err(|e| e.to_string())?;
        let id = state.next_id;
        state.next_id += 1;
        state
            .connections
            .insert(id, (send_tx.clone(), close_tx.clone()));
        id
    };

    app.emit("ws-open", WsEventPayload { id }).ok();

    let state_clone = Arc::clone(state.inner());
    let app_clone = app.clone();

    tokio::spawn(async move {
        let b64 = base64::engine::general_purpose::STANDARD;
        loop {
            tokio::select! {
                msg = read.next() => {
                    match msg {
                        Some(Ok(Message::Binary(data))) => {
                            let encoded = b64.encode(&data);
                            app_clone.emit("ws-message", WsMessagePayload { id, data: encoded }).ok();
                        }
                        Some(Ok(Message::Text(text))) => {
                            let encoded = b64.encode(text.as_bytes());
                            app_clone.emit("ws-message", WsMessagePayload { id, data: encoded }).ok();
                        }
                        Some(Ok(Message::Close(frame))) => {
                            let payload = if let Some(f) = frame {
                                WsClosePayload { id, code: f.code.into(), reason: f.reason.to_string() }
                            } else {
                                WsClosePayload { id, code: 1005, reason: String::new() }
                            };
                            app_clone.emit("ws-close", payload).ok();
                            break;
                        }
                        Some(Ok(Message::Ping(data))) => {
                            let _ = send_tx.send(Message::Pong(data));
                        }
                        Some(Ok(Message::Pong(_))) | Some(Ok(Message::Frame(_))) => {}
                        Some(Err(e)) => {
                            app_clone.emit("ws-error", WsErrorPayload { id, error: e.to_string() }).ok();
                            break;
                        }
                        None => {
                            app_clone.emit("ws-close", WsClosePayload {
                                id, code: 1006, reason: "连接异常关闭".to_string()
                            }).ok();
                            break;
                        }
                    }
                }
                _ = close_rx.recv() => {
                    let _ = write.send(Message::Close(None)).await;
                    break;
                }
                msg = send_rx.recv() => {
                    match msg {
                        Some(msg) => {
                            if let Err(e) = write.send(msg).await {
                                app_clone.emit("ws-error", WsErrorPayload {
                                    id, error: format!("发送失败: {}", e)
                                }).ok();
                                break;
                            }
                        }
                        None => break,
                    }
                }
            }
        }

        let _ = write.close().await;
        let mut state = state_clone.lock().unwrap();
        state.connections.remove(&id);
    });

    Ok(id)
}

#[tauri::command]
pub async fn ws_send(
    state: tauri::State<'_, Arc<Mutex<WsState>>>,
    id: u64,
    data: Vec<u8>,
) -> Result<(), String> {
    let sender = {
        let state = state.lock().map_err(|e| e.to_string())?;
        state
            .connections
            .get(&id)
            .map(|(s, _)| s.clone())
            .ok_or_else(|| format!("连接 {} 未找到", id))?
    };
    sender
        .send(Message::Binary(data.into()))
        .map_err(|e| format!("发送失败: {}", e))?;
    Ok(())
}

#[tauri::command]
pub async fn ws_close(state: tauri::State<'_, Arc<Mutex<WsState>>>, id: u64) -> Result<(), String> {
    let (sender, close_signal) = {
        let state = state.lock().map_err(|e| e.to_string())?;
        state
            .connections
            .get(&id)
            .map(|(s, c)| (s.clone(), c.clone()))
            .ok_or_else(|| format!("连接 {} 未找到", id))?
    };
    // Signal close to the read task
    close_signal.send(()).await.ok();
    // Also send close frame to the server
    sender.send(Message::Close(None)).ok();
    Ok(())
}
