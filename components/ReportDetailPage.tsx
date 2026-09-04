import React from 'react';

export interface ReportSection {
  title: string;
  overview: string;
  measures: string[];
  actions: string[];
}

export interface ReportDefinition {
  title: string;
  subtitle: string;
  filename: string;
  sections: [ReportSection, ReportSection];
}

export const reportDefinitions = {
  quarterly: {
    title: 'Quarterly SII Trends Report',
    subtitle: 'Track enterprise intelligence, security and operating maturity across each reporting period.',
    filename: 'enterprise-horizon-quarterly-sii-trends.txt',
    sections: [
      {
        title: 'Section 1 — Performance Trajectory',
        overview: 'This section turns the Sovereign Intelligence Index into a historical operating record. It compares the current quarter with prior periods, isolates the domains creating momentum and identifies areas where readiness has stalled or declined.',
        measures: [
          'Overall SII movement quarter-over-quarter and year-over-year.',
          'Domain-level trends across data, AI, security, workforce, governance and infrastructure.',
          'Rate of improvement compared with the targets established in the previous quarter.',
          'Material score changes linked to completed pilots, controls and modernization programs.',
          'Leading indicators that may affect the next two reporting periods.'
        ],
        actions: [
          'Validate every material score change with an accountable domain owner.',
          'Escalate declining domains into the enterprise risk and investment process.',
          'Preserve a quarterly evidence baseline so leadership can distinguish progress from reporting noise.'
        ]
      },
      {
        title: 'Section 2 — Investment Outcomes & Next-Quarter Priorities',
        overview: 'This section connects maturity gains to the initiatives that produced them. It gives leadership a practical view of where investment is working, where execution is lagging and which decisions should be made before the next assessment cycle.',
        measures: [
          'Score contribution produced by major pilots and transformation programs.',
          'Budget consumed versus measurable readiness improvement delivered.',
          'Milestones completed, delayed or at risk by executive sponsor.',
          'Dependencies between security, data, automation and workforce initiatives.',
          'Projected SII range for the next quarter under current and accelerated plans.'
        ],
        actions: [
          'Continue funding initiatives with verified impact and clear adoption evidence.',
          'Correct or stop programs that consume budget without improving the target domain.',
          'Approve a focused 90-day plan with named owners, milestones and expected score movement.'
        ]
      }
    ]
  },
  benchmark: {
    title: 'Industry Benchmark Report',
    subtitle: 'Compare enterprise readiness with sector peers, leading performers and strategic targets.',
    filename: 'enterprise-horizon-industry-benchmark.txt',
    sections: [
      {
        title: 'Section 1 — Competitive Position',
        overview: 'This section compares the organization’s SII and domain maturity against anonymized sector ranges. It shows where the enterprise leads, where it follows and which capability gaps could become competitive or operational liabilities.',
        measures: [
          'Overall SII percentile against sector median and top-quartile performers.',
          'Domain-by-domain variance from the industry average.',
          'Strengths that create measurable differentiation or resilience.',
          'Capabilities where the organization trails the top quartile.',
          'Benchmark confidence based on data coverage, peer relevance and assessment recency.'
        ],
        actions: [
          'Protect differentiating capabilities through continued funding and governance.',
          'Validate high-risk gaps with technical and operational evidence.',
          'Use peer ranges as decision context rather than as a substitute for enterprise strategy.'
        ]
      },
      {
        title: 'Section 2 — Benchmark-Driven Priorities',
        overview: 'This section translates comparison data into an investment agenda. Priorities are ranked by business exposure, attainable improvement and the value of reaching sector-standard or leading-performance thresholds.',
        measures: [
          'Distance from target maturity for each priority capability.',
          'Estimated effort, cost and time required to close each material gap.',
          'Business value and risk reduction expected at the target benchmark.',
          'Quick wins that can reach sector parity within one or two quarters.',
          'Longer-term capabilities required to establish a defensible leadership position.'
        ],
        actions: [
          'Set benchmark targets by domain with executive ownership and deadlines.',
          'Sequence investments so foundational data and security gaps are corrected first.',
          'Reassess quarterly to confirm the organization is closing gaps faster than the market moves.'
        ]
      }
    ]
  },
  pilot: {
    title: 'Pilot Success Metrics Report',
    subtitle: 'Measure execution, adoption, financial value and production readiness for every pilot.',
    filename: 'enterprise-horizon-pilot-success-metrics.txt',
    sections: [
      {
        title: 'Section 1 — Pilot Execution & Adoption',
        overview: 'This section establishes whether each pilot is being delivered as designed and used by its intended audience. It combines schedule, technical performance, quality and adoption evidence into a consistent operating view.',
        measures: [
          'Milestone completion, schedule variance and unresolved delivery dependencies.',
          'Performance against technical acceptance criteria and service targets.',
          'User adoption, frequency of use and completion of target workflows.',
          'Operational defects, exception rates and support demand.',
          'Stakeholder confidence and documented lessons from the pilot team.'
        ],
        actions: [
          'Correct acceptance-criteria gaps before expanding the pilot population.',
          'Assign owners and dates to every material technical or adoption blocker.',
          'Capture a repeatable implementation pattern for successful use cases.'
        ]
      },
      {
        title: 'Section 2 — Value Realization & Scale Decision',
        overview: 'This section determines whether a pilot should scale, iterate or stop. It compares verified benefits with total delivery and operating cost, then tests whether the supporting architecture, controls and workforce can sustain production use.',
        measures: [
          'Verified savings, revenue contribution, cycle-time reduction and quality improvement.',
          'Total pilot cost, projected production cost, payback period and net present value.',
          'Security, compliance, data and integration readiness for production.',
          'Capacity requirements and operating-model changes needed at scale.',
          'Expected enterprise value under conservative, target and accelerated adoption cases.'
        ],
        actions: [
          'Scale only pilots with verified value, accountable ownership and production controls.',
          'Place promising but incomplete pilots into a time-boxed correction cycle.',
          'Close weak pilots cleanly and transfer their lessons into the next investment decision.'
        ]
      }
    ]
  },
  risk: {
    title: 'Risk & Compliance Report',
    subtitle: 'Translate enterprise readiness into control coverage, exposure and audit-ready action.',
    filename: 'enterprise-horizon-risk-and-compliance.txt',
    sections: [
      {
        title: 'Section 1 — Exposure & Control Coverage',
        overview: 'This section consolidates governance, risk and compliance evidence across AI, data, cybersecurity and operations. It identifies material exposures and shows whether current controls are designed, implemented and producing reliable evidence.',
        measures: [
          'Inherent and residual risk by business domain and critical service.',
          'Control coverage mapped to applicable internal and external requirements.',
          'Control design gaps, operating failures and overdue remediation items.',
          'AI ethics, model risk, data governance and third-party risk exposure.',
          'Audit-evidence completeness, freshness and ownership.'
        ],
        actions: [
          'Escalate high-impact residual risks to the accountable executive committee.',
          'Correct missing or ineffective controls before adding new compliance tooling.',
          'Create a single evidence standard across security, AI, data and operations.'
        ]
      },
      {
        title: 'Section 2 — Remediation & Continuous Assurance',
        overview: 'This section converts control gaps into a prioritized remediation plan and identifies where continuous monitoring can replace slow, manual evidence collection. The objective is faster risk detection with clearer accountability.',
        measures: [
          'Remediation priority based on likelihood, impact and control dependency.',
          'Owner, deadline, cost and evidence requirement for each material action.',
          'Controls suitable for automated testing and continuous monitoring.',
          'Exceptions approaching tolerance limits or regulatory deadlines.',
          'Projected residual-risk reduction after the approved plan is completed.'
        ],
        actions: [
          'Fund the highest-risk remediation items before lower-value compliance enhancements.',
          'Automate evidence collection where source systems and ownership are reliable.',
          'Report exceptions and remediation progress through a recurring governance cadence.'
        ]
      }
    ]
  },
  cost: {
    title: 'Cost Optimization (FinOps) Report',
    subtitle: 'Expose technology cost drivers and convert savings opportunities into accountable execution.',
    filename: 'enterprise-horizon-cost-optimization.txt',
    sections: [
      {
        title: 'Section 1 — Spend Transparency & Efficiency',
        overview: 'This section establishes where technology money is going and whether consumption supports business outcomes. It combines allocation, utilization, contract and architecture data to identify structural waste and unmanaged demand.',
        measures: [
          'Spend by business unit, product, application, environment and service provider.',
          'Unit cost for critical workloads, transactions, users and data services.',
          'Idle, underutilized and overprovisioned resources across the estate.',
          'Cost anomalies, duplicate services and unfavorable contract commitments.',
          'Allocation coverage and the percentage of spend with accountable ownership.'
        ],
        actions: [
          'Assign ownership to unallocated spend and require business context for exceptions.',
          'Eliminate idle capacity and correct obvious sizing issues first.',
          'Establish unit-cost baselines for the services that drive the largest spend.'
        ]
      },
      {
        title: 'Section 2 — Savings Plan & Financial Governance',
        overview: 'This section converts identified opportunities into a sequenced savings plan. It distinguishes immediate reductions from architectural changes and protects service quality so optimization does not become indiscriminate cost cutting.',
        measures: [
          'Validated savings by action, owner, delivery date and confidence level.',
          'One-time implementation cost versus recurring financial benefit.',
          'Commitment, licensing and supplier-renegotiation opportunities.',
          'Architecture changes that lower long-term cost without weakening resilience.',
          'Monthly realization tracking against approved savings targets.'
        ],
        actions: [
          'Approve quick savings only after service and security impacts are reviewed.',
          'Separate booked savings from avoided cost and projected opportunity.',
          'Create a monthly FinOps review that holds technology and business owners jointly accountable.'
        ]
      }
    ]
  },
  automation: {
    title: 'Automation ROI Report',
    subtitle: 'Connect automation investment to verified financial, operational and workforce outcomes.',
    filename: 'enterprise-horizon-automation-roi.txt',
    sections: [
      {
        title: 'Section 1 — Value Realization',
        overview: 'This section measures what automation has actually changed. It compares the baseline process with current performance and separates verified results from estimates so leaders can see the true return on RPA, AIOps and intelligent workflows.',
        measures: [
          'Cycle-time, throughput and wait-time improvement by automated process.',
          'FTE capacity released and the business work to which that capacity was redirected.',
          'Error reduction, rework avoided and quality improvement.',
          'Implementation and operating cost compared with realized financial value.',
          'Payback period, annualized ROI and benefit confidence.'
        ],
        actions: [
          'Reconcile claimed benefits with finance and process-owner evidence.',
          'Correct automations that shift work downstream instead of removing it.',
          'Track released workforce capacity through to its new business outcome.'
        ]
      },
      {
        title: 'Section 2 — Scale, Governance & Workforce Impact',
        overview: 'This section evaluates whether successful automations can expand safely. It reviews technical resilience, control design, exception handling and workforce readiness before additional processes or business units are added.',
        measures: [
          'Production stability, exception volume and manual-intervention requirements.',
          'Control coverage, auditability and segregation of duties.',
          'Reusable components and integration patterns available for expansion.',
          'Skills, role and operating-model changes created by automation.',
          'Enterprise value available from the next wave of prioritized processes.'
        ],
        actions: [
          'Scale reusable patterns before building isolated automations.',
          'Require monitoring, ownership and rollback plans for production workflows.',
          'Pair each automation roadmap with a workforce transition and training plan.'
        ]
      }
    ]
  },
  security: {
    title: 'Security Posture Report',
    subtitle: 'Evaluate present-day resilience and readiness for the quantum-era threat environment.',
    filename: 'enterprise-horizon-security-posture.txt',
    sections: [
      {
        title: 'Section 1 — Current Resilience & Attack Surface',
        overview: 'This section provides a CISO-level view of the organization’s ability to prevent, detect, contain and recover from modern attacks. It combines control maturity with asset exposure and operational evidence.',
        measures: [
          'Zero Trust maturity across identity, devices, networks, applications and data.',
          'Critical-asset coverage, attack-surface exposure and unresolved vulnerabilities.',
          'Detection coverage, response time, containment performance and recovery readiness.',
          'Third-party, supply-chain and privileged-access risk.',
          'Security-control performance against the most important business services.'
        ],
        actions: [
          'Prioritize exposures connected to critical operations and sensitive data.',
          'Close identity and privileged-access gaps before adding perimeter complexity.',
          'Exercise incident response and recovery against realistic enterprise scenarios.'
        ]
      },
      {
        title: 'Section 2 — Quantum-Safe Modernization',
        overview: 'This section assesses exposure to cryptographic disruption and establishes a practical migration path. It addresses harvest-now-decrypt-later risk, cryptographic inventory, dependency mapping and the transition to approved post-quantum controls.',
        measures: [
          'Cryptographic assets, protocols, certificates and data-retention periods.',
          'Systems exposed to long-lived confidentiality and Q-Day risk.',
          'Readiness for crypto-agility, PQC migration and appropriate QKD use cases.',
          'Vendor and platform dependencies that could delay transition.',
          'Migration waves based on criticality, exposure and technical feasibility.'
        ],
        actions: [
          'Complete a verified cryptographic inventory and dependency map.',
          'Move the highest-value, longest-lived data into the first migration wave.',
          'Test interoperability, performance and rollback before broad production deployment.'
        ]
      }
    ]
  },
  sentiment: {
    title: 'Employee Sentiment & Culture Report',
    subtitle: 'Measure workforce readiness, trust, capability and adoption across transformation programs.',
    filename: 'enterprise-horizon-employee-sentiment-and-culture.txt',
    sections: [
      {
        title: 'Section 1 — Workforce Readiness & Sentiment',
        overview: 'This section explains how employees experience the transformation agenda. It combines sentiment, skills, trust and adoption indicators to identify where the workforce is accelerating change and where uncertainty is creating friction.',
        measures: [
          'Sentiment trend by business unit, role, location and transformation stage.',
          'Confidence in leadership communication and understanding of strategic purpose.',
          'Skills readiness for AI, automation, data and security responsibilities.',
          'Adoption barriers, recurring concerns and sources of change fatigue.',
          'Manager readiness to reinforce new behaviors and operating practices.'
        ],
        actions: [
          'Address the largest trust and clarity gaps with direct leadership communication.',
          'Target training to role-specific capability gaps rather than broad generic programs.',
          'Give managers practical tools to explain, reinforce and measure the change.'
        ]
      },
      {
        title: 'Section 2 — Culture Activation & Adoption Plan',
        overview: 'This section turns workforce evidence into a focused adoption plan. It connects communication, training, leadership behavior and employee feedback to the milestones that determine whether new technology creates lasting operating value.',
        measures: [
          'Adoption targets and behavior changes required for each major initiative.',
          'Training completion compared with demonstrated proficiency and actual use.',
          'Employee feedback response time and closure of recurring concerns.',
          'Change-champion coverage across affected teams and locations.',
          'Retention, mobility and workload indicators in roles experiencing the greatest change.'
        ],
        actions: [
          'Create an adoption scorecard tied to program outcomes, not attendance alone.',
          'Establish two-way feedback loops with visible ownership and response deadlines.',
          'Recognize teams that demonstrate both measurable adoption and responsible execution.'
        ]
      }
    ]
  }
} satisfies Record<string, ReportDefinition>;

export type StaticReportKey = keyof typeof reportDefinitions;

interface ExpansionGroup {
  title: string;
  items: string[];
}

const buildExpandedGroups = (reportTitle: string, section: ReportSection, sectionIndex: number): ExpansionGroup[] => {
  const sectionLabel = sectionIndex === 0 ? 'current-state and performance' : 'forward plan and scale';
  const primaryMeasure = section.measures[0];
  const primaryAction = section.actions[0];

  return [
    {
      title: 'Data depth and evidence model',
      items: [
        `Create a governed source registry for the ${reportTitle}, mapping every measure to its system of record, data owner, refresh cadence and retention requirement.`,
        `Preserve a verified baseline plus at least four comparison periods so ${sectionLabel} conclusions are based on trend evidence rather than a single snapshot.`,
        `Segment results by business unit, geography, platform, criticality and risk tier to expose averages that may conceal material outliers.`,
        `Assign a confidence grade to each conclusion based on completeness, freshness, reconciliation status and independent validation of the underlying data.`
      ]
    },
    {
      title: 'KPI interpretation and target model',
      items: [
        `For every KPI, display the baseline, current result, approved target, tolerance range, trend direction and accountable owner.`,
        `Separate leading indicators that predict change from lagging indicators that confirm an outcome after it has occurred.`,
        `Connect ${primaryMeasure.toLowerCase()} to financial, operational, security and workforce consequences where evidence supports the relationship.`,
        `Document formulas, exclusions and material assumptions so executives, operators and auditors interpret the measurement consistently.`
      ]
    },
    {
      title: 'Risk, dependency and scenario analysis',
      items: [
        `Maintain a dependency map covering technology, data, suppliers, workforce, policy and funding conditions that could alter the reported outcome.`,
        `Model conservative, expected and accelerated scenarios with explicit triggers that indicate when leadership should change course.`,
        `Identify concentration risk, single points of failure and cross-domain dependencies before an initiative is approved for wider use.`,
        `Pair each material risk with an owner, response, decision deadline, residual exposure and evidence that confirms whether the response worked.`
      ]
    },
    {
      title: 'Enterprise scale path',
      items: [
        `Phase 1 — Baseline: validate definitions, evidence and ownership within one representative business area before broader deployment.`,
        `Phase 2 — Controlled expansion: prove repeatability across two additional operating environments with different risk and integration profiles.`,
        `Phase 3 — Enterprise rollout: standardize controls, integrations, training, service levels and reporting while preserving local accountability.`,
        `Phase 4 — Continuous optimization: automate reliable measurements, compare realized value with the business case and retire controls or processes that no longer add value.`
      ]
    },
    {
      title: 'Governance, accountability and assurance',
      items: [
        `Name an executive sponsor, operating owner, data steward, control owner and financial validator for the ${reportTitle}.`,
        `Review performance monthly at the operating level and quarterly at the executive level, with exceptions escalated against defined thresholds.`,
        `Apply change control to definitions, targets, source data and calculation logic so historical comparisons remain trustworthy.`,
        `Retain an approval and evidence trail that records who reviewed the report, what decisions were made and when follow-up actions were verified.`
      ]
    },
    {
      title: '30–60–90 day execution plan',
      items: [
        `Days 0–30: validate the baseline, close critical data gaps, confirm owners and approve target definitions for this section.`,
        `Days 31–60: execute the highest-priority actions in a controlled scope and measure operational impact against the approved baseline.`,
        `Days 61–90: ${primaryAction} Confirm evidence, resolve exceptions and present the scale decision to the accountable leadership group.`,
        `Quarterly: refresh the assessment, compare realized outcomes with projections and re-rank the roadmap as enterprise conditions change.`
      ]
    }
  ];
};

export const ExpandedReportGroups: React.FC<{ reportTitle: string; section: ReportSection; sectionIndex: number }> = ({ reportTitle, section, sectionIndex }) => (
  <div className="mt-7 space-y-5">
    {buildExpandedGroups(reportTitle, section, sectionIndex).map(group => (
      <div key={group.title} className="rounded-lg border border-white/10 bg-black/20 p-4 sm:p-5">
        <h3 className="text-lg font-black text-cyan-100 sm:text-xl">{group.title}</h3>
        <ul className="mt-3 space-y-3 text-base leading-7 text-gray-200 sm:text-lg">
          {group.items.map(item => <li key={item} className="flex gap-3"><span className="text-cyan-300">•</span><span>{item}</span></li>)}
        </ul>
      </div>
    ))}
  </div>
);

export const downloadReport = (report: ReportDefinition) => {
  const lines = [
    report.title,
    report.subtitle,
    `Generated ${new Date().toLocaleDateString()}`,
    '',
    ...report.sections.flatMap((section, sectionIndex) => [
      section.title,
      section.overview,
      '',
      'Measurements and findings',
      ...section.measures.map(item => `• ${item}`),
      '',
      'Recommended actions',
      ...section.actions.map(item => `• ${item}`),
      '',
      ...buildExpandedGroups(report.title, section, sectionIndex).flatMap(group => [
        group.title,
        ...group.items.map(item => `• ${item}`),
        ''
      ]),
    ]),
    'Enterprise Horizon · Galaxity AI'
  ];

  const blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = report.filename;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
};

const ReportDetailPage: React.FC<{ reportKey: StaticReportKey }> = ({ reportKey }) => {
  const report = reportDefinitions[reportKey];

  return (
    <div className="w-full rounded-2xl border border-gray-700/50 bg-black/30 p-5 shadow-2xl backdrop-blur-sm animate-fade-in sm:p-8">
      <div className="mx-auto max-w-5xl text-center">
        <h1 className="text-3xl font-black text-white sm:text-4xl">{report.title}</h1>
        <p className="mx-auto mt-3 max-w-3xl text-base leading-7 text-gray-300 sm:text-lg">{report.subtitle}</p>
        <button
          type="button"
          onClick={() => downloadReport(report)}
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-cyan-200/25 bg-gradient-to-r from-[#0b5f9c] via-[#157db8] to-[#60c7e8] px-6 py-3 text-base font-bold text-white shadow-[0_8px_24px_rgba(21,125,184,0.28)] transition-transform hover:scale-[1.02] hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-cyan-300/30 sm:w-auto"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          Download Report
        </button>
      </div>

      <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-2">
        {report.sections.map((section, sectionIndex) => (
          <section key={section.title} className="rounded-xl border border-cyan-300/15 bg-[#061526]/85 p-5 sm:p-7">
            <h2 className="text-2xl font-black text-white">{section.title}</h2>
            <p className="mt-4 text-base leading-7 text-gray-200 sm:text-lg">{section.overview}</p>

            <h3 className="mt-6 text-base font-black uppercase tracking-[0.12em] text-cyan-200 sm:text-lg">Measurements and findings</h3>
            <ul className="mt-3 space-y-3 text-base leading-7 text-gray-200 sm:text-lg">
              {section.measures.map(item => <li key={item} className="flex gap-3"><span className="text-cyan-300">•</span><span>{item}</span></li>)}
            </ul>

            <h3 className="mt-6 text-base font-black uppercase tracking-[0.12em] text-cyan-200 sm:text-lg">Recommended actions</h3>
            <ul className="mt-3 space-y-3 text-base leading-7 text-gray-200 sm:text-lg">
              {section.actions.map(item => <li key={item} className="flex gap-3"><span className="text-cyan-300">•</span><span>{item}</span></li>)}
            </ul>

            <ExpandedReportGroups reportTitle={report.title} section={section} sectionIndex={sectionIndex} />
          </section>
        ))}
      </div>
    </div>
  );
};

export default ReportDetailPage;
