import React from 'react';

const SecurityLayer: React.FC<{ title: string, description: string }> = ({ title, description }) => (
    <li className="p-4 bg-gray-900/50 rounded-lg">
        <p className="font-bold text-blue-400">{title}</p>
        <p className="text-gray-300 mt-1">{description}</p>
    </li>
);

const Chapter7_AdvancedSecurityPage: React.FC = () => {
  return (
    <div className="w-full bg-black/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl p-6 sm:p-8 animate-fade-in">
        <div className="text-center mb-10">
            <h2 className="text-base font-semibold text-blue-400 tracking-wider uppercase">Chapter 7</h2>
            <h1 className="text-3xl font-black text-white mt-2">Multi-Layered Advanced Security</h1>
        </div>

        <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-300 mb-12 text-center">
                Security is paramount in the Galaxity ecosystem. We employ a comprehensive, multi-layered security model that combines quantum-resilience with AI-powered threat intelligence to protect the network and its users.
            </p>

            <ul className="space-y-4">
                <SecurityLayer title="Layer 1: Quantum-Resilient Cryptography" description="The foundational layer using PQC and QKD to protect against all known classical and quantum attacks." />
                <SecurityLayer title="Layer 2: AI-Powered Threat Detection" description="Machine learning models continuously analyze network activity to detect and neutralize threats like Sybil attacks, DDoS, and fraudulent transactions in real-time." />
                <SecurityLayer title="Layer 3: Secure Wallets & Asset Protection" description="Advanced wallet solutions with multi-factor authentication, social recovery mechanisms, and hardware wallet integration." />
                <SecurityLayer title="Layer 4: Decentralized Identity (DID)" description="Empowering users with self-sovereign identity solutions to control their own data and reduce reliance on centralized identity providers." />
            </ul>
        </div>
    </div>
  );
};

export default Chapter7_AdvancedSecurityPage;
