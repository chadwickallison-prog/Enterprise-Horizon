import React from 'react';

const Capability: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-start">
        <svg className="w-5 h-5 mr-2 text-purple-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>{children}</span>
    </li>
);

const DiagramBox: React.FC<{ title: string; color?: string; className?: string }> = ({ title, color = 'border-gray-600', className = '' }) => (
    <div className={`bg-[#0d1b2a] border-2 ${color} rounded-xl px-4 py-3 text-center shadow-lg whitespace-nowrap ${className}`}>
      <h3 className="font-bold text-white text-lg">{title}</h3>
    </div>
);


const TemporalDynamicsAnalyzerPage: React.FC = () => {
  return (
    <div className="w-full bg-black/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl p-6 sm:p-8 animate-fade-in">
        <div className="text-center mb-12">
            <h1 className="text-3xl font-black text-white mb-2">Temporal Dynamics Analyzer™</h1>
            <p className="text-lg text-purple-400 font-semibold">Time-Based Intelligence Framework</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
                 <h2 className="text-xl font-bold text-white mb-4">Synopsis</h2>
                <p className="text-gray-300 mb-6">
                   Provides a sophisticated time-based intelligence framework. This module analyzes data across different time scales—from minutes to years—to understand patterns, trends, and cycles. It enables highly accurate forecasting for capacity, performance, and business demand.
                </p>
                <h2 className="text-xl font-bold text-white mb-4">Key Capabilities</h2>
                <ul className="space-y-3 text-gray-300">
                    <Capability>Multi-scale temporal pattern recognition (minute-by-minute to annual).</Capability>
                    <Capability>Seasonal and cyclical analysis for business cycles and holidays.</Capability>
                    <Capability>Advanced time-series forecasting and trend analysis.</Capability>
                    <Capability>Change point detection to identify abrupt shifts in behavior.</Capability>
                    <Capability>Temporal "what-if" analysis to simulate future scenarios.</Capability>
                </ul>
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-900/30 rounded-lg p-8 min-h-[300px] w-full overflow-x-auto">
              <div className="relative w-full max-w-xl mb-4" style={{ height: '120px' }}>
                
                {/* Blue Box on top */}
                <div className="absolute top-0 left-0 w-[60%] z-20">
                    <div className="bg-[#0d1b2a] border-2 border-blue-400 rounded-xl px-4 py-4 text-center shadow-lg">
                        <h3 className="font-bold text-white text-lg leading-tight">Historical & Real-time Data Streams</h3>
                    </div>
                </div>

                {/* Green Boxes Container */}
                <div className="absolute bottom-0 left-0 w-full flex justify-between space-x-2 z-10">
                  <DiagramBox title="Trend Analysis" color="border-green-500" className="w-1/3" />
                  <DiagramBox title="Cycle Recognition" color="border-green-500" className="w-1/3" />
                  <DiagramBox title="Forecasting" color="border-green-500" className="w-1/3" />
                </div>
                
                {/* Connecting Lines */}
                <div className="absolute w-full h-full z-0 top-0 left-0">
                    <svg width="100%" height="100%" className="overflow-visible">
                      <line x1="30%" y1="45%" x2="16.66%" y2="80%" stroke="#38A169" strokeWidth="2" />
                      <line x1="30%" y1="45%" x2="50%" y2="80%" stroke="#38A169" strokeWidth="2" />
                    </svg>
                </div>

              </div>

              {/* Timeline Arrow at the bottom */}
              <div className="relative w-[105%] h-[3px] bg-gray-500 mt-12">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 bg-gray-400 rounded-full -ml-2"></div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[14px] border-l-gray-400 -mr-2"></div>
              </div>
            </div>
        </div>
    </div>
  );
};

export default TemporalDynamicsAnalyzerPage;
