$file = "index.html"
$lines = Get-Content $file -Encoding UTF8

$startIndex = -1
$endIndex = -1

for ($i = 0; $i -lt $lines.Length; $i++) {
    if ($lines[$i] -match "<!-- Legal Disclaimers \(Required\) -->") {
        $startIndex = $i
    }
    # It ends right before `<button type="submit" class="btn-primary auth-submit">Create Account</button>`
    if ($startIndex -ne -1 -and $i -gt $startIndex -and $lines[$i] -match '<button type="submit" class="btn-primary auth-submit">Create Account</button>') {
        $endIndex = $i
        break
    }
}

if ($startIndex -ne -1 -and $endIndex -ne -1) {
    Write-Host "Found block from $startIndex to $endIndex. Removing..."
    # We want to keep the line with the submit button ($endIndex) but remove everything from $startIndex up to $endIndex - 1.
    $before = $lines[0..($startIndex - 1)]
    $after  = $lines[$endIndex..($lines.Length - 1)]
    $combined = $before + $after
    $combined | Set-Content $file -Encoding UTF8
    Write-Host "Successfully removed the block."
} else {
    Write-Host "Block not found."
}
