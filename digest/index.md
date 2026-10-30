# DSH Bug Watch — 2026-10-30

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 58

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
- [#11337](https://github.com/deepseek-ai/deepseek-harness/discussions/11337) **[Bug] Benign Chinese ops prompt → stream ends with stop reason "refusal" → client reports MALFORMED_RESPONSE (deepseek-flash)**<br/>  分类：Q&A · 标签：— · 最近更新：2026-10-30

## 📝 仅报告 — 无人互动
- [#10352](https://github.com/deepseek-ai/deepseek-harness/discussions/10352) [Bug Report] Linux 微信截图无法粘贴进 composer：剪贴板对 image/* 请求一律返回 BMP 字节（Arch + WeChat Linux AppImage）
- [#9112](https://github.com/deepseek-ai/deepseek-harness/discussions/9112) [Bug][Desktop][macOS] 窗口完全无法拖动：连标记了 data-window-drag 的 chrome 行也拖不动（0.2.0-rc.2 / Electron 44）
- [#11507](https://github.com/deepseek-ai/deepseek-harness/discussions/11507) [Bug][Desktop] 修改 cordis.patch.yml 触发热重载后，侧边栏会话与工作区整体消失（只剩当前会话，重启恢复）
- [#11506](https://github.com/deepseek-ai/deepseek-harness/discussions/11506) [Bug][Desktop] 44.7.0 启动后卡在「正在加载工作区」：workspaceController 服务不可用
- [#11504](https://github.com/deepseek-ai/deepseek-harness/discussions/11504) [Bug] session/list returns all sessions inline — 3.82MB / 2.8s server-side on 181 sessions
- [#11501](https://github.com/deepseek-ai/deepseek-harness/discussions/11501) [Bug][Windows][Desktop 0.2.1-rc.3] 主进程 0xC000041D 崩溃（Chromium Views tooltip 销毁重入 CHECK，RVA 0x34EDA67）
- [#7888](https://github.com/deepseek-ai/deepseek-harness/discussions/7888) [Bug] 桌面版预览版 win-x64 试用记录：装本地插件后冷启动崩、窗口按钮盖住右栏关闭、更新检查弹 EPIPE
- [#11496](https://github.com/deepseek-ai/deepseek-harness/discussions/11496) [Bug] @deepseek-ai/dsh-workspace-changes causes massive disk consumption and orphan residue leaks
- [#11492](https://github.com/deepseek-ai/deepseek-harness/discussions/11492) [Bug] 热重载后 sessionController 永久失效：session/cancel 报 gateway/service-unavailable，Turn 永久卡死
- [#11490](https://github.com/deepseek-ai/deepseek-harness/discussions/11490) [Bug] 桌面端“在应用中打开”对 Electron 应用(如 VS Code)启动失败: ELECTRON_RUN_AS_NODE 泄漏进启动环境
- [#10632](https://github.com/deepseek-ai/deepseek-harness/discussions/10632) [Bug] 桌面端每次启动新发一枚认证 cookie，约 70 次后请求头超过 16 KB，启动直接失败（431 → "Web authentication failed"）
- [#11483](https://github.com/deepseek-ai/deepseek-harness/discussions/11483) [Bug] headless exits 0 while a background workflow is still running (only subagent children are awaited)
- [#11433](https://github.com/deepseek-ai/deepseek-harness/discussions/11433) [Bug] cordis-tutorial 第 7 章缺 tool executor，照抄会报 TOOL_EXECUTOR_UNAVAILABLE
- [#11477](https://github.com/deepseek-ai/deepseek-harness/discussions/11477) [Bug] 内置充值页被「请刷新页面」弹窗卡死，无法完成充值（Windows 桌面版）
- [#9924](https://github.com/deepseek-ai/deepseek-harness/discussions/9924) [Bug] Desktop "Web authentication failed": stale dsh-auth-* cookies overflow the Host header limit (431)
- [#11482](https://github.com/deepseek-ai/deepseek-harness/discussions/11482) [Bug] Subagent model-selection policy is never recorded: firstLiveSeq is 5, not 0
- [#11481](https://github.com/deepseek-ai/deepseek-harness/discussions/11481) [Bug] 桌面端右侧栏浏览器无法完成 Google 登录：OAuth 弹窗被降级为标签页丢失 opener、WebAuthn/passkey 不可用、登录态不持久
- [#11471](https://github.com/deepseek-ai/deepseek-harness/discussions/11471) [Bug] WebSocket 会话被服务端反复关闭，前端「新建会话」死锁（Windows 11 / iOS / Android 全部实测复现）
- [#11480](https://github.com/deepseek-ai/deepseek-harness/discussions/11480) [Bug] 多行 $$…$$ 公式块闭符号在行尾时被吞到文末，文件预览整段变红
- [#8420](https://github.com/deepseek-ai/deepseek-harness/discussions/8420) [Bug] 桌面版：沙箱模式下所有命令派生失败（exit code 3221225794 / 0xC0000142），被迫开全盘权限才能工作
- [#7216](https://github.com/deepseek-ai/deepseek-harness/discussions/7216) [Bug][Windows] 每条命令都会闪一个可见的控制台窗口（launchWindowsJob 缺 windowsHide）
- [#11457](https://github.com/deepseek-ai/deepseek-harness/discussions/11457) [Bug] Sidebar file tab stays on "file not found" after a transient miss; re-clicking the same link reactivates the stale tab without retrying
- [#11475](https://github.com/deepseek-ai/deepseek-harness/discussions/11475) [Bug] 工具目录被整体替换后，请求把所有工具标成 defer_loading，DeepSeek 通道返回 400 且该对话永久不可用
- [#9796](https://github.com/deepseek-ai/deepseek-harness/discussions/9796) [Bug][Windows] 工作区中被盖上 Low 完整性标签的文件，走「打开方式」会弹出一个**不可见**的模态「打开文件 - 安全警告」，powershell 永久挂起
- [#11465](https://github.com/deepseek-ai/deepseek-harness/discussions/11465) [Bug] 一个工具的非法 JSON Schema 会让整个请求 400，界面静默空白，Agent 无法自救
- [#11397](https://github.com/deepseek-ai/deepseek-harness/discussions/11397) [Bug][Desktop 0.2.1-rc.3] Auth cookies accumulate across restarts, causing HTTP 431 and startup failure
- [#11223](https://github.com/deepseek-ai/deepseek-harness/discussions/11223) [Bug] Windows workspace-write: 0xC0000142 comes from the token default DACL naming a non-restricting capability SID (corrected; follow-up to #8991 / #8067)
- [#10966](https://github.com/deepseek-ai/deepseek-harness/discussions/10966) [Bug] open-in-app 无法启动 Electron 类应用（ELECTRON_RUN_AS_NODE 泄漏到子进程）
- [#11454](https://github.com/deepseek-ai/deepseek-harness/discussions/11454) [Bug] llm-pi-ai / anthropic-messages: selected reasoning effort is silently dropped unless compat.forceAdaptiveThinking is set per model
- [#11452](https://github.com/deepseek-ai/deepseek-harness/discussions/11452) [Bug] time-context：没有浏览器时区时，即使配置了 timeZone 也要求模型去问用户
- [#11404](https://github.com/deepseek-ai/deepseek-harness/discussions/11404) [Bug][Desktop 0.2.1-rc.3] sandboxed pwsh never runs: 0xC0000142 when the host process has no console
- [#11447](https://github.com/deepseek-ai/deepseek-harness/discussions/11447) [Bug] 已发送引用消息在短正文右侧出现多余留白
- [#2850](https://github.com/deepseek-ai/deepseek-harness/discussions/2850) [BUG] workspace-write sandbox breaks Schannel TLS in subprocesses (SEC_E_NO_CREDENTIALS)
- [#11444](https://github.com/deepseek-ai/deepseek-harness/discussions/11444) [bug]显示错误对话完成并输出结果后，对话上方任务提示框显示任务还再进行（实际已完成）
- [#11390](https://github.com/deepseek-ai/deepseek-harness/discussions/11390) [Bug] tok/s reading inflated by orders of magnitude on tool-call steps (decodeMs collapses to ~1ms)
- [#11442](https://github.com/deepseek-ai/deepseek-harness/discussions/11442) [bug]markdown 图片在正文中遮挡下一行文字（_imageButton 的 inline-block + vertical-align: middle）
- [#11443](https://github.com/deepseek-ai/deepseek-harness/discussions/11443) [Bug][Windows] minimal 预设挂载 PTY 版 shell(dsh-tool-pwsh-persistent)，在 workspace-write 下所有命令失败（SetNamedSecurityInfoW / Win32 5）
- [#11441](https://github.com/deepseek-ai/deepseek-harness/discussions/11441) [Bug] 20–90 s blackout after the first Web UI load: sync process.report.getReport() in the flock libc probe (0.2.1-rc.2, WSL2 + Clash DNS)
- [#11398](https://github.com/deepseek-ai/deepseek-harness/discussions/11398) [bug] anthropic-messages: tool-result pruning rewrites history without invalidating replayed thinking signatures
- [#11403](https://github.com/deepseek-ai/deepseek-harness/discussions/11403) [Bug] 工具返回的内联图片块让 Messages 适配器空引用崩溃，并被误报为 TRANSPORT（Desktop 0.2.1-rc.3）
- [#11378](https://github.com/deepseek-ai/deepseek-harness/discussions/11378) [Bug] Inline file links with Windows paths open wrong path: Markdown backslash escaping breaks _-prefixed segments; sidebar reports file-not-found
- [#11428](https://github.com/deepseek-ai/deepseek-harness/discussions/11428) [Bug] 两处 Windows 体验问题：盘符根目录无法作为工作区（EPERM mkdir），以及 permission 插件依赖 shell 沙箱导致三档开关整块消失
- [#11437](https://github.com/deepseek-ai/deepseek-harness/discussions/11437) [Bug] dsh cannot boot on distro-built Node: x64 getter decoder rejects a dead register clear (nixpkgs / GCC 16)
- [#11435](https://github.com/deepseek-ai/deepseek-harness/discussions/11435) [BUG] 搜索研究型任务-子agent会使用WEB_SEARCH偷跑token问题
- [#11283](https://github.com/deepseek-ai/deepseek-harness/discussions/11283) [Bug] dsh-client-ui-chat causes renderer main-thread freeze on startup (Windows, 0.2.1-rc.3)
- [#11432](https://github.com/deepseek-ai/deepseek-harness/discussions/11432) [Bug] Windows ACL sandbox: every child process dies with 0xC0000142 in workspace-write mode
- [#6964](https://github.com/deepseek-ai/deepseek-harness/discussions/6964) [Bug] claimed 的输入在 prepareRequest 抛错时会永久丢失：本机 154 份存档里 14 例
- [#11427](https://github.com/deepseek-ai/deepseek-harness/discussions/11427) [Bug] Windows PowerShell 5.1 fallback: Get-Content decodes BOM-less UTF-8 as ANSI, so ENCODING_PREAMBLE fixes output but not input
- [#11425](https://github.com/deepseek-ai/deepseek-harness/discussions/11425) [Bug] Windows Desktop 0.2.1-rc.3 启动失败：agent-loop 缺少 agents/tools，彻底重装仍复现
- [#11421](https://github.com/deepseek-ai/deepseek-harness/discussions/11421) [Bug] 社区插件带入的旧版 Web UI 组件抢先加载，导致 Desktop 图标按钮消失
- [#9936](https://github.com/deepseek-ai/deepseek-harness/discussions/9936) [Bug] Desktop profile 上插件市场更新任何插件都失败：install_bundle 因 HMR 可用而拒绝已安装包（already-installed）
- [#11416](https://github.com/deepseek-ai/deepseek-harness/discussions/11416) [Bug] Windows 桌面版 0.2.1-rc.2→rc.3 更新后启动即崩溃 0x80000003（非系统盘安装路径）
- [#11415](https://github.com/deepseek-ai/deepseek-harness/discussions/11415) [Bug] 同名插件行换包后宿主模块图残留旧 client 条目直至重启；新旧共现时 web boot 卡死（0.2.1-rc.2 实测，至 rc.4 未修）
- [#11409](https://github.com/deepseek-ai/deepseek-harness/discussions/11409) [Bug] DSH 0.2.1-rc.3：崩溃恢复清空插件配置 / 多 agent 共享注册层 / dsh-tools 双副本导致所有工具调用失败
- [#11380](https://github.com/deepseek-ai/deepseek-harness/discussions/11380) [Bug] Desktop Host aborts with SIGABRT (exit 134) at the ~4 GB V8 heap ceiling; restored long sessions reach it during startup
- [#11407](https://github.com/deepseek-ai/deepseek-harness/discussions/11407) [Bug] pi-ai silently clamps output to 1 token well below the real context limit (official DeepSeek API reproduction)
- [#9610](https://github.com/deepseek-ai/deepseek-harness/discussions/9610) [Bug] Desktop: main window stays hidden indefinitely when Host startup stalls — no timeout, no feedback, tray "Open" does nothing

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-10-30T03:58:42.755Z_