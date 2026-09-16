# DSH Bug Watch — 2026-09-16

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 39

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
- [#3786](https://github.com/deepseek-ai/deepseek-harness/discussions/3786) **[Bug] npx @deepseek-ai/dsh web 无限卡死：npm 依赖解析死循环（CPU 100%、零网络流量、换镜像无效）**<br/>  分类：General · 标签：— · 最近更新：2026-09-15

## 👥 社区参与 — 已采纳答案，作者非 committer
_（无）_

## 📝 仅报告 — 无人互动
- [#6799](https://github.com/deepseek-ai/deepseek-harness/discussions/6799) [Bug] Optional Playwright MCP startup failure aborts Session create/resume and removes the Session from Web UI
- [#6754](https://github.com/deepseek-ai/deepseek-harness/discussions/6754) [Bug][Feature] 0.1.6 默认开启的 dsh_session_log 会让大型会话每次请求携带完整日志（本例 ~260 MiB）导致 TRANSPORT 死循环；建议改为默认关闭 + 首次启动显式征得同意
- [#6797](https://github.com/deepseek-ai/deepseek-harness/discussions/6797) [Bug] Compaction summarization always fails with thinking models — default maxTokens=8192 is consumed by reasoning tokens
- [#6788](https://github.com/deepseek-ai/deepseek-harness/discussions/6788) [Bug] v0.1.6-alpha.1: computer-use packages missing dsh.bundle break profile boot
- [#6789](https://github.com/deepseek-ai/deepseek-harness/discussions/6789) [Bug] v0.1.6-alpha.1: "only one session can stay in browser" bug - by browser-use with attach mode
- [#6478](https://github.com/deepseek-ai/deepseek-harness/discussions/6478) [Bug] Gemini compaction uses unsupported MINIMAL thinking level and ends in context overflow
- [#6781](https://github.com/deepseek-ai/deepseek-harness/discussions/6781) [Bug] Android APK: ZodError in workspace.json (updatedAt) blocks app startup after user-initiated stop — sessions locked
- [#423](https://github.com/deepseek-ai/deepseek-harness/discussions/423) [Bug Report] Windows 工作区：连接后外部创建/移入的子目录永远无法写入（capability ACE 永不补授）
- [#6777](https://github.com/deepseek-ai/deepseek-harness/discussions/6777) [Bug] v0.1.6-alpha.1 Web 侧边栏终端（Windows）：① 选区 Ctrl+C 触发中断而非复制 ② 受限权限模式下 PSReadLine 历史文件 Access denied，终端不可用
- [#6769](https://github.com/deepseek-ai/deepseek-harness/discussions/6769) [Bug] Official Agent Team profile makes ACP `session/new` fail during JSONL persistence flush
- [#6767](https://github.com/deepseek-ai/deepseek-harness/discussions/6767) [Bug] Android/Termux：会话写入失败 — flock is not supported on android-arm64
- [#6763](https://github.com/deepseek-ai/deepseek-harness/discussions/6763) [Bug] Compatibility hooks 会丢失当前 session 的 sandbox policy
- [#2929](https://github.com/deepseek-ai/deepseek-harness/discussions/2929) [Bug] ask_user_question hangs indefinitely when no tab renders the question — no timeout; manual stop surfaces misleading ASK_ABORTED
- [#5926](https://github.com/deepseek-ai/deepseek-harness/discussions/5926) [Bug] connection fails to start when a third-party plugin registers an HTTP channel: cannot get property 'webServer' without inject
- [#6755](https://github.com/deepseek-ai/deepseek-harness/discussions/6755) [Bug]0.1.6-aplha.1，MCP 工具重名会让会话恢复失败：failOnStartupError 把可容纳的错误升级成了致命错误
- [#6751](https://github.com/deepseek-ai/deepseek-harness/discussions/6751) [Bug] 空白新会话切换 Agent Preset 后，新 preset 的 modelSelectionSettings 型 delegation 工具完全未安装（subagent / list_subagent_models 缺失）
- [#6747](https://github.com/deepseek-ai/deepseek-harness/discussions/6747) [Bug] Responses tool argument streaming saturates CPU and blocks the event loop (pi-ai 0.85.1; runnable repro)
- [#6737](https://github.com/deepseek-ai/deepseek-harness/discussions/6737) [Bug] web_fetch 在 fake-ip（198.18.0.0/15）环境下对所有站点都抛 WEB_BLOCKED_URL，且无配置可放宽地址预检
- [#6733](https://github.com/deepseek-ai/deepseek-harness/discussions/6733) [Bug] dsh-web-fetch-http：connect EACCES 时未处理的 'error' 事件导致整个 dsh 进程崩溃（Windows）
- [#6726](https://github.com/deepseek-ai/deepseek-harness/discussions/6726) [BUG]手机浏览器无法预览文件：文件预览在部分厂商浏览器上失效（new URL().hostname 解析不出非特殊 scheme 的 host）
- [#6723](https://github.com/deepseek-ai/deepseek-harness/discussions/6723) [Bug] (多人提及) dsh web 恢复会话后主线程常驻 ~100%：preset 挂载失败被 cordis 无限重放，roster 健康扫描不缓存将其放大
- [#6061](https://github.com/deepseek-ai/deepseek-harness/discussions/6061) [Bug] 桌面端（dev:desktop / 打包版）在 macOS 上 ⌘V 粘贴失效，导致无法输入 API Key 配置模型
- [#6714](https://github.com/deepseek-ai/deepseek-harness/discussions/6714) [Bug][Windows] Confined grandchildren with piped stdio fail with `EACCES` and raise a desktop `0xC0000142` hard-error dialog
- [#6688](https://github.com/deepseek-ai/deepseek-harness/discussions/6688) [Bug] Harness 界面 Token 统计严重偏低，实际账单 12 分钟扣费 50+ 元，请核查并优化
- [#6661](https://github.com/deepseek-ai/deepseek-harness/discussions/6661) [Bug] Python code runtime child process becomes orphaned high-CPU zombie on macOS after host exits
- [#6082](https://github.com/deepseek-ai/deepseek-harness/discussions/6082) [Bug] 0.1.5-alpha.2: published dsh-client-store omits Zustand/Immer runtime dependencies
- [#6715](https://github.com/deepseek-ai/deepseek-harness/discussions/6715) [Bug] Desktop packaging always fails at prepare:dsh: runtime payload smoke still requires fs-ext, removed in d927cbff99
- [#3985](https://github.com/deepseek-ai/deepseek-harness/discussions/3985) [BUG] 代理环境下 LLM API 请求全部失败：Node fetch (undici) 不读取 HTTP_PROXY/HTTPS_PROXY 环境变量
- [#6680](https://github.com/deepseek-ai/deepseek-harness/discussions/6680) Bug: dsh plugin add 会静默安装 host peer 范围无法满足的插件(dsh-win32 实测,零 warning)
- [#6708](https://github.com/deepseek-ai/deepseek-harness/discussions/6708) [Bug] 任务结束了，但是任务清单没有结束，刷新也不变，需要主动让AI结束
- [#6705](https://github.com/deepseek-ai/deepseek-harness/discussions/6705) [Bug] Windows "reveal in file manager" on delivery cards silently no-ops: explorer.exe /select receives a file:/// URL instead of a path
- [#6702](https://github.com/deepseek-ai/deepseek-harness/discussions/6702) [Bug] macOS: npm install -g @deepseek-ai/dsh@0.1.6-alpha.1 aborts in koffi (ld: symbol(s) not found for architecture x86_64) — a stale @koromix/koffi-darwin-x64 forces a source build
- [#6629](https://github.com/deepseek-ai/deepseek-harness/discussions/6629) [Bug] Windows: "Reveal in File Explorer" silently fails - two causes: percent-encoded file:// URL AND windowsHide: true hiding explorer's own window
- [#6692](https://github.com/deepseek-ai/deepseek-harness/discussions/6692) [Bug] dsh 在 Node 24 上静默退出(import.meta.main 已被移除)
- [#6694](https://github.com/deepseek-ai/deepseek-harness/discussions/6694) [Bug] Updating dsh while an instance is running corrupts the install tree (EPERM on conpty.node), after which dsh web never starts again
- [#6684](https://github.com/deepseek-ai/deepseek-harness/discussions/6684) [Bug] Web GUI session view goes blank during an active turn (v3 session format) — reproduced on 0.1.5-rc.2, not on 0.1.2-rc.1
- [#5673](https://github.com/deepseek-ai/deepseek-harness/discussions/5673) Bug: LLM requests die at ~302s with `terminated` when a provider needs >5min silent prefill
- [#3112](https://github.com/deepseek-ai/deepseek-harness/discussions/3112) Bug: read tcp 错误被误分类为 PI_AI_ERROR，导致 session 直接终止

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-09-16T02:47:30.956Z_