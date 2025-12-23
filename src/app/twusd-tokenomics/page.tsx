export default function TWUSDTokenomicsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24 space-y-10">
      <h1 className="text-4xl font-bold">TWUSD Tokenomics</h1>

      <p className="text-gray-600">
        TWUSD is the Ethereum-native wrapped dollar of the TheUSDOX ecosystem,
        designed for predictable DeFi utility and transparent behavior.
      </p>

      <section>
        <h2 className="text-2xl font-semibold mb-3">🔗 Token Overview</h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-1">
          <li>Name: TWUSD</li>
          <li>Network: Ethereum</li>
          <li>Standard: ERC-20</li>
          <li>Decimals: 6</li>
          <li>Total Supply: 33,200,000,000</li>
          <li>
            Contract:{" "}
            <span className="font-mono text-sm">
              0x7BeB51807E3c8BdB10A2868bD51c2D9E1764925D
            </span>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">🎯 Purpose</h2>
        <p className="text-gray-600">
          TWUSD exists to enable swaps, liquidity pools, and smart contract
          interactions across Ethereum-based DeFi protocols. It is a utility
          token, not a governance or yield-bearing asset.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">🧮 Supply Design</h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>Declared and transparent supply</li>
          <li>No rebasing mechanisms</li>
          <li>No elastic or algorithmic minting</li>
          <li>No hidden transfer taxes</li>
        </ul>
      </section>

      <p className="text-sm text-gray-500 border-t pt-6">
        TWUSD does not represent ownership, equity, or a promise of returns.
        Always verify contract addresses and understand DeFi risks.
      </p>
    </main>
  );
}
