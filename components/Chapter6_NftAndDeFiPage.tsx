import React from 'react';

const FeatureCard: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-gray-800/50 p-6 rounded-lg border-2 border-gray-700">
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-300">{children}</p>
    </div>
);

const Chapter6_NftAndDeFiPage: React.FC = () => {
  return (
    <div className="w-full bg-black/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl p-6 sm:p-8 animate-fade-in">
        <div className="text-center mb-10">
            <h2 className="text-base font-semibold text-blue-400 tracking-wider uppercase">Chapter 6</h2>
            <h1 className="text-3xl font-black text-white mt-2">Dynamic NFT and DeFi Ecosystem</h1>
        </div>

        <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-300 mb-12 text-center">
                Galaxity provides a rich ecosystem for next-generation NFTs and decentralized finance (DeFi). Our framework supports dynamic, interoperable NFTs and integrates seamlessly with DeFi protocols for enhanced liquidity and utility.
            </p>
            <div className="space-y-8">
                <FeatureCard title="Dynamic, Interoperable NFTs">
                    Support for NFTs that can change and evolve based on external data or interactions. Thanks to our decentralized bridges, these NFTs can be moved and utilized across different blockchain ecosystems.
                </FeatureCard>
                 <FeatureCard title="Integrated DeFi Protocols">
                    Native integration of core DeFi services, including cross-chain liquidity pools, decentralized lending and borrowing markets, and staking protocols that leverage assets from multiple chains.
                </FeatureCard>
            </div>
        </div>
    </div>
  );
};

export default Chapter6_NftAndDeFiPage;
