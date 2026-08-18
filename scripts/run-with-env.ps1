# scripts/run-with-env.ps1
# 从 .env 读 GH_TOKEN 然后跑 fetch-bugs.mjs。
# .env 是 KEY=VALUE 形式的简单文本，# 开头是注释。
# 用法：
#   .\run-with-env.ps1                # 跑一次
#   .\run-with-env.ps1 -ShowToken     # 同时打印被遮罩的 token（确认 .env 配对了）

param(
    [switch]$ShowToken
)

$ErrorActionPreference = 'Stop'
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$RepoRoot = Resolve-Path (Join-Path $ScriptDir '..')
$EnvFile = Join-Path $RepoRoot '.env'

if (-not (Test-Path $EnvFile)) {
    Write-Host "❌ 找不到 $EnvFile" -ForegroundColor Red
    Write-Host ""
    Write-Host "请创建该文件，内容一行：" -ForegroundColor Yellow
    Write-Host "  GH_TOKEN=ghp_xxx" -ForegroundColor Yellow
    Write-Host "（.env 已加入 .gitignore，不会上传到 GitHub）" -ForegroundColor Yellow
    exit 1
}

# 解析 .env
$tokens = @{}
foreach ($line in Get-Content -LiteralPath $EnvFile) {
    $trimmed = $line.Trim()
    if (-not $trimmed -or $trimmed.StartsWith('#')) { continue }
    $idx = $trimmed.IndexOf('=')
    if ($idx -lt 1) { continue }
    $k = $trimmed.Substring(0, $idx).Trim()
    $v = $trimmed.Substring($idx + 1).Trim().Trim('"', "'")
    $tokens[$k] = $v
}

if (-not $tokens.ContainsKey('GH_TOKEN') -or -not $tokens['GH_TOKEN']) {
    Write-Host "❌ .env 里没有 GH_TOKEN=<非空>" -ForegroundColor Red
    exit 1
}

$env:GH_TOKEN = $tokens['GH_TOKEN']

if ($ShowToken) {
    $masked = if ($env:GH_TOKEN.Length -gt 12) {
        $env:GH_TOKEN.Substring(0, 6) + '…' + $env:GH_TOKEN.Substring($env:GH_TOKEN.Length - 4)
    } else {
        '<too-short>'
    }
    Write-Host "🔑 GH_TOKEN = $masked (length $($env:GH_TOKEN.Length))" -ForegroundColor Cyan
}

Set-Location $RepoRoot
Write-Host "🚀 跑 fetch-bugs.mjs ..." -ForegroundColor Cyan
node scripts/fetch-bugs.mjs
$rc = $LASTEXITCODE

# 清掉进程内的 token（防御性）
Remove-Item Env:GH_TOKEN -ErrorAction SilentlyContinue

if ($rc -eq 0) {
    Write-Host ""
    Write-Host "✅ 完成。查看产物：" -ForegroundColor Green
    Write-Host "   digest/index.md"
    Write-Host "   digest/$((Get-Date -Format 'yyyy-MM-dd')).md"
    Write-Host "   digest/history.jsonl"
} else {
    Write-Host "❌ 退出码 $rc" -ForegroundColor Red
    exit $rc
}