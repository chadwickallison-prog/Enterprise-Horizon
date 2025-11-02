import React from 'react';

const Capability: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-start">
        <svg className="w-5 h-5 mr-2 text-purple-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>{children}</span>
    </li>
);

const ArchBox: React.FC<{ title: string; color?: string, className?: string }> = ({ title, color = 'border-gray-600', className='' }) => (
  <div className={`bg-gray-800/50 border-2 ${color} rounded-lg p-3 text-center shadow-lg ${className}`}>
    <h3 className="font-bold text-white text-md">{title}</h3>
  </div>
);

const AdaptiveLearningSystemPage: React.FC = () => {
  return (
    <div className="w-full bg-black/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl p-6 sm:p-8 animate-fade-in">
        <div className="text-center mb-12">
            <h1 className="text-3xl font-black text-white mb-2">Adaptive Learning System™</h1>
            <p className="text-lg text-purple-400 font-semibold">Continuous Intelligence Improvement</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
                 <h2 className="text-xl font-bold text-white mb-4">Synopsis</h2>
                <p className="text-gray-300 mb-6">
                    This module enables continuous improvement across the entire platform. It utilizes automated feedback loops, human-in-the-loop learning, and a sophisticated knowledge management system to ensure that insights and automated actions become more accurate, relevant, and effective over time.
                </p>
                <h2 className="text-xl font-bold text-white mb-4">Key Capabilities</h2>
                <ul className="space-y-3 text-gray-300">
                    <Capability>Feedback collection and integration from users and system outcomes.</Capability>
                    <Capability>Automated model refinement and continuous retraining.</Capability>
                    <Capability>Enterprise-grade knowledge management system to capture and reuse learnings.</Capability>
                    <Capability>Human-in-the-loop learning for expert validation and knowledge capture.</Capability>
                    <Capability>Cross-environment learning to share patterns and insights securely.</Capability>
                </ul>
            </div>
            <div className="relative flex justify-center items-center h-80 bg-gray-900/30 rounded-lg p-6">
                <div className="absolute animate-spin-slow" style={{ width: '250px', height: '250px', border: '2px dashed #4A5568', borderRadius: '50%' }}></div>
                
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4">
                    <ArchBox title="1. Insight" color="border-blue-400" />
                </div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4">
                    <ArchBox title="2. Action/Outcome" color="border-yellow-500" />
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4">
                    <ArchBox title="3. Feedback" color="border-yellow-500" />
                </div>
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4">
                    <ArchBox title="4. Refine Model" color="border-green-500" />
                </div>
            </div>
        </div>
        <style>{`
            @keyframes spin-slow {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
            .animate-spin-slow { animation: spin-slow 30s linear infinite; }
        `}</style>
    </div>
  );
};

export default AdaptiveLearningSystemPage;
