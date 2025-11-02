import React, { useState, useEffect } from 'react';
import type { SignUpData } from '../types';

type AuthMode = 'login' | 'signup' | 'forgot' | 'reset';

interface LandingPageProps {
  onLogin: (email: string, password: string, remember: boolean) => Promise<void>;
  onSignUp: (data: SignUpData, remember: boolean) => Promise<void>;
  onForgotPassword: (email: string, recoveryPhrase: string, newPass: string) => Promise<void>;
  authError: string;
  setAuthError: (error: string) => void;
  isLoading: boolean;
  onRequestDemo: () => void;
  onSwitchToAdmin: () => void;
}

const REMEMBERED_EMAIL_KEY = 'enterprise-horizon-remembered-email';

const AuthButton: React.FC<{
    isLoading: boolean;
    text: string;
    className?: string;
    type?: 'submit' | 'button';
    onClick?: () => void;
}> = ({ isLoading, text, className, type = 'submit', onClick }) => (
    <button 
        type={type}
        onClick={onClick}
        disabled={isLoading}
        className={`w-full px-8 py-3 font-bold text-lg rounded-lg shadow-lg transition-opacity flex items-center justify-center ${className} ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'}`}
    >
        {isLoading ? (
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
        ) : text}
    </button>
);


const LandingPage: React.FC<LandingPageProps> = ({ onLogin, onSignUp, onForgotPassword, authError, setAuthError, isLoading, onRequestDemo, onSwitchToAdmin }) => {
  const [mode, setMode] = useState<AuthMode>('login');
  
  // Form states
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [recoveryPhrase, setRecoveryPhrase] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  
  // State for forgot password flow
  const [emailForReset, setEmailForReset] = useState('');

  useEffect(() => {
    const rememberedEmail = localStorage.getItem(REMEMBERED_EMAIL_KEY);
    if (rememberedEmail) {
        setEmail(rememberedEmail);
        setRememberMe(true);
    }
  }, []);


  const handleModeChange = (newMode: AuthMode) => {
    setMode(newMode);
    setAuthError('');
  };
  
  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
        await onLogin(email, password, rememberMe);
    } catch (error) {
        // Error is handled in App.tsx
    }
  }

  const handleSignUpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
        await onSignUp({ username, email, password, recoveryPhrase }, rememberMe);
    } catch (error) {
        // Error is handled in App.tsx
    }
  }
  
  const handleForgotSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setEmailForReset(email);
      handleModeChange('reset');
  }
  
  const handleResetSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
        await onForgotPassword(emailForReset, recoveryPhrase, newPassword);
        handleModeChange('login');
    } catch(error) {
        // Error is handled in App.tsx
    }
  }

  const renderForm = () => {
    switch (mode) {
      case 'signup':
        return (
          <form onSubmit={handleSignUpSubmit} className="space-y-4">
            <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required className="w-full px-4 py-3 bg-gray-800/50 border-2 border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4080FF] focus:border-[#4080FF]" />
            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required className="w-full px-4 py-3 bg-gray-800/50 border-2 border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4080FF] focus:border-[#4080FF]" />
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required className="w-full px-4 py-3 bg-gray-800/50 border-2 border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4080FF] focus:border-[#4080FF]" />
            <input type="text" placeholder="Secret Recovery Phrase" value={recoveryPhrase} onChange={e => setRecoveryPhrase(e.target.value)} required className="w-full px-4 py-3 bg-gray-800/50 border-2 border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4080FF] focus:border-[#4080FF]" />
            <div className="flex items-center justify-start text-sm">
                <label className="flex items-center text-gray-400 cursor-pointer">
                    <input 
                        type="checkbox" 
                        checked={rememberMe} 
                        onChange={e => setRememberMe(e.target.checked)}
                        className="h-4 w-4 bg-gray-700 border-gray-600 text-blue-600 focus:ring-blue-500 rounded" 
                    />
                    <span className="ml-2">Remember me</span>
                </label>
            </div>
            <AuthButton isLoading={isLoading} text="Sign Up" className="bg-gradient-to-r from-[#4080FF] to-[#002060] text-white" />
          </form>
        );
      case 'forgot':
        return (
             <form onSubmit={handleForgotSubmit} className="space-y-4">
                <p className="text-gray-400 text-sm">Enter your email address to begin the recovery process.</p>
                <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required className="w-full px-4 py-3 bg-gray-800/50 border-2 border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4080FF] focus:border-[#4080FF]" />
                <AuthButton isLoading={isLoading} text="Continue" className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white" />
             </form>
        )
      case 'reset':
        return (
             <form onSubmit={handleResetSubmit} className="space-y-4">
                <p className="text-gray-400 text-sm">Enter your recovery phrase and a new password for <span className="font-bold text-white">{emailForReset}</span>.</p>
                <input type="text" placeholder="Secret Recovery Phrase" value={recoveryPhrase} onChange={e => setRecoveryPhrase(e.target.value)} required className="w-full px-4 py-3 bg-gray-800/50 border-2 border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4080FF] focus:border-[#4080FF]" />
                <input type="password" placeholder="New Password" value={newPassword} onChange={e => setNewPassword(e.target.value)} required className="w-full px-4 py-3 bg-gray-800/50 border-2 border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4080FF] focus:border-[#4080FF]" />
                <AuthButton isLoading={isLoading} text="Reset Password" className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white" />
             </form>
        )
      case 'login':
      default:
        return (
          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required className="w-full px-4 py-3 bg-gray-800/50 border-2 border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4080FF] focus:border-[#4080FF]" />
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required className="w-full px-4 py-3 bg-gray-800/50 border-2 border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4080FF] focus:border-[#4080FF]" />
            <div className="flex items-center justify-between text-sm">
                <label className="flex items-center text-gray-400 cursor-pointer">
                    <input 
                        type="checkbox" 
                        checked={rememberMe} 
                        onChange={e => setRememberMe(e.target.checked)}
                        className="h-4 w-4 bg-gray-700 border-gray-600 text-blue-600 focus:ring-blue-500 rounded" 
                    />
                    <span className="ml-2">Remember me</span>
                </label>
                <button type="button" onClick={() => handleModeChange('forgot')} className="text-blue-400 hover:underline">Forgot Password?</button>
            </div>
            <AuthButton isLoading={isLoading} text="Log In" className="bg-gradient-to-r from-[#4080FF] to-[#002060] text-white" />
          </form>
        );
    }
  };
  
  const getTitle = () => {
      switch(mode) {
          case 'signup': return 'Create Your Account';
          case 'forgot': return 'Recover Password';
          case 'reset': return 'Reset Your Password';
          default: return 'Welcome Back';
      }
  }

  return (
    <div className="text-center animate-fade-in flex flex-col items-center">
        <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Enterprise Horizon
        </h2>
        <p className="mt-2 max-w-2xl mx-auto text-lg text-gray-400">
            Log in or sign up to access the Readiness Assessment.
        </p>

        <div className="mt-8 w-full max-w-md bg-black/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">{getTitle()}</h3>
            
            { mode !== 'forgot' && mode !== 'reset' && (
                <div className="flex border-b border-gray-700 mb-6">
                    <button onClick={() => handleModeChange('login')} className={`flex-1 py-2 font-semibold transition-colors ${mode === 'login' ? 'text-white border-b-2 border-blue-500' : 'text-gray-400'}`}>Log In</button>
                    <button onClick={() => handleModeChange('signup')} className={`flex-1 py-2 font-semibold transition-colors ${mode === 'signup' ? 'text-white border-b-2 border-blue-500' : 'text-gray-400'}`}>Sign Up</button>
                </div>
            )}
            
            {authError && <p className="bg-red-900/50 border border-red-700 text-red-300 text-sm p-3 rounded-lg mb-4">{authError}</p>}
            
            {renderForm()}

            { (mode === 'forgot' || mode === 'reset') && (
                 <div className="text-center mt-4">
                    <button type="button" onClick={() => handleModeChange('login')} className="text-sm text-blue-400 hover:underline">Back to Log In</button>
                </div>
            )}
        </div>

        <div className="mt-8 space-y-4 text-center">
            <p className="text-gray-400">or</p>
            <button
                onClick={onRequestDemo}
                className="bg-blue-600 hover:bg-blue-700 text-white transition-colors px-6 py-3 rounded-md font-bold shadow-lg"
            >
                Request a Demo
            </button>
        </div>

         <div className="mt-12 text-center">
            <button
                onClick={onSwitchToAdmin}
                className="text-sm text-gray-500 hover:text-gray-300 hover:underline transition-colors"
            >
                Switch to Admin Portal
            </button>
        </div>
    </div>
  );
};

export default LandingPage;
