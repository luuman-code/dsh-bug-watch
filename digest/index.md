# DSH Bug Watch — 2026-09-26

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 44

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
_（无）_

## 📝 仅报告 — 无人互动
- [#7909](https://github.com/deepseek-ai/deepseek-harness/discussions/7909) [Bug]网页端Harness页面打不开 https://www.deepseek.com/harness/ failed to open
- [#7908](https://github.com/deepseek-ai/deepseek-harness/discussions/7908) [Bug] build:lib fails with MISSING_EXPORT "SettingsProvider" from dsh-settings on 0.1.7-rc.2
- [#7905](https://github.com/deepseek-ai/deepseek-harness/discussions/7905) [Bug] 切会话或刷新后，输入区里粘贴的图永久消失：`session/attachment` 拒绝返回未被会话日志引用的图片（根因已定位，附绕过方案） / Pasted-but-unsent images vanish forever after a session switch or a reload: `session/attachment` refuses images the session log never referenced (root cause located, workaround included)
- [#2977](https://github.com/deepseek-ai/deepseek-harness/discussions/2977) [BUG]历史加载失败：Failed to fetch（internal）
- [#7803](https://github.com/deepseek-ai/deepseek-harness/discussions/7803) [Bug] Web 输入框：微软拼音打中文出现拼音落框、候选词错乱，换输入法即恢复（Lexical 0.49.0）
- [#7899](https://github.com/deepseek-ai/deepseek-harness/discussions/7899) Bug: 工具调用把系统键盘焦点移到自己的窗口，导致输入被投递到别处并污染用户文本 — 模型无法判断用户是否在打字
- [#7414](https://github.com/deepseek-ai/deepseek-harness/discussions/7414) Bug: dsh web V8 heap OOM after long uptime — live sessions are never unloaded
- [#6781](https://github.com/deepseek-ai/deepseek-harness/discussions/6781) [Bug] Android APK: ZodError in workspace.json (updatedAt) blocks app startup after user-initiated stop — sessions locked
- [#7894](https://github.com/deepseek-ai/deepseek-harness/discussions/7894) [Bug][0.1.7-rc.2] goal-round-driver + broken compaction caused runaway 642M token explosion in a single session (Continuing goal infinite loop)
- [#7877](https://github.com/deepseek-ai/deepseek-harness/discussions/7877) [Bug][Windows] MSYS2/Git Bash 无法在 ACL 沙箱下运行：couldn't create signal pipe, Win32 error 5（cmd/pwsh 同沙箱正常）
- [#7876](https://github.com/deepseek-ai/deepseek-harness/discussions/7876) [Bug][Windows] 桌面版受限模式下沙箱 runner 起不来：argv[0] 是 Electron 的 exe，却没人给它 ELECTRON_RUN_AS_NODE
- [#7888](https://github.com/deepseek-ai/deepseek-harness/discussions/7888) [Bug] 桌面版预览版 win-x64 试用记录：装本地插件后冷启动崩、窗口按钮盖住右栏关闭、更新检查弹 EPIPE
- [#7885](https://github.com/deepseek-ai/deepseek-harness/discussions/7885) [Bug] 0.1.7-rc.1/rc.2 出口代理策略注入的 undici 8.x 全局分发器与 Node 内置 fetch 主版本错配：进程内所有响应头丢失（MCP HTTP 服务器永久断开、微信图片/文件发送失败）
- [#7802](https://github.com/deepseek-ai/deepseek-harness/discussions/7802) [Bug] 「加载历史」偶发永久卡住、只有刷新能恢复：等待 socket 的 waiter 永不 settle（含根因与社区补丁）/ Loading history hangs forever: waiters on the Remote stream socket are never settled (root cause & community patch available)
- [#7865](https://github.com/deepseek-ai/deepseek-harness/discussions/7865) [bug] 实验性 Playwright MCP 启动失败会导致所有会话创建失败（failOnStartupError: true + reconnect: false），并残留孤儿浏览器进程
- [#7882](https://github.com/deepseek-ai/deepseek-harness/discussions/7882) [Bug][Windows] 桌面版「在本地打开」按钮静默失效：explorer 窗口被 CREATE_NO_WINDOW 隐藏 + 子进程继承 ELECTRON_RUN_AS_NODE 导致 Electron 应用秒退
- [#2850](https://github.com/deepseek-ai/deepseek-harness/discussions/2850) [BUG] workspace-write sandbox breaks Schannel TLS in subprocesses (SEC_E_NO_CREDENTIALS)
- [#7879](https://github.com/deepseek-ai/deepseek-harness/discussions/7879) [Bug] 内容审核按"单个字形"拦截 → 会话永久 400：最小复现仅 2 码位、跨端点/跨客户端一致（附可落地的三处修复）
- [#7310](https://github.com/deepseek-ai/deepseek-harness/discussions/7310) [Bug] 一次内容审核 400 会永久废掉整个会话 —— 需要「撤销被拒内容并继续」的回滚能力
- [#7825](https://github.com/deepseek-ai/deepseek-harness/discussions/7825) [Bug] Web composer: IME composition leaks un-typed characters (0.1.5-rc.3, Windows + Microsoft Pinyin)
- [#7800](https://github.com/deepseek-ai/deepseek-harness/discussions/7800) Bug: SessionFormatError "format v4 message requires a producer-owned source kind" - agent turns intermittently fail (core 0.1.7-rc.1)
- [#7871](https://github.com/deepseek-ai/deepseek-harness/discussions/7871) [Bug][Windows] Tools engine crashes: "Cannot read properties of undefined (reading 'kind')" in dsh-tools/lib/index.js:1260
- [#7870](https://github.com/deepseek-ai/deepseek-harness/discussions/7870) [Bug] macOS arm64 平台包 @deepseek-ai/node-addon-system-darwin-arm64 内嵌 x86_64 二进制导致原生模块加载失败
- [#7845](https://github.com/deepseek-ai/deepseek-harness/discussions/7845) [Bug] 仅用账号登录（未配置任何 API key）时 web_search 100% 失败于 WEB_PROVIDER_CREDENTIAL_MISSING，且界面无任何引导
- [#3632](https://github.com/deepseek-ai/deepseek-harness/discussions/3632) [Bug] [Update] Orphan agent/inbox/spliced splits log validity from session readability — impact upgrade: a routine post-incident repair can produce a durably intact but unreadable session (self-review of our own bug report)
- [#7860](https://github.com/deepseek-ai/deepseek-harness/discussions/7860) [Bug][Windows] "Open folder" spawns explorer.exe but does not open the directory (dsh-v0.1.7-rc.2)
- [#7848](https://github.com/deepseek-ai/deepseek-harness/discussions/7848) [Bug] dsh-client-ui-workspace: 持久化视图状态缺一个字段即导致 sidebar.workspaces 插槽渲染崩溃（会话列表空白且零报错）
- [#7699](https://github.com/deepseek-ai/deepseek-harness/discussions/7699) [Bug] [DSH 0.1.7-alpha.2] 默认开启的会话日志遥测字段把请求体撑到 205.87 MB，并永久锁死会话（可复现，附实测数据）
- [#7857](https://github.com/deepseek-ai/deepseek-harness/discussions/7857) [Bug] attach 模式下浏览器工具对交互会话永久不可用：独占槽被桌面端启动时的「会话恢复/播种」激活占住且不释放（0.1.7-rc.2，附源码行号与现场证据）
- [#7856](https://github.com/deepseek-ai/deepseek-harness/discussions/7856) [Bug] Desktop RC2: document reload after Client HMR boots with stale plugin graph URL (404)
- [#6437](https://github.com/deepseek-ai/deepseek-harness/discussions/6437) [Bug] dsh-client-resources 的 protocolOf 依赖 new URL().hostname，Edge 129 下文件预览显示“文件资源服务不可用”
- [#1944](https://github.com/deepseek-ai/deepseek-harness/discussions/1944) [Bug] Compaction request misses provider prefix cache entirely — summarizer doesn't inherit reasoningEffort / adds maxTokens
- [#7804](https://github.com/deepseek-ai/deepseek-harness/discussions/7804) [Bug] Windows：工作区位于非系统盘时 ACL 沙箱必然初始化失败（Win32 5 / grantWrite）/ ACL sandbox fails on non-system drives: the default ACL grants the caller no WRITE_OWNER
- [#7842](https://github.com/deepseek-ai/deepseek-harness/discussions/7842) [Bug] Windows: file-manager "Show file location" / default-app open silently fails (windowsHide hides Explorer's delegated window)
- [#7839](https://github.com/deepseek-ai/deepseek-harness/discussions/7839) [BUG]pnpm clean 在 dsh-v0.1.7-rc.2 上必然失败（tsconfig 的 outDir 与 clean.ts 规则冲突）
- [#7834](https://github.com/deepseek-ai/deepseek-harness/discussions/7834) [Bug] 删除附件对象后会话每个请求都失败，并被误报为 "DeepSeek Messages transport failed"（附修复补丁）
- [#7833](https://github.com/deepseek-ai/deepseek-harness/discussions/7833) [BUG] [0.1.7-rc.1] strict-codec format change makes an out-of-tree Typert Remote plugin fail activation and blocks the whole Web UI
- [#7761](https://github.com/deepseek-ai/deepseek-harness/discussions/7761) [bug] bash tool stop working when /tmp full
- [#7785](https://github.com/deepseek-ai/deepseek-harness/discussions/7785) BUG: generated desktop dev bundle cannot cold start — launcher omits DSH_DESKTOP_PRIMARY_RUNTIME_DIR
- [#7828](https://github.com/deepseek-ai/deepseek-harness/discussions/7828) [Bug][Desktop][Windows] App stays hidden after updating to 0.1.7-rc.2 instead of reopening
- [#696](https://github.com/deepseek-ai/deepseek-harness/discussions/696) [BUG] RTL mixed-text rendering is broken when a sentence starts with an English word
- [#7797](https://github.com/deepseek-ai/deepseek-harness/discussions/7797) [Bug] Windows 桌面端高分屏缩放导致 Office 预览图截断/放大（LibreOfficeKit 1.5× DPI 缩放冲突）（v0.1.7-rc.2）
- [#7625](https://github.com/deepseek-ai/deepseek-harness/discussions/7625) [Bug][DSH Desktop 2.0.13] 已保存的 DeepSeek API 密钥无法删除，导致网络搜索优先走 DeepSeek 并报错
- [#7624](https://github.com/deepseek-ai/deepseek-harness/discussions/7624) [Bug][DSH Desktop 2.0.13] 调整窗口尺寸后已打开的悬浮窗/弹窗不重新居中（macOS）

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-09-26T02:58:15.978Z_