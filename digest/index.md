# DSH Bug Watch — 2026-10-07

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 50

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
_（无）_

## 📝 仅报告 — 无人互动
- [#9055](https://github.com/deepseek-ai/deepseek-harness/discussions/9055) Bug report: importing a session store from another host produces silently unusable sessions
- [#9054](https://github.com/deepseek-ai/deepseek-harness/discussions/9054) [Bug] Settings → Models: unsaved provider/API key draft is lost when switching settings sections
- [#8924](https://github.com/deepseek-ai/deepseek-harness/discussions/8924) [Bug] All tool calls die with `Cannot read properties of undefined (reading 'prepare')` when web profile has its own dsh-tools copy (dual-package Symbol hazard)
- [#8711](https://github.com/deepseek-ai/deepseek-harness/discussions/8711) [Bug][Windows][Desktop 0.2.0-rc.2] 点击系统通知无法聚焦/拉回主窗口
- [#9053](https://github.com/deepseek-ai/deepseek-harness/discussions/9053) [Bug] Choosing VS Code for a delivered file opens a Windows-side window instead of reusing the existing Remote-WSL window
- [#9017](https://github.com/deepseek-ai/deepseek-harness/discussions/9017) [Bug] 第三方 Electron 宿主（Electron-as-node）下 dsh 全量启动失败：require-builtin 指纹门补丁精确 + app-boot 无 --expose-internals 回退
- [#9022](https://github.com/deepseek-ai/deepseek-harness/discussions/9022) [Bug] pi-ai 路由声明的 contextWindow 未进入 resolveModelInfo，导致自动压缩静默失效、超限被误报为「额度已用尽」（0.2.0-rc.2）
- [#9050](https://github.com/deepseek-ai/deepseek-harness/discussions/9050) [Bug] Windows 桌面版 0.2.0-rc.2：UAC 关闭时 workspace-write 下 PowerShell 以 0xC0000142 退出；ACL runner 内补建隐藏控制台可恢复
- [#9048](https://github.com/deepseek-ai/deepseek-harness/discussions/9048) [BUG]工具调用名校验缺失：空名 `tool_call` 会被落盘并在回放时把整个会话锁死（附：`strict` 采样开关永不生效）
- [#9047](https://github.com/deepseek-ai/deepseek-harness/discussions/9047) [Bug] 长阻塞命令（/compact）在锁屏/断网后被浏览器重放，服务端按新命令重复执行：commands/execute 缺幂等
- [#9046](https://github.com/deepseek-ai/deepseek-harness/discussions/9046) [Bug] 会话列表“已完成”绿点只存在页面内存（completionUnread 未持久化），刷新或手机端重启后消失
- [#6035](https://github.com/deepseek-ai/deepseek-harness/discussions/6035) Bug: Tool call with empty name/id → Error: unknown tool "" (UNKNOWN_TOOL)
- [#9044](https://github.com/deepseek-ai/deepseek-harness/discussions/9044) [Bug][Windows][Desktop 0.2.0-rc.2] 启动失败：desktop welcome: Web RPC failed（同一套插件在 node 下正常）
- [#8183](https://github.com/deepseek-ai/deepseek-harness/discussions/8183) [Bug][0.2.0-rc.1] Guarded write/edit can silently overwrite an external save made during staging
- [#9045](https://github.com/deepseek-ai/deepseek-harness/discussions/9045) [Bug] ZFS acltype=nfsv4 (TrueNAS/Docker): chmod 600 reverts on the store's own write, reloads fail silently, next boot loses all credentials
- [#9042](https://github.com/deepseek-ai/deepseek-harness/discussions/9042) [Bug][Windows][Desktop 0.2.0-rc.2] 点击通知抬窗不稳定：窗口可见但被遮挡时 focusPrimaryWindow() 抢不到前台（附受控实验与修复建议）
- [#9037](https://github.com/deepseek-ai/deepseek-harness/discussions/9037) [BUG] 子代理一轮内两次流式异常：先 TRANSPORT 自动重试，随后工具参数以 MALFORMED_RESPONSE 终止整轮
- [#9035](https://github.com/deepseek-ai/deepseek-harness/discussions/9035) [BUG] macOS: fullscreen window in a separate Space disappears permanently after clicking "Check for Updates"
- [#9034](https://github.com/deepseek-ai/deepseek-harness/discussions/9034) [BUG] 桌面版 0.2.0-rc.2：一个 BOM 导致启动即死（附 2 条报错可读性建议）
- [#9033](https://github.com/deepseek-ai/deepseek-harness/discussions/9033) [Bug][Desktop/macOS] 单个 bash 调用可扣住用户输入 600 秒：前台等待取自模型声明的 timeoutMs，出厂未设 maxTimeoutMs（0.2.0-rc.2）
- [#5477](https://github.com/deepseek-ai/deepseek-harness/discussions/5477) Bug:Windows ACL 沙箱在其缓存的私有临时目录被回收后永久失效
- [#810](https://github.com/deepseek-ai/deepseek-harness/discussions/810) [Bug] Windows: sandboxed pwsh always dies with 0xC0000142 under console-less host (desktop launch path)
- [#9031](https://github.com/deepseek-ai/deepseek-harness/discussions/9031) [Bug][Desktop/Win] Sandbox shell unusable in packaged desktop build — every workspace-write command exits 3221225794 (0xC0000142 STATUS_DLL_INIT_FAILED)
- [#9030](https://github.com/deepseek-ai/deepseek-harness/discussions/9030) [Bug] 桌面端 0.9.2 → 0.11.0 升级后，profile 内插件的运行时依赖被清空：包管理器状态仍在册，插件功能静默失效
- [#9028](https://github.com/deepseek-ai/deepseek-harness/discussions/9028) [Bug] Desktop: after background reconnect every sidebar session title flashes to "未命名" (untitled) — projection stores cleared before refresh backfills (0.2.0-rc.2)
- [#9027](https://github.com/deepseek-ai/deepseek-harness/discussions/9027) [Bug] CSS module class names depend on the absolute checkout path
- [#9021](https://github.com/deepseek-ai/deepseek-harness/discussions/9021) Bug: a dollar amount in ordinary prose is parsed as inline math — spaces collapse, **bold** stays literal
- [#8557](https://github.com/deepseek-ai/deepseek-harness/discussions/8557) [Bug] 桌面版插件安装/卸载被无关依赖的 minimumReleaseAge 连坐失败，且 minimumReleaseAgeExclude 白名单本身被 "local policy" 拒绝
- [#8312](https://github.com/deepseek-ai/deepseek-harness/discussions/8312) [Bug][Windows] workspace-write leaves a permanent Low integrity label on the project, breaking every other tool used on it — several reports, still unchanged in 0.2.0-rc.2
- [#423](https://github.com/deepseek-ai/deepseek-harness/discussions/423) [Bug Report] Windows 工作区：连接后外部创建/移入的子目录永远无法写入（capability ACE 永不补授）
- [#8996](https://github.com/deepseek-ai/deepseek-harness/discussions/8996) [Bug] 桌面版下 skill 工具查不到任何本地技能：preset 的 customSkillDirs 指进 app.asar，提供方抛错被静默跳过
- [#8991](https://github.com/deepseek-ai/deepseek-harness/discussions/8991) [Bug] workspace-write sandbox: every confined pwsh command exits with 0xC0000142 (STATUS_DLL_INIT_FAILED), no stderr
- [#4218](https://github.com/deepseek-ai/deepseek-harness/discussions/4218) [Bug] dsh web crashes on Windows when a tool call / sub-agent is triggered
- [#8826](https://github.com/deepseek-ai/deepseek-harness/discussions/8826) [Bug] 求助：绑定邮箱后账号分裂，账号历史记录丢失
- [#7865](https://github.com/deepseek-ai/deepseek-harness/discussions/7865) [bug] 实验性 Playwright MCP 启动失败会导致所有会话创建失败（failOnStartupError: true + reconnect: false），并残留孤儿浏览器进程
- [#8984](https://github.com/deepseek-ai/deepseek-harness/discussions/8984) [bug] Duplicate seq written to session log when seed-construction and resume overlap (bionic: no write lease → whole history rejected on read)
- [#8983](https://github.com/deepseek-ai/deepseek-harness/discussions/8983) [Bug] Session row disappears from the left sidebar the moment it is clicked (persisted dsh.workspace.view.v5 snapshot missing sessionUpdatedAtByAccount → sidebar.workspaces slot crash)
- [#3719](https://github.com/deepseek-ai/deepseek-harness/discussions/3719) [Bug][POSIX] storage-json can overwrite a published write after directory fsync failure
- [#8898](https://github.com/deepseek-ai/deepseek-harness/discussions/8898) [Bug] Plugin Manager rejects or misclassifies HTTP tarball URLs with query parameters
- [#8926](https://github.com/deepseek-ai/deepseek-harness/discussions/8926) [Bug][Linux] Empty XDG data variables hide registered file handlers and icons
- [#8979](https://github.com/deepseek-ai/deepseek-harness/discussions/8979) [Bug] SQLite search results lose the SessionHeader origin field
- [#8978](https://github.com/deepseek-ai/deepseek-harness/discussions/8978) [Bug] Literal editors accept overlapping matches as a unique edit
- [#8980](https://github.com/deepseek-ai/deepseek-harness/discussions/8980) [Bug][Linux] Escaped desktop-entry names display literally and icons disappear
- [#8118](https://github.com/deepseek-ai/deepseek-harness/discussions/8118) [bug]dsh 升级最新版本 0.1.7-rc.2 对话一致中断
- [#7989](https://github.com/deepseek-ai/deepseek-harness/discussions/7989) [Bug] macOS: 硬运行时缺少麦克风 entitlement，语音输入被永久拒绝且不弹授权窗（无用户侧绕过方案）
- [#7916](https://github.com/deepseek-ai/deepseek-harness/discussions/7916) [bug]Windows `workspace-write` 下所有被沙箱包裹的命令失败于 `SetNamedSecurityInfoW (Win32 5)
- [#8137](https://github.com/deepseek-ai/deepseek-harness/discussions/8137) [Bug] [Windows] 文件「打开方式」列表遇到坏注册项整体崩溃；「用文件资源管理器打开」按钮无响应
- [#8066](https://github.com/deepseek-ai/deepseek-harness/discussions/8066) [Bug] 会话持久化的 live 写缓冲无上限增长：`dsh web` 进程 RSS 涨到 14.7 GB（0.1.7-rc.2 / Windows）
- [#8273](https://github.com/deepseek-ai/deepseek-harness/discussions/8273) [bug] The "Deep diving…" run status keeps showing 5–22 s after the answer is complete — the turn closes late in a workspace with many untracked files
- [#7368](https://github.com/deepseek-ai/deepseek-harness/discussions/7368) [Bug] [0.1.6-alpha.2]Cannot read properties of undefined (reading 'prepare') on every tool call in web profile — dsh-tools Symbol identity mismatch

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-10-07T03:43:51.785Z_