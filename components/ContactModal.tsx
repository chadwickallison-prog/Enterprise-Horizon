import React, { useState } from 'react';

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to a backend service
    console.log('Form submitted:', formState);
    alert('Thank you for your interest! Our team will be in touch with you shortly.');
    onClose();
  };
  
  // Prevents modal from closing when clicking inside
  const handleModalContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-lg bg-[#0d1b2a] border border-gray-700/50 rounded-2xl shadow-2xl p-8 relative"
        onClick={handleModalContentClick}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-2xl font-bold text-white mb-2">Request a Demo</h2>
        <p className="text-gray-400 mb-6">Let's discuss how Enterprise Horizon can transform your business.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" name="name" placeholder="Full Name" value={formState.name} onChange={handleInputChange} required className="w-full px-4 py-3 bg-gray-800/50 border-2 border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4080FF] focus:border-[#4080FF]" />
            <input type="email" name="email" placeholder="Work Email" value={formState.email} onChange={handleInputChange} required className="w-full px-4 py-3 bg-gray-800/50 border-2 border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4080FF] focus:border-[#4080FF]" />
          </div>
          <input type="text" name="company" placeholder="Company Name" value={formState.company} onChange={handleInputChange} required className="w-full px-4 py-3 bg-gray-800/50 border-2 border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4080FF] focus:border-[#4080FF]" />
          <textarea name="message" placeholder="What are you hoping to solve?" value={formState.message} onChange={handleInputChange} rows={4} className="w-full px-4 py-3 bg-gray-800/50 border-2 border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4080FF] focus:border-[#4080FF]"></textarea>
          <button type="submit" className="w-full px-8 py-3 bg-gradient-to-r from-[#4080FF] to-[#002060] text-white font-bold text-lg rounded-lg shadow-lg hover:opacity-90 transition-opacity">Submit Request</button>
        </form>
      </div>
       <style>{`
        @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        .animate-fade-in {
            animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ContactModal;
