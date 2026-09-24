# DSH Bug Watch — 2026-09-24

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 97

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
_（无）_

## 📝 仅报告 — 无人互动
- [#7368](https://github.com/deepseek-ai/deepseek-harness/discussions/7368) [Bug] [0.1.6-alpha.2]Cannot read properties of undefined (reading 'prepare') on every tool call in web profile — dsh-tools Symbol identity mismatch
- [#7658](https://github.com/deepseek-ai/deepseek-harness/discussions/7658) [Bug] 会话格式迁移后 dsh_session_log 水位失效：每次请求重发整份日志 → 413 且永久卡死
- [#6823](https://github.com/deepseek-ai/deepseek-harness/discussions/6823) [Bug] Blank Web sidebar after downgrading: localStorage key dsh.workspace.view.v5 stays the same across incompatible state shapes
- [#7314](https://github.com/deepseek-ai/deepseek-harness/discussions/7314) Bug: web sidebar lists no workspaces and no sessions after upgrade (0.1.5-rc.2)
- [#7635](https://github.com/deepseek-ai/deepseek-harness/discussions/7635) [Bug] 0.1.7-rc.1 no longer heals $DSH_HOME/profiles/node_modules (0.1.6 did) — profiles with locally installed plugins break every child process: run_code and voice input die with "subprocess scope exited before its bootstrap consumed the launch request"
- [#7501](https://github.com/deepseek-ai/deepseek-harness/discussions/7501) [Bug] v0.1.7-alpha.1 深度搜索中上下文被频繁压缩：5分38秒内触发6次（仅1-4条/1.4k-3.6k tokens），并伴随 summary-not-smaller 空转
- [#6978](https://github.com/deepseek-ai/deepseek-harness/discussions/6978) [bug] 打开会话时，如果AI正在回复，会长时间卡在 载入历史 状态
- [#7650](https://github.com/deepseek-ai/deepseek-harness/discussions/7650) [BUG] Reaching context window 100% and not triggering auto-compaction
- [#7649](https://github.com/deepseek-ai/deepseek-harness/discussions/7649) [Bug] isQuotaExceededError wording table misses two real quota shapes: AllocationQuota.FreeTierOnly and in arrears
- [#6964](https://github.com/deepseek-ai/deepseek-harness/discussions/6964) [Bug] claimed 的输入在 prepareRequest 抛错时会永久丢失：本机 154 份存档里 14 例
- [#7646](https://github.com/deepseek-ai/deepseek-harness/discussions/7646) [Bug] Windows: after upgrading to 0.1.7-rc.1 every shell command fails at the ACL grant with `SetNamedSecurityInfoW failed (Win32 5): grantWrite(<workspace>)` / 升级到 0.1.7 后所有 shell 命令在沙箱授权阶段立即失败（粘性，需手工修 ACL）
- [#7647](https://github.com/deepseek-ai/deepseek-harness/discussions/7647) [Bug] 移动端：切换长会话后首分钟主线程 longtask（会话正文无窗口化 + Shiki 高亮无有效预算）
- [#5787](https://github.com/deepseek-ai/deepseek-harness/discussions/5787) [Bug] Markdown table: overflow is decided by column count, and the scrollbar is hidden until hover so wide columns become unreachable
- [#7642](https://github.com/deepseek-ai/deepseek-harness/discussions/7642) [Bug] Agent Teams bundle 在 Web/Desktop 未禁用 subagent：子代理不在 Team roster，list_agents/send_message 找不到也联系不上
- [#7640](https://github.com/deepseek-ai/deepseek-harness/discussions/7640) [Bug] Los modelos de proveedores personalizados (Custom provider) no se cargan en el selector de la pantalla principal (Windows, v0.1.5-rc.3)
- [#7632](https://github.com/deepseek-ai/deepseek-harness/discussions/7632) [bug] 上下文超长被误判成普通 API 错误：自动压缩 124 次失败 102 次，会话永久卡死
- [#7380](https://github.com/deepseek-ai/deepseek-harness/discussions/7380) [bug] grep/glob tools silently skip symlinked directories (ripgrep spawned without --follow)
- [#7630](https://github.com/deepseek-ai/deepseek-harness/discussions/7630) [Bug] One plugin with a pre-e459e32637 typert manifest withdraws every typert definition — web UI unusable (session/control: definition-unavailable)
- [#7629](https://github.com/deepseek-ai/deepseek-harness/discussions/7629) [Bug] DSH Desktop advanced 模式禁用 ui-layout，导致手机/远程等不带 ?dsh-desktop-mode=advanced 的 Web 客户端完全无法加载（附根因定位与修复方向）
- [#7542](https://github.com/deepseek-ai/deepseek-harness/discussions/7542) [Bug] latest (0.1.5-rc.2) fails to boot on a clean install: dsh-sandbox-local is not resolved
- [#6552](https://github.com/deepseek-ai/deepseek-harness/discussions/6552) [Bug] 安卓语音输入：输入法组字里带换行时，输入框只落地一部分文本（首段整段丢失）
- [#3835](https://github.com/deepseek-ai/deepseek-harness/discussions/3835) [BUG] git 源插件安装后 bundle 组合异常，工具层空结果致会话循环且恢复后无响应
- [#1307](https://github.com/deepseek-ai/deepseek-harness/discussions/1307) [Bug] rc.6: Cannot create a session under 'Unassigned' (\u672a\u5206\u7ec4) after creating a workspace
- [#425](https://github.com/deepseek-ai/deepseek-harness/discussions/425) [BUG]Windows 下 edit/write 覆盖已有文件:`ReplaceFileW EIO (Win32 32)`(ERROR_SHARING_VIOLATION)高频失败,无重试机制
- [#5976](https://github.com/deepseek-ai/deepseek-harness/discussions/5976) [Bug] Agent 在超长上下文 + max reasoning effort 下陷入思考退化循环：回合零产出、无自动熔断，需手动中止（v4.1-flash；同配置 v4-flash 3000+ 步未复发）
- [#201](https://github.com/deepseek-ai/deepseek-harness/discussions/201) [BUG] spamming Error: sandbox escalation to "workspace-write" is not strictly wider than this call's current "danger-full-access" mode
- [#7625](https://github.com/deepseek-ai/deepseek-harness/discussions/7625) [Bug][DSH Desktop 2.0.13] 已保存的 DeepSeek API 密钥无法删除，导致网络搜索优先走 DeepSeek 并报错
- [#7624](https://github.com/deepseek-ai/deepseek-harness/discussions/7624) [Bug][DSH Desktop 2.0.13] 调整窗口尺寸后已打开的悬浮窗/弹窗不重新居中（macOS）
- [#6138](https://github.com/deepseek-ai/deepseek-harness/discussions/6138) [Bug] 输入法拼音未上屏时，输入框自动填充乱码汉字
- [#7622](https://github.com/deepseek-ai/deepseek-harness/discussions/7622) [Bug] Windows: `windows-acl` rung is auto-selected without a probe, but its host-side write grant always fails without SeSecurityPrivilege
- [#7436](https://github.com/deepseek-ai/deepseek-harness/discussions/7436) [Bug] dsh@0.1.5-rc.2 / rc.3 not installable: missing @deepseek-ai/dsh-client-ui-sidebar-documentpreview@0.1.5-rc.3
- [#6870](https://github.com/deepseek-ai/deepseek-harness/discussions/6870) [Bug] Web client: a persisted view-store payload missing a newly added field crashes the whole sidebar.workspaces slot
- [#5095](https://github.com/deepseek-ai/deepseek-harness/discussions/5095) [Bug] In-process subagents cannot write under inherited workspace-write because escalation fields remain exposed
- [#7621](https://github.com/deepseek-ai/deepseek-harness/discussions/7621) [BUG] 0.1.1-rc.2 Web 输入框：切换会话时按键可能被静默丢弃（字进了 DOM 却始终不显示）；附两处会话选择问题
- [#223](https://github.com/deepseek-ai/deepseek-harness/discussions/223) [bug] @deepseek-ai/dsh 发布包依赖图缺陷:cordis 反向 peer 依赖自己的插件,互相成环,严格解析器无法安装
- [#1315](https://github.com/deepseek-ai/deepseek-harness/discussions/1315) [Bug] 项目目录迁移后 dsh 启动崩溃（corrupt session log），希望支持会话重新归属
- [#7616](https://github.com/deepseek-ai/deepseek-harness/discussions/7616) [BUG] 修改文件会生成tmp锁定文件导致其它进程的文件监听奔溃
- [#6217](https://github.com/deepseek-ai/deepseek-harness/discussions/6217) Bug: Web GUI file preview shows "file resource service unavailable" on Chromium <= 125 — protocolOf() relies on WHATWG URL host parsing for a non-special scheme
- [#6328](https://github.com/deepseek-ai/deepseek-harness/discussions/6328) [Bug] One unmigratable v0 artifact (subagent/descriptor v2) disables all content search
- [#5715](https://github.com/deepseek-ai/deepseek-harness/discussions/5715) [bug] 403 quota exhaustion shown as "API key is invalid": every AUTH-coded failure swallows the real message
- [#5628](https://github.com/deepseek-ai/deepseek-harness/discussions/5628) [Bug] single-exe Web boot loses dsh.client metadata behind moduleFallback proxies
- [#3222](https://github.com/deepseek-ai/deepseek-harness/discussions/3222) [Bug] HTTP 403 授权拒绝被归类为 AUTH，UI 显示 "API key is invalid"，原始错误不可见
- [#7309](https://github.com/deepseek-ai/deepseek-harness/discussions/7309) [Bug] fork 会继承源会话 fork 点的下一条输入，新会话第一次输入执行的是它
- [#7602](https://github.com/deepseek-ai/deepseek-harness/discussions/7602) [Bug] Web UI incorrectly renders Markdown list containing package references
- [#7593](https://github.com/deepseek-ai/deepseek-harness/discussions/7593) [Bug] Windows + npm global install: dsh web cannot boot — duplicate physical copies of @deepseek-ai/dsh-win32-process trigger koffi "Duplicate type name 'DSH_STARTUPINFOW'", and a create-then-check HMR race exits right after printing the URL
- [#7591](https://github.com/deepseek-ai/deepseek-harness/discussions/7591) [Bug] 0.1.7 空白新会话遇到 writer-held 时会静默换新会话，未发送的草稿随之“消失”
- [#7534](https://github.com/deepseek-ai/deepseek-harness/discussions/7534) [Bug] 0.1.7-alpha.1 and alpha.2: a failed startup still consumes settings.yaml - legacy sections import into a disposed context and are lost permanently
- [#7302](https://github.com/deepseek-ai/deepseek-harness/discussions/7302) [Bug][Web client] Safari/WebKit：浮层内点击被 onBlur 吞掉（relatedTarget === null）/ clicks inside portaled panels are swallowed when relatedTarget is null
- [#7442](https://github.com/deepseek-ai/deepseek-harness/discussions/7442) [Bug] WebKit（Safari / WKWebView）里 composer 模型菜单点选无效，session/selectModel 不会发出
- [#7517](https://github.com/deepseek-ai/deepseek-harness/discussions/7517) [BUG] Workspace-write 沙箱缺陷：受限进程可通过工作区内的目录 Junction 删除工作区外文件
- [#1216](https://github.com/deepseek-ai/deepseek-harness/discussions/1216) [Bug] 复制消息时出现多余换行符（视觉折行被误复制为 \n）
- [#1490](https://github.com/deepseek-ai/deepseek-harness/discussions/1490) [Bug][Windows sandbox] tempfile.mkdtemp creates unwritable directories
- [#2499](https://github.com/deepseek-ai/deepseek-harness/discussions/2499) [Bug] 调用文件/搜索工具时触发 'Cannot read properties of undefined (reading 'prepare')' 并导致会话污染 (tool_calls 悬空)
- [#7567](https://github.com/deepseek-ai/deepseek-harness/discussions/7567) [Bug Report] windows-acl: hook commands silently fail because `workspaceRoot` falls back to `process.cwd()` (elevated launch → C:/Windows/System32)
- [#7565](https://github.com/deepseek-ai/deepseek-harness/discussions/7565) [Bug] revealNativePath does nothing on paths containing non-ASCII characters (e.g. CJK) - and reports success
- [#7471](https://github.com/deepseek-ai/deepseek-harness/discussions/7471) [Bug] 内测声明弹窗在设置写入失败时永久锁死界面（无任何逃生口）
- [#860](https://github.com/deepseek-ai/deepseek-harness/discussions/860) [Bug Report] 欢迎弹窗（内测声明）在 settings 写入被拒时把用户永久锁死：无法关闭、只能无限重试"暂时无法保存确认状态，请重试"
- [#7547](https://github.com/deepseek-ai/deepseek-harness/discussions/7547) [bug]安装完，打不开
- [#7502](https://github.com/deepseek-ai/deepseek-harness/discussions/7502) [BUG] web_search always fails: "DeepSeek returned an unprocessable response body" (brotli not decoded under custom undici dispatcher)
- [#7541](https://github.com/deepseek-ai/deepseek-harness/discussions/7541) Bug: llm-deepseek reports reasoning.efforts from the connection, not the model
- [#7538](https://github.com/deepseek-ai/deepseek-harness/discussions/7538) [BUG REPORT] Windows 沙箱无法在用户自建目录上 provision 工作区 ACE → 该目录下所有 shell 命令失败
- [#7537](https://github.com/deepseek-ai/deepseek-harness/discussions/7537) [Bug][Windows] skill-filesystem crashes dsh web when a custom skill root contains an inaccessible directory
- [#7493](https://github.com/deepseek-ai/deepseek-harness/discussions/7493) [BUG] Code block copy button fails with execCommand error; manual selection escapes block when overflow is active
- [#7533](https://github.com/deepseek-ai/deepseek-harness/discussions/7533) [Bug] 解析拦截器对只读 stack 赋值抛 TypeError，导致全部插件元信息报错（v0.1.7-alpha.2 / tsx 启动）
- [#2763](https://github.com/deepseek-ai/deepseek-harness/discussions/2763) [Bug Report] 包族 npm dist-tag `latest` 不一致：全新项目按默认版本安装必然 ERESOLVE（0.0.1-rc.1 的 peer 引用已不存在的包名）
- [#7531](https://github.com/deepseek-ai/deepseek-harness/discussions/7531) [Bug][Recovery] Crash recovery loses host termination provenance (signal / exit cause)
- [#7527](https://github.com/deepseek-ai/deepseek-harness/discussions/7527) [Bug] Session stuck on "Loading history…" forever when the connection generation changes during an in-flight open
- [#7524](https://github.com/deepseek-ai/deepseek-harness/discussions/7524) [Bug] Windows + 微软拼音：composer 输入法合成被立即终止——每敲一个字母候选就被上屏，中文无法输入
- [#7523](https://github.com/deepseek-ai/deepseek-harness/discussions/7523) [Bug] Windows: all subprocess tools fail with 0xC0000142 — probeWindowsJob never verifies the runner can actually start
- [#7520](https://github.com/deepseek-ai/deepseek-harness/discussions/7520) [Bug] Switching models mid-session can trigger false pi-ai context overflow
- [#7363](https://github.com/deepseek-ai/deepseek-harness/discussions/7363) Bug: "Cannot read properties of undefined (reading 'kind')" when a plugin calls agent.followup() with a bare string
- [#7340](https://github.com/deepseek-ai/deepseek-harness/discussions/7340) [Bug] 0.1.6-alpha.2版本交互bug，点击新会话按钮下面的插件按钮，然后点击收起侧边栏按钮，然后就回不到会话了，只能退出进程
- [#7516](https://github.com/deepseek-ai/deepseek-harness/discussions/7516) [Bug] 新建会话选工作区静默失效：Host 每次都建成空白会话、UI 零反应零日志，整页刷新才恢复（openWorkspace 的 navigation.aborted 分支）
- [#4403](https://github.com/deepseek-ai/deepseek-harness/discussions/4403) [Bug] WebUI 首次加载较长历史对话报「历史加载失败：signal timed out (internal)」
- [#7450](https://github.com/deepseek-ai/deepseek-harness/discussions/7450) [Bug] Windows: reveal (在文件资源管理器中显示无效) "Show in File Explorer" has no effect
- [#3963](https://github.com/deepseek-ai/deepseek-harness/discussions/3963) [BUG] 升级 0.1.1-rc 后 Web 每轮 agent run 失败(registration.adapter.reprepareCall is not a function)；Desktop 卡 Loading
- [#3808](https://github.com/deepseek-ai/deepseek-harness/discussions/3808) [BUG] rc.8 复现:prepare 崩溃后会话永久卡死 400
- [#7505](https://github.com/deepseek-ai/deepseek-harness/discussions/7505) [BUG]  前端渲染bug，对话框会因为手动展开思考过程后滚动鼠标而错位
- [#7478](https://github.com/deepseek-ai/deepseek-harness/discussions/7478) [bug]0.17无法安装
- [#7499](https://github.com/deepseek-ai/deepseek-harness/discussions/7499) [BUG]pnpm dsh web：首次工具调用失败，提示“Cannot read properties of undefined (reading 'prepare')”，并导致会话永久中断
- [#7500](https://github.com/deepseek-ai/deepseek-harness/discussions/7500) [Bug] npx install fails with ETARGET: missing documentpreview@0.1.5-rc.3
- [#7394](https://github.com/deepseek-ai/deepseek-harness/discussions/7394) [Bug] Second `@deepseek-ai/dsh-scope` instance from a profile plugin workspace registers preset personas unscoped, colliding with `deployment:persona` (rc.8: `deployment:persona`; master: `deployment:persona-prefix`/`-suffix`)
- [#7448](https://github.com/deepseek-ai/deepseek-harness/discussions/7448) [Bug] 0.1.5-rc.* 中任意一个版本都装不上：rc.3 是一次未完成的发布
- [#7367](https://github.com/deepseek-ai/deepseek-harness/discussions/7367) [Bug] dsh-app://shell/* documents return 404: update dialog renders blank, main window stays unclickable and blurred
- [#7393](https://github.com/deepseek-ai/deepseek-harness/discussions/7393) [Bug] Blank sessions disappear from session list when navigating to another session
- [#7484](https://github.com/deepseek-ai/deepseek-harness/discussions/7484) [Bug] Web UI "Open configuration file" fails on headless server when transport ownsHost=true (K8s / Ingress)
- [#7470](https://github.com/deepseek-ai/deepseek-harness/discussions/7470) [Bug] 新建终端 shell 菜单出现两个同名 bash（/bin/bash 与 /usr/bin/bash）
- [#7469](https://github.com/deepseek-ai/deepseek-harness/discussions/7469) [Bug] Welcome notice modal permanently locks the UI when settings write fails (no escape hatch)
- [#7466](https://github.com/deepseek-ai/deepseek-harness/discussions/7466) [Bug] 0.1.7-alpha.1 展开“正在分析请求”后出现大面积空白滚动区（附一行修复）
- [#7463](https://github.com/deepseek-ai/deepseek-harness/discussions/7463) [Bug] Anthropic Messages 协议下模型列表只显示 id，不显示已解析的 display_name
- [#7325](https://github.com/deepseek-ai/deepseek-harness/discussions/7325) [Bug][desktop] macOS nightly update feed is missing on the test deployment — dsh-desk/feeds/mac-arm64/nightly-mac.yml returns COS NoSuchKey
- [#7435](https://github.com/deepseek-ai/deepseek-harness/discussions/7435) [BUG] v0.1.7-alpha.1 dsh: cannot resolve profile bundle "@deepseek-ai/dsh-experimental-agent-team-web-profile
- [#7438](https://github.com/deepseek-ai/deepseek-harness/discussions/7438) [BUG] @deepseek-ai/dsh@0.1.5-rc.2 fails to install: ETARGET for @deepseek-ai/dsh-client-ui-sidebar-documentpreview@^0.1.5-rc.3
- [#7079](https://github.com/deepseek-ai/deepseek-harness/discussions/7079) [Bug] pnpm dsh web 从源码启动时工具调用全线崩溃：tsx/esm 加载 TS 源码与插件加载编译产物导致 TOOL_RUNTIME_SCHEDULER Symbol 分裂 （Cannot read properties of undefined (reading 'prepare')）
- [#7428](https://github.com/deepseek-ai/deepseek-harness/discussions/7428) [Bug] Official npm quickstart fails with ETARGET: missing sidebar-documentpreview@^0.1.5-rc.3
- [#7426](https://github.com/deepseek-ai/deepseek-harness/discussions/7426) [BUG] Windows: clicking a `~`-prefixed path fails — native opener does not expand the tilde
- [#5677](https://github.com/deepseek-ai/deepseek-harness/discussions/5677) [Bug] Web UI history never loads on Firefox-engine browsers (infinite "Loading history…") — Firefox-only failure in lossless-JSON validation

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-09-24T02:37:47.904Z_