# DSH Bug Watch — 2026-09-06

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 17

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
_（无）_

## 📝 仅报告 — 无人互动
- [#1121](https://github.com/deepseek-ai/deepseek-harness/discussions/1121) [Bug] A plugin appending user/message without message.id permanently bricks the session history
- [#5587](https://github.com/deepseek-ai/deepseek-harness/discussions/5587) [BUG]删了team插件后，尝试自我修复，无法生成新对话
- [#5761](https://github.com/deepseek-ai/deepseek-harness/discussions/5761) [bug] llm-deepseek Config namespace silently reverts to DEFAULT_MODELS (and every other field default) when one required sibling field (thinking/reasoningEffort) is missing
- [#201](https://github.com/deepseek-ai/deepseek-harness/discussions/201) [BUG] spamming Error: sandbox escalation to "workspace-write" is not strictly wider than this call's current "danger-full-access" mode
- [#5524](https://github.com/deepseek-ai/deepseek-harness/discussions/5524) [bug] Four smaller ones: an uncancellable compaction, a borrowed timestamp in the crash-repair closer, an over-window first prompt, and an unbounded child turn
- [#5677](https://github.com/deepseek-ai/deepseek-harness/discussions/5677) [Bug] Web UI history never loads on Firefox-engine browsers (infinite "Loading history…") — Firefox-only failure in lossless-JSON validation
- [#5741](https://github.com/deepseek-ai/deepseek-harness/discussions/5741) [BUG]切换模型/供应商时导致全量重放会话历史，输入 token 从 1K暴增至900K，每次重试都再次超时
- [#5757](https://github.com/deepseek-ai/deepseek-harness/discussions/5757) Bug: reopening an existing session shows a blank chat (Assistant stream raw chunk must be a lossless JSON object), and approval dialogs lose their command text
- [#5754](https://github.com/deepseek-ai/deepseek-harness/discussions/5754) Bug: in-process subagent failures drop the child's error diagnostic — delegating tool shows only "subagent run failed"
- [#5715](https://github.com/deepseek-ai/deepseek-harness/discussions/5715) [bug] 403 quota exhaustion shown as "API key is invalid": every AUTH-coded failure swallows the real message
- [#5745](https://github.com/deepseek-ai/deepseek-harness/discussions/5745) [Bug] Linux 环境下当 DSH_HOME 位于 NTFS 挂载分区时，dsh 启动报 mode 755 权限错误且无法通过 chmod 修复
- [#3002](https://github.com/deepseek-ai/deepseek-harness/discussions/3002) Bug: compaction drops same-route reasoning effort and loses cache compatibility
- [#5733](https://github.com/deepseek-ai/deepseek-harness/discussions/5733) [Bug Report]: compaction policy never reserves headroom for Non-DS model's output budget — context-window errors after repeated compactions
- [#5705](https://github.com/deepseek-ai/deepseek-harness/discussions/5705) Bug Report — Windows 受限沙箱中启动 curl.exe 触发 0xC0000142 错误弹窗
- [#1542](https://github.com/deepseek-ai/deepseek-harness/discussions/1542) [bug] 后台任务挂死导致对话整体冻结：job_output(wait:true) 无活性信号，agent 陷入重复等待
- [#5690](https://github.com/deepseek-ai/deepseek-harness/discussions/5690) [Bug]: v1→v2 迁移拒绝含 TOOL_NOT_STARTED repair 结果的会话 —— chunk 合成后 repair message id 内嵌的 seq 未随重编号更新
- [#1624](https://github.com/deepseek-ai/deepseek-harness/discussions/1624) Bug: `npx @deepseek-ai/dsh web` fails on MSYS2, windows node.js and bun

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-09-06T02:19:27.421Z_