Add-Type -AssemblyName System.Drawing

$files = @("step7.png", "step8.png", "step9.png", "step10.png", "step11.png", "step12.png", "step13.png")
$dir = "C:\Users\pc\.gemini\antigravity\scratch\-1-new\assets\workflow\clean"

foreach ($file in $files) {
    $path = Join-Path $dir $file
    if (Test-Path $path) {
        $img = [System.Drawing.Image]::FromFile($path)
        
        # Create a graphics object to edit the image
        $bmp = New-Object System.Drawing.Bitmap($img.Width, $img.Height)
        $g = [System.Drawing.Graphics]::FromImage($bmp)
        
        # Draw the original image onto the bitmap
        $g.DrawImage($img, 0, 0, $img.Width, $img.Height)
        
        # Let's paint a solid white rectangle over the Gemini logo.
        # The logo is in the bottom right corner of the prompt bar.
        # In Gemini UI, the sparkle is at the bottom right.
        # Let's cover X: Width - 100 to Width - 20, Y: Height - 90 to Height - 20.
        # We use a white brush.
        $brush = [System.Drawing.Brushes]::White
        
        # Let's also detect if the background is slightly light gray (#f0f4f9) by sampling a pixel near it,
        # or we can just paint a light-gray/white box. Most Gemini text input bars are white (#ffffff).
        
        $rectWidth = 80
        $rectHeight = 60
        $rectX = $img.Width - 110
        $rectY = $img.Height - 85
        
        $g.FillRectangle($brush, $rectX, $rectY, $rectWidth, $rectHeight)
        
        $g.Dispose()
        $img.Dispose()
        
        # Save back as PNG
        $bmp.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
        $bmp.Dispose()
        Write-Host "Masked Gemini logo in $file"
    }
}
