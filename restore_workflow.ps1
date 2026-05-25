$dir = "C:\Users\pc\.gemini\antigravity\scratch\-1-new\assets\workflow\clean"

# 1. 제가 망쳐놓은 모든 이미지를 완벽한 원본으로 되돌립니다.
1..14 | ForEach-Object {
    $file = "step$_.png"
    $path = Join-Path $dir $file
    if (Test-Path $path) {
        try { 
            git checkout HEAD -- $path 2>$null
            Write-Host "[복구 완료] $file - 원본 상태로 롤백" -ForegroundColor Cyan
        } catch {}
    }
}
