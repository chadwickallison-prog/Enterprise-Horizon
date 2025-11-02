import React from 'react';

interface SecurityCardProps {
  title: string;
  description: string;
  page: string;
  onNavigate: (page: string) => void;
}

const SecurityCard: React.FC<SecurityCardProps> = ({ title, description, page, onNavigate }) => (
    <div 
        onClick={() => onNavigate(page)}
        className="bg-gray-800/50 border-2 border-gray-700 rounded-lg p-6 hover:border-blue-500 hover:bg-gray-700/30 transition-all duration-300 cursor-pointer"
    >
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p className="text-sm text-gray-400 mt-1">{description}</p>
    </div>
);


const QuantumCyberSecurityPage: React.FC<{onNavigate: (page:string) => void}> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-black/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl p-6 sm:p-8 animate-fade-in">
        <h1 className="text-3xl font-black text-white text-center mb-4">Quantum Cyber Security</h1>
        <p className="text-center text-gray-400 mb-10">Securing the enterprise for the quantum era.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SecurityCard 
                title="Post-Quantum Cryptography (PQC)" 
                description="Developing and implementing cryptographic algorithms that are secure against attack by both classical and quantum computers." 
                page="pqc" 
                onNavigate={onNavigate} 
            />
            <SecurityCard 
                title="Quantum Key Distribution (QKD)" 
                description="A secure communication method which implements a cryptographic protocol involving components of quantum mechanics."
                page="qkd" 
                onNavigate={onNavigate} 
            />
            <SecurityCard 
                title="Quantum Random Number Generators (QRNG)" 
                description="Leveraging quantum properties to produce truly unpredictable random numbers for cryptographic applications."
                page="qrng" 
                onNavigate={onNavigate} 
            />
            <SecurityCard 
                title="AI & Quantum Threat Detection" 
                description="Using AI to analyze complex data patterns and detect threats that are harbingers of quantum-based attacks."
                page="ai-q-threat-detection" 
                onNavigate={onNavigate} 
            />
             <SecurityCard 
                title="Quantum-Resilient Architecture" 
                description="Designing systems and networks with cryptographic agility to withstand the transition to a quantum-computing world."
                page="quantum-resilient-architecture" 
                onNavigate={onNavigate} 
            />
        </div>
    </div>
  );
};

export default QuantumCyberSecurityPage;
