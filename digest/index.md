# DSH Bug Watch — 2026-11-14

**目标仓库**: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness/discussions)
**本次扫描 Bug 类讨论数**: 52

## 🏛️ 官方参与 — committer 互动（采纳答案 / 评论 / 合并 PR）
_（无）_

## 👥 社区参与 — 已采纳答案，作者非 committer
_（无）_

## 📝 仅报告 — 无人互动
- [#13213](https://github.com/deepseek-ai/deepseek-harness/discussions/13213) [bug] Windows workspace-write：受限令牌依赖继承授权，tempfile/pip/venv 在 DSH 承诺的可写临时区内必然失败，且没有可用逃生口
- [#13257](https://github.com/deepseek-ai/deepseek-harness/discussions/13257) [Bug] workflow agent() does not consult the subagent model-selection policy
- [#13255](https://github.com/deepseek-ai/deepseek-harness/discussions/13255) [Bug] One validation-rejected event permanently wedges the v4 persistence pipeline: the poisoned batch is re-queued and re-rejected forever ("developer/message turn must be positive")
- [#13204](https://github.com/deepseek-ai/deepseek-harness/discussions/13204) [Bug] Desktop: switching a plugin from link: to its release tarball always fails with EPERM — pnpm cannot rename over the leftover Windows junction
- [#10260](https://github.com/deepseek-ai/deepseek-harness/discussions/10260) [Bug] Workspace validation admits WSL UNC paths the file toolchain cannot serve
- [#11490](https://github.com/deepseek-ai/deepseek-harness/discussions/11490) [Bug] 桌面端“在应用中打开”对 Electron 应用(如 VS Code)启动失败: ELECTRON_RUN_AS_NODE 泄漏进启动环境
- [#12433](https://github.com/deepseek-ai/deepseek-harness/discussions/12433) Bug: background jobs are SIGTERM-killed when the desktop window is reopened after tray-hide, breaking the "running tasks will not be interrupted" promise
- [#12913](https://github.com/deepseek-ai/deepseek-harness/discussions/12913) [Bug] Agent loop has no no-progress / repetition guard: after the task was done, one turn spent ~50 min re-running identical checks and re-sending a near-identical final answer
- [#13253](https://github.com/deepseek-ai/deepseek-harness/discussions/13253) [Bug] Desktop 0.2.2-rc.3: `dsh-error` is only a peer and never a dependency — every shell tool dies with "Windows Job runner exited with exit code 1"
- [#12936](https://github.com/deepseek-ai/deepseek-harness/discussions/12936) [Bug] Windows：文件「打开方式」菜单始终显示「无法获取应用列表」（SHAssocEnumHandlers → E_FAIL 0x80004005）
- [#11020](https://github.com/deepseek-ai/deepseek-harness/discussions/11020) [Bug] Windows: "Open in…" application list fails for any file whose extension has one stale handler ("Could not load applications")
- [#13247](https://github.com/deepseek-ai/deepseek-harness/discussions/13247) [Bug] 工作区目录是 junction 时，会话认不出自己的工作区（Windows）
- [#13246](https://github.com/deepseek-ai/deepseek-harness/discussions/13246) [Bug] 工作区目录是 junction 时，会话认不出自己的工作区（Windows）
- [#9064](https://github.com/deepseek-ai/deepseek-harness/discussions/9064) [Bug] session-query-sqlite: CJK substrings are not searchable, and one unreadable Session fails every search
- [#12332](https://github.com/deepseek-ai/deepseek-harness/discussions/12332) [Bug] host 进程因未捕获的 ECONNRESET 整体退出（切换网络/代理时，来自模型列表刷新请求）
- [#4722](https://github.com/deepseek-ai/deepseek-harness/discussions/4722) [bug] In-memory session log is unbounded (append-only) and compaction never trims it - long/heavy sessions OOM the web process
- [#13237](https://github.com/deepseek-ai/deepseek-harness/discussions/13237) [Bug] Desktop boot failure misreported as a network error: Host prints its URL then the client fetch is reset (0.2.2-rc.3, Windows)
- [#9924](https://github.com/deepseek-ai/deepseek-harness/discussions/9924) [Bug] Desktop "Web authentication failed": stale dsh-auth-* cookies overflow the Host header limit (431)
- [#9986](https://github.com/deepseek-ai/deepseek-harness/discussions/9986) [Bug] WorkspaceController becomes unavailable when a decompressed JSONL file is left in the session directory
- [#13231](https://github.com/deepseek-ai/deepseek-harness/discussions/13231) [Bug] Windows：无扩展名文件（Makefile/Dockerfile/LICENSE）无法在 DSH 中用外部应用打开
- [#13228](https://github.com/deepseek-ai/deepseek-harness/discussions/13228) [Bug] macOS Desktop 0.2.2-rc.3：profile 旧存储组件被禁用导致 workspaceController unavailable，CUA bundle 同时版本不兼容
- [#13207](https://github.com/deepseek-ai/deepseek-harness/discussions/13207) [Bug] HMR 热重载替换工具注册后，在途模型步调用已注册工具报 UNKNOWN_TOOL（0.2.2-rc.1）
- [#13208](https://github.com/deepseek-ai/deepseek-harness/discussions/13208) [Bug] 子会话路由切换时无条件继承父会话 maxTokens，小上限供应商首请求即 400（0.2.2-rc.1）
- [#13219](https://github.com/deepseek-ai/deepseek-harness/discussions/13219) [Bug]密码重置后账号登录失败，缺少安全的授权重置入口
- [#12358](https://github.com/deepseek-ai/deepseek-harness/discussions/12358) [Bug] ui-sidebar-files: unanchored `:has()` in FilesBody.module.css makes every DOM insert + layout read restyle the whole page
- [#13226](https://github.com/deepseek-ai/deepseek-harness/discussions/13226) [BUG] Issue: output budget collapses to ~2K near the context limit — "max output tokens reached" with empty content, and "continue" can never recover
- [#13223](https://github.com/deepseek-ai/deepseek-harness/discussions/13223) [Bug] 0.2.2-rc.3：session-search 在旧 v0 会话上必然失败——一条不可读日志仍会拖垮整个索引（已二分定位）
- [#13221](https://github.com/deepseek-ai/deepseek-harness/discussions/13221) [Bug] 0.2.2-rc.3: opening a historical session removes it from the sidebar and disables the composer
- [#12278](https://github.com/deepseek-ai/deepseek-harness/discussions/12278) [bug]工具调用失导致败任务停滞的问题
- [#12601](https://github.com/deepseek-ai/deepseek-harness/discussions/12601) [Bug] App fails to launch silently after Windows disk cleanup and plugin install
- [#10949](https://github.com/deepseek-ai/deepseek-harness/discussions/10949) [Bug] 0.2.1-rc.3 静默升级删除安装目录内的用户工作区（~835 MB 数据丢失，不进回收站，无任何提示）
- [#13211](https://github.com/deepseek-ai/deepseek-harness/discussions/13211) [Bug] Empty streamed tool call leaves a V4 session unable to resume (reproduced on 0.2.2-rc.3)
- [#13212](https://github.com/deepseek-ai/deepseek-harness/discussions/13212) [Bug] Skill catalog silently drops an unresolvable entry and publishes the truncated list as complete
- [#9799](https://github.com/deepseek-ai/deepseek-harness/discussions/9799) Bug: queued followups stall after a terminal model request failure
- [#13205](https://github.com/deepseek-ai/deepseek-harness/discussions/13205) [Bug] 队列消息的内联编辑会被轮次结束打断：未保存文本丢失，消息按旧内容自动发出
- [#13203](https://github.com/deepseek-ai/deepseek-harness/discussions/13203) [Bug][Desktop] 在空闲会话切换完全权限后，退出App时误报「当前正在运行的任务将会中断」
- [#13201](https://github.com/deepseek-ai/deepseek-harness/discussions/13201) [Bug] Windows 升级卡在 96%：安装器在应用仍持有安装目录句柄时执行 MoveFileExW，返回 5
- [#13198](https://github.com/deepseek-ai/deepseek-harness/discussions/13198) [Bug] 自定义 pi-ai 路由 + 推理等级：系统提示词以 role=developer 发送导致全部请求 400（含不透明 400001），设置页无 compat 入口
- [#11861](https://github.com/deepseek-ai/deepseek-harness/discussions/11861) [Bug] 自定义 pi-ai 路由 + 推理等级：系统提示词以 role=developer 发送被上游 422，设置页无 compat 入口、报错不可操作
- [#9575](https://github.com/deepseek-ai/deepseek-harness/discussions/9575) [Bug Report] storage-json: writeAtomic 的 rename 在 Windows 上因目标文件被占用返回 EPERM，且失败即 fatal 终止宿主
- [#13197](https://github.com/deepseek-ai/deepseek-harness/discussions/13197) [Bug] 0.2.2-rc.1：空 tool-call id 落盘 + 恢复期在磁盘上不存在的 seq 合成自相矛盾 TOOL_NOT_STARTED repair ⇒ 会话永久不可读（帧级证据 + 已验证修复）
- [#13187](https://github.com/deepseek-ai/deepseek-harness/discussions/13187) [Bug] dsh-auth-* cookie overflow spans four releases (0.2.1-alpha.4 → 0.2.2-rc.1): measured evidence, why it stays unfixed, and a temporary janitor plugin (EN + 中文全文)
- [#13191](https://github.com/deepseek-ai/deepseek-harness/discussions/13191) [Bug] Host process burns ~150% CPU indefinitely: chokidar watcher left on a deleted directory (Windows)
- [#13190](https://github.com/deepseek-ai/deepseek-harness/discussions/13190) [Bug] dsh-ssh streams fail on Electron hosts (Desktop app + CLI): BoringSSL has no TLS1.2 PSK ciphersuite — NO_CIPHER_MATCH before any network I/O (EN + 中文全文)
- [#13182](https://github.com/deepseek-ai/deepseek-harness/discussions/13182) [Bug] 0.2.2-rc.2: 长会话重挂时 ChatReading.restore 把读者甩到尾部或旧纪元像素（历史插入零补偿 + 过期记忆回写）
- [#13179](https://github.com/deepseek-ai/deepseek-harness/discussions/13179) [Bug] web_fetch 无法抓取 bing.com：国内访问 www.bing.com 必然 302 到 cn.bing.com，而同源限制导致必然失败
- [#10884](https://github.com/deepseek-ai/deepseek-harness/discussions/10884) [Bug] Experimental inspector cannot activate when a plugin installs globalThis.fetch as an accessor (captureFetch: true)
- [#12732](https://github.com/deepseek-ai/deepseek-harness/discussions/12732) [Bug] 长时间运行后“新建会话”回到工作区选择、侧栏 fork 子会话找不到；重启恢复（0.2.2-rc.1）
- [#13170](https://github.com/deepseek-ai/deepseek-harness/discussions/13170) Bug: Workspace Changes can be attributed to the wrong parallel session
- [#13168](https://github.com/deepseek-ai/deepseek-harness/discussions/13168) [Bug] agent 自主执行 `rm -rf /tmp/ch /*`（多打一个空格），通配符展开为 16 个根目录，workspace-write 未能阻止整个工作区被删除
- [#13167](https://github.com/deepseek-ai/deepseek-harness/discussions/13167) [Bug] 复制已发送消息中的引用模板并粘贴回输入框后，引用显示为原始 > 文本
- [#13166](https://github.com/deepseek-ai/deepseek-harness/discussions/13166) [Bug] Null turn/end reason crashes session projection: Cannot read properties of null (reading 'kind')

## 📋 官方名单配置
_当前 logins_: `chinesezjc, creatixchu, geeeekexplorer, imccyu, j-xiang, kermanx, kingwl, leggasai, lsdsjy, pku-xht, shigma, tianyicui, turtle1999, yifandingd, yifffan, zdaxie`
_当前 orgs_: `deepseek-ai`
_编辑 `maintainers.json` 或新建 `maintainers.local.json` 后提交触发新一轮扫描即可生效。_

_Last updated: 2026-11-14T04:32:49.273Z_