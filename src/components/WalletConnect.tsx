"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ethers } from "ethers";
import { FaWallet } from "react-icons/fa";

const CONTRACT = "0x7BeB51807E3c8BdB10A2868bD51c2D9E1764925D";
const ABI = ["function balanceOf(address) view returns (uint256)"];

export default function WalletConnect() {
  const [balance, setBalance] = useState<string>("—");
  const [address, setAddress] = useState<string>("");
  const [isConnecting, setIsConnecting] = useState(false);

  async function connect() {
    if (typeof window === "undefined" || !window.ethereum) {
      alert("Please install MetaMask or another Web3 wallet");
      return;
    }

    setIsConnecting(true);
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const signer = await provider.getSigner();
      const userAddress = await signer.getAddress();
      
      const contract = new ethers.Contract(CONTRACT, ABI, provider);
      const bal = await contract.balanceOf(userAddress);
      
      setAddress(userAddress);
      setBalance(Number(ethers.formatUnits(bal, 6)).toLocaleString() + " TWUSD");
    } catch (error) {
      console.error("Error connecting wallet:", error);
      alert("Failed to connect wallet");
    } finally {
      setIsConnecting(false);
    }
  }

  return (
    <section className="py-20 px-4 bg-linear-to-b from-transparent to-gray-900/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl font-bold mb-4">Live Token Dashboard</h2>
          <p className="text-gray-400">Connect your wallet to check your TWUSD balance</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-xl p-8 card-hover"
        >
          <div className="flex flex-col items-center gap-6">
            {!address ? (
              <button
                onClick={connect}
                disabled={isConnecting}
                className="flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
              >
                <FaWallet className="text-xl" />
                {isConnecting ? "Connecting..." : "Connect Wallet"}
              </button>
            ) : (
              <div className="w-full space-y-4">
                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                  <div className="text-sm text-gray-400 mb-1">Connected Address</div>
                  <div className="font-mono text-sm break-all">{address}</div>
                </div>
                <div className="bg-linear-to-r from-blue-900/30 to-purple-900/30 rounded-lg p-6 border border-blue-800/30">
                  <div className="text-sm text-gray-400 mb-2">Your TWUSD Balance</div>
                  <div className="text-3xl font-bold text-blue-400">{balance}</div>
                </div>
                <button
                  onClick={() => {
                    setAddress("");
                    setBalance("—");
                  }}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Disconnect
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
