"use client";

import React, { useState, useEffect } from 'react';

interface VisibilityState {
  [key: string]: boolean;
}

export default function USDOXCarePage() {
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

  const USDOXCareLogo = () => {
    return (
      <div className="w-20 h-20 transition-transform hover:scale-110">
        <img 
          src="https://raw.githubusercontent.com/VKATHUSHAN/theusdox-assets/main/branding/logos/usdoxcare2-logo.png"
          alt="USDOXCare Logo"
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
              <USDOXCareLogo />
              <div>
                <h1 className="text-xl font-semibold">USDOXCare</h1>
                <p className="text-sm text-gray-400 hidden sm:block">Trust, Transparency & Responsibility</p>
              </div>
            </a>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-300 hover:text-white transition">Home</a>
            <a href="/about" className="text-gray-300 hover:text-white transition">About</a>
            <a href="/usdoxcare" className="text-white font-semibold">USDOXCare</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-6 max-w-6xl mx-auto fade-in-section" id="hero">
        <div className={`text-center transition-all duration-1000 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex justify-center mb-8">
            <div className="w-32 h-32">
              <img 
                src="https://raw.githubusercontent.com/VKATHUSHAN/theusdox-assets/main/branding/logos/usdoxcare2-logo.png"
                alt="USDOXCare Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">What is USDOXCare?</h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            USDOXCare is the ethical and transparency initiative behind TheUSDOX ecosystem.
          </p>
          <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
            It exists to ensure that growth never comes at the cost of trust.
          </p>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-16 px-6 max-w-6xl mx-auto fade-in-section" id="focus">
        <div className={`transition-all duration-1000 ${isVisible.focus ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold mb-12 text-center">USDOXCare Focus Areas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-linear-to-br from-blue-900/30 to-blue-800/20 rounded-xl p-8 border-2 border-blue-700/40">
              <div className="text-blue-400 mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Transparency</h3>
              <p className="text-gray-300 leading-relaxed">
                Clear communication, verifiable data, and honest disclosures.
              </p>
            </div>

            <div className="bg-linear-to-br from-purple-900/30 to-purple-800/20 rounded-xl p-8 border-2 border-purple-700/40">
              <div className="text-purple-400 mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Education</h3>
              <p className="text-gray-300 leading-relaxed">
                Helping users understand stablecoins, risk, and responsible usage.
              </p>
            </div>

            <div className="bg-linear-to-br from-green-900/30 to-green-800/20 rounded-xl p-8 border-2 border-green-700/40">
              <div className="text-green-400 mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Community Responsibility</h3>
              <p className="text-gray-300 leading-relaxed">
                A long-term view that prioritizes ecosystem health over hype.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why USDOXCare Matters */}
      <section className="py-16 px-6 max-w-6xl mx-auto fade-in-section" id="why">
        <div className={`transition-all duration-1000 ${isVisible.why ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-linear-to-br from-gray-900 to-gray-800 rounded-xl p-10 border border-gray-700">
            <h2 className="text-3xl font-bold mb-6">Why USDOXCare Matters</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              Stablecoins are not just code — they are <strong className="text-white">public trust instruments</strong>.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              USDOXCare ensures that TheUSDOX ecosystem grows with integrity, accountability, and respect for its users.
            </p>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 px-6 max-w-6xl mx-auto fade-in-section" id="commitment">
        <div className={`transition-all duration-1000 ${isVisible.commitment ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold mb-8 text-center">Our Commitment</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center mb-3">
                <svg className="w-6 h-6 text-red-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd" />
                </svg>
                <h3 className="text-lg font-semibold">No misleading claims</h3>
              </div>
              <p className="text-gray-400 text-sm">We speak in verifiable facts, not marketing promises</p>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center mb-3">
                <svg className="w-6 h-6 text-red-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd" />
                </svg>
                <h3 className="text-lg font-semibold">No hidden mechanics</h3>
              </div>
              <p className="text-gray-400 text-sm">Every contract, every parameter, publicly documented</p>
            </div>

            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center mb-3">
                <svg className="w-6 h-6 text-red-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd" />
                </svg>
                <h3 className="text-lg font-semibold">No irresponsible growth</h3>
              </div>
              <p className="text-gray-400 text-sm">Sustainability over unsustainable expansion</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-xl text-gray-300 italic">
              USDOXCare stands for stability — in finance <strong className="text-white">and</strong> in values.
            </p>
          </div>
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
