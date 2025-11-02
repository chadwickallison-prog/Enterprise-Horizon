import React from 'react';

const PricingCard: React.FC<{
  tier: string;
  price: string;
  description: string;
  features: string[];
  ctaText: string;
  onCtaClick: () => void;
  isFeatured?: boolean;
}> = ({ tier, price, description, features, ctaText, onCtaClick, isFeatured }) => (
  <div className={`border-2 rounded-2xl p-6 flex flex-col h-full ${isFeatured ? 'border-blue-500 bg-blue-900/20' : 'border-gray-700 bg-gray-800/30'}`}>
    <h3 className="text-2xl font-bold text-white">{tier}</h3>
    <p className="text-gray-400 mt-2">{description}</p>
    <div className="my-6">
      <span className="text-4xl font-extrabold text-white">{price}</span>
      <span className="text-gray-400 text-sm">/yr</span>
    </div>
    <ul className="space-y-3 text-gray-300 flex-grow">
      {features.map((feature, i) => (
        <li key={i} className="flex items-start">
          <svg className="w-5 h-5 mr-2 text-green-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <button
      onClick={onCtaClick}
      className={`w-full mt-8 py-3 font-bold rounded-lg transition-transform transform hover:scale-105 ${isFeatured ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-700 hover:bg-gray-600 text-white'}`}
    >
      {ctaText}
    </button>
  </div>
);


const PricingPage: React.FC<{ onNavigate: (page: string) => void, onContact: () => void }> = ({ onNavigate, onContact }) => {
  
  const handleStartAssessment = () => {
      // Here you would implement logic for a "Lite" assessment
      alert("Starting the Discovery Lite Assessment...");
      onNavigate('assessment');
  }

  return (
    <div className="w-full bg-black/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl p-6 sm:p-8 animate-fade-in text-gray-300">
      <h1 className="text-3xl font-black text-white text-center mb-2">Flexible Plans for Every Enterprise</h1>
      <p className="text-center text-gray-400 mb-12">Start with a pilot, scale with a subscription, and accelerate with results.</p>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <PricingCard 
            tier="Discovery Lite"
            price="$25k+"
            description="A rapid, fixed-cost engagement to benchmark your environment."
            features={[
                "200-system sample",
                "One data stream",
                "Assessment report",
                "Risk matrix",
                "Readiness heatmap"
            ]}
            ctaText="Start Lite Assessment"
            onCtaClick={handleStartAssessment}
        />
        <PricingCard 
            tier="Strategic Pilot"
            price="$75k+"
            description="A comprehensive pilot for full observability and AI testbeds."
            features={[
                "Up to 1,000 systems",
                "Full environment observability",
                "AI-prediction testbed",
                "ROI Modeling",
                "Deducted from full deployment"
            ]}
            ctaText="Contact Sales"
            onCtaClick={onContact}
            isFeatured={true}
        />
        <PricingCard 
            tier="Sovereign Subscription"
            price="$250k+"
            description="Continuous access to the full Enterprise Horizon platform."
            features={[
                "Full-stack monitoring",
                "Predictive analytics",
                "Unified dashboard",
                "PQC security & AI orchestration",
                "24/7 global support"
            ]}
            ctaText="Contact Sales"
            onCtaClick={onContact}
        />
      </div>

       <div className="mt-16 text-center max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Add-On Modules & Outcome-Based Models</h2>
            <p className="text-gray-400">Customize your plan with powerful add-on modules like the <strong className="text-white">NovaSynapse AI Engine</strong> or link payments to performance with our <strong className="text-white">Outcome-Based Accelerator (OBA)</strong> contracts. For a custom quote or to discuss OBA metrics, please get in touch with our sales team.</p>
             <button onClick={onContact} className="mt-6 px-8 py-3 bg-gray-700/50 border border-gray-600 text-white font-bold rounded-lg shadow-lg hover:bg-gray-700 transition-colors">
                Design a Custom Plan
            </button>
       </div>

    </div>
  );
};

export default PricingPage;