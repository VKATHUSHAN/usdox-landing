import Hero from "../components/Hero";
import TokenInfo from "../components/TokenInfo";
import WalletConnect from "../components/WalletConnect";
import RoutingSection from "../components/RoutingSection";
import TransparencySection from "../components/TransparencySection";
import USDOXCare from "../components/USDOXCare";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TokenInfo />
      <WalletConnect />
      <RoutingSection />
      <TransparencySection />
      <USDOXCare />
      <Footer />
    </main>
  );
}
