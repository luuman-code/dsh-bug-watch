# DSH Bug Watch — 2026-10-17

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 33

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
- [#9404](https://github.com/deepseek-ai/deepseek-harness/discussions/9404) **[Bug] dsh v0.2.1-alpha.2: 达到 40% 上下文（约 37.9k/96k）时触发连续/疯狂的上下文压缩死循环**<br/>  分类：Q&A · 标签：— · 最近更新：2026-10-16

## 📝 仅报告 — 无人互动
- [#9905](https://github.com/deepseek-ai/deepseek-harness/discussions/9905) [Bug][macOS] 局域网访问被系统静默阻断（errno 65）：Info.plist 缺少 NSLocalNetworkUsageDescription
- [#9910](https://github.com/deepseek-ai/deepseek-harness/discussions/9910) [Bug][Desktop] 更新器：0.12.0 安装包已完整下载且 sha512 校验通过，更新却不生效；彻底退出重开后仍反复弹「有可用更新，同意后开始下载」，版本卡在 0.11.0
- [#9904](https://github.com/deepseek-ai/deepseek-harness/discussions/9904) [Bug] Desktop host 进程因未捕获的 ECONNRESET 异常退出后 web 服务不自恢复（UI 假活、端口全断）
- [#6184](https://github.com/deepseek-ai/deepseek-harness/discussions/6184) [Bug] /compact reports transport failures as "could not produce a useful summary"
- [#9900](https://github.com/deepseek-ai/deepseek-harness/discussions/9900) [bug]大肥鱼自己写的报告
- [#9855](https://github.com/deepseek-ai/deepseek-harness/discussions/9855) [bug]当工作步骤收起时机为回答结束后, 工作步骤展示为详细时, 在折叠工作步骤的时候, 会导致正在阅读的内容发生跳动.
- [#9882](https://github.com/deepseek-ai/deepseek-harness/discussions/9882) [Bug] A restored session that still carries the durable "auto" preset makes permission-presets throw in its constructor, leaving auto-review pending — "2 entries did not activate"
- [#9899](https://github.com/deepseek-ai/deepseek-harness/discussions/9899) [Bug] sessionStats 的 TPS 口径缺陷：思考不以增量下发时，decodeMs 起点滑到可见文本/工具调用上，显示值虚高 3~5 倍
- [#9312](https://github.com/deepseek-ai/deepseek-harness/discussions/9312) [Bug][Desktop][macOS] 全屏下「检查更新…」确认后黑屏 / 窗口消失 —— 已定位到 vibrancy + 透明覆盖层（汇总 #8224、#9035）
- [#810](https://github.com/deepseek-ai/deepseek-harness/discussions/810) [Bug] Windows: sandboxed pwsh always dies with 0xC0000142 under console-less host (desktop launch path)
- [#6327](https://github.com/deepseek-ai/deepseek-harness/discussions/6327) [Bug]session.fork 切点跨过排队中的 user/message：子会话被塞进下一轮的用户输入
- [#9830](https://github.com/deepseek-ai/deepseek-harness/discussions/9830) [Bug] 代理变量大小写重复导致 Windows 上 .NET 子进程启动全面失效 / Duplicate-cased proxy vars break every .NET child-process launch on Windows
- [#9824](https://github.com/deepseek-ai/deepseek-harness/discussions/9824) [Bug] XLSX 渲染成图片始终输出纯黑图（render --sheet / --range），PDF 路径正常
- [#9666](https://github.com/deepseek-ai/deepseek-harness/discussions/9666) [bug] 工作区被贴过"低权限"的标签后不会撕掉--且之后在「完全权限」会话里，工作区内的程序会继承标签并崩溃
- [#9876](https://github.com/deepseek-ai/deepseek-harness/discussions/9876) [Bug] exit_plan_mode presents a plan while the background subagents it depends on are still running — plan finalization must wait for all delegations
- [#8594](https://github.com/deepseek-ai/deepseek-harness/discussions/8594) [Bug] 模型以旁白收尾（宣布动作、无 tool-call）时 turn 被正确关闭，宣布的动作消失 —— 机制已存在，缺的是判据
- [#9877](https://github.com/deepseek-ai/deepseek-harness/discussions/9877) [Bug] Grok gateway leading <think> content is rendered as answer text (opt-in parser proposal)
- [#9677](https://github.com/deepseek-ai/deepseek-harness/discussions/9677) [Bug] One repeated PTC sub-call id makes an entire Session unloadable (data loss)
- [#9814](https://github.com/deepseek-ai/deepseek-harness/discussions/9814) [Bug] 从大上下文窗口模型切到小窗口模型会卡死：压缩阈值随目标窗口重算，而摘要请求仍发往该小窗口模型，于是压缩请求自己也超限
- [#9848](https://github.com/deepseek-ai/deepseek-harness/discussions/9848) [Bug] deepseek-flash 将 DSML 工具调用标记混入 tool input JSON，导致 turn 以 MALFORMED_RESPONSE 中止
- [#9864](https://github.com/deepseek-ai/deepseek-harness/discussions/9864) [Bug] mcp-client 工具注册静默失败：server 存活、资源可列，但 mcp__matlab__* 14 个工具整族消失（仅重启宿主可恢复）
- [#9759](https://github.com/deepseek-ai/deepseek-harness/discussions/9759) [Bug] Manually added DeepSeek provider shares the same API key as the built-in DeepSeek model
- [#9861](https://github.com/deepseek-ai/deepseek-harness/discussions/9861) [Bug] fs-local | asar 内路径 stat({bigint:true}) 抛 Cannot mix BigInt，filesystem 技能提供者整块被跳过
- [#6838](https://github.com/deepseek-ai/deepseek-harness/discussions/6838) [Bug] 安装社区插件后 dsh web 不监听端口且 GUI 整体空白：启动路径零容错的根因与修法建议
- [#9852](https://github.com/deepseek-ai/deepseek-harness/discussions/9852) [BUG] Workspace "New session" fails with session/agent-busy when the only blank session is a continuable subagent thread
- [#9086](https://github.com/deepseek-ai/deepseek-harness/discussions/9086) [BUG](windows沙箱问题)(DSH GUI模式)会话里跑在非「完全权限」模式在项目文件夹根目录生成Windows 强制完整性标签，导致二进制生成文件权限受限
- [#9619](https://github.com/deepseek-ai/deepseek-harness/discussions/9619) [Bug] 多行 $$ 公式块丢失开首行内容，并把后续正文一路吞成数学源码（渲染为红色原文）
- [#9261](https://github.com/deepseek-ai/deepseek-harness/discussions/9261) [Bug]: dsh plugin add 在 Windows 上挂起不退出，profile bundles 永不 reconcile（插件"装上了但不加载"）
- [#9839](https://github.com/deepseek-ai/deepseek-harness/discussions/9839) [Bug][Desktop 0.2.0-rc.2] 新会话界面的 Agent preset 选择控件不显示
- [#8627](https://github.com/deepseek-ai/deepseek-harness/discussions/8627) [BUG] dsh 的 ssrf 防护导致 tun 模式下无法使用 web fetch
- [#7115](https://github.com/deepseek-ai/deepseek-harness/discussions/7115) [Bug] Host enters a CPU-bound loop and blocks the event loop when a turn starts in a large session (~700k+ tokens)
- [#1344](https://github.com/deepseek-ai/deepseek-harness/discussions/1344) [Bug][Windows] Sandboxed subprocess spawn flashes a visible console window from GUI hosts; STARTF_USESHOWWINDOW + SW_HIDE fixes it without the 0xC0000142 crash

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-10-17T02:33:03.379Z_