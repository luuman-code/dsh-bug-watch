# DSH Bug Watch — 2026-10-03

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 33

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
_（无）_

## 📝 仅报告 — 无人互动
- [#8715](https://github.com/deepseek-ai/deepseek-harness/discussions/8715) [Bug] Windows 上单个损坏的 shell 关联 handler 会让原生打开能力全部消失（应用列表 500）
- [#8674](https://github.com/deepseek-ai/deepseek-harness/discussions/8674) [Bug] dsh-app-boot 的 CJS 解析钩子被 require('process/') 打崩：resolve.paths() 返回 null → 插件 failed to import
- [#8617](https://github.com/deepseek-ai/deepseek-harness/discussions/8617) [Bug] DSH 0.2.0-rc.2 crashes (SIGABRT, exit 134) during session format v3→v4 migration — and older pinned versions can no longer read the store
- [#8711](https://github.com/deepseek-ai/deepseek-harness/discussions/8711) [Bug][Windows][Desktop 0.2.0-rc.2] 点击系统通知无法聚焦/拉回主窗口
- [#8710](https://github.com/deepseek-ai/deepseek-harness/discussions/8710) [Bug] engines 和代码对不上：Node 24.0/24.1 没有 import.meta.main，dsh 启动后无输出直接退出
- [#8708](https://github.com/deepseek-ai/deepseek-harness/discussions/8708) [Bug] Subagent model selection unreachable for UI-created and existing sessions (freshSession vs web constructor seed)
- [#8706](https://github.com/deepseek-ai/deepseek-harness/discussions/8706) [Bug] Windows: 桌面端安装在非系统盘（D:）时 GPU/渲染进程全部崩溃，界面无法加载
- [#6061](https://github.com/deepseek-ai/deepseek-harness/discussions/6061) [Bug] 桌面端（dev:desktop / 打包版）在 macOS 上 ⌘V 粘贴失效，导致无法输入 API Key 配置模型
- [#8690](https://github.com/deepseek-ai/deepseek-harness/discussions/8690) [bug][Desktop UI]一些交互UI的重叠问题
- [#8688](https://github.com/deepseek-ai/deepseek-harness/discussions/8688) Bug: `connection.rpc.handle()` from a plugin fiber throws `cannot get property "webServer" without inject` — `rpc-host.ts:192` reads `owner.webServer` against Connection's own injections
- [#8509](https://github.com/deepseek-ai/deepseek-harness/discussions/8509) [Bug] DSML-like tool markup returned as assistant text instead of native tool calls interrupts long-running tasks (0.1.7-rc.2)
- [#8675](https://github.com/deepseek-ai/deepseek-harness/discussions/8675) [Bug][Windows] 受限沙箱下 PTY shell 工具必现失败：ConPTY 子进程标准句柄为 NULL，而沙箱 runner 要求三者全部有效
- [#8653](https://github.com/deepseek-ai/deepseek-harness/discussions/8653) Bug: 模型输出空 id 的 tool-call 会导致会话永久卡死（format v4 tool/result ... requires toolCallId matching its tool source）
- [#8673](https://github.com/deepseek-ai/deepseek-harness/discussions/8673) [Bug][Desktop 0.2.0-rc.2][Windows] dsh-app:// 转发双向剥掉插件 cookie，依赖自身 cookie 的插件必然 403
- [#8666](https://github.com/deepseek-ai/deepseek-harness/discussions/8666) [Bug] fs layer does not expand "~" in file_path; FS_NOT_FOUND echoes a bogus cwd-joined path
- [#8665](https://github.com/deepseek-ai/deepseek-harness/discussions/8665) [Bug Report] Windows ACL 沙箱：工作区被打上「可继承的 Low 完整性标签」→ 目录内所有 .lnk 变白图标；非预期目录亦会被静默改写 ACL
- [#8662](https://github.com/deepseek-ai/deepseek-harness/discussions/8662) [Bug][Desktop 0.2.0-rc.2][性能] 启动包约 10MB，其中 5.16MB 是设置模块内联的 8 张全分辨率引导插图，低带宽下阻塞启动 10 秒以上
- [#8660](https://github.com/deepseek-ai/deepseek-harness/discussions/8660) Bug: web-fetch-http cross-origin redirect notice carries only the origin (contradicts its own retry guidance)
- [#7894](https://github.com/deepseek-ai/deepseek-harness/discussions/7894) [Bug][0.1.7-rc.2] goal-round-driver + broken compaction caused runaway 642M token explosion in a single session (Continuing goal infinite loop)
- [#8656](https://github.com/deepseek-ai/deepseek-harness/discussions/8656) [Bug][配置] Config schema 里用 .default(...) 会让合并后的 row 配置变成未解析的 schema 对象(dsh 0.2.0-rc.2)
- [#8654](https://github.com/deepseek-ai/deepseek-harness/discussions/8654) [Bug][Windows] 中文输入法替换选中文字时误删后文（含已验证修复）
- [#8652](https://github.com/deepseek-ai/deepseek-harness/discussions/8652) [Bug][Windows][Desktop 0.2.0-rc.2] 从会话头部打开 VS Code 恒失败（launch-failed）：宿主继承的 ELECTRON_RUN_AS_NODE 被透传给外部 Electron 应用
- [#8610](https://github.com/deepseek-ai/deepseek-harness/discussions/8610) [Bug] 桌面端侧栏：冷会话（未打开过）的标题一律显示"未命名"，投影缓存里的 title 行不被采用（0.2.0-rc.2）
- [#6311](https://github.com/deepseek-ai/deepseek-harness/discussions/6311) [BUG] v2→v3 会话迁移对插件自定义的 message source kind 直接拒载，导致旧会话永久无法加载
- [#8640](https://github.com/deepseek-ai/deepseek-harness/discussions/8640) [Bug] Session rows need two taps on iOS Safari: hover rule changes `display` (0.2.0-rc.2)
- [#8639](https://github.com/deepseek-ai/deepseek-harness/discussions/8639) [Bug] dsh web RSS grows with session-store volume: boot-time session-history loading is off-heap and gets OOM-killed at a 1 GiB cgroup limit (0.1.7-rc.2)
- [#8569](https://github.com/deepseek-ai/deepseek-harness/discussions/8569) [Bug] fs-search fails the whole tool call when ripgrep exits 2 with partial matches
- [#7414](https://github.com/deepseek-ai/deepseek-harness/discussions/7414) Bug: dsh web V8 heap OOM after long uptime — live sessions are never unloaded
- [#8632](https://github.com/deepseek-ai/deepseek-harness/discussions/8632) Bug: a tool call aborted by the user answers `Error: [object Object]` — `throwIfAborted()` throws the `AgentCancelCause` object and `errorMessage` stringifies it
- [#8631](https://github.com/deepseek-ai/deepseek-harness/discussions/8631) Bug: `persistence.list()` walks every session directory one libuv round-trip at a time (~2.3k event-loop turns per call), and `session_trace` has no `timeoutMs`
- [#8629](https://github.com/deepseek-ai/deepseek-harness/discussions/8629) [Bug] 0.2.0-rc.2：XLSX 缺少默认行高时原生预览空白（defaultRowHeight = NaN）
- [#8627](https://github.com/deepseek-ai/deepseek-harness/discussions/8627) [BUG] dsh 的 ssrf 防护导致 tun 模式下无法使用 web fetch
- [#8553](https://github.com/deepseek-ai/deepseek-harness/discussions/8553) [Bug] deepseek-flash：content 为空，最终答复出现在 reasoning_content

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-10-03T03:17:48.653Z_