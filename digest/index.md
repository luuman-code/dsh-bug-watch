# DSH Bug Watch — 2026-08-20

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 72

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
- [#2778](https://github.com/deepseek-ai/deepseek-harness/discussions/2778) **[BUG] 插件自定义会话事件导致整个会话日志下次加载时被拒读——Session.append 无法写 ignorable 标记，插件事件注册口为 deferred**<br/>  分类：Q&A · 标签：— · 最近更新：2026-08-19

## 📝 仅报告 — 无人互动
- [#3461](https://github.com/deepseek-ai/deepseek-harness/discussions/3461) [Bug] dsh 0.1.0-rc.8 is not installable from npm: missing dsh-agent-loop@^0.1.0-rc.8
- [#3443](https://github.com/deepseek-ai/deepseek-harness/discussions/3443) Bug: workspace directory picker throws 'crypto.randomUUID is not a function' over plain HTTP on an IP
- [#3446](https://github.com/deepseek-ai/deepseek-harness/discussions/3446) [Bug] dsh-base 4处硬编码付费API默认值，models:[] 仅隐藏UI不禁路由，用户无感产生DeepSeek账单
- [#3471](https://github.com/deepseek-ai/deepseek-harness/discussions/3471) [Bug] npm 安装的 dsh 闭包缺少 @deepseek-ai/dsh-client-schema-form,引用它的第三方插件启动即崩溃
- [#3464](https://github.com/deepseek-ai/deepseek-harness/discussions/3464) [Bug] All tool calls fail with UNKNOWN_TOOL (unknown tool "") when using Bailian (DashScope) deepseek-v4-flash as provider
- [#3466](https://github.com/deepseek-ai/deepseek-harness/discussions/3466) [Bug][Windows] ACL sandbox spawn failure paths can leak native handles and clobber primary errors
- [#3454](https://github.com/deepseek-ai/deepseek-harness/discussions/3454) Bug: unknown prompt variable "{{hexagon}}" in section "tools:sdk" under code-mode presets with drawio MCP
- [#3463](https://github.com/deepseek-ai/deepseek-harness/discussions/3463) bug:自定模式在window下无法打开所载配置目录
- [#3457](https://github.com/deepseek-ai/deepseek-harness/discussions/3457) [Bug] ACP initialize reports a hardcoded agentInfo.version "0.0.1", not the release version
- [#3451](https://github.com/deepseek-ai/deepseek-harness/discussions/3451) [Bug] dsh plugin add does not reconcile when pnpm returns non-zero exit code
- [#3450](https://github.com/deepseek-ai/deepseek-harness/discussions/3450) [Bug] Conversation fails to load: "conversation Context N:turn-tailM received an update before its start Match" (surface replacement copy ordering)
- [#3154](https://github.com/deepseek-ai/deepseek-harness/discussions/3154) Bug: Git 安裝插件未 build（無 dist/）導致 plugin tree 崩潰、backend 無法啟動
- [#3428](https://github.com/deepseek-ai/deepseek-harness/discussions/3428) [Bug] Windows 下「极简模式」preset 的 bash 工具 100% 失败：subprocess-local: terminal inspection is unsupported on platform win32
- [#3020](https://github.com/deepseek-ai/deepseek-harness/discussions/3020) [Bug] ask_user_question 提问卡片不展示、会话永久卡住（mux WebSocket 僵尸连接无心跳）
- [#3413](https://github.com/deepseek-ai/deepseek-harness/discussions/3413) [Bug] dsh-client-connection streamOpenTimeoutMs=3000 causes "Signal timed out" on slow/remote links
- [#3416](https://github.com/deepseek-ai/deepseek-harness/discussions/3416) Bug: plugin-authored session event types without ignorable make sessions unreadable (SessionFormatUnsupportedError) - dsh-talk/speech
- [#3410](https://github.com/deepseek-ai/deepseek-harness/discussions/3410) [BUG]When a session is not assigned to any workspace, the sidebar shows an Ungrouped group. Hovering that group still reveals a + button ("New session in Ungrouped"), but clicking it does nothing.
- [#3419](https://github.com/deepseek-ai/deepseek-harness/discussions/3419) Bug: native directory picker truncates paths containing U+XX00 CJK chars (e.g. 开 U+5F00) — workspace create fails on Windows
- [#2167](https://github.com/deepseek-ai/deepseek-harness/discussions/2167) Bug: session log corrupted on resume - last 4 committed events re-appended with fresh timestamps (seq gap in committed region)
- [#3412](https://github.com/deepseek-ai/deepseek-harness/discussions/3412) [Bug] dsh-attachment-local persist fails with ATTACHMENT_WRITE_FAILED because link() returns EISDIR on Windows
- [#3411](https://github.com/deepseek-ai/deepseek-harness/discussions/3411) [Bug] Sandbox escalation fields advertised even when the composition default cannot escalate (danger-full-access) — models get spurious errors
- [#3405](https://github.com/deepseek-ai/deepseek-harness/discussions/3405) [Bug] dsh plugin add fails at the profile workspace root without -w (ERR_PNPM_ADDING_TO_ROOT)
- [#3408](https://github.com/deepseek-ai/deepseek-harness/discussions/3408) [Bug] History loading fails with "received more than one start Match" when tool call ids are not globally unique
- [#3404](https://github.com/deepseek-ai/deepseek-harness/discussions/3404) [Bug] A single corrupt session log makes the entire sidebar session list disappear
- [#3401](https://github.com/deepseek-ai/deepseek-harness/discussions/3401) [Bug] Concurrent writing to the same session log corrupts seq (corrupt session log: seq gap in committed region)
- [#3391](https://github.com/deepseek-ai/deepseek-harness/discussions/3391) [Bug] macOS 上 bash 工具执行含中文命令会损坏并超时（bash 3.2 PTY 数据损坏）
- [#3393](https://github.com/deepseek-ai/deepseek-harness/discussions/3393) [Bug] HTML pipeline replaces '$' sequence with </html> in injected scripts
- [#3399](https://github.com/deepseek-ai/deepseek-harness/discussions/3399) Bug: DeepSeek "Input token exceed the limit" (400 quota_limit_reached) not classified as context overflow - auto recovery never triggers
- [#1614](https://github.com/deepseek-ai/deepseek-harness/discussions/1614) [BUG] Web composer: typed text / whole input box can disappear (3 root causes + fix)
- [#139](https://github.com/deepseek-ai/deepseek-harness/discussions/139) Bug: pnpm install fails when global core.hooksPath is set (Codex/other hook managers)
- [#3388](https://github.com/deepseek-ai/deepseek-harness/discussions/3388) [Bug] 新增工作区时 Win32 目录选择器选中后 worker 崩溃：win32 folder dialog worker exited before reporting a result（0.1.0-rc.6 readUtf16 回归）
- [#3386](https://github.com/deepseek-ai/deepseek-harness/discussions/3386) Bug: duplicate @deepseek-ai/cordis key in packages/host/apiproxy breaks bun install
- [#3073](https://github.com/deepseek-ai/deepseek-harness/discussions/3073) Bug: pi-ai adapter misclassifies 401/403 in error text as AUTH, surfacing misleading "API key is invalid"
- [#3373](https://github.com/deepseek-ai/deepseek-harness/discussions/3373) BUG: 持久 bash 工具会把单引号参数里的 ! 触发历史展开，整条命令被拒绝执行（macOS 上表现为 300s 超时）
- [#3375](https://github.com/deepseek-ai/deepseek-harness/discussions/3375) [Bug] 重启后侧栏所有会话标题显示为工作区文件夹名，点开会话后才恢复
- [#3374](https://github.com/deepseek-ai/deepseek-harness/discussions/3374) [bug] dsh-llm-deepseek：流式工具调用的 name/id 为 null 时覆盖首个 delta，导致 DeepSeek 推理模型所有工具调用失败
- [#3372](https://github.com/deepseek-ai/deepseek-harness/discussions/3372) Bug: llm-pi-ai 丢弃 supportsDeveloperRole，SGLang/Qwen 收到 developer role 后返回 400
- [#3364](https://github.com/deepseek-ai/deepseek-harness/discussions/3364) [Bug] 极简模式：新建会话或切换提供商模型后无法识别当前工作区，引发大规模无效目录扫描。
- [#3190](https://github.com/deepseek-ai/deepseek-harness/discussions/3190) [Bug] dsh web crashes with ENOENT when external temp cleanup removes the subprocess spill dir
- [#942](https://github.com/deepseek-ai/deepseek-harness/discussions/942) Bug: crypto.randomUUID is not a function when accessing Web GUI over plain HTTP (LAN/phone)
- [#455](https://github.com/deepseek-ai/deepseek-harness/discussions/455) [Bug Report] 子代理继承父代理的"创建时默认模型"而非"会话当前模型"，第三方 provider 会话中 subagent 必报 no API key for provider route "deepseek-official"
- [#534](https://github.com/deepseek-ai/deepseek-harness/discussions/534) [BUG]会话/思考过长导致的：历史加载失败：history unavailable for session "session-2063f7c0-01dd-4892-ad90-9a2068c4f95d": RangeError: Maximum call stack size exceeded（internal）
- [#201](https://github.com/deepseek-ai/deepseek-harness/discussions/201) [BUG] spamming Error: sandbox escalation to "workspace-write" is not strictly wider than this call's current "danger-full-access" mode
- [#3341](https://github.com/deepseek-ai/deepseek-harness/discussions/3341) [BUG]dsh 自身的 package.json 没有声明 cordis-plugin-group 为依赖导致 dsh-app-boot 报错 ERR_MODULE_NOT_FOUND
- [#3229](https://github.com/deepseek-ai/deepseek-harness/discussions/3229) [BUG]死循环-- 一个小问答耗尽我的余额
- [#3302](https://github.com/deepseek-ai/deepseek-harness/discussions/3302) Bug: browser crypto.randomUUID fails on HTTP non-loopback origins (Settings + Agent presets stuck on LAN)
- [#3313](https://github.com/deepseek-ai/deepseek-harness/discussions/3313) [Bug] Web workspace picker truncates paths at CJK chars whose UTF-16 low byte is 0x00 (e.g. U+5F00)
- [#3281](https://github.com/deepseek-ai/deepseek-harness/discussions/3281) Bug: streamed tool calls assembled with empty name/callId when continuation deltas carry explicit id:""/name:null (dsh-llm-deepseek, rc.6 & rc.7)
- [#2343](https://github.com/deepseek-ai/deepseek-harness/discussions/2343) [bug] Tool call Error: unknown tool ""
- [#3329](https://github.com/deepseek-ai/deepseek-harness/discussions/3329) [bug] In Windows running  test fail for git command timeout.
- [#3318](https://github.com/deepseek-ai/deepseek-harness/discussions/3318) Bug: settings dialog unusable on narrow/mobile viewports — provider names paint over their own Edit/Delete buttons (tested fix branch linked)
- [#511](https://github.com/deepseek-ai/deepseek-harness/discussions/511) [Bug] 后台服务停止响应后，页面永久显示“运行中”，且无法停止、发送消息或提交反馈
- [#3299](https://github.com/deepseek-ai/deepseek-harness/discussions/3299) Bug: streaming tool_calls with empty name from third-party backends cause agent loops
- [#1569](https://github.com/deepseek-ai/deepseek-harness/discussions/1569) Bug report: dsh 0.1.0-rc.6: shipped "standard" preset fails to mount — every registration (persona, tool:pwsh, tool:read, plan:policy, ...) collides with the deployment layer
- [#3207](https://github.com/deepseek-ai/deepseek-harness/discussions/3207) [Bug]  [Windows sandbox] schannel TLS fails with SEC_E_NO_CREDENTIALS under workspace-write/read-only (restricted token)
- [#3277](https://github.com/deepseek-ai/deepseek-harness/discussions/3277) [bug] 会话 workspace 目录被移动后，bash/grep/glob 全部持续 spawn ENOENT，且报错不指向真实原因
- [#3280](https://github.com/deepseek-ai/deepseek-harness/discussions/3280) [Bug] CORDIS_SHARED 非法 JSON 会在 Loader 构造时打崩所有 dsh --profile 启动（.env 也能灌进来）
- [#3279](https://github.com/deepseek-ai/deepseek-harness/discussions/3279) [Bug] Windows 原生文件夹选择器把路径在"低字节为 0 的汉字"处截断（如"xx项目开发"变成"xx项目"）
- [#2904](https://github.com/deepseek-ai/deepseek-harness/discussions/2904) [BUG] Spawned subagents inherit the parent's creation-time model options — stale provider keeps 401ing until server restart
- [#2872](https://github.com/deepseek-ai/deepseek-harness/discussions/2872) [BUG]dsh源代码问题 有没有人研究一下 啊
- [#3263](https://github.com/deepseek-ai/deepseek-harness/discussions/3263) [BUG]插件市场安装/更新插件后 dsh web 启动崩溃：duplicate loader entry id: storage（手工修复会被自动撤销）
- [#3253](https://github.com/deepseek-ai/deepseek-harness/discussions/3253) Bug: workspace creation fails on macOS for paths with spaces (firmlinked APFS volume trailing colon)
- [#3250](https://github.com/deepseek-ai/deepseek-harness/discussions/3250) [Bug][Fix available] pnpm add -g 后 native binding 解析失败，dsh web 找不到已安装插件
- [#3243](https://github.com/deepseek-ai/deepseek-harness/discussions/3243) [Bug Report]  chip 宽度无法变更, 无法正常显示文案等内容
- [#3240](https://github.com/deepseek-ai/deepseek-harness/discussions/3240) [Bug Report] 剪贴板粘贴图片报「仅支持 PNG、JPG、WebP、GIF 格式的图片」——影响第三方识图插件 dsh-vision-router 的粘贴流程
- [#3241](https://github.com/deepseek-ai/deepseek-harness/discussions/3241) [Bug Report] 剪贴板粘贴图片报「仅支持 PNG、JPG、WebP、GIF 格式的图片」——影响第三方识图插件 dsh-vision-router 的粘贴流程
- [#3234](https://github.com/deepseek-ai/deepseek-harness/discussions/3234) [Bug Report] Streamed tool-call arguments with truncated JSON are persisted, then every subsequent turn fails with `400 INVALID_REQUEST: Unterminated string ...` in the same session forever
- [#3230](https://github.com/deepseek-ai/deepseek-harness/discussions/3230) Bug: 安装插件时 npm 删除 dsh 核心包导致 dsh web 启动失败
- [#2763](https://github.com/deepseek-ai/deepseek-harness/discussions/2763) [Bug Report] 包族 npm dist-tag `latest` 不一致：全新项目按默认版本安装必然 ERESOLVE（0.0.1-rc.1 的 peer 引用已不存在的包名）
- [#3226](https://github.com/deepseek-ai/deepseek-harness/discussions/3226) Bug: adopted vision models lose input modalities during discovery (MODEL_DOES_NOT_SUPPORT_IMAGES)
- [#3222](https://github.com/deepseek-ai/deepseek-harness/discussions/3222) [Bug] HTTP 403 授权拒绝被归类为 AUTH，UI 显示 "API key is invalid"，原始错误不可见

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-08-20T00:50:51.937Z_