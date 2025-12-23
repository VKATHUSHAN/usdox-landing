# 🔒 TWUSD Token Data Structure

## Directory Layout

```
contracts/twusd/
├── abi.json          # ERC-20 contract ABI (JSON ARRAY)
└── metadata.json     # Solidity compiler metadata (JSON OBJECT)

tokens/twusd/
└── token-info.json   # Token configuration (JSON OBJECT)
```

## File Purposes

### `contracts/twusd/abi.json` (CRITICAL!)
- **Format:** JSON **ARRAY** of function definitions
- **Purpose:** Smart contract interface for ethers.js/web3.js
- **Schema:** Standard Ethereum ABI format
- **Validation:** Syntax check only (no `.decimals` property)

### `contracts/twusd/metadata.json`
- **Format:** JSON OBJECT
- **Purpose:** Solidity compilation metadata
- **Contains:** Compiler version, optimization settings, source hashes

### `tokens/twusd/token-info.json` (ENFORCED!)
- **Format:** JSON OBJECT
- **Purpose:** Token metadata and configuration
- **Critical Fields:**
  - `decimals`: **MUST be 6** (CI enforced)
  - `contractAddress`: **MUST be 0x7BeB51807E3c8BdB10A2868bD51c2D9E1764925D**
  - `totalSupply`: 33,200,000,000
  - `network`: Ethereum
  - `standard`: ERC-20

## CI Validation Rules

✅ **All JSON files:** Syntax validation with `jq empty`  
✅ **token-info.json only:** Schema validation for decimals = 6  
✅ **abi.json:** NOT checked for `.decimals` (it's an array!)  
✅ **Contract address:** Verified against canonical address

## Why This Structure?

**Separation of Concerns:**
- `abi.json` = Smart contract interface (for developers)
- `metadata.json` = Compilation artifacts (for verification)
- `token-info.json` = Human-readable token data (for users/exchanges)

**ABI vs Token Info:**
- ABI describes **how to call functions**
- Token info describes **what the token is**
- They are **NOT the same** (classic mistake!)

## Adding New Tokens

1. Create `contracts/{token}/` directory
2. Add `abi.json` (array format)
3. Add `metadata.json` (object format)
4. Create `tokens/{token}/token-info.json`
5. Update CI workflow if decimals enforcement needed

## Common Mistakes to Avoid

❌ **DON'T:** Try to read `.decimals` from `abi.json`  
✅ **DO:** Read `.decimals` from `token-info.json`

❌ **DON'T:** Make `abi.json` an object  
✅ **DO:** Keep it as an array (standard Ethereum format)

❌ **DON'T:** Store token metadata in ABI  
✅ **DO:** Use separate `token-info.json` file

## Verification

Run validation locally:
```bash
# Check all JSON files
find contracts tokens -name "*.json" -type f -exec jq empty {} \;

# Verify TWUSD decimals
jq -r '.decimals' tokens/twusd/token-info.json
# Expected output: 6

# Verify contract address
jq -r '.contractAddress' tokens/twusd/token-info.json
# Expected: 0x7BeB51807E3c8BdB10A2868bD51c2D9E1764925D
```

## CI Badge

Add to README.md:
```markdown
![Token Data Validation](https://github.com/VKATHUSHAN/usdox-landing/actions/workflows/validate-token-data.yml/badge.svg)
```

---

**This is Swiss-grade token data management** 🇨🇭🔒
