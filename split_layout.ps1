$ErrorActionPreference = "Stop"

$html = Get-Content -Path index.html -Raw -Encoding UTF8
$html = $html -replace '<main>', "<main>`n    <div class=""pc-layout-wrapper"">"

$regex = [regex]'(?s)<main>`n    <div class="pc-layout-wrapper">(.*?)</main>'
$match = $regex.Match($html)

if ($match.Success) {
    $mainContent = $match.Groups[1].Value
    $mobileContent = [regex]::Replace($mainContent, 'id="([^"]+)"', 'id="$1-mobile"')
    
    $newMain = "<main>`n    <!-- ============================================== -->`n    <!-- PC VERSION LAYOUT (Strictly Protected)         -->`n    <!-- ============================================== -->`n    <div class=""pc-layout-wrapper"">$mainContent    </div> <!-- /pc-layout-wrapper -->`n`n    <!-- ============================================== -->`n    <!-- MOBILE VERSION LAYOUT (Customizable)           -->`n    <!-- ============================================== -->`n    <div class=""mobile-layout-wrapper"">$mobileContent    </div> <!-- /mobile-layout-wrapper -->`n</main>"
    
    $html = [regex]::Replace($html, '(?s)<main>.*?</main>', $newMain)
    Set-Content -Path index.html -Value $html -Encoding UTF8
    Write-Output "Successfully split index.html via PowerShell."
} else {
    Write-Output "Failed to match main content."
}
