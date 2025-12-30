import { AlphaRouter, SwapType } from "@uniswap/smart-order-router";
import { Token, CurrencyAmount, TradeType, Percent } from "@uniswap/sdk-core";
import { ethers } from "ethers";
import { TWUSD_TOKEN, APP_CONFIG, CHAIN_ID } from "./config";

export interface SwapQuote {
  route: any;
  amountOut: string;
  amountOutFormatted: string;
  gasCostUSD: string;
  gasEstimate: string;
  priceImpact: string;
}

export class SwapService {
  private router: AlphaRouter;
  private provider: ethers.JsonRpcProvider;

  constructor(rpcUrl: string) {
    this.provider = new ethers.JsonRpcProvider(rpcUrl);
    this.router = new AlphaRouter({
      chainId: CHAIN_ID,
      provider: this.provider as any,
    });
  }

  async getQuote(
    inputToken: Token,
    amount: string,
    userAddress: `0x${string}`
  ): Promise<SwapQuote> {
    try {
      // Convert amount to token units (ethers v6)
      const amountIn = CurrencyAmount.fromRawAmount(
        inputToken,
        ethers.parseUnits(amount, inputToken.decimals).toString()
      );

      // Get route from Uniswap
      const route = await this.router.route(
        amountIn,
        TWUSD_TOKEN,
        TradeType.EXACT_INPUT,
        {
          recipient: userAddress,
          slippageTolerance: new Percent(
            Math.floor(APP_CONFIG.slippageTolerance * 100),
            10000
          ),
          deadline: Math.floor(Date.now() / 1000) + APP_CONFIG.deadline,
          type: SwapType.SWAP_ROUTER_02,
        }
      );

      if (!route || !route.quote) {
        throw new Error("No route found for this swap");
      }

      // Format output
      const amountOut = route.quote.toExact();
      const gasEstimate = route.estimatedGasUsed.toString();
      const gasCostUSD = route.gasPriceWei
        ? ethers.formatEther(route.estimatedGasUsed.mul(route.gasPriceWei))
        : "0";

      return {
        route,
        amountOut,
        amountOutFormatted: parseFloat(amountOut).toFixed(6),
        gasCostUSD,
        gasEstimate,
        priceImpact: "< 0.1%", // Calculate from route if available
      };
    } catch (error) {
      console.error("Swap quote error:", error);
      throw new Error(
        error instanceof Error
          ? error.message
          : "Failed to get swap quote"
      );
    }
  }

  async executeSwap(route: any, signer: ethers.Signer): Promise<string> {
    try {
      if (!route.methodParameters) {
        throw new Error("Invalid route data");
      }

      const tx = {
        data: route.methodParameters.calldata,
        to: route.methodParameters.to,
        value: route.methodParameters.value,
        from: await signer.getAddress(),
        gasLimit: route.estimatedGasUsed.mul(120).div(100), // 20% buffer
      };

      const transaction = await signer.sendTransaction(tx);
      return transaction.hash;
    } catch (error) {
      console.error("Swap execution error:", error);
      throw new Error(
        error instanceof Error
          ? error.message
          : "Failed to execute swap"
      );
    }
  }
}

// Create singleton instance
let swapServiceInstance: SwapService | null = null;

export function getSwapService(rpcUrl?: string): SwapService {
  if (!swapServiceInstance) {
    const url =
      rpcUrl ||
      process.env.NEXT_PUBLIC_RPC_URL ||
      "https://eth.llamarpc.com";
    swapServiceInstance = new SwapService(url);
  }
  return swapServiceInstance;
}
