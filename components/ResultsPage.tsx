
import React, { useMemo } from 'react';
import type { AssessmentReport } from '../types';
import ResultsScoreGauge from './ResultsScoreGauge';
import ResultsDomainScoreChart from './ResultsDomainScoreChart';
import ResultsRecommendationCard from './ResultsRecommendationCard';

interface ResultsPageProps {
  results: AssessmentReport | null;
  onReset: () => void;
}

const ResultsPage: React.FC<ResultsPageProps> = ({ results, onReset }) => {
    if (!results) {
        return (
            <div className="w-full bg-black/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl p-6 sm:p-8 animate-fade-in text-center">
                <h2 className="text-2xl font-bold text-white mb-4">No Results Available</h2>
                <p className="text-gray-400 mb-6">There are no assessment results to display. Please take the assessment to generate your report.</p>
                <button
                    onClick={onReset}
                    className="px-8 py-3 bg-gradient-to-r from-[#4080FF] to-[#002060] text-white font-bold rounded-lg shadow-lg hover:opacity-90 transition-opacity"
                    >
                    Take Assessment
                </button>
            </div>
        )
    }

    const { siiScore, executiveSummary, keyStrengths, recommendations, domainAnalyses } = results;

    const domainScores = useMemo(() => domainAnalyses.map(da => ({
        domain: da.domain.replace(/ & /g, ' & ').split(' ')[0], // Shorten name for chart
        score: da.score
    })), [domainAnalyses]);

    const recommendationItems = recommendations.map(r => (
        <span key={r.title}>
            <strong className="text-white">{r.title}:</strong> {r.content}
        </span>
    ));

  return (
    <div className="w-full bg-black/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl p-6 sm:p-8 animate-fade-in">
        <h1 className="text-3xl font-black text-white text-center mb-8">Sovereign Intelligence Readiness Report</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="lg:col-span-1 bg-gray-800/50 border border-gray-700/30 rounded-lg p-6 flex flex-col items-center justify-center">
                <h2 className="text-xl font-bold text-gray-300 mb-4">Sovereign Intelligence Index (SII)</h2>
                <ResultsScoreGauge score={siiScore} />
            </div>
            <div className="lg:col-span-2 bg-gray-800/50 border border-gray-700/30 rounded-lg p-6">
                <h2 className="text-xl font-bold text-white mb-3">Executive Summary</h2>
                <p className="text-gray-300 text-lg">{executiveSummary}</p>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-8">
            <div className="lg:col-span-2">
                <ResultsRecommendationCard
                    title="Key Strengths"
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44-1.22a.75.75 0 00-1.06 0L10 5.19l-2.647-2.647a.75.75 0 00-1.06 1.06L8.94 6.25 6.293 8.897a.75.75 0 101.06 1.06L10 7.31l2.647 2.647a.75.75 0 001.06-1.06L11.06 6.25l2.647-2.647a.75.75 0 000-1.06z" clipRule="evenodd" /></svg>}
                    items={keyStrengths}
                    type="strength"
                />
            </div>
             <div className="lg:col-span-3 bg-gray-800/50 border border-gray-700/30 rounded-lg p-6 flex flex-col items-center justify-center">
                <h2 className="text-xl font-bold text-white mb-4">Domain Maturity Overview</h2>
                {domainScores.length > 2 && <ResultsDomainScoreChart scores={domainScores} />}
            </div>
        </div>

        <div className="mb-8">
            <ResultsRecommendationCard
                title="Strategic Recommendations"
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor"><path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" /></svg>}
                items={recommendationItems}
                type="recommendation"
            />
        </div>

        <div className="mt-12 text-center">
            <button
            onClick={onReset}
            className="px-8 py-3 bg-gradient-to-r from-[#4080FF] to-[#002060] text-white font-bold rounded-lg shadow-lg shadow-[#4080FF]/20 transform hover:scale-105 transition-transform duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-[#4080FF]/50"
            >
            Take Assessment Again
            </button>
        </div>
    </div>
  );
};

export default ResultsPage;