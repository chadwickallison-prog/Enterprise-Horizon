import React, { useEffect, useState } from 'react';
import type { User, AssessmentReport } from '../types';
import { getLastAssessmentReport } from '../services/apiService';
import LoadingSpinner from './LoadingSpinner';
import DomainMaturityCard from './DomainMaturityCard';
import { downloadReport, ExpandedReportGroups, type ReportDefinition } from './ReportDetailPage';

const MaturityReportPage: React.FC<{ user: User }> = ({ user }) => {
  const [report, setReport] = useState<AssessmentReport | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchReport = async () => {
      setIsLoading(true);
      try {
        const lastReport = await getLastAssessmentReport(user.email);
        setReport(lastReport);
      } catch (error) {
        console.error('Failed to fetch maturity report:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchReport();
  }, [user.email]);

  if (isLoading) return <LoadingSpinner />;

  if (!report) {
    return (
      <div className="w-full rounded-2xl border border-gray-700/50 bg-black/30 p-6 text-center shadow-2xl backdrop-blur-sm animate-fade-in sm:p-8">
        <h1 className="text-3xl font-black text-white">Maturity Breakdown Report</h1>
        <p className="mt-4 text-lg text-gray-300">No assessment data found. Please complete an assessment to view and download this report.</p>
      </div>
    );
  }

  const maturityDownload: ReportDefinition = {
    title: 'Maturity Breakdown Report',
    subtitle: `Overall Sovereign Intelligence Index: ${report.siiScore}/100`,
    filename: 'enterprise-horizon-maturity-breakdown.txt',
    sections: [
      {
        title: 'Section 1 — Executive Maturity Position',
        overview: report.executiveSummary,
        measures: [
          `Overall Sovereign Intelligence Index: ${report.siiScore}/100.`,
          ...report.keyStrengths.map(strength => `Verified strength: ${strength}`),
          `Assessment completed: ${new Date(report.completedAt || report.createdAt).toLocaleDateString()}.`
        ],
        actions: report.recommendations.map(item => `${item.title}: ${item.content}`)
      },
      {
        title: 'Section 2 — Domain Detail & Priorities',
        overview: 'Each domain score shows current maturity and the accompanying analysis explains the capability evidence behind that position. Lower-scoring domains should be sequenced according to business exposure and their dependency on stronger foundational capabilities.',
        measures: report.domainAnalyses.map(domain => `${domain.domain}: ${domain.score}/100 — ${domain.analysis}`),
        actions: report.domainAnalyses.map(domain => domain.score < 40
          ? `Stabilize ${domain.domain} immediately with an accountable remediation plan.`
          : domain.score < 70
            ? `Advance ${domain.domain} through a measured improvement roadmap.`
            : `Protect and scale the mature practices established in ${domain.domain}.`
        )
      }
    ]
  };

  return (
    <div className="w-full rounded-2xl border border-gray-700/50 bg-black/30 p-5 shadow-2xl backdrop-blur-sm animate-fade-in sm:p-8">
      <div className="text-center">
        <h1 className="text-3xl font-black text-white sm:text-4xl">Maturity Breakdown Report</h1>
        <p className="mt-3 text-lg text-gray-300">
          Overall Sovereign Intelligence Index: <span className="font-bold text-blue-400">{report.siiScore}/100</span>
        </p>
        <button
          type="button"
          onClick={() => downloadReport(maturityDownload)}
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-cyan-200/25 bg-gradient-to-r from-[#0b5f9c] via-[#157db8] to-[#60c7e8] px-6 py-3 text-base font-bold text-white shadow-[0_8px_24px_rgba(21,125,184,0.28)] transition-transform hover:scale-[1.02] hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-cyan-300/30 sm:w-auto"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          Download Report
        </button>
      </div>

      <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-6">
        <section className="rounded-xl border border-cyan-300/15 bg-[#061526]/85 p-5 sm:p-7">
          <h2 className="text-2xl font-black text-white">Section 1 — Executive Maturity Position</h2>
          <p className="mt-4 text-base leading-7 text-gray-200 sm:text-lg">{report.executiveSummary}</p>

          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div>
              <h3 className="text-lg font-black uppercase tracking-[0.12em] text-cyan-200">Key strengths</h3>
              <ul className="mt-3 space-y-3 text-base leading-7 text-gray-200 sm:text-lg">
                {report.keyStrengths.map(item => <li key={item} className="flex gap-3"><span className="text-cyan-300">•</span><span>{item}</span></li>)}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-black uppercase tracking-[0.12em] text-cyan-200">Strategic priorities</h3>
              <ul className="mt-3 space-y-3 text-base leading-7 text-gray-200 sm:text-lg">
                {report.recommendations.map(item => <li key={item.title} className="flex gap-3"><span className="text-cyan-300">•</span><span><strong className="text-white">{item.title}:</strong> {item.content}</span></li>)}
              </ul>
            </div>
          </div>
          <ExpandedReportGroups reportTitle={maturityDownload.title} section={maturityDownload.sections[0]} sectionIndex={0} />
        </section>

        <section className="rounded-xl border border-cyan-300/15 bg-[#061526]/85 p-5 sm:p-7">
          <h2 className="text-2xl font-black text-white">Section 2 — Domain Detail & Priorities</h2>
          <p className="mt-4 text-base leading-7 text-gray-200 sm:text-lg">Review every domain score, the evidence behind it and the maturity gaps that should shape the next operating roadmap.</p>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {report.domainAnalyses.map((domain, index) => <DomainMaturityCard key={index} domainAnalysis={domain} />)}
          </div>
          <ExpandedReportGroups reportTitle={maturityDownload.title} section={maturityDownload.sections[1]} sectionIndex={1} />
        </section>
      </div>
    </div>
  );
};

export default MaturityReportPage;
