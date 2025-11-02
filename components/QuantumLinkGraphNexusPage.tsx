import React from 'react';

const Capability: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-start">
        <svg className="w-5 h-5 mr-2 text-blue-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>{children}</span>
    </li>
);

const ArchBox: React.FC<{ title: string; color?: string; className?: string }> = ({ title, color = 'border-gray-600', className = '' }) => (
  <div className={`bg-gray-800/50 border-2 ${color} rounded-lg p-4 text-center shadow-lg flex items-center justify-center ${className}`}>
    <h3 className="font-bold text-white text-md">{title}</h3>
  </div>
);

const QuantumLinkGraphNexusPage: React.FC = () => {
  return (
    <div className="w-full bg-black/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl p-6 sm:p-8 animate-fade-in">
        <div className="text-center mb-12">
            <h1 className="text-3xl font-black text-white mb-2">QuantumLink Graph Nexus™</h1>
            <p className="text-lg text-blue-400 font-semibold">Relationship Intelligence Engine</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
                <h2 className="text-xl font-bold text-white mb-4">Synopsis</h2>
                <p className="text-gray-300 mb-6">
                    This module acts as the central nervous system of the platform. It creates a comprehensive knowledge graph that maps the complex relationships and dependencies between all components in your infrastructure—from hardware to applications to users. This is the foundation for advanced impact analysis, root cause determination, and predictive intelligence.
                </p>
                <h2 className="text-xl font-bold text-white mb-4">Key Capabilities</h2>
                <ul className="space-y-3 text-gray-300">
                    <Capability>Multi-dimensional entity relationship mapping across all domains.</Capability>
                    <Capability>Automated root cause determination and probabilistic cause ranking.</Capability>
                    <Capability>Change and failure impact pathway analysis and simulation.</Capability>
                    <Capability>Knowledge inference engine to discover implicit dependencies.</Capability>
                    <Capability>Business service mapping to correlate technical issues with business impact.</Capability>
                </ul>
            </div>
             <div className="relative flex justify-center items-center h-80 bg-gray-900/30 rounded-lg p-6">
                 <svg className="absolute w-full h-full" style={{ zIndex: 0 }}>
                    <line x1="25%" y1="25%" x2="50%" y2="50%" stroke="#4A5568" strokeWidth="2" />
                    <line x1="75%" y1="25%" x2="50%" y2="50%" stroke="#4A5568" strokeWidth="2" />
                    <line x1="25%" y1="75%" x2="50%" y2="50%" stroke="#4A5568" strokeWidth="2" />
                    <line x1="75%" y1="75%" x2="50%" y2="50%" stroke="#4A5568" strokeWidth="2" />
                 </svg>
                <ArchBox title="QuantumLink Graph Nexus" color="border-purple-500" className="w-48 h-24 z-10" />
                <div className="absolute top-4 left-1/4 -translate-x-1/2"><ArchBox title="Application" color="border-blue-400" className="w-32 h-20" /></div>
                <div className="absolute top-4 right-1/4 translate-x-1/2"><ArchBox title="Database" color="border-blue-400" className="w-32 h-20" /></div>
                <div className="absolute bottom-4 left-1/4 -translate-x-1/2"><ArchBox title="User" color="border-blue-400" className="w-32 h-20" /></div>
                <div className="absolute bottom-4 right-1/4 translate-x-1/2"><ArchBox title="Network" color="border-blue-400" className="w-32 h-20" /></div>
            </div>
        </div>
    </div>
  );
};

export default QuantumLinkGraphNexusPage;
