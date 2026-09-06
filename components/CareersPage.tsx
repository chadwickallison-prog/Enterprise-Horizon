import React, { useState } from 'react';
import { createPortal } from 'react-dom';

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
  { title: 'Chief Enterprise Transformation Officer', team: 'Executive Leadership', description: 'Set the enterprise transformation agenda and align operating-model change, technology investment, governance and measurable value delivery across the organization.' },
  { title: 'Chief AI Governance Officer', team: 'Executive Leadership', description: 'Own enterprise accountability for AI policy, model risk, agent governance, assurance, human oversight and responsible adoption across every business function.' },
  { title: 'Chief Digital Trust & Blockchain Officer', team: 'Executive Leadership', description: 'Lead enterprise digital-trust strategy across permissioned blockchain, verifiable credentials, data provenance, consortium governance and non-crypto distributed systems.' },
  { title: 'Chief Quantum Security Officer', team: 'Executive Leadership', description: 'Direct cryptographic modernization, post-quantum migration, crypto-agility, QKD readiness and executive oversight of quantum-era security risk.' },
  { title: 'Enterprise Systems Architecture Director', team: 'Enterprise Architecture', description: 'Govern target-state architecture, technical standards, integration patterns and modernization sequencing across applications, data, infrastructure, security and AI.' },
  { title: 'AI Safety & Evaluation Engineer', team: 'AI Governance & Assurance', description: 'Design evaluations, adversarial tests, safety controls and release evidence for enterprise models, agents and decision systems before and after deployment.' },
  { title: 'Blockchain Platform Reliability Engineer', team: 'Enterprise Blockchain — Non-Crypto', description: 'Operate permissioned-ledger networks with resilient nodes, private data controls, observability, performance engineering and disciplined incident response.' },
  { title: 'Data Provenance & Lineage Engineer', team: 'Data & Integration', description: 'Implement traceable data lineage, ownership, quality evidence and tamper-evident provenance across analytics, AI, regulatory and operational workflows.' },
  { title: 'Cyber Threat Intelligence & Response Engineer', team: 'Cybersecurity Operations', description: 'Convert threat intelligence into detection logic, investigation playbooks, response automation and executive-ready reporting across enterprise environments.' },
  { title: 'Enterprise Assessment & Value Analyst', team: 'Strategy & Delivery', description: 'Analyze assessment evidence, operating maturity, investment options and expected returns to produce prioritized, measurable enterprise transformation roadmaps.' },
];

const resumeHref = (title: string) => `mailto:chadwickallison@galaxityai.com?subject=${encodeURIComponent(`${title} - Resume Submission`)}&body=${encodeURIComponent('Please attach your resume and include a brief message about your relevant experience.')}`;

type Role = (typeof roles)[number];

const topicDefinitions = [
  { key: 'chief-officers', label: 'Chief Officers' },
  { key: 'directors', label: 'Directors & Program Leadership' },
  { key: 'engineering', label: 'Engineering & Systems Architecture' },
  { key: 'ai-governance', label: 'AI, Decision Systems & Governance' },
  { key: 'blockchain-trust', label: 'Enterprise Blockchain & Digital Trust' },
  { key: 'quantum-cyber', label: 'Quantum Security & Cybersecurity' },
  { key: 'data-platform', label: 'Data, Integration & Platform Operations' },
  { key: 'transformation', label: 'Transformation, Delivery & Adoption' },
] as const;

type TopicKey = (typeof topicDefinitions)[number]['key'];

const topicKeyForRole = (role: Role): TopicKey => {
  if (role.title.startsWith('Chief ')) return 'chief-officers';
  if (role.title.includes('Director')) return 'directors';
  if (role.team.includes('Blockchain') || role.team === 'Digital Trust') return 'blockchain-trust';
  if (role.team.includes('Quantum') || role.team.includes('Cybersecurity')) return 'quantum-cyber';
  if (role.team.includes('AI') || role.team.includes('Intelligence') || role.team.includes('Governance')) return 'ai-governance';
  if (role.team.includes('Data') || role.team.includes('Integration') || role.team.includes('Platform')) return 'data-platform';
  if (role.title.includes('Architect') || role.title.includes('Engineer') || role.team.includes('Product Engineering')) return 'engineering';
  return 'transformation';
};

const topicProfiles: Record<TopicKey, { responsibilities: string[]; qualifications: string[]; outcomes: string[] }> = {
  'chief-officers': {
    responsibilities: ['Set enterprise policy, investment priorities and decision rights for the assigned discipline.', 'Translate board and executive objectives into a governed multi-year operating roadmap.', 'Establish accountability across architecture, risk, delivery partners and measurable business outcomes.', 'Represent the discipline in executive reviews, strategic partnerships and major customer engagements.'],
    qualifications: ['Executive leadership experience across complex enterprise technology or regulated transformation programs.', 'Demonstrated command of governance, investment planning, operating models and organizational accountability.', 'Ability to communicate technical risk and opportunity clearly to boards, customers and engineering teams.', 'Record of building multidisciplinary teams and delivering material outcomes across organizational boundaries.'],
    outcomes: ['A board-approved strategy with funded milestones, owners and risk controls.', 'Consistent technical and governance standards across enterprise programs.', 'Measurable improvement in delivery confidence, resilience and investment performance.'],
  },
  directors: {
    responsibilities: ['Own the program roadmap, delivery model, decision cadence and cross-functional dependencies.', 'Convert assessment evidence into sequenced workstreams with budgets, owners and measurable acceptance criteria.', 'Coordinate internal teams, customers, vendors and executive sponsors through delivery and operational transition.', 'Maintain transparent reporting on scope, value, risk, quality and readiness for scale.'],
    qualifications: ['Leadership experience delivering enterprise architecture, transformation, customer or technology programs.', 'Strong command of portfolio planning, stakeholder alignment, financial analysis and delivery governance.', 'Ability to manage ambiguity while maintaining clear standards, evidence and accountability.', 'Experience moving initiatives from assessment through pilot, production and measured adoption.'],
    outcomes: ['Prioritized roadmaps tied to enterprise value and operating risk.', 'Predictable delivery with controlled scope, documented decisions and visible dependencies.', 'Successful movement from pilot evidence to production-scale execution.'],
  },
  engineering: {
    responsibilities: ['Design secure, interoperable systems that connect enterprise applications, infrastructure, data and controls.', 'Produce reference architectures, engineering standards, interface contracts and implementation guidance.', 'Evaluate technical tradeoffs for resilience, performance, maintainability, security and lifecycle cost.', 'Partner with delivery teams to validate designs through testing, deployment evidence and operational feedback.'],
    qualifications: ['Deep engineering experience in enterprise platforms, distributed systems, cloud, applications or systems architecture.', 'Ability to translate business requirements into precise technical designs and acceptance criteria.', 'Working knowledge of security architecture, APIs, data flows, automation and production operations.', 'Strong written documentation, design-review and cross-disciplinary collaboration skills.'],
    outcomes: ['Approved target-state designs and reusable technical standards.', 'Reduced integration risk, architectural drift and operational complexity.', 'Systems that meet agreed reliability, security and performance objectives.'],
  },
  'ai-governance': {
    responsibilities: ['Design and operate governed AI, model and agent lifecycles from intake through retirement.', 'Establish evaluation, human-approval, monitoring, traceability and incident-management controls.', 'Measure model quality, drift, safety, explainability and business performance against approved thresholds.', 'Translate policy into enforceable engineering controls, evidence and executive reporting.'],
    qualifications: ['Experience with machine learning, agentic systems, model evaluation, MLOps or AI risk management.', 'Understanding of model inventories, testing, monitoring, documentation and human oversight.', 'Ability to connect technical evidence with legal, security, operational and business requirements.', 'Strong judgment regarding automation boundaries, escalation paths and responsible deployment.'],
    outcomes: ['Traceable AI systems with clear owners, approved use cases and measurable controls.', 'Faster releases supported by repeatable evaluation and assurance evidence.', 'Reduced model, operational and reputational risk across the AI lifecycle.'],
  },
  'blockchain-trust': {
    responsibilities: ['Design non-crypto distributed-ledger solutions for trusted records, provenance, workflow integrity and multi-party coordination.', 'Define permissioning, identity, privacy, endorsement, consensus and node-governance requirements.', 'Integrate ledger services with enterprise applications, data platforms, APIs and audit processes.', 'Validate security, resilience, performance, interoperability and lifecycle operating costs before scale.'],
    qualifications: ['Experience with permissioned blockchain, distributed ledgers, smart workflow logic or digital identity.', 'Understanding of consortium governance, private data, cryptographic proofs and enterprise integration.', 'Ability to distinguish justified ledger use cases from conventional database or messaging solutions.', 'Experience designing controls for regulated, privacy-sensitive and multi-organization environments.'],
    outcomes: ['Production-ready ledger services without speculative token or cryptocurrency dependencies.', 'Trusted, auditable workflows with explicit governance and data ownership.', 'Reliable interoperability across organizations, applications and identity domains.'],
  },
  'quantum-cyber': {
    responsibilities: ['Assess cryptographic, identity, network and application exposure across the enterprise estate.', 'Design risk-based modernization across crypto-agility, post-quantum cryptography, key management and zero trust.', 'Create migration waves, test plans, exception processes and evidence for regulated systems and vendors.', 'Integrate threat intelligence, detection, response and executive reporting into continuous security operations.'],
    qualifications: ['Experience in cryptography, security architecture, identity, network security, threat operations or quantum readiness.', 'Working knowledge of asset discovery, key management, PKI, secure protocols and technology migration.', 'Ability to prioritize security change using business criticality, data lifespan and implementation risk.', 'Strong documentation, control-testing and incident-coordination skills.'],
    outcomes: ['A verified inventory of cryptographic and identity dependencies.', 'Funded migration plans with clear priorities, exceptions and completion evidence.', 'Improved resilience against present-day and quantum-era security threats.'],
  },
  'data-platform': {
    responsibilities: ['Build reliable data, integration and platform services with explicit ownership and service objectives.', 'Implement lineage, quality, API, event, deployment and observability standards across shared services.', 'Automate secure delivery, policy enforcement, testing, recovery and operational evidence.', 'Partner with application and business teams to remove delivery bottlenecks without weakening controls.'],
    qualifications: ['Experience in data engineering, integration, APIs, cloud platforms, DevSecOps, MLOps or site reliability.', 'Strong understanding of automation, observability, change control, resilience and software supply chains.', 'Ability to design reusable platforms while supporting diverse enterprise workloads and compliance needs.', 'Practical incident-response, root-cause analysis and continuous-improvement experience.'],
    outcomes: ['Trusted shared services with measurable reliability, performance and recovery targets.', 'Faster delivery through reusable patterns and automated controls.', 'Improved data quality, lineage, integration stability and operational transparency.'],
  },
  transformation: {
    responsibilities: ['Translate enterprise goals and assessment findings into practical operating and adoption plans.', 'Define stakeholder, workforce, process, communication and value-measurement requirements.', 'Coordinate pilots, learning cycles and operational transition with accountable business owners.', 'Track adoption, realized value, control effectiveness and barriers requiring executive action.'],
    qualifications: ['Experience in enterprise transformation, consulting, customer success, change management or value realization.', 'Ability to connect technology change with people, process, governance and financial outcomes.', 'Strong facilitation, executive communication, analysis and program-structuring skills.', 'Record of turning ambiguous strategic goals into adopted and measurable operating change.'],
    outcomes: ['Clear adoption plans with accountable leaders and affected workforce groups.', 'Verified value realization against agreed business and operational measures.', 'Sustained operating change rather than isolated technology deployment.'],
  },
};

const subpositionsForRole = (role: Role) => {
  const topic = topicDefinitions.find(item => item.key === topicKeyForRole(role))?.label ?? 'Enterprise Delivery';
  if (role.title.startsWith('Chief ')) {
    const discipline = role.title.replace(/^Chief /, '').replace(/ Officer$/, '');
    return [
      { title: `Deputy ${discipline} Officer`, description: `Support executive governance, portfolio coordination and operating accountability across the ${discipline.toLowerCase()} mandate.` },
      { title: `${discipline} Executive Program Lead`, description: `Run the executive operating cadence, decision records, milestone reporting and cross-functional actions for the ${discipline.toLowerCase()} portfolio.` },
    ];
  }
  if (role.title.includes('Director')) {
    return [
      { title: `Associate ${role.title}`, description: `Lead defined workstreams, customer coordination and delivery evidence under the main role's program charter.` },
      { title: `${topic} Program Manager`, description: `Manage plans, dependencies, risks, reporting and operational transition across the role's active initiatives.` },
    ];
  }
  if (role.title.includes('Lead') || role.title.includes('Manager')) {
    return [
      { title: `Senior ${role.title}`, description: `Own complex assignments, mentor practitioners and strengthen standards within the role's discipline.` },
      { title: `${topic} Specialist`, description: `Execute assessments, documentation, control evidence and implementation support for the role's delivery portfolio.` },
    ];
  }
  return [
    { title: `Senior ${role.title}`, description: `Lead advanced design and delivery work, technical reviews and mentoring within the role's specialist domain.` },
    { title: `${role.title} — Implementation Specialist`, description: `Turn approved designs into tested configurations, documented controls and production-ready operating procedures.` },
  ];
};

const careerTopics = topicDefinitions
  .map(topic => ({ ...topic, roles: roles.filter(role => topicKeyForRole(role) === topic.key) }))
  .filter(topic => topic.roles.length > 0);

const orderedRoles = careerTopics.flatMap(topic => topic.roles);

const CareersPage: React.FC = () => {
  const [activeRole, setActiveRole] = useState<Role | null>(null);
  const activeTopic = activeRole ? topicDefinitions.find(topic => topic.key === topicKeyForRole(activeRole)) : null;
  const activeProfile = activeRole ? topicProfiles[topicKeyForRole(activeRole)] : null;

  return (
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
        <div className="mb-10">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">30-position talent network</p>
          <h2 id="open-roles-title" className="mt-2 text-3xl font-black text-white">Enterprise Horizon career topics</h2>
          <p className="mt-3 max-w-3xl text-base leading-7 text-gray-300 sm:text-lg">Hiring follows operating milestones and project requirements. Positions may begin through advisory, consulting or project-based work before moving into full-time roles.</p>
        </div>

        <div className="space-y-20 bg-[#070c11]">
          {careerTopics.map((topic, topicIndex) => (
            <section key={topic.key} aria-labelledby={`topic-${topic.key}`}>
              <header className="grid min-h-[140px] grid-cols-[3rem_1fr] items-end gap-5 border-t-2 border-sky-400/70 border-b border-slate-600/55 bg-gradient-to-r from-sky-500/10 to-transparent px-1 py-7 sm:grid-cols-[4rem_1fr_auto] sm:px-4">
                <span className="pb-1 text-xs font-bold tracking-[0.18em] text-slate-500">{String(topicIndex + 1).padStart(2, '0')}</span>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-sky-400">Career topic</p>
                  <h3 id={`topic-${topic.key}`} className="mt-2 font-[Georgia,serif] text-3xl font-normal tracking-[-0.03em] text-slate-50 sm:text-5xl">{topic.label}</h3>
                </div>
                <p className="col-start-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-500 sm:col-auto sm:pb-2">{topic.roles.length} {topic.roles.length === 1 ? 'position' : 'positions'}</p>
              </header>

              {topic.roles.map(role => {
                const position = orderedRoles.indexOf(role) + 1;
                return (
                  <article
                    id={`position-${String(position).padStart(2, '0')}`}
                    key={role.title}
                    className="grid min-h-[230px] grid-cols-[2.5rem_1fr] items-start gap-x-5 gap-y-5 border-b border-slate-600/55 px-1 py-8 sm:grid-cols-[3rem_1fr] sm:px-4 sm:py-10 xl:grid-cols-[3rem_minmax(17rem,1.35fr)_minmax(9rem,.75fr)_minmax(13rem,1fr)_minmax(18rem,1.15fr)] xl:gap-x-7"
                  >
                    <span className="pt-1 text-xs font-bold tracking-[0.18em] text-slate-500 sm:text-sm">{String(position).padStart(2, '0')}</span>
                    <div>
                      <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-sky-400 sm:text-sm">{topic.label}</p>
                      <h4 className="max-w-md font-[Georgia,serif] text-3xl font-normal leading-[1.08] tracking-[-0.025em] text-slate-50 sm:text-4xl">{role.title}</h4>
                      <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
                        <a href={resumeHref(role.title)} className="text-sm font-black tracking-[0.03em] text-slate-100 hover:text-sky-300 sm:text-base">Send Your Resume <span className="ml-3 text-sky-400">↗</span></a>
                        <button type="button" onClick={() => setActiveRole(role)} className="border-b border-slate-400 pb-1 text-sm font-bold text-slate-400 transition-colors hover:text-white">View role details</button>
                      </div>
                    </div>
                    <p className="col-start-2 m-0 text-sm leading-6 text-slate-400 xl:col-auto">{role.team}</p>
                    <p className="col-start-2 m-0 text-sm leading-6 text-slate-400 xl:col-auto">United States · Hybrid / Remote</p>
                    <p className="col-start-2 m-0 max-w-xl text-sm leading-7 text-slate-300 xl:col-auto">{role.description}</p>
                  </article>
                );
              })}
            </section>
          ))}
        </div>
      </section>

      {activeRole && activeProfile && createPortal((
        <div className="fixed inset-0 z-[100] overflow-y-auto bg-black/90 p-3 sm:p-8" role="dialog" aria-modal="true" aria-labelledby="role-detail-title" onClick={() => setActiveRole(null)}>
          <div className="mx-auto max-w-6xl rounded-2xl border border-sky-300/25 bg-[#06111d] shadow-[0_30px_100px_rgba(0,0,0,.7)]" onClick={event => event.stopPropagation()}>
            <header className="flex items-start justify-between gap-6 border-b border-slate-600/50 p-6 sm:p-9">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-sky-400">{activeTopic?.label}</p>
                <h2 id="role-detail-title" className="mt-3 max-w-4xl font-[Georgia,serif] text-3xl font-normal leading-tight text-white sm:text-5xl">{activeRole.title}</h2>
                <p className="mt-4 text-sm text-slate-400">{activeRole.team} · United States · Hybrid / Remote</p>
              </div>
              <button type="button" onClick={() => setActiveRole(null)} className="shrink-0 rounded-full border border-slate-500/60 px-4 py-2 text-sm font-bold text-white hover:border-sky-300" aria-label="Close role details">Close</button>
            </header>

            <div className="p-6 sm:p-9">
              <section className="max-w-5xl border-l-2 border-sky-400 pl-5">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-sky-400">Role mandate</p>
                <p className="mt-3 text-sm leading-7 text-slate-200">{activeRole.description} This position converts that mandate into documented decisions, governed delivery, measurable operating outcomes and durable enterprise capability.</p>
              </section>

              <div className="mt-9 grid gap-8 lg:grid-cols-3">
                <section>
                  <h3 className="text-sm font-black uppercase tracking-[0.16em] text-white">Core responsibilities</h3>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                    <li>• Own the detailed strategy, standards and delivery evidence for {activeRole.title.toLowerCase()}.</li>
                    {activeProfile.responsibilities.map(item => <li key={item}>• {item}</li>)}
                  </ul>
                </section>
                <section>
                  <h3 className="text-sm font-black uppercase tracking-[0.16em] text-white">Experience and qualifications</h3>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                    <li>• Relevant leadership or hands-on delivery experience aligned with {activeRole.team.toLowerCase()}.</li>
                    {activeProfile.qualifications.map(item => <li key={item}>• {item}</li>)}
                  </ul>
                </section>
                <section>
                  <h3 className="text-sm font-black uppercase tracking-[0.16em] text-white">Expected outcomes</h3>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                    <li>• A 90-day baseline, prioritized roadmap and agreed measures for the role's scope.</li>
                    {activeProfile.outcomes.map(item => <li key={item}>• {item}</li>)}
                  </ul>
                </section>
              </div>

              <section className="mt-10 border-t border-slate-600/50 pt-8">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-sky-400">Two supporting sub-positions</p>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  {subpositionsForRole(activeRole).map((subposition, index) => (
                    <article key={subposition.title} className="rounded-xl border border-sky-300/15 bg-black/25 p-5">
                      <p className="text-xs font-bold tracking-[0.16em] text-slate-500">{String(index + 1).padStart(2, '0')}</p>
                      <h3 className="mt-3 font-[Georgia,serif] text-2xl font-normal text-white">{subposition.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-300">{subposition.description}</p>
                      <a href={resumeHref(subposition.title)} className="mt-5 inline-flex text-sm font-bold text-sky-300 hover:text-white">Send Your Resume ↗</a>
                    </article>
                  ))}
                </div>
              </section>

              <div className="mt-10 flex flex-wrap gap-3 border-t border-slate-600/50 pt-7">
                <a href={resumeHref(activeRole.title)} className="rounded-lg bg-gradient-to-r from-[#0b5f9c] via-[#157db8] to-[#60c7e8] px-6 py-3 text-sm font-black text-white hover:brightness-110">Send Your Resume</a>
                <button type="button" onClick={() => setActiveRole(null)} className="rounded-lg border border-slate-500/60 px-6 py-3 text-sm font-bold text-slate-200 hover:border-sky-300">Return to positions</button>
              </div>
            </div>
          </div>
        </div>
      ), document.body)}
    </div>
  );
};

export default CareersPage;
