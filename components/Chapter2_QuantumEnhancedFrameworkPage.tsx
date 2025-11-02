import React from 'react';

const KeyComponent: React.FC<{ title: string, children: React.ReactNode, icon: React.ReactNode }> = ({ title, children, icon }) => (
    <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 text-blue-400 text-3xl">{icon}</div>
        <div>
            <h3 className="text-lg font-bold text-white">{title}</h3>
            <p className="mt-1 text-gray-400">{children}</p>
        </div>
    </div>
);


const Chapter2_QuantumEnhancedFrameworkPage: React.FC = () => {
  return (
    <div className="w-full bg-black/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl p-6 sm:p-8 animate-fade-in">
        <div className="text-center mb-10">
            <h2 className="text-base font-semibold text-blue-400 tracking-wider uppercase">Chapter 2</h2>
            <h1 className="text-3xl font-black text-white mt-2">Quantum-Enhanced Framework</h1>
        </div>

        <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-300 mb-8 text-center">
                The core of Galaxity is built on a framework designed to be secure against both current and future threats, particularly those posed by quantum computers. This is achieved through a multi-pronged approach combining advanced cryptography and intelligent consensus mechanisms.
            </p>

            <div className="space-y-8">
                <KeyComponent title="Post-Quantum Cryptography (PQC)" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>}>
                    Utilizing cryptographic algorithms that are resistant to attacks from both classical and quantum computers, ensuring long-term data security and integrity.
                </KeyComponent>
                 <KeyComponent title="Quantum Key Distribution (QKD)" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H5v-2H3v-2H1v-4a1 1 0 011-1h2.157a6.022 6.022 0 01-.328-1.554c0-3.3 2.69-6 6-6s6 2.7 6 6c0 .54-.07 1.054-.196 1.554a1 1 0 011.804.805A6.022 6.022 0 0115 7z" /></svg>}>
                    Implementing protocols to securely exchange cryptographic keys, with security based on the principles of quantum mechanics, making eavesdropping detectable.
                </KeyComponent>
                 <KeyComponent title="AI-Augmented Consensus Mechanisms" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2 1M4 7l2-1M4 7v2.5M12 21.5v-2.5M12 18.5l-2-1m2 1l2-1M12 18.5v-2.5m4-5l2-1m-2 1l2 1m-2-1v2.5M8 13.5l-2-1m2 1l-2 1m2-1v2.5" /></svg>}>
                    Using AI models to dynamically adjust consensus parameters, detect malicious behavior, and optimize network performance, leading to a more efficient, secure, and decentralized network.
                </KeyComponent>
            </div>
        </div>
    </div>
  );
};

export default Chapter2_QuantumEnhancedFrameworkPage;
