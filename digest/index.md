# DSH Bug Watch — 2026-11-17

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 45

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
- [#13503](https://github.com/deepseek-ai/deepseek-harness/discussions/13503) **[Bug] Anthropic 工具 schema 丢失 Draft 7 声明导致兼容端点 400：最小复现与本机修复验证**<br/>  分类：Q&A · 标签：— · 最近更新：2026-11-17
- [#11337](https://github.com/deepseek-ai/deepseek-harness/discussions/11337) **[Bug] Benign Chinese ops prompt → stream ends with stop reason "refusal" → client reports MALFORMED_RESPONSE (deepseek-flash)**<br/>  分类：Q&A · 标签：— · 最近更新：2026-11-17
- [#13509](https://github.com/deepseek-ai/deepseek-harness/discussions/13509) **[Bug][Plugin Manager] Registry bundle update removes the installed version before verifying the rollback can succeed (Git path checks; registry path does not)**<br/>  分类：Q&A · 标签：— · 最近更新：2026-11-16
- [#13411](https://github.com/deepseek-ai/deepseek-harness/discussions/13411) **[Bug] Windows：在应用中打开 → 文件资源管理器 的窗口被建在屏幕外（物理 0x7FFF）/ Explorer window created outside every monitor**<br/>  分类：Q&A · 标签：— · 最近更新：2026-11-16
- [#13213](https://github.com/deepseek-ai/deepseek-harness/discussions/13213) **[bug] Windows workspace-write：受限令牌依赖继承授权，tempfile/pip/venv 在 DSH 承诺的可写临时区内必然失败，且没有可用逃生口**<br/>  分类：Q&A · 标签：— · 最近更新：2026-11-16

## 📝 仅报告 — 无人互动
- [#13562](https://github.com/deepseek-ai/deepseek-harness/discussions/13562) [Bug] CLI 无头会话仍在运行，但 Web UI 显示「任务已停止」
- [#13542](https://github.com/deepseek-ai/deepseek-harness/discussions/13542) [Bug][Desktop] 0.2.2-rc.3 Windows：Host 就绪后首个 welcome RPC 遇 ECONNRESET 即被判致命，启动反复失败（禁用第三方插件无效）
- [#11577](https://github.com/deepseek-ai/deepseek-harness/discussions/11577) [Bug][0.2.1-rc.5] 单条 tool_use 参数非法即整轮硬失败：MALFORMED_RESPONSE 仍不在默认重试码（汇总 #7705/#8920/#8976/#9402/#9503/#10406，附 rc.5 复现与补丁建议）
- [#13547](https://github.com/deepseek-ai/deepseek-harness/discussions/13547) [Bug report] Long Windows session stops with remote compact Bad Request after DSH compactions; same-session external summary restores progress
- [#7972](https://github.com/deepseek-ai/deepseek-harness/discussions/7972) [Bug][0.1.7-rc.2] Failed turn (HTTP 400/429) leaves all-zero usage samples; contextPressure projection permanently zeroed — ContextMeter shows 0%
- [#13221](https://github.com/deepseek-ai/deepseek-harness/discussions/13221) [Bug] 0.2.2-rc.3: opening a historical session removes it from the sidebar and disables the composer
- [#9797](https://github.com/deepseek-ai/deepseek-harness/discussions/9797) [Bug] WebSocket heartbeat defaults (2s interval + 2 missed) tear down connections on mobile / high-latency networks → ~12s reconnect loop
- [#13491](https://github.com/deepseek-ai/deepseek-harness/discussions/13491) [Bug] A pre-existing DeepSeek account sign-in leaves a new profile's default model on deepseek-official, so new sessions fail with MISSING_CREDENTIAL
- [#11187](https://github.com/deepseek-ai/deepseek-harness/discussions/11187) [Bug] macOS 桌面版：内置更新器因 host 优雅退出超过 10 秒而拒绝安装（即使最终 exit 0）
- [#13536](https://github.com/deepseek-ai/deepseek-harness/discussions/13536) [bug] position: fixed descendants of the header actions slot are hidden by .titleCluster mask-image
- [#13533](https://github.com/deepseek-ai/deepseek-harness/discussions/13533) [Bug] Desktop 0.2.2-rc.3 fails to boot on Windows 11 — bootstrap RPC gets ECONNRESET, window shows "DeepSeek Harness 无法使用"
- [#13531](https://github.com/deepseek-ai/deepseek-harness/discussions/13531) [bug]read 工具的窗口输出可能保留整份输入的 V8 底层字符串从而导致内存爆炸
- [#10619](https://github.com/deepseek-ai/deepseek-harness/discussions/10619) [Bug] 0.2.1-rc.2: sessions with non-empty surface but no system/message head fail to load (SessionFormatError: requires a protected first surface head)
- [#13530](https://github.com/deepseek-ai/deepseek-harness/discussions/13530) [Bug][0.2.0-rc.2] 导入/重建历史的新会话缺少 system 头，下一次发言即写坏日志，重新加载报 "system/message requires a protected first surface head"
- [#13524](https://github.com/deepseek-ai/deepseek-harness/discussions/13524) [Bug] Model-switch compaction asks the unavailable previous model for the summary and drops the user's input
- [#13527](https://github.com/deepseek-ai/deepseek-harness/discussions/13527) [Bug] Windows: fixed-offset 0xC000041D crash (13x, 0.2.2-rc.3) - reentrant display-info change tears down an Aura window inside WndProc
- [#13427](https://github.com/deepseek-ai/deepseek-harness/discussions/13427) [Bug][0.2.2-rc.1] ask_user_question cannot pass `detail`, so a long question is clamped to 3 lines
- [#12278](https://github.com/deepseek-ai/deepseek-harness/discussions/12278) [bug]工具调用失导致败任务停滞的问题
- [#12187](https://github.com/deepseek-ai/deepseek-harness/discussions/12187) [bug]：在运行的时候，token用量浮层不断上移
- [#8827](https://github.com/deepseek-ai/deepseek-harness/discussions/8827) [Bug] workflow 工具调用永不返回，父 Agent 卡死在 step/start 后无事件
- [#13521](https://github.com/deepseek-ai/deepseek-harness/discussions/13521) [Bug] ptc preset crashes at turn start: Cannot read properties of undefined (reading 'length')
- [#13516](https://github.com/deepseek-ai/deepseek-harness/discussions/13516) [Bug] DeepSeek Messages 适配器将工具参数 JSON 抖动当成错误
- [#13515](https://github.com/deepseek-ai/deepseek-harness/discussions/13515) [Bug] Windows restricted sandbox token breaks official ICMP API (IcmpSendEcho → ERROR_ACCESS_DENIED 5), while README says network is unrestricted
- [#13514](https://github.com/deepseek-ai/deepseek-harness/discussions/13514) [Bug] Windows 11 25H2 下 0.2.2 安装包在非管理员上下文必然安装失败，错误提示误导
- [#13513](https://github.com/deepseek-ai/deepseek-harness/discussions/13513) [Bug] Windows 火绒误报 Trojan/PS.PsLoader.A：file-applications-windows 生成的 associations.ps1 触发行为启发式（累计 17 次）
- [#11258](https://github.com/deepseek-ai/deepseek-harness/discussions/11258) [Bug] tool-call timeout is notify-only: a tool with a declared timeoutMs can hang the whole session past its budget
- [#13390](https://github.com/deepseek-ai/deepseek-harness/discussions/13390) [Bug] Desktop 0.2.2-rc.3: Most plugins stopped working after update; Plugins page and sidebar "More" button unresponsive; CLI unusable for desktop profile
- [#465](https://github.com/deepseek-ai/deepseek-harness/discussions/465) [Bug Report] 中止运行后，已被 claim 进当前轮的队列消息不会被重新排队——排队内容不再自动处理，需手动重发
- [#13510](https://github.com/deepseek-ai/deepseek-harness/discussions/13510) [Bug] plugin_manager install_bundle 忽略工具取消信号：停止生成无法终止 pnpm
- [#13505](https://github.com/deepseek-ai/deepseek-harness/discussions/13505) [Bug][Plugin Manager] Refresh and local .tgz install fail after private registry provenance is lost
- [#13502](https://github.com/deepseek-ai/deepseek-harness/discussions/13502) [Bug] Sessions started by a slash command (/goal) never get a title or recency, so they vanish from the session list
- [#13478](https://github.com/deepseek-ai/deepseek-harness/discussions/13478) [Bug] 无 usage 的中断答复覆盖 TokenMeter 用量锚点，导致上下文压力估算骤降
- [#13495](https://github.com/deepseek-ai/deepseek-harness/discussions/13495) [Bug][Desktop] 源码开发启动仍显示「检查更新」，失败后持续提示「重试更新」
- [#13493](https://github.com/deepseek-ai/deepseek-harness/discussions/13493) [Bug][Windows Desktop 0.2.2-rc.3] Open in → VS Code fails; existing ELECTRON_RUN_AS_NODE fix missing from release
- [#13488](https://github.com/deepseek-ai/deepseek-harness/discussions/13488) [Bug][Windows 0.2.2-rc.3] 安装目录缺运行时文件导致启动崩溃；插件页把本地 YAML 解析失败误报为网络问题
- [#13485](https://github.com/deepseek-ai/deepseek-harness/discussions/13485) [Bug] llm-deepseek：providerError / providerErrorDetail 丢弃字符串形态的 error 响应体，吞掉报错信息并使上下文超限/配额分类失效（0.2.2-rc.3）
- [#13483](https://github.com/deepseek-ai/deepseek-harness/discussions/13483) Bug: permission preset switch reverts to workspace-write at the next step (oscillating sandbox mode)
- [#9086](https://github.com/deepseek-ai/deepseek-harness/discussions/9086) [BUG](windows沙箱问题)(DSH GUI模式)会话里跑在非「完全权限」模式在项目文件夹根目录生成Windows 强制完整性标签，导致二进制生成文件权限受限
- [#13469](https://github.com/deepseek-ai/deepseek-harness/discussions/13469) [Bug] Right-sidebar guide: first entry capsule is unreachable when the column outgrows the pane
- [#13468](https://github.com/deepseek-ai/deepseek-harness/discussions/13468) [bug] 新建工作区 + 会话的注册与记录全程未持久化，重启后工作区与会话整体丢失（Windows / 0.2.2-rc.3）

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-11-17T06:05:56.926Z_