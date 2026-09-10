# DSH Bug Watch — 2026-09-10

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 23

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
- [#5984](https://github.com/deepseek-ai/deepseek-harness/discussions/5984) **[Bug] `ensure-project-dir` bypasses the fs seam (host `node:fs.mkdir` on a remote workspace cwd)**<br/>  分类：Q&A · 标签：— · 最近更新：2026-09-09

## 📝 仅报告 — 无人互动
- [#6087](https://github.com/deepseek-ai/deepseek-harness/discussions/6087) BUG:UI Style issue
- [#6082](https://github.com/deepseek-ai/deepseek-harness/discussions/6082) [Bug] 0.1.5-alpha.2: published dsh-client-store omits Zustand/Immer runtime dependencies
- [#6084](https://github.com/deepseek-ai/deepseek-harness/discussions/6084) Bug: Web GUI "Load earlier" silently no-ops and gets permanently stuck on long sessions (`request-prompt` definition withdraws a materialized target)
- [#1624](https://github.com/deepseek-ai/deepseek-harness/discussions/1624) Bug: `npx @deepseek-ai/dsh web` fails on MSYS2
- [#6059](https://github.com/deepseek-ai/deepseek-harness/discussions/6059) [Bug] Runaway tool-call arguments consume the full output budget before validation
- [#589](https://github.com/deepseek-ai/deepseek-harness/discussions/589) [Bug] Windows: default port 3080 can fall in Hyper-V excluded port range, dsh web fails with cryptic EACCES stack trace
- [#6064](https://github.com/deepseek-ai/deepseek-harness/discussions/6064) Bug: directory-specifier loader rows fail every DeepSeek request with REQUEST_EXTENSION
- [#6010](https://github.com/deepseek-ai/deepseek-harness/discussions/6010) [Bug] V2→V3 迁移拒绝含"中断轮次重启"的 v2 会话：turn/start N+1 does not open expected turn N（附根因与修复）
- [#6035](https://github.com/deepseek-ai/deepseek-harness/discussions/6035) Bug: Tool call with empty name/id → Error: unknown tool "" (UNKNOWN_TOOL)
- [#6030](https://github.com/deepseek-ai/deepseek-harness/discussions/6030) [bug][agent-loop] steer 在阻塞式 job_output(wait) 期间无法抢占:next-step 只在 step 边界消费,会话最长 10 分钟对用户输入无响应(0.1.5-alpha.1 实测)
- [#6061](https://github.com/deepseek-ai/deepseek-harness/discussions/6061) [Bug] 桌面端（dev:desktop / 打包版）在 macOS 上 ⌘V 粘贴失效，导致无法输入 API Key 配置模型
- [#5983](https://github.com/deepseek-ai/deepseek-harness/discussions/5983) [Bug] Custom providers are hidden and cannot be added in web UI (`llm-pi-ai` namespace not exposed in `settings/describe`)
- [#6022](https://github.com/deepseek-ai/deepseek-harness/discussions/6022) [Bug] Forking a session inherits the parent's queued prompts — the child executes them on first submit
- [#5926](https://github.com/deepseek-ai/deepseek-harness/discussions/5926) [Bug] connection fails to start when a third-party plugin registers an HTTP channel: cannot get property 'webServer' without inject
- [#5966](https://github.com/deepseek-ai/deepseek-harness/discussions/5966) bug: deepseek harness 现在对 AGENTS. md 的行为有问题。
- [#6052](https://github.com/deepseek-ai/deepseek-harness/discussions/6052) [Bug] Web composer: Lexical error #14 (infinite transform loop) and amber/missing text when typing after a claimed slash-command token
- [#5976](https://github.com/deepseek-ai/deepseek-harness/discussions/5976) [Bug] Agent 在超长上下文 + max reasoning effort 下陷入思考退化循环：回合零产出、无自动熔断，需手动中止（v4.1-flash；同配置 v4-flash 3000+ 步未复发）
- [#2983](https://github.com/deepseek-ai/deepseek-harness/discussions/2983) [Bug] No GPU access
- [#6024](https://github.com/deepseek-ai/deepseek-harness/discussions/6024) [bug] pwsh 和 bash 无法显示运行的完整命令
- [#5573](https://github.com/deepseek-ai/deepseek-harness/discussions/5573) [Bug][Windows] 36 of 48 `pnpm test` failures are suites creating symlinks without the Windows privilege
- [#6001](https://github.com/deepseek-ai/deepseek-harness/discussions/6001) [Bug] Cross-process cold attach: observeSession/promote commits crash-repair closers against a session live in another process (5,876 colliding seqs, history unobservable)
- [#5998](https://github.com/deepseek-ai/deepseek-harness/discussions/5998) [Bug] Minimal preset: persistent pwsh input corrupted at console-width wrap boundaries (`Write-Output` → `rite-Output`)

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-09-10T02:31:46.449Z_