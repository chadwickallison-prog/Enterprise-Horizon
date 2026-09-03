import React from 'react';

interface DomainScore {
  domain: string;
  score: number;
}

interface ResultsDomainScoreChartProps {
  scores: DomainScore[];
}

const ResultsDomainScoreChart: React.FC<ResultsDomainScoreChartProps> = ({ scores }) => {
  const size = 300;
  const center = size / 2;
  const numLevels = 5;
  const numAxes = scores.length;
  const angleSlice = (2 * Math.PI) / numAxes;

  // Generate the concentric polygons (web)
  const levels = Array.from({ length: numLevels }).map((_, i) => {
    const radius = (center * 0.8) * ((i + 1) / numLevels);
    const points = Array.from({ length: numAxes }).map((_, j) => {
      const x = center + radius * Math.cos(angleSlice * j - Math.PI / 2);
      const y = center + radius * Math.sin(angleSlice * j - Math.PI / 2);
      return `${x},${y}`;
    }).join(' ');
    return <polygon key={i} points={points} stroke="#4A5568" strokeWidth="1" fill="none" />;
  });

  // Generate the axes lines and labels
  const axes = scores.map((score, i) => {
    const radius = center * 0.9;
    const x1 = center;
    const y1 = center;
    const x2 = center + radius * Math.cos(angleSlice * i - Math.PI / 2);
    const y2 = center + radius * Math.sin(angleSlice * i - Math.PI / 2);

    const labelRadius = center;
    const lx = center + labelRadius * Math.cos(angleSlice * i - Math.PI / 2);
    const ly = center + labelRadius * Math.sin(angleSlice * i - Math.PI / 2);
    
    let textAnchor: "middle" | "start" | "end" = "middle";
    if (lx < center - 1) textAnchor = "end";
    if (lx > center + 1) textAnchor = "start";

    return (
      <g key={i}>
        <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#4A5568" strokeWidth="1" />
        <text
          x={lx}
          y={ly}
          fill="#A0AEC0"
          fontSize="10"
          fontWeight="bold"
          textAnchor={textAnchor}
          dy="0.35em"
        >
          {score.domain.replace(/&/g, ' & ')}
        </text>
      </g>
    );
  });

  // Generate the data polygon
  const dataPoints = scores.map((score, i) => {
    const radius = (center * 0.8) * (score.score / 100);
    const x = center + radius * Math.cos(angleSlice * i - Math.PI / 2);
    const y = center + radius * Math.sin(angleSlice * i - Math.PI / 2);
    return `${x},${y}`;
  }).join(' ');

  return (
    <svg width="100%" height="100%" viewBox={`0 0 ${size} ${size}`}>
      {levels}
      {axes}
      <polygon points={dataPoints} stroke="#60C7E8" strokeWidth="2" fill="rgba(96, 199, 232, 0.22)" />
    </svg>
  );
};

export default ResultsDomainScoreChart;
