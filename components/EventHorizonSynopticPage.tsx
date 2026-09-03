import React from 'react';

const Capability: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-start">
        <svg className="w-5 h-5 mr-2 text-blue-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>{children}</span>
    </li>
);

const ArchBox: React.FC<{ title: string; color?: string, className?: string }> = ({ title, color = 'border-gray-600', className = '' }) => (
  <div className={`bg-gray-800/50 border-2 ${color} rounded-lg p-3 text-center shadow-lg ${className}`}>
    <h3 className="font-bold text-white text-sm">{title}</h3>
  </div>
);

const EventHorizonSynopticPage: React.FC = () => {
  return (
    <div className="w-full bg-black/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl p-6 sm:p-8 animate-fade-in">
        <div className="text-center mb-12">
            <h1 className="text-3xl font-black text-white mb-2">Event Horizon Synoptic™</h1>
            <p className="text-lg text-blue-400 font-semibold">Unified Visualization Platform</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
                 <h2 className="text-xl font-bold text-white mb-4">Synopsis</h2>
                <p className="text-gray-300 mb-6">
                    This is the unified visualization platform that transforms complex data into actionable insights. It provides interactive topology maps, relationship graphs, time-series visualizations, and a natural language query interface (Search Horizon™) for intuitive exploration of your entire infrastructure.
                </p>
                <h2 className="text-xl font-bold text-white mb-4">Key Capabilities</h2>
                <ul className="space-y-3 text-gray-300">
                    <Capability>Search Horizon™ natural language exploration for complex queries.</Capability>
                    <Capability>Multi-dimensional visualization engine (topology, time-series, heatmaps).</Capability>
                    <Capability>Context-aware, role-based, and automated dashboard generation.</Capability>
                    <Capability>Temporal exploration interface for "time-travel" analysis.</Capability>
                    <Capability>Narrative generation engine to create automated insight descriptions.</Capability>
                </ul>
            </div>

            <div className="flex items-center justify-center space-x-6 bg-gray-900/30 rounded-lg p-6">
                <div className="flex flex-col space-y-4 w-1/3">
                    <ArchBox title="CDAE Data Sources" color="border-blue-400" />
                </div>
                
                <div className="text-5xl text-gray-500">→</div>

                <div className="flex flex-col items-center space-y-4 w-2/3">
                     <ArchBox title="Event Horizon Synoptic™" color="border-cyan-400" className="w-full" />
                     <ArchBox title="Dashboards & Natural Language Query" color="border-green-500" className="w-full p-6 h-32 flex items-center justify-center" />
                </div>
            </div>
        </div>
    </div>
  );
};

export default EventHorizonSynopticPage;
