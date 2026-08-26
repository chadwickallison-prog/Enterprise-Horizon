import React from 'react';

interface ChapterCardProps {
  chapter: number;
  title: string;
  description: string;
  page: string;
  onNavigate: (page: string) => void;
}

const ChapterCard: React.FC<ChapterCardProps> = ({ chapter, title, description, page, onNavigate }) => (
  <div
    onClick={() => onNavigate(page)}
    className="bg-gray-800/50 border-2 border-gray-700 rounded-lg p-6 hover:border-cyan-400 hover:bg-cyan-950/20 transition-all duration-300 cursor-pointer flex space-x-4"
  >
    <div className="flex-shrink-0">
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#06345c] via-[#0d6ba5] to-[#70d7f0] flex items-center justify-center shadow-[0_0_24px_rgba(112,215,240,0.18)]">
        <span className="text-white text-3xl font-black">{chapter}</span>
      </div>
    </div>
    <div>
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <p className="text-sm text-gray-400 mt-1">{description}</p>
    </div>
  </div>
);

const Feature: React.FC<{ title: string; text: string }> = ({ title, text }) => (
  <div className="rounded-xl border border-cyan-200/15 bg-[#071a2e]/70 p-4">
    <h3 className="font-bold text-cyan-100">{title}</h3>
    <p className="text-sm text-slate-400 mt-1">{text}</p>
  </div>
);

const BlockchainPage: React.FC<{onNavigate: (page:string) => void}> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-black/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl p-6 sm:p-8 animate-fade-in">
      <h1 className="text-3xl font-black text-white text-center mb-4">Galaxity Blockchain Framework</h1>
      <p className="text-center text-gray-400 mb-8">A quantum-ready, AI-integrated blockchain ecosystem with an enterprise trust fabric and a regulated stablecoin roadmap.</p>

      <section className="max-w-6xl mx-auto mb-10 rounded-2xl border border-cyan-300/20 bg-gradient-to-br from-[#061526]/95 via-[#08223b]/90 to-[#0b3653]/80 p-6 sm:p-8 shadow-[0_0_40px_rgba(73,190,235,0.10)]">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.24em] text-cyan-300 font-black mb-2">Enterprise Payment + Settlement Layer</div>
            <h2 className="text-3xl font-black text-white">The Galaxity Token</h2>
            <p className="mt-3 text-slate-300 leading-relaxed">
              The Galaxity Token is being repositioned as a U.S.-dollar-referenced payment stablecoin for enterprise settlement, treasury movement and tokenized-market infrastructure. Its supply model is intended to be reserve-backed and responsive to minting and redemption rather than fixed at an arbitrary token cap.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('galaxity-token')}
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-black text-white bg-gradient-to-r from-[#0b5f9c] via-[#157db8] to-[#60c7e8] hover:brightness-110 shadow-[0_8px_28px_rgba(21,125,184,0.28)] border border-cyan-100/20 whitespace-nowrap"
          >
            Stablecoin + CLARITY Readiness →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          <Feature title="USD-Referenced" text="Target architecture: one token redeemable for one U.S. dollar, subject to final legal, reserve and licensing design." />
          <Feature title="Reserve-Backed" text="Supply is intended to expand and contract through compliant minting and redemption against eligible reserve assets." />
          <Feature title="Enterprise Settlement" text="Designed for programmable payments, treasury operations, collateral workflows and tokenized-asset settlement." />
          <Feature title="Regulatory Readiness" text="Architecture is being designed around GENIUS Act stablecoin requirements and the broader CLARITY market-structure framework." />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <div className="rounded-xl border border-white/10 bg-black/20 p-5">
            <h3 className="text-lg font-black text-white mb-3">Stablecoin Architecture</h3>
            <ul className="space-y-2 text-sm text-slate-300 list-disc ml-5">
              <li>1:1 reserve-backed issuance and redemption design.</li>
              <li>Eligible reserve assets, custody separation and treasury controls.</li>
              <li>Mint, redeem, freeze and burn controls where required by law.</li>
              <li>Wallet permissions, transaction monitoring and sanctions controls.</li>
              <li>On-chain transparency with regulator-ready audit evidence.</li>
              <li>Interoperability with tokenized assets and enterprise payment rails.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/20 p-5">
            <h3 className="text-lg font-black text-white mb-3">Enterprise Controls</h3>
            <ul className="space-y-2 text-sm text-slate-300 list-disc ml-5">
              <li>Multisignature administration and role separation.</li>
              <li>KYC/KYB, BSA/AML and sanctions-compliance workflows.</li>
              <li>Continuous monitoring and policy-enforced controls.</li>
              <li>Provenance, deterministic auditability and chain-of-custody records.</li>
              <li>Integration with Galaxity AI orchestration, enterprise identity and permissioning.</li>
              <li>Quantum-ready security path through PQC, optional QKD and crypto-agility.</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-cyan-200/10 bg-cyan-300/5 p-5">
          <h3 className="text-lg font-black text-cyan-100">Galaxity Tokenization Fabric</h3>
          <p className="text-sm text-slate-300 mt-2 leading-relaxed">
            The broader Galaxity Tokenization Fabric is designed as an enterprise asset-lifecycle layer connecting identity, legal rights, custody, valuation, compliance, ledger records, audit evidence and settlement. Tokenized events can include minting, transfer, custody, settlement, redemption, compliance refresh, collateral actions, valuation updates and audit proofs. The stablecoin is intended to function as a settlement asset within that larger enterprise architecture.
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ChapterCard chapter={1} title="Vision" description="Redefining blockchain for the quantum era." page="chapter-1" onNavigate={onNavigate} />
        <ChapterCard chapter={2} title="Quantum-Enhanced Framework" description="Post-Quantum Cryptography and AI-Augmented Consensus." page="chapter-2" onNavigate={onNavigate} />
        <ChapterCard chapter={3} title="Decentralized Bridges" description="Seamless asset transfer between different blockchains." page="chapter-3" onNavigate={onNavigate} />
        <ChapterCard chapter={4} title="AI Integration" description="AI for smart contract optimization, analytics, and governance." page="chapter-4" onNavigate={onNavigate} />
        <ChapterCard chapter={5} title="Space Economy" description="Tokenization of space resources and decentralized communications." page="chapter-5" onNavigate={onNavigate} />
        <ChapterCard chapter={6} title="NFT and DeFi Ecosystem" description="Dynamic, interoperable digital assets and cross-chain liquidity architectures." page="chapter-6" onNavigate={onNavigate} />
        <ChapterCard chapter={7} title="Advanced Security" description="Multi-layered security with quantum resilience, PQC, QKD and AI." page="chapter-7" onNavigate={onNavigate} />
        <ChapterCard chapter={8} title="Modular Blockchain Development" description="Flexible architecture for application-specific blockchains." page="chapter-8" onNavigate={onNavigate} />
        <ChapterCard chapter={9} title="AI-Driven Governance" description="AI-supported analysis for governance and policy decisions." page="chapter-9" onNavigate={onNavigate} />
        <ChapterCard chapter={10} title="Future Vision" description="The convergence of Blockchain, AI, Quantum Security and terrestrial/celestial networks." page="chapter-10" onNavigate={onNavigate} />
      </div>
    </div>
  );
};

export default BlockchainPage;
