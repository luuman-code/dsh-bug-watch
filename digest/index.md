# DSH Bug Watch — 2026-10-22

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 52

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
- [#10513](https://github.com/deepseek-ai/deepseek-harness/discussions/10513) **[Bug] workspace.json 的 sessionIds 被静默截断，重启后历史会话从侧边栏消失**<br/>  分类：Q&A · 标签：— · 最近更新：2026-10-21

## 📝 仅报告 — 无人互动
- [#10599](https://github.com/deepseek-ai/deepseek-harness/discussions/10599) [Bug] PreToolUse is not dispatched for tool calls carrying `sandbox_permissions`
- [#10605](https://github.com/deepseek-ai/deepseek-harness/discussions/10605) [Bug] Kylin V10 / Chromium 128: three client-side failures (dsh-resource protocol, PDF worker features, session-log download)
- [#10604](https://github.com/deepseek-ai/deepseek-harness/discussions/10604) [Bug] --dump-config shows telemetry enabled when DSH_TELEMETRY_DISABLED is set (0.2.1-rc.2)
- [#10603](https://github.com/deepseek-ai/deepseek-harness/discussions/10603) [Bug] 桌面端内嵌 webview 里「消息复制」静默失败：宿主租约 session 拒绝 clipboard 权限 + writeClipboard 缺少 execCommand 兜底
- [#10600](https://github.com/deepseek-ai/deepseek-harness/discussions/10600) [Bug] 0.2.1-rc.2: `--help` constructs services after teardown ("cannot create effect on inactive context", 22 errors, hidden without a console logger)
- [#10563](https://github.com/deepseek-ai/deepseek-harness/discussions/10563) [Bug] tool_addition blocks can only be in system messages — 会话中途技能/工具目录变化后，该会话在 Anthropic 官方端永久 400 INVALID_REQUEST
- [#10596](https://github.com/deepseek-ai/deepseek-harness/discussions/10596) [Bug] Settings closes when archiving the current chat activates automatic onboarding (0.2.1-rc.2)
- [#10569](https://github.com/deepseek-ai/deepseek-harness/discussions/10569) [Bug][Safety] DSH 0.2.1-rc.2: cleanup command expanded to C:/ root and deleted user files
- [#10574](https://github.com/deepseek-ai/deepseek-harness/discussions/10574) [Bug] showing wrong error when API is inaccessible.
- [#10567](https://github.com/deepseek-ai/deepseek-harness/discussions/10567) [bug] Windows 上 job_kill 只终止顶层 shell，子进程变孤儿继续运行
- [#10565](https://github.com/deepseek-ai/deepseek-harness/discussions/10565) [Bug] lsp-stdio 认不出 WindowsApps 的 pwsh（App Execution Alias），一条配置让整个 LSP 挂掉
- [#10560](https://github.com/deepseek-ai/deepseek-harness/discussions/10560) [Bug] Plugin shadowing and the 431 cookie overflow chain: the recovery dialog is a restart loop, so one evening of plugin debugging burns the ~70-launch cookie budget
- [#10558](https://github.com/deepseek-ai/deepseek-harness/discussions/10558) [Bug] 输入框打 / 打开命令菜单时主线程出现一次约 83 ms 长任务
- [#10559](https://github.com/deepseek-ai/deepseek-harness/discussions/10559) [Bug] 0.2.1-rc.2 / Windows 11: host 以 0xFFFF7003 (4294930435) 静默退出，三次冷启动 3/3 必现，无堆栈、无 hostDiagnostic、无 WER 记录
- [#9882](https://github.com/deepseek-ai/deepseek-harness/discussions/9882) [Bug] A restored session that still carries the durable "auto" preset makes permission-presets throw in its constructor, leaving auto-review pending — "2 entries did not activate"
- [#10489](https://github.com/deepseek-ai/deepseek-harness/discussions/10489) [Bug] agent.cancel() 传入 union 外的 kind 会让 turn/end 落盘 reason:null，导致会话永久白屏
- [#10554](https://github.com/deepseek-ai/deepseek-harness/discussions/10554) [Bug] macOS 桌面端把 4 个文件写进已签名的 app bundle，导致代码签名封条失效（0.2.1-rc.1 mac-x64）
- [#10552](https://github.com/deepseek-ai/deepseek-harness/discussions/10552) [bug]目前dsh的webui的设置在手机端竖屏无法正常使用，需要切换到横屏
- [#10551](https://github.com/deepseek-ai/deepseek-harness/discussions/10551) [Bug] `grep` reports "produced more raw output than the subprocess" — retained-output limit surfaces as a separate failure
- [#10503](https://github.com/deepseek-ai/deepseek-harness/discussions/10503) [Bug] `grep`/`glob` tools turn a partially-successful search into a whole failure on unreadable directories
- [#10467](https://github.com/deepseek-ai/deepseek-harness/discussions/10467) [Bug] Workspace loses session accounting after a host crash/relaunch (sessions fall into "Ungrouped", no way to re-attach)
- [#6964](https://github.com/deepseek-ai/deepseek-harness/discussions/6964) [Bug] claimed 的输入在 prepareRequest 抛错时会永久丢失：本机 154 份存档里 14 例
- [#10549](https://github.com/deepseek-ai/deepseek-harness/discussions/10549) [Bug] additionalProperties: false 只在声明里生效，派发时不校验
- [#9289](https://github.com/deepseek-ai/deepseek-harness/discussions/9289) [Bug][高影响] 文档收尾期间 Stop 无法中断，消息注入与 /goal 无法启动下一轮（0.2.0-rc.2，附复现）
- [#10548](https://github.com/deepseek-ai/deepseek-harness/discussions/10548) [Bug] dsh-mcp-client: server instructions over 32 KB never connect, and the real error is only in ctx.logger
- [#10538](https://github.com/deepseek-ai/deepseek-harness/discussions/10538) [Bug] `dsh-plugin-manager`: one hung operation wedges the profile for every later install/remove, and the market reports it only as a spinner
- [#8559](https://github.com/deepseek-ai/deepseek-harness/discussions/8559) [Bug] 同一工作目录下多个 Session 的「已更改文件」卡片互相认领对方的改动（附修复分支）
- [#10539](https://github.com/deepseek-ai/deepseek-harness/discussions/10539) [Bug] DeepSeek adapter emits inline `role: "system"` `tool_addition` blocks → HTTP 400 that permanently breaks the session
- [#10532](https://github.com/deepseek-ai/deepseek-harness/discussions/10532) [Bug] Settings write fails ("Failed to save settings") due to case-sensitivity mismatch in Windows installation path
- [#10505](https://github.com/deepseek-ai/deepseek-harness/discussions/10505) [bug]所有依赖子进程的工具均不可用：Windows Job runner 以退出码 0 静默退出（runner 子进程未以 Node 模式启动）
- [#10530](https://github.com/deepseek-ai/deepseek-harness/discussions/10530) [Bug] Windows workspace-write 沙箱下任何子进程都启动即失败（exit 0xC0000142 / STATUS_DLL_INIT_FAILED）
- [#9924](https://github.com/deepseek-ai/deepseek-harness/discussions/9924) [Bug] Desktop "Web authentication failed": stale dsh-auth-* cookies overflow the Host header limit (431)
- [#3399](https://github.com/deepseek-ai/deepseek-harness/discussions/3399) Bug: DeepSeek "Input token exceed the limit" (400 quota_limit_reached) not classified as context overflow - auto recovery never triggers
- [#10522](https://github.com/deepseek-ai/deepseek-harness/discussions/10522) Bug: Anthropic Messages 协议下 DeepSeek 模型将 <invoke> 工具调用泄漏为纯文本 → agent 死循环（附修复）
- [#10129](https://github.com/deepseek-ai/deepseek-harness/discussions/10129) [Bug] 内置会话标题插件几乎从不更新：输出额度 64 个 token 被思考吃光，失败还完全静默（DSH 0.2.1-rc.2）
- [#10462](https://github.com/deepseek-ai/deepseek-harness/discussions/10462) [Bug] open-in-app returns 502 for all Electron-based editors (Cursor / VS Code / Windsurf) — scrubbedParentEnv() leaks ELECTRON_RUN_AS_NODE=1
- [#10352](https://github.com/deepseek-ai/deepseek-harness/discussions/10352) [Bug Report] Linux 微信截图无法粘贴进 composer：剪贴板对 image/* 请求一律返回 BMP 字节（Arch + WeChat Linux AppImage）
- [#7717](https://github.com/deepseek-ai/deepseek-harness/discussions/7717) [Bug] macOS Desktop：⌃⌘F 全屏快捷键未绑定，双击窗口顶部也无法缩放/填满屏幕（缺少基本窗口交互入口）
- [#10502](https://github.com/deepseek-ai/deepseek-harness/discussions/10502) [Bug] Windows Desktop：F11 无法切换全屏 —— 应用菜单只剩两个隐藏的 DevTools 项，没有全屏入口
- [#10203](https://github.com/deepseek-ai/deepseek-harness/discussions/10203) [Bug Report] patch-injected "skill-filesystem" row without "name" is silently disabled by preflight
- [#10498](https://github.com/deepseek-ai/deepseek-harness/discussions/10498) [Bug] Web GUI sidebar terminal: fish shell stalls ~10 s on every new terminal — fish startup DA1 query is never answered (0.2.1-rc.2, Linux)
- [#9293](https://github.com/deepseek-ai/deepseek-harness/discussions/9293) [Bug] scrubbedParentEnv strips GIT_CONFIG_KEY_n but keeps COUNT/VALUE, so every git call in a child fails
- [#10492](https://github.com/deepseek-ai/deepseek-harness/discussions/10492) [Bug] Desktop host killed by PartitionAlloc OOM (exit 0xE0000008): whole app exits, and the crash popup shows only the last 64 KB of stderr
- [#10491](https://github.com/deepseek-ai/deepseek-harness/discussions/10491) [Bug] Office 技能的 "absolute Node and CLI paths supplied below" 实际为空，导致 agent 误判「未安装 LibreOffice 引擎」
- [#10490](https://github.com/deepseek-ai/deepseek-harness/discussions/10490) [Bug] Desktop Host Connection Race Condition Fix (Code & Agent Note included)
- [#10475](https://github.com/deepseek-ai/deepseek-harness/discussions/10475) [Bug] Cordis loader fails to import a valid ESM plugin entry point (failed to import)
- [#810](https://github.com/deepseek-ai/deepseek-harness/discussions/810) [Bug] Windows: sandboxed pwsh always dies with 0xC0000142 under console-less host (desktop launch path)
- [#10482](https://github.com/deepseek-ai/deepseek-harness/discussions/10482) [Bug] 0.2.1-rc.2 Web GUI 输入框打字丢字（中英文均复现，与皮肤/插件无关）
- [#10440](https://github.com/deepseek-ai/deepseek-harness/discussions/10440) [bug] 离线补标题写坏会话日志的三个变体，以及一条被漏掉的校验：`session/title.messageSeqs` 引用了非用户消息
- [#10412](https://github.com/deepseek-ai/deepseek-harness/discussions/10412) [Bug] OpenCode 免费模型 ID 解析错误导致 403，且错误被误映射为“API Key 无效”
- [#1944](https://github.com/deepseek-ai/deepseek-harness/discussions/1944) [Bug] Compaction request misses provider prefix cache entirely — summarizer doesn't inherit reasoningEffort / adds maxTokens

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-10-22T02:52:47.429Z_