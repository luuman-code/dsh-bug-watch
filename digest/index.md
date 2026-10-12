# DSH Bug Watch — 2026-10-12

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 37

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
- [#9404](https://github.com/deepseek-ai/deepseek-harness/discussions/9404) **[Bug] dsh v0.2.1-alpha.2: 达到 40% 上下文（约 37.9k/96k）时触发连续/疯狂的上下文压缩死循环**<br/>  分类：Q&A · 标签：— · 最近更新：2026-10-11

## 📝 仅报告 — 无人互动
- [#8812](https://github.com/deepseek-ai/deepseek-harness/discussions/8812) [Bug] 0.2.0-rc.2: tool-result pruner appends replacement tool/result outside any open turn, so the reader rejects a session its own writer produced
- [#9402](https://github.com/deepseek-ai/deepseek-harness/discussions/9402) Bug: dsh-llm-deepseek 偶发把工具参数拼成非法 JSON ⇒ MALFORMED_RESPONSE 硬终止（无重试、无原文）
- [#9466](https://github.com/deepseek-ai/deepseek-harness/discussions/9466) [BUG] dsh plugin add 在 pnpm 存在待决定的构建脚本时必然报失败（ERR_PNPM_IGNORED_BUILDS），且 CLI 没有解决入口
- [#8832](https://github.com/deepseek-ai/deepseek-harness/discussions/8832) [Bug] 一条 turn/end 的 reason 为 null 会让整个会话列表变空白（Agent Team 场景，附定位与修复建议）
- [#9462](https://github.com/deepseek-ai/deepseek-harness/discussions/9462) [Bug] Desktop 0.2.0-rc.2: composer 输入栏在会话进行中消失，刷新前无法恢复
- [#9434](https://github.com/deepseek-ai/deepseek-harness/discussions/9434) [Bug] opencode-go/deepseek-v4.1-flash: prompt_tokens + max_tokens > 2^20 时上游 400，错误体被截成 31 字节（UI 显示 "400 status code (no body)"），可用上下文只剩 63%
- [#9455](https://github.com/deepseek-ai/deepseek-harness/discussions/9455) [Bug] [Windows] 「显示文件位置」不打开文件夹、按钮变灰后再也无法点击：explorer.exe 子进程等待没有超时（0.2.0-rc.2）
- [#9156](https://github.com/deepseek-ai/deepseek-harness/discussions/9156) [Bug] Conversation pane goes blank on all sessions — TypeError: Cannot read properties of null (reading 'kind')
- [#6184](https://github.com/deepseek-ai/deepseek-harness/discussions/6184) [Bug] /compact reports transport failures as "could not produce a useful summary"
- [#9064](https://github.com/deepseek-ai/deepseek-harness/discussions/9064) [Bug] session-query-sqlite: CJK substrings are not searchable, and one unreadable Session fails every search
- [#9416](https://github.com/deepseek-ai/deepseek-harness/discussions/9416) [Bug] 工作区不可写问题可能原因：低完整性标签没有铺到已存在的子目录：同一个机制导致的三种故障 / workspace-write writes fail in every pre-existing subdirectory: the Low-integrity label is never applied to objects that already existed — one mechanism behind three failure modes
- [#9403](https://github.com/deepseek-ai/deepseek-harness/discussions/9403) [Bug] Error "API key is invalid" persiste con saldo recargado en la versión 0.2.0-rc.2 en Windows
- [#8858](https://github.com/deepseek-ai/deepseek-harness/discussions/8858) [Bug] Windows：受限权限档（read-only / workspace-write）下持久终端无法启动
- [#6737](https://github.com/deepseek-ai/deepseek-harness/discussions/6737) [Bug] web_fetch 在 fake-ip（198.18.0.0/15）环境下对所有站点都抛 WEB_BLOCKED_URL，且无配置可放宽地址预检
- [#9437](https://github.com/deepseek-ai/deepseek-harness/discussions/9437) [Bug] workspace-write sandbox denies all character-device opens, including the explicitly granted /dev/null
- [#9435](https://github.com/deepseek-ai/deepseek-harness/discussions/9435) [BUG] 空的 reasoning 块被持久化并回放导致 HTTP 400 错误
- [#8830](https://github.com/deepseek-ai/deepseek-harness/discussions/8830) [Bug] 会话永久锁死 / 每轮都 400：`Content Exists Risk`、`INVALID_REQUEST` —— 两种机制 · 三个毒源 · 三张面孔 ＋ 可落地的修复建议（更新 2026-10-06）
- [#810](https://github.com/deepseek-ai/deepseek-harness/discussions/810) [Bug] Windows: sandboxed pwsh always dies with 0xC0000142 under console-less host (desktop launch path)
- [#8806](https://github.com/deepseek-ai/deepseek-harness/discussions/8806) [Bug report] Windows generated-image preview fails when Markdown escapes the attachment path
- [#1944](https://github.com/deepseek-ai/deepseek-harness/discussions/1944) [Bug] Compaction request misses provider prefix cache entirely — summarizer doesn't inherit reasoningEffort / adds maxTokens
- [#4722](https://github.com/deepseek-ai/deepseek-harness/discussions/4722) [bug] In-memory session log is unbounded (append-only) and compaction never trims it - long/heavy sessions OOM the web process
- [#9343](https://github.com/deepseek-ai/deepseek-harness/discussions/9343) [Bug] 0.2.0-rc.2 无法读取 0.1.x 历史会话：冻结 v0 清单漏声明 permission/preset.origin，整份会话被拒
- [#9099](https://github.com/deepseek-ai/deepseek-harness/discussions/9099) [Bug] Message injected without producer-owned `source.kind` violates v4 format and drops sessions
- [#9372](https://github.com/deepseek-ai/deepseek-harness/discussions/9372) [Bug][session-persistence-jsonl][0.2.1-alpha.2] A crash that leaves NUL bytes after the last zstd frame makes the whole session unopenable
- [#9425](https://github.com/deepseek-ai/deepseek-harness/discussions/9425) [Bug] 插件无法触达 compaction 服务：声明 inject 后条目永久 pending（0.2.0-rc.2 实测）
- [#9415](https://github.com/deepseek-ai/deepseek-harness/discussions/9415) [Bug] 测试函数首行的删除作用于错误的目录：目标识别错误未被审批拦下
- [#9420](https://github.com/deepseek-ai/deepseek-harness/discussions/9420) [Bug] 0.2.0-rc.2 web boot 失败：dsh-client-ui-sidebar-documentpreview 子模块访问自身 provide 的 documentPreviews 抛 "cannot get property without inject"
- [#9417](https://github.com/deepseek-ai/deepseek-harness/discussions/9417) [Bug] Python SDK: restarting HarnessClient re-raises the previous lifecycle's close exception (local fix + repro, PR-ready)
- [#9405](https://github.com/deepseek-ai/deepseek-harness/discussions/9405) [bug] DSH 桌面端：一次正常结束的回合未在会话日志中留下 `turn/end`
- [#9410](https://github.com/deepseek-ai/deepseek-harness/discussions/9410) [Bug] DSH NEXT ???:???? 100% ??(Worker ??????????? ? 403)
- [#9408](https://github.com/deepseek-ai/deepseek-harness/discussions/9408) [Bug] 会话统计 TPS 在非流式工具调用场景下虚高约 10 倍(附复现数据与修复分支)
- [#8783](https://github.com/deepseek-ai/deepseek-harness/discussions/8783) [Bug] Session indexing still fails on 0.2.1-alpha.2: historical revision churn + isolated in-memory Agent index
- [#9330](https://github.com/deepseek-ai/deepseek-harness/discussions/9330) [Bug] 未配置 websearch 的情况下，web_search 调用仍触发了提供商 Response API 侧的联网搜索并产生扣费
- [#5628](https://github.com/deepseek-ai/deepseek-harness/discussions/5628) [Bug] single-exe Web boot loses dsh.client metadata behind moduleFallback proxies
- [#9290](https://github.com/deepseek-ai/deepseek-harness/discussions/9290) Bug Report: Windows 上「用 VS Code 打开」始终 502 Bad Gateway
- [#9397](https://github.com/deepseek-ai/deepseek-harness/discussions/9397) [Bug] llm-pi-ai 将上游重试缓冲错误归为 PI_AI_ERROR，跳过自动重试

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-10-12T03:44:51.691Z_