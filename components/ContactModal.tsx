import React, { useState } from 'react';
import { sendLeadNotification } from '../services/leadService';

interface ContactModalProps {
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ onClose }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);
    try {
      await sendLeadNotification({
        type: 'demo',
        name: formState.name.trim(),
        email: formState.email.trim().toLowerCase(),
        company: formState.company.trim(),
        message: formState.message.trim(),
      });
      setSubmitted(true);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleModalContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg bg-[#071a2e] border border-cyan-200/15 rounded-2xl shadow-2xl p-8 relative"
        onClick={handleModalContentClick}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors" aria-label="Close demo request">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {submitted ? (
          <div className="py-8 text-center">
            <div className="mx-auto h-14 w-14 rounded-full border border-cyan-200/30 bg-cyan-300/10 flex items-center justify-center text-cyan-200 text-2xl">✓</div>
            <h2 className="text-2xl font-bold text-white mt-5">Request Received</h2>
            <p className="text-gray-300 mt-3">Thank you. Your information has been sent to the Galaxity AI team.</p>
            <button onClick={onClose} className="mt-6 px-6 py-3 rounded-lg font-bold text-white bg-gradient-to-r from-[#0b5f9c] via-[#157db8] to-[#60c7e8]">Close</button>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-white mb-2">Request a Demo</h2>
            <p className="text-gray-400 mb-6">Tell us about your organization and what you want Enterprise Horizon to solve.</p>
            {error && <div className="mb-4 rounded-lg border border-red-700/70 bg-red-900/30 p-3 text-sm text-red-200">{error}</div>}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" name="name" autoComplete="name" placeholder="Full Name" value={formState.name} onChange={handleInputChange} required className="w-full px-4 py-3 bg-gray-800/50 border-2 border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-300/40 focus:border-cyan-300/40" />
                <input type="email" name="email" autoComplete="email" placeholder="Work Email" value={formState.email} onChange={handleInputChange} required className="w-full px-4 py-3 bg-gray-800/50 border-2 border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-300/40 focus:border-cyan-300/40" />
              </div>
              <input type="text" name="company" autoComplete="organization" placeholder="Company Name" value={formState.company} onChange={handleInputChange} required className="w-full px-4 py-3 bg-gray-800/50 border-2 border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-300/40 focus:border-cyan-300/40" />
              <textarea name="message" placeholder="What are you hoping to solve?" value={formState.message} onChange={handleInputChange} rows={4} className="w-full px-4 py-3 bg-gray-800/50 border-2 border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-300/40 focus:border-cyan-300/40"></textarea>
              <button type="submit" disabled={isSubmitting} className="w-full px-8 py-3 bg-gradient-to-r from-[#0b5f9c] via-[#157db8] to-[#60c7e8] text-white font-bold text-lg rounded-lg shadow-lg hover:brightness-110 transition-all disabled:opacity-60 disabled:cursor-not-allowed">
                {isSubmitting ? 'Sending…' : 'Submit Request'}
              </button>
            </form>
            <p className="mt-5 text-xs leading-relaxed text-slate-500">Privacy: Enterprise Horizon and Galaxity AI do not sell your personal data to anyone. Information submitted here is used to respond to your request and manage the business relationship.</p>
          </>
        )}
      </div>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default ContactModal;
