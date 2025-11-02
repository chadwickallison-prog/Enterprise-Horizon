import React, { useMemo } from 'react';

interface AdminScoreDistributionChartProps {
    scores: number[];
}

const AdminScoreDistributionChart: React.FC<AdminScoreDistributionChartProps> = ({ scores }) => {
    
    const distribution = useMemo(() => {
        const bins = Array(10).fill(0);
        scores.forEach(score => {
            if (score >= 100) {
                bins[9]++;
            } else if (score >= 0) {
                const index = Math.floor(score / 10);
                bins[index]++;
            }
        });
        return bins;
    }, [scores]);

    const maxCount = Math.max(...distribution, 1); // Avoid division by zero
    const labels = ['0-9', '10-19', '20-29', '30-39', '40-49', '50-59', '60-69', '70-79', '80-89', '90-100'];

    return (
        <div className="w-full h-72 bg-gray-50 p-4 rounded-lg flex items-end space-x-2 md:space-x-4">
            {distribution.map((count, index) => (
                <div key={index} className="flex-1 flex flex-col items-center justify-end h-full">
                    <div className="text-xs font-bold text-gray-700 mb-1">{count}</div>
                    <div 
                        className="w-full bg-blue-500 rounded-t-md hover:bg-blue-600 transition-all duration-300"
                        style={{ height: `${(count / maxCount) * 80}%` }}
                        title={`${labels[index]}: ${count} users`}
                    >
                    </div>
                    <div className="text-xs text-gray-500 mt-2">{labels[index]}</div>
                </div>
            ))}
        </div>
    );
};

export default AdminScoreDistributionChart;
