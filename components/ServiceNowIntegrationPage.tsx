import React from 'react';

const ArchBox: React.FC<{ title: string; children?: React.ReactNode; color?: string }> = ({ title, children, color = 'border-gray-600' }) => (
  <div className={`bg-gray-800/50 border-2 ${color} rounded-lg p-4 text-center shadow-lg w-full`}>
    <h3 className="font-bold text-white text-lg">{title}</h3>
    {children}
  </div>
);

const RightArrow: React.FC = () => (
    <div className="flex items-center justify-center m-2 text-gray-500 transform md:rotate-0 rotate-90">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
    </div>
);

const ServiceNowIntegrationPage: React.FC = () => {
  return (
    <div className="w-full bg-black/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl p-6 sm:p-8 animate-fade-in">
        <h1 className="text-3xl font-black text-white text-center mb-2">ITSM Integration</h1>
        <p className="text-center text-gray-400 mb-8">Connector for ServiceNow</p>
        <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            Integrate bi-directionally with your IT Service Management platform. Correlate incidents and CMDB data with real-time infrastructure events in Enterprise Horizon, and trigger automated remediation workflows directly from identified issues.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center flex-wrap">
            <ArchBox title="ServiceNow Instance" color="border-teal-500">
                <p className="text-sm text-gray-400 mt-2">Incident & CMDB Data</p>
            </ArchBox>
            <RightArrow />
            <ArchBox title="MID Server / API" color="border-cyan-400">
                 <p className="text-sm text-gray-400 mt-2">Real-time Event Streaming</p>
            </ArchBox>
            <RightArrow />
            <ArchBox title="AIOps Engine" color="border-yellow-500">
                <p className="text-sm text-gray-400 mt-2">Correlation & Anomaly Detection</p>
            </ArchBox>
            <RightArrow />
            <ArchBox title="Automated Remediation" color="border-green-500">
                <p className="text-sm text-gray-400 mt-2">Triggers Pilot Actions</p>
            </ArchBox>
        </div>
    </div>
  );
};

export default ServiceNowIntegrationPage;
