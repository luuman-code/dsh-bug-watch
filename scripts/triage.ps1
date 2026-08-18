# scripts/triage.ps1
# 读取 digest/index.md 与今日 daily，组装一份给 DSH subagent 的分诊 prompt，
# 写到 triage/prompt-YYYY-MM-DD.md，并打印使用说明（如何把 prompt 喂给 DSH）。
#
# 用法：
#   .\triage.ps1                 # 默认今天
#   .\triage.ps1 -Date 2026-01-15
#   .\triage.ps1 -OpenEditor    # 写入后用 notepad 打开 prompt
#   .\triage.ps1 -AutoClipboard # 把 prompt 内容复制到剪贴板

param(
    [string]$Date = (Get-Date -Format 'yyyy-MM-dd'),
    [switch]$OpenEditor,
    [switch]$AutoClipboard
)

$ErrorActionPreference = 'Stop'
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$RepoRoot = Resolve-Path (Join-Path $ScriptDir '..')
$DigestDir = Join-Path $RepoRoot 'digest'
$TriageDir = Join-Path $RepoRoot 'triage'

$IndexPath = Join-Path $DigestDir 'index.md'
$DailyPath = Join-Path $DigestDir "$Date.md"

if (-not (Test-Path $IndexPath)) {
    Write-Error "未找到 $IndexPath —— 请先跑一次 GitHub Action 或本地 node scripts/fetch-bugs.mjs。"
}

if (-not (Test-Path $DailyPath)) {
    Write-Warning "未找到当日页面 $DailyPath，使用 index.md 作为输入。"
    $DailyPath = $IndexPath
}

$Digest = Get-Content -LiteralPath $IndexPath -Raw -Encoding UTF8
$Daily = Get-Content -LiteralPath $DailyPath -Raw -Encoding UTF8

$PromptTemplate = Get-Content -LiteralPath (Join-Path $RepoRoot 'prompts/triage-prompt.md') -Raw -Encoding UTF8

# 渲染 prompt
$Today = Get-Date -Format 'yyyy-MM-dd'
$Prompt = $PromptTemplate -replace '\{\{DATE\}\}', $Today
$Prompt = $Prompt.Replace('{{DIGEST_INDEX}}', $Digest)
$Prompt = $Prompt.Replace('{{DIGEST_DAILY}}', $Daily)

if (-not (Test-Path $TriageDir)) {
    New-Item -ItemType Directory -Force -Path $TriageDir | Out-Null
}

$PromptPath = Join-Path $TriageDir "prompt-$Today.md"
$ReportPath = Join-Path $TriageDir "report-$Today.md"

Set-Content -LiteralPath $PromptPath -Value $Prompt -Encoding UTF8 -NoNewline

Write-Host ""
Write-Host "✅ DSH 分诊 prompt 已写入 $PromptPath" -ForegroundColor Green
Write-Host "📋 计划产出报告: $ReportPath" -ForegroundColor Cyan
Write-Host ""

# 复制到剪贴板
if ($AutoClipboard) {
    try {
        Set-Clipboard -Value $Prompt
        Write-Host "📎 Prompt 已复制到剪贴板。" -ForegroundColor Green
    } catch {
        Write-Warning "剪贴板写入失败：$($_.Exception.Message)"
    }
}

# 用默认编辑器打开
if ($OpenEditor) {
    try {
        Start-Process notepad.exe -ArgumentList $PromptPath
    } catch {
        Write-Warning "无法启动 notepad：$($_.Exception.Message)"
    }
}

Write-Host "➡️  使用方法：" -ForegroundColor Yellow
Write-Host "   1) 打开 DSH Web GUI（http://127.0.0.1:3080）"
Write-Host "   2) 新建会话，粘贴以下文件内容作为第一条 user 消息："
Write-Host "        $PromptPath"
Write-Host "   3) 让 DSH 子代理读取并产出 triage/report-$Today.md"
Write-Host ""
Write-Host "💡 提示：以后可以用 -AutoClipboard 一键复制到剪贴板。"