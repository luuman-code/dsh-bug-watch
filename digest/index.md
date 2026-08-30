# DSH Bug Watch — 2026-08-30

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 25

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
_（无）_

## 📝 仅报告 — 无人互动
- [#4969](https://github.com/deepseek-ai/deepseek-harness/discussions/4969) [Bug] Web GUI：挂在路径前缀反向代理后，所有客户端 RPC 调用（斜杠命令、权限切换按钮）静默失败
- [#4966](https://github.com/deepseek-ai/deepseek-harness/discussions/4966) [Bug] Web GUI: all client RPC calls (slash commands, permission chip) fail silently behind a path-prefix reverse proxy
- [#100](https://github.com/deepseek-ai/deepseek-harness/discussions/100) [Bug] dsh web fails with "The requested module 'node:zlib' does not provide an export named 'createZstdDecompress'"
- [#1676](https://github.com/deepseek-ai/deepseek-harness/discussions/1676) [Bug] pwsh spawn ENOENT on Windows when PowerShell is installed via Microsoft Store (stale WindowsApps path after Store update)
- [#5054](https://github.com/deepseek-ai/deepseek-harness/discussions/5054) [Bug] Plan 模式渲染含代码块的计划时 composer 崩溃，审核卡和输入框一起消失
- [#5046](https://github.com/deepseek-ai/deepseek-harness/discussions/5046) [Bug] persistent bash mis-expands ! in commands via history expansion; on macOS it hangs 300s (shebangs in heredocs) - one-line fix
- [#5056](https://github.com/deepseek-ai/deepseek-harness/discussions/5056) Bug: after a session goes cold, the UI follow stream keeps waiting forever — later turns exist on disk but never appear (dsh 0.1.2)
- [#5062](https://github.com/deepseek-ai/deepseek-harness/discussions/5062) [Bug] dsh plugin: Windows 下 remove link: 安装的插件 后 node_modules 残留链接，后续 add 同名 git 插件稳定复现 ERR_PNPM_EPERM，且失败提示为错误诊断
- [#4862](https://github.com/deepseek-ai/deepseek-harness/discussions/4862) [BUG]: Filesystem tools treat HTTP(S) URLs as local relative paths and return misleading errors.
- [#848](https://github.com/deepseek-ai/deepseek-harness/discussions/848) Bug: cordis_inspect_query (platform=client) hangs when the page returns an error resolution
- [#4689](https://github.com/deepseek-ai/deepseek-harness/discussions/4689) [Bug][Windows] atomic-write writer lock leaks after first write, breaking all settings persistence (dsh web)
- [#5034](https://github.com/deepseek-ai/deepseek-harness/discussions/5034) [BUG]归入未分组的对话会导致Error: spawn C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe ENOENT
- [#3240](https://github.com/deepseek-ai/deepseek-harness/discussions/3240) [Bug Report] 剪贴板粘贴图片报「仅支持 PNG、JPG、WebP、GIF 格式的图片」——影响第三方识图插件 dsh-vision-router 的粘贴流程
- [#3373](https://github.com/deepseek-ai/deepseek-harness/discussions/3373) BUG: 持久 bash 工具会把单引号参数里的 ! 触发历史展开，整条命令被拒绝执行（macOS 上表现为 300s 超时）
- [#4858](https://github.com/deepseek-ai/deepseek-harness/discussions/4858) [BUG]dsh-v0.1.2-alpha.1 中对话标签新增的调整宽度功能在由插件提供的标签页中意外出现
- [#4990](https://github.com/deepseek-ai/deepseek-harness/discussions/4990) Bug: sandbox escalation error occurs when current mode is already danger-full-access
- [#4652](https://github.com/deepseek-ai/deepseek-harness/discussions/4652) Bug: crash 'Cannot read properties of undefined (reading kind)' in compactSlotTree
- [#5027](https://github.com/deepseek-ai/deepseek-harness/discussions/5027) [Bug] 两处小缺陷及补丁：`Omitted 1 bytes.` 会进入模型请求，`dshHome: ''` 把 harness home 解析成当前工作目录
- [#5028](https://github.com/deepseek-ai/deepseek-harness/discussions/5028) Bug: GUI fork inherits the parent session identity (DSH_SESSION_ID / Fractal writes land on parent)
- [#1201](https://github.com/deepseek-ai/deepseek-harness/discussions/1201) BUG: 会话已是 danger-full-access 时，模型仍反复触发 `sandbox escalation to "..." is not strictly wider` 错误
- [#5017](https://github.com/deepseek-ai/deepseek-harness/discussions/5017) [Bug] DSH Desktop 2.0.4: desktop profile 无法启动 Renderer boot failed for 1 plugin(s)（@nanmicoder/dsh-agent-teams 依赖已移除的 conversationEvents 服务）
- [#5009](https://github.com/deepseek-ai/deepseek-harness/discussions/5009) Bug: host occasionally drops a followup turn — session stays idle, zero error (dsh 0.1.1-rc.2, web profile)
- [#5007](https://github.com/deepseek-ai/deepseek-harness/discussions/5007) [Bug] Cannot stream from vLLM end point
- [#3615](https://github.com/deepseek-ai/deepseek-harness/discussions/3615) [Bug] rc.8: 空白会话切换 Agent Preset 后，旧 preset 的 agent-scoped 工具注册/restrict 残留形成杂交工具面；header agentPreset 与实际 mount 不符
- [#4996](https://github.com/deepseek-ai/deepseek-harness/discussions/4996) [Bug] Web ???????????????????????

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-08-30T02:55:35.476Z_