import React, { useState, useEffect } from 'react';
import type { CustomIntegrationPlan, User } from '../types';
import { ALL_INTEGRATIONS } from '../constants';
import { getIntegrationPlans, deleteIntegrationPlan } from '../services/apiService';
import LoadingSpinner from './LoadingSpinner';

const CustomIntegrationPlansPage: React.FC<{ user: User, onNavigate: (page: string) => void }> = ({ user, onNavigate }) => {
  const [plans, setPlans] = useState<CustomIntegrationPlan[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    getIntegrationPlans(user.email)
      .then(data => {
        setPlans(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch integration plans:", err);
        setIsLoading(false);
      });
  }, [user.email]);

  const handleDelete = (idToDelete: string) => {
    if (window.confirm("Are you sure you want to delete this integration plan? This action cannot be undone.")) {
      deleteIntegrationPlan(user.email, idToDelete).then(() => {
        setPlans(prev => prev.filter(p => p.id !== idToDelete));
      });
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getIntegrationIcon = (title: string): React.ReactNode => {
    const integration = ALL_INTEGRATIONS.find(i => i.title === title);
    return integration ? integration.icon : null;
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (plans.length === 0) {
    return (
      <div className="w-full bg-black/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl p-6 sm:p-8 animate-fade-in text-center">
        <h1 className="text-3xl font-black text-white text-center mb-4">My Custom Integration Plans</h1>
        <div className="mt-12">
            <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-16 w-16 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 0h-4m4 0l-5-5" /></svg>
            <h2 className="mt-4 text-xl font-semibold text-white">No Integration Plans Created Yet</h2>
            <p className="mt-2 text-gray-400">Visit the Integration Library to start building your first connectivity plan.</p>
            <button
                onClick={() => onNavigate('integrations')}
                className="mt-6 px-8 py-3 bg-gradient-to-r from-[#4080FF] to-[#002060] text-white font-bold rounded-lg shadow-lg hover:opacity-90 transition-opacity"
            >
                Go to Integration Library
            </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-black/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl p-6 sm:p-8 animate-fade-in">
        <h1 className="text-3xl font-black text-white text-center mb-4">My Custom Integration Plans</h1>
        <p className="text-center text-gray-400 mb-10">Review and manage your saved connectivity strategies.</p>

        <div className="space-y-6 max-w-4xl mx-auto">
            {plans.map(plan => (
                <div key={plan.id} className="bg-gray-800/50 border border-gray-700 rounded-lg shadow-md transition-all duration-300">
                    <div className="p-4 flex justify-between items-center cursor-pointer" onClick={() => toggleExpand(plan.id)}>
                        <div>
                            <h2 className="text-xl font-bold text-white">{plan.name}</h2>
                            <p className="text-sm text-gray-400 mt-1">
                                Created on {new Date(plan.createdAt).toLocaleDateString()} | {plan.integrations.length} Integrations
                            </p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button onClick={(e) => { e.stopPropagation(); handleDelete(plan.id); }} className="p-2 rounded-full text-gray-400 hover:bg-red-900/50 hover:text-red-400 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                            </button>
                            <svg className={`w-6 h-6 text-gray-400 transform transition-transform duration-300 ${expandedId === plan.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedId === plan.id ? 'max-h-screen' : 'max-h-0'}`}>
                        <div className="px-4 pb-4 border-t border-gray-700">
                             <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                                {plan.integrations.map(title => (
                                    <li key={title} className="flex items-center">
                                        <div className="text-xl text-blue-400 mr-3">{getIntegrationIcon(title)}</div>
                                        <span className="text-gray-300">{title}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default CustomIntegrationPlansPage;