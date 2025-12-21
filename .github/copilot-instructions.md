# USDOX Landing Page - AI Coding Instructions

## Project Overview
Landing page for the USDOX Ecosystem showcasing TWUSD (TheUSDOX Wrapped Dollar), an ERC-20 token on Ethereum. This is a Next.js 15 project with **static HTML content** as the primary implementation.

## Architecture & Critical Context

### Hybrid Structure (Important!)
- **Next.js setup exists** but the actual landing page is implemented as **pure HTML** in [../src/app/index.html](../src/app/index.html)
- [../src/app/page.tsx](../src/app/page.tsx) is currently empty - the HTML file is served directly
- This is a static site with **client-side Web3 integration** using ethers.js (v6) loaded via CDN
- No server-side rendering or API routes currently in use

### Tech Stack
- **Next.js 15.5.9** with React 19 (App Router structure)
- **TypeScript 5** with strict mode enabled  
- **Tailwind CSS 4** (configured via PostCSS, but HTML uses inline styles)
- **ethers.js v6** for blockchain interaction (CDN-loaded in HTML)
- **ESLint 9** with Next.js config (flat config format in `eslint.config.mjs`)

## Key Files & Patterns

### Smart Contract Integration
The HTML includes inline JavaScript connecting to TWUSD token contract:
- **Contract Address**: `0x7BeB51807E3c8BdB10A2868bD51c2D9E1764925D`
- **Network**: Ethereum Mainnet
- **Functions**: `totalSupply()`, `balanceOf(address)` for live dashboard
- Uses `ethers.BrowserProvider` with MetaMask/Web3 wallet detection

### Branding & Assets
Three logos in [public/](../public/):
- `theusdox-usdo-logo.png` - Main USDOX brand
- `TWUSD-logo.png` - Token logo  
- `usdoxcare-logo.png` - Community/care initiative logo

HTML references these as `assets/logos/[filename]` with a "2" suffix variant (e.g., `theusdox2-usdo-logo.png`).

## Development Workflows

### Commands
```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run start    # Serve production build
npm run lint     # Run ESLint
```

### Path Aliases
TypeScript configured with `@/*` alias mapping to project root (not currently used in HTML).

## Conventions & Patterns

### Styling Approach
- **Current**: Inline `<style>` tag in HTML with custom CSS
- **Available but unused**: Tailwind CSS 4 is installed and configured
- Dark theme with consistent color palette: `#0b0d10` (background), `#60a5fa` (links), `#f9fafb` (headings)

### HTML Structure
Sections follow semantic pattern:
1. Hero with logos and CTAs
2. Token information card with contract details table
3. Live dashboard with wallet connection
4. Supported routing visualization
5. Transparency/Legal sections
6. Footer with social links

### Web3 Patterns
- Initialize provider on page load to fetch `totalSupply()`
- Wallet connection on user action with `eth_requestAccounts`
- Format token amounts with 6 decimals: `ethers.formatUnits(value, 6)`

## Integration Points

### External Dependencies
- Etherscan for contract verification links
- MetaMask/Web3 wallets for user interaction
- External crypto logo CDN: `cryptologos.cc`
- PDF disclosure document: `TWUSD-Token-Disclosure.pdf` (referenced but not in repo)

### Social Links
- Website: theusdox.com
- GitHub: github.com/VKATHUSHAN  
- X (Twitter): @TheUSDOXs
- Email: hello@theusdox.com

## Important Notes

- **No server-side logic** - entirely static/client-side
- **No TypeScript/React components** in actual implementation despite Next.js scaffold
- Token routing integrations are placeholders ("under development, no liquidity guarantees")
- Legal disclaimers clarify no affiliation with Tether/Circle
