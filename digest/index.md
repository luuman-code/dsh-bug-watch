# DSH Bug Watch — 2026-10-14

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 34

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
_（无）_

## 📝 仅报告 — 无人互动
- [#9648](https://github.com/deepseek-ai/deepseek-harness/discussions/9648) [Bug] 过程证据后出现注入消息（turn-trigger）时整轮仍被折叠，最终答案被隐藏
- [#9645](https://github.com/deepseek-ai/deepseek-harness/discussions/9645) [Bug] ui-deliverables: changed-files card promises "Preview in the sidebar" but opens the turn diff — binary/image changes show nothing
- [#9582](https://github.com/deepseek-ai/deepseek-harness/discussions/9582) [Bug] 子代理静默终止 + 工具输出无界注入上下文，导致约 1.09 亿 token 无效消耗、多批次零产出
- [#9583](https://github.com/deepseek-ai/deepseek-harness/discussions/9583) [Bug] 子代理静默终止 + 工具输出无界注入上下文，导致约 1.09 亿 token 无效消耗、多批次零产出
- [#9642](https://github.com/deepseek-ai/deepseek-harness/discussions/9642) [Bug] Desktop Beta on Windows 11: 164 0xC0000005 process exits in 6 days — deterministic renderer crash at +0x2c79569, Host heap corruption, and a crash-free stable-release baseline
- [#9640](https://github.com/deepseek-ai/deepseek-harness/discussions/9640) [Bug] subagent_codex fails with `Product subagent failure (product: Codex; stage: turn; category: product-error)` and no diagnostic
- [#9639](https://github.com/deepseek-ai/deepseek-harness/discussions/9639) [Bug] Session history remains loading after a local opening failure — validated patch
- [#9611](https://github.com/deepseek-ai/deepseek-harness/discussions/9611) [Bug] Removing session_projcache (documented as a non-authoritative cache) makes every session disappear from the sidebar ("No sessions yet")
- [#9637](https://github.com/deepseek-ai/deepseek-harness/discussions/9637) [Bug] Desktop 0.2.0-rc.2 on Windows: renderer keeps one CPU core busy (60-130%) while the client is idle; input lags
- [#9589](https://github.com/deepseek-ai/deepseek-harness/discussions/9589) [Bug] dsh-llm-pi-ai: Codex outages classified PI_AI_ERROR, never retried
- [#9609](https://github.com/deepseek-ai/deepseek-harness/discussions/9609) [Bug] Desktop (Windows): per-record storage loads every record file at once → EMFILE during Host startup (14k session_projcache files)
- [#9619](https://github.com/deepseek-ai/deepseek-harness/discussions/9619) [Bug] 多行 $$ 公式块丢失开首行内容，并把后续正文一路吞成数学源码（渲染为红色原文）
- [#9594](https://github.com/deepseek-ai/deepseek-harness/discussions/9594) [Bug] 整仓 host 构建 OOM：@Remote 签名引用具名 interface 时 typert 发射耗尽 Node 堆（含四组对照与最小复现）
- [#9610](https://github.com/deepseek-ai/deepseek-harness/discussions/9610) [Bug] Desktop: main window stays hidden indefinitely when Host startup stalls — no timeout, no feedback, tray "Open" does nothing
- [#9616](https://github.com/deepseek-ai/deepseek-harness/discussions/9616) [Bug] 已完成轮次的过程折叠会吞掉「工具调用前的正文」——整轮折叠忽略分组已切出的 response 部分（0.2.0-rc.2 / 0.2.1-alpha.2）
- [#9630](https://github.com/deepseek-ai/deepseek-harness/discussions/9630) [Bug] web_fetch collapses consecutive pipes in HTML table cells
- [#8497](https://github.com/deepseek-ai/deepseek-harness/discussions/8497) [Bug][Windows 10] workspace-write 沙箱下所有子进程 0xC0000142（连 cmd.exe 都起不来）— Default DACL 使用 capability SID 所致
- [#8829](https://github.com/deepseek-ai/deepseek-harness/discussions/8829) [Bug] `usage` in the session journal understates input cache-miss vs vendor billing ~26×
- [#8826](https://github.com/deepseek-ai/deepseek-harness/discussions/8826) [Bug] 求助：绑定邮箱后账号分裂，账号历史记录丢失
- [#6841](https://github.com/deepseek-ai/deepseek-harness/discussions/6841) [Bug] 出站 HTTP/2 无开关：undici v8 默认 allowH2=true，H2 会话级故障会拖死 agent 主路径
- [#6959](https://github.com/deepseek-ai/deepseek-harness/discussions/6959) [Bug] llm-deepseek: SSE keep-alives re-arm the idle watchdog forever — a 300s idle timeout actually waited 17.7 min, and a chatty provider can hang a turn unboundedly
- [#8827](https://github.com/deepseek-ai/deepseek-harness/discussions/8827) [Bug] workflow 工具调用永不返回，父 Agent 卡死在 step/start 后无事件
- [#9548](https://github.com/deepseek-ai/deepseek-harness/discussions/9548) Bug report: Windows desktop shell commands fail with 0xC0000142 under workspace-write
- [#7924](https://github.com/deepseek-ai/deepseek-harness/discussions/7924) [Bug] 残留的空 .credentials.yaml.lock 让 web 宿主每次启动都失败：启动读取会话密钥也要拿写锁，而非原子创建留下的空锁不在 master 孤儿锁接管范围内（0.1.7-rc.1 实测，master 477b4f4 核对）
- [#9599](https://github.com/deepseek-ai/deepseek-harness/discussions/9599) [Bug] 桌面版「在编辑器中打开」对 Electron 系编辑器必然失败 —— ELECTRON_RUN_AS_NODE 泄漏到子进程
- [#8352](https://github.com/deepseek-ai/deepseek-harness/discussions/8352) [BUG] 工具输出含未配对 UTF-16 代理项会让整个会话永久 HTTP 400（错误信息无法诊断）
- [#9602](https://github.com/deepseek-ai/deepseek-harness/discussions/9602) [Bug] The job list Clear control cannot dismiss a finished job
- [#9597](https://github.com/deepseek-ai/deepseek-harness/discussions/9597) [Bug] Official DeepSeek Flash SSE fails on both routes; Accept-Encoding: identity restores completion (0.2.0-rc.2)
- [#9596](https://github.com/deepseek-ai/deepseek-harness/discussions/9596) BUG: llm-pi-ai: provider "openrouter" model "@preset/glm5-3flash" needs an api
- [#6441](https://github.com/deepseek-ai/deepseek-harness/discussions/6441) [Bug][WSL2] dsh web freeze: sync reverse DNS in flock libc probe (missing excludeNetwork)
- [#423](https://github.com/deepseek-ai/deepseek-harness/discussions/423) [Bug Report] Windows 工作区：连接后外部创建/移入的子目录永远无法写入（capability ACE 永不补授）
- [#9517](https://github.com/deepseek-ai/deepseek-harness/discussions/9517) [Bug] 0.2.0-rc.2：dsh web 的 JS 主线程常驻 1 核、进程 2.35 核 —— 会话冷读 + 投影缓存 + describe 无缓存（含线程级取证）
- [#1697](https://github.com/deepseek-ai/deepseek-harness/discussions/1697) Bug: installing any plugin that depends on @deepseek-ai/dsh-tools breaks every tool call (Cannot read properties of undefined (reading 'prepare'))
- [#9581](https://github.com/deepseek-ai/deepseek-harness/discussions/9581) [Bug] 手动 /compact 在反向代理后固定 ~10s 被中止（"Request was aborted"）：阻塞式单次 Remote 调用缺少心跳

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-10-14T03:05:38.502Z_