# DSH Bug Watch — 2026-10-27

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 43

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
_（无）_

## 📝 仅报告 — 无人互动
- [#702](https://github.com/deepseek-ai/deepseek-harness/discussions/702) [Bug][macOS][v0.1.0-rc.6] “添加工作区”缺少即时反馈，目录选择器启动延迟且可能未置前
- [#11139](https://github.com/deepseek-ai/deepseek-harness/discussions/11139) [Bug] dsh-llm-deepseek throws UNSUPPORTED_CONTENT on Anthropic redacted_thinking blocks
- [#9949](https://github.com/deepseek-ai/deepseek-harness/discussions/9949) [Bug] `subagent_codex` fails on any model newer than the pinned Codex CLI (0.153.4)
- [#5587](https://github.com/deepseek-ai/deepseek-harness/discussions/5587) [BUG]删了team插件后，尝试自我修复，无法生成新对话
- [#10113](https://github.com/deepseek-ai/deepseek-harness/discussions/10113) [Bug] macOS：/usr/local/bin 为 0700 时 “Manage dsh Command…” 安装失败（EACCES lstat）
- [#11132](https://github.com/deepseek-ai/deepseek-harness/discussions/11132) [BUG]DSH中沙盒权限异常
- [#10749](https://github.com/deepseek-ai/deepseek-harness/discussions/10749) [Bug] 工具面翻转后所有工具被标记 defer_loading，会话永久 400（INVALID_REQUEST）
- [#11121](https://github.com/deepseek-ai/deepseek-harness/discussions/11121) [Bug] dsh-hmr: 热重载后 apply() 定时器永久携带 executing=true，导致 runExclusive 嵌套报错
- [#11123](https://github.com/deepseek-ai/deepseek-harness/discussions/11123) [Bug] llm-pi-ai: content_filter 抹平了 8 种上游终止原因，失败信息不可诊断
- [#11119](https://github.com/deepseek-ai/deepseek-harness/discussions/11119) [Bug] 更新器以"把整个安装目录改名到父目录"作为升级第一步，在 Windows 上极易失败且无法自诊断
- [#11118](https://github.com/deepseek-ai/deepseek-harness/discussions/11118) [Bug] Windows ACL sandbox: every confined command dies at DLL init with 0xC0000142 (RDP session, elevated host)
- [#10492](https://github.com/deepseek-ai/deepseek-harness/discussions/10492) [Bug] Desktop host killed by PartitionAlloc OOM (exit 0xE0000008): whole app exits, and the crash popup shows only the last 64 KB of stderr
- [#10186](https://github.com/deepseek-ai/deepseek-harness/discussions/10186) [Bug][Windows 0.2.1-rc.2] 切换到 deepseek-official 后报 tool_result 缺失，但本地结果及序列化配对均存在
- [#11115](https://github.com/deepseek-ai/deepseek-harness/discussions/11115) [Bug] llm-deepseek: assistant() replays a text block placed after tool_use, and strict Messages endpoints then reject the session forever
- [#11103](https://github.com/deepseek-ai/deepseek-harness/discussions/11103) [Bug] Discover restores a removed market when an in-flight refresh finishes
- [#11111](https://github.com/deepseek-ai/deepseek-harness/discussions/11111) Bug report: dollar signs in prose are rendered as inline LaTeX
- [#11105](https://github.com/deepseek-ai/deepseek-harness/discussions/11105) [BUG] 桌面版在无互联网的Windows环境安装后运行任务崩溃
- [#11064](https://github.com/deepseek-ai/deepseek-harness/discussions/11064) [Bug] 上下文超窗口后静默空转：连续 6 条用户消息只返回空流，界面一直转圈，每次仍照常计费
- [#11082](https://github.com/deepseek-ai/deepseek-harness/discussions/11082) [Bug] A split surrogate pair in dsh_session_log makes every request 400 (plain text) and permanently bricks the session
- [#11102](https://github.com/deepseek-ai/deepseek-harness/discussions/11102) [bug] `dsh desktop` 启动认证 cookie 无限累积，约六七十次启动后启动崩溃
- [#11097](https://github.com/deepseek-ai/deepseek-harness/discussions/11097) [Bug] Adding a model through the catalog picker drops hand-declared fields (reasoningEfforts gone, no effort levels for custom providers)
- [#11076](https://github.com/deepseek-ai/deepseek-harness/discussions/11076) [Bug] Windows 11 下文件链接把路径反斜杠转义吃掉，点击报「文件不存在」——是否已知？计划哪个版本修复？
- [#11087](https://github.com/deepseek-ai/deepseek-harness/discussions/11087) [Bug] Preview can't open a file chip when the message's session cwd differs from the viewing window's cwd (path gets relativized against the wrong root)
- [#11063](https://github.com/deepseek-ai/deepseek-harness/discussions/11063) [Bug] 失败请求/重试耗尽后上下文占用显示为 0%（contextPressure 采纳 assistant/attempt 的零 usage 样本）
- [#11092](https://github.com/deepseek-ai/deepseek-harness/discussions/11092) [Bug] Windows 10: every sandboxed child dies with 0xC0000142 (STATUS_DLL_INIT_FAILED) under workspace-write
- [#11091](https://github.com/deepseek-ai/deepseek-harness/discussions/11091) [bug] using kimi-k3 model in auto-review mode - error
- [#11052](https://github.com/deepseek-ai/deepseek-harness/discussions/11052) [Bug] Windows 自动更新替换安装目录时跟随 junction，删除了安装目录外的 45 GB 用户工作区（SSD TRIM 后不可恢复）
- [#11086](https://github.com/deepseek-ai/deepseek-harness/discussions/11086) [Bug] 飞书入站图片消息触发 INTERNAL_UNKNOWN，图片无法进入会话（附 4 个参考号）
- [#9677](https://github.com/deepseek-ai/deepseek-harness/discussions/9677) [Bug] One repeated PTC sub-call id makes an entire Session unloadable (data loss)
- [#11084](https://github.com/deepseek-ai/deepseek-harness/discussions/11084) [Bug] A workspace registered at a path later replaced by a junction can never attach a session — its cwd resolves elsewhere, permanently
- [#10862](https://github.com/deepseek-ai/deepseek-harness/discussions/10862) [Bug] Session resume drops all core tools from the tool registry (48 to 19), with direct registry-diff evidence
- [#11050](https://github.com/deepseek-ai/deepseek-harness/discussions/11050) [Bug] Catalog-backed pi-ai routes report no output reserve — compaction threshold lands 135k above the provider's admission limit
- [#9924](https://github.com/deepseek-ai/deepseek-harness/discussions/9924) [Bug] Desktop "Web authentication failed": stale dsh-auth-* cookies overflow the Host header limit (431)
- [#10844](https://github.com/deepseek-ai/deepseek-harness/discussions/10844) [Bug] Claude Opus（Kiro Max 渠道）在 dsh 中每轮请求后上下文即超窗，压缩后无法恢复，会话完全不可用；同渠道 Claude CLI 正常
- [#11067](https://github.com/deepseek-ai/deepseek-harness/discussions/11067) [Bug] 切换 provider 后，历史 continuable 子 agent 仍按创建时的 provider 计费（界面全显示 opencode-go，实际扣了 DeepSeek 官方账号）
- [#11046](https://github.com/deepseek-ai/deepseek-harness/discussions/11046) [Bug] Windows 受限模式（workspace-write）下 pwsh 工具必然 0xC0000142，任何命令都无法执行
- [#11061](https://github.com/deepseek-ai/deepseek-harness/discussions/11061) [Bug] Web GUI: Stop keeps the queued messages and flushes only the newest one
- [#7972](https://github.com/deepseek-ai/deepseek-harness/discussions/7972) [Bug][0.1.7-rc.2] Failed turn (HTTP 400/429) leaves all-zero usage samples; contextPressure projection permanently zeroed — ContextMeter shows 0%
- [#11059](https://github.com/deepseek-ai/deepseek-harness/discussions/11059) [BUG] Windows 沙箱 workspace-write：受限令牌默认 DACL 加 ACE 导致子进程 0xC0000142（pwsh 完全不可用）
- [#11058](https://github.com/deepseek-ai/deepseek-harness/discussions/11058) [Bug Report]：超长会话无法分叉，且 fork 失败完全静默（V8 字符串上限 + 客户端吞错）
- [#11043](https://github.com/deepseek-ai/deepseek-harness/discussions/11043) [Bug] 语音输入：录音中切到别的窗口或标签页会被静默取消，录音与文字都不会保留
- [#11041](https://github.com/deepseek-ai/deepseek-harness/discussions/11041) [Bug] macOS 0.2.1-alpha.3 起：新建工作区的原生目录选择器无法回到上级目录
- [#11035](https://github.com/deepseek-ai/deepseek-harness/discussions/11035) [Bug] 0.2.1-rc.3 自动压缩反复重写旧摘要且不收敛（#7212 独立复现，含脱敏证据）

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-10-27T03:18:00.687Z_