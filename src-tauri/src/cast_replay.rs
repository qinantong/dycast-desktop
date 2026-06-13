use std::fs;
use std::path::PathBuf;

use serde::Serialize;

#[derive(Debug, Serialize)]
pub struct CastReplayReadResult {
    pub lines: Vec<String>,
    pub filename: String,
}

#[tauri::command]
pub async fn cast_replay_read() -> Result<Option<CastReplayReadResult>, String> {
    let path: Option<PathBuf> = tokio::task::spawn_blocking(move || {
        rfd::FileDialog::new()
            .add_filter("JSON Lines", &["jsonl"])
            .set_title("选择弹幕记录文件")
            .pick_file()
    })
    .await
    .map_err(|e| format!("打开文件对话框失败: {}", e))?;

    let Some(path) = path else {
        return Ok(None);
    };

    let content = fs::read_to_string(&path)
        .map_err(|e| format!("读取文件失败: {}", e))?;

    let filename = path
        .file_name()
        .map(|n| n.to_string_lossy().to_string())
        .unwrap_or_default();

    let lines: Vec<String> = content
        .lines()
        .map(|l| l.to_string())
        .collect();

    Ok(Some(CastReplayReadResult { lines, filename }))
}
