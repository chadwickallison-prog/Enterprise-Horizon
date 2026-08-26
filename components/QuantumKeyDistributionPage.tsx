import React from 'react';

const optionCards = [
  { title: 'Dedicated-Fiber QKD', body: 'Best for high-assurance links where dark fiber is available. Commercial systems support point-to-point, backbone, hub-and-spoke, ring, star, and trusted-node topologies.' },
  { title: 'Multiplexed QKD', body: 'Runs quantum and classical traffic on shared optical infrastructure using wavelength separation. This can reduce the need for dedicated fiber in metro environments.' },
  { title: 'Long-Distance Fiber QKD', body: 'Optimized for higher-loss and longer-haul links. Commercial offerings distinguish metro-range products from long-distance systems, with different key-rate and fiber requirements.' },
  { title: 'Hub-and-Spoke / Multi-Site QKD', body: 'Designed for enterprise campuses, financial networks, government sites, and telecom operators that need centralized key management across many endpoints.' },
  { title: 'Trusted-Node QKD Networks', body: 'Extends QKD beyond a single optical span by chaining protected nodes. Useful where direct optical distance is insufficient, but the intermediate nodes become part of the trust model.' },
  { title: 'Hybrid QKD + PQC', body: 'Combines physics-based key distribution with NIST-standardized post-quantum cryptography. This is a strong defense-in-depth option for customers that want more than one trust mechanism.' },
  { title: 'Continuous-Variable QKD', body: 'Uses continuous optical variables and can leverage telecom-style coherent detection. It is an alternative to discrete-variable photon-counting approaches for some network designs.' },
  { title: 'Entanglement-Based QKD', body: 'Uses entangled-photon correlations and is relevant to advanced quantum networking, repeater research, and future distributed quantum infrastructure.' },
  { title: 'Free-Space / Satellite QKD', body: 'Uses optical links through the atmosphere for ground-to-ground or space-to-ground key distribution. This belongs in the Celestial architecture when terrestrial fiber cannot provide the required reach.' }
];

const QuantumKeyDistributionPage: React.FC = () => {
  return (
    <div className="w-full bg-black/30 backdrop-blur-sm border border-cyan-300/15 rounded-2xl shadow-2xl p-6 sm:p-8 animate-fade-in">
      <h1 className="text-3xl font-black text-white text-center mb-2">Quantum Key Distribution (QKD)</h1>
      <p className="text-center text-cyan-100/70 mb-8">Multiple deployment architectures — selected by distance, fiber availability, topology, key-rate requirement, assurance level, and cost.</p>

      <div className="max-w-6xl mx-auto text-slate-300 space-y-8">
        <p className="max-w-4xl mx-auto text-center">
          Enterprise Horizon does not treat QKD as a single appliance. The correct architecture depends on the customer's network. Commercial systems today span dedicated dark-fiber QKD, multiplexed QKD over data-carrying fiber, long-distance systems, hub-and-spoke deployments, multi-site networks, trusted-node extensions, and hybrid QKD/PQC designs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {optionCards.map(card => (
            <div key={card.title} className="rounded-xl border border-cyan-300/15 bg-[#071a2e]/75 p-5 shadow-lg">
              <h3 className="font-bold text-cyan-100 mb-2">{card.title}</h3>
              <p className="text-sm text-slate-300 leading-6">{card.body}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
            <h2 className="text-xl font-bold text-white mb-3">Commercial patterns already in market</h2>
            <ul className="space-y-2 text-sm leading-6 list-disc ml-5">
              <li><strong>ID Quantique:</strong> short-to-long-distance QKD, hub-and-spoke and multiplex variants, integrated quantum key-management, Ethernet/OTN interoperability, and hybrid QKD/PQC key exchange.</li>
              <li><strong>Toshiba:</strong> multiplexed QKD designed to coexist with classical data, long-distance QKD, Q-KMS software, standards-based integration, and hybrid PQC/QKD network designs.</li>
              <li><strong>Quantum Xchange:</strong> trusted-node and out-of-band key-distribution approaches aimed at extending quantum-safe key delivery across wide-area networks.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
            <h2 className="text-xl font-bold text-white mb-3">Research direction</h2>
            <ul className="space-y-2 text-sm leading-6 list-disc ml-5">
              <li><strong>MIT:</strong> quantum interconnects, photon routing, remote entanglement, scalable processor-to-processor communication, and precision synchronization for quantum networking.</li>
              <li><strong>Stanford:</strong> quantum networking, photonics, entanglement distribution, transduction between physical quantum systems, nanophotonic interfaces, and high-dimensional QKD research.</li>
            </ul>
          </div>
        </div>

        <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/[0.05] p-5">
          <h2 className="text-lg font-bold text-cyan-100 mb-2">Enterprise Horizon selection model</h2>
          <p className="text-sm leading-6">
            Recommend QKD only after evaluating link distance, attenuation, available fiber pairs, whether customer traffic must co-propagate, required secret-key rate, topology, trusted-node tolerance, encryption-layer integration, key-management interfaces, operations model, and whether a hybrid PQC fallback is required.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuantumKeyDistributionPage;