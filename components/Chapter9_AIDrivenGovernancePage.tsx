import React from 'react';

const GovernanceFeature: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => (
    <li className="flex items-start">
        <svg className="w-6 h-6 mr-3 text-blue-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <div>
            <h3 className="text-lg font-bold text-white">{title}</h3>
            <p className="mt-1 text-gray-400">{children}</p>
        </div>
    </li>
);

const Chapter9_AIDrivenGovernancePage: React.FC = () => {
  return (
    <div className="w-full bg-black/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl p-6 sm:p-8 animate-fade-in">
        <div className="text-center mb-10">
            <h2 className="text-base font-semibold text-blue-400 tracking-wider uppercase">Chapter 9</h2>
            <h1 className="text-3xl font-black text-white mt-2">AI-Driven Governance</h1>
        </div>

        <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-300 mb-12 text-center">
                Galaxity enhances its Decentralized Autonomous Organization (DAO) with AI to create a more transparent, efficient, and intelligent governance model. This approach helps to overcome common challenges in decentralized decision-making.
            </p>

            <ul className="space-y-6">
                <GovernanceFeature title="Automated Proposal Analysis">
                    AI models analyze governance proposals for potential security risks, economic impact, and alignment with the platform's long-term vision, providing community members with concise summaries and risk scores.
                </GovernanceFeature>
                <GovernanceFeature title="Enhanced Voting Systems">
                    AI helps to mitigate voter apathy and potential collusion by implementing more sophisticated voting mechanisms, such as quadratic voting, and analyzing voting patterns for anomalies.
                </GovernanceFeature>
                <GovernanceFeature title="Conflict Resolution">
                    In cases of contentious proposals, AI can facilitate conflict resolution by identifying areas of common ground and modeling the potential outcomes of different compromise solutions.
                </GovernanceFeature>
            </ul>
        </div>
    </div>
  );
};

export default Chapter9_AIDrivenGovernancePage;
