import React from 'react';

const ArchBox: React.FC<{ title: string; children?: React.ReactNode; color?: string }> = ({ title, children, color = 'border-gray-600' }) => (
  <div className={`bg-gray-800/50 border-2 ${color} rounded-lg p-4 text-center shadow-lg w-full`}>
    <h3 className="font-bold text-white text-lg">{title}</h3>
    {children}
  </div>
);

const Arrow: React.FC<{ direction: 'down' | 'right' }> = ({ direction }) => (
    <div className={`flex items-center justify-center m-2 text-gray-500 ${direction === 'down' ? 'rotate-90' : ''}`}>
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
    </div>
);

const Chapter3_DecentralizedBridgesPage: React.FC = () => {
  return (
    <div className="w-full bg-black/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl p-6 sm:p-8 animate-fade-in">
        <div className="text-center mb-10">
            <h2 className="text-base font-semibold text-blue-400 tracking-wider uppercase">Chapter 3</h2>
            <h1 className="text-3xl font-black text-white mt-2">Decentralized Bridges for Interoperability</h1>
        </div>

        <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-300 mb-12 text-center">
                Galaxity is designed for a multi-chain future. Our decentralized bridges enable seamless and secure asset transfers between Galaxity and other major blockchains like Ethereum, fostering cross-chain liquidity and collaboration.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center flex-wrap">
                <ArchBox title="Ethereum" color="border-blue-500"><p className="text-sm text-gray-400 mt-2">Asset Locked in Contract</p></ArchBox>
                <Arrow direction="right" />
                <div className="flex flex-col items-center">
                    <ArchBox title="Lock-Mint-Burn-Unlock Protocol" color="border-cyan-400" />
                    <Arrow direction="down" />
                    <ArchBox title="Decentralized Custody" color="border-yellow-500"><p className="text-sm text-gray-400 mt-2">Managed by AI-DAO</p></ArchBox>
                </div>
                <Arrow direction="right" />
                <ArchBox title="Galaxity" color="border-green-500"><p className="text-sm text-gray-400 mt-2">Wrapped Asset Minted</p></ArchBox>
            </div>
        </div>
    </div>
  );
};

export default Chapter3_DecentralizedBridgesPage;
