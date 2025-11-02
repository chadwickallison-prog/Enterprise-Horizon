import React, { useState } from 'react';
import type { User } from '../types';

interface HeaderProps {
  user: User | null;
  onNavigate: (page: string) => void;
  onLogout: () => void;
  onSearch: (query: string) => void;
  onBack: () => void;
  onForward: () => void;
  canGoBack: boolean;
  canGoForward: boolean;
  onRequestDemo: () => void;
}

const NavDropdown: React.FC<{
  title: string;
  links: { name: string; page: string }[];
  onNavigate: (page: string) => void;
}> = ({ title, links, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className="text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium flex items-center">
        {title}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="origin-top-right absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 z-30">
          <div className="py-1 max-h-96 overflow-y-auto">
            {links.map(link => (
              <button key={link.page} onClick={() => onNavigate(link.page)} className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};


const Header: React.FC<HeaderProps> = ({ user, onNavigate, onLogout, onSearch, onBack, onForward, canGoBack, canGoForward, onRequestDemo }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const isAuthenticated = !!user;

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() && isAuthenticated) {
      onSearch(searchQuery.trim());
      setSearchQuery('');
    } else if (!isAuthenticated) {
        alert("Please log in to use the search feature.");
    }
  };
  
  const solutionsLinks = [
    { name: 'Solutions Hub', page: 'solutions'},
    { name: 'Starnet Halo Vortex', page: 'starnet-halo-vortex' },
    { name: 'NovaCore Hyperion', page: 'novacore-hyperion' },
    { name: 'OrbitAI NovaSynapse', page: 'orbitai-novasynapse' },
    { name: 'QuantumLink Graph Nexus', page: 'quantumlink-graph-nexus' },
    { name: 'Event Horizon Synoptic', page: 'event-horizon-synoptic' },
    { name: 'Quantum Inference Engine', page: 'quantum-inference-engine' },
    { name: 'Temporal Dynamics Analyzer', page: 'temporal-dynamics-analyzer' },
    { name: 'Contextual Relevance Framework', page: 'contextual-relevance-framework' },
    { name: 'Adaptive Learning System', page: 'adaptive-learning-system' },
    { name: 'Insight Delivery Orchestrator', page: 'insight-delivery-orchestrator' },
  ];
  
  const reportsLinks = [
    { name: 'Reports Hub', page: 'reports' },
    { name: 'Quarterly SII Trends', page: 'quarterly-report' },
    { name: 'Maturity Breakdown', page: 'maturity-report' },
    { name: 'Industry Benchmarks', page: 'benchmark-report' },
    { name: 'Pilot Success Metrics', page: 'pilot-report' },
    { name: 'Risk & Compliance', page: 'risk-report' },
    { name: 'Cost Optimization', page: 'cost-report' },
    { name: 'Automation ROI', page: 'automation-roi-report' },
    { name: 'Security Posture', page: 'security-report' },
    { name: 'Employee Sentiment', page: 'sentiment-report' },
  ];
  
  const integrationsLinks = [
      { name: 'Integration Library', page: 'integrations' },
      { name: 'My Integration Plans', page: 'custom-integration-plans' },
  ];
  
  const pilotsLinks = [
      { name: 'Custom Initiative Program', page: 'custom-initiative-program' },
      { name: 'Pilot Library', page: 'pilots' },
      { name: 'My Initiative Plans', page: 'custom-initiative-plans' },
  ];
  
  const optionsLinks = [
      { name: 'Pricing', page: 'pricing' },
      { name: 'Blockchain Framework', page: 'blockchain' },
      { name: 'Quantum Security', page: 'quantum-cyber-security' },
      { name: 'Support', page: 'support' },
      { name: 'FAQ', page: 'faq' },
  ];

  return (
    <header className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between py-4">
        {/* Left Section: Logo & Nav */}
        <div className="flex items-center">
          <div className="flex items-center space-x-4 cursor-pointer" onClick={() => onNavigate(isAuthenticated ? 'dashboard' : 'login')}>
            <span className="text-xl font-bold text-white">Enterprise Horizon</span>
          </div>

          <div className="flex items-center ml-4">
            <button onClick={onBack} disabled={!canGoBack} className="p-2 rounded-full text-gray-400 hover:bg-gray-700 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={onForward} disabled={!canGoForward} className="p-2 rounded-full text-gray-400 hover:bg-gray-700 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

        {/* Center Nav Links */}
        <nav className="flex items-center space-x-1">
          <button onClick={() => onNavigate('dashboard')} className="text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium">Dashboard</button>
          <NavDropdown title="Solutions" links={solutionsLinks} onNavigate={onNavigate} />
          <NavDropdown title="Reports" links={reportsLinks} onNavigate={onNavigate} />
          <NavDropdown title="Integrations" links={integrationsLinks} onNavigate={onNavigate} />
          <NavDropdown title="Pilots" links={pilotsLinks} onNavigate={onNavigate} />
          <NavDropdown title="Options" links={optionsLinks} onNavigate={onNavigate} />
        </nav>

        {/* Right Section: Search & User */}
        <div className="flex items-center space-x-4">
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="search"
              placeholder="Search Horizon..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#4080FF]"
            />
            <svg className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </form>
            
          <button onClick={onRequestDemo} className="bg-blue-600 hover:bg-blue-700 text-white transition-colors px-4 py-2 rounded-md text-sm font-bold">
            Request a Demo
          </button>

          {user ? (
            <div className="relative">
              <button onMouseEnter={() => setIsUserMenuOpen(true)} onMouseLeave={() => setIsUserMenuOpen(false)} className="bg-gray-800 rounded-full p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </button>
              {isUserMenuOpen && (
                <div onMouseEnter={() => setIsUserMenuOpen(true)} onMouseLeave={() => setIsUserMenuOpen(false)} className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-gray-800 ring-1 ring-black ring-opacity-5 z-30">
                  <div className="px-4 py-2 text-sm text-white border-b border-gray-700">
                    Signed in as <br/>
                    <strong className="truncate">{user.username}</strong>
                  </div>
                  <button onClick={onLogout} className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">
                    Sign out
                  </button>
                </div>
              )}
            </div>
          ) : (
             <button onClick={() => onNavigate('login')} className="text-gray-300 bg-gray-800/50 border border-gray-700 hover:bg-gray-700/50 hover:text-white transition-colors px-4 py-2 rounded-md text-sm font-medium">
              Log In
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;