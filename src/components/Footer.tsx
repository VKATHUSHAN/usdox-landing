"use client";

import { motion } from "framer-motion";
import { FaGithub, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/theusdox", label: "GitHub" },
  { icon: FaTelegram, href: "https://t.me/theusdox", label: "Telegram" },
  { icon: FaXTwitter, href: "https://x.com/TheUSDOXs", label: "X" },
  { icon: MdEmail, href: "mailto:hello@theusdox.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 pb-8 border-b border-gray-800"
        >
          <h3 className="text-xl font-semibold mb-4 text-center text-red-400">
            Critical Legal Disclaimer
          </h3>
          <div className="space-y-3 text-sm text-gray-300 max-w-3xl mx-auto">
            <p className="font-semibold">
              TWUSD is NOT USDT. TWUSD is NOT affiliated with Tether, Circle, or any fiat currency issuer.
            </p>
            <p>
              TWUSD does not promise redemption, backing, or any custodial services. 
              It is a digital asset with no guarantee of price stability or value retention.
            </p>
            <p>
              USDOXCARE is an informational project, not a financial issuer or custodian.
            </p>
            <p className="text-gray-500 text-xs">
              By using this dApp, you acknowledge you understand the risks of DeFi protocols and 
              accept that swaps are executed via third-party decentralized exchanges (Uniswap).
            </p>
          </div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
            >
              <link.icon className="text-xl" />
              <span>{link.label}</span>
            </motion.a>
          ))}
        </div>

        <div className="text-center space-y-2">
          <p className="text-gray-400">
            <a href="https://theusdox.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              theusdox.com
            </a>
          </p>
          <p className="text-gray-500 text-sm">© 2025 TheUSDOX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
