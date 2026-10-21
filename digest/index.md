# DSH Bug Watch — 2026-10-21

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 44

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
_（无）_

## 📝 仅报告 — 无人互动
- [#8123](https://github.com/deepseek-ai/deepseek-harness/discussions/8123) [bug] Auto review 在 step-5-preview 下 reviewer 返回正文加 tool_call 标记而非 JSON，导致会话所有工具调用被拒（与 #7773 同后果、不同根因）
- [#10475](https://github.com/deepseek-ai/deepseek-harness/discussions/10475) [Bug] Cordis loader fails to import a valid ESM plugin entry point (failed to import)
- [#9248](https://github.com/deepseek-ai/deepseek-harness/discussions/9248) [Bug] app-boot resolver requires node-addon-require-builtin unconditionally — fatal on Android, while hmr already has the --expose-internals fallback
- [#10468](https://github.com/deepseek-ai/deepseek-harness/discussions/10468) [Bug] Session "Cache hit" pill is integer-only: 98.9% renders as "99%", while the per-turn panel shows 99.8%
- [#10467](https://github.com/deepseek-ai/deepseek-harness/discussions/10467) [Bug] Workspace loses session accounting after a host crash/relaunch (sessions fall into "Ungrouped", no way to re-attach)
- [#10463](https://github.com/deepseek-ai/deepseek-harness/discussions/10463) [Bug] Windows ACL sandbox: Low integrity label is applied only to the workspace root and does not inherit to existing subdirectories
- [#10462](https://github.com/deepseek-ai/deepseek-harness/discussions/10462) [Bug] open-in-app returns 502 for all Electron-based editors (Cursor / VS Code / Windsurf) — scrubbedParentEnv() leaks ELECTRON_RUN_AS_NODE=1
- [#10203](https://github.com/deepseek-ai/deepseek-harness/discussions/10203) [Bug Report] patch-injected "skill-filesystem" row without "name" is silently disabled by preflight
- [#10458](https://github.com/deepseek-ai/deepseek-harness/discussions/10458) [Bug] Nested dsh-app-boot copy checks plugin compatibility against its own version, not the running launcher
- [#9710](https://github.com/deepseek-ai/deepseek-harness/discussions/9710) [Bug][Desktop/Win] 启动后约 80 秒单核满载 + 约 900 MB 读取：dsh-settings describe() 每次调用都重算整个 profile 组合
- [#10457](https://github.com/deepseek-ai/deepseek-harness/discussions/10457) [Bug][0.2.1-rc.2 / Windows] 任务看板任何卡片运行立即失败：Cannot read properties of undefined (reading 'signal')，未创建任何会话
- [#10454](https://github.com/deepseek-ai/deepseek-harness/discussions/10454) [Bug] 持久终端：开启「持久 Shell 后端 (pwsh)」必失败——两行共用 PTY backendType `shell`
- [#10452](https://github.com/deepseek-ai/deepseek-harness/discussions/10452) [Bug] Windows: "Manage dsh Command…" always fails with "Command-manager process failed." — ESM worker ships without a package.json
- [#1497](https://github.com/deepseek-ai/deepseek-harness/discussions/1497) Bug: corrupt session log after unclean exit — replayed events cause seq gap in committed region, history unrecoverable
- [#10443](https://github.com/deepseek-ai/deepseek-harness/discussions/10443) [bug] 鼠标第 4、5 键可在已完成的启动画面与工作画面之间来回切换
- [#9957](https://github.com/deepseek-ai/deepseek-harness/discussions/9957) [Bug] 设置 → 通用设置 → 权限：默认权限预设永远保存不了 —— revision 校验落在插件树 reload 之后，且客户端把冲突静默抹掉（master 687f282e 仍在）
- [#10440](https://github.com/deepseek-ai/deepseek-harness/discussions/10440) [bug] 离线补标题写坏会话日志的三个变体，以及一条被漏掉的校验：`session/title.messageSeqs` 引用了非用户消息
- [#5630](https://github.com/deepseek-ai/deepseek-harness/discussions/5630) Bug: Chinese IME (Microsoft Pinyin) input corrupted in the Web GUI chat composer
- [#10431](https://github.com/deepseek-ai/deepseek-harness/discussions/10431) [Bug] macOS 从 QQ/飞书复制图片粘贴：图片能进附件栏，但文件名被当成文本同时插入 composer（缺少 text/file 仲裁）
- [#9830](https://github.com/deepseek-ai/deepseek-harness/discussions/9830) [Bug] 代理变量大小写重复导致 Windows 上 .NET 子进程启动全面失效 / Duplicate-cased proxy vars break every .NET child-process launch on Windows
- [#9699](https://github.com/deepseek-ai/deepseek-harness/discussions/9699) [Bug] ReactLoopAgent.cancel() does not validate cause at entry, writing {"reason":null} on turn/end and permanently crashing Chat UI
- [#9653](https://github.com/deepseek-ai/deepseek-harness/discussions/9653) [Bug] Windows: boot-time corpus scan exhausts process fd limit (EMFILE) and leaves a permanent empty .lock that blocks every later boot
- [#9206](https://github.com/deepseek-ai/deepseek-harness/discussions/9206) [Bug] 慢链路下 mux 心跳掐断 WebSocket，前端反复重连重放 MB 级历史，侧栏会话标题在真名与「未命名」间闪动
- [#9028](https://github.com/deepseek-ai/deepseek-harness/discussions/9028) [Bug] Desktop: after background reconnect every sidebar session title flashes to "未命名" (untitled) — projection stores cleared before refresh backfills (0.2.0-rc.2)
- [#10406](https://github.com/deepseek-ai/deepseek-harness/discussions/10406) [bug] 单条 tool-call 的 arguments 非法即整轮失败（MALFORMED_RESPONSE），建议隔离坏调用或自动重试
- [#10412](https://github.com/deepseek-ai/deepseek-harness/discussions/10412) [Bug] OpenCode 免费模型 ID 解析错误导致 403，且错误被误映射为“API Key 无效”
- [#9086](https://github.com/deepseek-ai/deepseek-harness/discussions/9086) [BUG](windows沙箱问题)(DSH GUI模式)会话里跑在非「完全权限」模式在项目文件夹根目录生成Windows 强制完整性标签，导致二进制生成文件权限受限
- [#10162](https://github.com/deepseek-ai/deepseek-harness/discussions/10162) [Bug] open-in-app: VS Code (and every Electron app) cannot be launched on Windows — ELECTRON_RUN_AS_NODE leaks into the child environment
- [#10349](https://github.com/deepseek-ai/deepseek-harness/discussions/10349) [Bug] 「打开方式」列出所有已注册处理器，选中非适用程序后助手进程永久挂起（Windows）
- [#441](https://github.com/deepseek-ai/deepseek-harness/discussions/441) [Bug] Profile `cordis.yml` is rewritten non-atomically on every boot, so concurrent launches intermittently fail to load
- [#10401](https://github.com/deepseek-ai/deepseek-harness/discussions/10401) [Bug] 安装版桌面端的 Web 界面说明仍按浏览器与 dsh web 开发流程书写（0.2.1-rc.2）
- [#6437](https://github.com/deepseek-ai/deepseek-harness/discussions/6437) [Bug] dsh-client-resources 的 protocolOf 依赖 new URL().hostname，Edge 129 下文件预览显示“文件资源服务不可用”
- [#10393](https://github.com/deepseek-ai/deepseek-harness/discussions/10393) [Bug] Desktop: task-panel member cards detach and float above all windows after macOS fullscreen toggle, blocking global mouse input
- [#10394](https://github.com/deepseek-ai/deepseek-harness/discussions/10394) [Bug] Plugins page loses the four official settings entries (Shell / Agent loop / Subagent / Web search) on non-loopback origins
- [#10382](https://github.com/deepseek-ai/deepseek-harness/discussions/10382) [Bug] Second copy of @deepseek-ai/dsh-scope / dsh-system-prompt in the profile node_modules blocks every new & resumed session (agent-preset/invalid, "deployment:persona-prefix" already registered)
- [#10387](https://github.com/deepseek-ai/deepseek-harness/discussions/10387) [Bug] dsh-app-boot 0.2.1-rc.2：Profile 包里 require("punycode/") 导致导入崩溃（resolve.paths 返回 null）
- [#10385](https://github.com/deepseek-ai/deepseek-harness/discussions/10385) [Bug] nono 沙箱下上传图片失败：附件插件会打开 `/` 做 fsync
- [#8610](https://github.com/deepseek-ai/deepseek-harness/discussions/8610) [Bug] 桌面端侧栏：冷会话（未打开过）的标题一律显示"未命名"，投影缓存里的 title 行不被采用（0.2.0-rc.2）
- [#9949](https://github.com/deepseek-ai/deepseek-harness/discussions/9949) [Bug] `subagent_codex` fails on any model newer than the pinned Codex CLI (0.153.4)
- [#10294](https://github.com/deepseek-ai/deepseek-harness/discussions/10294) [Bug] Windows 桌面版 Open In → VS Code 必然失败（dsh web 正常）：ELECTRON_RUN_AS_NODE 泄漏到被启动的 launcher
- [#9924](https://github.com/deepseek-ai/deepseek-harness/discussions/9924) [Bug] Desktop "Web authentication failed": stale dsh-auth-* cookies overflow the Host header limit (431)
- [#10369](https://github.com/deepseek-ai/deepseek-harness/discussions/10369) [Bug] Windows「打开方式」选中某些应用后，associations.ps1 助手进程永久挂起，界面卡在「正在打开…」
- [#10367](https://github.com/deepseek-ai/deepseek-harness/discussions/10367) [bug] Agent Teams 会话下 send_message 无法按 id 寻址子代理，但 subagent 工具描述声称可以，这个bug之前修复过一次，但没有修好
- [#3542](https://github.com/deepseek-ai/deepseek-harness/discussions/3542) [Bug] Manual `/compact` aborts after 5–15s with "DeepSeek request aborted by caller" — 22/23 attempts fail (rc.7 & rc.8)

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-10-21T02:54:15.837Z_