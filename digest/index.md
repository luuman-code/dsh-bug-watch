# DSH Bug Watch — 2026-09-22

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 41

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
- [#4593](https://github.com/deepseek-ai/deepseek-harness/discussions/4593) **[BUG] Cache 输入缓存为什么这么大，有1-2kw的输入token，这个不合理吧，上下文最多也就1m**<br/>  分类：Q&A · 标签：— · 最近更新：2026-09-21

## 📝 仅报告 — 无人互动
- [#7314](https://github.com/deepseek-ai/deepseek-harness/discussions/7314) Bug: web sidebar lists no workspaces and no sessions after upgrade (0.1.5-rc.2)
- [#7414](https://github.com/deepseek-ai/deepseek-harness/discussions/7414) Bug: dsh web V8 heap OOM after long uptime — live sessions are never unloaded
- [#7412](https://github.com/deepseek-ai/deepseek-harness/discussions/7412) [Bug] dsh-resource:// 地址在华为 ArkWeb 内核上 hostname 为空，导致所有资源预览失效（文件预览显示「文件资源服务不可用。」）
- [#7398](https://github.com/deepseek-ai/deepseek-harness/discussions/7398) Bug: tool calls fail with "Cannot read properties of undefined (reading 'prepare')" when running from source (pnpm dsh web)
- [#7405](https://github.com/deepseek-ai/deepseek-harness/discussions/7405) [Bug] dsh-token-meter: an in-place session-log rewrite (rewind/retry/import) permanently wedges measure() → /compact fails with a phantom "no matching step/start"
- [#7386](https://github.com/deepseek-ai/deepseek-harness/discussions/7386) Bug: session with dangling tool_calls in closed turns cannot resume — permanent 400 INVALID_REQUEST on chat-completions providers
- [#469](https://github.com/deepseek-ai/deepseek-harness/discussions/469) [BUG] workspace-write 调用外部工具可能导致卡死
- [#6781](https://github.com/deepseek-ai/deepseek-harness/discussions/6781) [Bug] Android APK: ZodError in workspace.json (updatedAt) blocks app startup after user-initiated stop — sessions locked
- [#7394](https://github.com/deepseek-ai/deepseek-harness/discussions/7394) [Bug] Second `@deepseek-ai/dsh-scope` instance from a profile plugin workspace registers preset personas unscoped, colliding with `deployment:persona` (rc.8: `deployment:persona`; master: `deployment:persona-prefix`/`-suffix`)
- [#5926](https://github.com/deepseek-ai/deepseek-harness/discussions/5926) [Bug] connection fails to start when a third-party plugin registers an HTTP channel: cannot get property 'webServer' without inject
- [#7393](https://github.com/deepseek-ai/deepseek-harness/discussions/7393) [Bug] Blank sessions disappear from session list when navigating to another session
- [#7390](https://github.com/deepseek-ai/deepseek-harness/discussions/7390) [Bug] 自定义 anthropic-messages 模型：选中 xhigh 后请求不含 effort（走 budget 路径），中转侧实测回落为 Medium
- [#3849](https://github.com/deepseek-ai/deepseek-harness/discussions/3849) [Bug Report] 会话中断恢复后合成收尾事件与续写事件 seq 重叠，导致日志损坏、历史无法加载
- [#2730](https://github.com/deepseek-ai/deepseek-harness/discussions/2730) Bug Report] Windows ACL 受限令牌沙箱在 Windows 10 22H2 上导致 pwsh 子进程 0xC0000142 崩溃
- [#1357](https://github.com/deepseek-ai/deepseek-harness/discussions/1357) [BUG] 多个 dsh 实例并发写 workspace.json 导致非 ASCII 路径乱码、工作区会话列表消失
- [#7292](https://github.com/deepseek-ai/deepseek-harness/discussions/7292) [Bug][Windows] workspace-write sandbox: every spawned console app dies with 0xC0000142 and raises a modal Windows error dialog on each tool call
- [#6515](https://github.com/deepseek-ai/deepseek-harness/discussions/6515) [Bug] Windows: "Reveal in File Explorer" from a deliverables card silently does nothing (execFile + windowsHide + exit-1 swallow)
- [#7387](https://github.com/deepseek-ai/deepseek-harness/discussions/7387) Bug: SessionPersistence.prepare() commits crash repair that can corrupt an actively-written session log (seq overlap between recoveredEvents and synthetic closers)
- [#7368](https://github.com/deepseek-ai/deepseek-harness/discussions/7368) [Bug] [0.1.6-alpha.2]Cannot read properties of undefined (reading 'prepare') on every tool call in web profile — dsh-tools Symbol identity mismatch
- [#7380](https://github.com/deepseek-ai/deepseek-harness/discussions/7380) [bug] grep/glob tools silently skip symlinked directories (ripgrep spawned without --follow)
- [#7363](https://github.com/deepseek-ai/deepseek-harness/discussions/7363) Bug: "Cannot read properties of undefined (reading 'kind')" when a plugin calls agent.followup() with a bare string
- [#7367](https://github.com/deepseek-ai/deepseek-harness/discussions/7367) [Bug] dsh-app://shell/* documents return 404: update dialog renders blank, main window stays unclickable and blurred
- [#7168](https://github.com/deepseek-ai/deepseek-harness/discussions/7168) [Bug] Session subagent model allowlist is bypassed when a call omits provider/model (0.1.6-alpha.2)
- [#422](https://github.com/deepseek-ai/deepseek-harness/discussions/422) [Bug] 多个子任务结束后主任务返回 HTTP 400 / HTTP 400 after multi-agent reports
- [#7356](https://github.com/deepseek-ai/deepseek-harness/discussions/7356) [Bug] sessionQuery.readEvent deep-clones the entire session on every call — reading one event is O(session size), and it locks the whole Host event loop
- [#5973](https://github.com/deepseek-ai/deepseek-harness/discussions/5973) [bug]SubAgent routing can use stale/wrong models and silently escalate cost
- [#3280](https://github.com/deepseek-ai/deepseek-harness/discussions/3280) [Bug] CORDIS_SHARED 非法 JSON 会在 Loader 构造时打崩所有 dsh --profile 启动（.env 也能灌进来）
- [#150](https://github.com/deepseek-ai/deepseek-harness/discussions/150) [Bug] Python notification subscriptions can hang after close
- [#4549](https://github.com/deepseek-ai/deepseek-harness/discussions/4549) [Bug] Scheduler failure leaves dangling tool/call — session permanently returns 400 INVALID_REQUEST (fix: append only the missing tool/result, #4017 follow-up)
- [#5857](https://github.com/deepseek-ai/deepseek-harness/discussions/5857) [Bug Report] Seeded / forked sessions fallback to workspace name after restart (cached title skipped during cold listing)
- [#7332](https://github.com/deepseek-ai/deepseek-harness/discussions/7332) [Bug] Windows 下「在文件资源管理器中显示」必然失败，但界面误报成功
- [#7348](https://github.com/deepseek-ai/deepseek-harness/discussions/7348) [Bug] 新建会话打不开、输入框永久锁死，每次重选静默多一个空会话
- [#7347](https://github.com/deepseek-ai/deepseek-harness/discussions/7347) [Bug] A built-in registration into the "rightbar" seat has no options.id — declaring that seat as list fails the entire client
- [#7014](https://github.com/deepseek-ai/deepseek-harness/discussions/7014) BUG: 冷启动会话列表里，分叉（fork）会话的标题退化成目录名、时间退化成创建时间
- [#5976](https://github.com/deepseek-ai/deepseek-harness/discussions/5976) [Bug] Agent 在超长上下文 + max reasoning effort 下陷入思考退化循环：回合零产出、无自动熔断，需手动中止（v4.1-flash；同配置 v4-flash 3000+ 步未复发）
- [#7340](https://github.com/deepseek-ai/deepseek-harness/discussions/7340) [bug] 0.1.6-alpha.2版本交互bug，点击新会话按钮下面的插件按钮，然后点击收起侧边栏按钮，然后就回不到会话了，只能退出进程
- [#7329](https://github.com/deepseek-ai/deepseek-harness/discussions/7329) [Bug] Every tool call fails with Cannot read properties of undefined (reading 'prepare') on Windows — regression in v0.1.6-alpha.2
- [#7330](https://github.com/deepseek-ai/deepseek-harness/discussions/7330) [Bug] dsh causes massive macOS Swap explosion (300GB+ System Data / 191GB kernel_task) even when using API-only mode
- [#7331](https://github.com/deepseek-ai/deepseek-harness/discussions/7331) Bug: source launch (pnpm dsh) under runtime resolution mode loads duplicate module instances — every tool call fails with "Cannot read properties of undefined (reading 'prepare')"
- [#7318](https://github.com/deepseek-ai/deepseek-harness/discussions/7318) [Bug] A crashed tool call leaves an unresolved tool_use in history; the session then fails forever with "DeepSeek Messages tool calls need immediate results"

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-09-22T02:47:57.513Z_