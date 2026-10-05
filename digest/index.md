# DSH Bug Watch — 2026-10-05

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 49

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
_（无）_

## 📝 仅报告 — 无人互动
- [#8844](https://github.com/deepseek-ai/deepseek-harness/discussions/8844) [Bug] pi-ai adapter discards the provider's stable error code, so upstream stream interruptions become non-retryable PI_AI_ERROR
- [#8849](https://github.com/deepseek-ai/deepseek-harness/discussions/8849) [Bug] 子代理结算时 projection registration 失效会让整个进程致命退出（fatal load failure / exit 1）
- [#8846](https://github.com/deepseek-ai/deepseek-harness/discussions/8846) [Bug] read 工具按 UTF-16 码元截断会切开代理对，产生非法 JSON 并使会话永久 400
- [#8877](https://github.com/deepseek-ai/deepseek-harness/discussions/8877) [Bug] Sandboxed pwsh commands fail with 0xC0000142 on Windows 10 LTSC 2019 (build 17763)
- [#8833](https://github.com/deepseek-ai/deepseek-harness/discussions/8833) [Bug] 绝对路径的 Markdown 文件链接打不开，预览器报「文件不存在」——相对路径正常
- [#8810](https://github.com/deepseek-ai/deepseek-harness/discussions/8810) [Bug] Lossless JSON snapshots change raw values into objects: exact-integer transport
- [#8858](https://github.com/deepseek-ai/deepseek-harness/discussions/8858) [Bug] Windows：受限权限档（read-only / workspace-write）下持久终端必然启动失败（ConPTY 命名管道被沙箱拒绝）
- [#8829](https://github.com/deepseek-ai/deepseek-harness/discussions/8829) [Bug] `usage` in the session journal understates input cache-miss vs vendor billing ~26×
- [#8839](https://github.com/deepseek-ai/deepseek-harness/discussions/8839) [Bug] "open in app" breaks due to one broken handler — `windowsFileApplications` fails on a stale COM handler (Windows)
- [#8857](https://github.com/deepseek-ai/deepseek-harness/discussions/8857) [BUG] Changing cordis.patch.yml while sessions are running kills every running session mid-turn
- [#8856](https://github.com/deepseek-ai/deepseek-harness/discussions/8856) [Bug] bash → osascript: a bare `log out` inside a `tell application "System Events"` block performs a real macOS logout, and nothing guards the call
- [#8816](https://github.com/deepseek-ai/deepseek-harness/discussions/8816) [Bug] Web preview runtime: a streaming `/api` response served on the tunnel's route lane never sees the page's abort — the bridge keeps draining until the host tree unloads
- [#8831](https://github.com/deepseek-ai/deepseek-harness/discussions/8831) [Bug] Opening a large Markdown file in sidebar preview appears to freeze the UI
- [#8794](https://github.com/deepseek-ai/deepseek-harness/discussions/8794) [Bug][0.2.0-rc.2] web_search: one failed query aborts the other queries and discards their (billed) results
- [#8800](https://github.com/deepseek-ai/deepseek-harness/discussions/8800) [Bug][Desktop 0.2.0-rc.2][Windows] dsh-app:// 协议未注册 ServiceWorker 特权：通知类插件「点击跳回对话」「审批快捷裁决」整体失效
- [#8855](https://github.com/deepseek-ai/deepseek-harness/discussions/8855) [Bug] Android/Termux：createIfAbsent 写入必然失败 —— link(2) 被 SELinux 拒绝，且 /storage 不支持 renameat2(RENAME_NOREPLACE)
- [#8827](https://github.com/deepseek-ai/deepseek-harness/discussions/8827) [Bug] workflow 工具调用永不返回，父 Agent 卡死在 step/start 后无事件
- [#8843](https://github.com/deepseek-ai/deepseek-harness/discussions/8843) [Bug] 桌面端 0.2.0-rc.2 在输入框打过字后按PageUp键整个界面包括左侧会话栏一起向左错位，刷新无法恢复，稳定触发
- [#8842](https://github.com/deepseek-ai/deepseek-harness/discussions/8842) [Bug] Every path inside `app.asar` fails: "Cannot mix BigInt and other types" (`fs-local` probe assumes BigInt stats)
- [#8850](https://github.com/deepseek-ai/deepseek-harness/discussions/8850) [BUG] 配置档 package.json 含 UTF-8 BOM 时，DSH 桌面端启动即崩溃（JSON.parse → DesktopHostFatalError，无自恢复路径）
- [#8835](https://github.com/deepseek-ai/deepseek-harness/discussions/8835) Bug report about: "Add Workspace" button is unresponsive on Linux desktop (native directory picker never surfaces) title: "[Bug] Add Workspace unresponsive on Linux desktop — native picker (zenity) dialog never surfaces" labels: bug
- [#8617](https://github.com/deepseek-ai/deepseek-harness/discussions/8617) [Bug] DSH 0.2.0-rc.2 crashes (SIGABRT, exit 134) during session format v3→v4 migration — and older pinned versions can no longer read the store
- [#7682](https://github.com/deepseek-ai/deepseek-harness/discussions/7682) [Bug] Web 插件管理页在读取失败后一直显示“正在读取插件…”
- [#8793](https://github.com/deepseek-ai/deepseek-harness/discussions/8793) [Bug][0.2.0-rc.2] read_image passes only the first frame of an animated GIF, with no notice
- [#7206](https://github.com/deepseek-ai/deepseek-harness/discussions/7206) Bug: settings UI unavailable on --trusted-host deployments (web behind tunnel/reverse proxy)
- [#8832](https://github.com/deepseek-ai/deepseek-harness/discussions/8832) [Bug] 一条 turn/end 的 reason 为 null 会让整个会话列表变空白（Agent Team 场景，附定位与修复建议）
- [#8792](https://github.com/deepseek-ai/deepseek-harness/discussions/8792) [Bug] 插件 id 冲突会让整个宿主崩溃：Cannot read properties of undefined (reading 'prepare')
- [#8823](https://github.com/deepseek-ai/deepseek-harness/discussions/8823) [Bug] 输入法上屏后粘贴多行文本只剩第一行：insertText 走 CONTROLLED_TEXT_INSERTION_COMMAND 被 Lexical 吞段（附复现脚本与零改动修复）
- [#8706](https://github.com/deepseek-ai/deepseek-harness/discussions/8706) [Bug] Windows: 桌面端安装在非系统盘（D:）时 GPU/渲染进程全部崩溃，界面无法加载
- [#8711](https://github.com/deepseek-ai/deepseek-harness/discussions/8711) [Bug][Windows][Desktop 0.2.0-rc.2] 点击系统通知无法聚焦/拉回主窗口
- [#8710](https://github.com/deepseek-ai/deepseek-harness/discussions/8710) [Bug] engines 和代码对不上：Node 24.0/24.1 没有 import.meta.main，dsh 启动后无输出直接退出
- [#8675](https://github.com/deepseek-ai/deepseek-harness/discussions/8675) [Bug][Windows] 极简模式终端必然启动失败：沙箱 runner 以 Electron 主程序充当伪控制台客户端
- [#810](https://github.com/deepseek-ai/deepseek-harness/discussions/810) [Bug] Windows: sandboxed pwsh always dies with 0xC0000142 under console-less host (desktop launch path)
- [#758](https://github.com/deepseek-ai/deepseek-harness/discussions/758) [Bug Report] Windows sandbox (workspace-write): permanent crash after Temp cleanup (P0) + 4 related issues
- [#8826](https://github.com/deepseek-ai/deepseek-harness/discussions/8826) [Bug] 求助：绑定邮箱后账号分裂，账号历史记录丢失
- [#4623](https://github.com/deepseek-ai/deepseek-harness/discussions/4623) [Bug] Forked sessions never auto-update their title — fork dedup rename pins the session
- [#6114](https://github.com/deepseek-ai/deepseek-harness/discussions/6114) [Bug] DeepSeek-V4.1-Flash display name misses decimal point
- [#8665](https://github.com/deepseek-ai/deepseek-harness/discussions/8665) [Bug Report] Windows ACL 沙箱：工作区被打上「可继承的 Low 完整性标签」→ 目录内所有 .lnk 变白图标；非预期目录亦会被静默改写 ACL
- [#8497](https://github.com/deepseek-ai/deepseek-harness/discussions/8497) [Bug][Windows 10] workspace-write 沙箱下所有子进程 0xC0000142（连 cmd.exe 都起不来）— Default DACL 使用 capability SID 所致
- [#8812](https://github.com/deepseek-ai/deepseek-harness/discussions/8812) [Bug] 0.2.0-rc.2: tool-result pruner appends replacement tool/result outside any open turn, so the reader rejects a session its own writer produced
- [#4055](https://github.com/deepseek-ai/deepseek-harness/discussions/4055) [Bug] client-hmr's SSE channel burns one HTTP connection per frontend, capping how many DSH frontends can coexist on one origin
- [#8799](https://github.com/deepseek-ai/deepseek-harness/discussions/8799) [Bug] 已完成的 Turn 的 AI 回复文本偶发消失，刷新页面后重新出现
- [#8811](https://github.com/deepseek-ai/deepseek-harness/discussions/8811) [Bug]从几个版本前就有个job_output无法获取输出且时间过长
- [#8495](https://github.com/deepseek-ai/deepseek-harness/discussions/8495) [Bug] 桌面端 0.2.0-rc.2：长会话中 composer 底带（Todo dock + 输入框 + 统计行）脱离钉底、悬浮在对话中间，切换会话后自愈
- [#8809](https://github.com/deepseek-ai/deepseek-harness/discussions/8809) [Bug] 桌面端 0.2.0-rc.2（macOS）：composer 底带（Todo dock + 输入框 + 统计行）脱离钉底、悬浮在对话中间
- [#8806](https://github.com/deepseek-ai/deepseek-harness/discussions/8806) [Bug report] Windows generated-image preview fails when Markdown escapes the attachment path
- [#8733](https://github.com/deepseek-ai/deepseek-harness/discussions/8733) Bug: repeated automatic compaction with little or no progress blocks chat execution
- [#7123](https://github.com/deepseek-ai/deepseek-harness/discussions/7123) [bug]「只有 reasoning、无可见正文也无工具调用」的响应被判为成功 ⇒ 静默空回复
- [#1485](https://github.com/deepseek-ai/deepseek-harness/discussions/1485) [Bug]: Concurrent dsh instances sharing one DSH_HOME wipe each other’s workspace session membership

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-10-05T03:29:14.410Z_