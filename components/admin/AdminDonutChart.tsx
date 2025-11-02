import React from 'react';

interface ChartData {
    name: string;
    value: number;
    color: string;
}

interface AdminDonutChartProps {
    data: ChartData[];
}

const AdminDonutChart: React.FC<AdminDonutChartProps> = ({ data }) => {
    const size = 200;
    const radius = 80;
    const circumference = 2 * Math.PI * radius;
    const total = data.reduce((sum, d) => sum + d.value, 0);

    let accumulated = 0;

    return (
        <div className="flex items-center">
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
                <g transform={`translate(${size / 2}, ${size / 2}) rotate(-90)`}>
                    {data.map((d, i) => {
                        const dash = (d.value / total) * circumference;
                        const offset = (accumulated / total) * circumference;
                        accumulated += d.value;
                        return (
                            <circle
                                key={i}
                                r={radius}
                                cx="0"
                                cy="0"
                                fill="transparent"
                                stroke={d.color}
                                strokeWidth="20"
                                strokeDasharray={`${dash} ${circumference - dash}`}
                                strokeDashoffset={-offset}
                            />
                        );
                    })}
                </g>
            </svg>
            <div className="ml-6 space-y-2">
                {data.map(d => (
                    <div key={d.name} className="flex items-center text-sm">
                        <span className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: d.color }}></span>
                        <span className="text-gray-600">{d.name}</span>
                        <span className="font-semibold ml-auto text-gray-800">{((d.value / total) * 100).toFixed(0)}%</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminDonutChart;
