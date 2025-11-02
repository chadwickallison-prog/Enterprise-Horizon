
import React from 'react';

const Background: React.FC = () => {
  const particles = Array.from({ length: 50 });

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#000814] via-[#001428] to-[#002060] opacity-50"></div>
      <div className="particles">
        {particles.map((_, i) => (
          <div key={i} className="particle" />
        ))}
      </div>
      <style>{`
        .particles {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        
        .particle {
          position: absolute;
          background-color: rgba(64, 128, 255, 0.5);
          border-radius: 50%;
          animation: move linear infinite;
          opacity: 0;
        }
        
        @keyframes move {
          0% {
            transform: translate(var(--x-start), var(--y-start));
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translate(var(--x-end), var(--y-end));
            opacity: 0;
          }
        }
        
        ${particles.map((_, i) => `
          .particle:nth-child(${i + 1}) {
            --size: ${Math.random() * 2 + 1}px;
            width: var(--size);
            height: var(--size);
            --x-start: ${Math.random() * 100}vw;
            --y-start: ${Math.random() * 100}vh;
            --x-end: ${Math.random() * 100}vw;
            --y-end: ${Math.random() * 100}vh;
            animation-duration: ${Math.random() * 20 + 15}s;
            animation-delay: -${Math.random() * 20}s;
          }
        `).join('')}
      `}</style>
    </div>
  );
};

export default Background;
