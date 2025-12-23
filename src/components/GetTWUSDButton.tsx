"use client";

import { useAccount } from "wagmi";

interface GetTWUSDButtonProps {
  onClick: () => void;
}

export default function GetTWUSDButton({ onClick }: GetTWUSDButtonProps) {
  const { isConnected } = useAccount();

  return (
    <button
      onClick={onClick}
      disabled={!isConnected}
      className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed rounded-xl font-semibold text-white text-lg transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/50 disabled:shadow-none min-h-[48px]"
      style={{ touchAction: "manipulation" }}
    >
      {isConnected ? "Swap for TWUSD" : "Connect Wallet to Swap"}
    </button>
  );
}
