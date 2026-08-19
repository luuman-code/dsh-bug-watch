# DSH Bug Watch — 2026-08-19

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 21

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
_（无）_

## 📝 仅报告 — 无人互动
- [#2011](https://github.com/deepseek-ai/deepseek-harness/discussions/2011) bug: /api/host.describe 未正确暴露 version 而是被硬编码为 0.0.1
- [#199](https://github.com/deepseek-ai/deepseek-harness/discussions/199) Bug: vLLM self-hosted deployments stream thinking as delta.reasoning — adapter drops it (fix available)
- [#3207](https://github.com/deepseek-ai/deepseek-harness/discussions/3207) [Bug]  [Windows sandbox] schannel TLS fails with SEC_E_NO_CREDENTIALS under workspace-write/read-only (restricted token)
- [#2763](https://github.com/deepseek-ai/deepseek-harness/discussions/2763) [Bug Report] 包族 npm dist-tag `latest` 不一致：全新项目按默认版本安装必然 ERESOLVE（0.0.1-rc.1 的 peer 引用已不存在的包名）
- [#3111](https://github.com/deepseek-ai/deepseek-harness/discussions/3111) [Bug] 版本 token 包含 ctime 导致元数据未变、内容未变时误报 FS_STALE_VERSION
- [#3178](https://github.com/deepseek-ai/deepseek-harness/discussions/3178) [BUG] 在WSL下使用workspace write模式时，由于/dev/dxg被隐藏，无法使用gpu
- [#1047](https://github.com/deepseek-ai/deepseek-harness/discussions/1047) [Bug Report] 单个会话日志损坏使 `session.list` 整体 500，Web 侧边栏全部会话消失且无界面提示
- [#3190](https://github.com/deepseek-ai/deepseek-harness/discussions/3190) [Bug] dsh web crashes with ENOENT when external temp cleanup removes the subprocess spill dir
- [#675](https://github.com/deepseek-ai/deepseek-harness/discussions/675) [bug] SQLite scanRows torn-tail tolerance deletes valid events together with the bad row
- [#2789](https://github.com/deepseek-ai/deepseek-harness/discussions/2789) [Bug] session.selectModel rejects switching to text-only models when history has images — should auto-filter instead
- [#2370](https://github.com/deepseek-ai/deepseek-harness/discussions/2370) [Bug Report] Cannot switch to text‑only model in chat session with image history
- [#2587](https://github.com/deepseek-ai/deepseek-harness/discussions/2587) [Bug] llm-pi-ai: hand-declared routes cannot disable the OpenAI "developer" system-prompt role — reasoning requests 400 on gateways that only accept "system" (e.g. Alibaba Cloud Model Studio / 阿里云百炼)
- [#280](https://github.com/deepseek-ai/deepseek-harness/discussions/280) [BUG] llm-pi-ai 应支持配置 compat.supportsDeveloperRole
- [#2388](https://github.com/deepseek-ai/deepseek-harness/discussions/2388) [Bug] developer role rejected (HTTP 400) by custom domestic (China) OpenAI-compatible providers
- [#2023](https://github.com/deepseek-ai/deepseek-harness/discussions/2023) [BUG]Expose `supportsDeveloperRole` (and sibling OpenAI-completions compat switches) in `llm-pi-ai`
- [#2007](https://github.com/deepseek-ai/deepseek-harness/discussions/2007) [BUG]推理模型在仅支持 system role 的 OpenAI 兼容端点上请求失败
- [#3050](https://github.com/deepseek-ai/deepseek-harness/discussions/3050) [Bug] 纯文本模型调用图像/视觉工具时报错并终止步骤，之后会话被卡死 / Vision tool call on a text-only model ends the step and wedges the session
- [#2865](https://github.com/deepseek-ai/deepseek-harness/discussions/2865) Bug: bare 400/413 (no body) mislabeled as context overflow for non-Cerebras providers
- [#3155](https://github.com/deepseek-ai/deepseek-harness/discussions/3155) Bug: dsh web freezes (event loop blocked) when the agent executes the pwsh tool on Windows — reproducible in clean profile
- [#477](https://github.com/deepseek-ai/deepseek-harness/discussions/477) [bug] User text input delayed by a long time under heavy concurrent load (queued behind a busy agent turn - no pending feedback)
- [#3158](https://github.com/deepseek-ai/deepseek-harness/discussions/3158) Bug: pi-ai stream_read_error is treated as non-retryable PI_AI_ERROR

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-08-19T00:50:56.973Z_