# DSH Bug Watch — 2026-09-01

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 35

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
- [#580](https://github.com/deepseek-ai/deepseek-harness/discussions/580) **[bug] Win32 原生目录选择器在 U+XX00（如「开」）处截断 UTF-16 路径 — 附可 cherry-pick 修复**<br/>  分类：General · 标签：— · 最近更新：2026-08-31

## 👥 社区参与 — 已采纳答案，作者非 committer
_（无）_

## 📝 仅报告 — 无人互动
- [#5195](https://github.com/deepseek-ai/deepseek-harness/discussions/5195) [bug]用创造模式创建agent预设陷入Error: invalid arguments: "plugin" must match exactly one oneOf branch (matched 0)循环
- [#2140](https://github.com/deepseek-ai/deepseek-harness/discussions/2140) BUG: npm warn deprecated node-domexception@1.0.0: Use your platform's native DOMException instead
- [#1047](https://github.com/deepseek-ai/deepseek-harness/discussions/1047) [Bug Report] 单个会话日志损坏使 `session.list` 整体 500，Web 侧边栏全部会话消失且无界面提示
- [#5266](https://github.com/deepseek-ai/deepseek-harness/discussions/5266) [Bug] Subagents keep using the main session's original model after switching the session model
- [#4379](https://github.com/deepseek-ai/deepseek-harness/discussions/4379) [Bug] Harness npx Installation will stuck
- [#5262](https://github.com/deepseek-ai/deepseek-harness/discussions/5262) [BUG] 会话结束后任务面板仍显示"进行中"的 todo：todos 投影只在下次 turn/start 清空，TodoPanel 缺会话活性信号
- [#5261](https://github.com/deepseek-ai/deepseek-harness/discussions/5261) [bug]内置 nvidia provider 模型列表过时，请求返回 HTTP 410 Gone
- [#5260](https://github.com/deepseek-ai/deepseek-harness/discussions/5260) [BUG] @deepseek-ai/dsh-tool-fs-search 在 asar 环境下无法找到 ripgrep 二进制
- [#5259](https://github.com/deepseek-ai/deepseek-harness/discussions/5259) [BUG] Error: Client Cordis inspect Slots.listSubTree rejected input: "input" must be an object
- [#5251](https://github.com/deepseek-ai/deepseek-harness/discussions/5251) [BUG] 当沙盒处于工作区写入权限，并且接入openai模型，多阶段任务不会正确显示进度，在完成前一直停留在初始进度
- [#5250](https://github.com/deepseek-ai/deepseek-harness/discussions/5250) [Bug] `dsh web` process crashes with uncaught ENOENT when a subprocess spill temp dir disappears
- [#5249](https://github.com/deepseek-ai/deepseek-harness/discussions/5249) [Bug] `dsh web` process crashes with uncaught ENOENT when a subprocess spill temp dir disappears
- [#5116](https://github.com/deepseek-ai/deepseek-harness/discussions/5116) Bug: pre-existing TS errors block pnpm run build on master (5 errors in test files, @types/react bigint/ReactNode)
- [#5245](https://github.com/deepseek-ai/deepseek-harness/discussions/5245) [Bug] Any blank/unparsable JSONL row hard-fails session history load ("corrupt session log: unparsable committed event at line N")
- [#5243](https://github.com/deepseek-ai/deepseek-harness/discussions/5243) [Bug] Interrupted-turn resume rewinds event seqs in session log; history load fails permanently ("corrupt session log: seq gap in committed region")
- [#2929](https://github.com/deepseek-ai/deepseek-harness/discussions/2929) [Bug] ask_user_question hangs indefinitely when no tab renders the question — no timeout; manual stop surfaces misleading ASK_ABORTED
- [#5225](https://github.com/deepseek-ai/deepseek-harness/discussions/5225) [bug] Code Mode 下 skill 只回 SKILL.md，配套 references/ 被当成 workspace 路径读空 — 附可 cherry-pick 修复
- [#3650](https://github.com/deepseek-ai/deepseek-harness/discussions/3650) Bug: ask_user_question card hides options and footer when the question is long (fix prepared)
- [#5175](https://github.com/deepseek-ai/deepseek-harness/discussions/5175) [Bug] OutputCollector.spillAll writeSync is uncaught: EDQUOT/ENOSPC kills the whole dsh web host
- [#5204](https://github.com/deepseek-ai/deepseek-harness/discussions/5204) [Bug]不同的模型dsh的计划模式会表现出不一样，出现了“未经同意自己修改文件”
- [#5140](https://github.com/deepseek-ai/deepseek-harness/discussions/5140) [bug] Continous scrolling of response makes chat unreadable -> Keep auto scroll paused (and only scroll up once before the text comes in)
- [#5142](https://github.com/deepseek-ai/deepseek-harness/discussions/5142) [bug]同时开启desktop和web时session内容同步报错
- [#1452](https://github.com/deepseek-ai/deepseek-harness/discussions/1452) BUG: 同一 DSH_HOME 下多进程并发写同一会话日志，导致 seq 重复、整段历史无法加载
- [#1473](https://github.com/deepseek-ai/deepseek-harness/discussions/1473) [Bug] A single corrupt session artifact prevents dsh web from booting (0.1.0-rc.6 / 0.1.1-rc.2)
- [#4454](https://github.com/deepseek-ai/deepseek-harness/discussions/4454) Bug: compactor rejects valid short summaries with “summary is not smaller”
- [#558](https://github.com/deepseek-ai/deepseek-harness/discussions/558) [bug] code 模式下 run_code/bash 同名 required description 导致工具调用死循环
- [#1180](https://github.com/deepseek-ai/deepseek-harness/discussions/1180) [BUG]一直出现Error: invalid arguments: missing required property "description"
- [#3090](https://github.com/deepseek-ai/deepseek-harness/discussions/3090) Bug: tool calls lose their name/id when streamed through OpenAI-compatible gateways (empty-string deltas overwrite assembly)
- [#5168](https://github.com/deepseek-ai/deepseek-harness/discussions/5168) [Bug] Auto-restored session history fails to load on startup; manual sidebar selection works (v0.1.1-rc.2)
- [#5165](https://github.com/deepseek-ai/deepseek-harness/discussions/5165) [Bug] 巨型会话家族（主会话+51个子代理，342MB zstd）全量载入导致 dsh web V8 堆 OOM 崩溃（含完整 GC 曲线）
- [#1624](https://github.com/deepseek-ai/deepseek-harness/discussions/1624) Bug: `npx @deepseek-ai/dsh web` fails silently on MSYS2 (exit code 127)
- [#1497](https://github.com/deepseek-ai/deepseek-harness/discussions/1497) Bug: corrupt session log after unclean exit — replayed events cause seq gap in committed region, history unrecoverable
- [#5163](https://github.com/deepseek-ai/deepseek-harness/discussions/5163) [Bug] popupSelect commands do not return focus to the composer after selection
- [#223](https://github.com/deepseek-ai/deepseek-harness/discussions/223) [bug] @deepseek-ai/dsh 发布包依赖图缺陷:cordis 反向 peer 依赖自己的插件,互相成环,严格解析器无法安装

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-09-01T02:59:37.005Z_