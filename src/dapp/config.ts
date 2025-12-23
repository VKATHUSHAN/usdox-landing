import { Token } from "@uniswap/sdk-core";
import { mainnet } from "viem/chains";

// TWUSD Token Configuration
export const TWUSD_TOKEN = new Token(
  1, // Ethereum Mainnet
  "0x7BeB51807E3c8BdB10A2868bD51c2D9E1764925D",
  6, // decimals
  "TWUSD",
  "TheUSDOX Wrapped Dollar"
);

export const WETH_TOKEN = new Token(
  1,
  "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
  18,
  "WETH",
  "Wrapped Ether"
);

export const USDT_TOKEN = new Token(
  1,
  "0xdAC17F958D2ee523a2206206994597C13D831ec7",
  6,
  "USDT",
  "Tether USD"
);

export const USDC_TOKEN = new Token(
  1,
  "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
  6,
  "USDC",
  "USD Coin"
);

// Contract Addresses
export const TWUSD_CONTRACT = "0x7BeB51807E3c8BdB10A2868bD51c2D9E1764925D" as const;
export const USDOX_CONTRACT = "0xaa4abDfB92a1BF93F3F443a4297b533BDF2A2e9C" as const;

// Uniswap Configuration
export const UNISWAP_V3_ROUTER = "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45" as const;
export const PERMIT2_ADDRESS = "0x000000000022D473030F116dDEE9F6B43aC78BA3" as const;

// Chain Configuration
export const CHAIN_ID = 1;
export const CHAIN = mainnet;

// App Configuration
export const APP_CONFIG = {
  name: "TheUSDOX",
  url: "https://theusdox.com",
  description: "TheUSDOX Wrapped Dollar - Transparent, Secure Stablecoin",
  slippageTolerance: 0.5, // 0.5%
  deadline: 1800, // 30 minutes
} as const;

// Token Supply
export const TWUSD_TOTAL_SUPPLY = "33200000000"; // 33.2B
