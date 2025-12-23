"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { motion } from "framer-motion";

export default function WalletConnect() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent to-gray-900/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl font-bold mb-4">Connect Your Wallet</h2>
          <p className="text-gray-400">
            Connect to Ethereum Mainnet to start swapping for TWUSD
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-xl p-8 card-hover flex justify-center"
        >
          <ConnectButton
            label="Connect Wallet"
            accountStatus="address"
            chainStatus="icon"
            showBalance={true}
          />
        </motion.div>
      </div>
    </section>
  );
}
