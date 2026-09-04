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
];

const resumeHref = (title: string) => `mailto:chadwickallison@galaxityai.com?subject=${encodeURIComponent(`${title} - Resume Submission`)}&body=${encodeURIComponent('Please attach your resume and include a brief message about your relevant experience.')}`;

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

    <section className="mx-auto mt-10 max-w-6xl" aria-labelledby="open-roles-title">
      <div className="mb-6">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">Open talent network</p>
        <h2 id="open-roles-title" className="mt-2 text-3xl font-black text-white">Enterprise Horizon roles</h2>
        <p className="mt-3 max-w-3xl text-base leading-7 text-gray-300 sm:text-lg">Hiring follows operating milestones and project requirements. Positions may begin through advisory, consulting or project-based work before moving into full-time roles.</p>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {roles.map(role => (
          <article key={role.title} className="flex h-full flex-col rounded-xl border border-cyan-300/15 bg-[#061526]/85 p-5 sm:p-6">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-cyan-300">{role.team}</p>
            <h3 className="mt-2 text-2xl font-black text-white">{role.title}</h3>
            <p className="mt-3 flex-grow text-base leading-7 text-gray-200 sm:text-lg">{role.description}</p>
            <a href={resumeHref(role.title)} className="mt-5 inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-[#0b5f9c] via-[#157db8] to-[#60c7e8] px-5 py-3 text-base font-bold text-white hover:brightness-110 sm:w-fit">Send Your Resume</a>
          </article>
        ))}
      </div>
    </section>
  </div>
);

export default CareersPage;
