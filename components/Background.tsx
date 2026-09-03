import React from 'react';

const Background: React.FC = () => {
  const particles = Array.from({ length: 50 });

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#01060b]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_22%,rgba(24,125,190,0.25),transparent_34%),radial-gradient(circle_at_16%_72%,rgba(68,163,211,0.16),transparent_32%),linear-gradient(180deg,#01060b_0%,#04111f_45%,#08243c_72%,#030b14_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-[36%] bg-[linear-gradient(180deg,transparent_0%,rgba(96,199,232,0.06)_48%,rgba(162,207,229,0.10)_58%,rgba(1,6,11,0.9)_100%)]" />
      <div className="absolute left-[-12%] top-[18%] h-[52%] w-[48%] rounded-full bg-cyan-300/[0.05] blur-3xl" />
      <div className="absolute right-[-8%] top-[28%] h-[34%] w-[34%] rounded-full bg-sky-200/[0.05] blur-3xl" />

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
          pointer-events: none;
        }

        .particle {
          position: absolute;
          background-color: rgba(172, 225, 255, 0.48);
          box-shadow: 0 0 10px rgba(115, 198, 255, 0.34);
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
            opacity: .75;
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
