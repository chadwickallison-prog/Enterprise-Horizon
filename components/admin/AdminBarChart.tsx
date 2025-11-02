import React from 'react';

interface ChartData {
    name: string;
    value: number;
}

interface AdminBarChartProps {
    data: ChartData[];
}

const AdminBarChart: React.FC<AdminBarChartProps> = ({ data }) => {
    const width = 500;
    const height = 250;
    const margin = { top: 20, right: 20, bottom: 40, left: 40 };
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;

    const maxValue = Math.max(...data.map(d => d.value), 1); // Use 1 to avoid division by zero
    const barWidth = chartWidth / data.length;

    return (
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
            <g transform={`translate(${margin.left}, ${margin.top})`}>
                {/* Y Axis */}
                <line x1="0" y1="0" x2="0" y2={chartHeight} stroke="#D1D5DB" />
                <text x="-10" y="0" dy="0.3em" textAnchor="end" fontSize="12" fill="#6B7280">{maxValue}</text>
                <text x="-10" y={chartHeight} dy="0.3em" textAnchor="end" fontSize="12" fill="#6B7280">0</text>

                 {/* X Axis */}
                <line x1="0" y1={chartHeight} x2={chartWidth} y2={chartHeight} stroke="#D1D5DB" />
                
                {data.map((d, i) => {
                    const barHeight = (d.value / maxValue) * chartHeight;
                    return (
                        <g key={d.name} transform={`translate(${i * barWidth}, 0)`}>
                            <rect
                                x={barWidth * 0.1}
                                y={chartHeight - barHeight}
                                width={barWidth * 0.8}
                                height={barHeight}
                                fill="#3B82F6"
                            />
                             <text 
                                x={barWidth / 2} 
                                y={chartHeight + 15} 
                                textAnchor="middle" 
                                fontSize="10" 
                                fill="#6B7280">
                                    {d.name}
                            </text>
                        </g>
                    );
                })}
            </g>
        </svg>
    );
};

export default AdminBarChart;