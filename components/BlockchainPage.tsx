import React from 'react';

interface ChapterCardProps {
  chapter: number;
  title: string;
  description: string;
  page: string;
  onNavigate: (page: string) => void;
}

const ChapterCard: React.FC<ChapterCardProps> = ({ chapter, title, description, page, onNavigate }) => (
    <div 
        onClick={() => onNavigate(page)}
        className="bg-gray-800/50 border-2 border-gray-700 rounded-lg p-6 hover:border-blue-500 hover:bg-gray-700/30 transition-all duration-300 cursor-pointer flex space-x-4"
    >
        <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#002060] to-[#4080FF] flex items-center justify-center">
                <span className="text-white text-3xl font-black">{chapter}</span>
            </div>
        </div>
        <div>
            <h3 className="text-lg font-bold text-white">{title}</h3>
            <p className="text-sm text-gray-400 mt-1">{description}</p>
        </div>
    </div>
);


const BlockchainPage: React.FC<{onNavigate: (page:string) => void}> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-black/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl p-6 sm:p-8 animate-fade-in">
        <h1 className="text-3xl font-black text-white text-center mb-4">Galaxity Blockchain Framework</h1>
        <p className="text-center text-gray-400 mb-10">A quantum-ready, AI-integrated blockchain ecosystem.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ChapterCard chapter={1} title="Vision" description="Redefining blockchain for the quantum era." page="chapter-1" onNavigate={onNavigate} />
            <ChapterCard chapter={2} title="Quantum-Enhanced Framework" description="Post-Quantum Cryptography and AI-Augmented Consensus." page="chapter-2" onNavigate={onNavigate} />
            <ChapterCard chapter={3} title="Decentralized Bridges" description="Seamless asset transfer between different blockchains." page="chapter-3" onNavigate={onNavigate} />
            <ChapterCard chapter={4} title="AI Integration" description="AI for smart contract optimization, analytics, and governance." page="chapter-4" onNavigate={onNavigate} />
            <ChapterCard chapter={5} title="Space Economy" description="Tokenization of space resources and decentralized comms." page="chapter-5" onNavigate={onNavigate} />
            <ChapterCard chapter={6} title="NFT and DeFi Ecosystem" description="Dynamic, interoperable NFTs and cross-chain liquidity." page="chapter-6" onNavigate={onNavigate} />
            <ChapterCard chapter={7} title="Advanced Security" description="Multi-layered security with quantum-resilience and AI." page="chapter-7" onNavigate={onNavigate} />
            <ChapterCard chapter={8} title="Modular Blockchain Development" description="Flexible architecture for application-specific blockchains." page="chapter-8" onNavigate={onNavigate} />
            <ChapterCard chapter={9} title="AI-Driven Governance" description="Enhancing the platform's DAO with AI analysis." page="chapter-9" onNavigate={onNavigate} />
            <ChapterCard chapter={10} title="Future Vision" description="The convergence of Blockchain, AI, and Quantum Tech." page="chapter-10" onNavigate={onNavigate} />
        </div>
    </div>
  );
};

export default BlockchainPage;
