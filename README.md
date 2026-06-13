# Dycast Desktop

Dycast Desktop（dycast-desktop）是一个基于 [skmcj/dycast](https://github.com/skmcj/dycast) 独立维护的 Tauri 桌面端弹幕工具，用于连接抖音直播间、实时读取直播间弹幕与房间状态，并可将解析后的弹幕数据转发到外部 WebSocket 服务，方便接入弹幕互动、直播工具、数据采集与本地调试流程。

## 功能

- **直播连接**：输入抖音直播间房间号并连接直播间，支持心跳检测（10s 间隔）和消息健康度探测，不活跃时自动重连（最多 3 次）。
- **消息展示**：实时展示聊天、礼物、点赞、关注、进入直播间、粉丝团、房间榜单等全类型弹幕消息；聊天消息支持 @提及、Emoji 图片渲染；列表支持按消息类型筛选显示。
- **直播间信息**：展示房间封面、主播头像昵称、在线人数、点赞数、关注数等基础信息。
- **SidTool 登录**：支持导入抖音 `sessionid` 进行认证登录，登录后可接收礼物等需要鉴权的消息。
- **WebSocket 转发**：将弹幕以 JSON 格式实时转发到 `ws://` 或 `wss://` 服务端，支持按消息类型过滤。
- **JSONL 录制**：将弹幕实时记录到本地 `.jsonl` 文件，支持按消息类型过滤，记录数实时显示。
- **暗色/亮色主题**：支持一键切换暗色和亮色主题，设置持久化。
- **自动更新**：集成 Tauri updater，启动时自动检查 GitHub 新版本，支持一键下载安装重启。
- **断线自动重连**：网络波动、下播等异常断开时自动尝试重连，重连次数超限后停止。
- **设置持久化**：记住房间号、转发地址、消息过滤配置、主题偏好等，下次启动自动恢复。

## 技术栈

本项目是 Tauri 2 桌面应用，前后端分工如下：

- 桌面容器：Tauri 2
- 前端框架：Vue 3（`<script setup lang="ts">`）
- 构建工具：Vite 6
- 开发语言：TypeScript、Rust
- 样式：SCSS（CSS 自定义属性主题系统）
- 虚拟列表：`vue-virtual-scroller`
- 数据处理：原生 `DecompressionStream` / `pako` 后备、自定义 protobuf 解析模型
- 消息去重：Snowflake ID + 去重队列
- 状态管理：响应式代理（无 Pinia/Vuex），localStorage 持久化
- 通知系统：自定义 SkMessage 轻提示组件
- 后端 Rust：Tauri 命令、reqwest HTTP（共享 webview cookie jar）、tokio-tungstenite WebSocket 中继、BufWriter 文件录制

关键目录：

- `src/`：Vue 前端界面、弹幕解析、转发逻辑和工具函数。
- `src/core/dycast.ts`：直播间连接、心跳、重连、弹幕消息解析和事件分发核心逻辑。
- `src/core/model/`：抖音直播弹幕相关 protobuf 结构的 TypeScript 解析模型（懒加载）。
- `src/platform/`：浏览器环境与 Tauri 环境的 HTTP / WebSocket 适配层。
- `src-tauri/`：Tauri 2 Rust 工程、桌面端配置和原生能力实现。
- `public/`：静态资源。

## 环境要求

请先安装以下环境：

- Node.js 22 或兼容版本
- npm
- Rust 1.77.2+
- Tauri 2 所需系统依赖

Tauri 环境安装可参考官方文档：[Tauri prerequisites](https://v2.tauri.app/start/prerequisites/)

## 开发运行

安装前端依赖：

```sh
npm install
```

启动 Tauri 桌面端开发模式：

```sh
npm run tauri-dev
```

仅启动 Web 前端调试：

```sh
npm run dev
```

仅 Web 前端模式主要用于界面和基础逻辑调试。完整桌面能力请使用 `npm run tauri-dev`。

## 构建

构建前端资源：

```sh
npm run build
```

构建桌面端安装包：

```sh
npm run tauri-build
```

构建产物位于：

- Windows / macOS / Linux 可执行文件：`src-tauri/target/release/`
- 安装包：`src-tauri/target/release/bundle/`

具体产物类型取决于当前操作系统和 Tauri bundle 配置。

## 使用方式

1. **启动应用**。
2. **登录（可选）**：点击左侧工具栏的 SidTool 按钮，粘贴抖音 `sessionid` Cookie 值完成认证。登录后可接收礼物消息等需要鉴权的数据类型。
3. **连接直播间**：在「房间号」输入框填写抖音直播间房间号，点击「连接」。
4. **实时查看**：连接成功后，中间列展示聊天和礼物弹幕，右侧列展示点赞、关注、进入等其他消息。每列顶部按钮可切换消息类型筛选。
5. **WebSocket 转发**：在「WS地址」输入框填写外部服务地址（如 `ws://127.0.0.1:8080`），点击「转发」。可前往设置面板筛选要转发和忽略的消息类型。
6. **记录弹幕**：点击左侧工具栏的记录按钮，选择 `.jsonl` 文件保存位置；再次点击停止记录。记录按钮会实时显示已记录的消息条数。
7. **设置**：点击左下角齿轮按钮打开设置面板，可配置：
   - 自动检查更新
   - 记住房间号 / 转发地址
   - 暗色 / 亮色主题
   - 转发消息类型过滤
   - 录制消息类型过滤
   - 手动检查更新

### WebSocket 转发数据结构

转发端每次发送的是一个 WebSocket text message，内容是一段 JSON 字符串。接收端需要先 `JSON.parse`，解析后有两类数据：

- 连接转发成功后先发送一次直播间信息对象 `DyLiveInfo`。
- 后续每次收到弹幕批次时发送一个数组 `DyMessage[]`，数组里可能包含多条消息，也可能包含不同 `method` 类型的消息。

接收端可用 `Array.isArray(payload)` 区分两类数据。

直播间信息对象结构：

```ts
interface DyLiveInfo {
  roomNum?: string;
  roomId: string;
  uniqueId: string;
  avatar: string;
  cover: string;
  nickname: string;
  title: string;
  status: number;
}
```

弹幕批次结构。注意：一次 WebSocket message 对应一个消息数组，不是一条单独弹幕；接收端应遍历数组逐条处理。

```ts
type RelayMessagePayload = DyMessage[];

interface DyMessage {
  id?: string;
  method?: CastMethod;
  user?: CastUser;
  toUser?: CastUser;
  gift?: CastGift;
  content?: string;
  rtfContent?: CastRtfContent[];
  room?: LiveRoom;
  rank?: LiveRankItem[];
}

interface CastUser {
  id?: string;
  name?: string;
  avatar?: string;
  gender?: number;
}

interface CastGift {
  id?: string;
  name?: string;
  price?: number;
  type?: number;
  desc?: string;
  icon?: string;
  count?: number | string;
  repeatEnd?: number;
}

interface LiveRoom {
  audienceCount?: number | string;
  likeCount?: number | string;
  followCount?: number | string;
  totalUserCount?: number | string;
  status?: number;
}

interface LiveRankItem {
  nickname: string;
  avatar: string;
  rank: number | string;
}
```

常见 `method` 值：

| method | 含义 | 常见字段 |
| --- | --- | --- |
| `WebcastChatMessage` | 聊天弹幕 | `user`、`content`、`rtfContent` |
| `WebcastEmojiChatMessage` | 表情弹幕 | `user`、`content` |
| `WebcastGiftMessage` | 礼物消息 | `user`、`toUser`、`gift` |
| `WebcastLikeMessage` | 点赞消息 | `user`、`content`、`room.likeCount` |
| `WebcastMemberMessage` | 用户进入直播间 | `user`、`content`、`room.audienceCount` |
| `WebcastSocialMessage` | 关注消息 | `user`、`content`、`room.followCount` |
| `WebcastRoomUserSeqMessage` | 在线人数和榜单 | `room.audienceCount`、`room.totalUserCount`、`rank` |
| `WebcastRoomRankMessage` | 直播间排行榜 | `rank` |
| `WebcastRoomStatsMessage` | 房间统计 | `room.audienceCount` |
| `WebcastFansclubMessage` | 粉丝团消息 | `user`、`content` |
| `WebcastControlMessage` | 房间状态控制 | `content`、`room.status` |

示例：

```json
[
  {
    "id": "7649725134995427337",
    "method": "WebcastMemberMessage",
    "user": {
      "id": "MS4wLjABAAAA...",
      "name": "之乎者也",
      "avatar": "https://p11.douyinpic.com/..."
    },
    "content": "进入直播间",
    "room": {
      "audienceCount": "21497"
    }
  },
  {
    "id": "7649725129967285311",
    "method": "WebcastChatMessage",
    "user": {
      "id": "MS4wLjABAAAA...",
      "name": "吃柠檬",
      "gender": 1,
      "avatar": "https://p11.douyinpic.com/..."
    },
    "content": "点点关注，点点赞"
  }
]
```

Python 接收示例：

```py
import json

async for message in websocket:
    payload = json.loads(message)
    if isinstance(payload, list):
        for item in payload:
            print(item.get("method"), item.get("content"))
    else:
        print("live info:", payload.get("roomNum"), payload.get("title"))
```

记录文件为 JSON Lines 格式，即每行一条弹幕 JSON。

## 弹幕记录与内存策略

为保证长时间运行稳定性，界面弹幕列表只保留最近消息，因此应用不会在内存中默认保存全量弹幕。

需要长期保存弹幕时，请使用记录功能。记录开启后，应用会将接收到的弹幕按批追加写入本地 `.jsonl` 文件，而不是累积在前端内存中。JSONL 文件可用文本编辑器逐行查看，也便于后续用脚本、数据库或数据分析工具处理。

## Changelog

版本历史请查看 [CHANGELOG.md](./CHANGELOG.md)，由 [git-cliff](https://github.com/orhun/git-cliff) 基于 git 提交记录自动生成。

## 免责声明

本项目仅用于学习交流、桌面端工具开发和合法的直播辅助场景。请遵守相关平台规则、法律法规和数据使用边界。因不当使用造成的风险与后果由使用者自行承担。
