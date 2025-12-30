"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ethers } from "ethers";

const CONTRACT = "0x7BeB51807E3c8BdB10A2868bD51c2D9E1764925D";
const ABI = [
  "function totalSupply() view returns (uint256)",
  "function balanceOf(address) view returns (uint256)",
];

export default function TokenInfo() {
  const [totalSupply, setTotalSupply] = useState<string>("Loading...");

  useEffect(() => {
    async function fetchSupply() {
      try {
        const provider = (ethers as any).getDefaultProvider
          ? (ethers as any).getDefaultProvider("homestead")
          : ethers.getDefaultProvider("homestead");
        const contract = new (ethers as any).Contract(CONTRACT, ABI, provider);
        const supply = await contract.totalSupply();
        const formatUnits = (value: any, decimals = 18) => {
          if ((ethers as any).utils && (ethers as any).utils.formatUnits) {
            return (ethers as any).utils.formatUnits(value, decimals);
          }
          if ((ethers as any).formatUnits) {
            return (ethers as any).formatUnits(value, decimals);
          }
          return value.toString();
        };
        setTotalSupply(Number(formatUnits(supply, 6)).toLocaleString() + " TWUSD");
      } catch (error) {
        console.error("Error fetching supply:", error);
        setTotalSupply("Error loading");
      }
    }
    fetchSupply();
  }, []);

  const tokenData = [
    { label: "Token Name", value: "TheUSDOX Wrapped Dollar" },
    { label: "Symbol", value: "TWUSD" },
    { label: "Network", value: "Ethereum Mainnet" },
    { label: "Standard", value: "ERC-20" },
    { label: "Decimals", value: "6" },
    { label: "Total Supply", value: totalSupply },
    { label: "Contract", value: "0x7BeB51807E3c8BdB10A2868bD51c2D9E1764925D" },
  ];

  return (
    <section id="token-info" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            TWUSD — TheUSDOX Wrapped Dollar
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            TWUSD is an ERC-20 wrapped dollar asset designed for transactional use,
            DeFi integrations, and on-chain settlement within the USDOX ecosystem.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-xl overflow-hidden card-hover"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody>
                  {tokenData.map((item, index) => (
                    <motion.tr
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="border-b border-gray-800 last:border-0 hover:bg-gray-800/50 transition-colors"
                    >
                      <td className="px-6 py-4 font-semibold text-gray-400 w-1/3">
                        {item.label}
                      </td>
                      <td className="px-6 py-4 text-gray-200 break-all">
                        {item.value}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
