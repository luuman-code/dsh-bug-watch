# DSH Bug Watch — 2026-10-01

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 65

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
_（无）_

## 📝 仅报告 — 无人互动
- [#7650](https://github.com/deepseek-ai/deepseek-harness/discussions/7650) [BUG] Reaching context window 100% and not triggering auto-compaction
- [#8521](https://github.com/deepseek-ai/deepseek-harness/discussions/8521) [Bug] Clean script cannot run due to the setting /types
- [#8520](https://github.com/deepseek-ai/deepseek-harness/discussions/8520) [Bug] Windows 桌面版 ACL 沙箱完全不可用：无控制台宿主导致受限子进程以 0xC0000142 死亡
- [#8518](https://github.com/deepseek-ai/deepseek-harness/discussions/8518) [Bug][Windows sandbox] 0.2.0-rc.2 跨目录删除隔离疑似异常（请求确认）
- [#8514](https://github.com/deepseek-ai/deepseek-harness/discussions/8514) [Bug] 长会话在 opencode-go/deepseek-v4.1-flash 上被空 body 的 400 拒绝后卡死，且未触发自动压缩
- [#8513](https://github.com/deepseek-ai/deepseek-harness/discussions/8513) [Bug][Windows x64] 0.2.0-rc.2 工作区沙箱 ACL 授权失败（SetNamedSecurityInfoW Win32 5）导致后台宿主进程崩溃，应用卡死只能重启
- [#5677](https://github.com/deepseek-ai/deepseek-harness/discussions/5677) [Bug] Web UI history never loads on Firefox-engine browsers (infinite "Loading history…") — Firefox-only failure in lossless-JSON validation
- [#8496](https://github.com/deepseek-ai/deepseek-harness/discussions/8496) [bug] dsh-mcp-client 写死 versionNegotiation: auto：对现代探测回 501 的 streamable-http 服务端永久连接失败（Sketch MCP 实测，附根因与修复方向）
- [#8509](https://github.com/deepseek-ai/deepseek-harness/discussions/8509) [Bug] DSML-like tool markup returned as assistant text instead of native tool calls interrupts long-running tasks (0.1.7-rc.2)
- [#8508](https://github.com/deepseek-ai/deepseek-harness/discussions/8508) [Bug] Windows `workspace-write`: the Low label is applied to the workspace root only, so pre-existing trees stay Medium and confined tools fail
- [#6166](https://github.com/deepseek-ai/deepseek-harness/discussions/6166) [Bug] Switching a blank session to an already-loaded preset drops subagent tools
- [#6751](https://github.com/deepseek-ai/deepseek-harness/discussions/6751) [Bug] 空白新会话切换 Agent Preset 后，新 preset 的 modelSelectionSettings 型 delegation 工具完全未安装（subagent / list_subagent_models 缺失）
- [#8503](https://github.com/deepseek-ai/deepseek-harness/discussions/8503) [Bug][Windows 10 19045] desktop launch path: workspace-write confined children die with 0xC0000142
- [#5926](https://github.com/deepseek-ai/deepseek-harness/discussions/5926) [Bug] connection fails to start when a third-party plugin registers an HTTP channel: cannot get property 'webServer' without inject
- [#7946](https://github.com/deepseek-ai/deepseek-harness/discussions/7946) [Bug] 会话搜索必然失败：稳定性观测在存在活跃写入时不可能达成
- [#3277](https://github.com/deepseek-ai/deepseek-harness/discussions/3277) [bug] 会话 workspace 目录被移动后，bash/grep/glob 全部持续 spawn ENOENT，且报错不指向真实原因
- [#8500](https://github.com/deepseek-ai/deepseek-harness/discussions/8500) Bug: one retired plugin source wrapper makes a whole v4 session unreadable (dsh 0.2.0-rc.2)
- [#8498](https://github.com/deepseek-ai/deepseek-harness/discussions/8498) [Bug] 压缩永久空转导致 CONTEXT_WINDOW_EXCEEDED 误判：单条超大用户消息 + contextWindow 默认值 262144，会话无法自行恢复
- [#8497](https://github.com/deepseek-ai/deepseek-harness/discussions/8497) [Bug][Windows 10] workspace-write 沙箱下所有子进程 0xC0000142（连 cmd.exe 都起不来）— Default DACL 使用 capability SID 所致
- [#8485](https://github.com/deepseek-ai/deepseek-harness/discussions/8485) [BUG] (maybe) DSH Windows ACL sandbox: two defects make `workspace-write` unusable
- [#8495](https://github.com/deepseek-ai/deepseek-harness/discussions/8495) [Bug] 桌面端 0.2.0-rc.2：长会话中 composer 底带（Todo dock + 输入框 + 统计行）脱离钉底、悬浮在对话中间，切换会话后自愈
- [#8445](https://github.com/deepseek-ai/deepseek-harness/discussions/8445) [Bug] @deepseek-ai/dsh-fs-local throws "Cannot mix BigInt and other types" when statting .asar paths under Electron ASAR view (0.2.0-rc.2)
- [#5998](https://github.com/deepseek-ai/deepseek-harness/discussions/5998) [Bug] Minimal preset: persistent pwsh input corrupted at console-width wrap boundaries (`Write-Output` → `rite-Output`)
- [#8491](https://github.com/deepseek-ai/deepseek-harness/discussions/8491) [Bug] Web GUI: ordinary Context injection rows are no longer rendered in Chat since v0.2.0-rc.1 (regression from v0.1.x)
- [#8476](https://github.com/deepseek-ai/deepseek-harness/discussions/8476) [Bug] Repeated HTTP 400 path-expansion error prevents subsequent turns in an existing conversation
- [#6524](https://github.com/deepseek-ai/deepseek-harness/discussions/6524) [Bug] todo 任务栏在回合中断后永久消失（todos 投影被 turn/start 无条件清空）—— 证据 + 已验证的最小修复
- [#8487](https://github.com/deepseek-ai/deepseek-harness/discussions/8487) [bug] 插件列表「禁用→启用」热切换时，带 prefix route 的插件激活失败：webserver: duplicate prefix route（0.1.7-rc.2 与 0.2.0-rc.2 均在）
- [#8472](https://github.com/deepseek-ai/deepseek-harness/discussions/8472) [bug][v0.2.0-rc2][跨版本未修复]权限为工作区内修改时沙箱会给工作区打上一个可继承的 Low 完整性标签导致资源管理器把目录下的文件全判成"来自其他计算机"
- [#8242](https://github.com/deepseek-ai/deepseek-harness/discussions/8242) [BUG]deepseek harness本地启动命令失效
- [#8483](https://github.com/deepseek-ai/deepseek-harness/discussions/8483) [Bug][Windows][桌面端] 「更多打开方式」启动 VS Code 等 Electron 应用失败：ELECTRON_RUN_AS_NODE 泄漏使目标以 Node 模式启动并立即退出
- [#8480](https://github.com/deepseek-ai/deepseek-harness/discussions/8480) [Bug] `session/create` with `cwd` (or without `workspaceId`) silently creates a session outside any workspace — Ungrouped with `cwd=C:\Windows\System32`
- [#8471](https://github.com/deepseek-ai/deepseek-harness/discussions/8471) [Bug][Windows] 受限沙箱下子进程 0xC0000142：父进程无控制台可继承，且可由 runner 自行分配控制台修复（已附补丁与实测）
- [#423](https://github.com/deepseek-ai/deepseek-harness/discussions/423) [Bug Report] Windows 工作区：连接后外部创建/移入的子目录永远无法写入（capability ACE 永不补授）
- [#8461](https://github.com/deepseek-ai/deepseek-harness/discussions/8461) [Bug] 启动即崩溃（0.2.0-rc.2 nightly）: Desktop renderer exited: crashed
- [#3411](https://github.com/deepseek-ai/deepseek-harness/discussions/3411) [Bug] Sandbox escalation fields advertised even when the composition default cannot escalate (danger-full-access) — models get spurious errors
- [#8469](https://github.com/deepseek-ai/deepseek-harness/discussions/8469) [Bug] fs-observation guidance is sent twice every turn: section "tool:edit" duplicates what section "tool:write" already says
- [#8468](https://github.com/deepseek-ai/deepseek-harness/discussions/8468) [Bug] 子代理模型授权快照可能"出生即过期"：第三方插件重命名 provider id 后缺少诊断与迁移路径
- [#8466](https://github.com/deepseek-ai/deepseek-harness/discussions/8466) [Bug] 工具输出中的孤立代理项会让会话永久 400，且用户看不到原因、也没有恢复路径
- [#8465](https://github.com/deepseek-ai/deepseek-harness/discussions/8465) [Bug]内容风控拒答会让会话永久不可用，且 DSH 没有任何恢复途径
- [#8464](https://github.com/deepseek-ai/deepseek-harness/discussions/8464) [Bug] 依赖的生命周期脚本无超时挂死时，插件安装界面永久假死，「取消安装」也无法脱身
- [#8459](https://github.com/deepseek-ai/deepseek-harness/discussions/8459) [Bug] Desktop 0.2.0-rc.2 (Windows x64): expanding the "ungrouped" sessions section crashes the renderer
- [#8452](https://github.com/deepseek-ai/deepseek-harness/discussions/8452) [Bug] 停用→启用一行带 Client 模块的插件后，浏览器半侧不会重新挂载（loaded without registering），只有重启 App 才能恢复
- [#8448](https://github.com/deepseek-ai/deepseek-harness/discussions/8448) [Bug][Windows][Desktop 0.2.0-rc.2] 杀毒软件 TLS 拦截导致宿主进程全部 HTTPS 请求失败，且界面只报通用错误
- [#8444](https://github.com/deepseek-ai/deepseek-harness/discussions/8444) [Bug] subagent model selection (list_subagent_models, provider/model) silently missing in resumed/imported sessions and their children
- [#8443](https://github.com/deepseek-ai/deepseek-harness/discussions/8443) [Bug][Web UI] Markdown image renders inline, so following text/links sit beside it (0.2.0-rc.2)
- [#8440](https://github.com/deepseek-ai/deepseek-harness/discussions/8440) [Bug] ACP `session/list` 不返回 `SessionInfo.title` / `updatedAt`,Paseo客户端把所有会话显示成"未命名"
- [#8426](https://github.com/deepseek-ai/deepseek-harness/discussions/8426) [BUG] ACL 沙箱只给工作区根授权：老目录里写不进去，且失败以裸 Win32Error 抛出（连 pwd 都跑不了）
- [#8409](https://github.com/deepseek-ai/deepseek-harness/discussions/8409) [Bug][Windows] Windows ACL 沙箱（workspace-write）三个授权缺陷：受保护 DACL 子目录永不获授权 / desktop 根授权缓存不复核不自愈 / 标准用户+非系统盘 grantWrite 失败（Win32 5）
- [#7534](https://github.com/deepseek-ai/deepseek-harness/discussions/7534) [Bug] 0.1.7-alpha.1 and alpha.2: a failed startup still consumes settings.yaml - legacy sections import into a disposed context and are lost permanently
- [#6788](https://github.com/deepseek-ai/deepseek-harness/discussions/6788) [Bug] v0.1.6-alpha.1: computer-use packages missing dsh.bundle break profile boot
- [#8352](https://github.com/deepseek-ai/deepseek-harness/discussions/8352) [BUG] 工具输出含未配对 UTF-16 代理项会让整个会话永久 HTTP 400（错误信息无法诊断）
- [#7709](https://github.com/deepseek-ai/deepseek-harness/discussions/7709) [Bug] Windows: the workspace Low integrity label also lowers the user's own launches from that tree, silently degrading the toolchain inside it
- [#8428](https://github.com/deepseek-ai/deepseek-harness/discussions/8428) [Bug][Windows][桌面版] 在 VS Code / Cursor 中打开必现失败：宿主运行模式变量泄漏给子进程
- [#8420](https://github.com/deepseek-ai/deepseek-harness/discussions/8420) [Bug] 桌面版：沙箱模式下所有命令派生失败（exit code 3221225794 / 0xC0000142），被迫开全盘权限才能工作
- [#8255](https://github.com/deepseek-ai/deepseek-harness/discussions/8255) [BUG] Windows 桌面端无法启动：GPU 进程初始化失败直接终止应用（Intel Arc + 多虚拟显示器环境）
- [#8387](https://github.com/deepseek-ai/deepseek-harness/discussions/8387) [Bug][Windows] 工作区在用户配置目录之外时沙箱预授权 fail-closed（SetNamedSecurityInfoW Win32 5）
- [#8410](https://github.com/deepseek-ai/deepseek-harness/discussions/8410) Bug: `[::1]` in child `NO_PROXY` breaks Python/httpx before any request
- [#8354](https://github.com/deepseek-ai/deepseek-harness/discussions/8354) [Bug][Windows][Desktop 0.2.0-rc.2] 全新安装在 96% 误报“DeepSeek Harness 无法关闭”
- [#8392](https://github.com/deepseek-ai/deepseek-harness/discussions/8392) [Bug] Sidebar session list stays empty until a reconnect: a superseded `session/list` pull wedges the client's single-flight guard (0.2.0-rc.1)
- [#7032](https://github.com/deepseek-ai/deepseek-harness/discussions/7032) [BUG]: Host-backed settings (Settings > Models/General) are impossible behind any reverse proxy — isLoopback gate tests the hostname string only, with no deployment override
- [#8386](https://github.com/deepseek-ai/deepseek-harness/discussions/8386) [Bug] 近满窗会话死锁（下）：手动 /compact 的总结请求复用同一路由、继承塌陷的输出预算而必然失败（与 dsh-commandcode-provider#73 联动）
- [#4233](https://github.com/deepseek-ai/deepseek-harness/discussions/4233) [Bug] Web UI chat input: Chinese IME composition is frequently interrupted — text jumps and commits wrong characters when typing fast
- [#5630](https://github.com/deepseek-ai/deepseek-harness/discussions/5630) Bug: Chinese IME (Microsoft Pinyin) input corrupted in the Web GUI chat composer
- [#8367](https://github.com/deepseek-ai/deepseek-harness/discussions/8367) [Bug] 桌面端「查询用量」只统计 DSH 专属 API Key，自带 API Key 的账号用量恒显示为 0
- [#8191](https://github.com/deepseek-ai/deepseek-harness/discussions/8191) [BUG] workspace/changes事件内无法正常获取到summary

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-10-01T03:33:45.085Z_