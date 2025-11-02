import React from 'react';

const FuturePillar: React.FC<{ title: string, description: string }> = ({ title, description }) => (
    <div className="bg-gray-800/50 border-2 border-gray-700 rounded-lg p-6 text-center">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-gray-400 mt-2">{description}</p>
    </div>
);


const Chapter10_FutureVisionPage: React.FC = () => {
  return (
    <div className="w-full bg-black/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl p-6 sm:p-8 animate-fade-in">
        <div className="text-center mb-10">
            <h2 className="text-base font-semibold text-blue-400 tracking-wider uppercase">Chapter 10</h2>
            <h1 className="text-3xl font-black text-white mt-2">The Future Vision: Convergence</h1>
        </div>

        <div className="max-w-5xl mx-auto">
            <p className="text-lg text-gray-300 mb-12 text-center">
                Our long-term vision is the seamless convergence of Blockchain, AI, and Quantum Technology. This powerful combination will enable us to scale blockchain globally, expand into new critical applications, and foster a sustainable, collaborative digital future.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FuturePillar 
                    title="Global Scalability"
                    description="Achieving mass adoption by providing the performance, security, and developer-friendly tools needed for global-scale applications."
                />
                <FuturePillar 
                    title="Expansion into New Domains"
                    description="Applying our converged technology stack to solve complex problems in industries like healthcare, energy, and decentralized science (DeSci)."
                />
                 <FuturePillar 
                    title="Sustainable Collaboration"
                    description="Building a digital ecosystem that is not only technologically advanced but also ethically governed and environmentally conscious."
                />
            </div>
        </div>
    </div>
  );
};

export default Chapter10_FutureVisionPage;
