import React from 'react';

const Feature: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-gray-800/50 p-4 rounded-lg border-2 border-gray-700">
        <h3 className="text-lg font-bold text-blue-400">{title}</h3>
        <p className="mt-2 text-gray-300">{children}</p>
    </div>
);

const Chapter1_IntroToGalaxityPage: React.FC = () => {
  return (
    <div className="w-full bg-black/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl p-6 sm:p-8 animate-fade-in">
        <div className="text-center mb-10">
            <h2 className="text-base font-semibold text-blue-400 tracking-wider uppercase">Chapter 1</h2>
            <h1 className="text-3xl font-black text-white mt-2">Vision: Redefining Blockchain for the Quantum Era</h1>
        </div>

        <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-300 mb-8 text-center">
                Galaxity aims to redefine the blockchain landscape by creating a robust, secure, and scalable ecosystem prepared for the quantum era. Our vision is to integrate cutting-edge AI with quantum-resistant technology to unlock new possibilities for trillion-dollar industries, including the emerging space economy.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Feature title="Quantum Readiness">
                    Proactively addressing the threat of quantum computers by building a framework that is secure by design against future cryptographic challenges.
                </Feature>
                <Feature title="AI at the Core">
                    Leveraging Artificial Intelligence not as an add-on, but as a fundamental component for enhancing security, efficiency, governance, and analytics.
                </Feature>
                <Feature title="Interoperability">
                    Creating a seamless, interconnected network of blockchains through decentralized bridges, fostering a collaborative rather than competitive ecosystem.
                </Feature>
                 <Feature title="Targeting New Frontiers">
                    Focusing on high-value, complex industries like the space economy, where trust, security, and automation are paramount.
                </Feature>
            </div>
        </div>
    </div>
  );
};

export default Chapter1_IntroToGalaxityPage;
