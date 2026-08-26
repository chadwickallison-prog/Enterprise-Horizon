import React from 'react';

const InfoCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="rounded-2xl border border-cyan-300/15 bg-[#071a2e]/75 p-5 shadow-lg">
    <h3 className="text-lg font-black text-cyan-100 mb-2">{title}</h3>
    <div className="text-sm text-slate-300 leading-6">{children}</div>
  </div>
);

const GalaxityTokenPage: React.FC = () => {
  return (
    <div className="w-full max-w-7xl bg-black/30 backdrop-blur-sm border border-cyan-300/15 rounded-2xl shadow-2xl p-6 sm:p-8 animate-fade-in">
      <div className="max-w-5xl mx-auto text-center">
        <div className="text-xs uppercase tracking-[0.28em] text-cyan-300 font-black">Galaxity Blockchain</div>
        <h1 className="text-4xl sm:text-5xl font-black text-white mt-2">The Galaxity Token</h1>
        <p className="text-xl text-cyan-100/80 mt-3">A planned enterprise payment stablecoin for an increasingly on-chain financial system.</p>

        <div className="mt-7 rounded-2xl border border-cyan-300/20 bg-gradient-to-br from-[#061526]/95 via-[#08223b]/90 to-[#0b3653]/80 p-6 sm:p-8 text-left shadow-[0_0_36px_rgba(73,190,235,0.10)]">
          <div className="text-sm sm:text-base font-black tracking-[0.16em] text-cyan-200 uppercase">Not a meme. Not a shortcut.</div>
          <h2 className="text-2xl sm:text-3xl font-black text-white mt-2">Designed as an <span className="italic text-cyan-200">operating instrument</span>, not a speculative costume.</h2>
          <h3 className="text-xl sm:text-2xl font-black text-cyan-100 mt-4">Built on recognizable rails. Governed by explicit controls.</h3>
          <p className="text-slate-200 leading-7 mt-5">
            The architecture separates identity, utility, incentives, treasury, governance and controls. Each function has a defined role, an observable boundary and a deliberate route toward broader participation.
          </p>
          <p className="text-slate-300 leading-7 mt-3">
            GALAI is a conventional, fixed-supply digital token architecture for ecosystem access, participation, governance delegation and transparent allocation.
          </p>
        </div>
      </div>

      <section className="max-w-6xl mx-auto mt-10 rounded-2xl border border-cyan-300/20 bg-gradient-to-br from-[#061526]/95 via-[#08223b]/90 to-[#0b3653]/80 p-6 sm:p-8">
        <h2 className="text-2xl font-black text-white">Stablecoin Direction</h2>
        <p className="text-slate-300 leading-7 mt-3">
          The Galaxity Token is being positioned as a U.S.-dollar-referenced payment stablecoin rather than a fixed-supply speculative asset. The design objective is straightforward: one token should be redeemable for one U.S. dollar, with issuance and redemption tied to high-quality reserve assets, transparent controls, compliance operations and auditable on-chain records.
        </p>
        <p className="text-slate-300 leading-7 mt-3">
          That direction changes the economic architecture from the earlier fixed-supply utility-token concept. A regulated payment stablecoin requires reserve-backed minting and redemption, strong custody and treasury controls, legal redemption rights, sanctions and anti-money-laundering controls, operational resilience and regulatory approval before launch.
        </p>
      </section>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">
        <InfoCard title="CLARITY Act Readiness">
          <p>
            The Digital Asset Market CLARITY Act is the proposed U.S. market-structure framework intended to draw clearer jurisdictional lines between the SEC and CFTC, define categories of digital assets and digital commodities, and establish rules for intermediaries and trading markets. The House passed the legislation in 2025; the Senate Banking Committee advanced its version in 2026. As of August 2026, it has not yet become law and Senate action remains pending.
          </p>
          <p className="mt-3">
            Galaxity's preparation strategy is therefore built around regulatory adaptability: asset classification, disclosure controls, transaction monitoring, custody architecture, audit trails, permissions and data needed to support whichever final market-structure rules are enacted.
          </p>
        </InfoCard>

        <InfoCard title="GENIUS Act Stablecoin Readiness">
          <p>
            Stablecoin issuance is governed more directly by the GENIUS Act, enacted in 2025. It established a federal prudential framework for payment stablecoin issuers, including permitted-issuer requirements, reserve backing, redemption obligations, disclosures, Bank Secrecy Act / AML compliance and sanctions controls.
          </p>
          <p className="mt-3">
            The Galaxity Token stablecoin roadmap should therefore be designed for GENIUS Act compliance while remaining compatible with the broader CLARITY market-structure framework. This includes 1:1 reserve architecture, qualified custody, mint/redeem controls, legal freeze/burn capabilities when required, reserve reporting, governance separation and regulator-ready audit evidence.
          </p>
        </InfoCard>
      </div>

      <section className="max-w-6xl mx-auto mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
        <h2 className="text-2xl font-black text-white">Financial Markets Are Moving On-Chain</h2>
        <p className="text-slate-300 leading-7 mt-3">
          The direction of global finance is increasingly toward tokenized and on-chain infrastructure. This does not mean every market is already fully on-chain, but the migration is now visible across securities, collateral, payments and settlement. The SEC has issued guidance for tokenized securities; NYSE affiliates have filed rule changes enabling securities to trade in tokenized form; and DTCC is building regulated tokenization services for traditional assets, including U.S. Treasuries and large-cap securities.
        </p>
        <p className="text-slate-300 leading-7 mt-3">
          The strategic implication is significant: institutions will need infrastructure that can connect regulated identity, compliance, custody, reserve management, tokenization, blockchain settlement, cyber security and enterprise data. Enterprise Horizon and the Galaxity Blockchain Framework are being positioned to orchestrate those functions as the traditional and digital financial systems converge.
        </p>
      </section>

      <section className="max-w-6xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <InfoCard title="1:1 Reserve Model">
          <p>Design issuance so circulating supply is supported by eligible high-quality reserve assets and redemption obligations rather than an arbitrary fixed token cap.</p>
        </InfoCard>
        <InfoCard title="Enterprise Settlement">
          <p>Position the token for programmable B2B payments, treasury movement, on-chain settlement, collateral workflows and interoperability with tokenized assets.</p>
        </InfoCard>
        <InfoCard title="Compliance by Design">
          <p>Build KYC/KYB, AML, sanctions screening, transaction monitoring, wallet controls, audit evidence and regulator-facing reporting into the operating architecture.</p>
        </InfoCard>
        <InfoCard title="Quantum-Ready Security">
          <p>Integrate crypto-agility, PQC migration, optional QKD-protected infrastructure, key-management controls and AI threat monitoring around the blockchain environment.</p>
        </InfoCard>
      </section>

      <section className="max-w-6xl mx-auto mt-6 rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.05] p-6 sm:p-8">
        <h2 className="text-2xl font-black text-cyan-100">Positioning Galaxity for the New Blockchain Financial System</h2>
        <p className="text-slate-300 leading-7 mt-3">
          Galaxity's opportunity is not simply to issue another digital token. The enterprise strategy is to connect a compliant stable-value settlement asset to the broader Galaxity stack: AI orchestration, blockchain provenance, tokenized real-world assets, enterprise identity, quantum-resilient cyber security, terrestrial communications and future celestial infrastructure. The objective is to provide institutions with one governed operating layer for moving from today's financial architecture into regulated on-chain markets.
        </p>
        <p className="text-slate-400 text-xs leading-5 mt-4">
          Regulatory status and final product structure remain subject to legal review, licensing, reserve/custody arrangements and final U.S. rulemaking. This page describes the intended design direction, not an offer to sell or issue a stablecoin.
        </p>
      </section>

      <div className="max-w-6xl mx-auto mt-8 text-center">
        <a
          href="https://galaxity-ai-token.chadwickallison.chatgpt.site/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg font-black text-white bg-gradient-to-r from-[#0b5f9c] via-[#157db8] to-[#60c7e8] hover:brightness-110 shadow-[0_8px_28px_rgba(21,125,184,0.28)] border border-cyan-100/20"
        >
          Open the Galaxity Token Site ↗
        </a>
      </div>
    </div>
  );
};

export default GalaxityTokenPage;
