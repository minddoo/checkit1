Add-Type -AssemblyName System.Drawing
$dir = "C:\Users\pc\.gemini\antigravity\scratch\-1-new\assets\workflow\clean"

1..14 | ForEach-Object {
    $file = "step$_.png"
    $path = Join-Path $dir $file
    
    if (Test-Path $path) {
        # 원본으로 초기화
        try { git checkout HEAD -- $path 2>$null } catch {}
        
        $img = $null
        try {
            $img = [System.Drawing.Image]::FromFile($path)
            $bmp = New-Object System.Drawing.Bitmap($img.Width, $img.Height)
            $g = [System.Drawing.Graphics]::FromImage($bmp)
            $g.DrawImage($img, 0, 0, $img.Width, $img.Height)
            
            $imgW = [int]$img.Width
            $imgH = [int]$img.Height
            
            # 넉넉하게 덮기 위해 50x50 사이즈 사용
            $w = 50
            $h = 50
            
            if ($imgW -eq 944) {
                $rectX = $imgW - 65
                $rectY = $imgH - 70
            } else {
                $rectX = $imgW - 70
                $rectY = $imgH - 75
            }
            
            # 워터마크 바로 위쪽(안전지대)의 바탕색 1픽셀을 스포이드로 찍음
            $sampleColor = $bmp.GetPixel($rectX + 10, $rectY - 5)
            $brush = New-Object System.Drawing.SolidBrush($sampleColor)
            
            # 추출한 바탕색으로 네모를 칠해버림 (버튼 글씨가 복사되는 현상 원천 차단)
            $g.FillRectangle($brush, $rectX, $rectY, $w, $h)
            
            $brush.Dispose()
            $g.Dispose()
            $img.Dispose()
            
            $bmp.Save($path)
            $bmp.Dispose()
            
            Write-Host "[완료] $file - 단색 채우기로 깔끔하게 덮음!" -ForegroundColor Green
        } catch {
            Write-Host "[오류] $file : $($_.Exception.Message)" -ForegroundColor Red
            if ($img -ne $null) { $img.Dispose() }
        }
    }
}
