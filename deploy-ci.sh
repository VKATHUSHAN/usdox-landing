#!/bin/bash
# 🔒 Deploy Swiss-Grade CI to GitHub

echo "🔍 Checking Git status..."
git status --short

echo ""
echo "📦 Adding token data and CI workflow..."
git add .github/workflows/validate-token-data.yml
git add contracts/
git add tokens/
git add CI_FIX_SUMMARY.md

echo ""
echo "📝 Committing changes..."
git commit -m "feat: add Swiss-grade token data validation CI

- Fix jq array indexing error on abi.json
- Separate ABI (array) from token config (object)
- Enforce TWUSD decimals = 6 in CI
- Verify contract address matches canonical
- Add comprehensive token data structure

Closes #[issue-number-if-applicable]"

echo ""
echo "🚀 Ready to push!"
echo "Run: git push origin main"
echo ""
echo "✅ CI will validate:"
echo "   • JSON syntax for all files"
echo "   • TWUSD decimals = 6"
echo "   • Contract address = 0x7BeB51807E3c8BdB10A2868bD51c2D9E1764925D"
