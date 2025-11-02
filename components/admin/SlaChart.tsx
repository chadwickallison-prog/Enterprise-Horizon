import React from 'react';

interface SlaChartProps {
    title: string;
    data: { timestamp: number; value: number }[];
    color: string;
    yDomain?: [number, number];
}

const SlaChart: React.FC<SlaChartProps> = ({ title, data, color, yDomain }) => {
    const width = 300;
    const height = 150;
    const margin = { top: 20, right: 10, bottom: 30, left: 40 };

    const minTimestamp = Math.min(...data.map(d => d.timestamp));
    const maxTimestamp = Math.max(...data.map(d => d.timestamp));

    const yMin = yDomain ? yDomain[0] : Math.min(...data.map(d => d.value)) * 0.95;
    const yMax = yDomain ? yDomain[1] : Math.max(...data.map(d => d.value)) * 1.05;

    const xScale = (timestamp: number) => {
        return margin.left + ((timestamp - minTimestamp) / (maxTimestamp - minTimestamp)) * (width - margin.left - margin.right);
    };

    const yScale = (value: number) => {
        return height - margin.bottom - ((value - yMin) / (yMax - yMin)) * (height - margin.top - margin.bottom);
    };

    const pathData = data.map(d => `${xScale(d.timestamp)},${yScale(d.value)}`).join(' L ');
    const areaData = `M ${xScale(minTimestamp)},${height - margin.bottom} L ${pathData} L ${xScale(maxTimestamp)},${height - margin.bottom} Z`;

    return (
        <div>
            <h4 className="text-sm font-medium text-gray-700">{title}</h4>
            <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
                {/* Y-axis labels */}
                <text x={margin.left - 5} y={margin.top} textAnchor="end" dy="0.3em" fontSize="10" fill="#6b7280">{yMax.toFixed(yDomain && yDomain[0] === 99.8 ? 2 : 0)}</text>
                <text x={margin.left - 5} y={height - margin.bottom} textAnchor="end" dy="0.3em" fontSize="10" fill="#6b7280">{yMin.toFixed(0)}</text>

                {/* Grid lines */}
                <line x1={margin.left} y1={margin.top} x2={width - margin.right} y2={margin.top} stroke="#e5e7eb" strokeWidth="1" />
                <line x1={margin.left} y1={height - margin.bottom} x2={width - margin.right} y2={height - margin.bottom} stroke="#e5e7eb" strokeWidth="1" />

                <path d={areaData} fill={color} fillOpacity="0.1" />
                <path d={`M ${pathData}`} stroke={color} strokeWidth="2" fill="none" />
            </svg>
        </div>
    );
};

export default SlaChart;
