"use client";

const TWUSD_ADDRESS = "0x7BeB51807E3c8BdB10A2868bD51c2D9E1764925D";

export default function GetTWUSDButton() {
  return (
    <a
      href={`https://app.uniswap.org/swap?outputCurrency=${TWUSD_ADDRESS}&chain=mainnet`}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-lg transition-all transform hover:scale-[1.03] active:scale-[0.98] whitespace-nowrap"
    >
      Get TWUSD
    </a>
  );
}
