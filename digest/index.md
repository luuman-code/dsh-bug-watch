# DSH Bug Watch — 2026-11-26

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 29

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
- [#13503](https://github.com/deepseek-ai/deepseek-harness/discussions/13503) **[Bug] Anthropic 工具 schema 丢失 Draft 7 声明导致兼容端点 400：最小复现与本机修复验证**<br/>  分类：Q&A · 标签：— · 最近更新：2026-11-26
- [#11561](https://github.com/deepseek-ai/deepseek-harness/discussions/11561) **[Bug] ask_user_question renders TeX literally in the question title and option labels — only question.detail is wired to MarkdownText**<br/>  分类：Q&A · 标签：— · 最近更新：2026-11-26

## 📝 仅报告 — 无人互动
- [#14343](https://github.com/deepseek-ai/deepseek-harness/discussions/14343) [BUG] Web UI freezes completely when opening a long history conversation (renderer pegged at 100% CPU)
- [#14342](https://github.com/deepseek-ai/deepseek-harness/discussions/14342) [Bug][Windows Desktop] OpenAI-compatible requests silently clamp max_completion_tokens to 1 and automatic compaction fails
- [#14341](https://github.com/deepseek-ai/deepseek-harness/discussions/14341) [Bug Report]seeded (forked) session re-uploads its whole inherited log on every request
- [#14271](https://github.com/deepseek-ai/deepseek-harness/discussions/14271) [Bug] 主进程 installFailLoud 将未捕获 fetch ECONNRESET 映射为 proc.exit(1)，导致运行态反复崩溃（0.2.2-rc.5）
- [#14337](https://github.com/deepseek-ai/deepseek-harness/discussions/14337) [Bug] macOS Desktop: missing UTF-8 locale corrupts Chinese Bash input and hangs commands
- [#14334](https://github.com/deepseek-ai/deepseek-harness/discussions/14334) [Bug] 只有 reasoning 没有正文的一轮被当成正常完成，EMPTY_RESPONSE 从未触发
- [#14155](https://github.com/deepseek-ai/deepseek-harness/discussions/14155) [Bug] 侧边栏 md/html/pdf 预览"文件资源服务不可用"：非标准 scheme 的 URL.hostname 在 HarmonyOS ArkWeb 上为空，导致资源协议解析失败
- [#4354](https://github.com/deepseek-ai/deepseek-harness/discussions/4354) [Bug] litellm驱动的模型调用工具后，产生空 text block 被回放为 assistant message，导致 Anthropic assistant prefill 400
- [#14318](https://github.com/deepseek-ai/deepseek-harness/discussions/14318) [Bug] Agent's `rd /s /q` with a Chinese path got truncated at the PowerShell→cmd boundary and wiped my entire E: drive
- [#14141](https://github.com/deepseek-ai/deepseek-harness/discussions/14141) [Bug] dsh-http-proxy 下发给子进程的 NO_PROXY 含非标准条目 [::1]，导致 httpx 等按 URI 规则解析的客户端在构造阶段直接崩溃
- [#14308](https://github.com/deepseek-ai/deepseek-harness/discussions/14308) [Bug][Desktop] 启动期 fetch failed 及排查出的原因
- [#14304](https://github.com/deepseek-ai/deepseek-harness/discussions/14304) [Bug] External links silently fail in interactive HTML preview (Desktop & Web) + security fix proposal
- [#14289](https://github.com/deepseek-ai/deepseek-harness/discussions/14289) [Bug][LiveShare] Local Markdown images fail to preview on viewer pages (`/api/file` is owner-only and not served over viewer channel)
- [#12732](https://github.com/deepseek-ai/deepseek-harness/discussions/12732) [Bug] 长时间运行后“新建会话”回到工作区选择、侧栏 fork 子会话找不到；重启恢复（0.2.2-rc.1）
- [#10129](https://github.com/deepseek-ai/deepseek-harness/discussions/10129) [Bug] 内置会话标题插件几乎从不更新：输出额度 64 个 token 被思考吃光，失败还完全静默（DSH 0.2.1-rc.2）
- [#14288](https://github.com/deepseek-ai/deepseek-harness/discussions/14288) [Bug] 0.2.2-rc.5 on Windows: dsh web hangs silently before binding - stack stuck in installRuntimeInterception -> requireBuiltin
- [#14170](https://github.com/deepseek-ai/deepseek-harness/discussions/14170) [Bug] 任务执行中拖拽会话跨工作区，导致孤儿会话并引发 sessionController 全局崩溃
- [#14262](https://github.com/deepseek-ai/deepseek-harness/discussions/14262) [Bug]分叉会话未继承工作区归属，全部落入侧栏“未分组”
- [#11829](https://github.com/deepseek-ai/deepseek-harness/discussions/11829) [Bug] Copy button on a turn only copies the last text-bearing step — mid-turn prose and deliverable file links are silently dropped
- [#14293](https://github.com/deepseek-ai/deepseek-harness/discussions/14293) [Bug] Super Agent ticket stays running after the Worker becomes idle on DSH 0.2.2-rc.3
- [#11707](https://github.com/deepseek-ai/deepseek-harness/discussions/11707) [Bug][rc.2] 中断恢复：合成闭包已落盘，续跑却按闭包前的长度编号 → seq 复用、会话历史永久不可加载（3 个实例已在盘上定位并修复）
- [#14237](https://github.com/deepseek-ai/deepseek-harness/discussions/14237) [Bug] Sessions interrupted by a host restart become permanently read-only — service revival has no trigger (deadlock)
- [#13581](https://github.com/deepseek-ai/deepseek-harness/discussions/13581) [Bug] Reinstalling a local-linked plugin from npm fails with EPERM — uninstall leaves a stale junction in node_modules
- [#12954](https://github.com/deepseek-ai/deepseek-harness/discussions/12954) [Bug] XLSX preview fails entirely on unsupported number format "#,##0.0#"
- [#14220](https://github.com/deepseek-ai/deepseek-harness/discussions/14220) [Bug] 助手回复会把下一轮用户消息和运行时上下文续写进正文
- [#9949](https://github.com/deepseek-ai/deepseek-harness/discussions/9949) [Bug] `subagent_codex` fails on any model newer than the pinned Codex CLI (0.153.4)
- [#12569](https://github.com/deepseek-ai/deepseek-harness/discussions/12569) [Bug] 历史图片附件在本机缺失时，本地失败被误报为 `DeepSeek Messages transport failed` / `TRANSPORT`，并白白重试 5 次

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-11-26T06:25:36.975Z_