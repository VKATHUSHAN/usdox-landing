# VERCEL ENV SYNC HELPER
# This script helps you safely sync environment variables to Vercel
# Run this manually after reviewing which secrets to upload

Write-Host "=== VERCEL ENVIRONMENT SYNC ===" -ForegroundColor Cyan
Write-Host "Extracting NEXT_PUBLIC_ variables..." -ForegroundColor Yellow

# Read .env and extract public vars
$envContent = Get-Content ".env" | Where-Object { 
    $_ -match "^NEXT_PUBLIC_" -and $_ -notmatch "^#" 
}

# Create .env.production for Vercel
$envContent | Out-File ".env.production" -Encoding utf8
Write-Host "✅ Created .env.production with public variables" -ForegroundColor Green

Write-Host "`nNext steps:" -ForegroundColor Cyan
Write-Host "1. Review .env.production to ensure no secrets leaked"
Write-Host "2. Run: vercel env pull"
Write-Host "3. Add secrets manually via Vercel dashboard or CLI"
Write-Host "4. Deploy: vercel --prod"
