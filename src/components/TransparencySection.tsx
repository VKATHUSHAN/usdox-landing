"use client";

import { motion } from "framer-motion";
import { FaCheckCircle, FaEye, FaShieldAlt, FaCode } from "react-icons/fa";

const features = [
  {
    icon: FaCode,
    title: "Open Source",
    description: "Public smart contract source code",
  },
  {
    icon: FaEye,
    title: "Observable Supply",
    description: "Fully observable supply on Ethereum",
  },
  {
    icon: FaShieldAlt,
    title: "No Hidden Mechanisms",
    description: "No hidden minting mechanisms",
  },
  {
    icon: FaCheckCircle,
    title: "Standard Compliant",
    description: "Standard ERC-20 behavior",
  },
];

export default function TransparencySection() {
  return (
    <section className="py-20 px-4 bg-linear-to-b from-gray-900/30 to-transparent">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Transparency & Verifiability</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Built on the principles of openness, security, and trust
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-xl p-6 card-hover"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-900/30 flex items-center justify-center shrink-0">
                  <feature.icon className="text-2xl text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
