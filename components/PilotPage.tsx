
import React, { useState } from 'react';
import type { Pilot } from '../types';
import { ALL_PILOTS_SECTIONS } from '../constants';

interface PilotDetailModalProps {
  pilot: Pilot;
  onClose: () => void;
}

const PilotDetailModal: React.FC<PilotDetailModalProps> = ({ pilot, onClose }) => {
  const statusColor = {
    'Active': 'text-green-400 bg-green-900/50',
    'Planned': 'text-yellow-400 bg-yellow-900/50',
    'Completed': 'text-blue-400 bg-blue-900/50',
    'Conceptual': 'text-purple-400 bg-purple-900/50',
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="w-full max-w-2xl bg-[#0d1b2a] border border-gray-700/50 rounded-2xl shadow-2xl p-8 relative animate-fade-in" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        <div className="flex items-start space-x-6">
          <div className="text-5xl text-blue-400 flex-shrink-0 mt-1">{pilot.icon}</div>
          <div>
            <h2 className="text-2xl font-bold text-white">{pilot.title}</h2>
            <div className={`mt-2 inline-block px-3 py-1 text-sm font-bold rounded-full ${statusColor[pilot.status]}`}>{pilot.status}</div>
          </div>
        </div>
        <div className="mt-6 border-t border-gray-700/50 pt-6">
          <h3 className="text-lg font-semibold text-gray-300 mb-2">Description</h3>
          <p className="text-gray-400">{pilot.description}</p>
        </div>
      </div>
      <style>{`@keyframes fade-in { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } } .animate-fade-in { animation: fade-in 0.2s ease-out forwards; }`}</style>
    </div>
  );
};

interface PilotCardProps {
  pilot: Pilot;
  isSelected: boolean;
  onSelect: (title: string) => void;
  onViewDetails: (pilot: Pilot) => void;
}

const PilotCard: React.FC<PilotCardProps> = ({ pilot, isSelected, onSelect, onViewDetails }) => {
  const { title, description, status, icon } = pilot;
  const statusColor = {
    'Active': 'text-green-400 bg-green-900/50',
    'Planned': 'text-yellow-400 bg-yellow-900/50',
    'Completed': 'text-blue-400 bg-blue-900/50',
    'Conceptual': 'text-purple-400 bg-purple-900/50',
  };

  return (
    <div onClick={() => onSelect(title)} className={`relative bg-gray-800/50 border-2 rounded-lg p-6 hover:bg-gray-700/30 transition-all duration-300 flex flex-col cursor-pointer ${isSelected ? 'border-blue-500 ring-2 ring-blue-500/50' : 'border-gray-700 hover:border-blue-500'}`}>
      {isSelected && <div className="absolute top-3 right-3 text-blue-400 bg-gray-900 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg></div>}
      <div className="flex justify-between items-start"><div className="text-3xl text-blue-400">{icon}</div><div className={`px-3 py-1 text-xs font-bold rounded-full ${statusColor[status]}`}>{status}</div></div>
      <div className="mt-4 flex-grow"><h3 className="text-lg font-bold text-white">{title}</h3><p className="text-sm text-gray-400 mt-2 line-clamp-3">{description}</p></div>
      <button onClick={(e) => { e.stopPropagation(); onViewDetails(pilot); }} className="absolute bottom-3 right-3 p-1 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-colors" aria-label={`View details for ${title}`}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>
      </button>
    </div>
  );
};

const chainIcon = (d: string) => React.createElement('svg', { xmlns: 'http://www.w3.org/2000/svg', className: 'h-8 w-8', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', strokeWidth: 2 }, React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', d }));

const BLOCKCHAIN_ENTERPRISE_PILOTS: Pilot[] = [
  { title: 'Tamper-Evident Audit Trail Pilot', description: 'Anchor critical enterprise events, approvals, evidence hashes and report lineage to a permissioned blockchain trust layer for verifiable audit history.', status: 'Planned', icon: chainIcon('M9 12l2 2 4-4m5-3.5A11.95 11.95 0 0112 3a11.95 11.95 0 01-8 3.5c0 5.25 3.44 10.74 8 12 4.56-1.26 8-6.75 8-12z') },
  { title: 'Smart Contract Workflow Pilot', description: 'Automate governed enterprise workflows such as approvals, procurement, compliance handoffs and policy conditions while preserving human approval gates and rollback controls.', status: 'Planned', icon: chainIcon('M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 104 0M9 5a2 2 0 004 0m-6 7l2 2 4-4') },
  { title: 'Identity & Credential Trust Pilot', description: 'Use verifiable credentials and ledger-backed trust records for employees, agents, vendors and machines, including issuance, verification, expiration and revocation.', status: 'Planned', icon: chainIcon('M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z') },
  { title: 'AI Model Provenance Pilot', description: 'Record model versions, input snapshots, output hashes, confidence, approvals and release state so AI recommendations and reports have an auditable chain of custody.', status: 'Planned', icon: chainIcon('M12 6V4m0 16v-2m6-6h2M4 12H2m15.364-5.364l1.414-1.414M5.222 18.778l1.414-1.414m10.728 1.414l1.414 1.414M5.222 5.222l1.414 1.414M12 16a4 4 0 100-8 4 4 0 000 8z') },
  { title: 'Data Lineage & Integrity Pilot', description: 'Track source, transformation, ownership, freshness and quality events across enterprise data pipelines with signed evidence and immutable lineage anchors.', status: 'Planned', icon: chainIcon('M4 7v10m0-10c0-1.105 3.582-2 8-2s8 .895 8 2-3.582 2-8 2-8-.895-8-2zm0 5c0 1.105 3.582 2 8 2s8-.895 8-2m-16 5c0 1.105 3.582 2 8 2s8-.895 8-2') },
  { title: 'Vendor & Third-Party Trust Pilot', description: 'Create verifiable vendor certifications, cyber attestations, approval history and expiration controls to strengthen third-party risk management.', status: 'Planned', icon: chainIcon('M3 7h18M5 7l1 12h12l1-12M9 11v4m6-4v4M8 7l1-3h6l1 3') },
  { title: 'Supply Chain Provenance Pilot', description: 'Capture custody transfers, handler identity, timestamps, batch information, attestations and incident evidence for physical or digital goods moving across parties.', status: 'Planned', icon: chainIcon('M3 7l9-4 9 4-9 4-9-4zm0 0v10l9 4 9-4V7M12 11v10') },
  { title: 'Contract Obligation Evidence Pilot', description: 'Connect contract clauses and obligation IDs to approvals, execution evidence, delivery events and exception records to reduce disputes and legal review friction.', status: 'Planned', icon: chainIcon('M9 12h6m-6 4h6M7 3h7l4 4v14H7a2 2 0 01-2-2V5a2 2 0 012-2zm7 0v5h5') },
  { title: 'Compliance Evidence Automation Pilot', description: 'Compile tamper-evident evidence packets from policy approvals, control events, exceptions, remediation status and source snapshots for audit and regulatory review.', status: 'Planned', icon: chainIcon('M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11') },
  { title: 'Cross-Enterprise Shared State Pilot', description: 'Enable partners to share verified workflow state and attestations without exposing all underlying data, using permissioned ledger states and selective disclosure.', status: 'Planned', icon: chainIcon('M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z') },
  { title: 'Cybersecurity Change-Control Ledger Pilot', description: 'Record security policy changes, privileged approvals, configuration changes, key events and remediation evidence in a tamper-evident trust ledger.', status: 'Planned', icon: chainIcon('M12 11c1.657 0 3-1.343 3-3V6a3 3 0 10-6 0v2c0 1.657 1.343 3 3 3zm-7 0h14v10H5V11z') },
  { title: 'Enterprise Records & Non-Repudiation Pilot', description: 'Apply cryptographic hashes, signatures and event anchoring to critical reports, approvals and business records so origin, integrity and timing can be independently verified.', status: 'Planned', icon: chainIcon('M12 11c0 1.657-1.343 3-3 3S6 12.657 6 11s1.343-3 3-3 3 1.343 3 3zm0 0h4a3 3 0 110 6h-1m-9-6H4a3 3 0 100 6h1') },
];

const PilotPage: React.FC<{ onBuildInitiative: (pilots: string[]) => void }> = ({ onBuildInitiative }) => {
  const [selectedPilots, setSelectedPilots] = useState<string[]>([]);
  const [viewingPilot, setViewingPilot] = useState<Pilot | null>(null);

  const handleSelectPilot = (title: string) => setSelectedPilots(prev => prev.includes(title) ? prev.filter(t => t !== title) : [...prev, title]);
  const handleClearSelection = () => setSelectedPilots([]);
  const handleBuildPilot = () => { if (selectedPilots.length > 0) onBuildInitiative(selectedPilots); };

  const sections = [
    { title: 'Enterprise Blockchain Trust Fabric Pilots', pilots: BLOCKCHAIN_ENTERPRISE_PILOTS },
    ...ALL_PILOTS_SECTIONS,
  ];

  return (
    <div className="w-full bg-black/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl p-6 sm:p-8 animate-fade-in">
      <h1 className="text-3xl font-black text-white text-center mb-4">Innovation Pilot Library</h1>
      <p className="text-center text-gray-400 mb-10 max-w-3xl mx-auto">Select one or more pilot programs below to build a custom innovation roadmap. Combine capabilities to design a strategic initiative tailored to your organization's unique goals.</p>

      {sections.map(section => (
        <section key={section.title} className="mb-12">
          <h2 className="text-2xl font-bold text-blue-400 mb-6 pb-2 border-b-2 border-blue-500/20">{section.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {section.pilots.map((pilot, index) => <PilotCard key={`${section.title}-${index}`} pilot={pilot} isSelected={selectedPilots.includes(pilot.title)} onSelect={handleSelectPilot} onViewDetails={setViewingPilot} />)}
          </div>
        </section>
      ))}

      {selectedPilots.length > 0 && (
        <div className="mt-12 p-6 bg-gray-900/50 border border-gray-700 rounded-lg flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 sticky bottom-4 z-20">
          <p className="text-lg text-white font-semibold">{selectedPilots.length} pilot(s) selected.</p>
          <div className="flex space-x-4">
            <button onClick={handleBuildPilot} className="px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-lg shadow-lg hover:opacity-90 transition-opacity">Combine Selected Pilots ({selectedPilots.length})</button>
            <button onClick={handleClearSelection} className="px-6 py-2 bg-gray-600 text-gray-200 font-semibold rounded-lg hover:bg-gray-500 transition-colors">Clear Selection</button>
          </div>
        </div>
      )}

      {viewingPilot && <PilotDetailModal pilot={viewingPilot} onClose={() => setViewingPilot(null)} />}
    </div>
  );
};

export default PilotPage;
