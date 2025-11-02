import React, { useEffect, useState } from 'react';

const ResultsScoreGauge: React.FC<{ score: number }> = ({ score }) => {
  const [displayScore, setDisplayScore] = useState(0);
  const size = 180;
  const strokeWidth = 16;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (displayScore / 100) * circumference;

  useEffect(() => {
    let animationFrameId: number;
    const animateScore = (timestamp: number) => {
      if (displayScore < score) {
        setDisplayScore(prev => Math.min(prev + 1, score));
        animationFrameId = requestAnimationFrame(animateScore);
      }
    };
    animationFrameId = requestAnimationFrame(animateScore);
    return () => cancelAnimationFrame(animationFrameId);
  }, [score, displayScore]);

  const getStrokeColor = (s: number) => {
    if (s < 40) return '#ef4444'; // red
    if (s < 70) return '#facc15'; // yellow
    return '#4ade80'; // green
  };

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          className="text-gray-700"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          stroke={getStrokeColor(displayScore)}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          style={{ transition: 'stroke-dashoffset 0.1s linear' }}
        />
      </svg>
      <div className="absolute flex flex-col items-center justify-center">
        <span className="text-5xl font-black text-white">{displayScore}</span>
        <span className="text-sm font-semibold text-gray-400">/ 100</span>
      </div>
    </div>
  );
};

export default ResultsScoreGauge;
