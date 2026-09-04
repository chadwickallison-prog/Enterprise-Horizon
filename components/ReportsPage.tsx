import React from 'react';
import { downloadReport, reportDefinitions, type StaticReportKey } from './ReportDetailPage';

interface ReportCardProps {
  title: string;
  subtitle: string;
  page: string;
  onNavigate: (page: string) => void;
  icon: React.ReactNode;
  reportKey?: StaticReportKey;
}

const ReportCard: React.FC<ReportCardProps> = ({ title, subtitle, page, onNavigate, icon, reportKey }) => (
    <div 
        onClick={() => onNavigate(page)}
        className="cursor-pointer rounded-lg border-2 border-gray-700 bg-gray-800/50 p-6 transition-all duration-300 hover:border-blue-500 hover:bg-gray-700/30"
    >
        <div className="flex items-center gap-4">
            <div className="shrink-0 text-3xl text-blue-400">{icon}</div>
            <div>
                <h3 className="text-xl font-bold text-white">{title}</h3>
                <p className="mt-1 text-base text-gray-300">{subtitle}</p>
            </div>
        </div>
        <button
            type="button"
            onClick={(event) => {
                event.stopPropagation();
                if (reportKey) downloadReport(reportDefinitions[reportKey]);
                else onNavigate(page);
            }}
            aria-label={`Download ${title} report`}
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-cyan-200/25 bg-gradient-to-r from-[#0b5f9c] via-[#157db8] to-[#60c7e8] px-4 py-3 text-base font-bold text-white shadow-[0_8px_20px_rgba(21,125,184,0.22)] hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-cyan-300/30"
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            Download Report
        </button>
    </div>
);

const ReportsPage: React.FC<{onNavigate: (page:string) => void}> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-black/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl p-6 sm:p-8 animate-fade-in">
        <h1 className="text-3xl font-black text-white text-center mb-4">Reports Dashboard</h1>
        <p className="text-center text-gray-400 mb-10">Analyze your Sovereign Intelligence Index and track progress over time.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ReportCard 
                title="Quarterly SII Trends" 
                subtitle="Track your SII score over time." 
                page="quarterly-report" 
                reportKey="quarterly"
                onNavigate={onNavigate} 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" /></svg>}
            />
            <ReportCard 
                title="Maturity Breakdown" 
                subtitle="Analyze maturity by domain." 
                page="maturity-report" 
                onNavigate={onNavigate} 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor"><path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V4zm2 2v2h6V6H7zm0 4v2h6v-2H7zm0 4v2h6v-2H7z" /></svg>}
            />
             <ReportCard 
                title="Industry Benchmarks" 
                subtitle="Compare your posture to peers." 
                page="benchmark-report" 
                reportKey="benchmark"
                onNavigate={onNavigate} 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" /></svg>}
            />
            <ReportCard 
                title="Pilot Success Metrics" 
                subtitle="Evaluate innovation initiatives." 
                page="pilot-report" 
                reportKey="pilot"
                onNavigate={onNavigate} 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0V6h-1a1 1 0 010-2h1V3a1 1 0 011-1zm-1 6a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1zm1 5a1 1 0 100 2h1a1 1 0 100-2h-1z" clipRule="evenodd" /></svg>}
            />
             <ReportCard 
                title="Risk & Compliance" 
                subtitle="Review GRC posture." 
                page="risk-report" 
                reportKey="risk"
                onNavigate={onNavigate} 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd" /></svg>}
            />
            <ReportCard 
                title="Cost Optimization" 
                subtitle="FinOps insights and savings." 
                page="cost-report" 
                reportKey="cost"
                onNavigate={onNavigate} 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>}
            />
            <ReportCard 
                title="Automation ROI" 
                subtitle="Track automation impact." 
                page="automation-roi-report" 
                reportKey="automation"
                onNavigate={onNavigate} 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.532 1.532 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.532 1.532 0 01-.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" /></svg>}
            />
             <ReportCard 
                title="Security Posture" 
                subtitle="Review security insights." 
                page="security-report" 
                reportKey="security"
                onNavigate={onNavigate} 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" /></svg>}
            />
             <ReportCard 
                title="Employee Sentiment" 
                subtitle="Workforce analytics." 
                page="sentiment-report" 
                reportKey="sentiment"
                onNavigate={onNavigate} 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zm-1.518 6.32a6.002 6.002 0 01-4.964 0c-1.54.63-2.518 2.11-2.518 3.68 0 1.104.896 2 2 2h6c1.104 0 2-.896 2-2 0-1.57-.978-3.05-2.518-3.68zM16 6a3 3 0 11-6 0 3 3 0 016 0zm-1.518 6.32a6.002 6.002 0 01-4.964 0c-1.54.63-2.518 2.11-2.518 3.68 0 1.104.896 2 2 2h.176a5.985 5.985 0 013.342.001A2.001 2.001 0 0018 16c0-1.57-.978-3.05-2.518-3.68z" /></svg>}
            />
        </div>
    </div>
  );
};

export default ReportsPage;
