import React from 'react';
import type { SloMetric } from '../../types';

const AdminSloChart: React.FC<{ metric: SloMetric }> = ({ metric }) => {
    const { name, slo, data } = metric;
    const latestValue = data[data.length - 1].value;
    const isBreached = name.includes('Latency') ? latestValue > slo : latestValue < slo;

    const width = 200;
    const height = 80;
    const values = data.map(d => d.value);
    const min = Math.min(...values, slo);
    const max = Math.max(...values, slo);
    const range = max - min === 0 ? 1 : max - min;

    const pathData = data.map((d, i) => 
        `${(i / (data.length - 1)) * width},${height - ((d.value - min) / range) * height}`
    ).join(' ');

    const sloLineY = height - ((slo - min) / range) * height;

    const valueColor = isBreached ? 'text-red-600' : 'text-green-600';

    return (
        <div>
            <div className="flex justify-between items-baseline">
                <h4 className="text-sm font-medium text-gray-600">{name}</h4>
                <div className={`text-xl font-bold ${valueColor}`}>{latestValue.toFixed(name.includes('%') ? 2 : 0)}</div>
            </div>
            <div className="relative mt-2">
                <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-20">
                    <polyline
                        fill="none"
                        stroke="#60A5FA"
                        strokeWidth="2"
                        points={pathData}
                    />
                    <line
                        x1="0"
                        y1={sloLineY}
                        x2={width}
                        y2={sloLineY}
                        stroke="#EF4444"
                        strokeWidth="1"
                        strokeDasharray="3 3"
                    />
                </svg>
            </div>
            <div className="text-xs text-gray-500 mt-1">SLO: {name.includes('Latency') ? '<' : '>'} {slo}</div>
        </div>
    );
};

export default AdminSloChart;