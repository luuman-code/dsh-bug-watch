# DSH Bug Watch — 2026-11-21

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 54

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
_（无）_

## 📝 仅报告 — 无人互动
- [#13971](https://github.com/deepseek-ai/deepseek-harness/discussions/13971) [Bug] dsh_session_log 默认上限 8 MiB 不感知模型窗口：积压饱和后请求体永久超窗，压缩上下文也无法恢复
- [#13968](https://github.com/deepseek-ai/deepseek-harness/discussions/13968) [Bug] 一个插件 tools/post-execute 监听器漏写 next 参数返回 undefined，导致整个宿主所有会话的全部工具调用失效（副作用已生效但报失败）
- [#13966](https://github.com/deepseek-ai/deepseek-harness/discussions/13966) [Bug][Desktop 0.2.2-rc.5] Session becomes unloadable ("PTC dispatch repeats subCallId") after an agent-loop restart reuses tool-call ids
- [#13940](https://github.com/deepseek-ai/deepseek-harness/discussions/13940) [Bug] turn/end 事件 reason:null 导致会话投影失败与对话区白屏（ASAR 原位热修）
- [#13965](https://github.com/deepseek-ai/deepseek-harness/discussions/13965) [Bug] One session log under a non-canonical project directory disables workspaceRegistry: workspace/create fails with active Service "workspaceController" is unavailable
- [#13964](https://github.com/deepseek-ai/deepseek-harness/discussions/13964) [bug] 上下文打满后压缩永久失败（"Compaction could not produce a useful summary"），会话不可恢复
- [#13962](https://github.com/deepseek-ai/deepseek-harness/discussions/13962) [Bug][Windows] 设置保存泄漏 profile 原子写锁（package.json.lock），后续所有保存超时
- [#13753](https://github.com/deepseek-ai/deepseek-harness/discussions/13753) [BUG] Plugin toggles and installs stop working after an HMR reload: "HMR transactions cannot be nested"
- [#13948](https://github.com/deepseek-ai/deepseek-harness/discussions/13948) [Bug] MCP entries using ${credential:...} fail to activate — dsh-mcp-client reads ctx.get('credentials') at apply time
- [#13949](https://github.com/deepseek-ai/deepseek-harness/discussions/13949) [Bug][macOS 27] 本地执行进程被静默禁止访问局域网主机 / agent child processes silently blocked from LAN peers (EHOSTUNRECH · ENETDOWN)
- [#7212](https://github.com/deepseek-ai/deepseek-harness/discussions/7212) [Bug] Compaction selects its own previous checkpoint as the whole span, so a long session never converges (59/79 attempts rejected, 44.6 min burned)
- [#13946](https://github.com/deepseek-ai/deepseek-harness/discussions/13946) Bug: Chinese IME commit after a mid-line Shift+Enter jumps the caret to the start of the next line (Lexical 0.49 element-point normalization)
- [#13945](https://github.com/deepseek-ai/deepseek-harness/discussions/13945) [Bug] Kimi Responses: empty tool-call identities poison V4 replay; every later turn returns 400
- [#13211](https://github.com/deepseek-ai/deepseek-harness/discussions/13211) [Bug] Empty streamed tool call leaves a V4 session unable to resume (reproduced on 0.2.2-rc.3)
- [#13939](https://github.com/deepseek-ai/deepseek-harness/discussions/13939) [BUG] “从左侧栏取消固定”无法持久化
- [#11275](https://github.com/deepseek-ai/deepseek-harness/discussions/11275) [Bug] workspace-changes stalls every root turn ~27 s (agent/turn-stopping awaits git with a 30 s default timeout)
- [#13918](https://github.com/deepseek-ai/deepseek-harness/discussions/13918) [Bug] 预检漏算 54KB 工具结果，请求先发出去再吃 400 / The context preflight misses a 54 KB tool result, so the request goes out and gets a 400
- [#13936](https://github.com/deepseek-ai/deepseek-harness/discussions/13936) [bug] 会话运行失败
- [#13937](https://github.com/deepseek-ai/deepseek-harness/discussions/13937) [Bug] System prompt references a non-existent "read" tool; calls fail with unknown tool
- [#13933](https://github.com/deepseek-ai/deepseek-harness/discussions/13933) [bug][0.2.2-rc.5] Desktop fails to start ("6 required plugins did not activate") when an invalid package.json exists in the user home directory
- [#13867](https://github.com/deepseek-ai/deepseek-harness/discussions/13867) [bug] macOS 0.2.2-rc.3：host 清理子进程时 spawn taskkill ENOENT 导致桌面端崩溃（扫码登录关闭 Edge 后）
- [#13429](https://github.com/deepseek-ai/deepseek-harness/discussions/13429) [Bug] Desktop fails to start on Windows with 无法使用: analytics report blocks ~10s on PowerShell cold start → ECONNRESET during boot
- [#13901](https://github.com/deepseek-ai/deepseek-harness/discussions/13901) [Bug][Desktop 0.2.2-rc.3][Win x64] settings/describe crash from profile-level 0.2.1 core packages shadowing packaged 0.2.2; after aligning versions: silent no-window hang
- [#13925](https://github.com/deepseek-ai/deepseek-harness/discussions/13925) [Bug] MCP 会话过期后工具还列着，调用全失败 / After the MCP session expires the tool stays listed and every call fails
- [#13924](https://github.com/deepseek-ai/deepseek-harness/discussions/13924) [Bug] 流式工具名分片只取首段，调用必然失败 / A fragmented streamed tool name is dispatched as `todo_`, so the call fails
- [#13923](https://github.com/deepseek-ai/deepseek-harness/discussions/13923) [Bug] 上下文变大时 completion 上限被夹到 1 / The completion cap collapses to 1 as the context grows
- [#13922](https://github.com/deepseek-ai/deepseek-harness/discussions/13922) [Bug] 带工具时仍发 thinking，整轮被 400 打死 / Tool turns still send `thinking`, and the whole turn dies on a 400
- [#13920](https://github.com/deepseek-ai/deepseek-harness/discussions/13920) [Bug] 固定开销溢出被报成"自动压缩失败" / Fixed-overhead overflow is reported as "auto-compaction failed"
- [#13919](https://github.com/deepseek-ai/deepseek-harness/discussions/13919) [Bug] 把累积 usage 当当前上下文，几 KB 历史也触发压缩 / Cumulative usage is read as the current context, so a few KB triggers compaction
- [#13917](https://github.com/deepseek-ai/deepseek-harness/discussions/13917) [Bug] one-shot 退出时杀掉后台 job，结果既不在文本也不在 stderr / A one-shot run kills its background job and drops the result
- [#13916](https://github.com/deepseek-ai/deepseek-harness/discussions/13916) [Bug] 会话日志一行损坏，整个 resume 直接失败 / One corrupt line in the stored session blocks resume entirely
- [#13915](https://github.com/deepseek-ai/deepseek-harness/discussions/13915) [Bug] MCP 凭据占位符没展开，整台服务器的工具静默消失 / A credential placeholder that is never expanded silently removes every tool on that MCP server
- [#13913](https://github.com/deepseek-ai/deepseek-harness/discussions/13913) [BUG] [0.2.2-rc.5] Two permission-preset writes reused the same seq range → whole session log unloadable ("torn JSONL record")
- [#13907](https://github.com/deepseek-ai/deepseek-harness/discussions/13907) [Bug] Context meter shows 0% after failed requests: zero-usage samples from 400 rejections replace real pressure
- [#13906](https://github.com/deepseek-ai/deepseek-harness/discussions/13906) [Bug] Token meter underestimates real prompt tokens ~2.5x on CJK/JSON content (4 chars/token heuristic)
- [#13905](https://github.com/deepseek-ai/deepseek-harness/discussions/13905) [Bug] A step with many tool calls can never be compacted: range selection collapses to one node and "successful" compactions free nothing
- [#13902](https://github.com/deepseek-ai/deepseek-harness/discussions/13902) [Bug] Compaction overflow recovery deadlocks when the compacted span itself exceeds the model's context window
- [#13904](https://github.com/deepseek-ai/deepseek-harness/discussions/13904) [Bug] A step with many tool calls can never be compacted: range selection collapses to one node and "successful" compactions free nothing
- [#13908](https://github.com/deepseek-ai/deepseek-harness/discussions/13908) [Bug][Desktop 0.2.2-rc.5][Win x64] Bundled Node 24.21.0 creates \??\Global\ junctions — recursive fs.rm teardown hangs on dangling ones (runtime:smoke deadlock; plugin-uninstall cleanup at risk)
- [#13903](https://github.com/deepseek-ai/deepseek-harness/discussions/13903) [BUG]  文件或网址的复制，就会报错。总能复现
- [#10961](https://github.com/deepseek-ai/deepseek-harness/discussions/10961) [Bug] dsh-tool-skill: the model-facing skill catalog can emit a lone UTF-16 surrogate → deepseek-* sessions fail every turn with 400 INVALID_REQUEST
- [#13899](https://github.com/deepseek-ai/deepseek-harness/discussions/13899) [Bug][0.2.1-rc.4] experimental-inspector `captureFetch` keeps every cancelled-but-unfinished response capture (and its request body) alive for the life of the host → heap OOM
- [#13898](https://github.com/deepseek-ai/deepseek-harness/discussions/13898) [Bug][Desktop] deepseek-flash 回复越界续写：assistant 尾部混入模型自编的下一轮 user 假回合与 DSML 闭合标签
- [#10167](https://github.com/deepseek-ai/deepseek-harness/discussions/10167) [Bug] Gemini 3.x 在调用 cordis_inspect_query 后永久报 HTTP 400：工具返回的 JSON Schema `$ref: "#/$defs/loaderExpression"` 被误判为多模态 display_name（附根因与修复建议）
- [#13897](https://github.com/deepseek-ai/deepseek-harness/discussions/13897) [Bug] @deepseek-ai/dsh-web declares no zod dependency → typert contributor never registers (ERR_MODULE_NOT_FOUND, rc.3–rc.5)
- [#13896](https://github.com/deepseek-ai/deepseek-harness/discussions/13896) [Bug] ui-settings-plugins 随包发布但不在默认 client composition 里：插件注册 settings.plugins.tab 被静默丢弃（Win + macOS 2.0.23-next 复现）
- [#13418](https://github.com/deepseek-ai/deepseek-harness/discussions/13418) [Bug] Composer draft is lost when a turn fails before the message is admitted (working-directory error)
- [#8088](https://github.com/deepseek-ai/deepseek-harness/discussions/8088) [BUG] Compaction happens every few steps for no reason, context is only around 50% of maximum
- [#8581](https://github.com/deepseek-ai/deepseek-harness/discussions/8581) [Bug] dsh + deepseek-v4-flash 复杂长任务中模型输出陷入重复死循环
- [#13887](https://github.com/deepseek-ai/deepseek-harness/discussions/13887) [Bug] office-kit 在 Electron ASAR 下把缺失引擎误判为安装不完整，阻断 WASM 回退（Linux 场景）
- [#13882](https://github.com/deepseek-ai/deepseek-harness/discussions/13882) [Bug] 旧会话恢复失败：Unknown agent preset: dsh-superagent-router（插件 0.3.2 依赖 rc.1，运行时 rc.5）
- [#12261](https://github.com/deepseek-ai/deepseek-harness/discussions/12261) [Bug][macOS] 0.2.2-rc.1 frameless window has no drag region — window cannot be moved by mouse (worked in 0.2.1-rc.5)
- [#13880](https://github.com/deepseek-ai/deepseek-harness/discussions/13880) [Bug] 输入框误报「会话不可用」：live 为 null（未就绪）被当成会话失效
- [#10658](https://github.com/deepseek-ai/deepseek-harness/discussions/10658) [Bug][0.2.1-rc.2] plugin-manager preflight fails when the delegated npm is v12 (`EUNKNOWNCONFIG` for `--config.fetch-retries`)

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-11-21T05:10:58.206Z_