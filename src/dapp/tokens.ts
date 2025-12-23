import { TWUSD_TOKEN, WETH_TOKEN, USDT_TOKEN, USDC_TOKEN } from "./config";

export { TWUSD_TOKEN, WETH_TOKEN, USDT_TOKEN, USDC_TOKEN };

export const SUPPORTED_TOKENS = {
  ETH: WETH_TOKEN,
  USDT: USDT_TOKEN,
  USDC: USDC_TOKEN,
} as const;

export type SupportedTokenSymbol = keyof typeof SUPPORTED_TOKENS;
