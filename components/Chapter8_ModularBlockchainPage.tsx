import React from 'react';

const LayerBox: React.FC<{ title: string, color: string, description: string }> = ({ title, color, description }) => (
    <div className={`p-6 rounded-lg border-2 ${color} bg-gray-800/50`}>
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-gray-300 mt-2">{description}</p>
    </div>
);

const Chapter8_ModularBlockchainPage: React.FC = () => {
  return (
    <div className="w-full bg-black/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl p-6 sm:p-8 animate-fade-in">
        <div className="text-center mb-10">
            <h2 className="text-base font-semibold text-blue-400 tracking-wider uppercase">Chapter 8</h2>
            <h1 className="text-3xl font-black text-white mt-2">Modular Blockchain Development</h1>
        </div>

        <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-300 mb-12 text-center">
                Galaxity features a flexible, modular architecture that separates the core functions of the blockchain. This allows developers to build custom, application-specific blockchains (ASBs) that are highly scalable, efficient, and tailored to their unique needs.
            </p>

            <div className="space-y-6">
                <LayerBox title="Execution Layer" color="border-blue-500" description="Handles smart contract execution and state changes. Developers can choose or create a virtual machine environment (e.g., EVM, WASM) that best suits their application." />
                <LayerBox title="Data Layer" color="border-cyan-400" description="Manages data availability and storage. This layer ensures that all necessary transaction data is accessible without forcing every node to store the entire state." />
                <LayerBox title="Consensus Layer" color="border-green-500" description="Responsible for ordering transactions and securing the network. ASBs can plug into Galaxity's AI-augmented consensus or implement their own." />
            </div>
        </div>
    </div>
  );
};

export default Chapter8_ModularBlockchainPage;
