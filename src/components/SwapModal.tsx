"use client";

import { useState } from "react";
import { useAccount, useWalletClient } from "wagmi";
import { X, ArrowDown, Loader2, ExternalLink, CheckCircle } from "lucide-react";
import { getSwapService } from "@/dapp/swap";
import { WETH_TOKEN, USDT_TOKEN, USDC_TOKEN } from "@/dapp/tokens";
import { Token } from "@uniswap/sdk-core";
import { ethers } from "ethers";

interface SwapModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SUPPORTED_TOKENS = [
  { token: WETH_TOKEN, symbol: "ETH", name: "Ethereum" },
  { token: USDT_TOKEN, symbol: "USDT", name: "Tether USD" },
  { token: USDC_TOKEN, symbol: "USDC", name: "USD Coin" },
];

export default function SwapModal({ isOpen, onClose }: SwapModalProps) {
  const { address } = useAccount();
  const { data: walletClient } = useWalletClient();

  const [selectedToken, setSelectedToken] = useState(SUPPORTED_TOKENS[0]);
  const [amount, setAmount] = useState("");
  const [quote, setQuote] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSwapping, setIsSwapping] = useState(false);
  const [txHash, setTxHash] = useState("");
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleGetQuote = async () => {
    if (!address || !amount || parseFloat(amount) <= 0) {
      setError("Please enter a valid amount");
      return;
    }

    setIsLoading(true);
    setError("");
    setQuote(null);

    try {
      const swapService = getSwapService();
      const quoteData = await swapService.getQuote(
        selectedToken.token,
        amount,
        address
      );
      setQuote(quoteData);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to get quote");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSwap = async () => {
    if (!walletClient || !quote || !address) return;

    setIsSwapping(true);
    setError("");

    try {
      // ethers v5 API
      const provider = new ethers.providers.Web3Provider(walletClient as any);
      const signer = provider.getSigner();

      const swapService = getSwapService();
      const hash = await swapService.executeSwap(quote.route, signer);

      setTxHash(hash);
      setQuote(null);
      setAmount("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Swap failed");
    } finally {
      setIsSwapping(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <h2 className="text-2xl font-bold">Swap for TWUSD</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          {/* Token Selector */}
          <div className="space-y-2">
            <label className="text-sm text-gray-400">From</label>
            <div className="flex gap-2">
              {SUPPORTED_TOKENS.map((item) => (
                <button
                  key={item.symbol}
                  onClick={() => setSelectedToken(item)}
                  className={`flex-1 px-4 py-3 rounded-lg border transition-all ${
                    selectedToken.symbol === item.symbol
                      ? "bg-blue-600/20 border-blue-600 text-blue-400"
                      : "bg-gray-800/50 border-gray-700 hover:border-gray-600"
                  }`}
                >
                  <div className="font-semibold">{item.symbol}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Amount Input */}
          <div className="space-y-2">
            <label className="text-sm text-gray-400">Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.0"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-600 focus:outline-none text-lg"
              min="0"
              step="any"
            />
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <ArrowDown className="w-6 h-6 text-gray-400" />
          </div>

          {/* To Token */}
          <div className="space-y-2">
            <label className="text-sm text-gray-400">To</label>
            <div className="px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="font-semibold">TWUSD</span>
                {quote && (
                  <span className="text-green-400 font-semibold">
                    ≈ {quote.amountOutFormatted}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Quote Info */}
          {quote && !txHash && (
            <div className="p-4 bg-blue-900/20 border border-blue-800/30 rounded-lg space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Price Impact</span>
                <span className="text-green-400">{quote.priceImpact}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Gas Estimate</span>
                <span>{quote.gasEstimate}</span>
              </div>
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="p-4 bg-red-900/20 border border-red-800/30 rounded-lg text-red-400 text-sm">
              {error}
            </div>
          )}

          {/* Success */}
          {txHash && (
            <div className="p-4 bg-green-900/20 border border-green-800/30 rounded-lg space-y-3">
              <div className="flex items-center gap-2 text-green-400">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Swap Successful!</span>
              </div>
              <a
                href={`https://etherscan.io/tx/${txHash}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm"
              >
                View on Etherscan
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          )}

          {/* Actions */}
          <div className="space-y-3">
            {!quote && !txHash && (
              <button
                onClick={handleGetQuote}
                disabled={isLoading || !amount || parseFloat(amount) <= 0}
                className="w-full px-6 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 disabled:cursor-not-allowed rounded-xl font-semibold transition-all flex items-center justify-center gap-2 min-h-[48px]"
              >
                {isLoading && <Loader2 className="w-5 h-5 animate-spin" />}
                {isLoading ? "Getting Quote..." : "Get Quote"}
              </button>
            )}

            {quote && !txHash && (
              <button
                onClick={handleSwap}
                disabled={isSwapping}
                className="w-full px-6 py-4 bg-green-600 hover:bg-green-700 disabled:bg-gray-700 disabled:cursor-not-allowed rounded-xl font-semibold transition-all flex items-center justify-center gap-2 min-h-[48px]"
              >
                {isSwapping && <Loader2 className="w-5 h-5 animate-spin" />}
                {isSwapping ? "Swapping..." : "Confirm Swap"}
              </button>
            )}

            {txHash && (
              <button
                onClick={() => {
                  setTxHash("");
                  setAmount("");
                  setQuote(null);
                }}
                className="w-full px-6 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition-all min-h-[48px]"
              >
                Make Another Swap
              </button>
            )}
          </div>

          {/* Legal Disclaimer */}
          <p className="text-xs text-gray-500 text-center">
            Swaps are executed via Uniswap. Check transaction details before
            confirming. TWUSD is not affiliated with Tether or Circle.
          </p>
        </div>
      </div>
    </div>
  );
}
