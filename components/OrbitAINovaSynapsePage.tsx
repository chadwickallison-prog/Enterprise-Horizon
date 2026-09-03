import React from 'react';

const Capability: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-start">
        <svg className="w-5 h-5 mr-2 text-blue-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>{children}</span>
    </li>
);


const ArchBox: React.FC<{ title: string; color?: string; subtitle?: string; className?: string }> = ({ title, color = 'border-gray-600', subtitle, className = '' }) => (
  <div className={`bg-gray-800/50 border-2 ${color} rounded-lg p-3 text-center shadow-lg ${className}`}>
    <h3 className="font-bold text-white text-sm">{title}</h3>
    {subtitle && <p className="text-xs text-gray-400 mt-1">{subtitle}</p>}
  </div>
);

const OrbitAINovaSynapsePage: React.FC = () => {
  return (
    <div className="w-full bg-black/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl p-6 sm:p-8 animate-fade-in">
        <div className="text-center mb-12">
            <h1 className="text-3xl font-black text-white mb-2">OrbitAI NovaSynapse™</h1>
            <p className="text-lg text-blue-400 font-semibold">Behavioral Learning Engine</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
                <h2 className="text-xl font-bold text-white mb-4">Synopsis</h2>
                <p className="text-gray-300 mb-6">
                   This is the behavioral learning engine of the platform. It moves beyond simple threshold-based monitoring to understand normal operational patterns and detect subtle anomalies across your entire infrastructure, providing early warnings for developing issues before they impact services.
                </p>
                <h2 className="text-xl font-bold text-white mb-4">Key Capabilities</h2>
                <ul className="space-y-3 text-gray-300">
                    <Capability>Multi-dimensional behavioral baselining across all metrics.</Capability>
                    <Capability>Temporal pattern recognition (hourly, daily, weekly cycles).</Capability>
                    <Capability>Anomaly detection with contextual awareness to reduce false positives.</Capability>
                    <Capability>Pre-failure pattern recognition and performance degradation detection.</Capability>
                    <Capability>User, application, and network behavior analytics (UEBA).</Capability>
                </ul>
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-900/30 rounded-lg p-6">
                 <div className="flex justify-center items-center space-x-4 flex-wrap gap-4 mb-4">
                    <ArchBox title="Metrics" color="border-blue-400" subtitle="CPU, Memory, etc."/>
                    <ArchBox title="Logs" color="border-blue-400" subtitle="Application, System"/>
                    <ArchBox title="Traces" color="border-blue-400" subtitle="Distributed Requests"/>
                </div>
                <div className="text-4xl text-gray-500 my-2">↓</div>
                <ArchBox title="OrbitAI NovaSynapse™" color="border-cyan-400" className="w-2/3" subtitle="Learns Normal Patterns"/>
                <div className="text-4xl text-gray-500 my-2">↓</div>
                <div className="grid grid-cols-3 gap-2 w-full">
                    <ArchBox title="Baselining" color="border-green-500" />
                    <ArchBox title="Pattern Recognition" color="border-green-500" />
                    <ArchBox title="Anomaly Detection" color="border-green-500" />
                </div>
            </div>
        </div>
    </div>
  );
};

export default OrbitAINovaSynapsePage;
