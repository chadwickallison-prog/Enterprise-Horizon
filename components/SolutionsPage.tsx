


import React from 'react';
import type { SolutionTier } from '../types';

const SolutionTierCard: React.FC<{ tier: SolutionTier; onCtaClick: () => void }> = ({ tier, onCtaClick }) => {
    const { name, subtitle, description, features, ctaText, isFeatured } = tier;
    return (
        <div className={`border-2 rounded-2xl p-8 flex flex-col h-full relative overflow-hidden ${isFeatured ? 'border-blue-500 bg-gray-800/50' : 'border-gray-700 bg-gray-800/30'}`}>
            {isFeatured && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-4 py-1 rounded-bl-lg">MOST POPULAR</div>
            )}
            <h3 className="text-2xl font-bold text-white">{name}</h3>
            <p className="text-blue-400 font-semibold mt-1">{subtitle}</p>
            <p className="text-gray-400 mt-4 h-24">{description}</p>
            
            <ul className="space-y-3 text-gray-300 flex-grow mt-6">
                {features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 mr-3 text-green-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span>{feature}</span>
                    </li>
                ))}
            </ul>

            <button
                onClick={onCtaClick}
                className={`w-full mt-8 py-3 font-bold rounded-lg transition-transform transform hover:scale-105 ${isFeatured ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20' : 'bg-gray-700 hover:bg-gray-600 text-white'}`}
            >
                {ctaText}
            </button>
        </div>
    );
};


const SolutionsPage: React.FC<{onNavigate: (page:string) => void, onContact: () => void}> = ({ onNavigate, onContact }) => {
  
  const solutionTiers: SolutionTier[] = [
    {
        name: 'Silver',
        subtitle: 'Foundational Intelligence',
        description: 'Establish comprehensive visibility across your core technology domains. Ideal for organizations starting their observability and intelligence journey.',
        features: [
            'Starnet Halo Vortex (Network)',
            'NovaCore Hyperion (Hardware)',
            'OrbitAI NovaSynapse (Behavior)',
            'Event Horizon Synoptic (Visualization)',
        ],
        ctaText: 'Get Started with Silver',
    },
    {
        name: 'Gold',
        subtitle: 'Advanced Analytics & Root Cause',
        description: 'Unlock predictive insights and automate root cause analysis. Perfect for teams looking to move from reactive to proactive operations.',
        features: [
            'Everything in Silver, plus:',
            'QuantumLink Graph Nexus (Relationships)',
            'Quantum Inference Engine (Analytics)',
            'Temporal Dynamics Analyzer (Time-Series)',
        ],
        ctaText: 'Contact Sales',
        isFeatured: true,
    },
    {
        name: 'Platinum',
        subtitle: 'Full Enterprise Suite',
        description: 'Align technology performance with business outcomes and create a continuously improving system. For the truly data-driven enterprise.',
        features: [
            'Everything in Gold, plus:',
            'Contextual Relevance Framework (Business Context)',
            'Adaptive Learning System (Feedback Loop)',
            'Insight Delivery Orchestrator (Actioning)',
        ],
        ctaText: 'Contact Sales',
    }
  ];
  
  return (
    <div className="w-full bg-black/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl p-6 sm:p-8 animate-fade-in">
        <h1 className="text-3xl font-black text-white text-center mb-4">Solution Tiers</h1>
        <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
            Our capabilities are bundled into comprehensive tiers designed to meet you where you are and scale with your strategic goals.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {solutionTiers.map(tier => (
                <SolutionTierCard key={tier.name} tier={tier} onCtaClick={onContact} />
            ))}
        </div>
    </div>
  );
};

export default SolutionsPage;