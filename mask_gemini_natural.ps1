Add-Type -AssemblyName System.Drawing

$files = @("step7.png", "step8.png", "step9.png", "step10.png", "step11.png", "step12.png", "step13.png")
$dir = "C:\Users\pc\.gemini\antigravity\scratch\-1-new\assets\workflow\clean"

foreach ($file in $files) {
    # First restore the original uncropped/unmasked image from git
    git checkout 764ff18 -- (Join-Path "assets\workflow\clean" $file)
    
    $path = Join-Path $dir $file
    if (Test-Path $path) {
        $img = [System.Drawing.Image]::FromFile($path)
        $bmp = New-Object System.Drawing.Bitmap($img.Width, $img.Height)
        $g = [System.Drawing.Graphics]::FromImage($bmp)
        $g.DrawImage($img, 0, 0, $img.Width, $img.Height)
        
        # Dimensions of the mask area
        $rectWidth = 80
        $rectHeight = 65
        $rectX = $img.Width - 110
        $rectY = $img.Height - 90
        
        # To make it blend naturally, we sample the pixel color to the left of the sparkle
        # (inside the same chat input text area)
        $sampleX = $rectX - 15
        $sampleY = $rectY + ($rectHeight / 2)
        
        # Get the pixel color at the sampled location
        $sampleColor = $bmp.GetPixel($sampleX, $sampleY)
        
        # Create a solid brush using the sampled color
        $brush = New-Object System.Drawing.SolidBrush($sampleColor)
        
        # Paint the rectangle with the exact sampled color
        $g.FillRectangle($brush, $rectX, $rectY, $rectWidth, $rectHeight)
        
        $brush.Dispose()
        $g.Dispose()
        $img.Dispose()
        
        # Save the naturally blended image back
        $bmp.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
        $bmp.Dispose()
        Write-Host "Naturally masked Gemini logo in $file with sampled color (R:$($sampleColor.R), G:$($sampleColor.G), B:$($sampleColor.B))"
    }
}
