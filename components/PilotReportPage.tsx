
import React from 'react';

const PilotReportPage: React.FC = () => {
  return (
    <div className="w-full bg-black/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl p-6 sm:p-8 animate-fade-in">
      <h1 className="text-3xl font-black text-white text-center mb-2">Pilot Success Metrics Report</h1>
      <p className="text-center text-gray-400 mb-8">This report is under development.</p>
      <div className="text-left text-gray-300 max-w-4xl mx-auto space-y-4">
        <p>
          Innovation requires measurement. This report provides a dedicated dashboard for tracking the performance and impact of your ongoing and completed pilot programs. It transforms your innovation initiatives from experiments into quantifiable business drivers, providing clear data to support strategic decisions.
        </p>
        <p>
          For each active pilot, the report will track key performance indicators (KPIs) through a variety of multi-dimensional visuals. For instance, a sample report could include interactive Gantt charts to monitor timelines and milestone completion, alongside real-time dashboards showing performance improvements, cost reductions, and user adoption rates. For completed pilots, it will offer a comprehensive ROI calculation dashboard with financial metrics like payback period and Net Present Value (NPV), as well as a qualitative summary of key learnings and stakeholder feedback.
        </p>
        <p>
          This data-driven approach is essential for making informed decisions about which pilots should be scaled into full production, which require further iteration, and which should be decommissioned, ensuring your innovation budget is allocated for maximum impact.
        </p>
      </div>
    </div>
  );
};

export default PilotReportPage;
