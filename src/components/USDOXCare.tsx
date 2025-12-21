"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function USDOXCare() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-800/30 rounded-2xl p-12 text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <Image
              src="/usdoxcare-logo.png"
              alt="USDOXCARE Logo"
              width={80}
              height={80}
              className="mx-auto"
            />
          </motion.div>
          
          <h2 className="text-4xl font-bold mb-4 text-gradient">USDOXCARE</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            USDOXCARE promotes education, transparency, and responsible stewardship
            of the USDOX ecosystem.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
