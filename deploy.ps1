# deploy.ps1
# 1. Commit and push changes to GitHub
Write-Host "Committing and pushing changes to GitHub..." -ForegroundColor Cyan
git add index.html main.js
git commit -m "fix: remove simple layout from google translate element and fix translation cookie logic"
git push origin main

# 2. Deploy to Firebase Hosting
Write-Host "Deploying to Firebase Hosting..." -ForegroundColor Cyan
firebase deploy --only hosting

Write-Host "Deployment completed!" -ForegroundColor Green
