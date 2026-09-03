import React, { useMemo, useState } from 'react';
import type { Pilot, PilotSection } from '../types';
import { ALL_PILOTS_SECTIONS } from '../constants';

interface PilotDetailModalProps {
  pilot: Pilot;
  onClose: () => void;
}

const PilotDetailModal: React.FC<PilotDetailModalProps> = ({ pilot, onClose }) => {
  const statusColor = {
    Active: 'text-green-400 bg-green-900/50',
    Planned: 'text-yellow-400 bg-yellow-900/50',
    Completed: 'text-blue-400 bg-blue-900/50',
    Conceptual: 'text-cyan-300 bg-cyan-950/70',
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
  const statusColor = {
    Active: 'text-green-400 bg-green-900/50',
    Planned: 'text-yellow-400 bg-yellow-900/50',
    Completed: 'text-blue-400 bg-blue-900/50',
    Conceptual: 'text-cyan-300 bg-cyan-950/70',
  };

  return (
    <div onClick={() => onSelect(pilot.title)} className={`relative bg-gray-800/50 border-2 rounded-lg p-6 hover:bg-gray-700/30 transition-all duration-300 flex flex-col cursor-pointer ${isSelected ? 'border-blue-500 ring-2 ring-blue-500/50' : 'border-gray-700 hover:border-blue-500'}`}>
      {isSelected && <div className="absolute top-3 right-3 text-blue-400 bg-gray-900 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg></div>}
      <div className="flex justify-between items-start"><div className="text-3xl text-blue-400">{pilot.icon}</div><div className={`px-3 py-1 text-xs font-bold rounded-full ${statusColor[pilot.status]}`}>{pilot.status}</div></div>
      <div className="mt-4 flex-grow"><h3 className="text-lg font-bold text-white">{pilot.title}</h3><p className="text-sm text-gray-400 mt-2 line-clamp-3">{pilot.description}</p></div>
      <button onClick={(e) => { e.stopPropagation(); onViewDetails(pilot); }} className="absolute bottom-3 right-3 p-1 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-colors" aria-label={`View details for ${pilot.title}`}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>
      </button>
    </div>
  );
};

const aiExpansion: Pilot[] = [
  { title: 'Enterprise AI Agent Orchestration', description: 'Deploy governed AI agents across enterprise workflows with permissions, approval gates, observability, rollback and measurable business outcomes.', status: 'Planned', icon: '🤖' },
  { title: 'AI Executive Decision Intelligence', description: 'Combine operational, financial and market data into executive decision support with scenario analysis, confidence scoring and traceable recommendations.', status: 'Planned', icon: '🧠' },
  { title: 'AI Profitability Optimization', description: 'Identify margin leakage, cost drivers, pricing opportunities, process inefficiencies and the highest-value profitability interventions.', status: 'Planned', icon: '📈' },
  { title: 'AI Financial Planning & Forecasting', description: 'Create governed rolling forecasts for revenue, cash flow, expenses, working capital and scenario sensitivity.', status: 'Planned', icon: '💹' },
  { title: 'AI Procurement Optimization', description: 'Analyze suppliers, contracts, spend, risk and demand to improve sourcing decisions, negotiations and procurement performance.', status: 'Planned', icon: '🧾' },
  { title: 'AI Contract Intelligence', description: 'Extract obligations, renewal terms, risk clauses, approvals and exceptions from contracts and route them into governed workflows.', status: 'Planned', icon: '📑' },
  { title: 'AI Sales Intelligence', description: 'Prioritize opportunities, forecast pipeline, identify account risk, recommend next actions and improve seller productivity.', status: 'Planned', icon: '🎯' },
  { title: 'AI Customer 360 Intelligence', description: 'Unify CRM, service, product and finance signals to surface churn risk, expansion opportunities and service priorities.', status: 'Planned', icon: '👥' },
  { title: 'AI Supply Chain Intelligence', description: 'Forecast demand, detect disruption risk, optimize inventory and logistics, and improve supplier decision-making.', status: 'Planned', icon: '🔗' },
  { title: 'AI Workforce Planning', description: 'Model skills, capacity, hiring needs, organizational risk and workforce scenarios while preserving human oversight.', status: 'Planned', icon: '🧩' },
  { title: 'AI Knowledge & RAG Platform', description: 'Build a governed enterprise retrieval layer over approved internal knowledge with permissions, citations and freshness controls.', status: 'Planned', icon: '📚' },
  { title: 'AI Document Intelligence', description: 'Classify, extract, compare and route information from documents, forms, reports and records into enterprise workflows.', status: 'Planned', icon: '📄' },
  { title: 'AI Compliance Monitoring', description: 'Continuously map policies, controls and evidence to detect exceptions, prioritize remediation and prepare audit-ready packages.', status: 'Planned', icon: '✅' },
  { title: 'AI Cybersecurity Operations', description: 'Correlate telemetry, prioritize threats, assist investigations and orchestrate bounded response actions under explicit controls.', status: 'Planned', icon: '🛡️' },
  { title: 'AI Fraud & Anomaly Detection', description: 'Detect unusual transaction, identity, operational and behavioral patterns using adaptive risk scoring and explainable trails.', status: 'Planned', icon: '🔎' },
  { title: 'AI Predictive Maintenance', description: 'Use sensor, maintenance and operational history to predict failures, optimize service intervals and reduce downtime.', status: 'Planned', icon: '⚙️' },
  { title: 'AI Digital Twin Optimization', description: 'Use digital twins with forecasting and optimization models to test operational scenarios before physical changes are made.', status: 'Planned', icon: '🏭' },
  { title: 'AI Service Desk Copilot', description: 'Assist service teams with triage, knowledge retrieval, ticket summarization, recommended actions and controlled workflow automation.', status: 'Planned', icon: '🎧' },
  { title: 'AI Data Quality & Stewardship', description: 'Identify quality issues, classify sensitive information, propose remediation and maintain governed ownership and lineage.', status: 'Planned', icon: '🗂️' },
  { title: 'AI Model Governance & Validation', description: 'Establish model inventory, testing, approval, monitoring, drift detection, evidence trails and controlled release processes.', status: 'Planned', icon: '🧪' },
  { title: 'AI Agent Cost Optimization', description: 'Reduce inference and agent execution cost through routing, reusable paths, model selection, caching and compute controls.', status: 'Planned', icon: '⚡' },
  { title: 'AI Scenario & Causal Intelligence', description: 'Use scenario modeling and causal analysis to distinguish correlation from likely business drivers before major decisions.', status: 'Planned', icon: '🧭' },
  { title: 'AI Revenue Operations', description: 'Coordinate marketing, sales, customer success and finance signals to improve conversion, retention, expansion and forecasts.', status: 'Planned', icon: '🚀' },
  { title: 'AI Enterprise Search', description: 'Provide natural-language access to governed enterprise information with permission-aware retrieval and audit logs.', status: 'Planned', icon: '🔍' },
];

const quantumSecurityPilots: Pilot[] = [
  { title: 'Cryptographic Inventory & Q-Day Exposure Assessment', description: 'Discover cryptographic dependencies, sensitive-data lifetimes, vulnerable public-key systems and migration priorities.', status: 'Planned', icon: '🔐' },
  { title: 'PQC Migration Readiness Pilot', description: 'Inventory RSA/ECC dependencies and validate a staged migration path to NIST-standard post-quantum algorithms with crypto-agility controls.', status: 'Planned', icon: '🧬' },
  { title: 'Hybrid Classical + PQC Pilot', description: 'Test hybrid key-establishment and signature patterns to preserve interoperability while introducing post-quantum protection.', status: 'Planned', icon: '🔀' },
  { title: 'ML-KEM Key Establishment Pilot', description: 'Evaluate ML-KEM for selected applications, services, VPNs or TLS-style key-establishment workflows.', status: 'Planned', icon: '🔑' },
  { title: 'ML-DSA Digital Signature Pilot', description: 'Evaluate ML-DSA for document signing, software signing, identity, certificates and enterprise authentication.', status: 'Planned', icon: '✍️' },
  { title: 'SLH-DSA Signature Diversity Pilot', description: 'Evaluate hash-based post-quantum signatures where algorithmic diversity or long-term verification is valuable.', status: 'Conceptual', icon: '🧾' },
  { title: 'Crypto-Agility Control Plane', description: 'Build an inventory and policy layer that can identify, version, rotate and replace cryptographic algorithms without redesigning every application.', status: 'Planned', icon: '🎛️' },
  { title: 'QKD Dedicated Fiber Pilot', description: 'Evaluate point-to-point quantum key distribution over dedicated fiber for high-value sites with suitable optical infrastructure.', status: 'Conceptual', icon: '🌐' },
  { title: 'QKD Multiplexed Fiber Pilot', description: 'Test quantum key distribution alongside classical optical traffic where wavelength planning and loss budgets allow coexistence.', status: 'Conceptual', icon: '💡' },
  { title: 'QKD Trusted-Node Network Pilot', description: 'Evaluate multi-site QKD using trusted nodes, key managers, policy controls and monitored key handoffs.', status: 'Conceptual', icon: '🛰️' },
  { title: 'Hybrid QKD + PQC Architecture Pilot', description: 'Combine QKD-derived key material with post-quantum cryptography so the enterprise is not dependent on one security mechanism.', status: 'Conceptual', icon: '🛡️' },
  { title: 'Quantum Random Number Generation Pilot', description: 'Introduce quantum entropy into key generation, security appliances or cryptographic services and validate operational integration.', status: 'Planned', icon: '🎲' },
  { title: 'Quantum-Secure VPN Pilot', description: 'Evaluate quantum-resistant key establishment for site-to-site or remote-access VPN use cases.', status: 'Planned', icon: '🔒' },
  { title: 'Quantum-Safe PKI Pilot', description: 'Assess certificate authorities, certificate lifecycles, signing systems, HSMs and trust chains for post-quantum migration.', status: 'Planned', icon: '📜' },
  { title: 'Quantum-Safe Code Signing Pilot', description: 'Test post-quantum signing for software, firmware, containers and deployment artifacts with verification and rollback workflows.', status: 'Planned', icon: '💻' },
  { title: 'Long-Lived Data Protection Pilot', description: 'Identify information exposed to harvest-now-decrypt-later risk and prioritize quantum-safe protection by confidentiality lifetime.', status: 'Planned', icon: '🗄️' },
  { title: 'AI Quantum Threat Detection Pilot', description: 'Use AI to identify cryptographic exposure, anomalous security behavior and migration gaps with human review for high-impact actions.', status: 'Planned', icon: '👁️' },
  { title: 'Celestial Quantum Communications Readiness', description: 'Assess future satellite and free-space quantum communications requirements and terrestrial-to-celestial security handoffs.', status: 'Conceptual', icon: '🌌' },
  { title: 'Star Jumper Quantum-Secure Network Pilot', description: 'Model quantum-secure communications, optical links, key-management integration and resilient terrestrial/celestial network operations.', status: 'Conceptual', icon: '🛰️' },
];

const PilotPage: React.FC<{ onBuildInitiative: (pilots: string[]) => void }> = ({ onBuildInitiative }) => {
  const [selectedPilots, setSelectedPilots] = useState<string[]>([]);
  const [viewingPilot, setViewingPilot] = useState<Pilot | null>(null);

  const orderedSections = useMemo<PilotSection[]>(() => {
    const core = ALL_PILOTS_SECTIONS.find(section => section.title === 'Core Platform Solutions');
    const ai = ALL_PILOTS_SECTIONS.find(section => section.title === 'AI & Automation Initiatives');
    const rest = ALL_PILOTS_SECTIONS.filter(section => section !== core && section !== ai && !section.title.toLowerCase().includes('quantum security'));
    const sections: PilotSection[] = [];
    if (core) sections.push(core);
    sections.push({ title: 'AI & Automation Initiatives', pilots: [...(ai?.pilots || []), ...aiExpansion] });
    sections.push({ title: 'Quantum Security Initiatives', pilots: quantumSecurityPilots });
    sections.push(...rest);
    return sections;
  }, []);

  const handleSelectPilot = (title: string) => setSelectedPilots(prev => prev.includes(title) ? prev.filter(t => t !== title) : [...prev, title]);
  const handleBuildPilot = () => { if (selectedPilots.length) onBuildInitiative(selectedPilots); };

  return (
    <div className="w-full bg-black/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl p-6 sm:p-8 animate-fade-in">
      <h1 className="text-3xl font-black text-white text-center mb-4">Innovation Pilot Library</h1>
      <p className="text-center text-gray-400 mb-10 max-w-3xl mx-auto">Build a custom enterprise initiative by combining platform, AI, quantum security and operational pilots. AI is treated as a major enterprise transformation layer, with measurable outcomes and governed deployment.</p>

      {orderedSections.map(section => (
        <section key={section.title} className="mb-12">
          <h2 className="text-2xl font-bold text-blue-400 mb-6 pb-2 border-b-2 border-blue-500/20">{section.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {section.pilots.map((pilot, index) => <PilotCard key={`${section.title}-${pilot.title}-${index}`} pilot={pilot} isSelected={selectedPilots.includes(pilot.title)} onSelect={handleSelectPilot} onViewDetails={setViewingPilot} />)}
          </div>
        </section>
      ))}

      {selectedPilots.length > 0 && (
        <div className="mt-12 p-6 bg-gray-900/50 border border-gray-700 rounded-lg flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 sticky bottom-4 z-20">
          <p className="text-lg text-white font-semibold">{selectedPilots.length} pilot(s) selected.</p>
          <div className="flex space-x-4">
            <button onClick={handleBuildPilot} className="px-6 py-2 bg-gradient-to-r from-blue-500 to-sky-600 text-white font-bold rounded-lg shadow-lg hover:opacity-90 transition-opacity">Combine Selected Pilots ({selectedPilots.length})</button>
            <button onClick={() => setSelectedPilots([])} className="px-6 py-2 bg-gray-600 text-gray-200 font-semibold rounded-lg hover:bg-gray-500 transition-colors">Clear Selection</button>
          </div>
        </div>
      )}

      {viewingPilot && <PilotDetailModal pilot={viewingPilot} onClose={() => setViewingPilot(null)} />}
    </div>
  );
};

export default PilotPage;
