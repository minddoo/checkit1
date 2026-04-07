Add-Type -AssemblyName System.Drawing
$src = [System.Drawing.Image]::FromFile('user_screenshot.png')
$bmp = New-Object System.Drawing.Bitmap(520, 469)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.DrawImage($src, (New-Object System.Drawing.Rectangle(0, 0, 520, 469)), (New-Object System.Drawing.Rectangle(240, 0, 520, 469)), [System.Drawing.GraphicsUnit]::Pixel)
$bmp.Save('assets/hero-8.jpg', [System.Drawing.Imaging.ImageFormat]::Jpeg)
$g.Dispose()
$bmp.Dispose()
$src.Dispose()
Write-Output "Successfully cropped and saved to assets/hero-8.jpg"
