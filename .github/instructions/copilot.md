# ✅ COPILOT STRICT EXECUTION INSTRUCTIONS

### Project: **theusdox-landing**

### Mode: **Production-Ready / No Experiments**

---

## 🔒 GLOBAL RULES (ABSOLUTE)

Copilot **MUST** follow these rules at all times:

1. ❌ DO NOT introduce new frameworks, tools, or libraries beyond ethers.js (already included)
2. ❌ DO NOT change Next.js version
3. ❌ DO NOT modify existing Web3 integration in index.html
4. ❌ DO NOT rename files or folders
5. ❌ DO NOT generate placeholder or lorem text
6. ❌ DO NOT change existing copy text unless explicitly asked
7. ❌ DO NOT add environment variables
8. ❌ DO NOT add server actions or API routes
9. ❌ DO NOT refactor for "cleanliness"
10. ❌ DO NOT remove any disclaimer text

Copilot acts only as a **deterministic finisher**, not an architect.

---

## 🎯 PROJECT GOAL (READ CAREFULLY)

This project is a **static marketing landing page** for an ERC-20 token.

**Purpose:**

* Public visibility
* Etherscan token information approval
* Branding credibility

**This is NOT a dApp.**

---

## 🧱 ALLOWED TECH STACK (LOCKED)

Copilot may use **ONLY**:

* Next.js (App Router) - scaffolding only
* Pure HTML in `src/app/index.html` (actual implementation)
* ethers.js v6 (CDN-loaded for Web3)
* Inline CSS styles
* Static assets from `/public`

NO OTHER DEPENDENCIES.

---

## 📁 FILE STRUCTURE (DO NOT MODIFY)

Copilot must work with this structure:

```
src/
└─ app/
   ├─ index.html (PRIMARY - static landing page)
   └─ page.tsx (empty - HTML served directly)
public/
├─ theusdox-usdo-logo.png
├─ TWUSD-logo.png
└─ usdoxcare-logo.png
```

**Critical**: All edits go to `index.html`, NOT React components.

---

## 📄 `index.html` CONTENT RULES (CRITICAL)

The file already contains all required sections. Copilot **MUST preserve**:

### 1️⃣ Hero Section
* Title: "USDOX Ecosystem"
* Subtitle: "Transparent Digital Dollar Infrastructure on Ethereum"
* Logo references: `assets/logos/theusdox2-usdo-logo.png`, `assets/logos/TWUSD2-logo.png`
* Etherscan link to contract

### 2️⃣ Token Information Section
* **Exact values** (DO NOT CHANGE):
  - Token Name: TheUSDOX Wrapped Dollar
  - Symbol: TWUSD
  - Network: Ethereum Mainnet
  - Contract: `0x7BeB51807E3c8BdB10A2868bD51c2D9E1764925D`
  - Decimals: 6
  - Standard: ERC-20

### 3️⃣ Live Dashboard (Web3 Integration)
* Connect Wallet button using ethers.js
* Display totalSupply() on page load
* Display balanceOf() after wallet connection
* Format with 6 decimals: `ethers.formatUnits(value, 6)`

### 4️⃣ Supported Routing (Visual Only)
* ETH → TWUSD
* USDT → TWUSD  
* USDC → TWUSD
* Disclaimer: "under development, no liquidity guarantees"

### 5️⃣ Legal & Branding Disclosure
* Not affiliated with Tether/Circle
* "Wrapped Dollar" = internal ecosystem term

### 6️⃣ Footer
* Copyright © 2025 TheUSDOX
* Links: Website, Telegram, GitHub, X, Contact

---

## 🎨 STYLING RULES (INLINE CSS)

Copilot must maintain existing inline styles:

* Dark theme: `#0b0d10` background, `#e5e7eb` text
* Accent color: `#60a5fa` for links
* Card backgrounds: `#111827` with `#1f2937` borders
* Font: Inter, system-ui, -apple-system
* Mobile-responsive with centered max-width 1100px
* Minimal effects, no gradients, no animations

Design goal: **Etherscan-friendly, serious, minimal**

---

## 🧠 BEHAVIORAL CONSTRAINTS

Copilot must:

* Ask ZERO clarification questions
* Make ZERO assumptions
* Prefer static JSX over abstraction
* Avoid over-engineering
* Write readable, boring code

**Boring = approved.**

---

## 🧪 WHAT COPILOT SHOULD NOT TOUCH

* `package.json`
* `package-lock.json`
* `next.config.js`
* Git configuration
* Vercel settings

---

## 🚦 COMPLETION CRITERIA

Copilot's task is **complete** when:

✔️ `npm run dev` serves index.html successfully
✔️ Page renders without console errors
✔️ Web3 integration loads totalSupply() on page load
✔️ Wallet connection displays user balance
✔️ Contract address `0x7BeB51807E3c8BdB10A2868bD51c2D9E1764925D` is correct
✔️ All logos load from `/public` directory
✔️ Page is deployable to Vercel
✔️ Suitable for Etherscan submission

---

## 🛑 FINAL COMMAND TO COPILOT

When starting work, Copilot must assume:

> "I am finishing a production landing page.
> I will not innovate. I will not refactor.
> I will only complete what is requested."
