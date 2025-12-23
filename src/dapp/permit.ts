import { PERMIT2_ADDRESS } from "./config";

export const PERMIT2_ABI = [
  {
    inputs: [
      { internalType: "address", name: "token", type: "address" },
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint160", name: "amount", type: "uint160" },
      { internalType: "uint48", name: "expiration", type: "uint48" },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export const MaxAllowanceExpiration = 2n ** 48n - 1n;
export const MaxAllowanceAmount = 2n ** 160n - 1n;

export async function approvePermit2(
  walletClient: any,
  tokenAddress: `0x${string}`,
  userAddress: `0x${string}`
) {
  try {
    const hash = await walletClient.writeContract({
      address: PERMIT2_ADDRESS,
      abi: PERMIT2_ABI,
      functionName: "approve",
      args: [
        tokenAddress,
        PERMIT2_ADDRESS,
        MaxAllowanceAmount,
        MaxAllowanceExpiration,
      ],
      account: userAddress,
    });

    return hash;
  } catch (error) {
    console.error("Permit2 approval error:", error);
    throw new Error("Failed to approve Permit2");
  }
}
