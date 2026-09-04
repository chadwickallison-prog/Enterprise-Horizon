
import React, { useMemo } from 'react';
import type { AssessmentReport } from '../types';
import ResultsScoreGauge from './ResultsScoreGauge';
import ResultsDomainScoreChart from './ResultsDomainScoreChart';
import ResultsRecommendationCard from './ResultsRecommendationCard';
import DomainMaturityCard from './DomainMaturityCard';
import { downloadReport, ExpandedReportGroups, type ReportDefinition } from './ReportDetailPage';

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

    const readinessDownload: ReportDefinition = {
        title: 'Sovereign Intelligence Readiness Report',
        subtitle: `Overall Sovereign Intelligence Index: ${siiScore}/100`,
        filename: 'enterprise-horizon-sovereign-intelligence-readiness.txt',
        sections: [
            {
                title: 'Section 1 — Executive Readiness Position',
                overview: executiveSummary,
                measures: [`Overall Sovereign Intelligence Index: ${siiScore}/100.`, ...keyStrengths.map(item => `Verified strength: ${item}`)],
                actions: ['Protect the strongest capabilities with accountable ownership and measurable operating standards.', 'Use the SII baseline to track progress at each future assessment.', 'Connect every readiness investment to a named business, security or operating outcome.']
            },
            {
                title: 'Section 2 — Domain Findings & Strategic Actions',
                overview: 'The domain analysis identifies the maturity evidence, capability gaps and priorities that should shape the enterprise roadmap.',
                measures: domainAnalyses.map(domain => `${domain.domain}: ${domain.score}/100 — ${domain.analysis}`),
                actions: recommendations.map(item => `${item.title}: ${item.content}`)
            }
        ]
    };

  return (
    <div className="w-full bg-black/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl p-6 sm:p-8 animate-fade-in">
        <div className="mb-8 text-center">
            <h1 className="text-3xl font-black text-white sm:text-4xl">Sovereign Intelligence Readiness Report</h1>
            <button
                type="button"
                onClick={() => downloadReport(readinessDownload)}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-cyan-200/25 bg-gradient-to-r from-[#0b5f9c] via-[#157db8] to-[#60c7e8] px-6 py-3 text-base font-bold text-white shadow-[0_8px_24px_rgba(21,125,184,0.28)] transition-transform hover:scale-[1.02] hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-cyan-300/30 sm:w-auto"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                Download Report
            </button>
        </div>

        <section className="mb-8 rounded-xl border border-cyan-300/15 bg-[#061526]/70 p-5 sm:p-7">
        <h2 className="mb-6 text-2xl font-black text-white">Section 1 — Executive Readiness Position</h2>
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
        <ExpandedReportGroups reportTitle={readinessDownload.title} section={readinessDownload.sections[0]} sectionIndex={0} />
        </section>

        <section className="mb-8 rounded-xl border border-cyan-300/15 bg-[#061526]/70 p-5 sm:p-7">
            <h2 className="mb-4 text-2xl font-black text-white">Section 2 — Domain Findings & Strategic Actions</h2>
            <p className="mb-6 text-base leading-7 text-gray-200 sm:text-lg">Review the detailed maturity evidence for every assessed domain, then use the prioritized recommendations to guide the next operating roadmap.</p>
            <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {domainAnalyses.map((domain, index) => <DomainMaturityCard key={index} domainAnalysis={domain} />)}
            </div>
            <ResultsRecommendationCard
                title="Strategic Recommendations"
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor"><path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" /></svg>}
                items={recommendationItems}
                type="recommendation"
            />
            <ExpandedReportGroups reportTitle={readinessDownload.title} section={readinessDownload.sections[1]} sectionIndex={1} />
        </section>

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
