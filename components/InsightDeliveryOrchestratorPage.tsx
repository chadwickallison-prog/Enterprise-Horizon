import React from 'react';

const Capability: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-start">
        <svg className="w-5 h-5 mr-2 text-purple-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>{children}</span>
    </li>
);

const ArchBox: React.FC<{ title: string; color?: string; children?: React.ReactNode, className?: string }> = ({ title, color = 'border-gray-600', children, className='' }) => (
  <div className={`bg-gray-800/50 border-2 ${color} rounded-lg p-4 text-center shadow-lg h-32 flex flex-col justify-center items-center ${className}`}>
    {children}
    <h3 className="font-bold text-white text-md mt-2">{title}</h3>
  </div>
);

const InsightDeliveryOrchestratorPage: React.FC = () => {
  return (
    <div className="w-full bg-black/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl p-6 sm:p-8 animate-fade-in">
         <div className="text-center mb-12">
            <h1 className="text-3xl font-black text-white mb-2">Insight Delivery Orchestrator™</h1>
            <p className="text-lg text-purple-400 font-semibold">Personalized Intelligence Distribution</p>
        </div>
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
                 <h2 className="text-xl font-bold text-white mb-4">Synopsis</h2>
                <p className="text-gray-300 mb-6">
                    This module ensures that the right insights are delivered to the right people, at the right time, and through the right channels. It personalizes and integrates actionable intelligence directly into existing workflows, such as ITSM, collaboration tools, and dashboards, to drive action.
                </p>
                <h2 className="text-xl font-bold text-white mb-4">Key Capabilities</h2>
                <ul className="space-y-3 text-gray-300">
                    <Capability>Multi-channel delivery framework (email, Slack/Teams, API, etc.).</Capability>
                    <Capability>Role-based personalization and context-aware delivery.</Capability>
                    <Capability>Deep workflow integration with ITSM and DevOps pipelines.</Capability>
                    <Capability>Intelligent notification management to reduce alert fatigue.</Capability>
                    <Capability>Action orchestration to trigger automated remediation workflows.</Capability>
                </ul>
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-900/30 rounded-lg p-6">
                <ArchBox title="Actionable Insight from AIG" color="border-blue-400" className="h-20 w-full" />
                <div className="text-5xl text-gray-500 my-4">↓</div>
                <ArchBox title="Insight Delivery Orchestrator™" color="border-purple-500" className="h-20 w-full" />
                <div className="text-5xl text-gray-500 my-4">↓</div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                    <ArchBox title="Email" color="border-green-500">
                        <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </ArchBox>
                    <ArchBox title="Slack/Teams" color="border-green-500">
                         <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                    </ArchBox>
                    <ArchBox title="Dashboard" color="border-green-500">
                         <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V7a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                    </ArchBox>
                    <ArchBox title="API/Webhook" color="border-green-500">
                         <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                    </ArchBox>
                </div>
            </div>
        </div>
    </div>
  );
};

export default InsightDeliveryOrchestratorPage;
