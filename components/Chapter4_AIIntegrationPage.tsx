import React from 'react';

const AICapability: React.FC<{ title: string, description: string, icon: React.ReactNode }> = ({ title, description, icon }) => (
    <div className="bg-gray-800/50 border-2 border-gray-700 rounded-lg p-6 hover:border-blue-500 hover:bg-gray-700/30 transition-all duration-300">
        <div className="text-3xl text-blue-400 mb-3">{icon}</div>
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p className="text-sm text-gray-400 mt-1">{description}</p>
    </div>
);

const Chapter4_AIIntegrationPage: React.FC = () => {
  return (
    <div className="w-full bg-black/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl p-6 sm:p-8 animate-fade-in">
        <div className="text-center mb-10">
            <h2 className="text-base font-semibold text-blue-400 tracking-wider uppercase">Chapter 4</h2>
            <h1 className="text-3xl font-black text-white mt-2">Cornerstone AI Integration</h1>
        </div>

        <div className="max-w-5xl mx-auto">
            <p className="text-lg text-gray-300 mb-12 text-center">
                Artificial Intelligence is not an afterthought in Galaxity; it's a foundational pillar woven into the fabric of the ecosystem. AI enhances security, optimizes performance, and provides intelligent insights across the network.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AICapability 
                    title="Smart Contract Optimization" 
                    description="Automated auditing to find vulnerabilities, dynamic execution path optimization, and resource management for more efficient contracts."
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>}
                />
                 <AICapability 
                    title="Predictive Analytics" 
                    description="Transaction forecasting to manage network load, advanced fraud detection to identify malicious patterns, and market trend analysis for DeFi protocols."
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>}
                />
                 <AICapability 
                    title="Network Governance" 
                    description="AI models assist the DAO by analyzing proposals, detecting collusion in voting, and automating aspects of governance for greater efficiency and fairness."
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
                />
            </div>
        </div>
    </div>
  );
};

export default Chapter4_AIIntegrationPage;
