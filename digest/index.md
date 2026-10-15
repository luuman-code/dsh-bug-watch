# DSH Bug Watch — 2026-10-15

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 44

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
- [#9682](https://github.com/deepseek-ai/deepseek-harness/discussions/9682) **[Bug] Windows: 受限沙箱档下子进程创建必现 0xC0000142 (STATUS_DLL_INIT_FAILED)，danger-full-access 档正常**<br/>  分类：Q&A · 标签：— · 最近更新：2026-10-14
- [#4664](https://github.com/deepseek-ai/deepseek-harness/discussions/4664) **[Bug]？ goal 功能开启后 agent 无法被动等待后台任务：每次进入 idle 即被强制注入 <goal_round>，空转消耗轮次与 token**<br/>  分类：Q&A · 标签：— · 最近更新：2026-10-14

## 📝 仅报告 — 无人互动
- [#8354](https://github.com/deepseek-ai/deepseek-harness/discussions/8354) [Bug][Windows][Desktop 0.2.0-rc.2] 全新安装在 96% 误报“DeepSeek Harness 无法关闭”
- [#6184](https://github.com/deepseek-ai/deepseek-harness/discussions/6184) [Bug] /compact reports transport failures as "could not produce a useful summary"
- [#9710](https://github.com/deepseek-ai/deepseek-harness/discussions/9710) [Bug][Desktop/Win] 启动后约 80 秒单核满载 + 约 900 MB 读取：dsh-settings describe() 每次调用都重算整个 profile 组合
- [#9718](https://github.com/deepseek-ai/deepseek-harness/discussions/9718) [Bug] Windows desktop: "browser time zone is unavailable" blocks chat with British Columbia Standard Time
- [#9156](https://github.com/deepseek-ai/deepseek-harness/discussions/9156) [Bug] Conversation pane goes blank on all sessions — TypeError: Cannot read properties of null (reading 'kind')
- [#9677](https://github.com/deepseek-ai/deepseek-harness/discussions/9677) [Bug] One repeated PTC sub-call id makes an entire Session unloadable (data loss)
- [#9712](https://github.com/deepseek-ai/deepseek-harness/discussions/9712) [Bug] pi-ai 用估算值把 max_tokens 填满窗口（固定 4096 余量），导致确定性超窗 400
- [#8497](https://github.com/deepseek-ai/deepseek-harness/discussions/8497) [Bug][Windows 10] workspace-write 沙箱下所有子进程 0xC0000142（连 cmd.exe 都起不来）— Default DACL 使用 capability SID 所致
- [#9697](https://github.com/deepseek-ai/deepseek-harness/discussions/9697) [Bug] session 的 openWorkspacePath / workspacePathApplications 一律拒绝「路径中含 junction 或符号链接」的文件（0.2.0-rc.2，Windows，报 Path has no verified Host path）
- [#9602](https://github.com/deepseek-ai/deepseek-harness/discussions/9602) [Bug] The job list Clear control cannot dismiss a finished job
- [#8312](https://github.com/deepseek-ai/deepseek-harness/discussions/8312) [Bug][Windows] workspace-write leaves a permanent Low integrity label on the project, breaking every other tool used on it — several reports, still unchanged in 0.2.0-rc.2
- [#9711](https://github.com/deepseek-ai/deepseek-harness/discussions/9711) [BUG] 回合被 dispose（配置热重载）时排队消息被静默丢弃，且事件标记 "canceled" 会误导成用户主动取消
- [#8559](https://github.com/deepseek-ai/deepseek-harness/discussions/8559) [Bug] 同一工作目录下多个 Session 的「已更改文件」卡片互相认领对方的改动（附修复分支）
- [#9708](https://github.com/deepseek-ai/deepseek-harness/discussions/9708) [Bug][Web] Fuzzy search can match a Unicode character absent from the candidate
- [#9707](https://github.com/deepseek-ai/deepseek-harness/discussions/9707) [Bug][Preview] 1904-epoch XLS conversion adds the calendar offset to elapsed durations
- [#9706](https://github.com/deepseek-ai/deepseek-harness/discussions/9706) [Bug][Web] A successful plugin settings save silently discards edits made while it is pending
- [#9699](https://github.com/deepseek-ai/deepseek-harness/discussions/9699) [Bug] ReactLoopAgent.cancel() does not validate cause at entry, writing {"reason":null} on turn/end and permanently crashing Chat UI
- [#9695](https://github.com/deepseek-ai/deepseek-harness/discussions/9695) [Bug] session_search 永久 30s 超时：:memory: FTS 索引 + 单事务对账 + 工具超时中止，大语料必然死锁
- [#9688](https://github.com/deepseek-ai/deepseek-harness/discussions/9688) [Bug] browser-use attach 模式的连接独占会被后台代理长期占住：用户会话永远拿不到浏览器工具（不重试、无提示）
- [#9689](https://github.com/deepseek-ai/deepseek-harness/discussions/9689) [BUG]DSH Desktop 把 ELECTRON_RUN_AS_NODE=1 导出到整个进程树，导致从 DSH 启动的任何 Electron 应用（VS Code / Cursor / Zed）静默启动失败
- [#9687](https://github.com/deepseek-ai/deepseek-harness/discussions/9687) [Bug] Windows 受限沙箱下 pwsh/bash 全部失败（0xC0000142）——写入限制令牌让 PowerShell 无法完成启动初始化
- [#9312](https://github.com/deepseek-ai/deepseek-harness/discussions/9312) [Bug][Desktop][macOS] 全屏下「检查更新…」确认后黑屏 / 窗口消失 —— 已定位到 vibrancy + 透明覆盖层（汇总 #8224、#9035）
- [#9022](https://github.com/deepseek-ai/deepseek-harness/discussions/9022) [Bug] pi-ai 路由声明的 contextWindow 未进入 resolveModelInfo，导致自动压缩静默失效、超限被误报为「额度已用尽」（0.2.0-rc.2）
- [#9666](https://github.com/deepseek-ai/deepseek-harness/discussions/9666) [bug] 工作区被贴过"低权限"的标签后不会撕掉--且之后在「完全权限」会话里，工作区内的程序会继承标签并崩溃
- [#9686](https://github.com/deepseek-ai/deepseek-harness/discussions/9686) [BUG][Desktop] 超长单行代码导致 Renderer 主线程阻塞，客户端冻结
- [#7894](https://github.com/deepseek-ai/deepseek-harness/discussions/7894) [Bug][0.1.7-rc.2] goal-round-driver + broken compaction caused runaway 642M token explosion in a single session (Continuing goal infinite loop)
- [#9684](https://github.com/deepseek-ai/deepseek-harness/discussions/9684) [bug] 0.2.1-alpha.2 经常在一个会话突然空屏，需要刷新页面后，加载历史
- [#9669](https://github.com/deepseek-ai/deepseek-harness/discussions/9669) [Bug][Windows][Desktop 0.2.0-rc.2] renderer 进程 Section（共享内存节）句柄随会话活动单调增长：14.2 GB / 41,267 句柄（含两窗对照与复跑命令）
- [#9681](https://github.com/deepseek-ai/deepseek-harness/discussions/9681) [Bug][Web] Supplementary CJK suffixes break punctuation-adjacent Markdown strong emphasis
- [#8858](https://github.com/deepseek-ai/deepseek-harness/discussions/8858) [Bug] Windows：受限权限档（read-only / workspace-write）下持久终端无法启动
- [#9676](https://github.com/deepseek-ai/deepseek-harness/discussions/9676) [Bug] create_worktree 在 git < 2.42 的机器上完全不可用（--no-lazy-fetch 需 git ≥ 2.42，附根因与修复补丁）
- [#8842](https://github.com/deepseek-ai/deepseek-harness/discussions/8842) [Bug] Every path inside `app.asar` fails: "Cannot mix BigInt and other types" (`fs-local` probe assumes BigInt stats)
- [#9594](https://github.com/deepseek-ai/deepseek-harness/discussions/9594) [Bug] 整仓 host 构建 OOM：@Remote 签名引用具名 interface 时 typert 发射耗尽 Node 堆（含四组对照与最小复现）
- [#9673](https://github.com/deepseek-ai/deepseek-harness/discussions/9673) [BUG] Plan 模式切换通知未合并（发送了过时的状态通知）
- [#9429](https://github.com/deepseek-ai/deepseek-harness/discussions/9429) [bug][goal机制的设计问题] goal机制在主agent等待subagent时会无脑不断触发唤醒主agent, 根本不管当前subagent在途的情况
- [#9640](https://github.com/deepseek-ai/deepseek-harness/discussions/9640) [Bug] subagent_codex fails with `Product subagent failure (product: Codex; stage: turn; category: product-error)` and no diagnostic
- [#9662](https://github.com/deepseek-ai/deepseek-harness/discussions/9662) [Bug] subagent: 空字符串的 provider/model/reasoning_effort 被当成显式选择而失败，且报错不给补救（0.2.0-rc.2）
- [#6406](https://github.com/deepseek-ai/deepseek-harness/discussions/6406) [BUG] selectCompactableRange compares a real-window token budget against heuristic node prices
- [#9630](https://github.com/deepseek-ai/deepseek-harness/discussions/9630) [Bug] web_fetch collapses consecutive pipes in HTML table cells
- [#9653](https://github.com/deepseek-ai/deepseek-harness/discussions/9653) [Bug] Windows: boot-time corpus scan exhausts process fd limit (EMFILE) and leaves a permanent empty .lock that blocks every later boot
- [#9480](https://github.com/deepseek-ai/deepseek-harness/discussions/9480) [BUG] 我在用的时候发现 ```diff 代码块没有那种颜色区分
- [#9504](https://github.com/deepseek-ai/deepseek-harness/discussions/9504) [BUG] Session search (`session.search` → `visibleIds`) also returns `origin: "subagent"` sessions — a second leak path beyond #5486

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-10-15T02:44:59.067Z_