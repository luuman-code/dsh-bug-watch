# DSH Bug Watch — 2026-11-15

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 36

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
_（无）_

## 📝 仅报告 — 无人互动
- [#9662](https://github.com/deepseek-ai/deepseek-harness/discussions/9662) [Bug] subagent: 空字符串的 provider/model/reasoning_effort 被当成显式选择而失败，且报错不给补救（0.2.0-rc.2）
- [#13354](https://github.com/deepseek-ai/deepseek-harness/discussions/13354) [Bug] 分叉会话会继承源会话已消费的排队消息，并在新分支里再执行一次
- [#13356](https://github.com/deepseek-ai/deepseek-harness/discussions/13356) Bug: terminal-bash sandbox-mode fence listener outlives the plugin
- [#13355](https://github.com/deepseek-ai/deepseek-harness/discussions/13355) Bug: mcp-client releases its serverName before the old connection finishes closing
- [#4984](https://github.com/deepseek-ai/deepseek-harness/discussions/4984) Bug: wide-table hover flicker on the bottom border (>=4-column tables)
- [#13350](https://github.com/deepseek-ai/deepseek-harness/discussions/13350) [Bug] attachment-local: read_image fails on a confined service with EACCES: permission denied, open "/"
- [#7212](https://github.com/deepseek-ai/deepseek-harness/discussions/7212) [Bug] Compaction selects its own previous checkpoint as the whole span, so a long session never converges (59/79 attempts rejected, 44.6 min burned)
- [#13344](https://github.com/deepseek-ai/deepseek-harness/discussions/13344) [Bug] 设置里删除 provider 模型后：部署默认不级联、新会话不重校验，请求继续发往已删除模型并真实计费
- [#13291](https://github.com/deepseek-ai/deepseek-harness/discussions/13291) [Bug] 0.2.2-rc.3 Windows 客户端启动报 fetch failed / ECONNRESET，请求被华为云 WAF 拦截 (429)
- [#11693](https://github.com/deepseek-ai/deepseek-harness/discussions/11693) [Bug] Windows 11 桌面版启动即崩溃 (0x80000003 / renderer launch-failed)，rc.3 与 rc.5 均复现
- [#13337](https://github.com/deepseek-ai/deepseek-harness/discussions/13337) [Bug] 0.2.2-rc.3 aborts with SIGABRT (std::system_error "No error information") every 1-2 min on musl/aarch64
- [#13336](https://github.com/deepseek-ai/deepseek-harness/discussions/13336) [Bug] "Continue" after a failed turn persists an empty user message → session permanently 400s on strict gateways
- [#13333](https://github.com/deepseek-ai/deepseek-harness/discussions/13333) [BUG] DSH Desktop 0.2.2-rc.3 启动崩溃分析报告
- [#13255](https://github.com/deepseek-ai/deepseek-harness/discussions/13255) [Bug] One validation-rejected event permanently wedges the v4 persistence pipeline: the poisoned batch is re-queued and re-rejected forever ("developer/message turn must be positive")
- [#13065](https://github.com/deepseek-ai/deepseek-harness/discussions/13065) [Bug][Responses/pi-ai] NanoGPT mirrored reasoning deltas double the live thinking preview, then collapse on completion
- [#10619](https://github.com/deepseek-ai/deepseek-harness/discussions/10619) [Bug] 0.2.1-rc.2: sessions with non-empty surface but no system/message head fail to load (SessionFormatError: requires a protected first surface head)
- [#13324](https://github.com/deepseek-ai/deepseek-harness/discussions/13324) [Bug] 0.2.2-rc.3 desktop: write path persists invalid mid-log system/message appends into headless legacy sessions; corruption is silent until the next cold load (#10619 follow-up)
- [#10569](https://github.com/deepseek-ai/deepseek-harness/discussions/10569) [Bug][Safety] DSH 0.2.1-rc.2: cleanup command expanded to C:/ root and deleted user files
- [#12601](https://github.com/deepseek-ai/deepseek-harness/discussions/12601) [Bug] App fails to launch silently after Windows disk cleanup and plugin install
- [#13298](https://github.com/deepseek-ai/deepseek-harness/discussions/13298) [Bug][Desktop 0.2.2-rc.3] 启用官方 Claude Code / Codex 子智能体提供方失败：cannot get property "toJSON" without inject
- [#13297](https://github.com/deepseek-ai/deepseek-harness/discussions/13297) [Bug] [0.2.2-rc.2-3] Windows 11 26300 下 Tray 图标无法注册（Electron 44.7.0，Shell_NotifyIcon 静默失败）
- [#13006](https://github.com/deepseek-ai/deepseek-harness/discussions/13006) [Bug] /compact 仍使用最近一次路由的模型压缩：会话内切换模型后手动压缩不跟随当前选择
- [#12547](https://github.com/deepseek-ai/deepseek-harness/discussions/12547) [Bug] [0.2.2-rc.1] 侧边栏终端在 VTE 环境下每条命令回显内部 PS0 采样文本（bash）
- [#8947](https://github.com/deepseek-ai/deepseek-harness/discussions/8947) [Bug] "DeepSeek Messages transport failed" is a masked transport timeout — undici's 300 s bodyTimeout silently caps streamIdleTimeoutMs（传输层 300 秒上限被误报为传输失败）
- [#13182](https://github.com/deepseek-ai/deepseek-harness/discussions/13182) [Bug] 0.2.2-rc.2: 长会话重挂时 ChatReading.restore 把读者甩到尾部或旧纪元像素（历史插入零补偿 + 过期记忆回写）
- [#13292](https://github.com/deepseek-ai/deepseek-harness/discussions/13292) [Bug] Agent Teams missing after update: profile plugins 0.2.1-rc.3 vs host 0.2.2-rc.3
- [#10668](https://github.com/deepseek-ai/deepseek-harness/discussions/10668) [Bug][0.2.1-rc.2]只要一个会话里有数量不算特别少的公式，就会非常非常卡顿
- [#13223](https://github.com/deepseek-ai/deepseek-harness/discussions/13223) [Bug] 0.2.2-rc.3：session-search 在旧 v0 会话上必然失败——一条不可读日志仍会拖垮整个索引（已二分定位）
- [#13257](https://github.com/deepseek-ai/deepseek-harness/discussions/13257) [Bug] workflow agent() does not consult the subagent model-selection policy
- [#13283](https://github.com/deepseek-ai/deepseek-harness/discussions/13283) [BUG]Cold start: the first turn fails in 52 ms with "reading 'kind'", and an identical retry seconds later succeeds
- [#13282](https://github.com/deepseek-ai/deepseek-harness/discussions/13282) [Bug] remoteAccess.whenAccess is not a function - 5 official client plugins fail to mount
- [#13280](https://github.com/deepseek-ai/deepseek-harness/discussions/13280) [Bug] Desktop 0.2.2-rc.3 启动必败：产品分析上报 1s 中止污染 keep-alive 连接，欢迎页 settings/describe 报 ECONNRESET（openInitialWindow 失败）
- [#13273](https://github.com/deepseek-ai/deepseek-harness/discussions/13273) [Bug][Windows][HMR] 共享依赖目录迁移使已启用插件更新被 package-moved / bundle-in-use 阻塞
- [#10318](https://github.com/deepseek-ai/deepseek-harness/discussions/10318) [Bug][Web Search settings] A refused API-key replacement is treated as saved when an old key exists
- [#10319](https://github.com/deepseek-ai/deepseek-harness/discussions/10319) [Bug] cannot get required service "sessionProjections" in inactive context — terminal-bash 护栏在 owner scope 销毁后仍被全局派发触发
- [#13261](https://github.com/deepseek-ai/deepseek-harness/discussions/13261) [Bug] run_code child processes start with an empty process.env on Windows; shell APIs can write %SystemDrive%\ProgramData\... into the cwd

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-11-15T04:17:44.467Z_