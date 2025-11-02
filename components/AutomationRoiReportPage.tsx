
import React from 'react';

const AutomationRoiReportPage: React.FC = () => {
  return (
    <div className="w-full bg-black/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl p-6 sm:p-8 animate-fade-in">
      <h1 className="text-3xl font-black text-white text-center mb-2">Automation ROI Report</h1>
      <p className="text-center text-gray-400 mb-8">This report is under development.</p>
      <div className="text-left text-gray-300 max-w-4xl mx-auto space-y-4">
        <p>
          This report focuses on quantifying the business value and return on investment (ROI) from your organization's automation initiatives. It connects your investments in technologies like RPA, AIOps, and intelligent document processing to tangible operational and financial outcomes, making the value of automation clear to all stakeholders.
        </p>
        <p>
          The analysis will provide a framework for calculating ROI based on your assessment data, presenting the findings through compelling, multi-dimensional visuals. For example, a sample report could feature interactive process mining flowcharts that visualize a business process "before and after" automation, clearly showing the reduction in steps and cycle time. A dedicated dashboard could quantify Full-Time Equivalent (FTE) hours saved, while trend lines could illustrate the reduction in operational error rates over time. This report will help you build a powerful business case for further investment in automation and demonstrate the strategic value of your existing programs.
        </p>
      </div>
    </div>
  );
};

export default AutomationRoiReportPage;
