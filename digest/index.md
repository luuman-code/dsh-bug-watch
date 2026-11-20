# DSH Bug Watch — 2026-11-20

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 40

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
- [#13411](https://github.com/deepseek-ai/deepseek-harness/discussions/13411) **[Bug] Windows：在应用中打开 → 文件资源管理器 的窗口被建在屏幕外（物理 0x7FFF）/ Explorer window created outside every monitor**<br/>  分类：Q&A · 标签：— · 最近更新：2026-11-19

## 📝 仅报告 — 无人互动
- [#13857](https://github.com/deepseek-ai/deepseek-harness/discussions/13857) [Bug] dsh-session-projection-cache：installWritePath 缺少按 Session 的单飞写屏障与尾写合并，高频事件触发并发 flush 与 table.put 重入（0.2.2-rc.5）
- [#13856](https://github.com/deepseek-ai/deepseek-harness/discussions/13856) [Bug] dsh-client-ui-message-feedback：MessageFeedbackActions 的 Tooltip 固定 side="bottom"，悬停时遮挡下方消息操作区（0.2.2-rc.5）
- [#13836](https://github.com/deepseek-ai/deepseek-harness/discussions/13836) [Bug] 桌面端 0.2.2-rc.5 启动即崩溃：主进程 undici fetch 内置 Host 报 read ECONNRESET（每次必现）
- [#13833](https://github.com/deepseek-ai/deepseek-harness/discussions/13833) [Bug] Windows 沙箱：Everyone 可写的 Low 对象可以被任意工作区修改/删除（附最小复现）
- [#13851](https://github.com/deepseek-ai/deepseek-harness/discussions/13851) [Bug][Windows][Plugin Manager] Failed removal persists the deselection and then reports bundle-in-use for the bundle's own still-running row
- [#13273](https://github.com/deepseek-ai/deepseek-harness/discussions/13273) [Bug][Windows][HMR] 共享依赖目录迁移使已启用插件更新被 package-moved / bundle-in-use 阻塞
- [#13852](https://github.com/deepseek-ai/deepseek-harness/discussions/13852) [Bug]First file-lock acquisition can stall the event loop ~40 s
- [#12901](https://github.com/deepseek-ai/deepseek-harness/discussions/12901) [Bug] Parallel tool calls at a reused stream index are merged into one call, failing the turn
- [#12261](https://github.com/deepseek-ai/deepseek-harness/discussions/12261) [Bug][macOS] 0.2.2-rc.1 frameless window has no drag region — window cannot be moved by mouse (worked in 0.2.1-rc.5)
- [#13848](https://github.com/deepseek-ai/deepseek-harness/discussions/13848) [Bug][PTC] 完全权限下 run_code 连续 45 次因提权参数被拒，0.2.2-rc.5 仍可复现校验错误
- [#13834](https://github.com/deepseek-ai/deepseek-harness/discussions/13834) [Bug] 0.2.2-rc.5: legacy turn/end without `reason` breaks session loading (Cannot read properties of undefined, reading kind)
- [#8827](https://github.com/deepseek-ai/deepseek-harness/discussions/8827) [Bug] workflow 工具调用永不返回，父 Agent 卡死在 step/start 后无事件
- [#13831](https://github.com/deepseek-ai/deepseek-harness/discussions/13831) [Bug] pwsh 工具：cmd 风格 `\"` 转义在 PowerShell 下退化为 `rmdir /s /q \`
- [#13830](https://github.com/deepseek-ai/deepseek-harness/discussions/13830) [Bug] 桌面端主进程反复报 Error: setTypeOfService EINVAL（网络层异常未捕获）
- [#1557](https://github.com/deepseek-ai/deepseek-harness/discussions/1557) [bug]未分组行的无效加号仍在（0.2.0-rc.2 复核 + 一行修复）
- [#13730](https://github.com/deepseek-ai/deepseek-harness/discussions/13730) [Bug] 0.2.2-rc.5 desktop auto-update leaves official optional bundles at rc.3 — preflight disables session-query-sqlite, sessionController unavailable
- [#9086](https://github.com/deepseek-ai/deepseek-harness/discussions/9086) [BUG](windows沙箱问题)(DSH GUI模式)会话里跑在非「完全权限」模式在项目文件夹根目录生成Windows 强制完整性标签，导致二进制生成文件权限受限
- [#13516](https://github.com/deepseek-ai/deepseek-harness/discussions/13516) [Bug] DeepSeek Messages 适配器将工具参数 JSON 抖动当成错误
- [#13785](https://github.com/deepseek-ai/deepseek-harness/discussions/13785) Bug report: PowerShell console window flashes on Windows (DSH Desktop 44.7.0)
- [#13792](https://github.com/deepseek-ai/deepseek-harness/discussions/13792) [Bug] @deepseek-ai/dsh-experimental-session-search 0.2.1-alpha.2 breaks the workspace picker on DSH 0.2.2-rc.5
- [#13822](https://github.com/deepseek-ai/deepseek-harness/discussions/13822) [Bug] reasoning-only completed responses bypass EMPTY_RESPONSE retry in dsh-v0.2.1-rc.3
- [#13816](https://github.com/deepseek-ai/deepseek-harness/discussions/13816) [Bug Report] IMAGE_OFFLOAD_REQUIRED leaves a session unrecoverable: image-offload is mounted outside the agent scope
- [#12723](https://github.com/deepseek-ai/deepseek-harness/discussions/12723) [Bug] Assistant stream can stay silent indefinitely before the first content block — no first-token deadline, SSE heartbeats keep the idle watchdog alive
- [#4393](https://github.com/deepseek-ai/deepseek-harness/discussions/4393) [BUG] Web UI 崩溃:发消息后整个对话框消失 (NotFoundError: removeChild)
- [#11097](https://github.com/deepseek-ai/deepseek-harness/discussions/11097) [Bug] Adding a model through the catalog picker drops hand-declared fields (reasoningEfforts gone, no effort levels for custom providers)
- [#13802](https://github.com/deepseek-ai/deepseek-harness/discussions/13802) [Bug] SdkUserQuestionBridge exclusively claims user-questions/request for GUI-owned agents (0.2.2-rc.4/rc.5) — plugin/IM answerers never receive asks
- [#13806](https://github.com/deepseek-ai/deepseek-harness/discussions/13806) Bug: replaced stdio MCP servers keep running after a hot edit of mcp-manager config.servers
- [#13803](https://github.com/deepseek-ai/deepseek-harness/discussions/13803) [BUG]DeepSeek Messages: an illegal JSON escape inside one tool call rejects the whole response
- [#5630](https://github.com/deepseek-ai/deepseek-harness/discussions/5630) Bug: Chinese IME (Microsoft Pinyin) input corrupted in the Web GUI chat composer
- [#13797](https://github.com/deepseek-ai/deepseek-harness/discussions/13797) [Bug] Workspace Changes snapshots leave git-annex branch pointing to objects in a temporary store
- [#13788](https://github.com/deepseek-ai/deepseek-harness/discussions/13788) [Bug] 同一会话的后续追问会重复调用 skill 加载同一技能
- [#13783](https://github.com/deepseek-ai/deepseek-harness/discussions/13783) [Bug] Windows 10 Desktop 0.2.2-rc.5: Remote terminal rejects input with Unrecognized key: "typed"
- [#13780](https://github.com/deepseek-ai/deepseek-harness/discussions/13780) [Bug] 正文替换记录导致整轮 Token 用量消失
- [#10387](https://github.com/deepseek-ai/deepseek-harness/discussions/10387) [Bug] dsh-app-boot 0.2.1-rc.2：Profile 包里 require("punycode/") 导致导入崩溃（resolve.paths 返回 null）
- [#13776](https://github.com/deepseek-ai/deepseek-harness/discussions/13776) [Bug] workspace-changes 卡片把切换分支的差异误报为本次编辑文件
- [#6661](https://github.com/deepseek-ai/deepseek-harness/discussions/6661) [Bug] Python code runtime child process becomes orphaned high-CPU zombie on macOS after host exits
- [#13759](https://github.com/deepseek-ai/deepseek-harness/discussions/13759) [Bug] Dead WebSocket peers are never reaped while compressed frames keep flowing (write completion counts as heartbeat activity)
- [#13762](https://github.com/deepseek-ai/deepseek-harness/discussions/13762) [Bug] Desktop Sidebar Browser cannot launch Feishu device authorization
- [#11688](https://github.com/deepseek-ai/deepseek-harness/discussions/11688) [Bug] report: DeepSeek UI served in Arabic when browser locale is es-AR / es_AR

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-11-20T05:17:58.341Z_