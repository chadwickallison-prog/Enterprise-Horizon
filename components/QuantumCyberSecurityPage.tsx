import React from 'react';

interface SecurityCardProps {
  title: string;
  description: string;
  page: string;
  onNavigate: (page: string) => void;
}

const SecurityCard: React.FC<SecurityCardProps> = ({ title, description, page, onNavigate }) => (
    <button
        type="button"
        onClick={() => onNavigate(page)}
        className="text-left rounded-xl border border-cyan-200/15 bg-[#061526]/70 p-6 hover:border-cyan-200/40 hover:bg-cyan-300/[0.07] transition-all duration-300 shadow-lg"
    >
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p className="text-sm text-slate-300 mt-2 leading-6">{description}</p>
    </button>
);

const QuantumCyberSecurityPage: React.FC<{onNavigate: (page:string) => void}> = ({ onNavigate }) => {
  return (
    <div className="w-full max-w-6xl bg-[#03101f]/80 backdrop-blur-xl border border-cyan-200/15 rounded-2xl shadow-2xl p-6 sm:p-8 animate-fade-in">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-cyan-200/70">Enterprise Horizon</p>
          <h1 className="text-3xl sm:text-4xl font-black text-white mt-3 mb-4">Quantum Security</h1>
          <p className="text-slate-300 leading-7">A complete quantum-readiness layer combining cryptographic discovery, NIST-standardized post-quantum cryptography, specialized quantum communications, resilient key management and crypto-agile architecture.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <SecurityCard
                title="Quantum Communications"
                description="Understand the full communications stack: PQC over conventional networks, hybrid migration, QKD on specialized optical links, QRNG and emerging quantum-network capabilities."
                page="quantum-communications"
                onNavigate={onNavigate}
            />
            <SecurityCard 
                title="Post-Quantum Cryptography (PQC)" 
                description="Migrate key establishment and digital signatures to quantum-resistant algorithms, including NIST's finalized ML-KEM, ML-DSA and SLH-DSA standards." 
                page="pqc" 
                onNavigate={onNavigate} 
            />
            <SecurityCard 
                title="Quantum Key Distribution (QKD)" 
                description="Use quantum states across controlled optical infrastructure to establish keying material and detect certain interception attempts. QKD is a specialized layer, not a replacement for PQC or authentication."
                page="qkd" 
                onNavigate={onNavigate} 
            />
            <SecurityCard 
                title="Quantum Random Number Generation (QRNG)" 
                description="Add quantum-derived entropy to cryptographic key generation and security services while keeping the broader cryptographic architecture quantum-resistant."
                page="qrng" 
                onNavigate={onNavigate} 
            />
            <SecurityCard 
                title="Quantum-Resilient Architecture" 
                description="Build cryptographic inventory, crypto-agility, certificate lifecycle, key management and migration controls so algorithms can be replaced without redesigning the enterprise."
                page="quantum-resilient-architecture" 
                onNavigate={onNavigate} 
            />
            <SecurityCard 
                title="AI & Quantum Threat Detection" 
                description="Use AI-assisted discovery, telemetry and policy monitoring to find vulnerable cryptography, migration gaps and security anomalies across the enterprise."
                page="ai-q-threat-detection" 
                onNavigate={onNavigate} 
            />
        </div>
    </div>
  );
};

export default QuantumCyberSecurityPage;
