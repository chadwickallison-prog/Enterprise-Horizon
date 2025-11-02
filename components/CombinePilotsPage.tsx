import React, { useState, useMemo } from 'react';
import type { Pilot } from '../types';
import { ALL_PILOTS } from '../constants';

interface CombinePilotsPageProps {
  pilotsToCombine: string[];
  onSaveInitiative: (name: string, pilots: string[]) => void;
  onNavigate: (page: string) => void;
}

const CombinePilotsPage: React.FC<CombinePilotsPageProps> = ({ pilotsToCombine, onSaveInitiative, onNavigate }) => {
  const [initiativeName, setInitiativeName] = useState('');

  const selectedPilotsDetails = useMemo(() => {
    return ALL_PILOTS
      .filter(p => pilotsToCombine.includes(p.title))
      .sort((a, b) => a.title.localeCompare(b.title));
  }, [pilotsToCombine]);

  const handleSave = () => {
    if (initiativeName.trim() && selectedPilotsDetails.length > 0) {
      onSaveInitiative(initiativeName.trim(), selectedPilotsDetails.map(p => p.title));
    } else {
      alert("Please provide a name for your initiative.");
    }
  };
  
  if (pilotsToCombine.length === 0) {
    return (
        <div className="w-full bg-black/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl p-6 sm:p-8 animate-fade-in text-center">
            <h2 className="text-2xl font-bold text-white mb-4">No Pilots Selected</h2>
            <p className="text-gray-400 mb-6">You haven't selected any pilots to combine. Please return to the library to make a selection.</p>
            <button
              onClick={() => onNavigate('pilots')}
              className="px-8 py-3 bg-gradient-to-r from-[#4080FF] to-[#002060] text-white font-bold rounded-lg shadow-lg hover:opacity-90 transition-opacity"
            >
              Go to Pilot Library
            </button>
        </div>
    )
  }

  return (
    <div className="w-full bg-black/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl p-6 sm:p-8 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-black text-white text-center mb-4">Build Your Custom Innovation Roadmap</h1>
        <p className="text-center text-gray-400 mb-10">
          Review your selected pilots below. Provide a name for this strategic initiative to save it as a custom roadmap.
        </p>
        
        <div className="mb-8">
            <label htmlFor="initiativeName" className="block text-lg font-semibold text-white mb-2">Roadmap Name</label>
            <input
                id="initiativeName"
                type="text"
                value={initiativeName}
                onChange={(e) => setInitiativeName(e.target.value)}
                placeholder="e.g., 'Q4 2024 AI & Security Push'"
                className="w-full px-4 py-3 bg-gray-800/50 border-2 border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4080FF] focus:border-[#4080FF] text-xl"
            />
        </div>

        <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-6">Combined Pilots ({selectedPilotsDetails.length})</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedPilotsDetails.map(pilot => (
                    <div key={pilot.title} className="flex items-center bg-gray-800/60 p-3 rounded-lg">
                        <div className="text-2xl text-blue-400 mr-4">{pilot.icon}</div>
                        <span className="text-gray-200 font-semibold">{pilot.title}</span>
                    </div>
                ))}
            </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
                onClick={handleSave}
                disabled={!initiativeName.trim()}
                className="px-10 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-lg rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Save Innovation Roadmap
            </button>
            <button
                onClick={() => onNavigate('pilots')}
                className="px-8 py-3 bg-gray-700 text-gray-300 font-semibold rounded-lg hover:bg-gray-600 transition-colors"
            >
                Cancel & Return to Library
            </button>
        </div>

      </div>
    </div>
  );
};

export default CombinePilotsPage;