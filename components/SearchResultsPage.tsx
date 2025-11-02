import React from 'react';

interface SearchResultsPageProps {
  results: string;
  query: string;
  onReset: () => void;
}

const SearchResultsPage: React.FC<SearchResultsPageProps> = ({ results, query, onReset }) => {
    const formattedResults = results
    .split('\n')
    .map((line, index) => {
      line = line.trim();
      if (line.startsWith('# ')) {
        return <h1 key={index} className="text-3xl font-black text-white text-center mb-2">{line.substring(2)} for "{query}"</h1>;
      }
      if (line.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-bold text-white mt-8 mb-4 border-b-2 border-[#4080FF]/30 pb-2">{line.substring(3)}</h2>;
      }
      if (line.startsWith('* ')) {
        return <li key={index} className="text-gray-300 text-lg mb-2 ml-5">{line.substring(2)}</li>;
      }
      if (line === '') return null;
      return <p key={index} className="text-gray-300 text-lg mb-4">{line}</p>;
    })
    .filter(Boolean);

  return (
    <div className="w-full bg-black/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl p-6 sm:p-8 animate-fade-in">
        {formattedResults}
        <div className="mt-12 text-center">
            <button
            onClick={onReset}
            className="px-8 py-3 bg-gradient-to-r from-[#4080FF] to-[#002060] text-white font-bold rounded-lg shadow-lg shadow-[#4080FF]/20 transform hover:scale-105 transition-transform duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-[#4080FF]/50"
            >
            Back to Home
            </button>
        </div>
    </div>
  );
};

export default SearchResultsPage;