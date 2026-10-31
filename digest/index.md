# DSH Bug Watch — 2026-10-31

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 54

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
_（无）_

## 📝 仅报告 — 无人互动
- [#11612](https://github.com/deepseek-ai/deepseek-harness/discussions/11612) [Bug] workspace.json with a non-array sessionIds breaks the whole workspace domain and cascades into unrelated services
- [#9718](https://github.com/deepseek-ai/deepseek-harness/discussions/9718) [Bug] Windows desktop: "browser time zone is unavailable" blocks chat with British Columbia Standard Time
- [#11608](https://github.com/deepseek-ai/deepseek-harness/discussions/11608) [Bug] Eager projection-cache load dominates `dsh web` startup: 969 records / 209 MB → 5.3 s of validation (26%)
- [#11605](https://github.com/deepseek-ai/deepseek-harness/discussions/11605) [Bug] "Continue" button after output token truncation corrupts generated code (regression since yesterday)
- [#11604](https://github.com/deepseek-ai/deepseek-harness/discussions/11604) [Bug][Desktop] 特定旧会话只能输出 Reasoning，Text 正文通道持续缺失
- [#11602](https://github.com/deepseek-ai/deepseek-harness/discussions/11602) [Bug] Desktop welcome: Web authentication failed on startup due to net.fetch stripping SameSite=Strict cookies on 303 redirect
- [#11187](https://github.com/deepseek-ai/deepseek-harness/discussions/11187) [Bug] macOS 桌面版：内置更新器因 host 优雅退出超过 10 秒而拒绝安装（即使最终 exit 0）
- [#11601](https://github.com/deepseek-ai/deepseek-harness/discussions/11601) [Bug] dsh account: GET /auth-api/v0/users/current returns 403 (CloudFront WAF) for the official client's default User-Agent - profile reads fail silently
- [#11593](https://github.com/deepseek-ai/deepseek-harness/discussions/11593) [Bug][Desktop 0.2.1-rc.3] Opening a single-turn session wedges the chat view on "Loading history…" forever, with no error shown
- [#8569](https://github.com/deepseek-ai/deepseek-harness/discussions/8569) [Bug] fs-search fails the whole tool call when ripgrep exits 2 with partial matches
- [#11598](https://github.com/deepseek-ai/deepseek-harness/discussions/11598) Bug: 未捕获的 .kind 裸读导致 turn 以 UNKNOWN 失败（reason 可为 null/undefined）
- [#9986](https://github.com/deepseek-ai/deepseek-harness/discussions/9986) [Bug] WorkspaceController becomes unavailable when a decompressed JSONL file is left in the session directory
- [#8827](https://github.com/deepseek-ai/deepseek-harness/discussions/8827) [Bug] workflow 工具调用永不返回，父 Agent 卡死在 step/start 后无事件
- [#11577](https://github.com/deepseek-ai/deepseek-harness/discussions/11577) [Bug][0.2.1-rc.5] 单条 tool_use 参数非法即整轮硬失败：MALFORMED_RESPONSE 仍不在默认重试码（汇总 #7705/#8920/#8976/#9402/#9503/#10406，附 rc.5 复现与补丁建议）
- [#11532](https://github.com/deepseek-ai/deepseek-harness/discussions/11532) [Bug] 长会话中工具调用标签畸形与写入静默失败：动作不执行且无错误提示
- [#11165](https://github.com/deepseek-ai/deepseek-harness/discussions/11165) [Bug] reasoning + pre-tool-call text rendered inside collapsed "thinking" block, invisible by default
- [#11599](https://github.com/deepseek-ai/deepseek-harness/discussions/11599) [Bug] 设置 → 插件 页面空白：settings.section 因 React error #310 崩溃（hooks 数量不一致）
- [#11591](https://github.com/deepseek-ai/deepseek-harness/discussions/11591) [Bug][0.2.1-rc.5] 长会话「加载更早」静默失败：conversation Definition "system-message" withdrew materialized target "chat"
- [#7915](https://github.com/deepseek-ai/deepseek-harness/discussions/7915) [Bug] 工作区常驻 Low 完整性标签导致资源管理器把所有文件显示为"来自其他计算机"，且"解除锁定"显示找不到该文件必然失败，移动文件时警告"这些文件可能对你的计算机有害 你的Internet安全设置阻止打开一个或多个文件"
- [#11590](https://github.com/deepseek-ai/deepseek-harness/discussions/11590) [BUG] DSH 桌面版启动失败（Web authentication failed）：认证 cookie 无界累积撑爆请求头，30 天内约 70 次启动后触发
- [#10677](https://github.com/deepseek-ai/deepseek-harness/discussions/10677) [BUG] 桌面版 0.2.1-rc.2：profile 根目录不可达时静默退出（ENOENT mkdir .dsh\profiles\desktop）
- [#11397](https://github.com/deepseek-ai/deepseek-harness/discussions/11397) [Bug][Desktop 0.2.1-rc.3] Auth cookies accumulate across restarts, causing HTTP 431 and startup failure
- [#11561](https://github.com/deepseek-ai/deepseek-harness/discussions/11561) [Bug] ask_user_question renders TeX literally in the question title and option labels — only question.detail is wired to MarkdownText
- [#11583](https://github.com/deepseek-ai/deepseek-harness/discussions/11583) [Bug] 桌面端 0.2.1-rc.5：每次启动铸一枚带随机端口的 dsh-auth-* cookie，约 70 次后 Cookie 头达 16 KB → HTTP 431 → 误报 desktop welcome: Web authentication failed，且无法自愈
- [#11586](https://github.com/deepseek-ai/deepseek-harness/discussions/11586) [Bug] dsh-client-ui-deliverables requests /api/changes.summary but no host package serves it (404 console noise)
- [#11258](https://github.com/deepseek-ai/deepseek-harness/discussions/11258) [Bug] tool-call timeout is notify-only: a tool with a declared timeoutMs can hang the whole session past its budget
- [#10949](https://github.com/deepseek-ai/deepseek-harness/discussions/10949) [Bug] 0.2.1-rc.3 静默升级删除安装目录内的用户工作区（~835 MB 数据丢失，不进回收站，无任何提示）
- [#11219](https://github.com/deepseek-ai/deepseek-harness/discussions/11219) [Bug] 0.2.1-rc.3 桌面端：零第三方插件下 host/renderer 循环崩溃（crypto_context.cc:884 / absl raw_hash_map::at / renderer 静默退出）
- [#9402](https://github.com/deepseek-ai/deepseek-harness/discussions/9402) Bug: dsh-llm-deepseek 偶发把工具参数拼成非法 JSON ⇒ MALFORMED_RESPONSE 硬终止（无重试、无原文）
- [#11572](https://github.com/deepseek-ai/deepseek-harness/discussions/11572) [Bug] @deepseek-ai/dsh-plugin-market 插件无法启用：即使设置 disabled: false 仍显示已停用
- [#10003](https://github.com/deepseek-ai/deepseek-harness/discussions/10003) [Bug] Desktop auto-updater fails with "desktop update: task inspection timed out" due to live renderer connection deadlock in installDesktopUpdateTaskControl
- [#11568](https://github.com/deepseek-ai/deepseek-harness/discussions/11568) [Bug] Resume right after a restart can fail with "Unknown agent preset: standard" although the preset exists (transient preset-roster window surfaced as gateway/internal)
- [#11565](https://github.com/deepseek-ai/deepseek-harness/discussions/11565) [Bug] Windows：workspace-write 下所有控制台子进程以 0xC0000142 失败（受限令牌默认 DACL 只含 capability SID）
- [#11555](https://github.com/deepseek-ai/deepseek-harness/discussions/11555) [Bug] 本地认证 cookie 无限累积导致 "desktop welcome: Web authentication failed"
- [#11559](https://github.com/deepseek-ai/deepseek-harness/discussions/11559) [Bug] DSH 0.2.1-rc.5 — "新建对话"复用旧空会话，继承过期的路由与权限配置
- [#11553](https://github.com/deepseek-ai/deepseek-harness/discussions/11553) Bug: Windows「Open In」VS Code / Cursor 打开失败 —— ELECTRON_RUN_AS_NODE 泄漏给被启动的编辑器
- [#10874](https://github.com/deepseek-ai/deepseek-harness/discussions/10874) [Bug] 桌面版认证 cookie 按启动端口命名且 30 天不过期，无界堆积撑爆 16KB 请求头 → host 返回 431 → 启动崩溃循环（desktop welcome: Web authentication failed）
- [#11544](https://github.com/deepseek-ai/deepseek-harness/discussions/11544) [Bug] Settings write fails with an opaque rejection when a plugin install holds the profile lock (2s vs 120s lock budget)
- [#7980](https://github.com/deepseek-ai/deepseek-harness/discussions/7980) [BUG] Desktop: welcome window freezes on "Completing sign in…" after sign-out (stale account frame sent to reopened window)
- [#11377](https://github.com/deepseek-ai/deepseek-harness/discussions/11377) [Bug] DeepSeek Harness desktop returns persistent 502 on account-login channel since Oct 28
- [#11358](https://github.com/deepseek-ai/deepseek-harness/discussions/11358) [Bug]Web RPC Failed
- [#11346](https://github.com/deepseek-ai/deepseek-harness/discussions/11346) [Bug] Desktop app startup failed: 1 required plugin did not activate (v0.2.1-rc.3)
- [#11376](https://github.com/deepseek-ai/deepseek-harness/discussions/11376) [Bug] DeepSeek Harness desktop returns persistent 502 on account-login channel since Oct 28
- [#11465](https://github.com/deepseek-ai/deepseek-harness/discussions/11465) [Bug] 一个工具的非法 JSON Schema 会让整个请求 400，界面静默空白，Agent 无法自救
- [#11380](https://github.com/deepseek-ai/deepseek-harness/discussions/11380) [Bug] Desktop Host aborts with SIGABRT (exit 134) at the ~4 GB V8 heap ceiling; restored long sessions reach it during startup
- [#11519](https://github.com/deepseek-ai/deepseek-harness/discussions/11519) [Bug] 插件管理操作进行中被 HMR 判为已改并停掉，形成永久死锁（0.2.1-rc.4 / 0.2.2-alpha.2）
- [#11523](https://github.com/deepseek-ai/deepseek-harness/discussions/11523) [Bug] Windows ACL sandbox: MSYS binaries die at NtCreateDirectoryObject(\BaseNamedObjects\...) with 0xC0000022 — git push misreports it as a remote error
- [#11518](https://github.com/deepseek-ai/deepseek-harness/discussions/11518) [Bug] QUOTA 终态失败后，subagent-settled 的 followup wake 会消费用户排队消息并触发级联失败
- [#7520](https://github.com/deepseek-ai/deepseek-harness/discussions/7520) [Bug] Switching models mid-session can trigger false pi-ai context overflow
- [#11223](https://github.com/deepseek-ai/deepseek-harness/discussions/11223) [Bug] Windows workspace-write: 0xC0000142 comes from the token default DACL naming a non-restricting capability SID (corrected; follow-up to #8991 / #8067)
- [#10627](https://github.com/deepseek-ai/deepseek-harness/discussions/10627) [Bug] anthropic-messages：网关把缓存读折叠进 input_tokens，导致误判上下文溢出、整轮失败并丢弃完整回答
- [#10988](https://github.com/deepseek-ai/deepseek-harness/discussions/10988) [Bug] Desktop host: dsh-auth-* Cookie name contains random port, causing startup crash (431)
- [#9112](https://github.com/deepseek-ai/deepseek-harness/discussions/9112) [Bug][Desktop][macOS] 窗口完全无法拖动：连标记了 data-window-drag 的 chrome 行也拖不动（0.2.0-rc.2 / Electron 44）
- [#11416](https://github.com/deepseek-ai/deepseek-harness/discussions/11416) [Bug] Windows 桌面版 0.2.1-rc.2→rc.3 更新后启动即崩溃 0x80000003（非系统盘安装路径）

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-10-31T03:41:32.435Z_