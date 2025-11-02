import React from 'react';
import type { DomainAnalysis } from '../types';

interface DomainMaturityCardProps {
    domainAnalysis: DomainAnalysis;
}

const DomainMaturityCard: React.FC<DomainMaturityCardProps> = ({ domainAnalysis }) => {
    const { domain, score, analysis } = domainAnalysis;

    const getBarColor = (s: number) => {
        if (s < 40) return 'bg-red-500';
        if (s < 70) return 'bg-yellow-500';
        return 'bg-green-500';
    };

    return (
        <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-6 flex flex-col h-full">
            <h3 className="text-lg font-bold text-white mb-3">{domain}</h3>
            
            <div className="flex items-center mb-3">
                <span className="font-bold text-xl text-blue-400 mr-3">{score}<span className="text-sm text-gray-400">/100</span></span>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div
                        className={`${getBarColor(score)} h-2.5 rounded-full`}
                        style={{ width: `${score}%` }}
                    ></div>
                </div>
            </div>

            <p className="text-sm text-gray-400 flex-grow">{analysis}</p>
        </div>
    );
};

export default DomainMaturityCard;