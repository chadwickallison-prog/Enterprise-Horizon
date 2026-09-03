import React from 'react';
import type { User } from '../types';

interface InfoCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  ctaText: string;
  onCtaClick: () => void;
  color: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description, icon, ctaText, onCtaClick, color }) => (
  <div className={`border-2 ${color} bg-gray-800/50 rounded-2xl p-6 flex flex-col items-center text-center`}>
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400 text-sm flex-grow mb-6">{description}</p>
    <button
      onClick={onCtaClick}
      className="w-full mt-auto bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 rounded-lg transition-colors"
    >
      {ctaText}
    </button>
  </div>
);

interface DashboardPageProps {
  user: User;
  onNavigate: (page: string) => void;
  onFetchLastReport: () => void;
}

const DashboardPage: React.FC<DashboardPageProps> = ({ user, onNavigate, onFetchLastReport }) => {
  return (
    <div className="w-full bg-black/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl p-6 sm:p-8 animate-fade-in">
        <div className="text-center">
            <h1 className="text-4xl font-black text-white mb-2">Welcome, {user.username}</h1>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Your central hub for assessing and accelerating your organization's digital transformation.
            </p>
             <div className="mt-4 inline-block bg-blue-900/50 text-blue-300 text-sm font-bold px-4 py-2 rounded-full border border-blue-500/50">
                Current Plan: {user.plan}
            </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <InfoCard
                title="Sovereign Intelligence Assessment"
                description="Begin your journey by completing our comprehensive assessment. Our AI will analyze your responses to generate your Sovereign Intelligence Index (SII) score and a detailed readiness report."
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>}
                ctaText="Start New Assessment"
                onCtaClick={() => onNavigate('assessment')}
                color="border-blue-500/50"
            />
            <InfoCard
                title="View Last Report"
                description="Access your most recent Sovereign Intelligence Readiness Report. Review your SII score, domain maturity, key strengths, and strategic recommendations."
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>}
                ctaText="View My Report"
                onCtaClick={onFetchLastReport}
                color="border-green-500/50"
            />
             <InfoCard
                title="Explore Capabilities"
                description="Dive into our solution blueprints, browse the innovation pilot library, and discover integration possibilities to build your strategic roadmap for the future."
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>}
                ctaText="Browse Library"
                onCtaClick={() => onNavigate('solutions')}
                color="border-cyan-300/50"
            />
        </div>
    </div>
  );
};

export default DashboardPage;
