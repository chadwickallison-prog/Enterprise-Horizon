import React from 'react';

interface ResultsRecommendationCardProps {
  title: string;
  icon: React.ReactNode;
  items: string[] | React.ReactNode[];
  type: 'strength' | 'recommendation';
}

const ResultsRecommendationCard: React.FC<ResultsRecommendationCardProps> = ({ title, icon, items, type }) => {
  const isStrength = type === 'strength';
  const iconColor = isStrength ? 'text-green-400' : 'text-yellow-400';
  const borderColor = isStrength ? 'border-green-500/30' : 'border-yellow-500/30';

  return (
    <div className={`bg-gray-800/50 border ${borderColor} rounded-lg p-6 h-full`}>
      <div className="flex items-center mb-4">
        <div className={`mr-3 ${iconColor}`}>{icon}</div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start text-gray-300">
            <svg
              className={`w-5 h-5 mr-3 flex-shrink-0 mt-1 ${isStrength ? 'text-green-500' : 'text-yellow-500'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
                {isStrength ? (
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                ) : (
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 3.01-1.742 3.01H4.42c-1.53 0-2.493-1.676-1.743-3.01l5.58-9.92zM12 8a1 1 0 011 1v3a1 1 0 11-2 0V9a1 1 0 011-1zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                )}
            </svg>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResultsRecommendationCard;
