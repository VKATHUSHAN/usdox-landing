"use client";

import React, { useState, useEffect } from 'react';

interface VisibilityState {
  [key: string]: boolean;
}

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState<VisibilityState>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const USDOXLogo = () => {
    return (
      <div className="w-16 h-16 transition-transform hover:scale-110">
        <img 
          src="https://raw.githubusercontent.com/VKATHUSHAN/theusdox-assets/main/branding/logos/theusdox2-usdo-logo.png"
          alt="USDOX Logo"
          className="w-full h-full object-contain"
        />
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans antialiased">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-gray-950/90 border-b border-gray-800 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a href="/" className="flex items-center space-x-4">
              <USDOXLogo />
              <div>
                <h1 className="text-xl font-semibold">TheUSDOX</h1>
                <p className="text-sm text-gray-400 hidden sm:block">The On-Chain Dollar</p>
              </div>
            </a>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-300 hover:text-white transition">Home</a>
            <a href="/about" className="text-white font-semibold">About</a>
            <a href="/usdoxcare" className="text-gray-300 hover:text-white transition">USDOXCare</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-6 max-w-6xl mx-auto fade-in-section" id="hero">
        <div className={`text-center transition-all duration-1000 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24">
              <img 
                src="https://raw.githubusercontent.com/VKATHUSHAN/theusdox-assets/main/branding/logos/theusdox2-usdo-logo.png"
                alt="USDOX Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About TheUSDOX</h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            TheUSDOX is a blockchain-based financial ecosystem built around one simple idea:
          </p>
          <p className="text-2xl font-bold text-white mt-6">
            Stable money should be transparent, predictable, and verifiable.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto fade-in-section" id="philosophy">
        <div className={`transition-all duration-1000 ${isVisible.philosophy ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            In a market filled with over-engineered stablecoins and opaque monetary models, TheUSDOX takes a different path — one rooted in <strong className="text-white">simplicity, clarity, and responsibility</strong>.
          </p>

          <div className="bg-linear-to-br from-blue-900/30 to-blue-800/20 rounded-xl p-8 border-2 border-blue-700/40">
            <h2 className="text-2xl font-bold mb-6">Our Philosophy</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 shrink-0"></div>
                <p className="text-gray-300"><strong className="text-white">Trust is earned through transparency</strong> — We believe in open contracts and verifiable data</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 shrink-0"></div>
                <p className="text-gray-300"><strong className="text-white">Simpler systems fail less</strong> — Complexity is the enemy of reliability</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 shrink-0"></div>
                <p className="text-gray-300"><strong className="text-white">Long-term value beats short-term hype</strong> — We're building for decades, not quarters</p>
              </div>
            </div>
            <p className="text-gray-400 mt-6 italic">
              TheUSDOX is not designed to chase market cycles.<br />
              It is designed to provide a stable foundation for decentralized finance.
            </p>
          </div>
        </div>
      </section>

      {/* What We're Building */}
      <section className="py-16 px-6 max-w-6xl mx-auto fade-in-section" id="building">
        <div className={`transition-all duration-1000 ${isVisible.building ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold mb-8">What We're Building</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-900/50 rounded-xl p-6 border border-blue-700/40">
              <div className="w-3 h-3 bg-blue-500 rounded-full mb-4"></div>
              <h3 className="text-xl font-bold mb-3">USDOX</h3>
              <p className="text-gray-300">A long-term on-chain dollar</p>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-6 border border-yellow-700/40">
              <div className="w-3 h-3 bg-yellow-500 rounded-full mb-4"></div>
              <h3 className="text-xl font-bold mb-3">TWUSD</h3>
              <p className="text-gray-300">An Ethereum-native wrapped dollar for DeFi</p>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-6 border border-green-700/40">
              <div className="w-3 h-3 bg-green-500 rounded-full mb-4"></div>
              <h3 className="text-xl font-bold mb-3">USDOXCare</h3>
              <p className="text-gray-300">A commitment to transparency and responsible growth</p>
            </div>
          </div>

          <p className="text-lg text-gray-300 mt-8 leading-relaxed">
            Together, they form a <strong className="text-white">sustainable, auditable, and builder-friendly ecosystem</strong>.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto fade-in-section" id="vision">
        <div className={`bg-linear-to-br from-gray-900 to-gray-800 rounded-xl p-12 border border-gray-700 text-center transition-all duration-1000 ${isVisible.vision ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            To become a trusted on-chain dollar standard — built not on promises, but on <strong className="text-white">publicly verifiable truth</strong>.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="text-center">
            <p className="text-sm text-gray-400 mb-4">
              © {new Date().getFullYear()} USDOX Ecosystem. All rights reserved.
            </p>
            <div className="flex justify-center space-x-6">
              <a href="/" className="text-gray-400 hover:text-white transition">Home</a>
              <a href="/about" className="text-gray-400 hover:text-white transition">About</a>
              <a href="/usdoxcare" className="text-gray-400 hover:text-white transition">USDOXCare</a>
              <a href="https://theusdox.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                Official Website
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
