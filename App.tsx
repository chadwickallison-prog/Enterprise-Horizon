import React, { useState, useEffect, useCallback } from 'react';
import {
  loginUser,
  signUpUser,
  forgotPassword,
  analyzeAssessment,
  searchPlatform,
  saveCustomInitiative,
  saveIntegrationPlan,
  getLastAssessmentReport,
} from './services/apiService';
import { getSessionUser, setSessionUser, clearSessionUser } from './services/userService';
import type { User, Answers, AssessmentReport, SignUpData } from './types';

// Components
import Background from './components/Background';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import DashboardPage from './components/DashboardPage';
import Questionnaire from './components/Questionnaire';
import LoadingSpinner from './components/LoadingSpinner';
import ResultsPage from './components/ResultsPage';
import SearchResultsPage from './components/SearchResultsPage';
import IntegrationsPage from './components/IntegrationsPage';
import PilotPage from './components/PilotPage';
import ReportsPage from './components/ReportsPage';
import CrmIntegrationPage from './components/CrmIntegrationPage';
import ErpIntegrationPage from './components/ErpIntegrationPage';
import HrisIntegrationPage from './components/HrisIntegrationPage';
import ServiceNowIntegrationPage from './components/ServiceNowIntegrationPage';
import CustomConnectorsPage from './components/CustomConnectorsPage';
import QuarterlyReportPage from './components/QuarterlyReportPage';
import MaturityReportPage from './components/MaturityReportPage';
import BenchmarkReportPage from './components/BenchmarkReportPage';
import PilotReportPage from './components/PilotReportPage';
import RiskAndComplianceReportPage from './components/RiskAndComplianceReportPage';
import CostOptimizationReportPage from './components/CostOptimizationReportPage';
import AutomationRoiReportPage from './components/AutomationRoiReportPage';
import SecurityPostureReportPage from './components/SecurityPostureReportPage';
import EmployeeSentimentReportPage from './components/EmployeeSentimentReportPage';

import StarnetHaloVortexPage from './components/StarnetHaloVortexPage';
import NovaCoreHyperionPage from './components/NovaCoreHyperionPage';
import OrbitAINovaSynapsePage from './components/OrbitAINovaSynapsePage';
import QuantumLinkGraphNexusPage from './components/QuantumLinkGraphNexusPage';
import EventHorizonSynopticPage from './components/EventHorizonSynopticPage';
import QuantumInferenceEnginePage from './components/QuantumInferenceEnginePage';
import TemporalDynamicsAnalyzerPage from './components/TemporalDynamicsAnalyzerPage';
import ContextualRelevanceFrameworkPage from './components/ContextualRelevanceFrameworkPage';
import AdaptiveLearningSystemPage from './components/AdaptiveLearningSystemPage';
import InsightDeliveryOrchestratorPage from './components/InsightDeliveryOrchestratorPage';
import BlockchainPage from './components/BlockchainPage';
import SupportPage from './components/SupportPage';
import PricingPage from './components/PricingPage';
import QuantumCyberSecurityPage from './components/QuantumCyberSecurityPage';
import PostQuantumCryptographyPage from './components/PostQuantumCryptographyPage';
import QuantumKeyDistributionPage from './components/QuantumKeyDistributionPage';
import QuantumRandomNumberGeneratorsPage from './components/QuantumRandomNumberGeneratorsPage';
import AiQuantumThreatDetectionPage from './components/AiQuantumThreatDetectionPage';
import QuantumResilientArchitecturePage from './components/QuantumResilientArchitecturePage';
import Chapter1_IntroToGalaxityPage from './components/Chapter1_IntroToGalaxityPage';
import Chapter2_QuantumEnhancedFrameworkPage from './components/Chapter2_QuantumEnhancedFrameworkPage';
import Chapter3_DecentralizedBridgesPage from './components/Chapter3_DecentralizedBridgesPage';
import Chapter4_AIIntegrationPage from './components/Chapter4_AIIntegrationPage';
import Chapter5_SpaceEconomyPage from './components/Chapter5_SpaceEconomyPage';
import Chapter6_NftAndDeFiPage from './components/Chapter6_NftAndDeFiPage';
import Chapter7_AdvancedSecurityPage from './components/Chapter7_AdvancedSecurityPage';
import Chapter8_ModularBlockchainPage from './components/Chapter8_ModularBlockchainPage';
import Chapter9_AIDrivenGovernancePage from './components/Chapter9_AIDrivenGovernancePage';
import Chapter10_FutureVisionPage from './components/Chapter10_FutureVisionPage';
import SolutionsPage from './components/SolutionsPage';
import CombinePilotsPage from './components/CombinePilotsPage';
import CustomInitiativesPage from './components/CustomInitiativesPage';
import CombineIntegrationsPage from './components/CombineIntegrationsPage';
import CustomIntegrationPlansPage from './components/CustomIntegrationPlansPage';
import ContactModal from './components/ContactModal';
import FaqPage from './components/FaqPage';
import CustomInitiativeProgramPage from './components/CustomInitiativeProgramPage';
import AdminApp from './AdminApp';


type AppState = 'auth' | 'loading' | 'dashboard' | 'assessment' | 'results' | 'search-results' | 'page';
const REMEMBERED_EMAIL_KEY = 'enterprise-horizon-remembered-email';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [appState, setAppState] = useState<AppState>('loading');
  const [currentPage, setCurrentPage] = useState<string>('dashboard');
  const [authError, setAuthError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [assessmentResults, setAssessmentResults] = useState<AssessmentReport | null>(null);
  const [searchResults, setSearchResults] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const [pilotsToCombine, setPilotsToCombine] = useState<string[]>([]);
  const [integrationsToCombine, setIntegrationsToCombine] = useState<string[]>([]);

  const [isTtsEnabled, setIsTtsEnabled] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const [history, setHistory] = useState<string[]>(['dashboard']);
  const [historyIndex, setHistoryIndex] = useState(0);
  
  const [portal, setPortal] = useState<'customer' | 'admin'>('customer');

  useEffect(() => {
    const sessionUser = getSessionUser();
    if (sessionUser) {
      setUser(sessionUser);
      setAppState('dashboard');
      setCurrentPage('dashboard');
    } else {
      setAppState('auth');
    }
  }, []);


  const handleLogin = async (email: string, password: string, remember: boolean) => {
    setIsLoading(true);
    setAuthError('');
    try {
      const loggedInUser = await loginUser(email, password);
      setUser(loggedInUser);
      setSessionUser(loggedInUser);
      setAppState('dashboard');
      setCurrentPage('dashboard');
      if (remember) {
        localStorage.setItem(REMEMBERED_EMAIL_KEY, email);
      } else {
        localStorage.removeItem(REMEMBERED_EMAIL_KEY);
      }
    } catch (error) {
      setAuthError((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUp = async (data: SignUpData, remember: boolean) => {
    setIsLoading(true);
    setAuthError('');
    try {
      const newUser = await signUpUser(data);
      setUser(newUser);
      setSessionUser(newUser);
      setAppState('dashboard');
      setCurrentPage('dashboard');
      if (remember) {
        localStorage.setItem(REMEMBERED_EMAIL_KEY, data.email);
      }
    } catch (error) {
      setAuthError((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = async (email: string, recoveryPhrase: string, newPass: string) => {
    setIsLoading(true);
    setAuthError('');
    try {
      await forgotPassword(email, recoveryPhrase, newPass);
      alert("Password has been reset successfully. Please log in with your new password.");
    } catch (error) {
      setAuthError((error as Error).message);
      throw error; // Re-throw to be caught in the component
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    clearSessionUser();
    setUser(null);
    setAppState('auth');
    setHistory(['dashboard']);
    setHistoryIndex(0);
  };
  
  const handleNavigate = useCallback((page: string) => {
    if (page === 'assessment') {
        if (!user) { // Assessment requires login
            alert("Please log in to start an assessment.");
            return;
        }
        setAppState('assessment');
    } else if (page === 'login') {
        setAppState('auth');
        return; // Don't add auth screen to history
    }
    else {
        // For other pages that might require auth
        const protectedPages = ['reports', 'maturity-report', 'custom-initiative-plans', 'custom-integration-plans'];
        if (protectedPages.includes(page) && !user) {
            alert("You must be logged in to view this page.");
            return;
        }
        setAppState('page');
        setCurrentPage(page);
    }

    if (page !== history[historyIndex]) {
        const newHistory = history.slice(0, historyIndex + 1);
        newHistory.push(page);
        setHistory(newHistory);
        setHistoryIndex(newHistory.length - 1);
    }
  }, [history, historyIndex, user]);

  const handleBack = () => {
    if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        const page = history[newIndex];
        if (page === 'assessment') {
            setAppState('assessment');
        } else if (page === 'dashboard' && appState !== 'dashboard') {
            setAppState('dashboard');
            setCurrentPage('dashboard');
        } else {
            setAppState('page');
            setCurrentPage(page);
        }
    }
  };

  const handleForward = () => {
      if (historyIndex < history.length - 1) {
          const newIndex = historyIndex + 1;
          setHistoryIndex(newIndex);
          const page = history[newIndex];
           if (page === 'assessment') {
            setAppState('assessment');
        } else {
            setAppState('page');
            setCurrentPage(page);
        }
      }
  };


  const handleAssessmentSubmit = async (answers: Answers) => {
    setAppState('loading');
    try {
      if (!user) throw new Error("User not found");
      const results = await analyzeAssessment(user.email, answers);
      setAssessmentResults(results);
      setAppState('results');
    } catch (error) {
      console.error('Assessment analysis failed:', error);
      setAppState('assessment'); // Go back to assessment page on error
    }
  };

  const handleSearch = async (query: string) => {
    setAppState('loading');
    setSearchQuery(query);
    try {
        const result = await searchPlatform(query);
        setSearchResults(result);
        setAppState('search-results');
    } catch (error) {
        console.error('Search failed:', error);
        setAppState('page'); // Go back
        setCurrentPage('dashboard');
    }
  }

  const handleResetAssessment = () => {
    setAssessmentResults(null);
    setAppState('assessment');
  };
  
  const handleBuildInitiative = (pilots: string[]) => {
      setPilotsToCombine(pilots);
      handleNavigate('combine-pilots');
  };
  
  const handleSaveInitiative = async (name: string, pilots: string[]) => {
      if (!user) return;
      try {
          await saveCustomInitiative(user.email, name, pilots);
          alert(`Initiative "${name}" has been saved!`);
          handleNavigate('custom-initiative-plans');
      } catch (error) {
          console.error("Failed to save initiative", error);
          alert("Failed to save initiative. Please try again.");
      }
  };
  
  const handleBuildIntegrationPlan = (integrations: string[]) => {
      setIntegrationsToCombine(integrations);
      handleNavigate('combine-integrations');
  };

  const handleSaveIntegrationPlan = async (name: string, integrations: string[]) => {
    if (!user) return;
    try {
        await saveIntegrationPlan(user.email, name, integrations);
        alert(`Integration plan "${name}" has been saved!`);
        handleNavigate('custom-integration-plans');
    } catch (error) {
        console.error("Failed to save integration plan", error);
        alert("Failed to save integration plan. Please try again.");
    }
  };

  const handleFetchLastReport = async () => {
    if (!user) return;
    setAppState('loading');
    try {
      const lastReport = await getLastAssessmentReport(user.email);
      setAssessmentResults(lastReport);
      setAppState('results');
    } catch (error) {
      console.log("No previous report found, starting new assessment.");
      setAppState('assessment');
    }
  };
  
  const commonLoginProps = {
    onLogin: handleLogin,
    onSignUp: handleSignUp,
    onForgotPassword: handleForgotPassword,
    authError: authError,
    setAuthError: setAuthError,
    isLoading: isLoading,
  };
  
  const renderContent = () => {
      if (appState === 'auth') {
          return <LandingPage {...commonLoginProps} onRequestDemo={() => setIsContactModalOpen(true)} onSwitchToAdmin={() => setPortal('admin')} />;
      }
      if (appState === 'loading') {
          return <LoadingSpinner />;
      }
      if (appState === 'dashboard' && user) {
         return <DashboardPage user={user} onNavigate={handleNavigate} onFetchLastReport={handleFetchLastReport} />;
      }
      if (appState === 'assessment') {
        return <Questionnaire onSubmit={handleAssessmentSubmit} isTtsEnabled={isTtsEnabled} setIsTtsEnabled={setIsTtsEnabled} onNavigate={handleNavigate} />;
      }
      if (appState === 'results') {
        return <ResultsPage results={assessmentResults} onReset={handleResetAssessment} />;
      }
      if (appState === 'search-results') {
        return <SearchResultsPage results={searchResults} query={searchQuery} onReset={() => { setAppState('dashboard'); }} />;
      }
      if (appState === 'page') { 
        switch (currentPage) {
            case 'dashboard': return user ? <DashboardPage user={user} onNavigate={handleNavigate} onFetchLastReport={handleFetchLastReport} /> : <LandingPage {...commonLoginProps} onRequestDemo={() => setIsContactModalOpen(true)} onSwitchToAdmin={() => setPortal('admin')} />;
            case 'integrations': return <IntegrationsPage onBuildIntegrationPlan={handleBuildIntegrationPlan} />;
            case 'pilots': return <PilotPage onBuildInitiative={handleBuildInitiative}/>;
            case 'custom-initiative-program': return <CustomInitiativeProgramPage onNavigate={handleNavigate} />;
            case 'reports': return <ReportsPage onNavigate={handleNavigate} />;
            case 'crm': return <CrmIntegrationPage />;
            case 'erp': return <ErpIntegrationPage />;
            case 'hris': return <HrisIntegrationPage />;
            case 'service-now': return <ServiceNowIntegrationPage />;
            case 'custom-connectors': return <CustomConnectorsPage />;
            case 'quarterly-report': return <QuarterlyReportPage />;
            case 'maturity-report': return user ? <MaturityReportPage user={user} /> : <LoadingSpinner />;
            case 'benchmark-report': return <BenchmarkReportPage />;
            case 'pilot-report': return <PilotReportPage />;
            case 'risk-report': return <RiskAndComplianceReportPage />;
            case 'cost-report': return <CostOptimizationReportPage />;
            case 'automation-roi-report': return <AutomationRoiReportPage />;
            case 'security-report': return <SecurityPostureReportPage />;
            case 'sentiment-report': return <EmployeeSentimentReportPage />;
            case 'solutions': return <SolutionsPage onNavigate={handleNavigate} onContact={() => setIsContactModalOpen(true)} />;
            case 'starnet-halo-vortex': return <StarnetHaloVortexPage />;
            case 'novacore-hyperion': return <NovaCoreHyperionPage />;
            case 'orbitai-novasynapse': return <OrbitAINovaSynapsePage />;
            case 'quantumlink-graph-nexus': return <QuantumLinkGraphNexusPage />;
            case 'event-horizon-synoptic': return <EventHorizonSynopticPage />;
            case 'quantum-inference-engine': return <QuantumInferenceEnginePage />;
            case 'temporal-dynamics-analyzer': return <TemporalDynamicsAnalyzerPage />;
            case 'contextual-relevance-framework': return <ContextualRelevanceFrameworkPage />;
            case 'adaptive-learning-system': return <AdaptiveLearningSystemPage />;
            case 'insight-delivery-orchestrator': return <InsightDeliveryOrchestratorPage />;
            case 'blockchain': return <BlockchainPage onNavigate={handleNavigate} />;
            case 'support': return <SupportPage onNavigate={handleNavigate}/>;
            case 'pricing': return <PricingPage onNavigate={handleNavigate} onContact={() => setIsContactModalOpen(true)} />;
            case 'faq': return <FaqPage />;
            case 'quantum-cyber-security': return <QuantumCyberSecurityPage onNavigate={handleNavigate} />;
            case 'pqc': return <PostQuantumCryptographyPage />;
            case 'qkd': return <QuantumKeyDistributionPage />;
            case 'qrng': return <QuantumRandomNumberGeneratorsPage />;
            case 'ai-q-threat-detection': return <AiQuantumThreatDetectionPage />;
            case 'quantum-resilient-architecture': return <QuantumResilientArchitecturePage />;
            case 'chapter-1': return <Chapter1_IntroToGalaxityPage />;
            case 'chapter-2': return <Chapter2_QuantumEnhancedFrameworkPage />;
            case 'chapter-3': return <Chapter3_DecentralizedBridgesPage />;
            case 'chapter-4': return <Chapter4_AIIntegrationPage />;
            case 'chapter-5': return <Chapter5_SpaceEconomyPage />;
            case 'chapter-6': return <Chapter6_NftAndDeFiPage />;
            case 'chapter-7': return <Chapter7_AdvancedSecurityPage />;
            case 'chapter-8': return <Chapter8_ModularBlockchainPage />;
            case 'chapter-9': return <Chapter9_AIDrivenGovernancePage />;
            case 'chapter-10': return <Chapter10_FutureVisionPage />;
            case 'combine-pilots': return user ? <CombinePilotsPage pilotsToCombine={pilotsToCombine} onSaveInitiative={handleSaveInitiative} onNavigate={handleNavigate} /> : <LoadingSpinner />;
            case 'custom-initiative-plans': return user ? <CustomInitiativesPage user={user} onNavigate={handleNavigate} /> : <LoadingSpinner />;
            case 'combine-integrations': return user ? <CombineIntegrationsPage integrationsToCombine={integrationsToCombine} onSavePlan={handleSaveIntegrationPlan} onNavigate={handleNavigate} /> : <LoadingSpinner />;
            case 'custom-integration-plans': return user ? <CustomIntegrationPlansPage user={user} onNavigate={handleNavigate} /> : <LoadingSpinner />;
            default: return user ? <DashboardPage user={user} onNavigate={handleNavigate} onFetchLastReport={handleFetchLastReport} /> : <LandingPage {...commonLoginProps} onRequestDemo={() => setIsContactModalOpen(true)} onSwitchToAdmin={() => setPortal('admin')} />;
        }
      }
      return <LoadingSpinner />; // Default case if state is inconsistent
    };

    if (portal === 'admin') {
      return <AdminApp onSwitchToCustomer={() => setPortal('customer')} />;
    }
  
    return (
        <div className="min-h-screen relative text-white font-sans">
            <Background />
            <div className="relative z-10 flex flex-col min-h-screen">
                <Header
                    user={user}
                    onNavigate={handleNavigate}
                    onLogout={handleLogout}
                    onSearch={handleSearch}
                    onBack={handleBack}
                    onForward={handleForward}
                    canGoBack={historyIndex > 0}
                    canGoForward={historyIndex < history.length - 1}
                    onRequestDemo={() => setIsContactModalOpen(true)}
                />
                <main className="flex-grow flex items-center justify-center p-4 sm:p-6 lg:p-8">
                    {renderContent()}
                </main>
                <footer className="text-center p-4 text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Enterprise Horizon, a subsidiary of Youniverse1. All Rights Reserved. This is a conceptual demonstration.</p>
                </footer>
            </div>
            {isContactModalOpen && <ContactModal onClose={() => setIsContactModalOpen(false)} />}
        </div>
    );
};

export default App;