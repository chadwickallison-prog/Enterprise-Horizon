
import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-8">
      <div className="relative w-24 h-24">
        <div className="absolute border-4 border-t-4 border-gray-600 border-t-[#4080FF] rounded-full w-full h-full animate-spin"></div>
        <div className="absolute border-4 border-t-4 border-gray-700 border-t-[#C0C0D2] rounded-full w-16 h-16 top-4 left-4 animate-spin-reverse"></div>
      </div>
      <h3 className="mt-8 text-2xl font-bold text-white tracking-wider">Analyzing Responses...</h3>
      <p className="text-gray-400 mt-2">The NovaSynapse Engine is generating your Sovereign Intelligence Index.</p>
      <style>{`
        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        .animate-spin-reverse {
          animation: spin-reverse 1.5s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default LoadingSpinner;
