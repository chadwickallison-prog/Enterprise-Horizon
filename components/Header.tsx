import React, { useRef, useState } from 'react';
import type { User } from '../types';
import { logoBase64 } from '../assets/logo';

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

type NavItem = { name: string; page?: string; href?: string; section?: boolean };

const NavDropdown: React.FC<{
  title: string;
  links: NavItem[];
  onNavigate: (page: string) => void;
}> = ({ title, links, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);

  const openMenu = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setIsOpen(true);
  };

  const scheduleClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setIsOpen(false), 220);
  };

  const selectLink = (page?: string) => {
    if (!page) return;
    setIsOpen(false);
    onNavigate(page);
  };

  return (
    <div
      className="relative"
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
      onFocus={openMenu}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setIsOpen(false);
      }}
    >
      <button
        type="button"
        onClick={() => setIsOpen(open => !open)}
        aria-expanded={isOpen}
        className="px-3 py-2 rounded-md text-sm font-medium flex items-center text-slate-200 hover:text-white hover:bg-white/5 transition-all"
      >
        {title}
        <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ml-1 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full pt-2 w-80 z-50" onMouseEnter={openMenu} onMouseLeave={scheduleClose}>
          <div className="rounded-xl overflow-hidden shadow-2xl border border-cyan-300/20 bg-[#061526]/95 backdrop-blur-xl ring-1 ring-white/5">
            <div className="py-2 max-h-[30rem] overflow-y-auto overscroll-contain">
              {links.map((link, index) => link.section ? (
                <div key={`${link.name}-${index}`} className="px-4 pt-3 pb-1 text-[11px] font-black uppercase tracking-[0.22em] text-cyan-300 border-t border-white/5 first:border-t-0">
                  {link.name}
                </div>
              ) : link.href ? (
                <a
                  key={`${link.href}-${index}`}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-left px-5 py-2.5 text-sm text-slate-200 hover:bg-cyan-300/10 hover:text-cyan-100 transition-colors"
                >
                  {link.name}
                </a>
              ) : (
                <button
                  key={`${link.page}-${index}`}
                  type="button"
                  onClick={() => selectLink(link.page)}
                  className="block w-full text-left px-5 py-2.5 text-sm text-slate-200 hover:bg-cyan-300/10 hover:text-cyan-100 transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Header: React.FC<HeaderProps> = ({ user, onNavigate, onLogout, onSearch, onBack, onForward, canGoBack, canGoForward, onRequestDemo }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const userCloseTimer = useRef<number | null>(null);
  const isAuthenticated = !!user;

  const openUserMenu = () => {
    if (userCloseTimer.current) window.clearTimeout(userCloseTimer.current);
    setIsUserMenuOpen(true);
  };

  const scheduleUserMenuClose = () => {
    if (userCloseTimer.current) window.clearTimeout(userCloseTimer.current);
    userCloseTimer.current = window.setTimeout(() => setIsUserMenuOpen(false), 220);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() && isAuthenticated) {
      onSearch(searchQuery.trim());
      setSearchQuery('');
    } else if (!isAuthenticated) {
      alert('Please log in to use the search feature.');
    }
  };

  const enterpriseSolutionsLinks: NavItem[] = [
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

  const quantumSecurityLinks: NavItem[] = [
    { name: 'Quantum Security Hub', page: 'quantum-cyber-security' },
    { name: 'TERRESTRIAL', section: true },
    { name: 'Quantum Communications', page: 'quantum-communications' },
    { name: 'Quantum Key Distribution (QKD)', page: 'qkd' },
    { name: 'Post-Quantum Cryptography (PQC)', page: 'pqc' },
    { name: 'Hybrid QKD + PQC Architecture', page: 'quantum-resilient-architecture' },
    { name: 'Quantum Random Number Generation', page: 'qrng' },
    { name: 'AI & Quantum Threat Detection', page: 'ai-q-threat-detection' },
    { name: 'CELESTIAL', section: true },
    { name: 'Star Jumper', page: 'starnet-halo-vortex' },
    { name: 'Celestial Quantum Solutions', page: 'quantumlink-graph-nexus' },
    { name: 'Space Quantum Communications', page: 'quantum-communications' },
  ];

  const blockchainLinks: NavItem[] = [
    { name: 'Blockchain Framework', page: 'blockchain' },
    { name: 'Galaxity Token', page: 'galaxity-token' },
    { name: 'Open Galaxity Token Site ↗', href: 'https://galaxity-ai-token.chadwickallison.chatgpt.site/' },
  ];

  const integrationsLinks: NavItem[] = [
    { name: 'Integration Library', page: 'integrations' },
    { name: 'My Integration Plans', page: 'custom-integration-plans' },
  ];

  const pilotsLinks: NavItem[] = [
    { name: 'Custom Initiative Program', page: 'custom-initiative-program' },
    { name: 'Pilot Library', page: 'pilots' },
    { name: 'My Initiative Plans', page: 'custom-initiative-plans' },
  ];

  const reportsLinks: NavItem[] = [
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

  const mobileNavGroups = [
    { title: 'Enterprise Solutions', links: enterpriseSolutionsLinks },
    { title: 'Quantum Security', links: quantumSecurityLinks },
    { title: 'Blockchain', links: blockchainLinks },
    { title: 'Integrations', links: integrationsLinks },
    { title: 'Pilots', links: pilotsLinks },
    { title: 'Reports', links: reportsLinks },
  ];

  const navigateFromMobileMenu = (page?: string) => {
    if (!page) return;
    setIsMobileMenuOpen(false);
    onNavigate(page);
  };

  return (
    <header className="relative z-40 w-full border-b border-sky-200/15 bg-[#02070d]/90 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.34)]">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 gap-4">
          <div className="flex items-center shrink-0">
            <button
              type="button"
              className="flex items-center space-x-3 text-left group"
              onClick={() => onNavigate(isAuthenticated ? 'dashboard' : 'login')}
              aria-label="Enterprise Horizon home"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-sky-200/30 bg-[#061526] shadow-[0_0_26px_rgba(96,199,232,0.2)] transition-colors group-hover:border-sky-200/55">
                <img src={logoBase64} alt="" className="h-9 w-9 object-contain" />
              </span>
              <span className="hidden sm:block">
                <span className="block text-lg font-bold tracking-wide text-white group-hover:text-cyan-100 transition-colors">Enterprise Horizon</span>
                <span className="block text-[10px] uppercase tracking-[0.24em] text-sky-200/70">Galaxity AI</span>
              </span>
            </button>

            <div className="flex items-center ml-3">
              <button onClick={onBack} disabled={!canGoBack} className="p-2 rounded-full text-slate-400 hover:bg-white/5 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors" aria-label="Back">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button onClick={onForward} disabled={!canGoForward} className="p-2 rounded-full text-slate-400 hover:bg-white/5 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors" aria-label="Forward">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>

          <nav className="hidden xl:flex items-center space-x-1">
            <button onClick={() => onNavigate('dashboard')} className="text-slate-200 hover:text-white hover:bg-white/5 transition-all px-3 py-2 rounded-md text-sm font-medium">Dashboard</button>
            <NavDropdown title="Enterprise Solutions" links={enterpriseSolutionsLinks} onNavigate={onNavigate} />
            <NavDropdown title="Quantum Security" links={quantumSecurityLinks} onNavigate={onNavigate} />
            <NavDropdown title="Blockchain" links={blockchainLinks} onNavigate={onNavigate} />
            <NavDropdown title="Integrations" links={integrationsLinks} onNavigate={onNavigate} />
            <NavDropdown title="Pilots" links={pilotsLinks} onNavigate={onNavigate} />
            <NavDropdown title="Reports" links={reportsLinks} onNavigate={onNavigate} />
          </nav>

          <div className="flex items-center space-x-3 shrink-0">
            <form onSubmit={handleSearchSubmit} className="relative hidden 2xl:block">
              <input
                type="search"
                placeholder="Search Horizon..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-52 bg-[#071a2e]/90 border border-cyan-200/15 text-white placeholder-slate-500 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-300/40 focus:border-cyan-300/40"
              />
              <svg className="w-5 h-5 text-cyan-200/50 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </form>

            <button onClick={onRequestDemo} className="hidden 2xl:block bg-gradient-to-r from-[#0b5f9c] via-[#157db8] to-[#60c7e8] hover:brightness-110 text-white transition-all px-4 py-2 rounded-md text-sm font-bold shadow-[0_8px_24px_rgba(21,125,184,0.25)] border border-cyan-100/20">
              Request a Demo
            </button>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(open => !open)}
              className="xl:hidden inline-flex items-center gap-2 rounded-md border border-cyan-200/25 bg-[#071a2e] px-3 py-2 text-sm font-bold text-slate-100 hover:border-cyan-200/50 hover:text-white transition-colors"
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              Menu
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform ${isMobileMenuOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {user ? (
              <div className="relative" onMouseEnter={openUserMenu} onMouseLeave={scheduleUserMenuClose}>
                <button
                  type="button"
                  onClick={() => setIsUserMenuOpen(open => !open)}
                  className="bg-[#071a2e] border border-white/10 rounded-full p-2 text-slate-300 hover:text-white hover:border-cyan-200/30 focus:outline-none focus:ring-2 focus:ring-cyan-200/30"
                  aria-expanded={isUserMenuOpen}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </button>
                {isUserMenuOpen && (
                  <div className="absolute right-0 top-full pt-2 w-52 z-50" onMouseEnter={openUserMenu} onMouseLeave={scheduleUserMenuClose}>
                    <div className="rounded-xl overflow-hidden shadow-2xl bg-[#061526]/95 border border-cyan-300/20 backdrop-blur-xl">
                      <div className="px-4 py-3 text-sm text-white border-b border-white/10">
                        Signed in as <br />
                        <strong className="truncate block text-cyan-100">{user.username}</strong>
                      </div>
                      <button onClick={onLogout} className="block w-full text-left px-4 py-2.5 text-sm text-slate-200 hover:bg-cyan-300/10 hover:text-white">Sign out</button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <button onClick={() => onNavigate('login')} className="text-slate-200 bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white transition-colors px-4 py-2 rounded-md text-sm font-medium">
                Log In
              </button>
            )}
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="xl:hidden border-t border-sky-200/15 border-b border-sky-200/20 bg-[#020b14]/98 shadow-2xl backdrop-blur-xl">
          <div className="mx-auto max-h-[calc(100vh-5rem)] max-w-7xl overflow-y-auto px-4 py-4 sm:px-6">
            <button
              type="button"
              onClick={() => navigateFromMobileMenu('dashboard')}
              className="block w-full border-b border-white/10 px-3 py-3 text-left text-base font-bold text-red-400 hover:bg-cyan-300/10 hover:text-red-300"
            >
              Dashboard
            </button>

            {mobileNavGroups.map((group) => (
              <details key={group.title} className="group border-b border-white/10">
                <summary className="flex cursor-pointer list-none items-center justify-between px-3 py-3 text-base font-bold text-red-400 hover:bg-cyan-300/10 hover:text-red-300 [&::-webkit-details-marker]:hidden">
                  {group.title}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-100 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="pb-2 pl-3">
                  {group.links.map((link, index) => link.section ? (
                    <div key={`${link.name}-${index}`} className="px-4 pb-1 pt-3 text-sm font-black uppercase tracking-[0.22em] text-red-400">
                      {link.name}
                    </div>
                  ) : link.href ? (
                    <a
                      key={`${link.href}-${index}`}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block w-full px-4 py-2.5 text-left text-base text-red-400 hover:bg-cyan-300/10 hover:text-red-300"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <button
                      key={`${link.page}-${index}`}
                      type="button"
                      onClick={() => navigateFromMobileMenu(link.page)}
                      className="block w-full px-4 py-2.5 text-left text-base text-red-400 hover:bg-cyan-300/10 hover:text-red-300"
                    >
                      {link.name}
                    </button>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
