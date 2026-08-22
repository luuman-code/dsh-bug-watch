# DSH Bug Watch — 2026-08-22

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 56

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
_（无）_

## 📝 仅报告 — 无人互动
- [#3797](https://github.com/deepseek-ai/deepseek-harness/discussions/3797) [bug] 打开大会话时 history 页把全部 assistant/chunk 送进浏览器，UI 看起来像没回复 — 附可 cherry-pick 修复
- [#3839](https://github.com/deepseek-ai/deepseek-harness/discussions/3839) [Bug] Web UI 输入框中按 Backspace 删除键会删除整个输入框内容
- [#3923](https://github.com/deepseek-ai/deepseek-harness/discussions/3923) [BUG] dsh-llm-pi-ai: tool_call arguments O(n²) reparse in long sessions causes 500 Upstream gateway error
- [#3915](https://github.com/deepseek-ai/deepseek-harness/discussions/3915) [BUG] 无法安装更新
- [#3837](https://github.com/deepseek-ai/deepseek-harness/discussions/3837) [Bug] Web UI 输入框文字不可见，需要选中高亮才能显示
- [#3857](https://github.com/deepseek-ai/deepseek-harness/discussions/3857) Bug: DeepSeek 思考模式 + tool calls → 400 'reasoning_content must be passed back'
- [#3911](https://github.com/deepseek-ai/deepseek-harness/discussions/3911) [Bug] run_code 里调用 pwsh 杀进程后会话卡死，工具调用永不返回
- [#487](https://github.com/deepseek-ai/deepseek-harness/discussions/487) Bug: session materialization fails with EACCES on Android (hard links forbidden) — patch included
- [#3908](https://github.com/deepseek-ai/deepseek-harness/discussions/3908) [BUG] Tool Result 内容类型契约不一致，导致 post-tool LLM step 崩溃：content.some is not a function
- [#3128](https://github.com/deepseek-ai/deepseek-harness/discussions/3128) [Bug] dsh-llm-pi-ai ignores Retry-After when retrying — TPM-limited retries always fail
- [#3906](https://github.com/deepseek-ai/deepseek-harness/discussions/3906) [Bug] dsh web 长会话运行约 6 小时后以 0xC0000409 崩溃退出（崩溃前 Windows 记录 node.exe 内存泄漏预警）
- [#1944](https://github.com/deepseek-ai/deepseek-harness/discussions/1944) [Bug] Compaction request misses provider prefix cache entirely — summarizer doesn't inherit reasoningEffort / adds maxTokens
- [#1624](https://github.com/deepseek-ai/deepseek-harness/discussions/1624) Bug: `npx @deepseek-ai/dsh web` fails silently on MSYS2 (exit code 127)
- [#3902](https://github.com/deepseek-ai/deepseek-harness/discussions/3902) Bug: macOS arm64 bundled runtime exe (deepseek-harness-runtime-bin 0.1.0rc6) fails to boot — node-pty pty.node missing from SEA snapshot
- [#3899](https://github.com/deepseek-ai/deepseek-harness/discussions/3899) [Bug] dsh-tools Symbol 实例分裂导致工具调用崩溃，且依赖不匹配时整个 dsh 直接不可用
- [#2990](https://github.com/deepseek-ai/deepseek-harness/discussions/2990) [Bug] Windows 下 spawn 的 bash 子进程启动即崩时，harness 因未捕获的 ENOENT 整体崩溃
- [#3867](https://github.com/deepseek-ai/deepseek-harness/discussions/3867) [Bug] Windows PTC/Code Mode (run_code) cannot spawn any subprocess — bash/glob/grep fail with 0xC0000142
- [#3021](https://github.com/deepseek-ai/deepseek-harness/discussions/3021) [Bug] rc.7: reasoning (thinking) intermittently stored and rendered as text blocks - thinking leaks into the visible transcript
- [#3877](https://github.com/deepseek-ai/deepseek-harness/discussions/3877) Bug: sandbox escalation rejects non-widening sandbox_permissions, causing tool-calling error spam with non-DeepSeek / custom models
- [#3872](https://github.com/deepseek-ai/deepseek-harness/discussions/3872) [Bug] 打断后的迟到流式事件破坏会话日志序号连续性，整个会话变得无法读取
- [#3866](https://github.com/deepseek-ai/deepseek-harness/discussions/3866) [Bug Report] 容器内 isWsl() 误判为 WSL 环境 → 点击"打开文件"报错 spawn wslpath ENOENT`
- [#3864](https://github.com/deepseek-ai/deepseek-harness/discussions/3864) [BUG] dsh plugin add 在 Windows 上会把含空格的绝对路径拆成多个依赖包（如 Program Files 路径）
- [#3854](https://github.com/deepseek-ai/deepseek-harness/discussions/3854) Bug: ask_user_question is not persistent — any user input aborts it (ASK_ABORTED) before the question is ever shown
- [#3222](https://github.com/deepseek-ai/deepseek-harness/discussions/3222) [Bug] HTTP 403 授权拒绝被归类为 AUTH，UI 显示 "API key is invalid"，原始错误不可见
- [#450](https://github.com/deepseek-ai/deepseek-harness/discussions/450) [Bug Report] 分叉（fork）会话丢失父会话的读取观察状态，edit 工具系统性报 "edit requires reading ... first"
- [#3786](https://github.com/deepseek-ai/deepseek-harness/discussions/3786) [Bug] npx @deepseek-ai/dsh web 无限卡死：npm 依赖解析死循环（CPU 100%、零网络流量、换镜像无效）
- [#3849](https://github.com/deepseek-ai/deepseek-harness/discussions/3849) [Bug Report] 会话中断恢复后合成收尾事件与续写事件 seq 重叠，导致日志损坏、历史无法加载
- [#3774](https://github.com/deepseek-ai/deepseek-harness/discussions/3774) [Bug Report]「繁忙时 Enter 键行为」不生效
- [#3843](https://github.com/deepseek-ai/deepseek-harness/discussions/3843) [bug] 0.1.1-rc1更新bug
- [#3835](https://github.com/deepseek-ai/deepseek-harness/discussions/3835) [BUG] git 源插件安装后 bundle 组合异常，工具层空结果致会话循环且恢复后无响应
- [#3812](https://github.com/deepseek-ai/deepseek-harness/discussions/3812) [BUG] JavaScript heap out of memory
- [#3822](https://github.com/deepseek-ai/deepseek-harness/discussions/3822) Bug: streamed tool_call id/name clobbered by empty strings from OpenAI-compatible gateways (llm-deepseek), breaks session reload
- [#1603](https://github.com/deepseek-ai/deepseek-harness/discussions/1603) [Bug] WSL 禁用 interop 时「打开配置文件/打开目录」报 path open failed: spawn powershell.exe ENOENT
- [#2388](https://github.com/deepseek-ai/deepseek-harness/discussions/2388) [Bug] developer role rejected (HTTP 400) by custom domestic (China) OpenAI-compatible providers
- [#1500](https://github.com/deepseek-ai/deepseek-harness/discussions/1500) Bug: streamed tool-call deltas with empty id/name overwrite valid values
- [#2587](https://github.com/deepseek-ai/deepseek-harness/discussions/2587) [Bug] llm-pi-ai: hand-declared routes cannot disable the OpenAI "developer" system-prompt role — reasoning requests 400 on gateways that only accept "system" (e.g. Alibaba Cloud Model Studio / 阿里云百炼)
- [#3808](https://github.com/deepseek-ai/deepseek-harness/discussions/3808) [BUG] rc.8 复现:prepare 崩溃后会话永久卡死 400
- [#3807](https://github.com/deepseek-ai/deepseek-harness/discussions/3807) [Bug] llm-deepseek loses tool name when later deltas repeat an empty name
- [#3802](https://github.com/deepseek-ai/deepseek-harness/discussions/3802) [bug] 第三方插件写入的 session event 会让会话永久打不开
- [#1695](https://github.com/deepseek-ai/deepseek-harness/discussions/1695) [BUG] 工具执行中途崩溃后会话永久卡死：DeepSeek 400 "insufficient tool messages"（rc.6）
- [#2751](https://github.com/deepseek-ai/deepseek-harness/discussions/2751) [Bug] 插件 Config 非 Standard Schema 时抛裸 TypeError 无修复指引，建议提供 dsh doctor 诊断命令
- [#3799](https://github.com/deepseek-ai/deepseek-harness/discussions/3799) [BUG]Chrome 环境下开启 Google 自带翻译并强制翻译，会导致对话框无法输入超过一个字符，并且在删除对话框内容后会导致对话框消失
- [#3604](https://github.com/deepseek-ai/deepseek-harness/discussions/3604) [Bug] llm-deepseek: OpenAI 兼容端点的续传分片带空串 id/name，流式工具调用全部变成 unknown tool ""
- [#3464](https://github.com/deepseek-ai/deepseek-harness/discussions/3464) [Bug] All tool calls fail with UNKNOWN_TOOL (unknown tool "") when using Bailian (DashScope) deepseek-v4-flash as provider
- [#3636](https://github.com/deepseek-ai/deepseek-harness/discussions/3636) Bug: profile agent-presets custom roots get overwritten by the shipped root after restart
- [#3782](https://github.com/deepseek-ai/deepseek-harness/discussions/3782) Bug: negative messageTokens after compaction breaks the session (schema.parse runs after state commit; fix prepared)
- [#3780](https://github.com/deepseek-ai/deepseek-harness/discussions/3780) [BUG] Native Windows folder picker truncates path at CJK chars with 0x00 low byte in UTF-16LE (e.g. 开 U+5F00), causing `workspace.create` ENOENT
- [#3749](https://github.com/deepseek-ai/deepseek-harness/discussions/3749) BUG: 超出工作区（Windows·SMB映射驱动器）File operations judged as "out of workspace"
- [#3751](https://github.com/deepseek-ai/deepseek-harness/discussions/3751) Bug: TOOL_RUNTIME_SCHEDULER symbol mismatch crashes every subagent tool call (fix included)
- [#3631](https://github.com/deepseek-ai/deepseek-harness/discussions/3631) [BUG][Update] A session log ending in aborted turns can no longer be fully served by the history read path — impact upgrade: silent, routine in scheduled/unattended runs, hides the session's progress record (self-review of our own bug report)
- [#3760](https://github.com/deepseek-ai/deepseek-harness/discussions/3760) [Bug] 重启后孤儿会话（磁盘存在但未登记工作区）不再出现在侧栏
- [#3542](https://github.com/deepseek-ai/deepseek-harness/discussions/3542) [Bug] Manual `/compact` aborts after 5–15s with "DeepSeek request aborted by caller" — 22/23 attempts fail (rc.7 & rc.8)
- [#3740](https://github.com/deepseek-ai/deepseek-harness/discussions/3740) [Bug] @ mention menu takes 3-4s per keystroke: session-reference titles re-decompress every persisted session log (archived/subagent sessions included), no cache, no debounce
- [#3735](https://github.com/deepseek-ai/deepseek-harness/discussions/3735) [Bug] Agent can enter a recursive retry loop after deterministic pwsh argument validation failures
- [#1706](https://github.com/deepseek-ai/deepseek-harness/discussions/1706) [Bug] Web GUI cannot open very large sessions — session.history pages are unbounded by event count
- [#3717](https://github.com/deepseek-ai/deepseek-harness/discussions/3717) [Bug Report] 自定义agent删除后， 界面无法恢复为默认agent

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-08-22T00:51:31.373Z_