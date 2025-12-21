"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-transparent pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-5xl mx-auto relative z-10"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex justify-center items-center gap-6 mb-8 flex-wrap"
        >
          <Image
            src="/theusdox-usdo-logo.png"
            alt="TheUSDOX Logo"
            width={80}
            height={80}
            className="hover:scale-110 transition-transform duration-300"
          />
          <Image
            src="/TWUSD-logo.png"
            alt="TWUSD Logo"
            width={80}
            height={80}
            className="hover:scale-110 transition-transform duration-300"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold mb-6 text-gradient"
        >
          USDOX Ecosystem
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xl md:text-2xl text-gray-300 mb-12"
        >
          Transparent Digital Dollar Infrastructure on Ethereum
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href="https://etherscan.io/token/0x7BeB51807E3c8BdB10A2868bD51c2D9E1764925D"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-105"
          >
            View on Etherscan
          </a>
          <a
            href="#token-info"
            className="px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-lg font-semibold border border-gray-700 transition-all duration-300"
          >
            Learn More
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          <StatCard number="ERC-20" label="Standard" />
          <StatCard number="6" label="Decimals" />
          <StatCard number="Ethereum" label="Network" />
        </motion.div>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-lg p-4 card-hover">
      <div className="text-2xl font-bold text-blue-400">{number}</div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
  );
}
