Add-Type -AssemblyName System.Drawing
$dir = "C:\Users\pc\.gemini\antigravity\scratch\-1-new\assets\workflow\clean"

1..14 | ForEach-Object {
    $file = "step$_.png"
    $path = Join-Path $dir $file
    
    if (Test-Path $path) {
        # 1. 깃에서 원본 이미지로 되돌리기 (기존의 어색한 네모 제거)
        try { git checkout HEAD -- $path 2>$null } catch {}
        
        $img = $null
        try {
            $img = [System.Drawing.Image]::FromFile($path)
            $bmp = New-Object System.Drawing.Bitmap($img.Width, $img.Height)
            $g = [System.Drawing.Graphics]::FromImage($bmp)
            $g.DrawImage($img, 0, 0, $img.Width, $img.Height)
            
            # 2. 로고 크기 및 정확한 좌표 설정 (핸드폰 베젤 안쪽)
            $w = 32
            $h = 32
            
            if ($img.Width -eq 944) {
                $rectX = $img.Width - 62
                $rectY = $img.Height - 65
            } else {
                $rectX = $img.Width - 65
                $rectY = $img.Height - 70
            }
            
            # 3. 로고 바로 왼쪽의 깨끗한 32x32 영역 복사
            $srcRect = New-Object System.Drawing.Rectangle($rectX - $w, $rectY, $w, $h)
            $clone = $bmp.Clone($srcRect, $bmp.PixelFormat)
            
            # 4. 좌우 반전 (거울 반사 기법)
            $clone.RotateFlip([System.Drawing.RotateFlipType]::RotateNoneFlipX)
            
            # 5. 로고 위치에 반전된 깨끗한 배경 덮어쓰기
            $g.DrawImage($clone, $rectX, $rectY)
            
            $clone.Dispose()
            $g.Dispose()
            $img.Dispose()
            
            $bmp.Save($path)
            $bmp.Dispose()
            
            Write-Host "[완료] $file - 로고 완벽 제거 완료!" -ForegroundColor Green
        } catch {
            Write-Host "[오류] $file : $($_.Exception.Message)" -ForegroundColor Red
            if ($img -ne $null) { $img.Dispose() }
        }
    }
}
