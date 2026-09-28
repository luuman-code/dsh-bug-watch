# DSH Bug Watch — 2026-09-28

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 40

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
_（无）_

## 📝 仅报告 — 无人互动
- [#7435](https://github.com/deepseek-ai/deepseek-harness/discussions/7435) [BUG] v0.1.7-alpha.1 dsh: cannot resolve profile bundle "@deepseek-ai/dsh-experimental-agent-team-web-profile
- [#7924](https://github.com/deepseek-ai/deepseek-harness/discussions/7924) [Bug] 残留的空 .credentials.yaml.lock 让 web 宿主每次启动都失败：启动读取会话密钥也要拿写锁，而非原子创建留下的空锁不在 master 孤儿锁接管范围内（0.1.7-rc.1 实测，master 477b4f4 核对）
- [#7995](https://github.com/deepseek-ai/deepseek-harness/discussions/7995) [Bug] session search fails on any store that ever spawned a subagent — v0→v1 migration rejects `subagent/descriptor` version 2, the only version the writer emits
- [#8010](https://github.com/deepseek-ai/deepseek-harness/discussions/8010) [Bug] A session log that lost its final frames reads back as a complete session
- [#7650](https://github.com/deepseek-ai/deepseek-harness/discussions/7650) [BUG] Reaching context window 100% and not triggering auto-compaction
- [#7534](https://github.com/deepseek-ai/deepseek-harness/discussions/7534) [Bug] 0.1.7-alpha.1 and alpha.2: a failed startup still consumes settings.yaml - legacy sections import into a disposed context and are lost permanently
- [#5787](https://github.com/deepseek-ai/deepseek-harness/discussions/5787) [Bug] Markdown table: overflow is decided by column count, and the scrollbar is hidden until hover so wide columns become unreachable
- [#8035](https://github.com/deepseek-ai/deepseek-harness/discussions/8035) [Bug] spawn_teammate 不能把队友分派到其他模型或其他厂商
- [#8071](https://github.com/deepseek-ai/deepseek-harness/discussions/8071) [Bug] 脚手架生成的 profile manifest 缺少 version：持有松散插件的 profile 上官方 DeepSeek 请求全部失败（REQUEST_EXTENSION）
- [#8070](https://github.com/deepseek-ai/deepseek-harness/discussions/8070) Bug: third-party connection.rpc.handle() fails plugin mount on 0.1.5+ (undeclared webServer read in Connection.register)
- [#8068](https://github.com/deepseek-ai/deepseek-harness/discussions/8068) [Bug] typert-generator emits invalid z.intersection(z.string(), z.unknown()) breaking dsh with zod v4
- [#8066](https://github.com/deepseek-ai/deepseek-harness/discussions/8066) [Bug] 会话持久化的 live 写缓冲无上限增长：`dsh web` 进程 RSS 涨到 14.7 GB（0.1.7-rc.2 / Windows）
- [#8043](https://github.com/deepseek-ai/deepseek-harness/discussions/8043) [Bug] 0.1.7-rc.2 / master：Windows 上「打开目录 / 在资源管理器中显示」的窗口不可见、或只在任务栏不弹前台 —— SW_HIDE 泄漏 + Windows 前台锁
- [#7658](https://github.com/deepseek-ai/deepseek-harness/discussions/7658) [Bug] 会话格式迁移后 dsh_session_log 水位失效：每次请求重发整份日志 → 413 且永久卡死
- [#8062](https://github.com/deepseek-ai/deepseek-harness/discussions/8062) [Bug][Windows 11 26100] workspace-write 下任何 shell 命令都以 3221225794（0xC0000142）死亡，read-only 正常
- [#8061](https://github.com/deepseek-ai/deepseek-harness/discussions/8061) [Bug] macOS arm64：自带 runtime 的 node 24.21.0 因库校验拒绝加载 adhoc 签名的原生插件预编译产物（require-builtin / node-pty 均 ERR_DLOPEN_FAILED），任何 profile 都无法启动
- [#8058](https://github.com/deepseek-ai/deepseek-harness/discussions/8058) [BUG] 超绝 markdown 渲染给我的注释带出来了
- [#8056](https://github.com/deepseek-ai/deepseek-harness/discussions/8056) [Bug] dsh-http-proxy 把 undici 专用的 `[::1]` 写进通用 NO_PROXY，Python httpx 等非 Node 子进程直接构不出 client
- [#3560](https://github.com/deepseek-ai/deepseek-harness/discussions/3560) [Bug] dsh web 反复 OOM：dsh-fs-local listDirectory 跟随符号链接环无限遍历
- [#4549](https://github.com/deepseek-ai/deepseek-harness/discussions/4549) [Bug] Scheduler failure leaves dangling tool/call — session permanently returns 400 INVALID_REQUEST (fix: append only the missing tool/result, #4017 follow-up)
- [#8048](https://github.com/deepseek-ai/deepseek-harness/discussions/8048) [Bug][Desktop][Windows] workspace-write can poison the DSH Desktop install directory itself, making Harness unlaunchable after restart
- [#7523](https://github.com/deepseek-ai/deepseek-harness/discussions/7523) [Bug] Windows: all subprocess tools fail with 0xC0000142 — probeWindowsJob never verifies the runner can actually start
- [#8025](https://github.com/deepseek-ai/deepseek-harness/discussions/8025) [Bug] Windows 沙箱的会话 TEMP 目录是【顺带】被建出来的 —— 首次 pwsh 调用会间歇失败（windows-acl-run: --temp is not an existing directory），失败与否取决于调用顺序 / [Bug] The Windows sandbox's per-session TEMP directory is only created INCIDENTALLY by whichever child process happens to use it first, so the first pwsh call fails intermittently (windows-acl-run: --temp is not an existing directory) depending on call order
- [#7800](https://github.com/deepseek-ai/deepseek-harness/discussions/7800) Bug: SessionFormatError "format v4 message requires a producer-owned source kind" - agent turns intermittently fail (core 0.1.7-rc.1)
- [#7761](https://github.com/deepseek-ai/deepseek-harness/discussions/7761) [bug] bash tool stop working when /tmp full
- [#7857](https://github.com/deepseek-ai/deepseek-harness/discussions/7857) [Bug] attach 模式下浏览器工具对交互会话永久不可用：独占槽被桌面端启动时的「会话恢复/播种」激活占住且不释放（0.1.7-rc.2，附源码行号与现场证据）
- [#8020](https://github.com/deepseek-ai/deepseek-harness/discussions/8020) [Bug] Auto review 下 `ask_user_question` 的人类授权对 reviewer 不可见 / Human authorization via `ask_user_question` is invisible to the Auto review reviewer
- [#8022](https://github.com/deepseek-ai/deepseek-harness/discussions/8022) [Bug][Windows][2.0.15-next] Hidden right dock inside an overflow:hidden frame becomes scrollable overflow, shifting the whole app 432px
- [#8021](https://github.com/deepseek-ai/deepseek-harness/discussions/8021) [Bug][Windows][2.0.15-next] Same-origin iframe in a dsh-app:// page gets a hard 403
- [#8023](https://github.com/deepseek-ai/deepseek-harness/discussions/8023) [Bug][2.0.15-next] sidebar.footer.action is a row flex with a display:contents anchor — multiple launchers crush each other (Desktop-only workaround exists)
- [#7802](https://github.com/deepseek-ai/deepseek-harness/discussions/7802) [Bug] 「加载历史」偶发永久卡住、只有刷新能恢复：等待 socket 的 waiter 永不 settle（含根因与社区补丁）/ Loading history hangs forever: waiters on the Remote stream socket are never settled (root cause & community patch available)
- [#3650](https://github.com/deepseek-ai/deepseek-harness/discussions/3650) Bug: ask_user_question card hides options and footer when the question is long (fix prepared)
- [#8011](https://github.com/deepseek-ai/deepseek-harness/discussions/8011) [Bug][Windows][0.1.7-rc.2] 写会话投影缓存时 V8 FATAL（Isolate::PushStackTraceAndDie null prototype chain root），Host exit 134 并自动重启
- [#5677](https://github.com/deepseek-ai/deepseek-harness/discussions/5677) [Bug] Web UI history never loads on Firefox-engine browsers (infinite "Loading history…") — Firefox-only failure in lossless-JSON validation
- [#8007](https://github.com/deepseek-ai/deepseek-harness/discussions/8007) [Bug Report] Windows：工作区所在卷无法写完整性标签时，workspace-write 在首次授权就 fail-closed（grantWrite → SetNamedSecurityInfoW Win32 5，shell 完全不可用）
- [#1944](https://github.com/deepseek-ai/deepseek-harness/discussions/1944) [Bug] Compaction request misses provider prefix cache entirely — summarizer doesn't inherit reasoningEffort / adds maxTokens
- [#8006](https://github.com/deepseek-ai/deepseek-harness/discussions/8006) [Bug] agent-preset-registry 注册即挂载且从不释放，未选中的 preset 同样拖慢每一轮
- [#8005](https://github.com/deepseek-ai/deepseek-harness/discussions/8005) [Bug] Windows 桌面端：点「显示文件位置 / 打开所在文件夹」没有任何反应 —— 窗口被创建为隐藏状态（windowsHide 泄漏到 GUI 启动器）
- [#8001](https://github.com/deepseek-ai/deepseek-harness/discussions/8001) [Bug][Windows] 0.1.7-rc.2: 窗口关闭死锁 / ACL沙箱权限崩溃(Win32 5) / 子代理卡片失踪与硬锁8并发 / SSRF误杀TUN代理
- [#3867](https://github.com/deepseek-ai/deepseek-harness/discussions/3867) [Bug] Windows PTC/Code Mode (run_code) cannot spawn any subprocess — bash/glob/grep fail with 0xC0000142

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-09-28T02:59:59.835Z_