/** @type {import("next").NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  // Turbopack configuration (Next.js 16 default)
  turbopack: {
    // Enable Turbopack with our externals
  },
  webpack: (config) => {
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },
};

module.exports = nextConfig;

