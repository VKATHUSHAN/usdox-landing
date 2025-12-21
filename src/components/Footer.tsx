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
          className="mb-8"
        >
          <h3 className="text-xl font-semibold mb-4 text-center">Legal & Branding Disclosure</h3>
          <p className="text-sm text-gray-400 text-center max-w-3xl mx-auto">
            TWUSD is not affiliated with Tether, USDT, Circle, or any third-party stablecoin issuer.
            &quot;Wrapped Dollar&quot; refers solely to an internal ecosystem representation and does not imply
            custodial claims or fiat backing.
          </p>
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
