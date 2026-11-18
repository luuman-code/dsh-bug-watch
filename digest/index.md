# DSH Bug Watch — 2026-11-18

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 51

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
- [#11337](https://github.com/deepseek-ai/deepseek-harness/discussions/11337) **[Bug] Benign Chinese ops prompt → stream ends with stop reason "refusal" → client reports MALFORMED_RESPONSE (deepseek-flash)**<br/>  分类：Q&A · 标签：— · 最近更新：2026-11-18
- [#13411](https://github.com/deepseek-ai/deepseek-harness/discussions/13411) **[Bug] Windows：在应用中打开 → 文件资源管理器 的窗口被建在屏幕外（物理 0x7FFF）/ Explorer window created outside every monitor**<br/>  分类：Q&A · 标签：— · 最近更新：2026-11-17
- [#9915](https://github.com/deepseek-ai/deepseek-harness/discussions/9915) **[Bug] 配置 API Key 后，无法切换回账号登录使用**<br/>  分类：Q&A · 标签：— · 最近更新：2026-11-17

## 📝 仅报告 — 无人互动
- [#13655](https://github.com/deepseek-ai/deepseek-harness/discussions/13655) [BUG]桌面端更新 0.2.2-rc.1 → rc.3 在安装阶段必然失败（MoveFileExW error 5），静默回滚
- [#9718](https://github.com/deepseek-ai/deepseek-harness/discussions/9718) [Bug] Windows desktop: "browser time zone is unavailable" blocks chat with British Columbia Standard Time
- [#13648](https://github.com/deepseek-ai/deepseek-harness/discussions/13648) [Bug] 在非开头的地方用斜杠指令，计划选项消失了 Using the slash in a non-initial position causes the `plan` option to disappear.
- [#13531](https://github.com/deepseek-ai/deepseek-harness/discussions/13531) [bug]read 工具的窗口输出可能保留整份输入的 V8 底层字符串从而导致内存爆炸
- [#13647](https://github.com/deepseek-ai/deepseek-harness/discussions/13647) [Bug] max-tokens 截断后发送「继续」是无状态重跑：reasoning-only 输出时 banner 称“已保留”但续传请求几乎不带回任何上文（日志实测）
- [#11577](https://github.com/deepseek-ai/deepseek-harness/discussions/11577) [Bug][0.2.1-rc.5] 单条 tool_use 参数非法即整轮硬失败：MALFORMED_RESPONSE 仍不在默认重试码（汇总 #7705/#8920/#8976/#9402/#9503/#10406，附 rc.5 复现与补丁建议）
- [#13613](https://github.com/deepseek-ai/deepseek-harness/discussions/13613) [Bug] History snapshots resend settled assistant stream payloads on every open/reconnect (~44% avoidable bytes)
- [#9797](https://github.com/deepseek-ai/deepseek-harness/discussions/9797) [Bug] WebSocket heartbeat defaults (2s interval + 2 missed) tear down connections on mobile / high-latency networks → ~12s reconnect loop
- [#13640](https://github.com/deepseek-ai/deepseek-harness/discussions/13640) [Bug] Windows desktop updater always fails signature verification: LiteralPath comparison is case-sensitive【Windows 桌面端应用内更新必然失败：签名校验用区分大小写的方式比较路径（LiteralPath of C:\... is different than c:\...）】
- [#12098](https://github.com/deepseek-ai/deepseek-harness/discussions/12098) [Bug][Desktop 0.2.1-rc.5] Startup fatal "bad port": OS-assigned host port can land on the Fetch spec's forbidden-port list
- [#13638](https://github.com/deepseek-ai/deepseek-harness/discussions/13638) [Bug] ask_user_question 自激循环：工具集中途丢失后，模型把「执行」降级成「提问」
- [#13623](https://github.com/deepseek-ai/deepseek-harness/discussions/13623) [Bug] dsh-hmr: moduleGraph() calls pathToFileURL(undefined) while walking require.cache — every link-plugin hot reload degrades to "restart required"
- [#13581](https://github.com/deepseek-ai/deepseek-harness/discussions/13581) [Bug] Reinstalling a local-linked plugin from npm fails with EPERM — uninstall leaves a stale junction in node_modules
- [#9589](https://github.com/deepseek-ai/deepseek-harness/discussions/9589) [Bug] dsh-llm-pi-ai: Codex outages classified PI_AI_ERROR, never retried
- [#13292](https://github.com/deepseek-ai/deepseek-harness/discussions/13292) [Bug] Agent Teams missing after update: profile plugins 0.2.1-rc.3 vs host 0.2.2-rc.3
- [#13374](https://github.com/deepseek-ai/deepseek-harness/discussions/13374) [Bug] Desktop update can drop third-party plugin registration and block recovery / 桌面版更新可能丢失第三方插件登记并阻塞恢复
- [#13614](https://github.com/deepseek-ai/deepseek-harness/discussions/13614) [Bug] Request body rejected with 400 "unexpected end of hex escape" when the conversation carries an unpaired UTF-16 surrogate
- [#12058](https://github.com/deepseek-ai/deepseek-harness/discussions/12058) [Bug] 新建对话复用旧空 Session，导致子代理模型白名单使用过期设置
- [#13628](https://github.com/deepseek-ai/deepseek-harness/discussions/13628) [BUG] 用量卡片会随着输出文本往上移动
- [#13624](https://github.com/deepseek-ai/deepseek-harness/discussions/13624) [BUG]Reusing a blank Session carries over a stale subagent allowlist, and one entry point creates blank Sessions without bound
- [#11830](https://github.com/deepseek-ai/deepseek-harness/discussions/11830) [Bug] Desktop host aborts with "JavaScript heap out of memory" (~2.9 GB) and the 4 GB heap cap cannot be raised from outside
- [#13212](https://github.com/deepseek-ai/deepseek-harness/discussions/13212) [Bug] Skill catalog silently drops an unresolvable entry and publishes the truncated list as complete
- [#6098](https://github.com/deepseek-ai/deepseek-harness/discussions/6098) [bug][http-proxy] 导出给子进程的 NO_PROXY 携带方括号条目 [::1],Python httpx 直接拒收整个变量(0.1.5-rc.1 复现)
- [#7803](https://github.com/deepseek-ai/deepseek-harness/discussions/7803) [Bug] Web 输入框：微软拼音打中文出现拼音落框、候选词错乱，换输入法即恢复（Lexical 0.49.0）
- [#13600](https://github.com/deepseek-ai/deepseek-harness/discussions/13600) [Bug] cot-translation 仍会翻译中文思考链，且偶尔把中文译成英文（0.2.2-rc.3，deepseek-account）
- [#13601](https://github.com/deepseek-ai/deepseek-harness/discussions/13601) [bug]DSH 设置中添加新模型的时候丢失输入模态
- [#12809](https://github.com/deepseek-ai/deepseek-harness/discussions/12809) [Bug] usage 基线与粗估保留预算不一致，导致每步重复压缩新摘要；上下文总量与分项不一致
- [#13533](https://github.com/deepseek-ai/deepseek-harness/discussions/13533) [Bug] Desktop 0.2.2-rc.3 fails to boot on Windows 11 — bootstrap RPC gets ECONNRESET, window shows "DeepSeek Harness 无法使用"
- [#13513](https://github.com/deepseek-ai/deepseek-harness/discussions/13513) [Bug] Windows 火绒误报 Trojan/PS.PsLoader.A：file-applications-windows 生成的 associations.ps1 触发行为启发式（累计 17 次）
- [#13530](https://github.com/deepseek-ai/deepseek-harness/discussions/13530) [Bug][0.2.0-rc.2] 导入/重建历史的新会话缺少 system 头，下一次发言即写坏日志，重新加载报 "system/message requires a protected first surface head"
- [#5976](https://github.com/deepseek-ai/deepseek-harness/discussions/5976) [Bug] Agent 在超长上下文 + max reasoning effort 下陷入思考退化循环：回合零产出、无自动熔断，需手动中止（v4.1-flash；同配置 v4-flash 3000+ 步未复发）
- [#13588](https://github.com/deepseek-ai/deepseek-harness/discussions/13588) [Bug] opencode-go 的自定义 provider 缺少 x-opencode-session 请求头，导致目录外模型（含全部免费模型）必然 400
- [#8653](https://github.com/deepseek-ai/deepseek-harness/discussions/8653) Bug: 模型输出空 id 的 tool-call 会导致会话永久卡死（format v4 tool/result ... requires toolCallId matching its tool source）
- [#13478](https://github.com/deepseek-ai/deepseek-harness/discussions/13478) [Bug] 无 usage 的中断答复覆盖 TokenMeter 用量锚点，导致上下文压力估算骤降
- [#13580](https://github.com/deepseek-ai/deepseek-harness/discussions/13580) [Bug] Desktop Host crashes during profile-resolution Worker startup
- [#13333](https://github.com/deepseek-ai/deepseek-harness/discussions/13333) [BUG] DSH Desktop 0.2.2-rc.3 启动崩溃分析报告
- [#11196](https://github.com/deepseek-ai/deepseek-harness/discussions/11196) [BUG] `experimental-auto-review` sends a hardcoded `temperature: 0` and disables every tool call on models that only accept `temperature=1`
- [#12626](https://github.com/deepseek-ai/deepseek-harness/discussions/12626) [Bug] DeepSeek 长会话 400 INVALID_REQUEST：供应商报错体被吞、contextWindow 声明 1M 导致压缩不触发
- [#13485](https://github.com/deepseek-ai/deepseek-harness/discussions/13485) [Bug] llm-deepseek：providerError / providerErrorDetail 丢弃字符串形态的 error 响应体，吞掉报错信息并使上下文超限/配额分类失效（0.2.2-rc.3）
- [#13542](https://github.com/deepseek-ai/deepseek-harness/discussions/13542) [Bug][Desktop] 0.2.2-rc.3 Windows：Host 就绪后首个 welcome RPC 遇 ECONNRESET 即被判致命，启动反复失败（禁用第三方插件无效）
- [#13568](https://github.com/deepseek-ai/deepseek-harness/discussions/13568) [Bug] thinking-only 回复被判成功：用户只看到折叠思考块，无回答气泡且不触发重试
- [#12214](https://github.com/deepseek-ai/deepseek-harness/discussions/12214) Bug Report: `webServer` route not released on bundle remove/reinstall → duplicate-route activation failure
- [#13516](https://github.com/deepseek-ai/deepseek-harness/discussions/13516) [Bug] DeepSeek Messages 适配器将工具参数 JSON 抖动当成错误
- [#13158](https://github.com/deepseek-ai/deepseek-harness/discussions/13158) [Bug] 会话包含 NUL（U+0000）字符时，复制为 Markdown 会静默截断剪贴板内容
- [#12596](https://github.com/deepseek-ai/deepseek-harness/discussions/12596) [Bug] dsh web auto-exits with SIGSEGV (signal 11) while idle on 0.2.2-rc.1
- [#12581](https://github.com/deepseek-ai/deepseek-harness/discussions/12581) [Bug] Memory exhaustion from high-frequency dsh-subprocess spawning (546 in 27 min, mostly git) on dsh 0.2.2-rc.1
- [#10614](https://github.com/deepseek-ai/deepseek-harness/discussions/10614) [BUG] 手动中断任务后，后台作业仍持续运行 /Background Jobs Continue Running After Interrupting a Task
- [#10248](https://github.com/deepseek-ai/deepseek-harness/discussions/10248) [BUG] PC 客户端与 Web 环境下，会话反馈提交失败

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-11-18T05:35:53.327Z_