# DSH Bug Watch — 2026-09-21

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 48

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
- [#4664](https://github.com/deepseek-ai/deepseek-harness/discussions/4664) **[Bug]？ goal 功能开启后 agent 无法被动等待后台任务：每次进入 idle 即被强制注入 <goal_round>，空转消耗轮次与 token**<br/>  分类：Q&A · 标签：— · 最近更新：2026-09-20
- [#1299](https://github.com/deepseek-ai/deepseek-harness/discussions/1299) **[Bug] 超大工具调用导致会话历史加载失败：RangeError: Maximum call stack size exceeded（paginate 展开 sourceEventSeqs）**<br/>  分类：Q&A · 标签：— · 最近更新：2026-09-20

## 📝 仅报告 — 无人互动
- [#7318](https://github.com/deepseek-ai/deepseek-harness/discussions/7318) [Bug] A crashed tool call leaves an unresolved tool_use in history; the session then fails forever with "DeepSeek Messages tool calls need immediate results"
- [#7325](https://github.com/deepseek-ai/deepseek-harness/discussions/7325) [Bug][desktop] macOS nightly update feed is missing on the test deployment — dsh-desk/feeds/mac-arm64/nightly-mac.yml returns COS NoSuchKey
- [#7322](https://github.com/deepseek-ai/deepseek-harness/discussions/7322) [Bug] 计划模式键盘输入交互问题
- [#7321](https://github.com/deepseek-ai/deepseek-harness/discussions/7321) [BUG]源码启动（pnpm dsh / tsx）下所有工具调用失败：Cannot read properties of undefined (reading 'prepare')
- [#7319](https://github.com/deepseek-ai/deepseek-harness/discussions/7319) [Bug][Windows] 持久 pwsh 包装命令污染用户全局 PSReadLine 历史，敲 w 触发历史预测渲染崩溃
- [#7314](https://github.com/deepseek-ai/deepseek-harness/discussions/7314) Bug: web sidebar lists no workspaces and no sessions after upgrade (0.1.5-rc.2)
- [#7309](https://github.com/deepseek-ai/deepseek-harness/discussions/7309) [Bug] fork 会继承源会话 fork 点的下一条输入，新会话第一次输入执行的是它
- [#7310](https://github.com/deepseek-ai/deepseek-harness/discussions/7310) [Bug] 一次内容审核 400 会永久废掉整个会话 —— 需要「撤销被拒内容并继续」的回滚能力
- [#7302](https://github.com/deepseek-ai/deepseek-harness/discussions/7302) [Bug][Web client] Safari/WebKit：浮层内点击被 onBlur 吞掉（relatedTarget === null）/ clicks inside portaled panels are swallowed when relatedTarget is null
- [#487](https://github.com/deepseek-ai/deepseek-harness/discussions/487) Bug: session materialization fails with EACCES on Android (hard links forbidden) — patch included
- [#6942](https://github.com/deepseek-ai/deepseek-harness/discussions/6942) [bug] DSH 侧边栏会话列表整体空白：持久化视图快照缺字段导致 sidebar.workspaces slot 崩溃
- [#5976](https://github.com/deepseek-ai/deepseek-harness/discussions/5976) [Bug] Agent 在超长上下文 + max reasoning effort 下陷入思考退化循环：回合零产出、无自动熔断，需手动中止（v4.1-flash；同配置 v4-flash 3000+ 步未复发）
- [#7292](https://github.com/deepseek-ai/deepseek-harness/discussions/7292) [Bug][Windows] workspace-write sandbox: every spawned console app dies with 0xC0000142 and raises a modal Windows error dialog on each tool call
- [#7289](https://github.com/deepseek-ai/deepseek-harness/discussions/7289) [Bug] 旧版 localStorage 记录（schema 缺字段）导致 sidebar.workspaces 槽位整块消失，看起来像历史会话全部丢失
- [#7286](https://github.com/deepseek-ai/deepseek-harness/discussions/7286) [Bug] web profile + experimental browser-use：遮罩在 agent 创建窗口内抛作用域异常，导致会话 resume 失败（会话不可用 / 新建会话无反应）
- [#783](https://github.com/deepseek-ai/deepseek-harness/discussions/783) [Bug] Tool calls fail with "Cannot read properties of undefined (reading prepare)" after pnpm install in a profile
- [#7214](https://github.com/deepseek-ai/deepseek-harness/discussions/7214) [Bug] A length stop with one output token escapes overflow detection, so a dead session never recovers and continue is a no-op
- [#6799](https://github.com/deepseek-ai/deepseek-harness/discussions/6799) [Bug] Optional Playwright MCP startup failure aborts Session create/resume and removes the Session from Web UI
- [#7054](https://github.com/deepseek-ai/deepseek-harness/discussions/7054) [Bug] Agent Team roster reads `model` from a stale creation-time snapshot (offline teammates get the Lead's model)
- [#7271](https://github.com/deepseek-ai/deepseek-harness/discussions/7271) [Bug] CDP doesn't need authorization to access, while /injest need authorization
- [#274](https://github.com/deepseek-ai/deepseek-harness/discussions/274) [Bug] Follow-up can remain indefinitely queued during driver retirement
- [#7112](https://github.com/deepseek-ai/deepseek-harness/discussions/7112) [Bug] Web 侧栏会话列表在 0.1.5-rc.1 → rc.2 升级后整块消失（dsh.workspace.view.v5 缺 sessionUpdatedAtByAccount）
- [#7268](https://github.com/deepseek-ai/deepseek-harness/discussions/7268) [Bug] Session token can be exposed through command line (argv)
- [#7266](https://github.com/deepseek-ai/deepseek-harness/discussions/7266) [BUG][Windows] workspace-write 沙箱下 Ninja 静默挂死：命名管道连接被拒 ERROR_ACCESS_DENIED(5)
- [#7255](https://github.com/deepseek-ai/deepseek-harness/discussions/7255) [bug] dsh-v0.1.6-alpha.2 的 commit 9ddef327a4
- [#6967](https://github.com/deepseek-ai/deepseek-harness/discussions/6967) [Bug] 0.1.6-alpha.2 source launch (pnpm dsh) splits @deepseek-ai/dsh-tools across src/lib — every tool call fails with "Cannot read properties of undefined (reading 'prepare')"
- [#7253](https://github.com/deepseek-ai/deepseek-harness/discussions/7253) [bug] dsh-v0.1.6-alpha.2 的 commit 9ddef327a4
- [#7252](https://github.com/deepseek-ai/deepseek-harness/discussions/7252) [BUG]WSL下VS Code/Cursor图标显示异常
- [#7250](https://github.com/deepseek-ai/deepseek-harness/discussions/7250) [Bug] Windows 上「在文件资源管理器中显示」对所有路径都不显示窗口：共享 runner 的 windowsHide 把 Explorer 窗口创建成了隐藏窗口
- [#7248](https://github.com/deepseek-ai/deepseek-harness/discussions/7248) [Bug] agentOptions() drops reasoningEffort — the web Session Agent route snapshot never carries the effort
- [#7244](https://github.com/deepseek-ai/deepseek-harness/discussions/7244) [Bug] Node PTC runtime reports `worker-exit (0)` and discards the child's stderr, hiding the real failure
- [#7243](https://github.com/deepseek-ai/deepseek-harness/discussions/7243) [Bug] `workflow` fails on every call on Windows: PTC control channel is not inherited (reported as worker-exit 0)
- [#1515](https://github.com/deepseek-ai/deepseek-harness/discussions/1515) Bug: tool calls crash with "Cannot read properties of undefined (reading 'prepare')" after profile plugin install (dual dsh-tools copy)
- [#7213](https://github.com/deepseek-ai/deepseek-harness/discussions/7213) [Bug] llm-pi-ai silently resolves an unconfigured route to a 262144 context window while the provider declares 1048576
- [#7079](https://github.com/deepseek-ai/deepseek-harness/discussions/7079) [Bug] pnpm dsh web 从源码启动时工具调用全线崩溃：tsx/esm 加载 TS 源码与插件加载编译产物导致 TOOL_RUNTIME_SCHEDULER Symbol 分裂 （Cannot read properties of undefined (reading 'prepare')）
- [#7240](https://github.com/deepseek-ai/deepseek-harness/discussions/7240) [Bug] A nested AGENTS.md that symlinks an ancestor file is injected twice (one file, two scopes)
- [#7239](https://github.com/deepseek-ai/deepseek-harness/discussions/7239) [Bug] pre-commit hangs in "whitespace (staged)" because the hook job starts a pager
- [#7154](https://github.com/deepseek-ai/deepseek-harness/discussions/7154) [Bug] 沙箱升级"死选项"：广告的 sandbox_permissions 目标等于当前模式时必然抛错，且切换模式无法自愈（会话无法写盘）
- [#7204](https://github.com/deepseek-ai/deepseek-harness/discussions/7204) Bug report + fix: an unclosed `$$` block turns the rest of a reply into one failing formula
- [#7231](https://github.com/deepseek-ai/deepseek-harness/discussions/7231) [Bug] Right sidebar (file preview) has no visible exit control after entering fullscreen — trapped until app restart
- [#7230](https://github.com/deepseek-ai/deepseek-harness/discussions/7230) [Bug] Agent rebuilds user-owned files from stale backups, silently discarding manual edits / 用旧备份重建用户文件，静默丢弃手工编辑
- [#7219](https://github.com/deepseek-ai/deepseek-harness/discussions/7219) [Bug] Since dsh-v0.1.6-alpha.2 every tool call fails under `pnpm dsh` source launch: `Cannot read properties of undefined (reading 'prepare')`
- [#201](https://github.com/deepseek-ai/deepseek-harness/discussions/201) [BUG] spamming Error: sandbox escalation to "workspace-write" is not strictly wider than this call's current "danger-full-access" mode
- [#7223](https://github.com/deepseek-ai/deepseek-harness/discussions/7223) [Bug] Tool call fails with "prepare" undefined on fresh install
- [#6970](https://github.com/deepseek-ai/deepseek-harness/discussions/6970) [Bug] 仅有 reasoning、无 text 与 tool-call 的轮次未被空响应重试兜底
- [#4666](https://github.com/deepseek-ai/deepseek-harness/discussions/4666) [bug] Spawn-backed subagents drop reasoningEffort; endpoints that require thinking reject every delegation

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-09-21T02:46:12.818Z_