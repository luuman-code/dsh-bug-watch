# DSH Bug Watch — 2026-09-20

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 40

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
- [#4664](https://github.com/deepseek-ai/deepseek-harness/discussions/4664) **[Bug]？ goal 功能开启后 agent 无法被动等待后台任务：每次进入 idle 即被强制注入 <goal_round>，空转消耗轮次与 token**<br/>  分类：Q&A · 标签：— · 最近更新：2026-09-19
- [#7134](https://github.com/deepseek-ai/deepseek-harness/discussions/7134) **[Bug] DSH桌面版 0.1.0-rc.6 自定义中转站 DeepSeek V4 调用工具报 400 错误**<br/>  分类：Q&A · 标签：— · 最近更新：2026-09-19

## 📝 仅报告 — 无人互动
- [#7223](https://github.com/deepseek-ai/deepseek-harness/discussions/7223) [Bug] Tool call fails with "prepare" undefined on fresh install
- [#7219](https://github.com/deepseek-ai/deepseek-harness/discussions/7219) [Bug] Since dsh-v0.1.6-alpha.2 every tool call fails under `pnpm dsh` source launch: `Cannot read properties of undefined (reading 'prepare')`
- [#1299](https://github.com/deepseek-ai/deepseek-harness/discussions/1299) [Bug] 超大工具调用导致会话历史加载失败：RangeError: Maximum call stack size exceeded（paginate 展开 sourceEventSeqs）
- [#7213](https://github.com/deepseek-ai/deepseek-harness/discussions/7213) [Bug] llm-pi-ai silently resolves an unconfigured route to a 262144 context window while the provider declares 1048576
- [#7014](https://github.com/deepseek-ai/deepseek-harness/discussions/7014) BUG: 冷启动会话列表里，分叉（fork）会话的标题退化成目录名、时间退化成创建时间
- [#7216](https://github.com/deepseek-ai/deepseek-harness/discussions/7216) [Bug][Windows] 每条命令都会闪一个可见的控制台窗口（launchWindowsJob 缺 windowsHide）
- [#7154](https://github.com/deepseek-ai/deepseek-harness/discussions/7154) [Bug] 沙箱升级"死选项"：广告的 sandbox_permissions 目标等于当前模式时必然抛错，且切换模式无法自愈（会话无法写盘）
- [#7215](https://github.com/deepseek-ai/deepseek-harness/discussions/7215) [Bug] Turns whose final assistant message has no text block render no branch or copy actions at all
- [#7214](https://github.com/deepseek-ai/deepseek-harness/discussions/7214) [Bug] A length stop with one output token escapes overflow detection, so a dead session never recovers and continue is a no-op
- [#7212](https://github.com/deepseek-ai/deepseek-harness/discussions/7212) [Bug] Compaction selects its own previous checkpoint as the whole span, so a long session never converges (59/79 attempts rejected, 44.6 min burned)
- [#7210](https://github.com/deepseek-ai/deepseek-harness/discussions/7210) [Bug][0.1.5-rc.2 + 0.1.6-alpha.2] Web 发送链静默挂起：prompt 类 unary RPC 无 deadline，传输挂起时 echo 永不退场（#2060 的翻转面）
- [#7208](https://github.com/deepseek-ai/deepseek-harness/discussions/7208) [BUG] High CPU usage in web while pending,  `dsh-client-ui-tool`: row sweeps ignore prefers-reduced-motion and dominate paint while a turn streams
- [#201](https://github.com/deepseek-ai/deepseek-harness/discussions/201) [BUG] spamming Error: sandbox escalation to "workspace-write" is not strictly wider than this call's current "danger-full-access" mode
- [#7206](https://github.com/deepseek-ai/deepseek-harness/discussions/7206) Bug: settings UI unavailable on --trusted-host deployments (web behind tunnel/reverse proxy)
- [#7204](https://github.com/deepseek-ai/deepseek-harness/discussions/7204) Bug report + fix: an unclosed `$$` block turns the rest of a reply into one failing formula
- [#5787](https://github.com/deepseek-ai/deepseek-harness/discussions/5787) [Bug] Markdown table: overflow is decided by column count, and the scrollbar is hidden until hover so wide columns become unreachable
- [#3018](https://github.com/deepseek-ai/deepseek-harness/discussions/3018) Bug report: changing the default agent preset does not apply when a workspace reuses an existing blank session
- [#4549](https://github.com/deepseek-ai/deepseek-harness/discussions/4549) [Bug] Scheduler failure leaves dangling tool/call — session permanently returns 400 INVALID_REQUEST (fix: append only the missing tool/result, #4017 follow-up)
- [#6427](https://github.com/deepseek-ai/deepseek-harness/discussions/6427) [Bug][性能] 0.1.5-rc.2 Web UI 空闲态主线程占用约 50%、布局约 144 次/秒（≈每帧一次），拖拽窗口 resize 明显卡顿
- [#7169](https://github.com/deepseek-ai/deepseek-harness/discussions/7169) [Bug] Browser Use (Playwright MCP) rejects every new agent creation once one agent holds the browser — “New Session” silently does nothing (0.1.6-alpha.2)
- [#7168](https://github.com/deepseek-ai/deepseek-harness/discussions/7168) [Bug] Session subagent model allowlist is bypassed when a call omits provider/model (0.1.6-alpha.2)
- [#3633](https://github.com/deepseek-ai/deepseek-harness/discussions/3633) [Bug] [Update 2026-09-19] Missing session-level lock silently corrupts shared-home deployments — impact upgrade: any multi-writer topology destroys the durable work record (self-review of our own bug report)
- [#7160](https://github.com/deepseek-ai/deepseek-harness/discussions/7160) [Bug] 0.1.6-alpha.2 — the tsx source launch evaluates two copies of @deepseek-ai/dsh-tools, so every tool call fails with Cannot read properties of undefined (reading 'prepare')
- [#7164](https://github.com/deepseek-ai/deepseek-harness/discussions/7164) [Bug] glob: a pattern containing / ignores path and searches the session workspace (0.1.6-alpha.2)
- [#6891](https://github.com/deepseek-ai/deepseek-harness/discussions/6891) [Bug] 0.1.6-alpha.1: mounting an experimental browser provider makes every Session fail to create/resume
- [#7083](https://github.com/deepseek-ai/deepseek-harness/discussions/7083) [Bug] 本轮运行失败Cannot read properties of undefined (reading 'prepare')
- [#7120](https://github.com/deepseek-ai/deepseek-harness/discussions/7120) [Bug] messages protocol: prepare undefined crash on tool_use, then INVALID_REQUEST on retry
- [#7126](https://github.com/deepseek-ai/deepseek-harness/discussions/7126) [Bug] Tool call fails on Windows: Cannot read properties of undefined (reading 'prepare') — TOOL_RUNTIME_SCHEDULER unimplemented, ptc-runtime absent from all bundles
- [#7123](https://github.com/deepseek-ai/deepseek-harness/discussions/7123) [bug]「只有 reasoning、无可见正文也无工具调用」的响应被判为成功 ⇒ 静默空回复
- [#7112](https://github.com/deepseek-ai/deepseek-harness/discussions/7112) [Bug] Web 侧栏会话列表在 0.1.5-rc.1 → rc.2 升级后整块消失（dsh.workspace.view.v5 缺 sessionUpdatedAtByAccount）
- [#7054](https://github.com/deepseek-ai/deepseek-harness/discussions/7054) [Bug] Agent Team roster reads `model` from a stale creation-time snapshot (offline teammates get the Lead's model)
- [#7146](https://github.com/deepseek-ai/deepseek-harness/discussions/7146) Bug: 源码启动 + 已构建 lib 共存时所有工具调用失败（双模块实例导致 scheduler 符号 miss）
- [#7011](https://github.com/deepseek-ai/deepseek-harness/discussions/7011) [Bug] 源码启动默认 runtime 解析模式导致 dsh-tools 双实例,所有工具调用报 Cannot read properties of undefined (reading 'prepare')
- [#7141](https://github.com/deepseek-ai/deepseek-harness/discussions/7141) [Bug] 0.1.6 plugin manager shows a dead switch for packages that declare `dsh.bundle` but are not in `dsh.profile.bundles` — clicking it writes a dirty bundles list before failing
- [#7138](https://github.com/deepseek-ai/deepseek-harness/discussions/7138) [Bug] Turn changed-files card attributes a concurrent writer's changes to this session (workspace-wide git snapshot, no per-session attribution)
- [#7137](https://github.com/deepseek-ai/deepseek-harness/discussions/7137) [Bug] Windows-only: empty `apiKeyEnv:` (YAML null) on a pi-ai route crashes every turn — 空值 apiKeyEnv 让 Windows 上每一轮请求都崩在 toUpperCase
- [#7131](https://github.com/deepseek-ai/deepseek-harness/discussions/7131) [Bug] 大会话下拖动滚动条 / 分栏手柄，浏览器主进程单线程 100% 自旋，页面长时间失去响应
- [#7122](https://github.com/deepseek-ai/deepseek-harness/discussions/7122) [Bug][0.1.5-rc.2 / 0.1.6-alpha.2] sessionQuery.readSession rejects valid forked sessions

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-09-20T02:48:48.924Z_