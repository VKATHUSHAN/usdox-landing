# USDOX Landing Page - AI Coding Instructions

## ⚡ Quick Reference

**Helper Docs:**
- `QUICKSTART.md` - Step-by-step guide for all 4 versions
- `LANDING_VERSIONS.md` - Detailed comparison of implementations
- `COMPLETE_SUMMARY.md` - Feature matrix and build status
- `.github/instructions/copilot.md` - Strict execution rules (⚠️ OUTDATED - refers to old HTML-only implementation)

**When fixing issues:**
- **Act immediately** - don't ask for confirmation
- **Fix in place** - apply changes directly to the file
- **Preserve existing patterns** - don't refactor or modernize
- **Validate after** - ensure code still works

## Project Overview
Landing page for the USDOX Ecosystem showcasing TWUSD (TheUSDOX Wrapped Dollar), an ERC-20 token on Ethereum. This Next.js 15 project contains **4 distinct implementations** of the same landing page, each optimized for different use cases.

**Workspace Note:** The `my-web3-landing/` folder is an unused Next.js template - ignore it. Active codebase is in root `src/` directory.

## Architecture & Critical Context

### Multi-Version System (CRITICAL!)
This project contains **4 complete implementations** - understand which version you're working with:

**Version 1 (Primary):** `src/app/page.tsx` + `src/components/*`
- Modern React 19/Next.js 15 implementation with Framer Motion animations
- Uses Tailwind CSS 4, component architecture, TypeScript
- **Active implementation** - runs at `localhost:3000` with `npm run dev`

**Version 2 (Static):** `src/app/index.html`
- Enhanced static HTML with inline CSS and vanilla JavaScript
- Client-side Web3 via ethers.js CDN, no build step required
- Original implementation preserved, improved with animations

**Version 3 (Components):** Individual files in `src/components/`
- 7 modular, reusable React components (Hero, TokenInfo, WalletConnect, etc.)
- Import/compose as needed in any Next.js page
- Powers Version 1's `page.tsx`

**Version 4 (Light Theme):** `src/app/light-theme.html`
- Standalone light theme variant with blue/purple gradients
- Alternative static implementation for accessibility

### Tech Stack
- **Next.js 15.5.9** with React 19.2.3 (App Router)
- **TypeScript 5** with strict mode enabled  
- **Tailwind CSS 4** via PostCSS (used in Version 1/3 components)
- **Framer Motion 12.23.26** for animations (Version 1/3 only)
- **ethers.js 6.16.0** for blockchain interaction
- **ESLint 9** with Next.js config (flat config in `eslint.config.mjs`)
- **React Icons 5.5.0** for UI icons in components

### Decision: Which Version to Edit?
- **Adding features/animations?** → Edit Version 1 components in `src/components/`
- **Quick HTML tweaks?** → Edit Version 2 `src/app/index.html`
- **Creating new pages?** → Import from Version 3 component library
- **Accessibility variant?** → Modify Version 4 `src/app/light-theme.html`

## Key Files & Patterns

### Smart Contract Integration
The HTML includes inline JavaScript connecting to TWUSD token contract:
- **Contract Address**: `0x7BeB51807E3c8BdB10A2868bD51c2D9E1764925D`
- **Network**: Ethereum Mainnet
- **Functions**: `totalSupply()`, `balanceOf(address)` for live dashboard
- Uses `ethers.BrowserProvider` with MetaMask/Web3 wallet detection

### Branding & Assets
Three logos in `public/` directory:
- `theusdox-usdo-logo.png` - Main USDOX brand
- `TWUSD-logo.png` - Token logo  
- `usdoxcare-logo.png` - Community/care initiative logo

**Path inconsistency:** HTML versions reference `assets/logos/[filename]2.png` (with "2" suffix), while React components use proper Next.js image optimization with `/` paths.

## Component Architecture (Version 1 & 3)

### Available React Components
All components in `src/components/` are:
- **Client-side**: Use `"use client"` directive (required for Web3/animations)
- **Self-contained**: Import their own dependencies (ethers, framer-motion, react-icons)
- **Typed**: Full TypeScript with proper type definitions in `src/types/global.d.ts`

**Component Manifest:**
```tsx
Hero.tsx              // Animated hero with floating logos, stats counter
TokenInfo.tsx         // Live token data table from contract
WalletConnect.tsx     // MetaMask integration, balance display
RoutingSection.tsx    // Swap routes visualization with crypto logos
TransparencySection.tsx // Feature cards grid (Security, Transparency, etc.)
USDOXCare.tsx         // Community initiative section
Footer.tsx            // Social links, contact info
```

**Reuse Pattern:**
```tsx
import Hero from '@/components/Hero';  // Using @/* alias
import TokenInfo from '../components/TokenInfo';  // Relative path also works
```

## Development Workflows

### Commands
```bash
npm run dev      # Start dev server (localhost:3000) - runs Version 1
npm run build    # Production build (validates all React components)
npm run start    # Serve production build
npm run lint     # Run ESLint on all TypeScript files
```

**Critical:** `npm run dev` serves Version 1 (`src/app/page.tsx`), NOT the HTML files. To view HTML versions, open them directly in browser or serve via static file server.

### Path Aliases
TypeScript configured with `@/*` alias → `src/*` in `tsconfig.json`:
```tsx
import Hero from '@/components/Hero';  // ✅ Resolves to src/components/Hero.tsx
```

## Conventions & Patterns

### Styling Approach (Version-Specific!)
**Version 1 (React):** Tailwind CSS 4 with utility classes
- Uses PostCSS configuration in `postcss.config.mjs`
- Global styles in `src/app/globals.css` with `@import "tailwindcss"`
- Custom gradients: `bg-gradient-to-br from-blue-600 to-purple-700`

**Version 2 & 4 (HTML):** Inline `<style>` tag with custom CSS
- Dark theme: `#0b0d10` (background), `#60a5fa` (links), `#f9fafb` (headings)
- CSS animations: `@keyframes fadeIn`, `@keyframes float`, `@keyframes bounce`
- No Tailwind usage in HTML files

### HTML Structure (Version 2 & 4 Only)
Sections follow semantic pattern:
1. Hero with logos and CTAs
2. Token information card with contract details table
3. Live dashboard with wallet connection
4. Supported routing visualization
5. Transparency/Legal sections
6. Footer with social links

### Web3 Patterns (ALL Versions)
**Version 1 (React):**
```tsx
import { ethers } from "ethers";
const provider = new ethers.BrowserProvider(window.ethereum);
const contract = new ethers.Contract(CONTRACT, ABI, provider);
const balance = await contract.balanceOf(address);
const formatted = ethers.formatUnits(balance, 6);  // TWUSD uses 6 decimals
```

**Version 2/4 (HTML):**
- ethers.js loaded via CDN: `https://cdn.jsdelivr.net/npm/ethers@6.10.0/dist/ethers.umd.min.js`
- Initialize provider on page load to fetch `totalSupply()`
- Wallet connection on user action with `eth_requestAccounts`
- Global `ethers` object available from CDN

## Integration Points

### External Dependencies
- Etherscan for contract verification links
- MetaMask/Web3 wallets for user interaction
- External crypto logo CDN: `cryptologos.cc`
- **PDF disclosure:** `TWUSD-Token-Disclosure.pdf` - ⚠️ **Referenced in HTML but not in repo** - needs to be created and added to `public/` folder

### Social Links
- Website: theusdox.com
- GitHub: github.com/VKATHUSHAN  
- X (Twitter): @TheUSDOXs
- Email: hello@theusdox.com

## Important Notes

- **Multi-version architecture** - choose the right version for the task
- **Version 1 is production** - React/Next.js runs on `npm run dev`
- **Version 2/4 are standalone** - HTML files work without build process
- **Version 3 is a library** - import components into any Next.js page
- Token routing integrations are placeholders ("under development, no liquidity guarantees")
- Legal disclaimers clarify no affiliation with Tether/Circle
- All versions share same contract address: `0x7BeB51807E3c8BdB10A2868bD51c2D9E1764925D`

## Common Issues & Solutions

**Build Errors:**
- If ESLint fails: Check that all components have `"use client"` directive
- If Tailwind not working: Verify `@import "tailwindcss"` in `globals.css`
- If ethers.js errors: Ensure `window.ethereum` check before using in client components

**Version Confusion:**
- Not seeing changes in browser? You might be editing wrong version
- HTML versions (2/4) require direct file access, NOT `npm run dev`
- React components (Version 1/3) need server restart after edits

**Logo Path Issues:**
- React components: Use `/theusdox-usdo-logo.png` (from public/)
- HTML versions: Use `assets/logos/theusdox2-usdo-logo.png` (legacy path with "2" suffix)
- Don't mix the two path conventions within same version
