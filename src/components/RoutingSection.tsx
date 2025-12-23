"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const routes = [
  {
    from: "ETH",
    logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
    color: "from-blue-600 to-purple-600",
  },
  {
    from: "USDT",
    logo: "https://cryptologos.cc/logos/tether-usdt-logo.png",
    color: "from-green-600 to-teal-600",
  },
  {
    from: "USDC",
    logo: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png",
    color: "from-blue-500 to-cyan-500",
  },
];

export default function RoutingSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Supported Routing</h2>
          <p className="text-gray-400">Seamless token conversion pathways</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {routes.map((route, index) => (
            <motion.div
              key={route.from}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-xl p-6 card-hover"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={route.logo} alt={route.from} className="w-8 h-8" />
                  </div>
                  <span className="font-bold text-xl">{route.from}</span>
                </div>
                <FaArrowRight className="text-gray-600" />
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                    <Image
                      src="/TWUSD-logo.png"
                      alt="TWUSD"
                      width={32}
                      height={32}
                    />
                  </div>
                  <span className="font-bold text-xl">TWUSD</span>
                </div>
              </div>
              <div className={`h-2 rounded-full bg-linear-to-r ${route.color} opacity-50`} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-500 bg-gray-900/30 rounded-lg p-4 border border-gray-800"
        >
          ⚠️ Routing and integrations under development. No liquidity or swap guarantees implied.
        </motion.div>
      </div>
    </section>
  );
}
