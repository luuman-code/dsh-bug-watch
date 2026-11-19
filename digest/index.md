# DSH Bug Watch — 2026-11-19

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 44

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
- [#13601](https://github.com/deepseek-ai/deepseek-harness/discussions/13601) **[bug]DSH 设置中添加新模型的时候丢失输入模态**<br/>  分类：Q&A · 标签：— · 最近更新：2026-11-18

## 📝 仅报告 — 无人互动
- [#13753](https://github.com/deepseek-ai/deepseek-harness/discussions/13753) [BUG] Plugin toggles and installs stop working after an HMR reload: "HMR transactions cannot be nested"
- [#13754](https://github.com/deepseek-ai/deepseek-harness/discussions/13754) [BUG] Windows desktop: file-association lookup spawns a temp PowerShell script (associations.ps1) per call, repeatedly tripping enterprise EDR (Sangfor AES)
- [#9220](https://github.com/deepseek-ai/deepseek-harness/discussions/9220) [Bug] Linux: empty systemd scopes keep polling and stall the Web UI for over 100 seconds
- [#9924](https://github.com/deepseek-ai/deepseek-harness/discussions/9924) [Bug] Desktop "Web authentication failed": stale dsh-auth-* cookies overflow the Host header limit (431)
- [#13752](https://github.com/deepseek-ai/deepseek-harness/discussions/13752) [Bug] Windows 桌面端自动更新每次都失败："Unexpected token '}', "[33;1mWAR"... is not valid JSON"
- [#13745](https://github.com/deepseek-ai/deepseek-harness/discussions/13745) [Bug] 桌面端加载 office 技能后 Office 工具仍不出现（0.2.2-rc.5）
- [#13416](https://github.com/deepseek-ai/deepseek-harness/discussions/13416) [Bug] 桌面端 0.2.2-rc.3：Session 投影不推送实时帧，只有打开会话时的基线（依赖 useProjection 的看板无法实时刷新）
- [#13747](https://github.com/deepseek-ai/deepseek-harness/discussions/13747) [Bug][根因分析] session/control 流一次瞬态 service-unavailable 后永久终止，所有 Session 投影（标题/统计/看板）冻结（#13416 根因）
- [#13429](https://github.com/deepseek-ai/deepseek-harness/discussions/13429) [Bug] Desktop fails to start on Windows with 无法使用: analytics report blocks ~10s on PowerShell cold start → ECONNRESET during boot
- [#13742](https://github.com/deepseek-ai/deepseek-harness/discussions/13742) [Bug] 百度千帆 Token Plan 的 TPM 429 被分类为 QUOTA，导致任务直接中断
- [#13740](https://github.com/deepseek-ai/deepseek-harness/discussions/13740) [Bug] 切换会话后输入框（composer）落到视口外，需要向下滚动才回来 — 0.2.2-rc.3 / Windows
- [#13730](https://github.com/deepseek-ai/deepseek-harness/discussions/13730) [Bug] 0.2.2-rc.5 desktop auto-update leaves official optional bundles at rc.3 — preflight disables session-query-sqlite, sessionController unavailable
- [#13727](https://github.com/deepseek-ai/deepseek-harness/discussions/13727) [bug] 注入的工具schema 不合法时本地harness未验证，导致请求格式不合法，对话异常中断且无提示
- [#13719](https://github.com/deepseek-ai/deepseek-harness/discussions/13719) [Bug] `summarizationProvider` naming a route key absent from the profile is accepted at load time and only fails at compaction, with the real error masked
- [#6956](https://github.com/deepseek-ai/deepseek-harness/discussions/6956) [Bug] browser-use-playwright-mcp provider hangs agent/created — blocks ALL new session creation (v0.1.6-alpha.1, Windows)
- [#13722](https://github.com/deepseek-ai/deepseek-harness/discussions/13722) [Bug] 0.2.2-rc.5 Windows 启动/运行崩溃：fetch ECONNRESET 被当作致命错误
- [#13581](https://github.com/deepseek-ai/deepseek-harness/discussions/13581) [Bug] Reinstalling a local-linked plugin from npm fails with EPERM — uninstall leaves a stale junction in node_modules
- [#6661](https://github.com/deepseek-ai/deepseek-harness/discussions/6661) [Bug] Python code runtime child process becomes orphaned high-CPU zombie on macOS after host exits
- [#11052](https://github.com/deepseek-ai/deepseek-harness/discussions/11052) [Bug] Windows 自动更新替换安装目录时跟随 junction，删除了安装目录外的 45 GB 用户工作区（SSD TRIM 后不可恢复）
- [#9271](https://github.com/deepseek-ai/deepseek-harness/discussions/9271) [Bug] Inspector Cordis-tree growth crashes Desktop Host: source state exceeds source-frame byte limit
- [#10259](https://github.com/deepseek-ai/deepseek-harness/discussions/10259) [Bug] 0.2.1-rc.2: experimental Inspector terminates the Host at a ~69-byte retained-state budget gap (field crash, quantified)
- [#10231](https://github.com/deepseek-ai/deepseek-harness/discussions/10231) [Bug] Desktop 0.2.1-rc.x: 插件市场更新全部失败 — installBundle 的 hmr 守卫把「升级已装插件」误判为「重复安装」
- [#13542](https://github.com/deepseek-ai/deepseek-harness/discussions/13542) [Bug][Desktop] 0.2.2-rc.3 Windows：Host 就绪后首个 welcome RPC 遇 ECONNRESET 即被判致命，启动反复失败（禁用第三方插件无效）
- [#13705](https://github.com/deepseek-ai/deepseek-harness/discussions/13705) [Bug] A black console window sometimes appears during Windows tool execution
- [#13702](https://github.com/deepseek-ai/deepseek-harness/discussions/13702) [Bug] Session log grows unbounded -> request body silently truncated at ~1.8 MB -> session permanently bricked
- [#13695](https://github.com/deepseek-ai/deepseek-harness/discussions/13695) [Bug][Desktop] 0.2.2-rc.3 更新安装器递归删除安装目录内用户数据（约 24.4 GiB）
- [#13693](https://github.com/deepseek-ai/deepseek-harness/discussions/13693) [Bug][0.2.2-rc.3] 会话失败后仍有积压队列：新消息被当作正文回显，旧时间气泡一直挂在末尾且队列少计一条
- [#13393](https://github.com/deepseek-ai/deepseek-harness/discussions/13393) [Bug] Compaction deadlocks when a route's declared contextWindow is below actual usage: every successful `stop` completion is reclassified as CONTEXT_WINDOW_EXCEEDED
- [#13387](https://github.com/deepseek-ai/deepseek-harness/discussions/13387) [Bug] Windows 上标题栏「关闭」和「最大化」按钮悬停时出现两个重复 tooltip
- [#13516](https://github.com/deepseek-ai/deepseek-harness/discussions/13516) [Bug] DeepSeek Messages 适配器将工具参数 JSON 抖动当成错误
- [#13600](https://github.com/deepseek-ai/deepseek-harness/discussions/13600) [Bug] cot-translation 仍会翻译中文思考链，且偶尔把中文译成英文（0.2.2-rc.3，deepseek-account）
- [#13690](https://github.com/deepseek-ai/deepseek-harness/discussions/13690) [Bug] A subagent call naming a route outside the parent route aborts the delegation when no model-selection policy is recorded
- [#13688](https://github.com/deepseek-ai/deepseek-harness/discussions/13688) [BUG] dsh-superagent-prototype@0.1.3：浏览器端模块永远注册失败，tsdown.config.ts 把 id 硬编码成了 "dsh-superagent"
- [#13687](https://github.com/deepseek-ai/deepseek-harness/discussions/13687) [Bug] 工具调用可能永久不返回：TOOL_TIMEOUT 只发信号，工具内部盲等一个永不清算的 Promise（附最小复现）
- [#10877](https://github.com/deepseek-ai/deepseek-harness/discussions/10877) [Bug] agent.inject() accepts malformed messages: one missing `role` permanently breaks the session (422, no recovery)
- [#13669](https://github.com/deepseek-ai/deepseek-harness/discussions/13669) [BUG] 插件页「添加插件」按钮只显示上半截，被 header 裁掉一半（0.2.2-rc.1）
- [#13493](https://github.com/deepseek-ai/deepseek-harness/discussions/13493) [Bug][Windows Desktop 0.2.2-rc.3] Open in → VS Code fails; existing ELECTRON_RUN_AS_NODE fix missing from release
- [#13667](https://github.com/deepseek-ai/deepseek-harness/discussions/13667) [BUG] 三处交互卡顿的页面级主因：174 条 :has() 让每次 DOM 变更近乎整页 RecalcStyle（附受控 A/B 与 18 条宿主改造建议）
- [#13661](https://github.com/deepseek-ai/deepseek-harness/discussions/13661) [BUG] 输入/file 命令选择文件时鼠标不显示，点击使用/file命令可以显示
- [#13660](https://github.com/deepseek-ai/deepseek-harness/discussions/13660) [Bug][Desktop 0.2.2-rc.3 / macOS] DSML 工具收尾标签偶尔进入助手正文并被保存
- [#13656](https://github.com/deepseek-ai/deepseek-harness/discussions/13656) [BUG] Subagent completion notices are silently lost when a nested parent goes idle
- [#12985](https://github.com/deepseek-ai/deepseek-harness/discussions/12985) [Bug][0.2.1-rc.2] Inspector bundle injects a loopback-only endpoint (ws://127.0.0.1:9230/ingest); LAN/remote browsers get periodic mux disconnects
- [#9053](https://github.com/deepseek-ai/deepseek-harness/discussions/9053) [Bug] Choosing VS Code for a delivered file opens a Windows-side window instead of reusing the existing Remote-WSL window

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-11-19T05:31:43.574Z_