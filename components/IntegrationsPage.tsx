import React, { useState } from 'react';
import type { Integration } from '../types';
import { ALL_INTEGRATIONS } from '../constants';

interface IntegrationDetailModalProps {
  integration: Integration;
  onClose: () => void;
}

const IntegrationDetailModal: React.FC<IntegrationDetailModalProps> = ({ integration, onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-2xl bg-[#0d1b2a] border border-gray-700/50 rounded-2xl shadow-2xl p-8 relative animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="flex items-start space-x-6">
            <div className="text-5xl text-blue-400 flex-shrink-0 mt-1">{integration.icon}</div>
            <div>
                <h2 className="text-2xl font-bold text-white">{integration.title}</h2>
                <div className={`mt-2 inline-block px-3 py-1 text-sm font-bold rounded-full bg-gray-700 text-gray-300`}>{integration.category}</div>
            </div>
        </div>

        <div className="mt-6 border-t border-gray-700/50 pt-6">
            <h3 className="text-lg font-semibold text-gray-300 mb-2">Description</h3>
            <p className="text-gray-400">{integration.description}</p>
        </div>
      </div>
       <style>{`
        @keyframes fade-in {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
            animation: fade-in 0.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};


interface IntegrationCardProps {
  integration: Integration;
  isSelected: boolean;
  onSelect: (title: string) => void;
  onViewDetails: (integration: Integration) => void;
}

const IntegrationCard: React.FC<IntegrationCardProps> = ({ integration, isSelected, onSelect, onViewDetails }) => {
    const { title, description, category, icon } = integration;
    
    return (
        <div 
            onClick={() => onSelect(title)}
            className={`relative bg-gray-800/50 border-2 rounded-lg p-6 hover:bg-gray-700/30 transition-all duration-300 flex flex-col cursor-pointer ${isSelected ? 'border-blue-500 ring-2 ring-blue-500/50' : 'border-gray-700 hover:border-blue-500'}`}
        >
            {isSelected && (
                <div className="absolute top-3 right-3 text-blue-400 bg-gray-900 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                </div>
            )}
            <div className="flex justify-between items-start">
                <div className="text-3xl text-blue-400">{icon}</div>
                <div className={`px-3 py-1 text-xs font-bold rounded-full bg-gray-700 text-gray-300`}>{category}</div>
            </div>
            <div className="mt-4 flex-grow">
                <h3 className="text-lg font-bold text-white">{title}</h3>
                <p className="text-sm text-gray-400 mt-2 line-clamp-3">{description}</p>
            </div>
             <button 
                onClick={(e) => {
                e.stopPropagation();
                onViewDetails(integration);
                }}
                className="absolute bottom-3 right-3 p-1 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
                aria-label={`View details for ${title}`}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
            </button>
        </div>
    );
};


const IntegrationsPage: React.FC<{ onBuildIntegrationPlan: (integrations: string[]) => void }> = ({ onBuildIntegrationPlan }) => {
  const [selectedIntegrations, setSelectedIntegrations] = useState<string[]>([]);
  const [viewingIntegration, setViewingIntegration] = useState<Integration | null>(null);
  
  const handleSelect = (title: string) => {
    setSelectedIntegrations(prev => 
      prev.includes(title) 
        ? prev.filter(t => t !== title) 
        : [...prev, title]
    );
  };

  const handleClearSelection = () => {
    setSelectedIntegrations([]);
  };
  
  const handleBuild = () => {
    if (selectedIntegrations.length === 0) return;
    onBuildIntegrationPlan(selectedIntegrations);
  };

  const handleViewDetails = (integration: Integration) => {
    setViewingIntegration(integration);
  };

  return (
    <div className="w-full bg-black/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl p-6 sm:p-8 animate-fade-in">
        <h1 className="text-3xl font-black text-white text-center mb-4">Integration Library</h1>
        <p className="text-center text-gray-400 mb-10 max-w-3xl mx-auto">
            Select one or more platforms and tools from the library below to build a custom integration plan. Combining integrations helps contextualize your data and unlock deeper, more relevant insights.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ALL_INTEGRATIONS.map((integration, index) => (
                <IntegrationCard 
                    key={index}
                    integration={integration}
                    isSelected={selectedIntegrations.includes(integration.title)}
                    onSelect={handleSelect}
                    onViewDetails={handleViewDetails}
                />
            ))}
        </div>

        {selectedIntegrations.length > 0 && (
            <div className="mt-12 p-6 bg-gray-900/50 border border-gray-700 rounded-lg flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 sticky bottom-4 z-20">
                <p className="text-lg text-white font-semibold">
                    {selectedIntegrations.length} integration(s) selected.
                </p>
                <div className="flex space-x-4">
                    <button 
                        onClick={handleBuild} 
                        className="px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-lg shadow-lg hover:opacity-90 transition-opacity"
                    >
                        Build Integration Plan ({selectedIntegrations.length})
                    </button>
                    <button 
                        onClick={handleClearSelection} 
                        className="px-6 py-2 bg-gray-600 text-gray-200 font-semibold rounded-lg hover:bg-gray-500 transition-colors"
                    >
                        Clear Selection
                    </button>
                </div>
            </div>
        )}

        {viewingIntegration && (
            <IntegrationDetailModal integration={viewingIntegration} onClose={() => setViewingIntegration(null)} />
        )}
    </div>
  );
};

export default IntegrationsPage;