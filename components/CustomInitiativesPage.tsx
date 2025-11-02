import React, { useState, useEffect } from 'react';
import type { CustomInitiative, Pilot, User } from '../types';
import { ALL_PILOTS } from '../constants';
import { getCustomInitiatives, deleteCustomInitiative } from '../services/apiService';
import LoadingSpinner from './LoadingSpinner';

const CustomInitiativePlansPage: React.FC<{ user: User, onNavigate: (page: string) => void }> = ({ user, onNavigate }) => {
  const [initiatives, setInitiatives] = useState<CustomInitiative[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    getCustomInitiatives(user.email)
      .then(data => {
        setInitiatives(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch initiatives:", err);
        setIsLoading(false);
      });
  }, [user.email]);

  const handleDelete = (idToDelete: string) => {
    if (window.confirm("Are you sure you want to delete this initiative plan? This action cannot be undone.")) {
      deleteCustomInitiative(user.email, idToDelete).then(() => {
        setInitiatives(prev => prev.filter(i => i.id !== idToDelete));
      });
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getPilotIcon = (title: string): React.ReactNode => {
    const pilot = ALL_PILOTS.find(p => p.title === title);
    return pilot ? pilot.icon : null;
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (initiatives.length === 0) {
    return (
      <div className="w-full bg-black/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl p-6 sm:p-8 animate-fade-in text-center">
        <h1 className="text-3xl font-black text-white text-center mb-4">My Custom Initiative Plans</h1>
        <div className="mt-12">
            <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-16 w-16 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" /></svg>
            <h2 className="mt-4 text-xl font-semibold text-white">No Initiative Plans Created Yet</h2>
            <p className="mt-2 text-gray-400">Visit the Pilot Library to start building your first strategic roadmap.</p>
            <button
                onClick={() => onNavigate('pilots')}
                className="mt-6 px-8 py-3 bg-gradient-to-r from-[#4080FF] to-[#002060] text-white font-bold rounded-lg shadow-lg hover:opacity-90 transition-opacity"
            >
                Go to Pilot Library
            </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-black/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl p-6 sm:p-8 animate-fade-in">
        <h1 className="text-3xl font-black text-white text-center mb-4">My Custom Initiative Plans</h1>
        <p className="text-center text-gray-400 mb-10">Review, manage, and track your saved strategic roadmaps.</p>

        <div className="space-y-6 max-w-4xl mx-auto">
            {initiatives.map(initiative => (
                <div key={initiative.id} className="bg-gray-800/50 border border-gray-700 rounded-lg shadow-md transition-all duration-300">
                    <div className="p-4 flex justify-between items-center cursor-pointer" onClick={() => toggleExpand(initiative.id)}>
                        <div>
                            <h2 className="text-xl font-bold text-white">{initiative.name}</h2>
                            <p className="text-sm text-gray-400 mt-1">
                                Created on {new Date(initiative.createdAt).toLocaleDateString()} | {initiative.pilots.length} Pilots Included
                            </p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button onClick={(e) => { e.stopPropagation(); handleDelete(initiative.id); }} className="p-2 rounded-full text-gray-400 hover:bg-red-900/50 hover:text-red-400 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                            </button>
                            <svg className={`w-6 h-6 text-gray-400 transform transition-transform duration-300 ${expandedId === initiative.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedId === initiative.id ? 'max-h-screen' : 'max-h-0'}`}>
                        <div className="px-4 pb-4 border-t border-gray-700">
                             <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                                {initiative.pilots.map(pilotTitle => (
                                    <li key={pilotTitle} className="flex items-center">
                                        <div className="text-xl text-blue-400 mr-3">{getPilotIcon(pilotTitle)}</div>
                                        <span className="text-gray-300">{pilotTitle}</span>
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

export default CustomInitiativePlansPage;