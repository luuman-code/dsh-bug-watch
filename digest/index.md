# DSH Bug Watch — 2026-10-28

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 43

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
_（无）_

## 📝 仅报告 — 无人互动
- [#11275](https://github.com/deepseek-ai/deepseek-harness/discussions/11275) [Bug] workspace-changes stalls every root turn ~27 s (agent/turn-stopping awaits git with a 30 s default timeout)
- [#11274](https://github.com/deepseek-ai/deepseek-harness/discussions/11274) [Bug] Desktop update fails: "Host did not complete graceful task teardown (graceful deadline exceeded)" — 0.2.1-rc.2 → 0.2.1-rc.3, win32 x64
- [#11271](https://github.com/deepseek-ai/deepseek-harness/discussions/11271) [Bug] Sidebar terminal output stream permanently freezes after concurrent terminal/attach streams are disposed (isolated repro 3/3)
- [#11268](https://github.com/deepseek-ai/deepseek-harness/discussions/11268) [Bug] 附件对象缺失被误报为 "DeepSeek Messages transport failed"，并被当作可重试错误使会话永久失败
- [#11264](https://github.com/deepseek-ai/deepseek-harness/discussions/11264) [Bug] Desktop chat opens directory Markdown links as broken file previews
- [#11260](https://github.com/deepseek-ai/deepseek-harness/discussions/11260) [Bug] 在调用工具时，疑似客户端渲染bug，会丢失一个括号，导致调用失败。具体表现如下
- [#11258](https://github.com/deepseek-ai/deepseek-harness/discussions/11258) [Bug] tool-call timeout is notify-only: a tool with a declared timeoutMs can hang the whole session past its budget
- [#11255](https://github.com/deepseek-ai/deepseek-harness/discussions/11255) [Bug] http-bridge backpressure wait leaks one `drain` listener per wait on the gzip stream when `compression: gzip` is on
- [#11254](https://github.com/deepseek-ai/deepseek-harness/discussions/11254) [Bug] 冷启动时未实体化草稿会话误标为 blank: false 导致每次重启/重载重复堆叠孤立空会话 (附修复分支及单测)
- [#11188](https://github.com/deepseek-ai/deepseek-harness/discussions/11188) [Bug] 桌面版 0.2.1-rc.1 自动升级到 0.2.1-rc.3 后，工作区列表与全部会话记录消失（harness home 被当成全新目录）
- [#11196](https://github.com/deepseek-ai/deepseek-harness/discussions/11196) [BUG] `experimental-auto-review` sends a hardcoded `temperature: 0` and disables every tool call on models that only accept `temperature=1`
- [#10569](https://github.com/deepseek-ai/deepseek-harness/discussions/10569) [Bug][Safety] DSH 0.2.1-rc.2: cleanup command expanded to C:/ root and deleted user files
- [#7801](https://github.com/deepseek-ai/deepseek-harness/discussions/7801) [Bug] 网页端静默吞掉 session/create 错误；dsh-persona 预设 schema 把 text 改名为 prefix，旧预设无迁移提示直接失效
- [#5062](https://github.com/deepseek-ai/deepseek-harness/discussions/5062) [Bug] dsh plugin: Windows 下 remove link: 安装的插件 后 node_modules 残留链接，后续 add 同名 git 插件稳定复现 ERR_PNPM_EPERM，且失败提示为错误诊断
- [#9924](https://github.com/deepseek-ai/deepseek-harness/discussions/9924) [Bug] Desktop "Web authentication failed": stale dsh-auth-* cookies overflow the Host header limit (431)
- [#11219](https://github.com/deepseek-ai/deepseek-harness/discussions/11219) [Bug] 0.2.1-rc.3 桌面端：零第三方插件下 host/renderer 循环崩溃（crypto_context.cc:884 / absl raw_hash_map::at / renderer 静默退出）
- [#11102](https://github.com/deepseek-ai/deepseek-harness/discussions/11102) [bug] dsh desktop accumulates auth cookies on every launch; crashes after ~60–70 launches [bug] `dsh desktop` 启动认证 cookie 无限累积，约六七十次启动后启动崩溃
- [#8991](https://github.com/deepseek-ai/deepseek-harness/discussions/8991) [Bug] workspace-write sandbox: every confined pwsh command exits with 0xC0000142 (STATUS_DLL_INIT_FAILED), no stderr
- [#11223](https://github.com/deepseek-ai/deepseek-harness/discussions/11223) [Bug] Windows workspace-write: 0xC0000142 root cause confirmed — the restricting-SID list carries a capability SID with no read ACE on System32 (follow-up to #8991 / #8067)
- [#11010](https://github.com/deepseek-ai/deepseek-harness/discussions/11010) [Bug][Desktop] 0.2.1-rc.3 启动即崩「desktop welcome: Web authentication failed」：dsh-auth cookie 按随机端口累积，撑破请求头上限后宿主一律 431
- [#11159](https://github.com/deepseek-ai/deepseek-harness/discussions/11159) [Bug]发现 dsh 中非法 UTF-16 字符可能导致整个会话 400 无法使用（unpaired surrogate → Messages 400）
- [#10898](https://github.com/deepseek-ai/deepseek-harness/discussions/10898) [Bug] shell 工具 100% 失败 (0xC0000142)；重装后应用无法启动 (0.2.1-rc.3 / Win11)
- [#10863](https://github.com/deepseek-ai/deepseek-harness/discussions/10863) [Bug] Desktop: 卷根 ACL 含包 SID 但缺 ALL APPLICATION PACKAGES 时启动即崩；自动更新后必现「双击无反应」
- [#11092](https://github.com/deepseek-ai/deepseek-harness/discussions/11092) [Bug] Windows 10: every sandboxed child dies with 0xC0000142 (STATUS_DLL_INIT_FAILED) under workspace-write
- [#11121](https://github.com/deepseek-ai/deepseek-harness/discussions/11121) [Bug] dsh-hmr: 热重载后 apply() 定时器永久携带 executing=true，导致 runExclusive 嵌套报错
- [#8924](https://github.com/deepseek-ai/deepseek-harness/discussions/8924) [Bug] All tool calls die with `Cannot read properties of undefined (reading 'prepare')` when web profile has its own dsh-tools copy (dual-package Symbol hazard)
- [#11197](https://github.com/deepseek-ai/deepseek-harness/discussions/11197) [Bug] Desktop 0.2.1-rc.3 (Windows x64): "desktop welcome: Web authentication failed" once per-port dsh-auth cookies overflow the 16 KiB header limit
- [#10317](https://github.com/deepseek-ai/deepseek-harness/discussions/10317) [Bug] Desktop 0.2.1-rc.2 (Windows x64): renderer exits with "launch-failed" on every startup; main then crashes with "desktop welcome: Web RPC failed"
- [#11192](https://github.com/deepseek-ai/deepseek-harness/discussions/11192) [Bug] Windows 桌面端 0.2.1-rc.2 启动即崩:desktop welcome: Web RPC failed(workspaceService unavailable)
- [#10949](https://github.com/deepseek-ai/deepseek-harness/discussions/10949) [Bug] 0.2.1-rc.3 静默升级删除安装目录内的用户工作区（~835 MB 数据丢失，不进回收站，无任何提示）
- [#11187](https://github.com/deepseek-ai/deepseek-harness/discussions/11187) [Bug] macOS 桌面版：内置更新器因 host 优雅退出超过 10 秒而拒绝安装（即使最终 exit 0）
- [#11186](https://github.com/deepseek-ai/deepseek-harness/discussions/11186) [Bug] Sandboxed shell dies with 0xC0000142 (STATUS_DLL_INIT_FAILED) when the app runs elevated (UAC disabled)
- [#11180](https://github.com/deepseek-ai/deepseek-harness/discussions/11180) [Bug] Desktop 派生的 explorer.exe 被 ELECTRON_RUN_AS_NODE 长期污染，导致此后双击 .md 等 Electron 关联静默失效
- [#11172](https://github.com/deepseek-ai/deepseek-harness/discussions/11172) [Bug] web_fetch omits whole pages after one U+0130 (İ): depth guard indexes a lowercased copy whose length differs
- [#11169](https://github.com/deepseek-ai/deepseek-harness/discussions/11169) [Bug] 桌面端正常退出时，Auto review 集成会把「自动审查」会话静默迁移为「完全权限」
- [#11168](https://github.com/deepseek-ai/deepseek-harness/discussions/11168) [Bug] "@" reference completion lists blank placeholder Sessions (id-only labels) that the sidebar hides
- [#11167](https://github.com/deepseek-ai/deepseek-harness/discussions/11167) [Bug] Windows sandbox: pwsh tool always exits 0xC0000142 (STATUS_DLL_INIT_FAILED) under workspace-write
- [#11165](https://github.com/deepseek-ai/deepseek-harness/discussions/11165) [Bug] reasoning + pre-tool-call text rendered inside collapsed "thinking" block, invisible by default
- [#11139](https://github.com/deepseek-ai/deepseek-harness/discussions/11139) [Bug] dsh-llm-deepseek throws UNSUPPORTED_CONTENT on Anthropic redacted_thinking blocks
- [#10637](https://github.com/deepseek-ai/deepseek-harness/discussions/10637) [Bug] 桌面端 0.2.1-rc.2 启动即崩：必需插件 @deepseek-ai/dsh-client-connection 缺少 webRuntime 服务导致插件树加载失败，恢复流程同样失败
- [#10009](https://github.com/deepseek-ai/deepseek-harness/discussions/10009) [Bug] Windows 沙箱：workspace-write 下任何子进程都以 0xC0000142 死亡（read-only 正常）
- [#11158](https://github.com/deepseek-ai/deepseek-harness/discussions/11158) [Bug] MCP image results above ~2 MB are silently dropped: CANONICAL_BASE64 regex overflows the call stack
- [#11151](https://github.com/deepseek-ai/deepseek-harness/discussions/11151) [Bug] llm-pi-ai forwards empty tool id/name, crashing the session write (assertV4ToolResultMessage)

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-10-28T03:31:16.544Z_