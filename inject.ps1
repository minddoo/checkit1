$ErrorActionPreference = "Stop"
$html = Get-Content -Path index.html -Raw -Encoding UTF8
$snippet = Get-Content -Path hero_snippet.html -Raw -Encoding UTF8

if ($html -match '(?s)<section id="hero-mobile.*?</section>') {
    $html = $html -replace '(?s)<section id="hero-mobile.*?</section>', $snippet
    Set-Content -Path index.html -Value $html -Encoding UTF8
    Write-Output "Successfully applied snippet with UTF-8!"
} else {
    Write-Output "Did not find the section."
}
