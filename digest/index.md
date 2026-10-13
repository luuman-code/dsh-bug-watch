# DSH Bug Watch — 2026-10-13

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 47

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
_（无）_

## 📝 仅报告 — 无人互动
- [#9510](https://github.com/deepseek-ai/deepseek-harness/discussions/9510) [Bug] workspace-write: 所有 shell 命令因预授权缺 WRITE_OWNER 失败 (SetNamedSecurityInfoW Win32 5)
- [#9261](https://github.com/deepseek-ai/deepseek-harness/discussions/9261) [Bug]: dsh plugin add 在 Windows 上挂起不退出，profile bundles 永不 reconcile（插件"装上了但不加载"）
- [#9518](https://github.com/deepseek-ai/deepseek-harness/discussions/9518) [Bug] 档位读数在会话投影空窗期回退全局默认模型，导致两套刻度反复横跳（约 1 Hz）
- [#9466](https://github.com/deepseek-ai/deepseek-harness/discussions/9466) [BUG] dsh plugin add 在 pnpm 存在待决定的构建脚本时必然报失败（ERR_PNPM_IGNORED_BUILDS），且 CLI 没有解决入口
- [#9517](https://github.com/deepseek-ai/deepseek-harness/discussions/9517) [Bug] 0.2.0-rc.2：dsh web 的 JS 主线程常驻 1 核、进程 2.35 核 —— 会话冷读 + 投影缓存 + describe 无缓存（含线程级取证）
- [#9487](https://github.com/deepseek-ai/deepseek-harness/discussions/9487) [Bug] Windows: Ctrl+C 退出 dsh web 会连带关闭由它拉起的整个浏览器(全部窗口与标签页)
- [#9455](https://github.com/deepseek-ai/deepseek-harness/discussions/9455) [Bug] [Windows] 「显示文件位置」不打开文件夹、按钮变灰后再也无法点击：explorer.exe 子进程等待没有超时（0.2.0-rc.2）
- [#8794](https://github.com/deepseek-ai/deepseek-harness/discussions/8794) [Bug][0.2.0-rc.2] web_search: one failed query aborts the other queries and discards their (billed) results
- [#9577](https://github.com/deepseek-ai/deepseek-harness/discussions/9577) [Bug] cot-translation 入口在宿主 Remote 尚未注册时把整次 web boot 打崩（首次 limits 返回 gateway/service-unavailable）
- [#9575](https://github.com/deepseek-ai/deepseek-harness/discussions/9575) [Bug Report] storage-json: writeAtomic 的 rename 在 Windows 上因目标文件被占用返回 EPERM，且失败即 fatal 终止宿主
- [#9559](https://github.com/deepseek-ai/deepseek-harness/discussions/9559) [Bug Report] windows-acl: Low integrity label (and allow ACE) not applied to existing subfolders, so the confined child can write only the workspace root
- [#9499](https://github.com/deepseek-ai/deepseek-harness/discussions/9499) [Bug] e2e.yml 定时任务在 Fork 仓库中触发并因缺少 Secret 报错
- [#8185](https://github.com/deepseek-ai/deepseek-harness/discussions/8185) [Bug][0.1.7-rc.2] 点击含相对路径（../）的 Markdown 文件链接报 sidebarRight: no registered tab type claims
- [#9266](https://github.com/deepseek-ai/deepseek-harness/discussions/9266) [Bug][Windows Desktop 0.2.0-rc.2] Generic transport failure persists across reinstall/reset due to Node CA, stale state, and Electron UI cache
- [#810](https://github.com/deepseek-ai/deepseek-harness/discussions/810) [Bug] Windows: sandboxed pwsh always dies with 0xC0000142 under console-less host (desktop launch path)
- [#7502](https://github.com/deepseek-ai/deepseek-harness/discussions/7502) [BUG] web_search always fails: "DeepSeek returned an unprocessable response body" (brotli not decoded under custom undici dispatcher)
- [#1944](https://github.com/deepseek-ai/deepseek-harness/discussions/1944) [Bug] Compaction request misses provider prefix cache entirely — summarizer doesn't inherit reasoningEffort / adds maxTokens
- [#9523](https://github.com/deepseek-ai/deepseek-harness/discussions/9523) [bug] Agent Teams 与直接委派共存：list_agents 同名冲突、wait_agent 语义错位（附可复现证据与补丁）
- [#5976](https://github.com/deepseek-ai/deepseek-harness/discussions/5976) [Bug] Agent 在超长上下文 + max reasoning effort 下陷入思考退化循环：回合零产出、无自动熔断，需手动中止（v4.1-flash；同配置 v4-flash 3000+ 步未复发）
- [#9552](https://github.com/deepseek-ai/deepseek-harness/discussions/9552) [Bug] 回归：0.2.0-rc.2 起，删除子代理会话目录不再从 UI 清除该条目
- [#9555](https://github.com/deepseek-ai/deepseek-harness/discussions/9555) [Bug] ui-layout: 全屏右栏未隐藏被遮住的中栏（仍在绘制与焦点顺序里）
- [#1557](https://github.com/deepseek-ai/deepseek-harness/discussions/1557) [bug]未分组行的无效加号仍在（0.2.0-rc.2 复核 + 一行修复）
- [#1202](https://github.com/deepseek-ai/deepseek-harness/discussions/1202) [Bug][Web GUI] Failed subagents stay visible in the UI as if still running — non-terminal ready state, no way to clear them from the UI
- [#9550](https://github.com/deepseek-ai/deepseek-harness/discussions/9550) Bug: ctx.skills.register() does not default `source`, so plugin-registered skills fail to load
- [#9545](https://github.com/deepseek-ai/deepseek-harness/discussions/9545) [Bug] 大会话把会话卡死：运行时 OOM 退出 134、改小后历史加载静默失败、上下文超出模型窗口时压缩死循环
- [#9515](https://github.com/deepseek-ai/deepseek-harness/discussions/9515) [Bug][Windows] 工具调用永久卡死：runner 已 fork、IPC 已连上，但 start 请求丢失 —— WindowsJobRunner 无启动超时、pendingCalls 无看门狗（0.1.7-rc.2 → 0.2.1-alpha.2 均复现）
- [#9542](https://github.com/deepseek-ai/deepseek-harness/discussions/9542) [Bug][Windows] Case mismatch in node_modules causes duplicate ESM instances and profile settings save failure
- [#9502](https://github.com/deepseek-ai/deepseek-harness/discussions/9502) [Bug][0.2.1-alpha.2] `server_error` still bypasses retry on current master; validated narrow `SERVER` fix
- [#9506](https://github.com/deepseek-ai/deepseek-harness/discussions/9506) [Bug] TextRetainer drops U+FEFF at window starts and underreports omitted bytes
- [#9235](https://github.com/deepseek-ai/deepseek-harness/discussions/9235) [Bug][WebUI] WebUI Lexical 0.49.0 中文 IME composition 阶段 DOM 重渲染打断拼音组字，拼音直接上屏、文字乱序重复
- [#9524](https://github.com/deepseek-ai/deepseek-harness/discussions/9524) [Bug] 思考通道（reasoning）退化：中文思考下「最短独立句」自我复制，flash 系易发
- [#8842](https://github.com/deepseek-ai/deepseek-harness/discussions/8842) [Bug] Every path inside `app.asar` fails: "Cannot mix BigInt and other types" (`fs-local` probe assumes BigInt stats)
- [#8832](https://github.com/deepseek-ai/deepseek-harness/discussions/8832) [Bug] 一条 turn/end 的 reason 为 null 会让整个会话列表变空白（Agent Team 场景，附定位与修复建议）
- [#9321](https://github.com/deepseek-ai/deepseek-harness/discussions/9321) [Bug] TLS 证书校验失败仅显示 TRANSPORT，界面缺少具体原因
- [#9322](https://github.com/deepseek-ai/deepseek-harness/discussions/9322) [Bug] Windows 沙箱临时目录缺失后，同一会话内所有命令持续失败
- [#9371](https://github.com/deepseek-ai/deepseek-harness/discussions/9371) [Bug][tool-fs][0.2.1-alpha.2] write/edit result-card diff runs untimed on the Host thread; an 8,000-line overwrite freezes every session for ~8 s
- [#9374](https://github.com/deepseek-ai/deepseek-harness/discussions/9374) [Bug][mcp-resources][0.2.1-alpha.2] list_mcp_resources never returns nextCursor and fails on servers with more than 64 pages
- [#9368](https://github.com/deepseek-ai/deepseek-harness/discussions/9368) [Bug][Windows Desktop 0.2.0-rc.2] 插件引入旧版 dsh-tools 后启动失败：agent-loop 缺少 tools
- [#9392](https://github.com/deepseek-ai/deepseek-harness/discussions/9392) [Bug]会话创建在播种（seed）阶段失败时会留下静默空壳，UI 表现为「点击新建无反应」
- [#9373](https://github.com/deepseek-ai/deepseek-harness/discussions/9373) [Bug][http-proxy][0.2.1-alpha.2] A blank proxy variable makes every Node child connect directly while the host proxies
- [#9512](https://github.com/deepseek-ai/deepseek-harness/discussions/9512) [Bug] 重试倒计时重进会话后重置；上下文占比在等待重试时消失（framework 0.2.0-rc.2）
- [#9498](https://github.com/deepseek-ai/deepseek-harness/discussions/9498) [Bug] Wheel-up in the transcript snaps back to the bottom (desktop 0.22.4 / dsh 0.2.0-rc.2)
- [#9402](https://github.com/deepseek-ai/deepseek-harness/discussions/9402) Bug: dsh-llm-deepseek 偶发把工具参数拼成非法 JSON ⇒ MALFORMED_RESPONSE 硬终止（无重试、无原文）
- [#9496](https://github.com/deepseek-ai/deepseek-harness/discussions/9496) [Bug] macOS 26 desktop app displays Chinese text as boxes with question marks (CJK tofu), possibly related to renderer state
- [#9491](https://github.com/deepseek-ai/deepseek-harness/discussions/9491) [Bug] A bot permanently stops replying in one long-lived group: group turns are never dispatched (no model call, no error), while DMs and new groups still work
- [#9056](https://github.com/deepseek-ai/deepseek-harness/discussions/9056) [BUG] subagent 派出的子代理不可寻址：send_message / interrupt_agent 均报 active teammate not found，父 Agent 无法终止它
- [#9247](https://github.com/deepseek-ai/deepseek-harness/discussions/9247) [Bug] attachment-local: durable-home walk reaches the filesystem root — image attachments fail with EACCES on Android (fix included)

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-10-13T04:57:46.416Z_