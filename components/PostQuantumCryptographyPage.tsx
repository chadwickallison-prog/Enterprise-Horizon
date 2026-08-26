import React from 'react';

const pqcOptions = [
  { title: 'ML-KEM', use: 'Primary NIST-standardized key-establishment option for general enterprise migration.', detail: 'Use for TLS/VPN/application key establishment and other public-key replacement paths where standards support it.' },
  { title: 'ML-DSA', use: 'Primary NIST-standardized digital-signature option.', detail: 'Use for software signing, certificates, identity, document signing, authentication, and code-integrity workflows.' },
  { title: 'SLH-DSA', use: 'Hash-based signature alternative with mathematical diversity.', detail: 'Useful when an organization wants a signature family with a different security foundation than lattice-based ML-DSA.' },
  { title: 'FN-DSA / FALCON', use: 'Compact-signature alternative selected by NIST for standardization.', detail: 'Relevant where signature size and bandwidth are important, subject to the applicable final standard and implementation support.' },
  { title: 'HQC', use: 'Code-based backup key-establishment family selected by NIST.', detail: 'Provides algorithmic diversity from ML-KEM and is valuable for long-term crypto-agility planning as standardization completes.' },
  { title: 'Hybrid Classical + PQC', use: 'Transition architecture combining an existing classical method with a PQC method.', detail: 'Useful where interoperability and migration risk require a staged transition rather than a hard cutover.' },
  { title: 'Hybrid PQC + QKD', use: 'Defense-in-depth architecture combining algorithmic and physics-based key protection.', detail: 'Best reserved for high-value network segments where the cost and operational complexity of QKD are justified.' },
  { title: 'Crypto-Agile Multi-Algorithm', use: 'Policy-driven ability to rotate algorithms by application, geography, lifecycle, and risk.', detail: 'Enterprise Horizon can inventory cryptography, map dependencies, recommend migration waves, and preserve the ability to switch algorithms later.' }
];

const PostQuantumCryptographyPage: React.FC = () => {
  return (
    <div className="w-full bg-black/30 backdrop-blur-sm border border-cyan-300/15 rounded-2xl shadow-2xl p-6 sm:p-8 animate-fade-in">
      <h1 className="text-3xl font-black text-white text-center mb-2">Post-Quantum Cryptography (PQC)</h1>
      <p className="text-center text-cyan-100/70 mb-8">A portfolio approach — not one algorithm for every workload.</p>

      <div className="max-w-6xl mx-auto text-slate-300 space-y-8">
        <p className="max-w-4xl mx-auto text-center leading-7">
          NIST's finalized PQC standards are ready for implementation now, but the correct enterprise design depends on the function being protected. Key establishment, digital signatures, software signing, identity, VPNs, TLS, cloud services, embedded systems, long-lived data, and high-assurance links do not all need the same algorithm or migration path.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {pqcOptions.map(option => (
            <div key={option.title} className="rounded-xl border border-cyan-300/15 bg-[#071a2e]/75 p-5 shadow-lg">
              <h3 className="text-lg font-bold text-cyan-100">{option.title}</h3>
              <p className="mt-2 text-sm font-semibold text-white/85">{option.use}</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">{option.detail}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
            <h2 className="font-bold text-white mb-3">Public Internet / Cloud</h2>
            <p className="text-sm leading-6">Prioritize standardized PQC, hybrid handshakes where needed, certificate and identity migration, software-signing changes, and crypto-agile key management. This is the broadest deployment path because it runs over existing networks.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
            <h2 className="font-bold text-white mb-3">Data Center / Private WAN</h2>
            <p className="text-sm leading-6">Use PQC for general key establishment and signatures, with optional optical-layer QKD on selected data-center interconnects or mission-critical links. Keep the data plane independent from any single key source.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
            <h2 className="font-bold text-white mb-3">Embedded / Constrained Systems</h2>
            <p className="text-sm leading-6">Select algorithms by CPU, memory, bandwidth, signature size, key size, latency, firmware lifecycle, and updateability. Constrained devices may require a different migration profile than servers or cloud applications.</p>
          </div>
        </div>

        <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/[0.05] p-5">
          <h2 className="text-lg font-bold text-cyan-100 mb-2">Enterprise Horizon decision factors</h2>
          <p className="text-sm leading-6">
            For each application, score cryptographic function, data sensitivity, confidentiality lifetime, protocol support, hardware constraints, certificate dependencies, HSM/KMS compatibility, regulatory requirements, interoperability, migration complexity, rollback capability, and algorithm-diversity requirements. The output should be a migration portfolio — not a blanket replacement rule.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostQuantumCryptographyPage;