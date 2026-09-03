# DSH Bug Watch — 2026-09-03

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 17

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
_（无）_

## 📝 仅报告 — 无人互动
- [#5426](https://github.com/deepseek-ai/deepseek-harness/discussions/5426) [Bug] One third-party plugin load failure aborts the entire app, with no self-repair path / 单个第三方插件加载失败导致整个应用无法启动，且无自修复路径
- [#5464](https://github.com/deepseek-ai/deepseek-harness/discussions/5464) [Bug] ≥4 列 markdown 宽表横向滚动条在 Windows 上不可见（滚动仅 hover 才出现）
- [#5446](https://github.com/deepseek-ai/deepseek-harness/discussions/5446) Bug: turn 收尾阶段对 undefined 调用 .filter()，模型完整答案后本轮被判失败（0.1.2-alpha.5, web 会话）
- [#5460](https://github.com/deepseek-ai/deepseek-harness/discussions/5460) Bug: JSONL session ownership is process-local, allowing concurrent writers
- [#5456](https://github.com/deepseek-ai/deepseek-harness/discussions/5456) [Bug] Agent does not mark the final todo item as complete after multi-step tasks
- [#5379](https://github.com/deepseek-ai/deepseek-harness/discussions/5379) [Bug] cannot get property "remote.session" without inject：model-selection directoryFor 在启动期崩溃（host/web-app 0.1.2-alpha.4）
- [#5439](https://github.com/deepseek-ai/deepseek-harness/discussions/5439) Bug: stale broken fallback symlink (@deepseek-ai/dsh-storage-json) breaks every DeepSeek request after 0.1.2-alpha.3 upgrade
- [#5432](https://github.com/deepseek-ai/deepseek-harness/discussions/5432) [bug] dsh-session-persistence-jsonl: session materialize fails with EPERM on hard-link-less filesystems (HarmonyOS / hmdfs)
- [#5428](https://github.com/deepseek-ai/deepseek-harness/discussions/5428) [Bug] tool-jobs wake budget silently stalls idle agent on job-completion notices after 3 autonomous turns (intermittent)
- [#5403](https://github.com/deepseek-ai/deepseek-harness/discussions/5403) [Bug] UOS/Deepin(时区 Asia/Beijing)下 web 界面首次任务报 "client time zone must be UTC or a valid IANA area"
- [#5419](https://github.com/deepseek-ai/deepseek-harness/discussions/5419) [Bug] Bash 工具 `sandbox_permissions` 参数 Schema 语义不明确，导致工具调用持续失败 / Ambiguous `sandbox_permissions` schema causes persistent Bash tool-call failures
- [#5408](https://github.com/deepseek-ai/deepseek-harness/discussions/5408) Bug: session log corruption — resumed writer re-appends overlapping seqs at byte-EOF (appendLines never validates the durable tail)
- [#2167](https://github.com/deepseek-ai/deepseek-harness/discussions/2167) Bug: session log corrupted on resume - last 4 committed events re-appended with fresh timestamps (seq gap in committed region)
- [#5243](https://github.com/deepseek-ai/deepseek-harness/discussions/5243) [Bug] Interrupted-turn resume rewinds event seqs in session log; history load fails permanently ("corrupt session log: seq gap in committed region")
- [#339](https://github.com/deepseek-ai/deepseek-harness/discussions/339) Bug: 无法识别/claude/skill下面的软链接的skill
- [#5374](https://github.com/deepseek-ai/deepseek-harness/discussions/5374) [Bug] 已有 Web 会话在技能目录变化后不会刷新斜杠技能候选
- [#5322](https://github.com/deepseek-ai/deepseek-harness/discussions/5322) [Bug] dsh-browser: browser_open/browser_act crashes the dsh web process (CDP WebSocket has no error fallback); session resumes with "tool outcome unknown"

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-09-03T02:27:47.581Z_