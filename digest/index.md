# DSH Bug Watch — 2026-09-05

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 29

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
_（无）_

## 📝 仅报告 — 无人互动
- [#5588](https://github.com/deepseek-ai/deepseek-harness/discussions/5588) Bug: same-mode sandbox_permissions is rejected as an invalid escalation
- [#5677](https://github.com/deepseek-ai/deepseek-harness/discussions/5677) [Bug] Web UI history never loads on Firefox-engine browsers (infinite "Loading history…") — Firefox-only failure in lossless-JSON validation
- [#5673](https://github.com/deepseek-ai/deepseek-harness/discussions/5673) Bug: LLM requests die at ~302s with `terminated` when a provider needs >5min silent prefill
- [#5670](https://github.com/deepseek-ai/deepseek-harness/discussions/5670) [Bug] 0.1.2-rc.1: llm-pi-ai providers never register — settings namespace "llm-pi-ai" absent, models missing from picker/Models page
- [#5662](https://github.com/deepseek-ai/deepseek-harness/discussions/5662) Bug: automatic pressure compaction can be skipped on the first resumed turn
- [#5630](https://github.com/deepseek-ai/deepseek-harness/discussions/5630) Bug: Chinese IME (Microsoft Pinyin) input corrupted in the Web GUI chat composer
- [#5603](https://github.com/deepseek-ai/deepseek-harness/discussions/5603) [BUG] dsh 0.1.2-rc.1 Settings→Models "Add provider" 静默失效
- [#4555](https://github.com/deepseek-ai/deepseek-harness/discussions/4555) [Bug] Subagents always fail with 400 "Reasoning is mandatory" when parent uses a thinking-required model (Ox Alpha via OpenRouter)
- [#5646](https://github.com/deepseek-ai/deepseek-harness/discussions/5646) [BUG] Could not execute tool(s): "write": required field "content" is missing
- [#5634](https://github.com/deepseek-ai/deepseek-harness/discussions/5634) [BUG] 两个 CSS 视觉跳动 bug
- [#1026](https://github.com/deepseek-ai/deepseek-harness/discussions/1026) [Bug Report] `edit`（str_replace_editor）重写文件时静默剥掉 UTF-8 BOM
- [#5629](https://github.com/deepseek-ai/deepseek-harness/discussions/5629) [Bug] SEA VFS patches CommonJS fs but ESM fs exports stay stale; preset discovery receives strings instead of Dirent
- [#5628](https://github.com/deepseek-ai/deepseek-harness/discussions/5628) [Bug] single-exe Web boot loses dsh.client metadata behind moduleFallback proxies
- [#5627](https://github.com/deepseek-ai/deepseek-harness/discussions/5627) [Bug] single-exe Web profile misses dsh-session-title-llm; runtime closure verification skips apps/*
- [#5613](https://github.com/deepseek-ai/deepseek-harness/discussions/5613) [bug]网页搜索设置项，“提供方默认地址”指向有误
- [#5609](https://github.com/deepseek-ai/deepseek-harness/discussions/5609) [BUG]Upgrade from rc.6 to 0.1.2-rc.1: models page dead until restart + lazy client bundle race
- [#3229](https://github.com/deepseek-ai/deepseek-harness/discussions/3229) [BUG]死循环-- 一个小问答耗尽我的余额
- [#5428](https://github.com/deepseek-ai/deepseek-harness/discussions/5428) [Bug] tool-jobs wake budget silently stalls idle agent on job-completion notices after 3 autonomous turns (intermittent)
- [#5587](https://github.com/deepseek-ai/deepseek-harness/discussions/5587) [BUG]删了team插件后，尝试自我修复，无法生成新对话
- [#5596](https://github.com/deepseek-ai/deepseek-harness/discussions/5596) [BUG] 0.1.2-rc.1 历史加载失败：this.ctx.sessionQuery.observeSession is not a function（gateway/internal）
- [#5599](https://github.com/deepseek-ai/deepseek-harness/discussions/5599) [BUG] Running the latest dsh built from source fails to boot the `web`
- [#5594](https://github.com/deepseek-ai/deepseek-harness/discussions/5594) [BUG] deadlocks when surface exceeds the model window — the summarization LLM call itself fails with "context overflow", so the session can never compress (nor converse) again
- [#5593](https://github.com/deepseek-ai/deepseek-harness/discussions/5593) [Bug] Window系统更新到v0.1.2-rc.1 无法加载@deepseek-ai/dsh-session-log-export导致无法正常进入DSH
- [#5512](https://github.com/deepseek-ai/deepseek-harness/discussions/5512) [bug] Tool params declared as oneOf (no top-level type) are serialized to a string, so oneOf validation always fails with matched 0
- [#5581](https://github.com/deepseek-ai/deepseek-harness/discussions/5581) [bug] cordis_define: typeless plugin parameter schema makes the web client stringify the object argument
- [#5576](https://github.com/deepseek-ai/deepseek-harness/discussions/5576) [bug]0.1.2-rc.1重启后，工作区内的对话名称，全部为工作区的名称，点击进入对话后才恢复为该对话的原有名称
- [#2094](https://github.com/deepseek-ai/deepseek-harness/discussions/2094) [Bug] Windows 上 ensureSymlink 无法识别自己创建的 junction，导致 dsh web 第二次启动失败（附修复）
- [#5573](https://github.com/deepseek-ai/deepseek-harness/discussions/5573) [Bug][Windows] 36 of 48 `pnpm test` failures are suites creating symlinks without the Windows privilege
- [#5521](https://github.com/deepseek-ai/deepseek-harness/discussions/5521) [bug] Compaction sends the tool schemas with no tool choice, so a tool-capable model answers with a tool call and the summary is lost silently

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-09-05T02:23:29.255Z_