
import React from 'react';

const EmployeeSentimentReportPage: React.FC = () => {
  return (
    <div className="w-full bg-black/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl p-6 sm:p-8 animate-fade-in">
      <h1 className="text-3xl font-black text-white text-center mb-2">Employee Sentiment & Culture Report</h1>
      <p className="text-center text-gray-400 mb-8">This report is under development.</p>
      <div className="text-left text-gray-300 max-w-4xl mx-auto space-y-4">
        <p>
          Technology is only one part of transformation; people and culture are paramount. This report analyzes the "Workforce & Organizational Culture" section of your assessment to provide critical insights for HR, leadership, and transformation management teams, helping you understand the human element of your digital journey.
        </p>
        <p>
          The analysis will focus on key indicators of a future-ready workforce, presenting findings through compelling multi-dimensional visuals. For example, a sample report might use topic modeling to create visual clusters of key themes from employee feedback, instantly highlighting areas of concern or excitement. Sentiment trend analysis charts could plot morale over time, correlating it with major project launches or organizational changes. Additionally, heatmaps could show sentiment variations across different departments or locations. These insights are crucial for designing effective change management programs, identifying skills gaps, and ensuring your workforce is a key enabler—not a barrier—to your strategic objectives.
        </p>
      </div>
    </div>
  );
};

export default EmployeeSentimentReportPage;
