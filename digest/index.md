# DSH Bug Watch — 2026-09-08

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 31

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
_（无）_

## 📝 仅报告 — 无人互动
- [#2763](https://github.com/deepseek-ai/deepseek-harness/discussions/2763) [Bug Report] 包族 npm dist-tag `latest` 不一致：全新项目按默认版本安装必然 ERESOLVE（0.0.1-rc.1 的 peer 引用已不存在的包名）
- [#5909](https://github.com/deepseek-ai/deepseek-harness/discussions/5909) [Bug] Broken sessions and v0→v1→v2 Migration Failure / 会话损坏及 v0→v1→v2 迁移失败
- [#5910](https://github.com/deepseek-ai/deepseek-harness/discussions/5910) [Bug] Commands/list Flood Pins CPU / 自持式 commands/list 洪泛占满 CPU
- [#5907](https://github.com/deepseek-ai/deepseek-harness/discussions/5907) Bug: Chat view freezes after loading earlier history — root cause found, fix branch ready
- [#5905](https://github.com/deepseek-ai/deepseek-harness/discussions/5905) [Bug] A misbehaving MCP server can hang the app forever while listing its tools
- [#1026](https://github.com/deepseek-ai/deepseek-harness/discussions/1026) [Bug Report] `edit`（str_replace_editor）重写文件时静默剥掉 UTF-8 BOM
- [#5895](https://github.com/deepseek-ai/deepseek-harness/discussions/5895) [Bug] Composition-adjacent events can slip past the guard within the old 10ms window
- [#3504](https://github.com/deepseek-ai/deepseek-harness/discussions/3504) [Bug] Web 界面中文输入法（IME）失效：拼音字母直接上屏，无候选词
- [#5893](https://github.com/deepseek-ai/deepseek-harness/discussions/5893) [bug] abnormal version of @deepseek-ai/dsh-attachment
- [#1121](https://github.com/deepseek-ai/deepseek-harness/discussions/1121) [Bug] A plugin appending user/message without message.id permanently bricks the session history
- [#5754](https://github.com/deepseek-ai/deepseek-harness/discussions/5754) Bug: in-process subagent failures drop the child's error diagnostic — delegating tool shows only "subagent run failed"
- [#5887](https://github.com/deepseek-ai/deepseek-harness/discussions/5887) Bug report: dsh-client-ui-settings-plugins (0.1.3-alpha.2) - Subagent / Web search config cards vanish when clicked in 插件配置
- [#5884](https://github.com/deepseek-ai/deepseek-harness/discussions/5884) [Bug] Web Chat/Trajectory view stops mid-session when tool call ids repeat across steps | 工具调用ID跨step重复导致对话视图卡死
- [#5885](https://github.com/deepseek-ai/deepseek-harness/discussions/5885) [Bug] GUI: 权限审批弹窗不弹出，Agent 卡住只能靠刷新恢复
- [#3489](https://github.com/deepseek-ai/deepseek-harness/discussions/3489) [Bug] Expired MCP session causes repeated tool-call failures without reconnect or circuit breaking
- [#1497](https://github.com/deepseek-ai/deepseek-harness/discussions/1497) Bug: corrupt session log after unclean exit — replayed events cause seq gap in committed region, history unrecoverable
- [#5870](https://github.com/deepseek-ai/deepseek-harness/discussions/5870) [bug]dsh-0.1.3-alpha.1崩溃后重启无法恢复会话
- [#5857](https://github.com/deepseek-ai/deepseek-harness/discussions/5857) [Bug Report] Seeded / forked sessions fallback to workspace name after restart (cached title skipped during cold listing)
- [#5862](https://github.com/deepseek-ai/deepseek-harness/discussions/5862) [Bug] MCP 工具的 inputSchema 未透出到模型侧工具声明（模型只能盲调参数、-32602 反复试错）
- [#5863](https://github.com/deepseek-ai/deepseek-harness/discussions/5863) [Bug] pnpm 'missing peer' warnings on `dsh plugin add` are false positives — peers resolve via the shared fallback
- [#5499](https://github.com/deepseek-ai/deepseek-harness/discussions/5499) [Bug] 沙箱 "denied" 判定依赖英文 GNU 报错文本 —— zh_CN/UOS 默认 locale 下沙箱拒绝被漏判
- [#5403](https://github.com/deepseek-ai/deepseek-harness/discussions/5403) [Bug] UOS/Deepin(时区 Asia/Beijing)下 web 界面首次任务报 "client time zone must be UTC or a valid IANA area"
- [#5864](https://github.com/deepseek-ai/deepseek-harness/discussions/5864) [bug] Plugin-tree boot crash-loops when a plugin imports an export the bundled @deepseek-ai package no longer provides (dsh-run2skill ↔ dsh-typert-protocol RemoteError)
- [#5547](https://github.com/deepseek-ai/deepseek-harness/discussions/5547) [BUG] session_projcache.json — 每次会话更新全量重写 74MB（写放大 / SSD 磨损）
- [#5851](https://github.com/deepseek-ai/deepseek-harness/discussions/5851) [Bug] 无参数工具调用报 "binding arguments must be lossless JSON"（get_goal / job_list / MCP list_pages 必现）
- [#3632](https://github.com/deepseek-ai/deepseek-harness/discussions/3632) [Bug] [Update] Orphan agent/inbox/spliced splits log validity from session readability — impact upgrade: a routine post-incident repair can produce a durably intact but unreadable session (self-review of our own bug report)
- [#5843](https://github.com/deepseek-ai/deepseek-harness/discussions/5843) [Bug][0.1.2-rc.1] 冷态 seeded 会话重启后丢失全部列表投影：cachedSnapshot 以 inheritedEventCount = 0 校验身份，弃用有效检查点
- [#5850](https://github.com/deepseek-ai/deepseek-harness/discussions/5850) Bug: dsh 在 wsl2 环境下无法唤起 windows 程序
- [#5846](https://github.com/deepseek-ai/deepseek-harness/discussions/5846) [Bug] Mounting dsh-hooks-claude-code paralyzes the host: every tool call dies with "agent.session.events is not iterable"
- [#5844](https://github.com/deepseek-ai/deepseek-harness/discussions/5844) [Bug] Local file plugins in a profile make every official DeepSeek request fail with REQUEST_EXTENSION (profile package.json must declare non-empty name and version)
- [#201](https://github.com/deepseek-ai/deepseek-harness/discussions/201) [BUG] spamming Error: sandbox escalation to "workspace-write" is not strictly wider than this call's current "danger-full-access" mode

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-09-08T02:28:48.754Z_