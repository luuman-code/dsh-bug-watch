# scripts/install-task.ps1
# 在 Windows 任务计划程序里注册"每日 09:00 自动跑 triage.ps1"的任务。
# 用法（管理员 PowerShell）：
#   .\install-task.ps1
# 卸载：
#   .\install-task.ps1 -Uninstall
# 立即跑一次：
#   .\install-task.ps1 -RunNow

param(
    [switch]$Uninstall,
    [switch]$RunNow
)

$ErrorActionPreference = 'Stop'
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$RepoRoot = Resolve-Path (Join-Path $ScriptDir '..')
$TriageScript = Join-Path $ScriptDir 'triage.ps1'
$TaskName = 'DSH-BugWatch-Triage'

if ($Uninstall) {
    $existing = Get-ScheduledTask -TaskName $TaskName -ErrorAction SilentlyContinue
    if ($existing) {
        Unregister-ScheduledTask -TaskName $TaskName -Confirm:$false
        Write-Host "✅ 已卸载任务 '$TaskName'。" -ForegroundColor Green
    } else {
        Write-Host "ℹ️  任务 '$TaskName' 不存在，无需卸载。" -ForegroundColor Yellow
    }
    return
}

$action = New-ScheduledTaskAction `
    -Execute 'powershell.exe' `
    -Argument "-NoProfile -ExecutionPolicy Bypass -File `"$TriageScript`" -AutoClipboard" `
    -WorkingDirectory $RepoRoot

$trigger = New-ScheduledTaskTrigger -Daily -At '09:00'

$principal = New-ScheduledTaskPrincipal `
    -UserId $env:USERNAME `
    -LogonType Interactive `
    -RunLevel Limited

$settings = New-ScheduledTaskSettingsSet `
    -StartWhenAvailable `
    -DontStopOnIdleEnd `
    -ExecutionTimeLimit (New-TimeSpan -Minutes 10) `
    -RestartCount 3 `
    -RestartInterval (New-TimeSpan -Minutes 1)

Register-ScheduledTask `
    -TaskName $TaskName `
    -Action $action `
    -Trigger $trigger `
    -Principal $principal `
    -Settings $settings `
    -Description '每日 09:00 自动读取 dsh-bug-watch/digest/ 并生成 DSH 分诊 prompt 到 triage/。' `
    -Force | Out-Null

Write-Host "✅ 已注册任务 '$TaskName'，每日 09:00 触发。" -ForegroundColor Green
Write-Host "   - 脚本: $TriageScript" -ForegroundColor Cyan
Write-Host "   - 工作目录: $RepoRoot" -ForegroundColor Cyan
Write-Host "   - 立即跑一次: .\install-task.ps1 -RunNow" -ForegroundColor Cyan

if ($RunNow) {
    Write-Host "🚀 立即触发一次..." -ForegroundColor Yellow
    Start-ScheduledTask -TaskName $TaskName
    Write-Host "   已派发，结果查看 triage/prompt-$(Get-Date -Format 'yyyy-MM-dd').md" -ForegroundColor Cyan
}