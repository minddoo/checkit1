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
               
   $html = $html.Replace($matches[0], $newBlock)
   
   $snippet = Get-Content -Path hero_snippet.html -Raw -Encoding UTF8
   $html = $html -replace '(?s)<section id="hero-mobile".*?</section>', $snippet
   
   Set-Content -Path index.html -Value $html -Encoding UTF8
   Write-Output "Successfully split and injected!"
} else {
   Write-Output "Initial matching failed."
}
