import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Providers } from "@/lib/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TheUSDOX — TWUSD DApp | Swap for Transparent Stablecoin",
  description: "Swap ETH, USDT, or USDC for TWUSD on Ethereum Mainnet. Real Uniswap integration. No fake buttons, no custody, real DeFi.",
  keywords: ["TWUSD", "TheUSDOX", "Ethereum", "Uniswap", "Swap", "DeFi", "Stablecoin"],
  openGraph: {
    title: "TheUSDOX — TWUSD DApp",
    description: "Swap for TWUSD on Ethereum Mainnet via Uniswap",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
