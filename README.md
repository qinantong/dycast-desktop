# dycast-desktop

dycast 的桌面端弹幕工具，用于连接抖音直播间、实时读取直播间弹幕与房间状态，并可将解析后的弹幕数据转发到外部 WebSocket 服务，方便接入弹幕互动、直播工具、数据采集与本地调试流程。

本项目最初 fork 自 [skmcj/dycast](https://github.com/skmcj/dycast)。感谢原作者所做的开源工作。

## 功能

- 输入抖音直播间房间号并连接直播间。
- 实时展示聊天、礼物、点赞、关注、进入直播间等弹幕消息。
- 展示直播间基础信息和在线状态。
- 支持断线重连，提升长时间运行稳定性。
- 支持将解析后的弹幕消息以 JSON 形式转发到 `ws://` 或 `wss://` 服务端。
- 支持将已接收弹幕保存为本地 JSON 文件。

## 技术栈

本项目是 Tauri 2 桌面应用，前后端分工如下：

- 桌面容器：Tauri 2
- 前端框架：Vue 3
- 构建工具：Vite 6
- 开发语言：TypeScript、Rust
- 样式：SCSS
- 虚拟列表：`vue-virtual-scroller`
- 数据处理：`pako`、自定义 protobuf 解析模型
- Rust 后端：负责 Tauri 命令、HTTP 请求、WebSocket 中继和桌面端运行能力

关键目录：

- `src/`：Vue 前端界面、弹幕解析、转发逻辑和工具函数。
- `src/core/dycast.ts`：直播间连接、弹幕消息解析和事件分发核心逻辑。
- `src/core/model.ts`：抖音直播弹幕相关 protobuf 结构的 TypeScript 解析模型。
- `src/platform/`：浏览器环境与 Tauri 环境的 HTTP / WebSocket 适配层。
- `src-tauri/`：Tauri 2 Rust 工程、桌面端配置和原生能力实现。
- `public/`：静态资源。

## 环境要求

请先安装以下环境：

- Node.js 22 或兼容版本
- npm
- Rust
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

1. 启动应用。
2. 在「房间号」输入框填写抖音直播间房间号。
3. 点击「连接」，等待应用获取直播间信息并建立弹幕连接。
4. 连接成功后，中间列表展示聊天和礼物弹幕，右侧列表展示点赞、关注、进入等其它消息。
5. 如需转发弹幕，在「WS地址」输入框填写外部 WebSocket 服务地址，例如 `ws://127.0.0.1:8080`，然后点击「转发」。
6. 如需保存弹幕，先断开直播间连接，再点击保存按钮导出 JSON 文件。

转发数据为 JSON 字符串，主要结构见 `src/core/dycast.ts` 中的 `DyMessage`、`CastUser`、`CastGift`、`LiveRoom` 等类型定义。

## 免责声明

本项目仅用于学习交流、桌面端工具开发和合法的直播辅助场景。请遵守相关平台规则、法律法规和数据使用边界。因不当使用造成的风险与后果由使用者自行承担。
