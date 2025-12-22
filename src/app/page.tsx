"use client";

import React, { useState, useEffect } from 'react';
import GetTWUSDButton from '@/components/GetTWUSDButton';

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
              <h1 className="text-xl font-semibold">TheUSDOX</h1>
              <p className="text-sm text-gray-400 hidden sm:block">The On-Chain Dollar</p>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#what-is-usdox" className="text-gray-300 hover:text-white transition">About</a>
            <a href="#architecture" className="text-gray-300 hover:text-white transition">Ecosystem</a>
            <a href="#token-info" className="text-gray-300 hover:text-white transition">Trust</a>
            <a href="#roadmap" className="text-gray-300 hover:text-white transition">Roadmap</a>
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
            <a href="#what-is-usdox" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-300 hover:text-white transition">About</a>
            <a href="#architecture" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-300 hover:text-white transition">Ecosystem</a>
            <a href="#token-info" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-300 hover:text-white transition">Trust</a>
            <a href="#roadmap" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-300 hover:text-white transition">Roadmap</a>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section className="py-32 px-6 max-w-6xl mx-auto fade-in-section" id="hero">
        <div className="text-center space-y-8">
          <div className="flex justify-center mb-8">
            <USDOXLogo />
          </div>
          <h1 className={`text-5xl md:text-6xl font-bold transition-opacity duration-1000 ${isVisible.hero ? 'opacity-100' : 'opacity-0'}`}>
            USDOX — The On-Chain Dollar
          </h1>
          <p className={`text-2xl text-white font-semibold max-w-3xl mx-auto transition-opacity duration-1000 delay-200 ${isVisible.hero ? 'opacity-100' : 'opacity-0'}`}>
            Stable. Transparent. Built for the long term.
          </p>
          <p className={`text-lg text-gray-300 max-w-4xl mx-auto transition-opacity duration-1000 delay-400 ${isVisible.hero ? 'opacity-100' : 'opacity-0'}`}>
            USDOX is a decentralized digital dollar designed for clarity, trust, and real-world utility.<br />
            No hype cycles. No hidden mechanics. Just a predictable on-chain dollar for the next era of finance.
          </p>
          <p className={`text-base text-gray-400 max-w-3xl mx-auto font-medium transition-opacity duration-1000 delay-600 ${isVisible.hero ? 'opacity-100' : 'opacity-0'}`}>
            Fast settlement. Fixed precision. Auditable by design.
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center mt-12 transition-opacity duration-1000 delay-800 ${isVisible.hero ? 'opacity-100' : 'opacity-0'}`}>
            <a
              href="https://etherscan.io/address/0x7beb51807e3c8bdb10a2868bd51c2d9e1764925d"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
            >
              Get USDOX — The on-chain dollar
            </a>
          </div>
        </div>
      </section>

      {/* What is USDOX Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto fade-in-section" id="what-is-usdox">
        <div className={`transition-all duration-1000 ${isVisible['what-is-usdox'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold mb-8">What is USDOX?</h2>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            USDOX is the core stable asset of <strong>TheUSDOX ecosystem</strong> — a dollar-pegged digital currency engineered for builders, DeFi protocols, and long-term holders who value transparency over speculation.
          </p>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            Unlike experimental stablecoins, USDOX focuses on:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="flex items-start space-x-3">
              <svg className="w-6 h-6 text-blue-400 mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-300">Clear token behavior</span>
            </div>
            <div className="flex items-start space-x-3">
              <svg className="w-6 h-6 text-blue-400 mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-300">Fixed precision (6 decimals)</span>
            </div>
            <div className="flex items-start space-x-3">
              <svg className="w-6 h-6 text-blue-400 mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-300">Declared supply logic</span>
            </div>
            <div className="flex items-start space-x-3">
              <svg className="w-6 h-6 text-blue-400 mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-300">Public, verifiable contracts</span>
            </div>
          </div>
          <p className="text-lg text-gray-300 leading-relaxed">
            USDOX is not built to chase trends.<br />
            It's built to <strong className="text-white">outlast them</strong>.
          </p>
        </div>
      </section>

      {/* Trust by Design Section */}
      <section id="token-info" className="py-20 px-6 max-w-6xl mx-auto fade-in-section">
        <div className={`transition-all duration-1000 ${isVisible['token-info'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold mb-8 pb-4 border-b-2 border-blue-600">Binance-Style Trust & Transparency</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-linear-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-700">
              <div className="text-blue-400 mb-4">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Trust by Design</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <p><strong className="text-white">Network:</strong> Ethereum</p>
                <p><strong className="text-white">Standard:</strong> ERC-20</p>
                <p><strong className="text-white">Decimals:</strong> 6 (USDT-style)</p>
                <p><strong className="text-white">Supply:</strong> Publicly declared</p>
                <p><strong className="text-white">Contracts:</strong> Verified on Etherscan</p>
              </div>
              <p className="mt-4 text-gray-400 italic text-sm">
                There are no hidden rules.<br />What you see is what you get.
              </p>
            </div>

            <div className="bg-linear-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-700">
              <div className="text-green-400 mb-4">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Transparency First</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  All contracts publicly verifiable
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Token parameters fixed and visible
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Ecosystem components clearly separated
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  No vague mechanics or opaque promises
                </li>
              </ul>
              <p className="mt-4 text-gray-400 italic text-sm">
                USDOX believes trust is not claimed — it's <strong className="text-white">proven</strong>.
              </p>
            </div>

            <div className="bg-linear-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-700">
              <div className="text-purple-400 mb-4">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Security Mindset</h3>
              <p className="text-sm text-gray-300 mb-4">
                USDOX is developed with a conservative, security-first approach:
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  Minimal contract complexity
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  Predictable token behavior
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  Clear separation of responsibilities
                </li>
              </ul>
              <p className="mt-4 text-gray-400 italic text-sm">
                Stability beats speed.<br />Clarity beats cleverness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TheUSDOX Ecosystem Section */}
      <section id="architecture" className="py-20 px-6 max-w-6xl mx-auto fade-in-section">
        <div className={`transition-all duration-1000 ${isVisible.architecture ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold mb-12 text-center">TheUSDOX Ecosystem</h2>

          <div className="space-y-8">
            <div className="bg-linear-to-br from-blue-900/30 to-blue-800/20 rounded-xl p-8 border-2 border-blue-700/40">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                <h3 className="text-2xl font-bold">USDOX</h3>
              </div>
              <p className="text-lg font-semibold text-blue-100 mb-3">The Core Dollar</p>
              <p className="text-gray-300 leading-relaxed">
                The primary stablecoin of the ecosystem. Designed as a long-term on-chain dollar with a focus on stability, auditability, and future integrations.
              </p>
            </div>

            <div className="bg-linear-to-br from-yellow-900/30 to-yellow-800/20 rounded-xl p-8 border-2 border-yellow-700/40">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                <h3 className="text-2xl font-bold">TWUSD</h3>
              </div>
              <p className="text-lg font-semibold text-yellow-100 mb-3">TheUSDOX Wrapped Dollar (EVM)</p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                TWUSD is the Ethereum-native wrapped representation of USDOX, optimized for DeFi liquidity and smart-contract interactions.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-gray-400 block mb-1">Network</span>
                  <span className="font-semibold text-white">Ethereum</span>
                </div>
                <div>
                  <span className="text-gray-400 block mb-1">Decimals</span>
                  <span className="font-semibold text-white">6</span>
                </div>
                <div>
                  <span className="text-gray-400 block mb-1">Supply</span>
                  <span className="font-semibold text-white">33.2B</span>
                </div>
                <div>
                  <span className="text-gray-400 block mb-1">Standard</span>
                  <span className="font-semibold text-white">ERC-20</span>
                </div>
              </div>
              <p className="text-gray-400 mt-4 text-sm italic">
                TWUSD brings USDOX into the EVM world — cleanly and predictably.
              </p>
            </div>

            <div className="bg-linear-to-br from-green-900/30 to-green-800/20 rounded-xl p-8 border-2 border-green-700/40">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <h3 className="text-2xl font-bold">USDOXCare</h3>
              </div>
              <p className="text-lg font-semibold text-green-100 mb-3">Trust, Transparency & Responsibility</p>
              <p className="text-gray-300 leading-relaxed">
                USDOXCare is the social and organizational arm of the ecosystem, focused on transparency, education, and responsible growth.
              </p>
              <p className="text-gray-400 mt-4 italic">
                Because stable money requires <strong className="text-white">stable values</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why USDOX Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto fade-in-section" id="why-usdox">
        <div className={`transition-all duration-1000 ${isVisible['why-usdox'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold mb-6">Why USDOX?</h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Most stablecoins optimize for speed or dominance.<br />
            USDOX optimizes for <strong className="text-white">trust</strong>.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3">
              <svg className="w-6 h-6 text-green-400 mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L3.293 9.293a1 1 0 010-1.414l8-8a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-300">Simple token logic</span>
            </div>
            <div className="flex items-start space-x-3">
              <svg className="w-6 h-6 text-green-400 mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L3.293 9.293a1 1 0 010-1.414l8-8a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-300">Transparent parameters</span>
            </div>
            <div className="flex items-start space-x-3">
              <svg className="w-6 h-6 text-green-400 mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L3.293 9.293a1 1 0 010-1.414l8-8a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-300">Publicly verifiable contracts</span>
            </div>
            <div className="flex items-start space-x-3">
              <svg className="w-6 h-6 text-green-400 mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L3.293 9.293a1 1 0 010-1.414l8-8a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-300">No unnecessary complexity</span>
            </div>
          </div>
          <p className="text-lg text-gray-300 mt-8 leading-relaxed">
            USDOX is built for people who plan to still be here in five years.
          </p>
        </div>
      </section>

      {/* Transparency & Verifiability - Technical Details */}
      <section className="py-20 px-6 max-w-6xl mx-auto fade-in-section" id="technical-details">
        <div className={`bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-gray-800 transition-all duration-1000 ${isVisible['technical-details'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl font-bold mb-6 border-b border-gray-800 pb-4">TWUSD Technical Specification</h3>
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

          <div className="mt-8 pt-6 border-t border-gray-800">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <p className="text-sm text-gray-300 mb-2">
                  <strong className="text-white">TWUSD is an Ethereum-native wrapped dollar designed for DeFi utility.</strong>
                </p>
                <p className="text-sm text-gray-400">
                  Always verify contract addresses before interacting.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <GetTWUSDButton />
                <a
                  href="/TWUSD_Overview.md"
                  download
                  className="text-sm text-blue-400 hover:text-blue-300 underline transition whitespace-nowrap"
                >
                  Download TWUSD Overview (PDF)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto fade-in-section" id="roadmap">
        <div className={`transition-all duration-1000 ${isVisible.roadmap ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold mb-12 text-center">Roadmap</h2>
          
          <div className="space-y-8">
            <div className="bg-gray-900/50 rounded-xl p-8 border-l-4 border-blue-500">
              <div className="flex items-center mb-4">
                <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">PHASE 1</span>
                <h3 className="text-xl font-bold ml-4">Foundation</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-3 mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Core contracts deployed
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-3 mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  TWUSD live on Ethereum
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-400 mr-3 mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Brand & documentation established
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-8 border-l-4 border-yellow-500">
              <div className="flex items-center mb-4">
                <span className="bg-yellow-500 text-gray-900 text-xs font-bold px-3 py-1 rounded-full">PHASE 2</span>
                <h3 className="text-xl font-bold ml-4">Ecosystem Expansion</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3">•</span>
                  USDOX visibility rollout
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3">•</span>
                  DeFi integrations
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3">•</span>
                  Liquidity partnerships
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-8 border-l-4 border-purple-500">
              <div className="flex items-center mb-4">
                <span className="bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">PHASE 3</span>
                <h3 className="text-xl font-bold ml-4">Utility & Growth</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-3">•</span>
                  Cross-chain strategies
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-3">•</span>
                  Institutional-grade tooling
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-3">•</span>
                  Long-term sustainability initiatives
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA Section */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center fade-in-section" id="cta">
        <div className={`transition-all duration-1000 ${isVisible.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-xl text-gray-300 mb-4 leading-relaxed">
            Stable money should feel boring — because boring means reliable.
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            USDOX is the on-chain dollar built for the long game.
          </h2>
          <a
            href="https://etherscan.io/address/0x7beb51807e3c8bdb10a2868bd51c2d9e1764925d"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
          >
            Join the USDOX ecosystem
          </a>
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
              <div className="bg-linear-to-r from-green-900/50 to-green-800/30 px-6 py-4 border-b border-gray-800 flex justify-between items-center flex-wrap gap-2">
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
              <div className="bg-linear-to-r from-blue-900/50 to-purple-800/30 px-6 py-4 border-b border-gray-800 flex justify-between items-center flex-wrap gap-2">
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

            <div className="bg-linear-to-r from-gray-900 to-gray-800 rounded-xl p-6 border-2 border-gray-700">
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
