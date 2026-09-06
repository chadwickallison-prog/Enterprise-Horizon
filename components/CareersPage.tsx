import React from 'react';

const roles = [
  { title: 'Enterprise Transformation Director', team: 'Strategy & Delivery', description: 'Lead enterprise assessments, operating-model design and measurable transformation roadmaps from executive alignment through delivery.' },
  { title: 'Sovereign Intelligence Solutions Architect', team: 'Enterprise Architecture', description: 'Translate assessment findings into secure, scalable architectures spanning data, AI, infrastructure, governance and quantum readiness.' },
  { title: 'AI & Decision Systems Engineer', team: 'Intelligence Engineering', description: 'Build governed agents, machine-learning workflows and decision-support systems with monitoring, human approval and explainable outcomes.' },
  { title: 'Post-Quantum Readiness Lead', team: 'Quantum Security', description: 'Assess cryptographic exposure and lead practical migration planning across PQC, crypto-agility, key management and appropriate QKD use cases.' },
  { title: 'Enterprise Data Architect', team: 'Data & Integration', description: 'Design trusted data foundations, lineage, quality controls and integration patterns that support reliable analytics and autonomous operations.' },
  { title: 'GRC & Responsible AI Lead', team: 'Governance, Risk & Compliance', description: 'Map controls, strengthen model governance and create continuous evidence across security, AI, data and regulated enterprise operations.' },
  { title: 'Full-Stack Portal Engineer', team: 'Product Engineering', description: 'Build responsive assessment, reporting and customer-portal experiences with secure APIs, accessible interfaces and production-grade testing.' },
  { title: 'Customer Value & Pilot Director', team: 'Customer Success', description: 'Turn prioritized findings into pilots, establish success measures and guide customers from controlled validation to enterprise scale.' },
  { title: 'Permissioned Blockchain Solutions Architect', team: 'Enterprise Blockchain — Non-Crypto', description: 'Design private and consortium blockchain systems for workflow integrity, asset traceability, records, provenance and auditability without cryptocurrency.' },
  { title: 'Distributed Ledger Application Engineer', team: 'Enterprise Blockchain — Non-Crypto', description: 'Build permissioned-ledger applications, smart workflow logic, APIs and identity controls that connect trusted transactions with existing enterprise systems.' },
  { title: 'Blockchain Governance & Controls Lead', team: 'Enterprise Blockchain — Non-Crypto', description: 'Define consortium rules, node governance, data-sharing controls, privacy requirements and operating standards for enterprise distributed-ledger networks.' },
  { title: 'Digital Identity & Verifiable Credentials Architect', team: 'Digital Trust', description: 'Design interoperable identity, credential and verification services using privacy-aware standards for employees, customers, organizations and connected systems.' },
  { title: 'Agentic AI Orchestration Engineer', team: 'Intelligence Engineering', description: 'Create governed multi-agent workflows with tool controls, human approvals, policy enforcement, traceability and reliable handoffs across business processes.' },
  { title: 'AI Model Risk & Assurance Manager', team: 'AI Governance & Assurance', description: 'Lead model inventories, risk classification, independent evaluations, control testing and lifecycle evidence for trustworthy enterprise AI.' },
  { title: 'MLOps & AI Observability Engineer', team: 'AI Platform Operations', description: 'Operate model and agent services with deployment controls, performance telemetry, drift detection, incident response and measurable service objectives.' },
  { title: 'Cryptographic Discovery & Migration Engineer', team: 'Quantum Security', description: 'Inventory cryptographic dependencies, assess exposure and engineer phased crypto-agility and post-quantum migration across applications, networks and vendors.' },
  { title: 'Zero Trust & Identity Security Architect', team: 'Cybersecurity Architecture', description: 'Design identity-centered access, continuous verification, segmentation and policy enforcement across cloud, data center, SaaS and remote environments.' },
  { title: 'Enterprise Integration & API Engineer', team: 'Data & Integration', description: 'Connect ERP, CRM, HRIS, security and operational platforms through secure APIs, event streams, data contracts and resilient integration patterns.' },
  { title: 'Cloud Platform & DevSecOps Engineer', team: 'Platform Engineering', description: 'Build secure delivery platforms, infrastructure automation, policy-as-code, software supply-chain controls and reliable cloud operating foundations.' },
  { title: 'Organizational Change & Workforce Adoption Lead', team: 'Transformation & Adoption', description: 'Prepare leaders and teams for new AI, data, security and blockchain workflows through role design, communications, training and adoption measurement.' },
];

const resumeHref = (title: string) => `mailto:chadwickallison@galaxityai.com?subject=${encodeURIComponent(`${title} - Resume Submission`)}&body=${encodeURIComponent('Please attach your resume and include a brief message about your relevant experience.')}`;

const categoryForTeam = (team: string) => {
  if (team.includes('Blockchain')) return 'Enterprise Blockchain';
  if (team.includes('Quantum')) return 'Quantum Security';
  if (team.includes('AI') || team.includes('Intelligence')) return 'AI & Intelligence';
  if (team.includes('Data') || team.includes('Integration') || team.includes('Digital Trust')) return 'Data & Digital Trust';
  if (team.includes('Governance') || team.includes('Risk')) return 'Governance & Assurance';
  if (team.includes('Cybersecurity')) return 'Cybersecurity';
  if (team.includes('Product') || team.includes('Platform')) return 'Product & Platform';
  if (team.includes('Customer')) return 'Customer Delivery';
  return 'Enterprise Strategy';
};

const CareersPage: React.FC = () => (
  <div className="w-full rounded-2xl border border-gray-700/50 bg-black/30 p-5 shadow-2xl backdrop-blur-sm animate-fade-in sm:p-8">
    <section className="mx-auto max-w-5xl text-center">
      <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-300">Careers at Enterprise Horizon</p>
      <h1 className="mt-4 text-4xl font-black text-white sm:text-5xl">Build the enterprise entry point for the intelligence era.</h1>
      <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-200">
        Enterprise Horizon brings strategy, assessment, architecture and measurable execution together. We are building a multidisciplinary team across enterprise transformation, governed AI, quantum readiness, data, cybersecurity and product engineering.
      </p>
      <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
        <a href="https://www.youniverse1.com/careers/index.html" className="rounded-lg border border-cyan-200/25 bg-[#071a2e] px-5 py-3 text-base font-bold text-white hover:border-cyan-200/50">Youniverse1 Careers</a>
        <a href="https://www.galaxityai.com/careers.html" className="rounded-lg border border-cyan-200/25 bg-[#071a2e] px-5 py-3 text-base font-bold text-white hover:border-cyan-200/50">Galaxity AI Careers</a>
      </div>
    </section>

    <section className="mx-auto mt-10 w-full" aria-labelledby="open-roles-title">
      <div className="mb-6">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">Open talent network</p>
        <h2 id="open-roles-title" className="mt-2 text-3xl font-black text-white">Enterprise Horizon roles</h2>
        <p className="mt-3 max-w-3xl text-base leading-7 text-gray-300 sm:text-lg">Hiring follows operating milestones and project requirements. Positions may begin through advisory, consulting or project-based work before moving into full-time roles.</p>
      </div>

      <div className="border-t border-slate-600/55 bg-[#070c11]">
        {roles.map((role, index) => (
          <article
            id={`position-${String(index + 1).padStart(2, '0')}`}
            key={role.title}
            className="grid min-h-[230px] grid-cols-[2.5rem_1fr] items-start gap-x-5 gap-y-5 border-b border-slate-600/55 px-1 py-8 sm:grid-cols-[3rem_1fr] sm:px-4 sm:py-10 xl:grid-cols-[3rem_minmax(17rem,1.35fr)_minmax(9rem,.75fr)_minmax(13rem,1fr)_minmax(18rem,1.15fr)] xl:gap-x-7"
          >
            <span className="pt-1 text-xs font-bold tracking-[0.18em] text-slate-500 sm:text-sm">{String(index + 1).padStart(2, '0')}</span>

            <div>
              <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-sky-400 sm:text-sm">{categoryForTeam(role.team)}</p>
              <h3 className="max-w-md font-[Georgia,serif] text-3xl font-normal leading-[1.08] tracking-[-0.025em] text-slate-50 sm:text-4xl">{role.title}</h3>
              <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
                <a href={resumeHref(role.title)} className="text-sm font-black tracking-[0.03em] text-slate-100 hover:text-sky-300 sm:text-base">Send Your Resume <span className="ml-3 text-sky-400">↗</span></a>
                <details className="group/details relative">
                  <summary className="cursor-pointer list-none border-b border-slate-400 pb-1 text-sm font-bold text-slate-400 transition-colors hover:text-white [&::-webkit-details-marker]:hidden">View role details</summary>
                  <div className="absolute left-0 z-20 mt-3 w-[min(22rem,75vw)] rounded-lg border border-sky-300/20 bg-[#061526] p-4 text-sm leading-6 text-slate-200 shadow-2xl">
                    <p className="font-bold text-white">{role.title}</p>
                    <p className="mt-2">{role.description}</p>
                    <p className="mt-3 text-slate-400">{role.team} · United States · Hybrid / Remote</p>
                  </div>
                </details>
              </div>
            </div>

            <p className="col-start-2 m-0 text-base leading-7 text-slate-400 xl:col-auto">{role.team}</p>
            <p className="col-start-2 m-0 text-base leading-7 text-slate-400 xl:col-auto">United States · Hybrid / Remote</p>
            <p className="col-start-2 m-0 max-w-xl text-base leading-8 text-slate-300 xl:col-auto xl:text-lg">{role.description}</p>
          </article>
        ))}
      </div>
    </section>
  </div>
);

export default CareersPage;
