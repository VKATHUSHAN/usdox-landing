import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "USDOX Ecosystem — Transparent Digital Dollar Infrastructure",
  description: "USDOX Ecosystem providing transparent, verifiable digital dollar infrastructure on Ethereum. TWUSD wrapped dollar asset.",
  keywords: ["USDOX", "TWUSD", "Ethereum", "ERC-20", "Digital Dollar", "DeFi"],
  openGraph: {
    title: "USDOX Ecosystem",
    description: "Transparent Digital Dollar Infrastructure on Ethereum",
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
      </body>
    </html>
  );
}
