# 弹幕重放功能设计

## 概述

支持将 JSONL 录制文件按原始时间间隔重放给 WebSocket 后端，用于测试弹幕互动逻辑。

## 数据模型

`DyMessage` 新增可选字段 `timestamp?: number`（`Date.now()` 毫秒）。录制时写入，重放时计算时间间隔。旧文件无此字段则回退为固定 200ms 间隔。

## 架构

```
选文件 → Replayer.load() → 解析 JSONL，计算间隔 → 用户点播放 → RelayCast 连接 WS → 按间隔逐条发送
                                                                        → ReplayPanel 显示进度
```

### 新增文件

- **`src/core/replayer.ts`** — 重放核心类：加载、调度、暂停/恢复/停止
- **`src/components/ReplayPanel.vue`** — 重放控制面板（悬浮层对话框）

### 改动文件

| 文件 | 改动 |
|------|------|
| `src/core/dycast.ts` | DyMessage 加 `timestamp?: number` |
| `src/views/IndexView.vue` | 录制入口加时间戳；左侧工具栏加重放按钮 |
| `src-tauri/src/cast_replay.rs` | 新增：Rust 命令 `cast_replay_read`（打开文件对话框 + 读文件） |
| `src-tauri/src/lib.rs` | 注册新模块和命令 |

## 重放控制

- Play：从文件开头或暂停位置开始发送
- Pause：暂停在当前消息位置
- Resume：从暂停位置继续
- Stop：停止并断开 WS 连接，重置状态

状态机：`IDLE → PLAYING ⇄ PAUSED → IDLE`

## Tauri 文件读取

新增 `cast_replay_read` 命令：
1. `rfd::FileDialog` 打开文件选择器（过滤 .jsonl）
2. `std::fs::read_to_string` 读取文件内容
3. 返回字符串给前端

## 浏览器文件读取

`showOpenFilePicker` + `FileReader.readAsText`

## 文件信息显示

加载成功后显示：文件名、消息总数、预计时长（hh:mm:ss）
