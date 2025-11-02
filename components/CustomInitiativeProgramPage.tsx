import React from 'react';
import { ALL_PILOTS } from '../constants';

const FeaturedCard: React.FC<{ title: string, description: string, pilotTitles: string[], onNavigate: (page: string) => void }> = ({ title, description, pilotTitles, onNavigate }) => {
    const icons = pilotTitles.map(t => ALL_PILOTS.find(p => p.title === t)?.icon).filter(Boolean);
    
    return (
        <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 flex flex-col">
            <div className="flex-grow">
                <div className="flex items-center space-x-2 mb-3">
                    {icons.slice(0, 3).map((icon, i) => (
                        <div key={i} className="text-2xl text-blue-400">{icon}</div>
                    ))}
                </div>
                <h3 className="text-lg font-bold text-white">{title}</h3>
                <p className="text-sm text-gray-400 mt-2">{description}</p>
            </div>
             <button 
                onClick={() => onNavigate('pilots')}
                className="mt-6 w-full text-sm bg-gray-700 text-white font-semibold py-2 rounded-lg hover:bg-gray-600 transition-colors"
            >
                Build This Initiative
            </button>
        </div>
    );
};

const CustomInitiativeProgramPage: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-black/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl p-6 sm:p-8 animate-fade-in">
        <div className="text-center">
            <h1 className="text-3xl font-black text-white mb-4">Custom Initiative Program</h1>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Transform insights into action. The Custom Initiative Program allows you to move beyond individual pilots and build comprehensive, multi-faceted strategic roadmaps tailored to your enterprise goals.
            </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="bg-gray-800/30 border border-gray-700/50 rounded-lg p-8 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" /></svg>
                <h2 className="mt-4 text-xl font-bold text-white">Your Saved Roadmaps</h2>
                <p className="mt-2 text-gray-400">View, manage, and track the progress of your previously designed innovation initiatives.</p>
                <button
                    onClick={() => onNavigate('custom-initiative-plans')}
                    className="mt-6 px-6 py-2 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-600 transition-colors"
                >
                    View My Initiative Plans
                </button>
            </div>
             <div className="bg-blue-900/20 border border-blue-500/50 rounded-lg p-8 text-center">
                 <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                <h2 className="mt-4 text-xl font-bold text-white">Design a New Roadmap</h2>
                <p className="mt-2 text-gray-400">Combine capabilities from our library to build a new strategic plan from the ground up.</p>
                <button
                    onClick={() => onNavigate('pilots')}
                    className="mt-6 px-6 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition-colors"
                >
                    Go to Pilot Library
                </button>
            </div>
        </div>
        
        <div className="mt-16">
            <h2 className="text-2xl font-bold text-white text-center mb-8">Featured Initiative Blueprints</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FeaturedCard
                    title="AI-Powered Security Posture"
                    description="Combine AIOps, automated threat hunting, and quantum-resistant technologies for a proactive defense."
                    pilotTitles={['AIOps for Incident Remediation', 'Automated Threat Hunting', 'Quantum-Secure VPN']}
                    onNavigate={onNavigate}
                />
                <FeaturedCard
                    title="Operational Efficiency Overhaul"
                    description="Leverage process mining, digital twins, and predictive maintenance to optimize core business operations."
                    pilotTitles={['Process Mining for Order-to-Cash', 'Digital Twin of Factory Floor', 'IoT Predictive Maintenance']}
                    onNavigate={onNavigate}
                />
                <FeaturedCard
                    title="Future-Ready Workforce"
                    description="Implement an internal talent marketplace and analyze employee sentiment to build a resilient, skilled workforce."
                    pilotTitles={['AI-Powered Talent Marketplace', 'Employee Sentiment Analysis', 'AR for Remote Assistance']}
                    onNavigate={onNavigate}
                />
            </div>
        </div>

    </div>
  );
};

export default CustomInitiativeProgramPage;
