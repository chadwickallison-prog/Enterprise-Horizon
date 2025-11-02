
import React from 'react';

const BenchmarkReportPage: React.FC = () => {
  return (
    <div className="w-full bg-black/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl p-6 sm:p-8 animate-fade-in">
      <h1 className="text-3xl font-black text-white text-center mb-2">Industry Benchmark Report</h1>
      <p className="text-center text-gray-400 mb-8">This report is under development.</p>
      <div className="text-left text-gray-300 max-w-4xl mx-auto space-y-4">
        <p>
          Context is critical for understanding your progress. This report provides that context by comparing your organization's Sovereign Intelligence Index (SII) score and domain-specific maturity levels against anonymized, aggregated data from your industry peers. It answers the crucial question: "How do we stack up against the competition?"
        </p>
        <p>
          Using advanced, multi-dimensional visuals, you will see exactly where your organization stands. For instance, a sample report might feature a radar chart overlay showing your domain scores against the industry average, immediately highlighting areas of strength and weakness. Percentile distribution histograms will show your ranking for the overall SII score, while detailed heatmaps can compare your specific capabilities (e.g., 'Zero Trust Maturity') against the top quartile of performers in your sector.
        </p>
         <p>
          The insights derived from this report are invaluable for prioritizing investments, justifying budgets, and setting realistic, data-informed goals for your digital transformation strategy. It allows you to move from subjective assessments to an objective understanding of your competitive posture in the digital landscape.
        </p>
      </div>
    </div>
  );
};

export default BenchmarkReportPage;
