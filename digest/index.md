# DSH Bug Watch — 2026-08-27

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 68

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
- [#3786](https://github.com/deepseek-ai/deepseek-harness/discussions/3786) **[Bug] npx @deepseek-ai/dsh web 无限卡死：npm 依赖解析死循环（CPU 100%、零网络流量、换镜像无效）**<br/>  分类：General · 标签：— · 最近更新：2026-08-26
- [#580](https://github.com/deepseek-ai/deepseek-harness/discussions/580) **[bug] Win32 原生目录选择器在 U+XX00（如「开」）处截断 UTF-16 路径 — 附可 cherry-pick 修复**<br/>  分类：General · 标签：— · 最近更新：2026-08-26

## 👥 社区参与 — 已采纳答案，作者非 committer
- [#4664](https://github.com/deepseek-ai/deepseek-harness/discussions/4664) **[Bug]？ goal 功能开启后 agent 无法被动等待后台任务：每次进入 idle 即被强制注入 <goal_round>，空转消耗轮次与 token**<br/>  分类：Q&A · 标签：— · 最近更新：2026-08-27
- [#2778](https://github.com/deepseek-ai/deepseek-harness/discussions/2778) **[BUG] 插件自定义会话事件导致整个会话日志下次加载时被拒读——Session.append 无法写 ignorable 标记，插件事件注册口为 deferred**<br/>  分类：Q&A · 标签：— · 最近更新：2026-08-27
- [#2470](https://github.com/deepseek-ai/deepseek-harness/discussions/2470) **[BUG] dsh subagent 在 GUI 冷恢复后默认切回 dsv4p 模型导致扣费路由错误**<br/>  分类：Q&A · 标签：— · 最近更新：2026-08-26
- [#4473](https://github.com/deepseek-ai/deepseek-harness/discussions/4473) **[Bug] spawn 子代理未继承 agent-default-model：主会话走自定义 provider， spawn 子代理被路由到 deepseek-official**<br/>  分类：Q&A · 标签：— · 最近更新：2026-08-26

## 📝 仅报告 — 无人互动
- [#4722](https://github.com/deepseek-ai/deepseek-harness/discussions/4722) [bug] In-memory session log is unbounded (append-only) and compaction never trims it - long/heavy sessions OOM the web process
- [#4717](https://github.com/deepseek-ai/deepseek-harness/discussions/4717) [Bug] Agent 陷入"叙述但不调用工具"的输出循环，需用户手动打断
- [#4640](https://github.com/deepseek-ai/deepseek-harness/discussions/4640) Bug: a duplicate `@deepseek-ai/dsh-tools` inside a profile silently breaks every tool call
- [#4666](https://github.com/deepseek-ai/deepseek-harness/discussions/4666) [bug] Spawn-backed subagents drop reasoningEffort; endpoints that require thinking reject every delegation
- [#4601](https://github.com/deepseek-ai/deepseek-harness/discussions/4601) Bug: agent loop crashes after bash tool call — 'Cannot read properties of undefined (reading \'prepare\')' kills session (3 consecutive turns)
- [#4615](https://github.com/deepseek-ai/deepseek-harness/discussions/4615) [Bug] dsh-llm-pi-ai sends non png/jpeg/gif images as-is; LM Studio rejects webp with 400 "'url' field must be a base64 encoded image."
- [#4612](https://github.com/deepseek-ai/deepseek-harness/discussions/4612) Bug report draft: native read_image tool fails with "cannot get property 'fs' without inject" (all presets)
- [#425](https://github.com/deepseek-ai/deepseek-harness/discussions/425) [BUG]Windows 下 edit/write 覆盖已有文件:`ReplaceFileW EIO (Win32 32)`(ERROR_SHARING_VIOLATION)高频失败,无重试机制
- [#4689](https://github.com/deepseek-ai/deepseek-harness/discussions/4689) [Bug][Windows] atomic-write writer lock leaks after first write, breaking all settings persistence (dsh web)
- [#4704](https://github.com/deepseek-ai/deepseek-harness/discussions/4704) [Bug] Resume fails with SessionPersistenceCorruptionError after model emits a tool call with empty id/name; recovery notes + two related robustness gaps
- [#4450](https://github.com/deepseek-ai/deepseek-harness/discussions/4450) [bug] Chrome 开启页面翻译后，导致聊天输入框渲染错乱且会被删除
- [#4436](https://github.com/deepseek-ai/deepseek-harness/discussions/4436) [Bug][Windows] dsh web 随机静默死亡：node-pty 1.2.0-beta.15 ConPTY socket 无 error 监听 + windowsTerminal 错误处理器 throw
- [#4695](https://github.com/deepseek-ai/deepseek-harness/discussions/4695) [Bug] 非 loopback 访问时 Settings 面板报错 "settings are unavailable in this browser"
- [#4652](https://github.com/deepseek-ai/deepseek-harness/discussions/4652) Bug: crash 'Cannot read properties of undefined (reading kind)' in compactSlotTree
- [#1782](https://github.com/deepseek-ai/deepseek-harness/discussions/1782) Bug: Plugin registrations on the host plane are invisible to agents (dsh 0.1.0-rc.6)
- [#676](https://github.com/deepseek-ai/deepseek-harness/discussions/676) [bug] Subagent catalog entries are never reclaimed after the menu closes — memory grows linearly with browsing
- [#4656](https://github.com/deepseek-ai/deepseek-harness/discussions/4656) [Bug] /permission 预设切换失败：无法读取未定义属性（读取 aborted）（rc.8 -> 0.1.1-rc.2） 正文：
- [#3419](https://github.com/deepseek-ai/deepseek-harness/discussions/3419) Bug: native directory picker truncates paths containing U+XX00 CJK chars (e.g. 开 U+5F00) — workspace create fails on Windows
- [#2703](https://github.com/deepseek-ai/deepseek-harness/discussions/2703) [Bug Report] 通过"添加提供方"添加新的 deepseek 并填入新 API Key，会静默覆盖官方 DeepSeek Key（deepseek-official）
- [#3178](https://github.com/deepseek-ai/deepseek-harness/discussions/3178) [BUG] 在WSL下使用workspace write模式时，由于/dev/dxg被隐藏，无法使用gpu
- [#478](https://github.com/deepseek-ai/deepseek-harness/discussions/478) [bug] Subagent sessions orphaned by a force-killed harness restart shown as green — no interruption marker, indistinguishable from completed
- [#1249](https://github.com/deepseek-ai/deepseek-harness/discussions/1249) [BUG] puppeteer MCP 断连导致 dsh web 整个进程崩溃退出（Windows）
- [#3751](https://github.com/deepseek-ai/deepseek-harness/discussions/3751) Bug: TOOL_RUNTIME_SCHEDULER symbol mismatch crashes every subagent tool call (fix included)
- [#1967](https://github.com/deepseek-ai/deepseek-harness/discussions/1967) [Bug] Agent edit files out of Workspace, while WorkSpace Write mode enabled.
- [#2374](https://github.com/deepseek-ai/deepseek-harness/discussions/2374) [Bug] Configuring third-party OpenAI-compatible gateways: STREAM_CLOSED error message is too vague to root-cause
- [#2593](https://github.com/deepseek-ai/deepseek-harness/discussions/2593) [Bug]Windows：Agent 用 Remove-Item $home 会清空用户主目录（$HOME 只读导致赋值失败）
- [#902](https://github.com/deepseek-ai/deepseek-harness/discussions/902) [Bug Report] 运行中热重载 cordis.patch.yml 插入 MCP 插件后，新建会话/选择工作区失败（界面闪回未选择状态）
- [#4654](https://github.com/deepseek-ai/deepseek-harness/discussions/4654) [BUG] Windows 原生目录选择器把含 U+xx00 字符的路径截断（如「软件开发」→「软件」），中文目录无法添加为工作区
- [#4624](https://github.com/deepseek-ai/deepseek-harness/discussions/4624) [BUG] Windows 目录选择器读取路径被截断（readUtf16 只检查低字节），含"一"等汉字的路径创建工作区失败 ENOENT
- [#3226](https://github.com/deepseek-ai/deepseek-harness/discussions/3226) Bug: adopted vision models lose input modalities during discovery (MODEL_DOES_NOT_SUPPORT_IMAGES)
- [#3446](https://github.com/deepseek-ai/deepseek-harness/discussions/3446) [Bug] dsh-base 4处硬编码付费API默认值，models:[] 仅隐藏UI不禁路由，用户无感产生DeepSeek账单
- [#3489](https://github.com/deepseek-ai/deepseek-harness/discussions/3489) [Bug] Expired MCP session causes repeated tool-call failures without reconnect or circuit breaking
- [#3561](https://github.com/deepseek-ai/deepseek-harness/discussions/3561) Bug report + fix: image-bearing session deadlocks when switching to a text-only model (Web GUI)
- [#3568](https://github.com/deepseek-ai/deepseek-harness/discussions/3568) [BUG]mcp-client 工具调用参数流式传输断裂，导致空参数和死循环
- [#4198](https://github.com/deepseek-ai/deepseek-harness/discussions/4198) [bug] subagent: an aborted child's closing message injects tool-call blocks into a user message, permanently breaking the parent session
- [#2658](https://github.com/deepseek-ai/deepseek-harness/discussions/2658) [Bug] New Session implicitly falls back to `recentWorkspaceId` — sessions spawned into unrelated projects (root cause + one-line fix)
- [#3760](https://github.com/deepseek-ai/deepseek-harness/discussions/3760) [Bug] 重启后孤儿会话（磁盘存在但未登记工作区）不再出现在侧栏
- [#4412](https://github.com/deepseek-ai/deepseek-harness/discussions/4412) [Bug] 已是 danger-full-access 时重申同一模式被拒，导致非默认模型每次文件操作失败
- [#4564](https://github.com/deepseek-ai/deepseek-harness/discussions/4564) [Bug] llm.discoverModels returns build-time bundled catalog for known providers — newly released models (e.g. x-preview-f-free) never appear via "Fetch Models"
- [#4577](https://github.com/deepseek-ai/deepseek-harness/discussions/4577) [Bug] Typing or dragging text selection in composer scrolls chat transcript to bottom when scrolled up
- [#885](https://github.com/deepseek-ai/deepseek-harness/discussions/885) [Bug Report] llm-deepseek SSE 装配用 `!== void 0` 判空：空字符串 delta 覆盖首块 tool_calls id/name，工具调用整体崩溃为 `unknown tool ""`
- [#468](https://github.com/deepseek-ai/deepseek-harness/discussions/468) [Bug Report] danger-full-access 下模型重试带 `sandbox_permissions` 的调用被"not strictly wider"拒绝——升级面不随当前模式裁剪，错误文案被误读为权限系统失效
- [#4623](https://github.com/deepseek-ai/deepseek-harness/discussions/4623) [Bug] Forked sessions never auto-update their title — fork dedup rename pins the session
- [#4614](https://github.com/deepseek-ai/deepseek-harness/discussions/4614) [Bug] MCP tools with empty/object-only inputSchema break strict OpenAI-compatible backends (400 "parameters.properties Required")
- [#3749](https://github.com/deepseek-ai/deepseek-harness/discussions/3749) BUG: 超出工作区（Windows·SMB映射驱动器）File operations judged as "out of workspace"
- [#3591](https://github.com/deepseek-ai/deepseek-harness/discussions/3591) [Bug] Agent loop: dangling tool/call without paired tool/result when a parallel tool call fails mid-dispatch — deriveMessages() builds a provider-invalid transcript
- [#4555](https://github.com/deepseek-ai/deepseek-harness/discussions/4555) [Bug] Subagents always fail with 400 "Reasoning is mandatory" when parent uses a thinking-required model (Ox Alpha via OpenRouter)
- [#4367](https://github.com/deepseek-ai/deepseek-harness/discussions/4367) Bug: DeepSeek WebSearchProvider drops the generated answer from native web search responses
- [#4311](https://github.com/deepseek-ai/deepseek-harness/discussions/4311) [Bug] 子代理默认委派失败：子代理继承的是过期的 base 默认模型，而非父代理实际运行的模型
- [#4196](https://github.com/deepseek-ai/deepseek-harness/discussions/4196) [Bug] 所有 in-process subagent 必然失败（join deployment preset 后运行循环静默死亡）；headless profile 完全正常
- [#4193](https://github.com/deepseek-ai/deepseek-harness/discussions/4193) [Bug] Subagent 工具未暴露 model/provider 参数，子代理强制继承父代理模型导致无法按需切换模型
- [#4064](https://github.com/deepseek-ai/deepseek-harness/discussions/4064) [Bug] tsdown 在 proot 环境下无法识别 @deepseek-ai/dsh-api-remotes 包（已尝试多种配置调整）
- [#4549](https://github.com/deepseek-ai/deepseek-harness/discussions/4549) [Bug] Scheduler failure leaves dangling tool/call — session permanently returns 400 INVALID_REQUEST (fix: reuse appendSkippedToolCall, #4017 follow-up)
- [#4591](https://github.com/deepseek-ai/deepseek-harness/discussions/4591) [BUG] Python SDK当 session ID 存在时无法 resume 对话
- [#1180](https://github.com/deepseek-ai/deepseek-harness/discussions/1180) [BUG]一直出现Error: invalid arguments: missing required property "description"
- [#582](https://github.com/deepseek-ai/deepseek-harness/discussions/582) [bug] Claude hook matcher 大小写敏感，Bash 选不中 bash，安全 hook 静默失效 — 附可 cherry-pick 修复
- [#335](https://github.com/deepseek-ai/deepseek-harness/discussions/335) [Bug] 无法选择工作区（mac）
- [#4593](https://github.com/deepseek-ai/deepseek-harness/discussions/4593) [BUG] Cache 输入缓存为什么这么大，有1-2kw的输入token，这个不合理吧，上下文最多也就1m
- [#201](https://github.com/deepseek-ai/deepseek-harness/discussions/201) [BUG] spamming Error: sandbox escalation to "workspace-write" is not strictly wider than this call's current "danger-full-access" mode
- [#4578](https://github.com/deepseek-ai/deepseek-harness/discussions/4578) [Bug] OpenAI provider 上下文溢出后压缩失败，原对话未改变
- [#3302](https://github.com/deepseek-ai/deepseek-harness/discussions/3302) Bug: browser crypto.randomUUID fails on HTTP non-loopback origins (Settings + Agent presets stuck on LAN)
- [#4506](https://github.com/deepseek-ai/deepseek-harness/discussions/4506) [Bug] Multi-process shared session root: concurrent writes corrupt the JSONL session log (seq gap); history/resume fail

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-08-27T06:34:07.820Z_