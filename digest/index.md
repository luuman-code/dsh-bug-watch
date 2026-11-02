# DSH Bug Watch — 2026-11-02

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 42

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
- [#11604](https://github.com/deepseek-ai/deepseek-harness/discussions/11604) **[Bug][Desktop] 特定旧会话只能输出 Reasoning，Text 正文通道持续缺失**<br/>  分类：Q&A · 标签：— · 最近更新：2026-11-01

## 📝 仅报告 — 无人互动
- [#11482](https://github.com/deepseek-ai/deepseek-harness/discussions/11482) [Bug] Subagent model-selection policy is never recorded: firstLiveSeq is 5, not 0
- [#11829](https://github.com/deepseek-ai/deepseek-harness/discussions/11829) [Bug] Copy button on a turn only copies the last text-bearing step — mid-turn prose and deliverable file links are silently dropped
- [#11827](https://github.com/deepseek-ai/deepseek-harness/discussions/11827) [Bug] dev:web 默认 --poll 在本地磁盘上空转 ~13 个核，同一个包重建从 354ms 退化到 44s
- [#11828](https://github.com/deepseek-ai/deepseek-harness/discussions/11828) [Bug] macOS 桌面内更新失败："desktop update: task inspection timed out"（10s 硬超时 / 无日志 / inspect 与 lock 不可区分）
- [#11825](https://github.com/deepseek-ai/deepseek-harness/discussions/11825) [Bug] macOS 0.2.1-rc.2：dsh-workspace-changes-* 临时目录无上限累积，两次将 926 GB 系统盘可用空间降至 <1 GB
- [#11826](https://github.com/deepseek-ai/deepseek-harness/discussions/11826) [Bug] pwsh rejects a repeated sandbox mode with a blank justification, while bash and fs accept it
- [#11180](https://github.com/deepseek-ai/deepseek-harness/discussions/11180) [Bug] Desktop 派生的 explorer.exe 被 ELECTRON_RUN_AS_NODE 长期污染，导致此后双击 .md 等 Electron 关联静默失效
- [#11824](https://github.com/deepseek-ai/deepseek-harness/discussions/11824) [Bug] Desktop in-app update leaves resources\runtime empty → Host fatal on next launch (0.2.1-rc.5, no junctions involved)
- [#10259](https://github.com/deepseek-ai/deepseek-harness/discussions/10259) [Bug] 0.2.1-rc.2: experimental Inspector terminates the Host at a ~69-byte retained-state budget gap (field crash, quantified)
- [#11819](https://github.com/deepseek-ai/deepseek-harness/discussions/11819) [Bug] Windows Desktop 0.2.1-rc.5 — Open in App fails after upgrading to 0.2.1-rc.5
- [#11816](https://github.com/deepseek-ai/deepseek-harness/discussions/11816) [bug] compaction-basic 摘要请求漏传 reasoningEffort，导致 provider 前缀缓存整体 miss
- [#11809](https://github.com/deepseek-ai/deepseek-harness/discussions/11809) [Bug] 主进程启动时 electron-updater 写已断开 stdout 管道触发未捕获 EPIPE 崩溃
- [#11806](https://github.com/deepseek-ai/deepseek-harness/discussions/11806) [Bug] Provider OpenRouter: minimax/minimax-m3.1-flash missing from catalog
- [#9322](https://github.com/deepseek-ai/deepseek-harness/discussions/9322) [Bug] Windows 沙箱临时目录缺失后，同一会话内所有命令持续失败
- [#9314](https://github.com/deepseek-ai/deepseek-harness/discussions/9314) [BUG] Workspace-write provisioning leaves a persistent Low integrity label on the workspace root — executables built in the workspace run at Low IL and fail all writes outside the sandbox
- [#4722](https://github.com/deepseek-ai/deepseek-harness/discussions/4722) [bug] In-memory session log is unbounded (append-only) and compaction never trims it - long/heavy sessions OOM the web process
- [#463](https://github.com/deepseek-ai/deepseek-harness/discussions/463) [Bug Report] Windows：Python `tempfile.mkdtemp`（mode 0o700）创建的目录带显式安全描述符，丢弃父目录继承，受限令牌下"自锁"——pytest tmp_path 全部失效
- [#11792](https://github.com/deepseek-ai/deepseek-harness/discussions/11792) [Bug] 0.2.1-rc.5 桌面端启动失败：client bundle 注入成相对路径 + 单包回退 rev 不匹配，6 MB 组合脚本一条失败即整页起不来
- [#11022](https://github.com/deepseek-ai/deepseek-harness/discussions/11022) [Bug] 0.2.1-rc.3: non-atomic cross-workspace session move leaves a cwd/path-divergent copy → workspaceRegistry fails, 8 services pending
- [#11784](https://github.com/deepseek-ai/deepseek-harness/discussions/11784) [Bug] Chat briefly renders two identical user bubbles before the durable user/message replaces the optimistic echo
- [#11780](https://github.com/deepseek-ai/deepseek-harness/discussions/11780) [Bug] 复制消息正文时行内代码前后被插入换行符（display:inline-flex 布局导致）
- [#11776](https://github.com/deepseek-ai/deepseek-harness/discussions/11776) [Bug] Chinese IME keyboard input garbles text — pinyin leaks into committed text
- [#11771](https://github.com/deepseek-ai/deepseek-harness/discussions/11771) BUG: On Mac in full-screen mode, click "Check for updates" in the menu. If it prompts that it is the latest version, click "OK" — and the screen goes black.
- [#10559](https://github.com/deepseek-ai/deepseek-harness/discussions/10559) [Bug] 0.2.1-rc.2 / Windows 11: host 以 0xFFFF7003 (4294930435) 静默退出，三次冷启动 3/3 必现，无堆栈、无 hostDiagnostic、无 WER 记录
- [#10492](https://github.com/deepseek-ai/deepseek-harness/discussions/10492) [Bug] Desktop host killed by PartitionAlloc OOM (exit 0xE0000008): whole app exits, and the crash popup shows only the last 64 KB of stderr
- [#10129](https://github.com/deepseek-ai/deepseek-harness/discussions/10129) [Bug] 内置会话标题插件几乎从不更新：输出额度 64 个 token 被思考吃光，失败还完全静默（DSH 0.2.1-rc.2）
- [#11763](https://github.com/deepseek-ai/deepseek-harness/discussions/11763) [Bug] settings/describe crashes on Standard Schema Config with toJSON
- [#11621](https://github.com/deepseek-ai/deepseek-harness/discussions/11621) Bug Report: Auto Review Failures Permanently Block Tool Execution / 自动审查失败导致工具调用被永久阻断
- [#11712](https://github.com/deepseek-ai/deepseek-harness/discussions/11712) [Bug] Invalid schema for function 'mcp_hub' — got 'type: null'
- [#11757](https://github.com/deepseek-ai/deepseek-harness/discussions/11757) [Bug] 本地语音输入在 Windows on ARM 上不可用：Local speech is unavailable for win32-arm64（上游原生包 sherpa-onnx-win-arm64@1.13.8 已发布，建议跟进支持）
- [#11119](https://github.com/deepseek-ai/deepseek-harness/discussions/11119) [Bug] 更新器以"把整个安装目录改名到父目录"作为升级第一步，在 Windows 上极易失败且无法自诊断
- [#11749](https://github.com/deepseek-ai/deepseek-harness/discussions/11749) [Bug][Windows 桌面端] 换掉 link 安装的插件会清空源码目录：Electron 的同步 fs.rmSync 会跟进 junction
- [#8984](https://github.com/deepseek-ai/deepseek-harness/discussions/8984) [bug] Duplicate seq written to session log when seed-construction and resume overlap (bionic: no write lease → whole history rejected on read)
- [#11737](https://github.com/deepseek-ai/deepseek-harness/discussions/11737) [BUG]	会话区视口高度自激振荡（924↔919），贴底悬停时界面持续闪烁
- [#11721](https://github.com/deepseek-ai/deepseek-harness/discussions/11721) [Bug] Desktop TUI: ask_user_question never renders — api-remotes claims user-questions/request for the remote surface (which has no answerer) and the real error is masked as ASK_ABORTED
- [#11715](https://github.com/deepseek-ai/deepseek-harness/discussions/11715) [Bug][Windows] Host exits with code 130 (console SIGINT) after a long shell command, killing all in-flight turns
- [#11687](https://github.com/deepseek-ai/deepseek-harness/discussions/11687) [Bug] 升级至 0.2.1-rc.5 后，因第三方插件冲突导致启动崩溃 (1 required plugin did not activate)
- [#9599](https://github.com/deepseek-ai/deepseek-harness/discussions/9599) [Bug] 桌面版「在编辑器中打开」对 Electron 系编辑器必然失败 —— ELECTRON_RUN_AS_NODE 泄漏到子进程
- [#11608](https://github.com/deepseek-ai/deepseek-harness/discussions/11608) [Bug] Eager projection-cache load dominates `dsh web` startup: 969 records / 209 MB → 5.3 s of validation (26%)
- [#11716](https://github.com/deepseek-ai/deepseek-harness/discussions/11716) [Bug][0.2.1-rc.5] Document preview: complete-file reads have a byte cap but no deadline
- [#11713](https://github.com/deepseek-ai/deepseek-harness/discussions/11713) [Bug][Windows] 安装程序越界删除文件

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-11-02T03:53:19.390Z_