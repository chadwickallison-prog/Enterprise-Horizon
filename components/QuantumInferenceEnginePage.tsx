
import React from 'react';

const Capability: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-start">
        <svg className="w-5 h-5 mr-2 text-cyan-300 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>{children}</span>
    </li>
);

const ArchBox: React.FC<{ title: string; color?: string; subtitle?: string; className?: string }> = ({ title, color = 'border-gray-600', subtitle, className = '' }) => (
  <div className={`bg-gray-800/50 border-2 ${color} rounded-lg p-3 text-center shadow-lg ${className}`}>
    <h3 className="font-bold text-white text-sm">{title}</h3>
    {subtitle && <p className="text-xs text-gray-400 mt-1">{subtitle}</p>}
  </div>
);

const RightArrow: React.FC = () => (
    <div className="flex items-center justify-center m-2 text-gray-500 transform md:rotate-0 rotate-90">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
    </div>
);


const QuantumInferenceEnginePage: React.FC = () => {
  return (
    <div className="w-full bg-black/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl p-6 sm:p-8 animate-fade-in">
        <div className="text-center mb-12">
            <h1 className="text-3xl font-black text-white mb-2">Quantum Inference Engine™</h1>
            <p className="text-lg text-cyan-300 font-semibold">Advanced Analytics Core</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
                <h2 className="text-xl font-bold text-white mb-4">Synopsis</h2>
                <p className="text-gray-300 mb-6">
                    The advanced analytics core of Layer 2. It employs sophisticated machine learning, causal inference, and probabilistic reasoning to transform raw data from the CDAE into meaningful patterns, correlations, and predictive insights, driving smarter decisions.
                </p>
                <h2 className="text-xl font-bold text-white mb-4">Key Capabilities</h2>
                <ul className="space-y-3 text-gray-300">
                    <Capability>Multi-model machine learning framework (supervised, unsupervised, reinforcement learning).</Capability>
                    <Capability>Causal inference analysis to identify root cause beyond mere correlation.</Capability>
                    <Capability>Predictive modeling and forecasting for capacity, performance, and failure.</Capability>
                    <Capability>Prescriptive analytics to generate actionable recommendations.</Capability>
                    <Capability>Explainable AI (XAI) framework for transparent decision-making.</Capability>
                </ul>
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-900/30 rounded-lg p-6">
                <div className="flex flex-col md:flex-row items-center justify-center flex-wrap gap-2">
                    <ArchBox title="Curated Data" color="border-blue-400" subtitle="From CDAE" />
                    <RightArrow />
                    <div className="flex flex-col space-y-2">
                        <ArchBox title="Causal Inference" color="border-green-500" />
                        <ArchBox title="Predictive Modeling" color="border-green-500" />
                    </div>
                    <RightArrow />
                    <ArchBox title="Prescriptive Analytics" color="border-yellow-500" subtitle="Recommended Actions" />
                </div>
            </div>
        </div>
    </div>
  );
};

export default QuantumInferenceEnginePage;
