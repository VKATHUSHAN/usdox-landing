"use client";

import { useState } from "react";
import Hero from "../components/Hero";
import TokenInfo from "../components/TokenInfo";
import RoutingSection from "../components/RoutingSection";
import TransparencySection from "../components/TransparencySection";
import USDOXCare from "../components/USDOXCare";
import Footer from "../components/Footer";
import SwapModal from "../components/SwapModal";
import GetTWUSDButton from "../components/GetTWUSDButton";

export default function Home() {
  const [isSwapModalOpen, setIsSwapModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Hero Section with integrated Swap Button */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <Hero />
          
          {/* CTA Section */}
          <div className="mt-12 flex justify-center">
            <GetTWUSDButton onClick={() => setIsSwapModalOpen(true)} />
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 flex justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              Ethereum Mainnet
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full" />
              Uniswap V3
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full" />
              Non-Custodial
            </div>
          </div>
        </div>
      </section>

      {/* Token Information */}
      <TokenInfo />

      {/* Routing/Integration Section */}
      <RoutingSection />

      {/* Transparency & Security */}
      <TransparencySection />

      {/* USDOXCARE */}
      <USDOXCare />

      {/* Footer with Legal Disclaimer */}
      <Footer />

      {/* Swap Modal */}
      <SwapModal
        isOpen={isSwapModalOpen}
        onClose={() => setIsSwapModalOpen(false)}
      />
    </main>
  );
}
