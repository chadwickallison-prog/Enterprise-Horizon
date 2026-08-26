import React from 'react';

interface UseCaseCardProps {
  title: string;
  description: string;
  implementation: string[];
}

const UseCaseCard: React.FC<UseCaseCardProps> = ({ title, description, implementation }) => (
  <div className="rounded-2xl border border-cyan-300/15 bg-[#071a2e]/75 p-5 shadow-lg">
    <h3 className="text-lg font-black text-cyan-100">{title}</h3>
    <p className="text-sm text-slate-300 leading-6 mt-2">{description}</p>
    <div className="mt-4 text-[11px] uppercase tracking-[0.18em] text-cyan-300 font-black">Enterprise implementation</div>
    <ul className="mt-2 space-y-2 text-sm text-slate-400 list-disc ml-5">
      {implementation.map((item) => <li key={item}>{item}</li>)}
    </ul>
  </div>
);

const LevelCard: React.FC<{ level: string; title: string; text: string }> = ({ level, title, text }) => (
  <div className="rounded-xl border border-white/10 bg-black/20 p-5">
    <div className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">{level}</div>
    <h3 className="text-lg font-black text-white mt-1">{title}</h3>
    <p className="text-sm text-slate-400 mt-2 leading-6">{text}</p>
  </div>
);

const BlockchainPage: React.FC<{onNavigate: (page:string) => void}> = ({ onNavigate }) => {
  const useCases: UseCaseCardProps[] = [
    {
      title: 'Tamper-Evident Security & Audit Logs',
      description: 'Use blockchain as a trust layer for security-sensitive events so records can be independently verified and changes are evident.',
      implementation: [
        'Hash critical events, approvals, configuration changes and security actions.',
        'Anchor evidence with author, timestamp, version and signature metadata.',
        'Export verifiable evidence packages for internal audit, regulators and customers.'
      ]
    },
    {
      title: 'Smart Contracts & Governed Automation',
      description: 'Use smart contracts as controlled workflow instruments for deterministic enterprise rules, not speculative token activity.',
      implementation: [
        'Automate conditional approvals, handoffs and obligation checks.',
        'Require human gates for legal, financial, security or high-risk actions.',
        'Maintain rollback, exception handling and complete execution histories.'
      ]
    },
    {
      title: 'Identity, Credentials & Access Trust',
      description: 'Create verifiable identity and credential records for people, vendors, devices, agents and enterprise services.',
      implementation: [
        'Record credential issuance, verifier, expiry and revocation status.',
        'Bind permissions to verified identity, role, training and approval state.',
        'Support decentralized identifier and verifiable-credential patterns where appropriate.'
      ]
    },
    {
      title: 'AI Model & Agent Provenance',
      description: 'Create a chain of custody around AI outputs, model versions, agent actions and approval decisions.',
      implementation: [
        'Hash model outputs, evidence sources, confidence state and approval status.',
        'Record model version, feature snapshot and release approvals.',
        'Create replayable evidence for high-impact AI and agent decisions.'
      ]
    },
    {
      title: 'Data Lineage & Integrity',
      description: 'Track where critical enterprise data came from, how it changed and who or what system touched it.',
      implementation: [
        'Record source, transformation, owner, freshness and quality state.',
        'Anchor hashes of governed datasets and sensitive records.',
        'Provide an explainable lineage trail from source data to final report or decision.'
      ]
    },
    {
      title: 'Vendor & Third-Party Trust',
      description: 'Use shared, permissioned trust records to verify vendor claims, certifications and security posture.',
      implementation: [
        'Anchor supplier certifications, expiry dates, attestations and revocations.',
        'Track vendor cyber-security evidence and control attestations.',
        'Create shared vendor trust cards without exposing unnecessary underlying data.'
      ]
    },
    {
      title: 'Supply Chain & Chain of Custody',
      description: 'Track physical or digital assets across organizations with a verifiable history of custody and condition.',
      implementation: [
        'Record custody transfers, handlers, timestamps and attestations.',
        'Tie quality incidents, batches and corrective actions to provenance records.',
        'Support regulated supply chains and cross-company evidence sharing.'
      ]
    },
    {
      title: 'Contract Obligation Evidence',
      description: 'Connect legal agreements to observable execution evidence so obligations are not isolated from the systems that perform them.',
      implementation: [
        'Anchor contract hashes, obligation IDs, amendments and approval chains.',
        'Link contractual obligations to workflow completion and evidence.',
        'Preserve dispute-ready records showing what happened, when and under which version.'
      ]
    },
    {
      title: 'Compliance & Policy Enforcement',
      description: 'Create a tamper-evident evidence layer around policies, exceptions, approvals, remediation and control execution.',
      implementation: [
        'Record policy approvals and exception decisions with accountable owners.',
        'Track remediation status, closure evidence and retention requirements.',
        'Generate regulator-ready and board-ready compliance evidence exports.'
      ]
    },
    {
      title: 'Cross-Enterprise Shared State',
      description: 'Allow multiple organizations to share a verified operating state without forcing one party to own the entire system of record.',
      implementation: [
        'Use permissioned ledgers and selective disclosure between organizations.',
        'Record intercompany attestations, milestones and shared workflow events.',
        'Support interoperability between blockchain and non-blockchain enterprise systems.'
      ]
    },
    {
      title: 'Cybersecurity Change Control',
      description: 'Use blockchain evidence to strengthen privileged-access, configuration, incident and security-control governance.',
      implementation: [
        'Anchor privileged changes and security-policy approvals.',
        'Record incident evidence, remediation events and control-state changes.',
        'Integrate signatures, enterprise key management, PQC migration and optional QKD-protected infrastructure.'
      ]
    },
    {
      title: 'Records, Reports & Non-Repudiation',
      description: 'Make important enterprise documents and generated reports independently verifiable without storing confidential content directly on-chain.',
      implementation: [
        'Store document/report hashes, source snapshot IDs and signing metadata.',
        'Verify that a report has not changed since approval or release.',
        'Preserve long-lived evidence for legal, operational, customer and investor review.'
      ]
    }
  ];

  return (
    <div className="w-full bg-black/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl p-6 sm:p-8 animate-fade-in">
      <div className="max-w-5xl mx-auto text-center">
        <div className="text-xs uppercase tracking-[0.28em] text-cyan-300 font-black">Enterprise Trust Infrastructure</div>
        <h1 className="text-4xl sm:text-5xl font-black text-white mt-2">Galaxity Blockchain Framework</h1>
        <p className="text-xl text-cyan-100/80 mt-3">Blockchain for security, contracts, identity, provenance, governance and cross-enterprise trust.</p>
        <p className="text-slate-400 leading-7 mt-4 max-w-4xl mx-auto">
          The Blockchain Framework is intentionally separated from the Galaxity Token. The token page covers the financial instrument. This page covers how distributed-ledger technology can be deployed inside an enterprise as a non-financial trust, security and governed-automation layer.
        </p>
      </div>

      <section className="max-w-6xl mx-auto mt-10 rounded-2xl border border-cyan-300/20 bg-gradient-to-br from-[#061526]/95 via-[#08223b]/90 to-[#0b3653]/80 p-6 sm:p-8">
        <h2 className="text-2xl font-black text-white">Three-Level Enterprise Implementation Model</h2>
        <p className="text-slate-300 leading-7 mt-3">
          Enterprise Horizon can deploy blockchain selectively. Customers do not need every capability. The architecture moves from the core platform into an optional trust fabric and then into advanced cross-party governance when the business case requires it.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-6">
          <LevelCard level="Level 1" title="Enterprise Horizon Core" text="Existing application, database, API, AI and dashboard architecture. Blockchain is not required where a conventional system of record is sufficient." />
          <LevelCard level="Level 2" title="Blockchain Trust Fabric" text="Permissioned trust layer for tamper-evident audit events, identity, provenance, policy approvals, evidence hashes and chain-of-custody." />
          <LevelCard level="Level 3" title="Advanced Blockchain Governance" text="Smart-contract workflows, intercompany attestations, verifiable credentials, shared-state governance and interoperability across organizational boundaries." />
        </div>
      </section>

      <section className="max-w-6xl mx-auto mt-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-5">
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-cyan-300 font-black">Enterprise Implementation Matrix</div>
            <h2 className="text-3xl font-black text-white mt-1">Ways Blockchain Can Be Used Across the Enterprise</h2>
          </div>
          <div className="text-sm text-slate-400 max-w-xl md:text-right">Each capability can be implemented independently or composed with Enterprise Horizon AI, integrations, quantum security and governance controls.</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {useCases.map((item) => <UseCaseCard key={item.title} {...item} />)}
        </div>
      </section>

      <section className="max-w-6xl mx-auto mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
        <h2 className="text-2xl font-black text-white">Representative Governed Smart-Contract Workflows</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mt-5 text-sm text-slate-300">
          <div><strong className="text-cyan-100">Vendor onboarding:</strong> activate a vendor only when documents, risk scoring and Legal/Procurement/Security approvals are complete.</div>
          <div><strong className="text-cyan-100">Compliance evidence:</strong> compile hashed evidence and chain-of-custody when an audit period closes.</div>
          <div><strong className="text-cyan-100">AI recommendation approval:</strong> route high-risk recommendations to the appropriate change-control authority.</div>
          <div><strong className="text-cyan-100">Procurement:</strong> enforce thresholds, vendor-risk conditions and accountable approvals.</div>
          <div><strong className="text-cyan-100">Data access:</strong> grant bounded access only when identity, role, training and approvals are valid.</div>
          <div><strong className="text-cyan-100">Model release:</strong> promote a model only after validation, security, bias and governance reviews are complete.</div>
          <div><strong className="text-cyan-100">Third-party attestations:</strong> anchor certifications and automatically surface expiry or revocation.</div>
          <div><strong className="text-cyan-100">Report generation:</strong> create verifiable customer or executive reports from approved source snapshots.</div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto mt-8 rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.05] p-6 sm:p-8">
        <h2 className="text-2xl font-black text-cyan-100">Implementation Principle</h2>
        <p className="text-slate-300 leading-7 mt-3">
          Blockchain should be used only where multiple parties, high-value evidence, long-lived provenance, non-repudiation or deterministic shared rules justify the added trust layer. Enterprise Horizon evaluates the workflow first, selects the minimum required blockchain pattern, keeps sensitive business data off-chain when appropriate, and anchors only the evidence, signatures, states and hashes needed to establish trust.
        </p>
      </section>

      <div className="max-w-6xl mx-auto mt-8 text-center">
        <button
          type="button"
          onClick={() => onNavigate('galaxity-token')}
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-black text-white bg-white/5 hover:bg-white/10 border border-cyan-100/20 transition-colors"
        >
          Galaxity Token — Separate Financial Architecture →
        </button>
      </div>
    </div>
  );
};

export default BlockchainPage;
