import React from 'react';

interface ChartData {
    name: string;
    value: number;
}

interface AdminLineChartProps {
    data: ChartData[];
    data2?: ChartData[];
}

const AdminLineChart: React.FC<AdminLineChartProps> = ({ data, data2 }) => {
    const width = 500;
    const height = 250;
    const margin = { top: 20, right: 20, bottom: 50, left: 40 };
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;

    const allValues = [...data.map(d => d.value), ...(data2 ? data2.map(d => d.value) : [])];
    const maxValue = Math.max(...allValues, 0);
    
    const getPoints = (dataset: ChartData[]) => dataset.map((d, i) => {
        const x = (i / (dataset.length - 1)) * chartWidth;
        const y = chartHeight - (d.value / maxValue) * chartHeight;
        return `${x},${y}`;
    }).join(' ');
    
    const points1 = getPoints(data);
    const points2 = data2 ? getPoints(data2) : '';

    return (
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
            <g transform={`translate(${margin.left}, ${margin.top})`}>
                {/* Y Axis */}
                <line x1="0" y1="0" x2="0" y2={chartHeight} stroke="#D1D5DB" />
                <text x="-10" y="0" dy="0.3em" textAnchor="end" fontSize="12" fill="#6B7280">{maxValue}</text>
                <text x="-10" y={chartHeight} dy="0.3em" textAnchor="end" fontSize="12" fill="#6B7280">0</text>
                
                {/* X Axis */}
                <line x1="0" y1={chartHeight} x2={chartWidth} y2={chartHeight} stroke="#D1D5DB" />
                {data.map((d, i) => (
                    <text key={d.name} x={(i / (data.length - 1)) * chartWidth} y={chartHeight + 20} textAnchor="middle" fontSize="12" fill="#6B7280">{d.name}</text>
                ))}

                <polyline
                    fill="none"
                    stroke="#3B82F6"
                    strokeWidth="2"
                    points={points1}
                />
                {points2 && (
                    <polyline
                        fill="none"
                        stroke="#60C7E8"
                        strokeWidth="2"
                        points={points2}
                    />
                )}
                 {data2 && (
                    <g transform={`translate(0, ${chartHeight + 35})`}>
                        <rect x="0" y="0" width="10" height="10" fill="#3B82F6" />
                        <text x="15" y="9" fontSize="12" fill="#6B7280">New Users</text>
                        <rect x="100" y="0" width="10" height="10" fill="#60C7E8" />
                        <text x="115" y="9" fontSize="12" fill="#6B7280">Assessments</text>
                    </g>
                )}
            </g>
        </svg>
    );
};

export default AdminLineChart;