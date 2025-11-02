import React, { useState } from 'react';

const SupportPage: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message. Our support team will get back to you shortly.');
    setFormState({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="w-full bg-black/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl p-6 sm:p-8 animate-fade-in">
      <h1 className="text-3xl font-black text-white text-center mb-4">Support Center</h1>
      <p className="text-center text-gray-400 mb-10">We're here to help. Find the resources you need below.</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Form */}
        <div className="lg:col-span-2 bg-gray-800/30 border border-gray-700/50 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="name" placeholder="Your Name" value={formState.name} onChange={handleInputChange} required className="w-full px-4 py-3 bg-gray-800/50 border-2 border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4080FF] focus:border-[#4080FF]" />
              <input type="email" name="email" placeholder="Your Email" value={formState.email} onChange={handleInputChange} required className="w-full px-4 py-3 bg-gray-800/50 border-2 border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4080FF] focus:border-[#4080FF]" />
            </div>
            <input type="text" name="subject" placeholder="Subject" value={formState.subject} onChange={handleInputChange} required className="w-full px-4 py-3 bg-gray-800/50 border-2 border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4080FF] focus:border-[#4080FF]" />
            <textarea name="message" placeholder="How can we help?" value={formState.message} onChange={handleInputChange} required rows={5} className="w-full px-4 py-3 bg-gray-800/50 border-2 border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4080FF] focus:border-[#4080FF]"></textarea>
            <button type="submit" className="w-full px-8 py-3 bg-gradient-to-r from-[#4080FF] to-[#002060] text-white font-bold text-lg rounded-lg shadow-lg hover:opacity-90 transition-opacity">Submit Ticket</button>
          </form>
        </div>

        {/* Side Panel */}
        <div className="space-y-6">
          <div className="bg-gray-800/30 border border-gray-700/50 rounded-lg p-6">
            <h3 className="font-bold text-white text-lg mb-4">Quick Links</h3>
            <button onClick={() => onNavigate('solutions')} className="text-blue-400 hover:underline w-full text-left">› Solutions Documentation</button>
          </div>
          <div className="bg-gray-800/30 border border-gray-700/50 rounded-lg p-6">
            <h3 className="font-bold text-white text-lg mb-4">Contact Information</h3>
            <p className="text-gray-400"><strong>Email:</strong> support@enterprisehorizon.io</p>
            <p className="text-gray-400"><strong>Phone:</strong> +1 (800) 555-0199</p>
          </div>
          <div className="bg-gray-800/30 border border-gray-700/50 rounded-lg p-6">
            <h3 className="font-bold text-white text-lg mb-4">System Status</h3>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-green-400 font-semibold">All Systems Operational</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;