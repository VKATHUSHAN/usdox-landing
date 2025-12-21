✅ COPILOT STRICT EXECUTION INSTRUCTIONS
Project: theusdox-landing
Mode: Production-Ready / No Experiments
🔒 GLOBAL RULES (ABSOLUTE)

Copilot MUST follow these rules at all times:

❌ DO NOT introduce new frameworks, tools, or libraries

❌ DO NOT change Next.js version

❌ DO NOT add Web3, wallet connect, swap, or API calls

❌ DO NOT rename files or folders

❌ DO NOT generate placeholder or lorem text

❌ DO NOT change existing copy text unless explicitly asked

❌ DO NOT add environment variables

❌ DO NOT add server actions or API routes

❌ DO NOT refactor for “cleanliness”

❌ DO NOT remove any disclaimer text

Copilot acts only as a deterministic finisher, not an architect.

🎯 PROJECT GOAL (READ CAREFULLY)

This project is a static marketing landing page for an ERC-20 token.

Purpose:

Public visibility

Etherscan token information approval

Branding credibility

This is NOT a dApp.

🧱 ALLOWED TECH STACK (LOCKED)

Copilot may use ONLY:

Next.js (App Router)

React

TypeScript

Tailwind CSS

Static assets from /public

NO OTHER DEPENDENCIES.

📁 FILE STRUCTURE (DO NOT MODIFY)

Copilot must assume this structure and never alter it:

src/
└─ app/
   ├─ layout.tsx
   ├─ page.tsx
   └─ globals.css
public/
└─ (logos + images only)

📄 layout.tsx RULES

Copilot must:

Use semantic HTML

Include SEO-friendly metadata

Avoid dynamic imports

Avoid analytics scripts

Avoid JSON-LD

Title format:

USDOX (TWUSD) | Ethereum ERC20 Token


Description format:

Official landing page for the USDOX Wrapped Dollar (TWUSD) on Ethereum.

📄 page.tsx CONTENT RULES (CRITICAL)

Copilot MUST render these sections IN ORDER:

1️⃣ Hero Section

Project name: USDOX

Subtitle: The Wrapped Dollar on Ethereum

No call-to-action buttons

No animations

2️⃣ Token Information Section

Copilot must display exact values:

Token Name: The USDOX Wrapped Dollar

Symbol: TWUSD

Network: Ethereum Mainnet

Contract Address:
0x7BeB51807E3c8BdB10A2868bD51c2D9E1764925D

Decimals: 6

Standard: ERC-20

⚠️ Contract address must be copyable plain text

3️⃣ Disclaimer Section (MANDATORY)

Copilot must include verbatim disclaimer text:

This website is provided for informational purposes only and does not constitute financial advice, investment recommendations, or an offer to sell any assets.

No edits. No rewording.

4️⃣ Footer Section

Copyright

Project name

Current year (computed)

🎨 STYLING RULES (TAILWIND)

Copilot must:

Use neutral dark/light theme

Avoid gradients

Avoid heavy shadows

Avoid animations

Ensure mobile responsiveness

Prefer padding and spacing over visual effects

Design goal: Etherscan-friendly, serious, minimal

🧠 BEHAVIORAL CONSTRAINTS

Copilot must:

Ask ZERO clarification questions

Make ZERO assumptions

Prefer static JSX over abstraction

Avoid over-engineering

Write readable, boring code

Boring = approved.

🧪 WHAT COPILOT SHOULD NOT TOUCH

package.json

package-lock.json

next.config.js

Git configuration

Vercel settings

🚦 COMPLETION CRITERIA

Copilot’s task is complete when:

✔️ npm run dev works
✔️ Page renders without console errors
✔️ Content matches token details exactly
✔️ Page is deployable to Vercel
✔️ Suitable for Etherscan submission

🛑 FINAL COMMAND TO COPILOT

When starting work, Copilot must assume:

“I am finishing a production landing page.
I will not innovate. I will not refactor.
I will only complete what is requested.”

