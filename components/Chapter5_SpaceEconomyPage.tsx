import React from 'react';

const SpaceFeature: React.FC<{ title: string, description: string, icon: React.ReactNode }> = ({ title, description, icon }) => (
    <div className="bg-gray-800/50 border-2 border-gray-700 rounded-lg p-6 text-center">
        <div className="text-4xl text-blue-400 mb-4 inline-block">{icon}</div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-gray-400 mt-2">{description}</p>
    </div>
);

const Chapter5_SpaceEconomyPage: React.FC = () => {
  return (
    <div className="w-full bg-black/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl p-6 sm:p-8 animate-fade-in">
        <div className="text-center mb-10">
            <h2 className="text-base font-semibold text-blue-400 tracking-wider uppercase">Chapter 5</h2>
            <h1 className="text-3xl font-black text-white mt-2">Powering the Emerging Space Economy</h1>
        </div>

        <div className="max-w-5xl mx-auto">
            <p className="text-lg text-gray-300 mb-12 text-center">
                Galaxity is uniquely positioned to provide the secure, decentralized infrastructure required for the future space economy. By tokenizing space assets and enabling secure communication, we unlock new economic models for this final frontier.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <SpaceFeature 
                    title="Tokenization of Space Resources"
                    description="Create digital representations (NFTs or tokens) of physical space assets, such as satellites, orbital slots, asteroid mineral rights, and research data, enabling fractional ownership and new investment opportunities."
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 009-9m-9 9a9 9 0 00-9-9" /></svg>}
                />
                <SpaceFeature 
                    title="Decentralized Communication Networks"
                    description="Build secure, resilient, and autonomous communication networks between Earth and space assets, or between assets in orbit, using a blockchain-based protocol for message routing and verification."
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a10 10 0 0114.142 0M1.394 8.532a15 15 0 0121.212 0" /></svg>}
                />
            </div>
        </div>
    </div>
  );
};

export default Chapter5_SpaceEconomyPage;
