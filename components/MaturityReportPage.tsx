

import React, { useState, useEffect } from 'react';
import type { User, AssessmentReport } from '../types';
import { getLastAssessmentReport } from '../services/apiService';
import LoadingSpinner from './LoadingSpinner';
import DomainMaturityCard from './DomainMaturityCard';

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
        console.error("Failed to fetch maturity report:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchReport();
  }, [user.email]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!report) {
    return (
      <div className="w-full bg-black/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl p-6 sm:p-8 animate-fade-in text-center">
        <h1 className="text-3xl font-black text-white mb-2">Maturity Breakdown Report</h1>
        <p className="mt-4 text-gray-400">No assessment data found. Please complete an assessment to view this report.</p>
      </div>
    );
  }

  return (
    <div className="w-full bg-black/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl p-6 sm:p-8 animate-fade-in">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-black text-white">Maturity Breakdown Report</h1>
        <p className="text-lg text-gray-400 mt-2">
            Overall Sovereign Intelligence Index: <span className="font-bold text-blue-400">{report.siiScore}/100</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {report.domainAnalyses.map((domain, index) => (
            <DomainMaturityCard key={index} domainAnalysis={domain} />
        ))}
      </div>
    </div>
  );
};

export default MaturityReportPage;