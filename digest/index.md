# DSH Bug Watch — 2026-11-01

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 54

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
- [#11604](https://github.com/deepseek-ai/deepseek-harness/discussions/11604) **[Bug][Desktop] 特定旧会话只能输出 Reasoning，Text 正文通道持续缺失**<br/>  分类：Q&A · 标签：— · 最近更新：2026-11-01
- [#11593](https://github.com/deepseek-ai/deepseek-harness/discussions/11593) **[Bug][Desktop 0.2.1-rc.3] Opening a single-turn session wedges the chat view on "Loading history…" forever, with no error shown**<br/>  分类：Q&A · 标签：— · 最近更新：2026-10-31
- [#11612](https://github.com/deepseek-ai/deepseek-harness/discussions/11612) **[Bug] workspace.json with a non-array sessionIds breaks the whole workspace domain and cascades into unrelated services**<br/>  分类：Q&A · 标签：— · 最近更新：2026-10-31

## 📝 仅报告 — 无人互动
- [#11715](https://github.com/deepseek-ai/deepseek-harness/discussions/11715) [Bug][Windows] Host exits with code 130 (console SIGINT) after a long shell command, killing all in-flight turns
- [#11608](https://github.com/deepseek-ai/deepseek-harness/discussions/11608) [Bug] Eager projection-cache load dominates `dsh web` startup: 969 records / 209 MB → 5.3 s of validation (26%)
- [#11713](https://github.com/deepseek-ai/deepseek-harness/discussions/11713) [Bug][Windows] 安装程序越界删除文件：Steam 游戏清单被批量删除
- [#11712](https://github.com/deepseek-ai/deepseek-harness/discussions/11712) [Bug] Invalid schema for function 'mcp_hub' — got 'type: null'
- [#11710](https://github.com/deepseek-ai/deepseek-harness/discussions/11710) [BUG] Platform auth cookies accumulate per-launch and are never cleared → 431 Request Header Too Large → DSH Desktop fails to launch after ~72 starts
- [#11708](https://github.com/deepseek-ai/deepseek-harness/discussions/11708) [Bug] Persistent pwsh: a command settles as stdin_read before its END marker, and the next call receives its tail (flaky loader-composition.spec.ts)
- [#7216](https://github.com/deepseek-ai/deepseek-harness/discussions/7216) [Bug][Windows] 每条命令都会闪一个可见的控制台窗口（launchWindowsJob 缺 windowsHide）
- [#11707](https://github.com/deepseek-ai/deepseek-harness/discussions/11707) [Bug][rc.2] 中断恢复：合成闭包已落盘，续跑却按闭包前的长度编号 → seq 复用、会话历史永久不可加载（3 个实例已在盘上定位并修复）
- [#11692](https://github.com/deepseek-ai/deepseek-harness/discussions/11692) [Bug][Windows] web_search / web_fetch 的 "TypeError: fetch failed" 有一类根因：移动热点（ICS）保留了 1976 个连续 IPv4 端口（WSAEACCES，与网络无关）
- [#11693](https://github.com/deepseek-ai/deepseek-harness/discussions/11693) [Bug] Windows 11 桌面版启动即崩溃 (0x80000003 / renderer launch-failed)，rc.3 与 rc.5 均复现
- [#11691](https://github.com/deepseek-ai/deepseek-harness/discussions/11691) [Bug][Desktop] PTC run_code runtime is permanently bricked after setting session cwd into an app.asar virtual path (Windows)
- [#6733](https://github.com/deepseek-ai/deepseek-harness/discussions/6733) [Bug] dsh-web-fetch-http：connect EACCES 时未处理的 'error' 事件导致整个 dsh 进程崩溃（Windows）
- [#11690](https://github.com/deepseek-ai/deepseek-harness/discussions/11690) [Bug][Desktop][Startup] 0.2.1-rc.5 Windows：Host 启动阶段 fatal「Invalid URL」，input 为 undefined//127.0.0.1:<port>，主窗口永久隐藏、零端口监听（已排除 #11674/#11675 的 431 cookie 累积）
- [#4722](https://github.com/deepseek-ai/deepseek-harness/discussions/4722) [bug] In-memory session log is unbounded (append-only) and compaction never trims it - long/heavy sessions OOM the web process
- [#11688](https://github.com/deepseek-ai/deepseek-harness/discussions/11688) [Bug] report: DeepSeek UI served in Arabic when browser locale is es-AR / es_AR
- [#11687](https://github.com/deepseek-ai/deepseek-harness/discussions/11687) [Bug] 升级至 0.2.1-rc.5 后，因第三方插件冲突导致启动崩溃 (1 required plugin did not activate)
- [#10603](https://github.com/deepseek-ai/deepseek-harness/discussions/10603) [Bug] 桌面端内嵌 webview 里「消息复制」静默失败：宿主租约 session 拒绝 clipboard 权限 + writeClipboard 缺少 execCommand 兜底
- [#8420](https://github.com/deepseek-ai/deepseek-harness/discussions/8420) [Bug] 桌面版：沙箱模式下所有命令派生失败（exit code 3221225794 / 0xC0000142），被迫开全盘权限才能工作
- [#11680](https://github.com/deepseek-ai/deepseek-harness/discussions/11680) [Bug] Windows：「在应用中打开」对 Electron 类应用（VS Code / Cursor / Windsurf）必然失败 —— Host 的 `ELECTRON_RUN_AS_NODE` 泄漏给子进程
- [#11679](https://github.com/deepseek-ai/deepseek-harness/discussions/11679) [Bug][Desktop][Startup] 上次崩溃后重启，宿主在启动阶段直接 fatal：cannot create effect on inactive context (INACTIVE_EFFECT)
- [#11678](https://github.com/deepseek-ai/deepseek-harness/discussions/11678) [Bug] Anthropic Messages: reasoningEffort=max is silently clamped to high (budget_tokens=16384)
- [#9271](https://github.com/deepseek-ai/deepseek-harness/discussions/9271) [Bug] Inspector Cordis-tree growth crashes Desktop Host: source state exceeds source-frame byte limit
- [#11667](https://github.com/deepseek-ai/deepseek-harness/discussions/11667) [bug] x64-windows, version 0.2.1-rc.5: session can't modify workspace in a virtual disk (vhd,vhdx) with Workspace Write permission.
- [#11666](https://github.com/deepseek-ai/deepseek-harness/discussions/11666) [Bug][Desktop] open-in-app 无法启动 Electron 系编辑器：子进程继承 ELECTRON_RUN_AS_NODE 秒退（502 launch-failed）
- [#11664](https://github.com/deepseek-ai/deepseek-harness/discussions/11664) [Bug][Windows][附候选修复] 工作区 ACL 授权阻塞整个宿主事件循环（#9818 / #11545 后续）
- [#10877](https://github.com/deepseek-ai/deepseek-harness/discussions/10877) [Bug] agent.inject() accepts malformed messages: one missing `role` permanently breaks the session (422, no recovery)
- [#11290](https://github.com/deepseek-ai/deepseek-harness/discussions/11290) [bug] macOS：Harness 为前台窗口时切换输入法，CursorUIViewService 占用 95%+ CPU 并导致全系统输入卡死
- [#11659](https://github.com/deepseek-ai/deepseek-harness/discussions/11659) [Bug] Silent update wipes resources/runtime/office-skills when resources/app contains a junction（静默更新后应用无法启动）
- [#11086](https://github.com/deepseek-ai/deepseek-harness/discussions/11086) [Bug] 飞书入站图片消息触发 INTERNAL_UNKNOWN，图片无法进入会话（附 4 个参考号）
- [#11377](https://github.com/deepseek-ai/deepseek-harness/discussions/11377) [Bug] DeepSeek Harness desktop returns persistent 502 on account-login channel since Oct 28
- [#11652](https://github.com/deepseek-ai/deepseek-harness/discussions/11652) [BUG]DSH 沙箱打低完整性标签导致程序无法启动0.2.1-rc.3
- [#11651](https://github.com/deepseek-ai/deepseek-harness/discussions/11651) [Bug] 一条非法事件让整份会话不可读，且重启后会话从列表里静默消失（无报错、无修复入口）
- [#11590](https://github.com/deepseek-ai/deepseek-harness/discussions/11590) [BUG] DSH 桌面版启动失败（Web authentication failed）：认证 cookie 无界累积撑爆请求头，30 天内约 70 次启动后触发
- [#11219](https://github.com/deepseek-ai/deepseek-harness/discussions/11219) [Bug] 0.2.1-rc.3 桌面端：零第三方插件下 host/renderer 循环崩溃（crypto_context.cc:884 / absl raw_hash_map::at / renderer 静默退出）
- [#810](https://github.com/deepseek-ai/deepseek-harness/discussions/810) [Bug] Windows: sandboxed pwsh always dies with 0xC0000142 under console-less host (desktop launch path)
- [#401](https://github.com/deepseek-ai/deepseek-harness/discussions/401) [Bug] Windows 下，工作区连接后新增的子目录无法写入
- [#5818](https://github.com/deepseek-ai/deepseek-harness/discussions/5818) [Bug] Session history fails to load after upgrading: the v0 migration inventory refuses released payload members (permission/preset origin, flat pi-ai replayState)
- [#11645](https://github.com/deepseek-ai/deepseek-harness/discussions/11645) [Bug][桌面端 0.2.1-rc.5] 窗口切走再切回时整页重绘、文字重新光栅化，出现明显卡顿（Windows）
- [#11642](https://github.com/deepseek-ai/deepseek-harness/discussions/11642) [BUG] Composer hover flickers: tooltip bubble adds a horizontal scrollbar, shrinking the scroller by the scrollbar height and re-triggering hover
- [#11346](https://github.com/deepseek-ai/deepseek-harness/discussions/11346) [Bug] Desktop app startup failed: 1 required plugin did not activate (v0.2.1-rc.3)
- [#11043](https://github.com/deepseek-ai/deepseek-harness/discussions/11043) [Bug] 语音输入：录音中切到别的窗口或标签页会被静默取消，录音与文字都不会保留
- [#11631](https://github.com/deepseek-ai/deepseek-harness/discussions/11631) [Bug] Web search settings UI exposes baseURL/apiKey but not `model`: hidden default `deepseek-v4-flash` breaks third-party Anthropic-compatible endpoints
- [#11625](https://github.com/deepseek-ai/deepseek-harness/discussions/11625) [Bug] Runtime-valid profile cannot be saved in Settings: js-yaml / yaml flow-closing indentation mismatch
- [#11626](https://github.com/deepseek-ai/deepseek-harness/discussions/11626) [Bug] Draft image attachments are lost when switching sessions (text draft survives)
- [#8984](https://github.com/deepseek-ai/deepseek-harness/discussions/8984) [bug] Duplicate seq written to session log when seed-construction and resume overlap (bionic: no write lease → whole history rejected on read)
- [#11622](https://github.com/deepseek-ai/deepseek-harness/discussions/11622) [bug] stdio MCP 的 stderr 被继承进 host，能把 dsh web 的就绪行写坏（附最小复现）
- [#11621](https://github.com/deepseek-ai/deepseek-harness/discussions/11621) Bug Report: Auto Review Failures Permanently Block Tool Execution / 自动审查失败导致工具调用被永久阻断
- [#11620](https://github.com/deepseek-ai/deepseek-harness/discussions/11620) [bug] dsh-llm-pi-ai: stream-idle watchdog ignores SSE keep-alives, so a long prompt pass is killed as a dead stream (patch + regression test)
- [#11192](https://github.com/deepseek-ai/deepseek-harness/discussions/11192) [Bug] Windows 桌面端 0.2.1-rc.2 启动即崩:desktop welcome: Web RPC failed(workspaceService unavailable)
- [#11614](https://github.com/deepseek-ai/deepseek-harness/discussions/11614) [bug] 长会话死于折叠预算硬悬崖：缺降级路径、缺活账水位、输出预留白占 24.5% 窗口
- [#11615](https://github.com/deepseek-ai/deepseek-harness/discussions/11615) [bug] 记忆快照与系统提示重复注入：去重指纹带上「相对年龄」，49% 的快照是纯重发

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-11-01T03:47:18.623Z_