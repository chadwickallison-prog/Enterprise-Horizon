import React, { useState, useEffect, useLayoutEffect } from 'react';

export interface TourStep {
  target: string;
  title: string;
  content: string;
}

interface OnboardingTourProps {
  steps: TourStep[];
  isOpen: boolean;
  onClose: () => void;
}

const OnboardingTour: React.FC<OnboardingTourProps> = ({ steps, isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [targetRect, setTargetRect] = useState<DOMRect | null>(null);

  const step = steps[currentStep];

  const updatePosition = () => {
    const element = document.querySelector(step.target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
      // Use a timeout to wait for scroll to finish
      setTimeout(() => {
        const rect = element.getBoundingClientRect();
        setTargetRect(rect);
      }, 300); 
    } else {
        // If element not found, skip to next step or close
        handleNext();
    }
  };

  useLayoutEffect(() => {
    if (isOpen && step) {
      updatePosition();
    }
  }, [isOpen, currentStep, step]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('resize', updatePosition);
      return () => window.removeEventListener('resize', updatePosition);
    }
  }, [isOpen, updatePosition]);


  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onClose();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (!isOpen || !targetRect) return null;

  const tooltipStyle: React.CSSProperties = {
    position: 'absolute',
    top: targetRect.bottom + 15,
    left: targetRect.left,
    transform: 'translateX(-50%)',
    marginLeft: targetRect.width / 2,
    maxWidth: '320px',
    zIndex: 10001,
  };
  
  // Adjust position if tooltip goes off-screen
  if (tooltipStyle.left && (tooltipStyle.left as number) < 10) {
      tooltipStyle.left = 10;
      tooltipStyle.transform = 'translateX(0)';
      tooltipStyle.marginLeft = 0;
  }

  return (
    <div className="fixed inset-0 z-[10000]">
      {/* Highlight element with overlay effect */}
      <div
        style={{
          position: 'absolute',
          top: targetRect.top,
          left: targetRect.left,
          width: targetRect.width,
          height: targetRect.height,
          boxShadow: '0 0 0 9999px rgba(0, 0, 0, 0.7)',
          borderRadius: '8px',
          zIndex: 10000,
          transition: 'all 0.3s ease-in-out',
        }}
      />

      {/* Tooltip */}
      <div style={tooltipStyle} className="bg-gray-800 text-white p-6 rounded-lg shadow-2xl border border-gray-600 animate-fade-in w-full">
        <h3 className="text-xl font-bold text-blue-400 mb-2">{step.title}</h3>
        <p className="text-gray-300 mb-4">{step.content}</p>
        <div className="flex justify-between items-center">
          <button onClick={onClose} className="text-sm text-gray-400 hover:text-white">Skip</button>
          <div className="flex items-center space-x-2">
            {currentStep > 0 && (
              <button onClick={handlePrev} className="px-4 py-2 text-sm bg-gray-600 rounded-md hover:bg-gray-500">Prev</button>
            )}
            <button onClick={handleNext} className="px-4 py-2 text-sm bg-blue-600 rounded-md hover:bg-blue-500">
              {currentStep === steps.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
        </div>
        <div className="mt-4 text-center text-xs text-gray-500">
          Step {currentStep + 1} of {steps.length}
        </div>
      </div>
      <style>{`
        @keyframes fade-in {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
            animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default OnboardingTour;
