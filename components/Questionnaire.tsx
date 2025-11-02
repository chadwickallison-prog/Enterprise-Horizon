import React, { useState, useEffect, useMemo } from 'react';
import { ASSESSMENT_SECTIONS } from '../assessmentData';
import type { Answers, Question } from '../types';

const SpeakerWaveIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
    </svg>
);

const SpeakerXMarkIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
    </svg>
);

interface QuestionnaireProps {
  onSubmit: (answers: Answers) => void;
  error?: string;
  isTtsEnabled: boolean;
  setIsTtsEnabled: (enabled: boolean) => void;
  onNavigate: (page: string) => void;
}

const ASSESSMENT_ANSWERS_KEY = 'eh-assessment-answers';

const CheckIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${className}`} viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);

const Questionnaire: React.FC<QuestionnaireProps> = ({ onSubmit, error, isTtsEnabled, setIsTtsEnabled, onNavigate }) => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [saveStatus, setSaveStatus] = useState('');

  // Derived state using useMemo for performance
  const { unansweredQuestions, completedSections, isCompleted } = useMemo(() => {
    const allQuestions = ASSESSMENT_SECTIONS.flatMap(s => s.questions);
    const unanswered = allQuestions.filter(q => !answers[q.id] || answers[q.id].trim() === '');
    const completed = ASSESSMENT_SECTIONS.map(section => 
        section.questions.every(q => answers[q.id] && answers[q.id].trim() !== '')
    );
    return {
        unansweredQuestions: unanswered,
        completedSections: completed,
        isCompleted: unanswered.length === 0
    };
  }, [answers]);

  const unansweredIds = useMemo(() => unansweredQuestions.map(q => q.id), [unansweredQuestions]);

  const currentSection = ASSESSMENT_SECTIONS[currentSectionIndex];
  const totalSections = ASSESSMENT_SECTIONS.length;
  const overallProgress = ((completedSections.filter(Boolean).length) / totalSections) * 100;

  useEffect(() => {
    const savedAnswers = localStorage.getItem(ASSESSMENT_ANSWERS_KEY);
    if (savedAnswers) {
        try {
            setAnswers(JSON.parse(savedAnswers));
        } catch (e) {
            console.error("Failed to parse saved answers", e);
        }
    }
  }, []);

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers(prev => {
        const newAnswers = { ...prev, [questionId]: value };
        localStorage.setItem(ASSESSMENT_ANSWERS_KEY, JSON.stringify(newAnswers));
        if (saveStatus === '') {
            setSaveStatus('Saved!');
            setTimeout(() => setSaveStatus(''), 2000);
        }
        return newAnswers;
    });
  };

  const handleNext = () => {
    if (currentSectionIndex < totalSections - 1) {
      setCurrentSectionIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentSectionIndex > 0) {
      setCurrentSectionIndex(prev => prev + 1);
    }
  };

  const handleSectionNav = (index: number) => {
    setCurrentSectionIndex(index);
  };

  const handleReview = () => {
    if (unansweredQuestions.length > 0) {
        const firstUnansweredId = unansweredQuestions[0].id;
        const sectionIndex = ASSESSMENT_SECTIONS.findIndex(s => s.questions.some(q => q.id === firstUnansweredId));
        if (sectionIndex !== -1) {
            setCurrentSectionIndex(sectionIndex);
        }
    }
  };

  const handleSaveAndExit = () => {
    onNavigate('dashboard');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isCompleted) {
      onSubmit(answers);
    }
  };
  
  const speakText = (text: string) => {
    if (isTtsEnabled && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleToggleTts = () => {
    if (isTtsEnabled) {
      window.speechSynthesis.cancel();
    }
    setIsTtsEnabled(!isTtsEnabled);
  };

  const renderQuestion = (question: Question) => {
    const { id, text, type, options } = question;
    const value = answers[id] || '';
    const isError = unansweredIds.includes(id);

    if (type === 'percentage') {
      return (
        <div key={id} className={`p-4 rounded-lg transition-all`}>
          <label className={`block text-lg mb-2 ${isError ? 'text-yellow-300' : 'text-gray-300'}`} onMouseEnter={() => speakText(text)}>{text}</label>
          <div className="flex items-center space-x-4">
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={value}
              onChange={(e) => handleAnswerChange(id, e.target.value)}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#4080FF]"
            />
            <span className="text-white font-semibold w-12 text-center">{value || 0}%</span>
          </div>
        </div>
      );
    }

    if (type === 'multiple-choice' && options) {
      return (
        <div key={id} className={`p-4 rounded-lg transition-all`}>
          <label className={`block text-lg mb-3 ${isError ? 'text-yellow-300' : 'text-gray-300'}`} onMouseEnter={() => speakText(text)}>{text}</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {options.map(option => (
              <button
                key={option}
                type="button"
                onMouseEnter={() => speakText(option)}
                onClick={() => handleAnswerChange(id, option)}
                className={`w-full p-4 rounded-lg text-left transition-all duration-200 border-2 ${
                  value === option
                    ? 'bg-[#4080FF]/20 border-[#4080FF] text-white'
                    : `bg-gray-800/50 border-gray-700 hover:border-[#4080FF]/50 text-gray-300 ${isError ? 'ring-2 ring-yellow-500/50' : ''}`
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full bg-black/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl p-6 sm:p-8 animate-fade-in flex flex-col relative">
      <button
        onClick={handleToggleTts}
        title={isTtsEnabled ? 'Disable Text-to-Speech' : 'Enable Text-to-Speech'}
        className={`absolute top-6 right-6 z-10 p-2 rounded-full transition-colors ${
          isTtsEnabled ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
        }`}
      >
        {isTtsEnabled ? <SpeakerWaveIcon className="h-6 w-6" /> : <SpeakerXMarkIcon className="h-6 w-6" />}
      </button>
      
      <div className="mb-6">
        <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
          <div
            className="bg-gradient-to-r from-[#002060] to-[#4080FF] h-2.5 rounded-full transition-all duration-500"
            style={{ width: `${overallProgress}%` }}
          ></div>
        </div>
        <div className="border-b border-gray-700/50">
          <nav className="-mb-px flex space-x-4 overflow-x-auto pb-2" aria-label="Tabs">
            {ASSESSMENT_SECTIONS.map((section, index) => {
              const isCurrent = index === currentSectionIndex;
              const isSectionCompleted = completedSections[index];
              return (
                <button
                  key={section.title}
                  onClick={() => handleSectionNav(index)}
                  className={`whitespace-nowrap flex items-center py-3 px-1 border-b-2 font-medium text-sm transition-colors ${
                    isCurrent
                      ? 'border-blue-500 text-blue-400'
                      : 'border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-500'
                  }`}
                >
                  {isSectionCompleted && <CheckIcon className="text-green-500 mr-2" />}
                  {section.title}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
      
      <div className="flex-grow">
        <h3 className="text-2xl font-bold text-white mb-6 text-center">{currentSection.title}</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
            {currentSection.questions.map(renderQuestion)}
        </form>
      </div>
      
      <div className="pt-6 border-t border-gray-700/50 mt-8 space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-center min-h-[56px]">
          <button
            type="button"
            onClick={handlePrev}
            disabled={currentSectionIndex === 0}
            className="px-6 py-2 bg-gray-700 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 w-full sm:w-auto mb-4 sm:mb-0"
          >
            Previous
          </button>
          
          {currentSectionIndex < totalSections - 1 ? (
            <button
              type="button"
              onClick={handleNext}
              className="px-6 py-2 bg-[#4080FF] text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 transition-colors duration-200 w-full sm:w-auto"
            >
              Next Section
            </button>
          ) : (
            isCompleted ? (
              <button
                type="button"
                onClick={handleSubmit}
                className="px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200 w-full sm:w-auto"
              >
                Submit for Analysis
              </button>
            ) : (
              <div className="text-center w-full sm:w-auto">
                <p className="text-yellow-400 mb-2">{unansweredQuestions.length} unanswered questions remaining.</p>
                <button type="button" onClick={handleReview} className="px-6 py-2 bg-yellow-600 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition-colors duration-200 w-full sm:w-auto">
                    Review Unanswered
                </button>
              </div>
            )
          )}
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 pt-4 border-t border-gray-800">
            <button type="button" onClick={handleSaveAndExit} className="px-6 py-2 text-sm bg-gray-600/50 text-gray-300 font-semibold rounded-lg hover:bg-gray-600 transition-colors w-full sm:w-auto">Save & Exit</button>
            <div className="h-5 text-sm text-green-400 transition-opacity duration-500">
                {saveStatus}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;