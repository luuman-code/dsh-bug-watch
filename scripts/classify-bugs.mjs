#!/usr/bin/env node
// Classify all bugs by root-cause pattern using keyword matching.
// Usage: node classify-bugs.mjs [path/to/history.jsonl]
import { readFileSync } from 'node:fs';

const FILE = process.argv[2] || 'digest/history.jsonl';
const lines = readFileSync(FILE, 'utf8').split(/\r?\n/).filter(Boolean);
const entries = lines.map(l => JSON.parse(l));

// Categories: { id, label, patterns: [regex] }
// Patterns are case-insensitive and matched against title (joined with `|`).
const CATEGORIES = [
  // ===== Windows file-system / native picker =====
  { id: 'win-picker-utf16', label: 'Windows 原生文件夹选择器 UTF-16 路径截断',
    patterns: [/(?:folder\s*picker|directory\s*picker|文件.{0,3}选择器|目录.{0,3}选择器|readUtf16|UTF-?16\s*(?:low|低位)\s*byte|低字节.*?0x?00|U\+4E00|U\+5F00|U\+8?A00|U\+9[56]00|U\+xx00|BMP\s*chars?\s*whose\s*UTF-?16|truncat.*?(?:UTF-?16|U\+|C[JK])|folder\s*dialog.*?truncat|zero\s*low\s*byte|零低字节|对话框.*?未.*?前台|未.*?在前台.*?显示|folder\s*dialog\s*not\s*foreground|中文路径\s*乱码|中文.*?路径.*?编码|中文.*?路径\s*字符编码|路径包括中文)/i] },
  { id: 'win-sandbox-acl', label: 'Windows 沙箱 ACL 受限令牌 / SEC_E_NO_CREDENTIALS',
    patterns: [/(?:restricted\s*token|受限令牌|ACL\s*sandbox|workspace-write.*?(?:Schannel|TLS|Negotiate|NTLM)|SEC_E_NO_CREDENTIALS|0xC0000142|SSPI\s*凭据|tempfile\.mkdtemp|pwsh\s*tool\s*crashes|pwsh\s*spawn\s*ENOENT|WSL\s*禁用\s*interop|无控制台宿主|PM2|puppeteer\s*MCP\s*断连|cwd\s*不一致|cwd\s*与工作区|Storage\s*Sense|fs\.mkdir\s*EPERM|盘符根目录|桌面版选择工作区|msys2|MSYS2|winget|桌面版|Hyper-?V\s*excluded\s*port|Hyper-V|workspace-write.*?Temp\s*cleanup|capability\s*ACE\s*永不补授|外部创建.*?子目录|永不补授|Mojo\s*IPC\s*拒绝访问|Chrome\s*Headless.*?Mojo|磁盘根目录|工作区选择磁盘根目录)/i] },
  { id: 'win-flash-console', label: 'Windows 沙箱子进程弹出控制台窗口',
    patterns: [/(?:sandboxed.*?console\s*window|visible\s*console|flash|STARTF_USESHOWWINDOW|Windows\s*Terminal\s*window|弹出\s*PowerShell\s*窗口)/i] },

  // ===== Session log / persistence =====
  { id: 'session-seq-corrupt', label: '会话日志 seq 重叠 / 损坏 / 无法加载',
    patterns: [/(?:seq\s*(?:gap|重叠|重复|conflict|overlap|撞号)|corrupt\s*session\s*log|seq\s*gap\s*in\s*committed\s*region|write-behind\s*batching|appendLines\s*rollback|seq\s*continuity|tool_call\s*id\s*不存在|interrupted-turn|synthetic\s*closers|中断收尾|中断生成|tool-bash\s*foreground\s*abort|400001|损坏的会话日志|log\s*corrupt|corrupt\s*log|corrupted\s*session|本次扫描.*?损坏|session\s*log\s*corrupted|history\s*unrecoverable|history\s*unavailable|session\.history|中断.*?写入|claim\s*进当前轮|history\s*loading\s*fully\s*materializes|一次\s*abort|three\s*lifecycle\s*paths|session\.list.*?500|session-list\s*gap|workspace\s*session\s*membership|DSH_HOME\s*wipe|external\s*deleted|outside\s*delete|out-of-order|not\s*terminate\s*normally|always\s*been|workspace\.json.*?乱码|workspace\.json\s*乱码|并发写\s*workspace|非\s*ASCII\s*路径.*?乱码|fatal\s*退出|下一回合.*?fatal\s*退出|session\s*log\s*corrupt)/i] },
  { id: 'session-orphan-tool', label: '会话留下悬空 tool_call → 400 insufficient tool messages',
    patterns: [/(?:insufficient\s*tool\s*messages|悬空\s*tool_call|orphan\s*log\s*data|phantom\s*replay|tool\/result\s*never\s*lands|tool_call_id|dangling\s*tool_calls|phantom\s*replay\s*content|unrecorded\s*tool\s*call|permanently\s*un-resumable|broken\s*message\s*sequence|tool_call_id\s*不存在|side\s*effects|未回传|cancellation\s*arrives|stream\s*EOF\s*without\s*terminal|partial\s*response|forced\s*cut|12189\s*后被强制截断|maxTokens\s*截断带工具|not\s*land|successor\s*never|not\s*propagate|silent\s*fail|Empty\s*tool-call\s*id|empty\s*tool-call\s*id|tool-call\s*id\s*empty|tool_call\s*id\s*empty|empty.*?tool-call\s*id|tool-call\s*id\s*\(""\)|refuses\s*the\s*whole\s*session|断裂消息序列|empty.*?session\s*log\s*and\s*refuses|tool\/result\s*引用.*?不存在\s*call\s*id|tool\/result\s*引用了\s*不存在)/i] },
  { id: 'session-load-perf', label: '会话历史加载性能 / OOM / RangeError',
    patterns: [/(?:Maximum\s*call\s*stack|RangeError|unbounded\s*payload|tail\s*page|二次方|busy\s*loop|freezes|死循环|109k\s*events|27k\s*events|paginate\s*展开\s*sourceEventSeqs|session\s*search\s*crashes|stall\s*the\s*entire|Failed\s*to\s*fetch|Unable\s*to\s*parse\s*JSON|97k\s*chunks|sub-second\s*backoff|retry\s*exhaustion|无.*?响应|cannot\s*parse|JSON\s*parse\s*error|孤立.*?代理项|孤立\s*UTF-?16\s*代理码元|JS\s*\.slice\(\)\s*切断\s*emoji\s*代理对)/i] },

  // ===== Tool runtime / dsh-tools duplicate copy =====
  { id: 'tool-prepare-undefined', label: '所有工具调用报 "Cannot read properties of undefined (reading \'prepare\')" — dsh-tools 多实例',
    patterns: [/(?:reading\s*'prepare'|reading\s*"prepare"|reading `prepare`|reading\s*"prepare'|reading 'prepare'\)|reading\s*prepare\)|dsh-tools\s*(?:多实例|副本|peer-dep|duplicate|symbol\s*契约))/i] },
  { id: 'unknown-tool-empty', label: '"unknown tool \"\"" — 流式 delta id/name 被空串覆盖',
    patterns: [/(?:unknown\s*tool\s*""|tool\s*calls?\s*(?:lose|lost|drop)|empty-string\s*deltas|empty\s*string\s*deltas|explicit\s*(?:null|"")\s*id|name|id\/name.*?(?:null|空|empty))/i] },
  { id: 'tool-args-loss', label: '工具调用参数名 / body 丢失 ("input": "")',
    patterns: [/(?:\{"input":\s*""\}|参数名丢失|generate\s*tool\s*call|ToolArgsError|arguments\s*must\s*be\s*an\s*object|markdown-fenced|tool_call_adjacency|Literal\s*\{\{.*?\}\}|code-mode\s*prompt\s*assembly|invalid\s*arguments|missing\s*required\s*property)/i] },

  // ===== LLM adapter / streaming / provider =====
  { id: 'llm-pi-ai-error', label: 'llm-pi-ai / llm-deepseek 错误分类或参数错误',
    patterns: [/(?:pi-ai\s*error\s*classification|STREAM_CLOSED|Pi_AI_ERROR|context\s*overflow|maxDelayMs|RATE_LIMIT.*?sub-second|supportsDeveloperRole|developer\s*role|400\s*INVALID_REQUEST|invalid\s*pi-ai\s*replay|reasoning_content\s*未回传|reasoning_text\s*must\s*be\s*passed|adjacency\s*requirement|misclassifies\s*401\/403|未回传.*?reasoning|system\s*role\s*only|system\s*role.*?OpenAI|system\s*role.*?compatible)/i] },
  { id: 'llm-reasoning-leak', label: '思维链泄漏到正文 / thinking 块错位',
    patterns: [/(?:thinking\s*leaks|reasoning\s*intermittently\s*stored|思维链.*?泄漏|mmm-WAIT|持续重复|delta\.reasoning|vLLM.*?delta\.reasoning|reasoning.*?delta|adapter\s*drops\s*it|reasoning_content\s*not\s*passed\s*back|thinking-mode\s*reasoning_content\s*not\s*passed)/i] },
  { id: 'llm-cache-loss', label: '前缀缓存命中率塌陷（KV cache / provider prefix）',
    patterns: [/(?:KV\s*cache\s*hit\s*rate\s*collapses|prefix\s*cache\s*entirely|compaction\s*request|compaction\s*drops|compaction\s*misses|reasoningEffort|maxTokens|projection\s*cache\s*回退|Request-reconstruction\s*invariant|provider\s*prefix)/i] },
  { id: 'provider-config', label: '第三方 provider / OpenAI 兼容接入配置错误',
    patterns: [/(?:OpenAI-?compatible|非标准.*?提供商|国内.*?OpenAI|阿里云百炼|deepseek-official|DEEPSEEK_BASE_URL|trailing\s*slash|网关|hand-declared\s*routes|web_search.*?缺少時間|独立搜尋回合|缺少時間与來源約束|旧代模型|--llm\s*agent|遇\s*408|pending\s*calls|multi-agent\s*reports|get_goal\s*schema\s*非法|null\s*is\s*not\s*of\s*type|Python\s*SDK\s*accepts\s*malformed|serverInfo\s*responses|initialize\.serverInfo)/i] },

  // ===== Trust fence / Origin / network policy =====
  { id: 'trust-fence-403', label: '信任围栏 / Origin 比较导致 HTTP 403',
    patterns: [/(?:trust\s*fence|port-less\s*Origin|isTrustedApiRequest|127\.0\.0\.1\s*(?:vs|and)\s*localhost|loopback\s*Origin|localhost.*?可用|HTTPS\s*访问\s*127|Origin\s*header\s*omits\s*the\s*port|Chrome\s*150\+|HTTP\s*403.*?Chrome|局域网\s*IP.*?403|通过局域网\s*IP\s*访问|http.*?<局域网IP>.*?:\d+|lan\s*ip|部分\s*Host\s*API\s*返回\s*403|macOS.*?127\.0\.0\.1.*?403)/i] },
  { id: 'secure-context', label: '非安全上下文下 crypto.randomUUID / clipboard / fetch 不可用',
    patterns: [/(?:crypto\.randomUUID|secure\s*context|明文\s*HTTP|copy\s*button|execCommand\s*fallback)/i] },

  // ===== Sandbox / permission model =====
  { id: 'sandbox-escalation', label: '沙箱 "not strictly wider" 升级失败 / 自批准',
    patterns: [/(?:not\s*strictly\s*wider|sandbox\s*escalation|same-?mode\s*请求|沙箱提权|沙箱.*?升级|danger-full-access\s*下|工作区连接后新增|workspace-write\s*context|fs-sandbox\s*post-check|landlock|approval.*?回环|自批准|approval.*?loop|sandbox.*?loopback|沙箱内.*?重启.*?杀死|sandbox\s*卡死|workspace-write.*?卡死|Path\s*name\s*race)/i] },
  { id: 'sandbox-evasion', label: '沙箱可被绕过 / 越权 / 清空主目录',
    patterns: [/(?:pathname\s*race|ReplaceFileW|EIO|ERROR_SHARING_VIOLATION|Remove-Item\s*\$home|Recursive\s*delete|out-of-range|out\s*of\s*workspace|str_replace_editor.*?Read\s*Only|out of workspace|清空.*?主目录|删除.*?整个家目录|Full\s*Access\s*模式\s*创建并测试插件时误删了|误删了.*?整个家目录)/i] },

  // ===== Web GUI / UI =====
  { id: 'web-freeze', label: 'Web 页面冻结 / CPU 占满 / 卡片不可见',
    patterns: [/(?:Web\s*UI\s*卡死|Loading\s*plugins|FrameQueue|infinite\s*loop|Failed\s*to\s*load\s*plugins|page\s*freezes|hangs\s*indefinitely|100%\s*CPU|app\.crash|no\s*circuit\s*breaker|infinite\s*repetition\s*loop|step\s*loop.*?upper\s*bound|stalled\s*model|catalog\s*cold\s*reads|main\s*thread\s*CPU|busy\s*loop|memory\s*grows|页面内容太多|鼠标阻塞卡顿|页面大小|彻底卡死|invalidateAll\s*正反馈|Loading\s*plugins…|deep\s*diving|repetition\s*loop|catalog\s*never\s*reclaimed|catalog\s*memory\s*grows|commands\/change\s*广播|browse\s*menu|loading\s*plugins|Failed\s*to\s*load\s*web\s*UI\s*for\s*a\s*second\s*time|accidental\s*shut\s*down|WholeProcess|100%\s*CPU.*?FrameQueue)/i] },
  { id: 'web-composer-ux', label: 'Web 输入框 / IME / 弹层 / PWA 行为异常',
    patterns: [/(?:composer|输入框|IME\s*candidate|中文输入法|aria-modal|Escape|弹层|focus\s*trap|菜单|菜单\s*键盘|mobile\s*layout|PWA\s*fullscreen|copy\s*button|horizontal\s*scroll|scroll|点击劫持|iframe|键盘|silently\s*does\s*nothing|UI\s*白屏|hardcoded\s*Chinese|directory-picker-auto|GUI-less|nohup|daemon|Menu\s*组件|PowerShell\s*5\.1|设置面板|openDocument|配置.*?打开|silently\s*skips|question\s*option\s*cards.*?not\s*visible|message\s*edit.*?not\s*aligned|无对齐|首项.*?跳过|打开配置文件|剪贴板|drag|drop|web_search|toast|detach|无回显|无法输入|无法拖拽|Xiaomi\s*Pad|external\s*keyboard|chrome\s*\/\s*Via|Xiaomi|notification\s*subscriptions\s*can\s*hang|outline|chinese\s*UI|cards\s*never\s*render|never\s*render\s*on\s*first\s*visit|first\s*visit|tab\s*mounts|invalid\s*arguments|missing\s*required|required\s*property|description|skip\s*the\s*first\s*menu\s*item|initial\s*ArrowDown|first\s*menu\s*item|无.*?选择工作区|无法选择工作区|本地\s*SSH|SSH\s*端口|port\s*forwarding|port-forwarding)/i] },
  { id: 'web-mux-ws', label: 'WebSocket / Mux / 心跳 / 离线重连',
    patterns: [/(?:WebSocket\s*error|心跳|mux|visibilitychange|backpressure|reconnect.*?(?:drop|cap|stall)|幽灵连接|mux\s*WebSocket|僵尸|103\s*req\/s|无限重试风暴|静默.*?(?:挂|suspend)|resync\s*\(\s*\)|API\s*failure|页面停止更新|chrome.*?streaming|Chrome.*?stream\s*fine|前端无限重试|page\s*returns\s*an\s*error|First-connect\s*failure|misreported\s*as\s*'reconnecting'|retry\s*loop\s*has\s*no\s*cap|queue\s*busy\s*agent\s*turn|queued\s*behind\s*a\s*busy|history\s*总是错误|0\.0\.0\.0.*?远程服务器|后台时画面停止更新|回到前台不自动|0\.0\.0\.0\s*在远程)/i] },
  { id: 'web-approval-card', label: '审批 / 提问 / 卡片渲染缺失或挂死',
    patterns: [/(?:ask_user_question|approval\s*card|approval\s*card\s*missing|ASK_ABORTED|approval.*?hang|approval.*?永久|Question\/approval\s*cards|approval.*?never\s*appears|mobile\s*until\s*page\s*refresh|approval\s*策略\s*never|the\s*user\s*rejected\s*tool\s*X|misleading.*?the\s*user\s*rejected|misleading.*?reject|rejected\s*tool\s*X|rejected.*?tool\s*X|策略\s*never)/i] },
  { id: 'web-render-markdown', label: 'Markdown 渲染细节 / 货币 / 删除线',
    patterns: [/(?:Markdown\s*renderer|strikethrough|delete\s*line|toggle\s*line|inline-math|single\s*tilde|货币|`\$`|\*\*bold\*\*|gfm\(\)|web_fetch.*?(?:不显示|只有\s*URL)|正文\s*不显示|Inspect.*?详情|复制消息时出现多余换行|多余换行|视觉折行.*?误复制|复制.*?多余换行|回答问题后.*?横向滚动条|横向滚动条错位)/i] },

  // ===== Subagent / multi-agent =====
  { id: 'subagent-model', label: '子代理继承过期模型 / 创建时快照',
    patterns: [/(?:Subagents?\s*inherit|creation-time\s*model\s*options|模型不生效|subagent.*?(?:model|模型)|workflow.*?model|显式\s*指定\s*`?model|workflow.*?model.*?覆盖|dsv4p|扣费路由)/i] },
  { id: 'subagent-settlement', label: '子代理结算 / 重投 / 孤儿状态',
    patterns: [/(?:settle\s*notice|report\s*relay|orphaned\s*subagent|continuable|settlement|steer\s*vs\s*followup|deadlock|wakeDriver|whenIdle|phantom\s*replay|interruption\s*marker|silent-fail|driver\s*retirement|waking\s*follow-up|follow-?up.*?queue|UI\s*as\s*if\s*still\s*running|green\s*as|state\s*indistinguishable|terminal\s*ready\s*state|never\s*terminate\s*normally|Failed\s*subagents\s*stay\s*visible|plan-mode\s*轮次间快速\s*on|plan-mode.*?通知丢失|job_output.*?无活性|job_output.*?wait\s*true|background.*?job|job\s*挂死)/i] },

  // ===== Plugin / npm / install =====
  { id: 'plugin-load-fail', label: '插件加载 / 注册冲突 / cordis "Service already registered"',
    patterns: [/(?:Service\s*is\s*already\s*registered|cordis\s*plugin\s*group|host\.Cordis\s*inspect|Inspector\s*provider|cordis_define|cordis.*?preset|inspect\s*provider|ERR_MODULE_NOT_FOUND|dsh-plugin-store|vwb-panel|Identifier\s*'files'\s*has\s*already|服务名冲突|服务\s*冲突|Node\.js\s*v24|reload\s*card\b|shipped\s*"standard"\s*preset|standard\s*preset\s*fails\s*to\s*mount|persona,\s*tool:pwsh|fail-fast|fail-fast.*?无跳过|plugin\s*install\s*reports\s*success|silently\s*disables|dsh\.profile\.bundles\s*条目|host\s*plane\s*are\s*invisible|cordis_inspect_query|profile\s*组合可能|混用不同版本|bundle\s*patch|host\s*与\s*preset\s*双挂|skill.*?静默剥掉|host-plane)/i] },
  { id: 'plugin-install', label: '插件 / npm 安装失败 / dist-tag / peer 依赖缺失',
    patterns: [/(?:dsh\s*plugin|@deepseek-ai\/dsh|peer-?dep|ERESOLVE|dist-?tag|cordis\s*反向|package\.json|cordis-plugin-group|@deepseek-ai\/dsh-type-meta|unpublished|npm\s*warn|npm\s*11|allow-scripts|core\.hooksPath|build-fail|node-pty|msys2|fail-fast|fail-fast.*?无跳过|js-yaml|dsh-app-boot|@deepseek-ai\/dsh-headless|headless\s*profile|unspecified\s*plugins|koffi|3\.1\.4|依赖图缺陷|cordis\s*反向|互成环|严格解析器|cannot\s*be\s*installed|GCC\s*<\s*10|profiles\/node_modules|npm\s*install\s*会清空|dep.*?tree|EADDRINUSE)/i] },

  // ===== Resume / fork / session lifecycle =====
  { id: 'session-resume-fork', label: '会话 resume / fork / 新建失败',
    patterns: [/(?:session\s*resume|fork\s*会话|新建会话|new\s*session\s*silently|recentWorkspaceId|Unassigned|空白会话|未分组|adding\s*a\s*workspace|create.*?workspace|create.*?session|preset\s*roots|composeProfile|session\.append|ignorable\s*标记|ignorable\s*marker|deferred|cordis\s*preset\s*skill|default\s*agent\s*preset\s*no\s*longer|workspace\.rename|空白\s*引导|default\s*preset\s*after\s*sending|preset\s*chosen\s*on\s*the\s*new-session|silently\s*replaced|composer\s*disappears|silently\s*reuses|agent\s*preset.*?silently|preset\s*switches|presetSwitches|sharing\s*blank\s*session|session-?list\s*gap|fork\s*会话丢失|父会话\s*读取|edit\s*requires\s*reading|node\s*is\s*not\s*in\s*PATH|silently\s*fails\s*when.*?node|silently\s*fails\s*when.*?default\s*agent|silently\s*fails\s*when\s*the\s*default|agent-presets:\s*refusing|refusing\s*to\s*compose\s*an\s*unscoped|changing\s*the\s*default\s*agent\s*preset|workspace\s*reuses.*?blank\s*session)/i] },
  { id: 'session-blank-frame', label: '会话帧 / chat 框空白 / 输入消失',
    patterns: [/(?:Chat\s*frame\s*blanks|typed\s*text\s*vanishes|slot\s*entry|abdicate|markdown\s*image\s*reference|content-bearing\s*slash\s*commands?|新会话仅执行|slash\s*commands?.*?(?:blank|空白|不可见)|multi-?step\s*plan|多步规划|主分支任务状态|主分支\s*执行中|workflow.*?点击展开.*?没法收起|编排workflow)/i] },

  // ===== Tool execution environment =====
  { id: 'tool-shell-windows', label: 'Windows 工具执行 / node-pty / pnpm',
    patterns: [/(?:persistent\s*PTY\s*shell|node-pty|eval\s*--|taskkill|pnpm\s*install\s*splits|pnpm\s*install\s*fails|spawn\s*powershell|bash\s*子进程|persistent-bash|0xC0000142|win32\s*folder\s*dialog\s*worker|copy.*?多余换行|persistent\s*bash.*?win32|subprocess-?local|subprocess\s*local|0xC0000142|shell\s*工具|极简模式.*?shell|mininal\s*preset.*?shell|shell\s*因|bashism)/i] },
  { id: 'tool-image-vision', label: '图像 / 视觉 / 多模态模型门控错误',
    patterns: [/(?:image|gateway|vision|inputModalities|vision-router|粘贴.*?图片|纯文本.*?图像|supports\s*images|模型不支持|多模态|input\s*modalities|image-capable|locked\s*to\s*image-capable|switching\s*back\s*to.*?text-only|无法切换|文本模型|zero-output\s*image\s*failures)/i] },
  { id: 'tool-compaction', label: '强制压缩 / compaction 损坏上下文',
    patterns: [/(?:compaction\s*request|强制上下文压缩|compaction\s*misses|compaction\s*drops|sourceEventSeqs\s*导致历史永久)/i] },

  // ===== Settings / schema validation =====
  { id: 'settings-save', label: 'Settings 写入失败 / 锁死 / 字段缺失',
    patterns: [/(?:settings\s*save\s*fails|暂时无法保存|writer\s*lock|settings\.wire-redaction|settings.*?JSON|in-flight\s*settings|scrubbedParentEnv|defaultTimeoutMs\s*:\s*0|timeout\s*:\s*0|hook\s*matcher|config.*?(?:TypeError|schema)|Standard\s*Schema|hooks\s*配置\s*timeout|blocking\s*hook|replacement\s*registration\s*stale|orphan\s*writer\s*lock|settings.*?watchers|watchers\s*can\s*outlive|external\s*edits\s*silently|update\s*race\s*window)/i] },

  // ===== UI backend connection / process =====
  { id: 'backend-disconnect', label: '后端退出 / 进程卡死 / 状态不同步',
    patterns: [/(?:后端退出|ConnectionBanner|永远卡在|卡在.*?运行|永久卡死|永久\s*停留|status\s*不更新|page.*?does\s*not\s*appear|subagent.*?在 UI|empty\s*project|process\s*crashes|dsh\s*web\s*freezes|whole-process\s*deadlock|force-kill.*?(?:restarts|host|recovers)|主机访问远程|host.*?kill|host\s*进程\s*kill|agent\s*重启\s*DSH|自身宿主|运行中|停止响应|unhandled\s*message|orphan|detach|任务追踪不会更新|任务追踪\s*不更新|任务.*?完成\s*却.*?显示.*?完成|archived\s*active\s*conversation|keeps\s*running|任务没有完成.*?直接显示完成|任务没有完成却直接显示完成)/i] },
  { id: 'subprocess-orphan', label: '子进程残留 / 孤儿 / EACCES / ENOENT',
    patterns: [/(?:subprocess.*?orphan|orphan|EACCES|ENOENT|tmp.*?(?:leftover|残留|leak)|ensureSymlink|process\s*restart|taskkill|0xC0000142|EIO|process\s*crash|process\s*exits|process\s*fail|fatal\s*exit|ENOSYS|EAGAIN|ETXTBSY|session\s*log\s*被外部删除|outside\s*delete|启动代码编译命令|无限等待|无限重启命令|compilation\s*error\s*loops|compile\s*command)/i] },

  // ===== Range / long-tail / obscure =====
  { id: 'usage-billing', label: '用量 / 计费 / tokenUsage 投影错误',
    patterns: [/(?:usage-query|usage-query|Retry\s*attempts\s*and\s*compaction\s*requests|tokenUsage\s*projection|reasoningTokens|Decode\s*speed|cutoff\s*被强制截断)/i] },
  { id: 'misc', label: '其他 / 杂项',
    patterns: [/(?:decode_speed|No\s*GPU\s*access|fsync.*?(?:missing|not)|JSONL\s*torn-tail|sdk\.snapshot|template\s*string|GPU\s*access|visual\s*diff|HMR|nix|Nix-built|\.git|\.tmp\s*files|python\s*notification|notification\s*subscriptions|terminal_send|pipe\s*closed|frames\s*race|geolocation|history\s*invisible|gap-repair|message.*?id|memory\s*grows|PartialAccumulator|interrupted-turn\s*closers|synthetic\s*closers|Plan\s*mode\s*restart|pgid-reuse|wire-redaction|BOM|UTF-?8\s*BOM|host\.describe|hardcoded\s*version|trim\s*on\s*undefined|cordis\.yml|profile\s*package\.json|WKWebView|3-?line\s*fix|chat\s*frame\s*blanks|strip\s*BOM|cordis-?plugin-?group|SQLite\s*scanRows|torn-tail\s*tolerance|jsonl\.zstd|checkRootEncoding|pathname\s*race|fs-sandbox|whale|memory\s*leak|memory.*?leak|清理\s*测试|cordis.*?环|umbrella|deepseek-harness\s*umbrella|terminal\s*without|signin|signin|--?\s*out\s*空字符串|scripts\/release|recursively|删除整个仓库|LF\s*line\s*endings|CRLF|web_fetch|profile\s*boot|application\s*bundle|booting\s*a\s*profile|template\s*string.*?escap|llm\s*template|esc\s*backslash|llm-deepseek.*?序列化|序列化.*?前.*?role:tool|auto-?translate|\/claude\/skill|soft\s*link|skill.*?frontmatter|yaml\s*parse|colon-containing|skills.*?silently\s*dropped|atomic|cordis\.yml\s*is\s*rewritten|non-?atomic|flaky\s*timeout|oxlint-contract|模板字符串的转义出问题|转义出了问题|whale\s*一直|对话启动失败报错|遇到个bug.*?它自己改了|它自己改了|dsh源代码问题|有没有人研究一下)/i] },
];

// 2-pass classify: longest pattern first wins
const classify = (title) => {
  for (const cat of CATEGORIES) {
    for (const re of cat.patterns) {
      if (re.test(title)) return cat.id;
    }
  }
  return 'uncategorized';
};

const buckets = new Map();
const uncategorized = [];
for (const e of entries) {
  const id = classify(e.title);
  if (id === 'uncategorized') uncategorized.push({ number: e.number, title: e.title });
  if (!buckets.has(id)) buckets.set(id, []);
  buckets.get(id).push(e);
}

const labelById = new Map(CATEGORIES.map(c => [c.id, c.label]));

const sorted = [...buckets.entries()]
  .sort((a, b) => b[1].length - a[1].length);

console.log(`# 总数: ${entries.length}`);
console.log(`# 已分类数: ${entries.length - uncategorized.length}`);
console.log(`# 未分类数: ${uncategorized.length}`);
console.log('');
console.log('| # | category_id | 类别 | 计数 |');
console.log('|---|---|---|---|');
let rank = 1;
for (const [id, list] of sorted) {
  console.log(`| ${rank++} | ${id} | ${labelById.get(id)} | ${list.length} |`);
}

console.log('');
console.log('## 未分类 ({}条)'.replace('{}', uncategorized.length));
for (const u of uncategorized.slice(0, 30)) {
  console.log(`- #${u.number} ${u.title}`);
}
if (uncategorized.length > 30) console.log(`... (省略 ${uncategorized.length - 30} 条)`);

import { writeFileSync } from 'node:fs';
const md = [];
md.push('# DSH Bug 根因分类报告');
md.push('');
md.push(`> 数据源: \`history.jsonl\` (${entries.length} 条，[Bug] 标签或 [Bug]/[BUG]/BUG/Bug 前缀的讨论)`);
md.push(`> 生成时间: ${new Date().toISOString()}`);
md.push('');
md.push('## 分类总览');
md.push('');
md.push('| # | 类别 | 计数 | 占比 |');
md.push('|---|---|---:|---:|');
const total = entries.length;
let rank2 = 1;
for (const [id, list] of sorted) {
  md.push(`| ${rank2++} | **${labelById.get(id)}** <br/> \`${id}\` | ${list.length} | ${((list.length/total)*100).toFixed(1)}% |`);
}
md.push('');
md.push(`**总计**: ${total} 条 · 已分类 ${total - uncategorized.length} · 未分类 ${uncategorized.length}`);
md.push('');
md.push('## 各分类下的 issue 列表');
md.push('');
for (const [id, list] of sorted) {
  md.push(`### ${labelById.get(id)}  *(n=${list.length})*`);
  md.push('');
  for (const e of list.slice(0, 50)) {
    md.push(`- [#${e.number}](${e.url}) — ${e.title.replace(/\[(Bug|BUG)\]\s*/g,'')}`);
  }
  if (list.length > 50) md.push(`- _... (省略 ${list.length - 50} 条)_`);
  md.push('');
}
md.push('## 未分类');
md.push('');
for (const u of uncategorized) {
  md.push(`- [#${u.number}](https://github.com/deepseek-ai/deepseek-harness/discussions/${u.number}) — ${u.title}`);
}
writeFileSync('digest/classification.md', md.join('\n'));
console.log('\nWrote digest/classification.md');