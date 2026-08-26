import React from 'react';

const Capability: React.FC<{title:string; status:string; children:React.ReactNode}> = ({ title, status, children }) => (
  <div className="rounded-xl border border-cyan-200/15 bg-[#061526]/70 p-5 shadow-lg">
    <div className="flex items-start justify-between gap-4">
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <span className="shrink-0 rounded-full border border-cyan-200/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-100">{status}</span>
    </div>
    <div className="mt-3 text-sm leading-6 text-slate-300">{children}</div>
  </div>
);

const QuantumCommunicationsPage: React.FC = () => {
  return (
    <div className="w-full max-w-6xl rounded-2xl border border-cyan-200/15 bg-[#03101f]/80 p-6 sm:p-8 shadow-2xl backdrop-blur-xl animate-fade-in">
      <div className="max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-cyan-200/70">Enterprise Horizon / Quantum Security</p>
        <h1 className="mt-3 text-3xl sm:text-4xl font-black text-white">Quantum Communications</h1>
        <p className="mt-4 text-slate-300 leading-7">
          Quantum-safe communications is not one technology. A practical enterprise architecture combines post-quantum cryptography, crypto-agility, modern key management and — where the operating model justifies specialized optical infrastructure — quantum key distribution and quantum random-number sources.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
        <Capability title="Post-Quantum Cryptography (PQC)" status="Deploy now">
          NIST's finalized baseline includes ML-KEM for key establishment, ML-DSA for digital signatures and SLH-DSA as a hash-based signature alternative. PQC runs on conventional networks and endpoints, making it the primary migration path for TLS, VPNs, applications, PKI, software signing and data protection.
        </Capability>

        <Capability title="Hybrid Classical + PQC" status="Migration option">
          During transition, organizations can combine an approved classical exchange with a post-quantum KEM so a session remains protected unless both mechanisms fail. Hybrid deployment can reduce migration risk while protocols, vendors and interoperability mature.
        </Capability>

        <Capability title="Quantum Key Distribution (QKD)" status="Specialized">
          QKD uses quantum states across a dedicated optical path to establish keying material and detect certain forms of interception. It requires purpose-built equipment and operational controls and should be treated as a specialized layer rather than a replacement for authentication, encryption, PKI or PQC.
        </Capability>

        <Capability title="Quantum Random Number Generation (QRNG)" status="Available">
          QRNG can supply entropy derived from quantum processes for key generation and other cryptographic uses. It can strengthen an entropy architecture, but it does not by itself make a system post-quantum secure.
        </Capability>

        <Capability title="Crypto-Agility & Discovery" status="Foundational">
          Inventory cryptographic dependencies, certificates, protocols, libraries, hardware and data-retention requirements. Build the ability to swap algorithms and keys without redesigning the entire application stack. This is essential because standards and implementation guidance will continue to evolve.
        </Capability>

        <Capability title="Quantum Networks / Entanglement" status="Emerging">
          Research networks can distribute quantum states or entanglement for future networking, sensing and distributed quantum applications. This is distinct from production PQC and from most currently deployed QKD systems, and should be represented as an emerging capability rather than a production replacement for enterprise cryptography.
        </Capability>
      </div>

      <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.035] p-6">
        <h2 className="text-xl font-bold text-white">Recommended enterprise sequence</h2>
        <ol className="mt-4 space-y-3 text-sm leading-6 text-slate-300 list-decimal list-inside">
          <li>Discover cryptographic assets and long-lived sensitive data.</li>
          <li>Prioritize crypto-agility and NIST-standardized PQC migration.</li>
          <li>Introduce hybrid modes where protocol support and risk policy justify them.</li>
          <li>Evaluate QKD only for links with a strong mission, distance, optical and operational case.</li>
          <li>Integrate monitoring, certificate lifecycle, key management and policy into one control plane.</li>
        </ol>
      </div>

      <p className="mt-6 text-xs leading-5 text-slate-500">
        Research basis: NIST Post-Quantum Cryptography standards and migration guidance; CISA/NSA/NIST quantum-readiness guidance; NSA post-quantum cybersecurity and QKD guidance. Enterprise Horizon should present QKD and PQC as complementary technologies with different deployment requirements, not as interchangeable substitutes.
      </p>
    </div>
  );
};

export default QuantumCommunicationsPage;