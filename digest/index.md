# DSH Bug Watch — 2026-09-07

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 19

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
_（无）_

## 📝 仅报告 — 无人互动
- [#5818](https://github.com/deepseek-ai/deepseek-harness/discussions/5818) [Bug] Session history fails to load after upgrading: the v0 migration inventory refuses released payload members (permission/preset origin, flat pi-ai replayState)
- [#5827](https://github.com/deepseek-ai/deepseek-harness/discussions/5827) [Bug] Browser form-history (autofill) leaks provider Base URLs into the sidebar search box after model configuration
- [#5826](https://github.com/deepseek-ai/deepseek-harness/discussions/5826) [Bug] glob tool false "No files found" when path is a subdirectory and the pattern starts with a literal segment (ripgrep --glob matches CWD-relative, not root-relative)
- [#5825](https://github.com/deepseek-ai/deepseek-harness/discussions/5825) [Bug] 删除 agent preset 后，空白会话被缓存复用导致无法切换 preset
- [#5813](https://github.com/deepseek-ai/deepseek-harness/discussions/5813) [Bug] npm `latest` dist-tag on @deepseek-ai plugin packages is stuck on 0.0.1-rc.1, so `dsh plugin add` installs a stale/broken build
- [#5794](https://github.com/deepseek-ai/deepseek-harness/discussions/5794) Bug: Web UI reports "API key is invalid" while headless works with the same provider
- [#5811](https://github.com/deepseek-ai/deepseek-harness/discussions/5811) [Bug] Stream idle watchdog aborts are misreported as `TRANSPORT:terminated`, and provider-level `streamIdleTimeoutMs` never reaches the effective timeout layer
- [#4549](https://github.com/deepseek-ai/deepseek-harness/discussions/4549) [Bug] Scheduler failure leaves dangling tool/call — session permanently returns 400 INVALID_REQUEST (fix: reuse appendSkippedToolCall, #4017 follow-up)
- [#3994](https://github.com/deepseek-ai/deepseek-harness/discussions/3994) [Bug] Terminal background-job records are never reclaimed in a live session: unbounded store growth, O(n) list/start scans, and a silent memory footprint that grows with session age
- [#3662](https://github.com/deepseek-ai/deepseek-harness/discussions/3662) [Bug] Cancelling a task that spawned subagents permanently corrupts session persistence — production data integrity failure, no recovery path for operators
- [#3633](https://github.com/deepseek-ai/deepseek-harness/discussions/3633) [Bug] [Update] Missing session-level lock silently corrupts shared-home deployments — impact upgrade: any multi-writer topology destroys the durable work record (self-review of our own bug report)
- [#3632](https://github.com/deepseek-ai/deepseek-harness/discussions/3632) [Bug] [Update] Orphan agent/inbox/spliced splits log validity from session readability — impact upgrade: a routine post-incident repair can produce a durably intact but unreadable session (self-review of our own bug report)
- [#696](https://github.com/deepseek-ai/deepseek-harness/discussions/696) [BUG] RTL mixed-text rendering is broken when a sentence starts with an English word
- [#3002](https://github.com/deepseek-ai/deepseek-harness/discussions/3002) Bug: compaction drops same-route reasoning effort and loses cache compatibility
- [#5095](https://github.com/deepseek-ai/deepseek-harness/discussions/5095) [Bug] In-process subagents cannot write under inherited workspace-write because escalation fields remain exposed
- [#5787](https://github.com/deepseek-ai/deepseek-harness/discussions/5787) [Bug] Markdown table: overflow is decided by column count, and the scrollbar is hidden until hover so wide columns become unreachable
- [#5766](https://github.com/deepseek-ai/deepseek-harness/discussions/5766) [bug] Compaction summarises the skill catalog and AGENTS.md that the next step re-injects verbatim; a loaded skill body gets no such restore
- [#1697](https://github.com/deepseek-ai/deepseek-harness/discussions/1697) Bug: installing any plugin that depends on @deepseek-ai/dsh-tools breaks every tool call (Cannot read properties of undefined (reading 'prepare'))
- [#5524](https://github.com/deepseek-ai/deepseek-harness/discussions/5524) [bug] Four smaller ones: an uncancellable compaction, a borrowed timestamp in the crash-repair closer, an over-window first prompt, and an unbounded child turn

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-09-07T02:16:35.862Z_