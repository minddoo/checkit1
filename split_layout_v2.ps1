$ErrorActionPreference = "Stop"
$html = Get-Content -Path index.html -Raw -Encoding UTF8

if ($html -match '(?s)(?i)(<main>)(.*?)(</main>)') {
   $inner = $matches[2]
   $mobileInner = $inner -replace 'id="([^"]+)"', 'id="$1-mobile"'
   
   $newBlock = "<main>`r`n" +
               "    <!-- PC LAYOUT (Protected) -->`r`n" +
               "    <div class=`"pc-layout-wrapper`">" + $inner + "    </div><!-- /pc-layout-wrapper -->`r`n`r`n" +
               "    <!-- MOBILE LAYOUT (Customizable) -->`r`n" +
               "    <div class=`"mobile-layout-wrapper`">" + $mobileInner + "    </div><!-- /mobile-layout-wrapper -->`r`n" +
               "</main>"
   
   # Use literal replace snippet
   $html = $html.Replace($matches[0], $newBlock)
   Set-Content -Path index.html -Value $html -Encoding UTF8
   Write-Output "Successfully split index.html."
} else {
   Write-Output "Regex did not match."
}
