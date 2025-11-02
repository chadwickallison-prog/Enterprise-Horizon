
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

const NovaCoreHyperionPage: React.FC = () => {
  return (
    <div className="w-full bg-black/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl p-6 sm:p-8 animate-fade-in">
        <div className="text-center mb-12">
            <h1 className="text-3xl font-black text-white mb-2">NovaCore Hyperion™</h1>
            <p className="text-lg text-blue-400 font-semibold">Hardware Grid Mapper</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
                <h2 className="text-xl font-bold text-white mb-4">Synopsis</h2>
                <p className="text-gray-300 mb-6">
                   Offers deep visibility into your hardware infrastructure, from data center servers to edge devices. This module creates a complete inventory of all hardware assets, monitors their health and firmware, and predicts potential failures before they can impact business services.
                </p>
                <h2 className="text-xl font-bold text-white mb-4">Key Capabilities</h2>
                <ul className="space-y-3 text-gray-300">
                    <Capability>Comprehensive hardware inventory and relationship mapping.</Capability>
                    <Capability>Firmware version tracking and vulnerability assessment.</Capability>
                    <Capability>BIOS/UEFI integrity verification.</Capability>
                    <Capability>Component failure prediction for disks, memory, power supplies.</Capability>
                    <Capability>Hardware lifecycle and supply chain risk management.</Capability>
                </ul>
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-900/30 rounded-lg p-6">
                <div className="flex justify-center items-stretch space-x-4 flex-wrap gap-4 mb-4">
                    <ArchBox title="Servers" color="border-blue-400" subtitle="BIOS, IPMI" />
                    <ArchBox title="Storage Arrays" color="border-blue-400" subtitle="Disk Health" />
                    <ArchBox title="Edge Devices" color="border-blue-400" subtitle="Sensors" />
                </div>
                <div className="text-4xl text-gray-500 my-2">↓</div>
                <ArchBox title="NovaCore Hyperion™" color="border-purple-500" className="w-2/3" />
                <div className="text-4xl text-gray-500 my-2">↓</div>
                <ArchBox title="Hardware Health & Failure Prediction" color="border-green-500" className="w-full" />
            </div>
        </div>
    </div>
  );
};

export default NovaCoreHyperionPage;
