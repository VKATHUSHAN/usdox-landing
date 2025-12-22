"use client";

import React, { useState, useEffect } from 'react';

interface VisibilityState {
  [key: string]: boolean;
}

export default function Home() {
  const [isVisible, setIsVisible] = useState<VisibilityState>({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const USDOXLogo = ({ size = 'large' }: { size?: 'small' | 'large' }) => {
    const sizeClass = size === 'small' ? 'w-12 h-12' : 'w-24 h-24';
    
    return (
      <div className={`${sizeClass} transition-transform hover:scale-110`}>
        <img 
          src="https://raw.githubusercontent.com/VKATHUSHAN/theusdox-assets/main/branding/logos/theusdox2-usdo-logo.png"
          alt="USDOX Logo"
          className="w-full h-full object-contain"
        />
      </div>
    );
  };

  const TWUSDLogo = ({ size = 'large' }: { size?: 'small' | 'large' }) => {
    const sizeClass = size === 'small' ? 'w-12 h-12' : 'w-24 h-24';
    
    return (
      <div className={`${sizeClass} transition-transform hover:scale-110`}>
        <img 
          src="https://raw.githubusercontent.com/VKATHUSHAN/theusdox-assets/main/branding/logos/TWUSD2-logo.png"
          alt="TWUSD Logo"
          className="w-full h-full object-contain"
        />
      </div>
    );
  };

  const USDOXCareLogo = ({ size = 'large' }: { size?: 'small' | 'large' }) => {
    const sizeClass = size === 'small' ? 'w-12 h-12' : 'w-24 h-24';
    
    return (
      <div className={`${sizeClass} transition-transform hover:scale-110`}>
        <img 
          src="https://raw.githubusercontent.com/VKATHUSHAN/theusdox-assets/main/branding/logos/usdoxcare2-logo.png"
          alt="USDOX Care Logo"
          className="w-full h-full object-contain"
        />
      </div>
    );
  };

  const CopyButton = ({ text }: { text: string }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
      navigator.clipboard.writeText(text).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    };

    return (
      <button
        onClick={handleCopy}
        className="ml-2 p-1 text-gray-400 hover:text-white transition-colors"
        title="Copy to clipboard"
      >
        {copied ? (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L3.293 9.293a1 1 0 010-1.414l8-8a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        )}
      </button>
    );
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans antialiased">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-gray-950/90 border-b border-gray-800 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <USDOXLogo size="small" />
            <div>
              <h1 className="text-xl font-semibold">USDOX Ecosystem</h1>
              <p className="text-sm text-gray-400 hidden sm:block">Transparent Digital Dollar Infrastructure</p>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#token-info" className="text-gray-300 hover:text-white transition">Token Info</a>
            <a href="#architecture" className="text-gray-300 hover:text-white transition">Architecture</a>
            <a href="#transparency" className="text-gray-300 hover:text-white transition">Transparency</a>
            <a href="#reserve-proof" className="text-gray-300 hover:text-white transition">Reserves</a>
          </nav>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white transition"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-2">
            <a href="#token-info" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-300 hover:text-white transition">Token Information</a>
            <a href="#architecture" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-300 hover:text-white transition">Architecture</a>
            <a href="#transparency" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-300 hover:text-white transition">Transparency</a>
            <a href="#reserve-proof" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-300 hover:text-white transition">Reserve Proof</a>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto fade-in-section" id="hero">
        <div className="text-center space-y-6">
          <div className="flex justify-center mb-6">
            <USDOXLogo />
          </div>
          <h1 className={`text-4xl md:text-5xl font-bold transition-opacity duration-1000 ${isVisible.hero ? 'opacity-100' : 'opacity-0'}`}>
            USDOX Ecosystem
          </h1>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto transition-opacity duration-1000 delay-300 ${isVisible.hero ? 'opacity-100' : 'opacity-0'}`}>
            Transparent Digital Dollar Infrastructure
          </p>
          <p className={`text-lg text-gray-400 max-w-4xl mx-auto transition-opacity duration-1000 delay-500 ${isVisible.hero ? 'opacity-100' : 'opacity-0'}`}>
            TWUSD is the wrapped dollar asset within the USDOX ecosystem, designed for on-chain stability, composability, and verifiable supply on Ethereum.
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center mt-8 transition-opacity duration-1000 delay-700 ${isVisible.hero ? 'opacity-100' : 'opacity-0'}`}>
            <a
              href="https://etherscan.io/address/0x7beb51807e3c8bdb10a2868bd51c2d9e1764925d"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors"
            >
              View TWUSD on Etherscan
            </a>
            <a
              href="#token-info"
              className="px-8 py-3 border border-gray-600 hover:border-gray-500 rounded-lg font-medium transition-colors"
            >
              Read Token Disclosure
            </a>
          </div>
        </div>
      </section>

      {/* Token Information Section */}
      <section id="token-info" className="py-16 px-6 max-w-6xl mx-auto fade-in-section">
        <div className={`bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-gray-800 transition-all duration-1000 ${isVisible['token-info'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl font-bold mb-6 border-b border-gray-800 pb-4">TWUSD — TheUSDOX Wrapped Dollar (EVM)</h2>
          <p className="text-gray-300 mb-6">
            TWUSD is an ERC-20 wrapped dollar asset designed for transactional use, DeFi integrations, and on-chain settlement within the USDOX ecosystem.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex justify-between py-2 border-b border-gray-800">
                <span className="text-gray-400">Token Name</span>
                <span className="font-medium">TheUSDOX Wrapped Dollar</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-800">
                <span className="text-gray-400">Symbol</span>
                <span className="font-medium">TWUSD</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-800">
                <span className="text-gray-400">Network</span>
                <span className="font-medium">Ethereum Mainnet</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-800">
                <span className="text-gray-400">Token Standard</span>
                <span className="font-medium">ERC-20</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between py-2 border-b border-gray-800">
                <span className="text-gray-400">Decimals</span>
                <span className="font-medium">6</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-800">
                <span className="text-gray-400">Total Supply</span>
                <span className="font-medium">33,200,000,000</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 border-b border-gray-800 gap-2">
                <span className="text-gray-400">Contract Address</span>
                <div className="flex items-center">
                  <span className="font-mono text-xs break-all">0x7beb...925d</span>
                  <CopyButton text="0x7beb51807e3c8bdb10a2868bd51c2d9e1764925d" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-800">
            <p className="text-sm text-gray-400">
              All token parameters are publicly verifiable on Ethereum.
            </p>
          </div>
        </div>
      </section>

      {/* Token Architecture Overview */}
      <section id="architecture" className="py-16 px-6 max-w-6xl mx-auto fade-in-section">
        <div className={`transition-all duration-1000 ${isVisible.architecture ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl font-bold mb-6 border-b border-gray-800 pb-4">Token Architecture Overview</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <div className="flex items-center mb-4">
                <USDOXLogo size="small" />
                <h3 className="ml-4 text-xl font-semibold">USDOX (USÐØX)</h3>
              </div>
              <p className="text-gray-300">
                The native ecosystem asset powering governance, reserves, and protocol-level operations. USDOX serves as the core foundation of the ecosystem.
              </p>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <div className="flex items-center mb-4">
                <TWUSDLogo size="small" />
                <h3 className="ml-4 text-xl font-semibold">TWUSD</h3>
              </div>
              <p className="text-gray-300">
                TheUSDOX Wrapped Dollar - a stable representation issued within the USDOX framework for transactional and DeFi use. Designed for on-chain stability and composability.
              </p>
            </div>
          </div>

          <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800">
            <p className="text-gray-300">
              USDOX and TWUSD serve distinct roles and are not interchangeable assets. USDOX is the primary ecosystem asset that underpins governance, reserve logic, and protocol-level operations. TWUSD is a wrapped dollar representation issued within the USDOX framework to enable stable on-chain value transfer and integration with decentralized applications.
            </p>
          </div>
        </div>
      </section>

      {/* Transparency & Verifiability */}
      <section id="transparency" className="py-16 px-6 max-w-6xl mx-auto fade-in-section">
        <div className={`transition-all duration-1000 ${isVisible.transparency ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl font-bold mb-6 border-b border-gray-800 pb-4">Transparency & Verifiability</h2>
          <p className="text-gray-300 mb-6">
            The USDOX ecosystem is built with verifiability as a first-class principle.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-3">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-green-400 mr-3 mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L3.293 9.293a1 1 0 010-1.414l8-8a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300">TWUSD smart contract source code is publicly available</span>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-green-400 mr-3 mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L3.293 9.293a1 1 0 010-1.414l8-8a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300">Contract deployment and supply are fully observable on Ethereum</span>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-green-400 mr-3 mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L3.293 9.293a1 1 0 010-1.414l8-8a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300">No hidden minting mechanisms</span>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-green-400 mr-3 mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L3.293 9.293a1 1 0 010-1.414l8-8a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300">Token behavior follows standard ERC-20 conventions</span>
              </div>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <h3 className="text-lg font-semibold mb-4">Public Resources</h3>
              <div className="space-y-3">
                <a
                  href="https://etherscan.io/address/0x7beb51807e3c8bdb10a2868bd51c2d9e1764925d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-400 hover:text-blue-300 transition"
                >
                  <svg className="w-4 h-4 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Ethereum Contract (Etherscan)
                </a>
                <a
                  href="https://github.com/VKATHUSHAN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-400 hover:text-blue-300 transition"
                >
                  <svg className="w-4 h-4 mr-2 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  GitHub Repository
                </a>
                <a
                  href="https://theusdox.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-400 hover:text-blue-300 transition"
                >
                  <svg className="w-4 h-4 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  Official Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reserve Proof Section */}
      <section id="reserve-proof" className="py-16 px-6 max-w-6xl mx-auto fade-in-section">
        <div className={`transition-all duration-1000 ${isVisible['reserve-proof'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl font-bold mb-6 border-b border-gray-800 pb-4">Reserve Proof & Attestation</h2>

          <div className="bg-blue-900/20 border border-blue-700/30 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-semibold mb-4 text-blue-200">Bank Attestation Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
              <div>
                <span className="text-gray-400 block mb-1">Bank BIC</span>
                <span className="font-mono text-white">DEUTDEFFXXX</span>
              </div>
              <div>
                <span className="text-gray-400 block mb-1">Bank Reference</span>
                <span className="font-mono text-white text-xs">DE94675787576843</span>
              </div>
              <div>
                <span className="text-gray-400 block mb-1">Report Time</span>
                <span className="font-mono text-white text-xs">2024-12-09T09:45:37Z</span>
              </div>
              <div>
                <span className="text-gray-400 block mb-1">EUR/USD Rate</span>
                <span className="font-mono text-white">1.1571</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden">
              <div className="bg-gradient-to-r from-green-900/50 to-green-800/30 px-6 py-4 border-b border-gray-800 flex justify-between items-center flex-wrap gap-2">
                <h3 className="text-lg font-bold">Tether (USDT) Allocation</h3>
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">€33B Reserve</span>
              </div>

              <div className="p-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase mb-1">USD Value</label>
                    <div className="text-2xl font-mono text-green-400">$38,184,300,000</div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Token Contract</label>
                    <div className="font-mono text-xs bg-gray-900 p-3 rounded border border-gray-700 break-all flex items-center">
                      0x7BeB...925D
                      <CopyButton text="0x7BeB51807E3c8BdB10A2868bD51c2D9E1764925D" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-900/50 to-purple-800/30 px-6 py-4 border-b border-gray-800 flex justify-between items-center flex-wrap gap-2">
                <h3 className="text-lg font-bold">USDOX (USDO) Allocation</h3>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">€47B Reserve</span>
              </div>

              <div className="p-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase mb-1">USD Value</label>
                    <div className="text-2xl font-mono text-blue-400">$54,383,700,000</div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Token Contract</label>
                    <div className="font-mono text-xs bg-gray-900 p-3 rounded border border-gray-700 break-all flex items-center">
                      0x868D...6D72
                      <CopyButton text="0x868DEBd542CBEc04747462FFcC4a6e6702346D72" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-6 border-2 border-gray-700">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                  <h3 className="text-xl font-bold mb-1">Total Reserve Backing</h3>
                  <p className="text-sm text-gray-400">Combined EUR and USD value across allocations</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-white mb-1">€80 Billion</div>
                  <div className="text-xl text-gray-300">$92,568,000,000</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-yellow-900/20 border border-yellow-700/30 rounded-xl">
            <div className="flex items-start">
              <svg className="w-6 h-6 text-yellow-400 mr-3 mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <div>
                <h4 className="font-semibold text-yellow-200 mb-2">Audit & Verification Notice</h4>
                <p className="text-sm text-gray-300">
                  Reserve proofs are generated using canonical JSON serialization and Keccak-256 hashing (EVM-compatible).
                  All proof hashes can be independently verified on-chain via Gnosis Safe multi-signature contracts.
                  Bank attestation documents are maintained off-chain for regulatory compliance and are available upon audit request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <USDOXLogo size="small" />
                <h3 className="text-lg font-semibold">USDOX</h3>
              </div>
              <p className="text-sm text-gray-400">
                Transparent digital dollar infrastructure built on Ethereum.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4 uppercase text-gray-300">Resources</h4>
              <div className="space-y-2">
                <a href="https://etherscan.io/address/0x7beb51807e3c8bdb10a2868bd51c2d9e1764925d" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-400 hover:text-white transition">
                  Etherscan Contract
                </a>
                <a href="https://github.com/VKATHUSHAN" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-400 hover:text-white transition">
                  GitHub
                </a>
                <a href="https://theusdox.com" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-400 hover:text-white transition">
                  Official Website
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4 uppercase text-gray-300">Connect</h4>
              <div className="space-y-2">
                <a href="https://twitter.com/TheUSDOXs" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-400 hover:text-white transition">
                  Twitter / X
                </a>
                <a href="mailto:hello@theusdox.com" className="block text-sm text-gray-400 hover:text-white transition">
                  hello@theusdox.com
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="text-xs text-gray-500 space-y-2">
              <p className="font-semibold text-gray-400 mb-2">Legal Disclaimer:</p>
              <p>
                TWUSD and USDOX are independent projects. TWUSD is not affiliated with, endorsed by, or connected to Tether Limited (USDT), Circle (USDC), or any other stablecoin issuer. 
                TWUSD is a wrapped dollar representation within the USDOX ecosystem framework. This is not investment advice. 
                Cryptocurrency investments carry significant risk. Always conduct your own research and consult with financial professionals before making investment decisions.
              </p>
              <p className="mt-4 text-center text-gray-600">
                © {new Date().getFullYear()} USDOX Ecosystem. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
