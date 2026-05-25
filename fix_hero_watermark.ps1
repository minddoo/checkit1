Add-Type -AssemblyName System.Drawing

$dir = "C:\Users\pc\.gemini\antigravity\scratch\-1-new\assets"

# 복원할 대상 이미지 파일들
$files = "hero-1.jpg", "hero-2.jpg", "hero-3.jpg", "hero.png", "cartoon_consult.png", "cartoon_language.png", "cartoon_notification.png", "cartoon_results.png", "consultation.png", "interior.png", "korea-banner.png", "process.png", "reality-bg.png"

# 워터마크 제거 영역 크기 (제미나이 로고 기준)
$w = 65
$h = 65

foreach ($file in $files) {
    $path = Join-Path $dir $file
    
    if (Test-Path $path) {
        # 1. 회색으로 덧칠해졌던 이미지를 Git에서 원본으로 복구
        try {
            git checkout HEAD -- $path 2>$null
        } catch {}

        $img = $null
        try {
            $img = [System.Drawing.Image]::FromFile($path)
            $bmp = New-Object System.Drawing.Bitmap($img.Width, $img.Height)
            $g = [System.Drawing.Graphics]::FromImage($bmp)
            
            # 원본 이미지 그리기
            $g.DrawImage($img, 0, 0, $img.Width, $img.Height)
            
            # 워터마크 위치 (우측 하단)
            $x = $img.Width - $w
            $y = $img.Height - $h
            
            # 2. 핵심 복원 기술: '거울 반사(Mirror Reflection)'
            # 워터마크 바로 왼쪽에 있는 깨끗한 배경 영역을 복사
            $srcRect = New-Object System.Drawing.Rectangle($x - $w, $y, $w, $h)
            $clone = $bmp.Clone($srcRect, $bmp.PixelFormat)
            
            # 복사한 조각을 '좌우 반전' 시킴
            # (반전시킨 후 덮어쓰면 기존 배경과 픽셀 경계선이 100% 일치하여 티가 안 남)
            $clone.RotateFlip([System.Drawing.RotateFlipType]::RotateNoneFlipX)
            
            # 제미나이 로고 위에 덮어쓰기
            $g.DrawImage($clone, $x, $y)
            
            $clone.Dispose()
            $g.Dispose()
            $img.Dispose()
            
            # 최종 저장
            $bmp.Save($path)
            $bmp.Dispose()
            
            Write-Host "[완료] $file - 주변 배경색 기반 완벽 복원 완료!" -ForegroundColor Green
        } catch {
            Write-Host "[오류] $file 처리 중 문제 발생: $($_.Exception.Message)" -ForegroundColor Red
            if ($img -ne $null) { $img.Dispose() }
        }
    }
}
