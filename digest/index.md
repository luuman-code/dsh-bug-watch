# DSH Bug Watch — 2026-09-04

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 29

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
- [#3786](https://github.com/deepseek-ai/deepseek-harness/discussions/3786) **[Bug] npx @deepseek-ai/dsh web 无限卡死：npm 依赖解析死循环（CPU 100%、零网络流量、换镜像无效）**<br/>  分类：General · 标签：— · 最近更新：2026-09-03

## 👥 社区参与 — 已采纳答案，作者非 committer
- [#4664](https://github.com/deepseek-ai/deepseek-harness/discussions/4664) **[Bug]？ goal 功能开启后 agent 无法被动等待后台任务：每次进入 idle 即被强制注入 <goal_round>，空转消耗轮次与 token**<br/>  分类：Q&A · 标签：— · 最近更新：2026-09-03

## 📝 仅报告 — 无人互动
- [#5573](https://github.com/deepseek-ai/deepseek-harness/discussions/5573) [Bug][Windows] 36 of 48 `pnpm test` failures are suites creating symlinks without the Windows privilege
- [#5547](https://github.com/deepseek-ai/deepseek-harness/discussions/5547) [BUG] session_projcache.json — 每次会话更新全量重写 74MB（写放大 / SSD 磨损）
- [#1026](https://github.com/deepseek-ai/deepseek-harness/discussions/1026) [Bug Report] `edit`（str_replace_editor）重写文件时静默剥掉 UTF-8 BOM
- [#5524](https://github.com/deepseek-ai/deepseek-harness/discussions/5524) [bug] Four smaller ones: an uncancellable compaction, a borrowed timestamp in the crash-repair closer, an over-window first prompt, and an unbounded child turn
- [#5567](https://github.com/deepseek-ai/deepseek-harness/discussions/5567) [bug] Session persistence race: session/end-seed + agent/inbox/spliced collision produces 'seq gap in committed region'
- [#5521](https://github.com/deepseek-ai/deepseek-harness/discussions/5521) [bug] Compaction sends the tool schemas with no tool choice, so a tool-capable model answers with a tool call and the summary is lost silently
- [#5557](https://github.com/deepseek-ai/deepseek-harness/discussions/5557) [Bug]: 断连重连后前端会话目录渲染循环抛 cannot get property "remote.session" without inject，同一场景下宿主多次以未处理的 write EOF 崩溃
- [#5556](https://github.com/deepseek-ai/deepseek-harness/discussions/5556) Bug Report: 会话空闲时发送消息输入框闪烁
- [#5550](https://github.com/deepseek-ai/deepseek-harness/discussions/5550) Bug: foreground one-shot subagents (workflow/ralph/run_in_background:false) fail on any tool call when Agent Teams is mounted
- [#5544](https://github.com/deepseek-ai/deepseek-harness/discussions/5544) [Bug] 0.1.2-rc.1 (next): client-modules "build-time externals drift" breaks session/workspace controllers ("loader fibers failed")
- [#5545](https://github.com/deepseek-ai/deepseek-harness/discussions/5545) [Bug]网页搜索 API Key 导致会话只报错、无内容返回
- [#5534](https://github.com/deepseek-ai/deepseek-harness/discussions/5534) [bug] The web UI's task list reflects only the model's last `todo_write`, so it lags by dozens of steps and then jumps
- [#5509](https://github.com/deepseek-ai/deepseek-harness/discussions/5509) bug: same-mode sandbox escalation still requires justification/approval (never policy auto-rejects); fix exists locally as fix/sandbox-escalation-same-mode, absent from all releases
- [#5522](https://github.com/deepseek-ai/deepseek-harness/discussions/5522) [bug] directory-picker-auto reads a service's inherited DISPLAY as "a user is at this screen", so add-workspace opens a dialog nobody can see
- [#2094](https://github.com/deepseek-ai/deepseek-harness/discussions/2094) [Bug] Windows 上 ensureSymlink 无法识别自己创建的 junction，导致 dsh web 第二次启动失败（附修复）
- [#5523](https://github.com/deepseek-ai/deepseek-harness/discussions/5523) [bug] Settings persistence follows the page hostname, not the server's trusted hosts, so a remote browser keeps nothing and re-sees the welcome notice on every load
- [#4666](https://github.com/deepseek-ai/deepseek-harness/discussions/4666) [bug] Spawn-backed subagents drop reasoningEffort; endpoints that require thinking reject every delegation
- [#5512](https://github.com/deepseek-ai/deepseek-harness/discussions/5512) [bug] Tool params declared as oneOf (no top-level type) are serialized to a string, so oneOf validation always fails with matched 0
- [#3128](https://github.com/deepseek-ai/deepseek-harness/discussions/3128) [Bug] dsh-llm-pi-ai ignores Retry-After when retrying — TPM-limited retries always fail
- [#5504](https://github.com/deepseek-ai/deepseek-harness/discussions/5504) bug: same-mode sandbox escalation still requires justification/approval (never policy auto-rejects); fix exists locally as fix/sandbox-escalation-same-mode, absent from all releases
- [#5403](https://github.com/deepseek-ai/deepseek-harness/discussions/5403) [Bug] UOS/Deepin(时区 Asia/Beijing)下 web 界面首次任务报 "client time zone must be UTC or a valid IANA area"
- [#5499](https://github.com/deepseek-ai/deepseek-harness/discussions/5499) [Bug] 沙箱 "denied" 判定依赖英文 GNU 报错文本 —— zh_CN/UOS 默认 locale 下沙箱拒绝被漏判
- [#5487](https://github.com/deepseek-ai/deepseek-harness/discussions/5487) [Bug] Cold session history load fails after interrupted remote stream
- [#5486](https://github.com/deepseek-ai/deepseek-harness/discussions/5486) [Bug] @ mention picker is flooded with subagent worker transcripts (3-line fix proposed)
- [#5480](https://github.com/deepseek-ai/deepseek-harness/discussions/5480) [bug] Windows native directory picker truncates the path when a path character's code point is a multiple of 256 (e.g. 「一」 U+4E00)
- [#5478](https://github.com/deepseek-ai/deepseek-harness/discussions/5478) [Bug] fix pnpm run build error with tsc v7.0 (build faster)
- [#5477](https://github.com/deepseek-ai/deepseek-harness/discussions/5477) Bug:Windows ACL 沙箱在其缓存的私有临时目录被回收后永久失效

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-09-04T02:22:58.670Z_