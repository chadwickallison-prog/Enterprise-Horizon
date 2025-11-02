import React from 'react';

const PillarCard: React.FC<{ title: string; icon: React.ReactNode; children: React.ReactNode }> = ({ title, icon, children }) => (
    <div className="bg-gray-800/50 border-2 border-gray-700 rounded-lg p-6 flex items-start space-x-4">
        <div className="flex-shrink-0 text-3xl text-blue-400 mt-1">{icon}</div>
        <div>
            <h3 className="text-lg font-bold text-white">{title}</h3>
            <p className="mt-1 text-gray-300">{children}</p>
        </div>
    </div>
);

const QuantumResilientArchitecturePage: React.FC = () => {
  return (
    <div className="w-full bg-black/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl p-6 sm:p-8 animate-fade-in">
      <h1 className="text-3xl font-black text-white text-center mb-2">Quantum-Resilient Architecture</h1>
      <p className="text-center text-gray-400 mb-8">Designing for a Crypto-Agile Future</p>
      
      <div className="max-w-4xl mx-auto text-gray-300 space-y-6">
        <p>
          Becoming "quantum-ready" is not a single action but a continuous architectural strategy. A Quantum-Resilient Architecture is one designed to adapt to the evolving cryptographic landscape without requiring a complete system overhaul. The core principle is cryptographic agility.
        </p>
        <p>
          This means building systems where cryptographic algorithms can be easily replaced or updated. Instead of hard-coding a specific algorithm (like RSA), the architecture uses standardized interfaces that can call different cryptographic libraries. This allows an organization to smoothly transition from current standards to new Post-Quantum Cryptography (PQC) standards as they are finalized and deployed.
        </p>
        
        <div className="space-y-6 mt-10">
            <PillarCard 
                title="Inventory" 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z" /></svg>}
            >
                You cannot protect what you do not know. The first step is to continuously discover and inventory all cryptographic assets and their dependencies across the enterprise, from TLS certificates and SSH keys to encryption libraries embedded in applications.
            </PillarCard>
            <PillarCard 
                title="Cryptographic Agility"
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h5V4H4zm0 9v5h5v-5H4zm9-9v5h5V4h-5zm0 9v5h5v-5h-5z" /></svg>}
            >
                This is the core of the architecture. Implement crypto-agile frameworks that decouple applications from specific algorithms. This prevents hard-coding and allows cryptographic protocols to be swapped out through configuration changes rather than extensive code refactoring.
            </PillarCard>
            <PillarCard 
                title="Hybridization"
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2z" /></svg>}
            >
                During the transition to PQC, deploy hybrid cryptographic schemes. These combine a trusted classical algorithm (like RSA) with a new PQC algorithm. An attacker would need to break both to compromise the system, providing a robust defense-in-depth.
            </PillarCard>
            <PillarCard 
                title="Policy Enforcement"
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>}
            >
                Use automated governance to enforce the use of approved, quantum-resistant protocols. Integrate security policies into your CI/CD pipelines and Infrastructure as Code (IaC) to automatically block deployments that use vulnerable or outdated cryptographic libraries.
            </PillarCard>
        </div>
      </div>
    </div>
  );
};

export default QuantumResilientArchitecturePage;
