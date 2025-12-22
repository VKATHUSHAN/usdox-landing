# 🔐 Environment Variables Setup Guide

## 📋 Overview

This project uses environment variables to store sensitive configuration data like API keys, contract addresses, and feature flags.

---

## 🚀 Quick Start

### **For Local Development:**

1. **Copy the example file:**
   ```bash
   cp .env.example .env.local
   ```

2. **Edit `.env.local` with your values:**
   ```bash
   # Replace placeholder values with real ones
   NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_actual_project_id
   NEXT_PUBLIC_GA_ID=G-YOURCODEHERE
   ```

3. **Start the dev server:**
   ```bash
   npm run dev
   ```

---

## 🌐 For Production (Vercel)

### **Option 1: Vercel Dashboard (Recommended)**

1. Go to your project on [Vercel Dashboard](https://vercel.com/dashboard)
2. Navigate to: **Settings → Environment Variables**
3. Add each variable:
   - **Key:** `NEXT_PUBLIC_TWUSD_CONTRACT`
   - **Value:** `0x7BeB51807E3c8BdB10A2868bD51c2D9E1764925D`
   - **Environment:** Production, Preview, Development (select as needed)

4. Click **Save**
5. **Redeploy** your project

### **Option 2: Vercel CLI**

```bash
vercel env add NEXT_PUBLIC_TWUSD_CONTRACT production
# Paste value when prompted: 0x7BeB51807E3c8BdB10A2868bD51c2D9E1764925D

vercel env add NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID production
# Paste your WalletConnect project ID
```

---

## 📝 File Structure

```
usdox-landing/
├── .env.example          ✅ Committed to Git (template)
├── .env                  ❌ NOT committed (production values)
├── .env.local            ❌ NOT committed (local development)
├── .env.development      ❌ NOT committed (dev overrides)
├── .env.production       ❌ NOT committed (prod overrides)
└── .gitignore            ✅ Ensures .env files stay private
```

---

## 🔑 Required Variables (Minimal Setup)

To get started, you only need these:

```bash
# .env.local (for local development)
NEXT_PUBLIC_TWUSD_CONTRACT=0x7BeB51807E3c8BdB10A2868bD51c2D9E1764925D
NEXT_PUBLIC_CHAIN_ID=1
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

Everything else is optional and can be added as needed.

---

## 🛠️ Optional Integrations

### **1. WalletConnect (for future wallet features)**

Get your project ID:
1. Visit: https://cloud.walletconnect.com
2. Create a new project
3. Copy the Project ID
4. Add to `.env.local`:
   ```bash
   NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=abc123...
   ```

### **2. Google Analytics**

1. Create GA4 property: https://analytics.google.com
2. Get Measurement ID (starts with `G-`)
3. Add to environment:
   ```bash
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

### **3. Etherscan API (for advanced features)**

1. Sign up: https://etherscan.io/apis
2. Get API key
3. Add as **server-side only** variable:
   ```bash
   ETHERSCAN_API_KEY=YOURKEYHERE
   ```
   ⚠️ **No `NEXT_PUBLIC_` prefix** (keeps it private)

### **4. Email Services (SendGrid/Mailchimp)**

For contact forms or newsletters:
```bash
SENDGRID_API_KEY=SG.xxx
SENDGRID_FROM_EMAIL=hello@theusdox.com
```

---

## 🔒 Security Best Practices

### ✅ **DO:**
- Keep `.env` files out of Git (already configured)
- Use `NEXT_PUBLIC_` prefix only for client-side variables
- Rotate API keys regularly (every 90 days)
- Store sensitive keys in Vercel dashboard
- Use different keys for dev/staging/production

### ❌ **DON'T:**
- Commit files containing real API keys
- Share `.env` files via Slack/email
- Hard-code sensitive values in source code
- Use the same API keys across environments

---

## 🧪 Testing Environment Variables

### **Check if variables are loaded:**

```typescript
// In any component or page:
console.log('Contract:', process.env.NEXT_PUBLIC_TWUSD_CONTRACT);
console.log('Chain ID:', process.env.NEXT_PUBLIC_CHAIN_ID);
```

### **Server-side check (API routes):**

```typescript
// pages/api/test.ts
export default function handler(req, res) {
  res.json({
    contract: process.env.NEXT_PUBLIC_TWUSD_CONTRACT,
    hasEtherscan: !!process.env.ETHERSCAN_API_KEY, // true/false
  });
}
```

Visit: `http://localhost:3000/api/test`

---

## 📦 Using Variables in Code

### **Client-side (Components/Pages):**

```typescript
// src/components/GetTWUSDButton.tsx
const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_TWUSD_CONTRACT;
const UNISWAP_URL = process.env.NEXT_PUBLIC_UNISWAP_URL;

export default function GetTWUSDButton() {
  const swapUrl = `${UNISWAP_URL}/swap?outputCurrency=${CONTRACT_ADDRESS}`;
  
  return <a href={swapUrl}>Get TWUSD</a>;
}
```

### **Server-side only (API Routes):**

```typescript
// pages/api/verify.ts
export default async function handler(req, res) {
  const etherscanKey = process.env.ETHERSCAN_API_KEY; // Private!
  
  // Call Etherscan API...
  res.json({ verified: true });
}
```

---

## 🚨 Troubleshooting

### **Variables not loading?**

1. **Restart the dev server:**
   ```bash
   # Kill the server (Ctrl+C)
   npm run dev
   ```

2. **Check file naming:**
   - Use `.env.local` (NOT `.env.local.txt`)
   - No spaces in filenames

3. **Verify syntax:**
   ```bash
   # ✅ Correct
   NEXT_PUBLIC_VAR=value
   
   # ❌ Wrong (no spaces around =)
   NEXT_PUBLIC_VAR = value
   
   # ❌ Wrong (no quotes needed)
   NEXT_PUBLIC_VAR="value"
   ```

4. **Client vs Server variables:**
   - `NEXT_PUBLIC_*` → Available in browser
   - No prefix → Server-side only

### **Vercel deployment issues?**

1. Check environment variables are set in dashboard
2. Ensure correct environment selected (Production/Preview)
3. Trigger a **manual redeploy** after adding variables
4. Check deployment logs for missing variable errors

---

## 📚 Environment Priority

Next.js loads environment files in this order (highest priority first):

1. `.env.local` (local overrides)
2. `.env.development` / `.env.production` (environment-specific)
3. `.env` (global defaults)
4. `.env.example` (not loaded, just a template)

**Example:**
```
.env.local          → APP_URL=http://localhost:3000
.env.development    → APP_URL=https://dev.usdox.com
.env                → APP_URL=https://theusdox.com

Result in dev: http://localhost:3000 (.env.local wins)
```

---

## 🔗 Useful Links

- **Next.js Env Docs:** https://nextjs.org/docs/basic-features/environment-variables
- **Vercel Env Docs:** https://vercel.com/docs/concepts/projects/environment-variables
- **WalletConnect Dashboard:** https://cloud.walletconnect.com
- **Infura Dashboard:** https://infura.io
- **Alchemy Dashboard:** https://alchemy.com

---

## ✅ Deployment Checklist

Before deploying to production:

- [ ] All required variables set in Vercel dashboard
- [ ] No `.env` files committed to Git (check with `git status`)
- [ ] Tested locally with `.env.local`
- [ ] API keys rotated if shared during development
- [ ] Analytics tracking codes added
- [ ] WalletConnect project ID configured
- [ ] Contract addresses verified on Etherscan

---

**Last Updated:** 2025-12-22  
**Maintainer:** USDOX Team
