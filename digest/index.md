# DSH Bug Watch — 2026-10-19

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 62

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
- [#9017](https://github.com/deepseek-ai/deepseek-harness/discussions/9017) **[Bug] 第三方 Electron 宿主（Electron-as-node）下 dsh 全量启动失败：require-builtin 指纹门补丁精确 + app-boot 无 --expose-internals 回退**<br/>  分类：Q&A · 标签：— · 最近更新：2026-10-18

## 📝 仅报告 — 无人互动
- [#10209](https://github.com/deepseek-ai/deepseek-harness/discussions/10209) [Bug] Changed-files card 404s after Host restart: workspace/changes persists only {turn}, the summary lives in memory
- [#10203](https://github.com/deepseek-ai/deepseek-harness/discussions/10203) [Bug Report] patch-injected "skill-filesystem" row without "name" is silently disabled by preflight
- [#10202](https://github.com/deepseek-ai/deepseek-harness/discussions/10202) [Bug] Windows 沙箱把工作区（桌面）标为 Low 完整性，导致桌面全部快捷方式图标变白
- [#10206](https://github.com/deepseek-ai/deepseek-harness/discussions/10206) [Bug] Windows desktop app: every sandboxed pwsh call dies with 0xC0000142 (STATUS_DLL_INIT_FAILED) - workspace-write unusable
- [#6184](https://github.com/deepseek-ai/deepseek-harness/discussions/6184) [Bug] /compact reports transport failures as "could not produce a useful summary"
- [#10204](https://github.com/deepseek-ai/deepseek-harness/discussions/10204) [Bug] 桌面版更新被永久拒绝：Host 已确认 shutdown-complete，却因 10 秒内未退出被 SIGTERM（0.2.0-rc.2 → 0.2.1-rc.2）
- [#9262](https://github.com/deepseek-ai/deepseek-harness/discussions/9262) [Bug] Missing attachment object still bricks image-bearing sessions on 0.2.0-rc.2, still reported as TRANSPORT (see #7582)
- [#9924](https://github.com/deepseek-ai/deepseek-harness/discussions/9924) [Bug] Desktop "Web authentication failed": stale dsh-auth-* cookies overflow the Host header limit (431)
- [#10195](https://github.com/deepseek-ai/deepseek-harness/discussions/10195) [BUG][Windows 0.2.1-rc.2] DeepSeek Messages 流式 tool 参数 JSON 损坏 → MALFORMED_RESPONSE 整轮中止且不重试
- [#10041](https://github.com/deepseek-ai/deepseek-harness/discussions/10041) [bug] Auto review: every remaining tool call returns "aborted before dispatch" after a mid-turn /permission auto switch
- [#10007](https://github.com/deepseek-ai/deepseek-harness/discussions/10007) [Bug]回合运行中改模型/思维强度/权限，会让会话所有工具调用失效（sessionProjections in inactive context）
- [#10186](https://github.com/deepseek-ai/deepseek-harness/discussions/10186) [Bug][Windows 0.2.1-rc.2] 切换到 deepseek-official 后报 tool_result 缺失，但本地结果及序列化配对均存在
- [#10193](https://github.com/deepseek-ai/deepseek-harness/discussions/10193) [BUG]linux快捷键问题
- [#10040](https://github.com/deepseek-ai/deepseek-harness/discussions/10040) [Bug] 运行时重载导致权限选择器消失与工具永久失效：permission-presets 与 auto 预设的依赖死锁（0.2.1-rc.2 仍复现）
- [#10163](https://github.com/deepseek-ai/deepseek-harness/discussions/10163) [Bug] DeepSeek Messages 400s when a session's tool list becomes all-deferred (defer_loading)
- [#8409](https://github.com/deepseek-ai/deepseek-harness/discussions/8409) [Bug][Windows] Windows ACL 沙箱（workspace-write）三个授权缺陷：受保护 DACL 子目录永不获授权 / desktop 根授权缓存不复核不自愈 / 标准用户+非系统盘 grantWrite 失败（Win32 5）
- [#4233](https://github.com/deepseek-ai/deepseek-harness/discussions/4233) [Bug] Web UI chat input: Chinese IME composition is frequently interrupted — text jumps and commits wrong characters when typing fast
- [#10174](https://github.com/deepseek-ai/deepseek-harness/discussions/10174) [Bug] 右侧文档预览：高 DPI 下 PDF 文字发虚、长文档滚动卡顿，建议评估交给系统 PDF 引擎
- [#10061](https://github.com/deepseek-ai/deepseek-harness/discussions/10061) [Bug] 长会话中已完成的 Codex 响应被误判 context overflow，随后模型反复自述「预算极低」
- [#10169](https://github.com/deepseek-ai/deepseek-harness/discussions/10169) [Bug] Assistant output contained a bare `user` role marker and fabricated user-turn text
- [#10167](https://github.com/deepseek-ai/deepseek-harness/discussions/10167) [Bug] Gemini 3.x 在调用 cordis_inspect_query 后永久报 HTTP 400：工具返回的 JSON Schema `$ref: "#/$defs/loaderExpression"` 被误判为多模态 display_name（附根因与修复建议）
- [#10165](https://github.com/deepseek-ai/deepseek-harness/discussions/10165) [Bug][Windows] workspace-write sandbox: every confined process dies with STATUS_DLL_INIT_FAILED (0xC0000142 / 3221225794)
- [#10164](https://github.com/deepseek-ai/deepseek-harness/discussions/10164) [Bug] Windows: Persistent PTY shell fails to start under workspace-write sandbox (root cause found)
- [#10162](https://github.com/deepseek-ai/deepseek-harness/discussions/10162) [Bug] open-in-app: VS Code (and every Electron app) cannot be launched on Windows — ELECTRON_RUN_AS_NODE leaks into the child environment
- [#10161](https://github.com/deepseek-ai/deepseek-harness/discussions/10161) [Bug] Windows: spawn with stdio pipe fails with EPERM under workspace-write, breaking tsx/esbuild/vite
- [#10159](https://github.com/deepseek-ai/deepseek-harness/discussions/10159) [Bug] 桌面端启动即崩：profile manifest 的 UTF-8 BOM 未被容忍；dsh plugin add 中断后无法自愈
- [#10158](https://github.com/deepseek-ai/deepseek-harness/discussions/10158) [Bug] send_message to a continuable child fails with "subagent is unavailable" (NOT_RESUMABLE) after that child settles, and the real cause is swallowed
- [#10155](https://github.com/deepseek-ai/deepseek-harness/discussions/10155) [Bug] Command hooks run under the deployment sandbox policy, not the calling session's: in danger-full-access a hook still cannot write the session workspace
- [#8193](https://github.com/deepseek-ai/deepseek-harness/discussions/8193) [Bug][Desktop][0.2.0-rc.1] Windows ACL sandbox cannot start any child under an Electron host (0xC0000142)
- [#10077](https://github.com/deepseek-ai/deepseek-harness/discussions/10077) [Bug] 混合 provider 会话切回 deepseek-official（Anthropic Messages）后必现 400：tool_use 历史缺 thinking 块
- [#10151](https://github.com/deepseek-ai/deepseek-harness/discussions/10151) [Bug] Windows 受限沙箱模式下所有 pwsh 调用以 0xC0000142 失败（Web GUI 宿主）
- [#10150](https://github.com/deepseek-ai/deepseek-harness/discussions/10150) [Bug] cot-translation 0.2.1-rc.2 在「已完成分析」步骤卡片 UI 下从不渲染（entry 正常激活，非 #9577）
- [#1494](https://github.com/deepseek-ai/deepseek-harness/discussions/1494) [Bug] Web UI copy button does nothing when navigator.clipboard.writeText is permission-denied (no execCommand fallback)
- [#10138](https://github.com/deepseek-ai/deepseek-harness/discussions/10138) [Bug] 网关 preflight 拒绝无法归类为上下文溢出，overflow 恢复不触发，会话永久卡死（附最小补丁）
- [#10133](https://github.com/deepseek-ai/deepseek-harness/discussions/10133) [Bug] 「新会话默认权限」下拉框静默失效：写入被 entries() 拒绝且前端吞掉错误
- [#10132](https://github.com/deepseek-ai/deepseek-harness/discussions/10132) [Bug] 计划模式下被新消息打断后会直接修改文件，只读约束未在工具层生效
- [#10136](https://github.com/deepseek-ai/deepseek-harness/discussions/10136) [Bug] Web GUI: 助手回复不渲染，只显示带 ✕ 的「已完成分析」空块
- [#10129](https://github.com/deepseek-ai/deepseek-harness/discussions/10129) [Bug] 内置会话标题插件几乎从不更新：输出额度 64 个 token 被思考吃光，失败还完全静默（DSH 0.2.1-rc.2）
- [#9757](https://github.com/deepseek-ai/deepseek-harness/discussions/9757) [Bug] open-in-app: 泄漏的 ELECTRON_RUN_AS_NODE 让 VS Code 等 Electron 应用以 Node 模式启动，死在 main.js 之前
- [#10120](https://github.com/deepseek-ai/deepseek-harness/discussions/10120) [Bug][macOS][Desktop] 新建工作区时系统文件夹选择器始终英文：packaging 配置里重复的 extendInfo 覆盖了 CFBundleLocalizations
- [#9949](https://github.com/deepseek-ai/deepseek-harness/discussions/9949) [Bug] `subagent_codex` fails on any model newer than the pinned Codex CLI (0.153.4)
- [#10099](https://github.com/deepseek-ai/deepseek-harness/discussions/10099) Bug: Loader inject has no optional/timeout degrade - a third-party bundle can permanently block core agent presets while dsh only logs a warning
- [#10101](https://github.com/deepseek-ai/deepseek-harness/discussions/10101) [Bug] Subprocess spill files can silently lose bytes after short writes
- [#10119](https://github.com/deepseek-ai/deepseek-harness/discussions/10119) [Bug] Windows：atomic-write 写入锁在 PID 被复用后永久死锁——重启无效，插件启用与模型设置保存全部超时失败
- [#10113](https://github.com/deepseek-ai/deepseek-harness/discussions/10113) [Bug] macOS：/usr/local/bin 为 0700 时 “Manage dsh Command…” 安装失败（EACCES lstat）
- [#10110](https://github.com/deepseek-ai/deepseek-harness/discussions/10110) [Bug] dsh-web-frontend 引用了未定义的 --dsw-radius-* 变量，页签/卡片/对话框等圆角失效变直角
- [#10092](https://github.com/deepseek-ai/deepseek-harness/discussions/10092) [Bug]大会话恢复时 OOM 崩溃、分叉同样崩溃 —— 全量留档与会话状态重建共用同一条读取路径
- [#6751](https://github.com/deepseek-ai/deepseek-harness/discussions/6751) [Bug] 空白新会话切换 Agent Preset 后，新 preset 的 modelSelectionSettings 型 delegation 工具完全未安装（subagent / list_subagent_models 缺失）
- [#10070](https://github.com/deepseek-ai/deepseek-harness/discussions/10070) [Bug] Desktop 0.2.1-rc.2: persistent terminal leaks PSReadLine prediction ghosts (shell history) into the model context
- [#10069](https://github.com/deepseek-ai/deepseek-harness/discussions/10069) [Bug] Desktop 0.2.1-rc.2: enabling the experimental "Developer tools" can crash the host after its inspector source closes — "inspector: Host source is closed"
- [#10095](https://github.com/deepseek-ai/deepseek-harness/discussions/10095) [Bug]+小优化点请求：插件热重载后所有历史会话从侧边栏消失，无任何提示+优化 Windows 托盘缺重启入口
- [#10091](https://github.com/deepseek-ai/deepseek-harness/discussions/10091) [Bug] @ file reference is not recognized after CJK characters (Chinese/Japanese) — boundary only accepts start-of-text or whitespace
- [#10090](https://github.com/deepseek-ai/deepseek-harness/discussions/10090) [Bug] 宿主进程是 Electron 时，subprocess / sandbox runner 挂死（process.execPath 缺少 ELECTRON_RUN_AS_NODE）
- [#7642](https://github.com/deepseek-ai/deepseek-harness/discussions/7642) [Bug] Agent Teams bundle 在 Web/Desktop 未禁用 subagent：子代理不在 Team roster，list_agents/send_message 找不到也联系不上
- [#810](https://github.com/deepseek-ai/deepseek-harness/discussions/810) [Bug] Windows: sandboxed pwsh always dies with 0xC0000142 under console-less host (desktop launch path)
- [#8497](https://github.com/deepseek-ai/deepseek-harness/discussions/8497) [Bug][Windows 10] workspace-write 沙箱下所有子进程 0xC0000142（连 cmd.exe 都起不来）— Default DACL 使用 capability SID 所致
- [#10080](https://github.com/deepseek-ai/deepseek-harness/discussions/10080) [Bug] Local Ollama models answer injected runtime/skill/time context instead of the user's task, so no tool is ever called (0.2.1-rc.2)
- [#10084](https://github.com/deepseek-ai/deepseek-harness/discussions/10084) [Bug] Settings → 通用设置 → 权限：默认预设改不了（permission / pwsh-sandbox 的 revision 在 reconcile 后自增，写入必然 conflict）— 0.2.1-rc.2 复现
- [#9855](https://github.com/deepseek-ai/deepseek-harness/discussions/9855) [bug]当工作步骤收起时机为回答结束后, 工作步骤展示为详细时, 在折叠工作步骤的时候, 会导致正在阅读的内容发生跳动.
- [#9491](https://github.com/deepseek-ai/deepseek-harness/discussions/9491) [Bug] A bot permanently stops replying in one long-lived group: group turns are never dispatched (no model call, no error), while DMs and new groups still work
- [#9653](https://github.com/deepseek-ai/deepseek-harness/discussions/9653) [Bug] Windows: boot-time corpus scan exhausts process fd limit (EMFILE) and leaves a permanent empty .lock that blocks every later boot

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-10-19T02:48:11.670Z_