
import React from 'react';

const Capability: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-start">
        <svg className="w-5 h-5 mr-2 text-blue-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>{children}</span>
    </li>
);

const ArchBox: React.FC<{ title: string; color?: string; className?: string }> = ({ title, color = 'border-gray-600', className = '' }) => (
  <div className={`bg-slate-900 border-2 ${color} rounded-lg p-4 text-center shadow-lg ${className}`}>
    <h3 className="font-bold text-white text-md">{title}</h3>
  </div>
);

const DownArrow: React.FC = () => (
    <div className="my-3 text-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 13l-7 7-7-7" />
        </svg>
    </div>
);

const StarnetHaloVortexPage: React.FC = () => {
  return (
    <div className="w-full bg-black/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl p-6 sm:p-8 animate-fade-in">
        <div className="text-center mb-12">
            <h1 className="text-3xl font-black text-white mb-2">Starnet Halo Vortex™</h1>
            <p className="text-lg text-blue-400 font-semibold">Network Topology Observer</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
                <h2 className="text-xl font-bold text-white mb-4">Synopsis</h2>
                <p className="text-gray-300 mb-6">
                    This is the foundational observation layer of the platform. It provides a comprehensive, real-time map of your entire network ecosystem, including physical devices (routers, switches), virtual infrastructure (cloud VPCs, SD-WAN), and security appliances (firewalls). It sees everything, from on-premise data centers to multi-cloud environments.
                </p>
                <h2 className="text-xl font-bold text-white mb-4">Key Capabilities</h2>
                <ul className="space-y-3 text-gray-300">
                    <Capability>Automated discovery and topology mapping of all network assets.</Capability>
                    <Capability>Real-time configuration and state monitoring.</Capability>
                    <Capability>Deep visibility into cloud networking constructs (VPCs, security groups).</Capability>
                    <Capability>Firewall rule and access control list (ACL) analysis.</Capability>
                    <Capability>Software-Defined Networking (SDN) overlay and underlay correlation.</Capability>
                </ul>
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-900/30 rounded-lg p-6">
                <div className="flex justify-center items-stretch space-x-4 w-full">
                    <ArchBox title="Routers & Switches" color="border-blue-500" className="flex-1" />
                    <ArchBox title="Firewalls" color="border-blue-500" className="flex-1" />
                    <ArchBox title="Cloud VPCs" color="border-blue-500" className="flex-1" />
                </div>
                <DownArrow />
                <ArchBox title="Starnet Halo Vortex™" color="border-cyan-400" className="w-full" />
                <DownArrow />
                <ArchBox title="Unified Network Map & Analysis" color="border-green-500" className="w-full" />
            </div>
        </div>
    </div>
  );
};

export default StarnetHaloVortexPage;