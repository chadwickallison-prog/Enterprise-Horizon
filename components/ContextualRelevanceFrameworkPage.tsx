import React from 'react';

const Capability: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-start">
        <svg className="w-5 h-5 mr-2 text-cyan-300 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>{children}</span>
    </li>
);

const ArchBox: React.FC<{ title: string; color?: string; subtitle?: string; className?: string }> = ({ title, color = 'border-gray-600', subtitle, className = '' }) => (
  <div className={`bg-gray-800/50 border-2 ${color} rounded-lg p-4 text-center shadow-lg flex flex-col justify-center ${className}`}>
    <h3 className="font-bold text-white text-md">{title}</h3>
    {subtitle && <p className="text-xs text-gray-400 mt-1">{subtitle}</p>}
  </div>
);

const ContextualRelevanceFrameworkPage: React.FC = () => {
  return (
    <div className="w-full bg-black/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl p-6 sm:p-8 animate-fade-in">
        <div className="text-center mb-12">
            <h1 className="text-3xl font-black text-white mb-2">Contextual Relevance Framework™</h1>
            <p className="text-lg text-cyan-300 font-semibold">Business Context Integration Engine</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
                 <h2 className="text-xl font-bold text-white mb-4">Synopsis</h2>
                <p className="text-gray-300 mb-6">
                    This module bridges the gap between technical metrics and business outcomes. It integrates business context—such as revenue impact, customer experience, and strategic initiatives—with operational data from the CDAE to prioritize issues and insights based on what truly matters to the business.
                </p>
                <h2 className="text-xl font-bold text-white mb-4">Key Capabilities</h2>
                <ul className="space-y-3 text-gray-300">
                    <Capability>Business service mapping and dependency modeling.</Capability>
                    <Capability>Multi-factor priority and criticality scoring framework.</Capability>
                    <Capability>Financial context correlation (cost attribution, revenue impact).</Capability>
                    <Capability>Customer experience and strategic initiative alignment.</Capability>
                    <Capability>Value stream mapping to connect technology performance to value delivery.</Capability>
                </ul>
            </div>
            <div className="flex items-center justify-center bg-gray-900/30 rounded-lg p-6">
                <div className="flex flex-col space-y-2">
                    <ArchBox title="Technical Metrics" color="border-blue-400" subtitle="CPU, Latency, Errors" />
                    <div className="text-2xl text-center text-gray-400">+</div>
                    <ArchBox title="Business Data" color="border-yellow-500" subtitle="Revenue, Customer Journeys" />
                </div>
                <div className="text-5xl text-gray-500 mx-6">→</div>
                <ArchBox title="Contextual Relevance Framework" color="border-cyan-400" className="h-40" />
                <div className="text-5xl text-gray-500 mx-6">→</div>
                <ArchBox title="Business Impact Score" color="border-green-500" subtitle="Prioritized, actionable insights" className="h-40" />
            </div>
        </div>
    </div>
  );
};

export default ContextualRelevanceFrameworkPage;
