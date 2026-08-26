import React, { useState, useEffect } from 'react';
import type { SignUpData } from '../types';
import { sendLeadNotification } from '../services/leadService';

type AuthMode = 'login' | 'signup' | 'forgot' | 'reset';

interface LandingPageProps {
  onLogin: (email: string, password: string, remember: boolean) => Promise<void>;
  onSignUp: (data: SignUpData, remember: boolean) => Promise<void>;
  onForgotPassword: (email: string, recoveryPhrase: string, newPass: string) => Promise<void>;
  authError: string;
  setAuthError: (error: string) => void;
  isLoading: boolean;
  onRequestDemo: () => void;
}

const REMEMBERED_EMAIL_KEY = 'enterprise-horizon-remembered-email';
const inputClass = 'w-full px-4 py-3 bg-gray-800/50 border-2 border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-300/40 focus:border-cyan-300/40';

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
    className={`w-full px-8 py-3 font-bold text-lg rounded-lg shadow-lg transition-all flex items-center justify-center ${className} ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:brightness-110'}`}
  >
    {isLoading ? (
      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    ) : text}
  </button>
);

const LandingPage: React.FC<LandingPageProps> = ({ onLogin, onSignUp, onForgotPassword, authError, setAuthError, isLoading, onRequestDemo }) => {
  const [mode, setMode] = useState<AuthMode>('login');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [recoveryPhrase, setRecoveryPhrase] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [emailForReset, setEmailForReset] = useState('');
  const [localError, setLocalError] = useState('');

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
    setLocalError('');
    setPassword('');
    setConfirmPassword('');
    setRecoveryPhrase('');
    setNewPassword('');
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError('');
    const normalizedEmail = email.trim().toLowerCase();
    if (!normalizedEmail || !password) {
      setLocalError('Enter your email and password.');
      return;
    }
    await onLogin(normalizedEmail, password, rememberMe);
  };

  const handleSignUpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError('');
    const normalizedEmail = email.trim().toLowerCase();
    const cleanName = username.trim();

    if (cleanName.length < 2) {
      setLocalError('Enter your full name or account name.');
      return;
    }
    if (password.length < 8) {
      setLocalError('Use a password with at least 8 characters.');
      return;
    }
    if (password !== confirmPassword) {
      setLocalError('The passwords do not match.');
      return;
    }
    if (recoveryPhrase.trim().length < 6) {
      setLocalError('Enter a recovery phrase with at least 6 characters.');
      return;
    }

    await onSignUp({ username: cleanName, email: normalizedEmail, password, recoveryPhrase: recoveryPhrase.trim() }, rememberMe);

    // Notify the owner of an account-signup submission without ever transmitting the password or recovery phrase.
    try {
      await sendLeadNotification({
        type: 'signup',
        name: cleanName,
        email: normalizedEmail,
        message: 'New Enterprise Horizon account signup submitted.',
      });
    } catch (notificationError) {
      console.error('Signup notification email failed:', notificationError);
    }
  };

  const handleForgotSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const normalizedEmail = email.trim().toLowerCase();
    if (!normalizedEmail) {
      setLocalError('Enter the email address for your account.');
      return;
    }
    setEmailForReset(normalizedEmail);
    handleModeChange('reset');
  };

  const handleResetSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLocalError('');
    if (newPassword.length < 8) {
      setLocalError('Use a new password with at least 8 characters.');
      return;
    }
    try {
      await onForgotPassword(emailForReset, recoveryPhrase.trim(), newPassword);
      handleModeChange('login');
    } catch {
      // Parent displays the authentication error.
    }
  };

  const renderForm = () => {
    switch (mode) {
      case 'signup':
        return (
          <form onSubmit={handleSignUpSubmit} className="space-y-4">
            <input type="text" autoComplete="name" placeholder="Full Name / Account Name" value={username} onChange={e => setUsername(e.target.value)} required className={inputClass} />
            <input type="email" autoComplete="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required className={inputClass} />
            <input type="password" autoComplete="new-password" placeholder="Password (8+ characters)" value={password} onChange={e => setPassword(e.target.value)} required minLength={8} className={inputClass} />
            <input type="password" autoComplete="new-password" placeholder="Confirm Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required minLength={8} className={inputClass} />
            <input type="text" autoComplete="off" placeholder="Secret Recovery Phrase" value={recoveryPhrase} onChange={e => setRecoveryPhrase(e.target.value)} required className={inputClass} />
            <p className="text-left text-xs text-slate-500">Keep your recovery phrase private. It is never included in signup notification emails.</p>
            <label className="flex items-center text-sm text-gray-400 cursor-pointer">
              <input type="checkbox" checked={rememberMe} onChange={e => setRememberMe(e.target.checked)} className="h-4 w-4 bg-gray-700 border-gray-600 text-cyan-500 focus:ring-cyan-400 rounded" />
              <span className="ml-2">Remember my email on this device</span>
            </label>
            <AuthButton isLoading={isLoading} text="Create Account" className="bg-gradient-to-r from-[#0b5f9c] via-[#157db8] to-[#60c7e8] text-white" />
          </form>
        );
      case 'forgot':
        return (
          <form onSubmit={handleForgotSubmit} className="space-y-4">
            <p className="text-gray-400 text-sm">Enter your account email to continue to recovery.</p>
            <input type="email" autoComplete="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required className={inputClass} />
            <AuthButton isLoading={isLoading} text="Continue" className="bg-gradient-to-r from-[#0b5f9c] to-[#157db8] text-white" />
          </form>
        );
      case 'reset':
        return (
          <form onSubmit={handleResetSubmit} className="space-y-4">
            <p className="text-gray-400 text-sm">Enter your recovery phrase and a new password for <span className="font-bold text-white">{emailForReset}</span>.</p>
            <input type="text" autoComplete="off" placeholder="Secret Recovery Phrase" value={recoveryPhrase} onChange={e => setRecoveryPhrase(e.target.value)} required className={inputClass} />
            <input type="password" autoComplete="new-password" placeholder="New Password (8+ characters)" value={newPassword} onChange={e => setNewPassword(e.target.value)} required minLength={8} className={inputClass} />
            <AuthButton isLoading={isLoading} text="Reset Password" className="bg-gradient-to-r from-[#0b5f9c] to-[#157db8] text-white" />
          </form>
        );
      case 'login':
      default:
        return (
          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <input type="email" autoComplete="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required className={inputClass} />
            <input type="password" autoComplete="current-password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required className={inputClass} />
            <div className="flex items-center justify-between text-sm gap-4">
              <label className="flex items-center text-gray-400 cursor-pointer">
                <input type="checkbox" checked={rememberMe} onChange={e => setRememberMe(e.target.checked)} className="h-4 w-4 bg-gray-700 border-gray-600 text-cyan-500 focus:ring-cyan-400 rounded" />
                <span className="ml-2">Remember email</span>
              </label>
              <button type="button" onClick={() => handleModeChange('forgot')} className="text-cyan-300 hover:text-cyan-100 hover:underline">Forgot Password?</button>
            </div>
            <AuthButton isLoading={isLoading} text="Log In" className="bg-gradient-to-r from-[#0b5f9c] via-[#157db8] to-[#60c7e8] text-white" />
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
  };

  const displayedError = localError || authError;

  return (
    <div className="text-center animate-fade-in flex flex-col items-center">
      <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">Enterprise Horizon</h2>
      <p className="mt-2 max-w-2xl mx-auto text-lg text-gray-400">Log in or create an account to access Enterprise Horizon.</p>

      <div className="mt-8 w-full max-w-md bg-black/30 backdrop-blur-sm border border-cyan-200/15 rounded-2xl shadow-2xl p-8">
        <h3 className="text-2xl font-bold text-white mb-6">{getTitle()}</h3>
        {mode !== 'forgot' && mode !== 'reset' && (
          <div className="flex border-b border-gray-700 mb-6">
            <button type="button" onClick={() => handleModeChange('login')} className={`flex-1 py-2 font-semibold transition-colors ${mode === 'login' ? 'text-white border-b-2 border-cyan-300' : 'text-gray-400 hover:text-white'}`}>Log In</button>
            <button type="button" onClick={() => handleModeChange('signup')} className={`flex-1 py-2 font-semibold transition-colors ${mode === 'signup' ? 'text-white border-b-2 border-cyan-300' : 'text-gray-400 hover:text-white'}`}>Create Account</button>
          </div>
        )}
        {displayedError && <p className="bg-red-900/40 border border-red-700/70 text-red-200 text-sm p-3 rounded-lg mb-4">{displayedError}</p>}
        {renderForm()}
        {(mode === 'forgot' || mode === 'reset') && (
          <div className="text-center mt-4">
            <button type="button" onClick={() => handleModeChange('login')} className="text-sm text-cyan-300 hover:underline">Back to Log In</button>
          </div>
        )}
        <p className="mt-6 pt-5 border-t border-white/5 text-xs leading-relaxed text-slate-500">Privacy: Enterprise Horizon and Galaxity AI do not sell your personal data to anyone. Account information is used to provide, secure, support and administer the portal.</p>
      </div>

      <div className="mt-8 space-y-4 text-center">
        <p className="text-gray-400">or</p>
        <button onClick={onRequestDemo} className="bg-gradient-to-r from-[#0b5f9c] via-[#157db8] to-[#60c7e8] hover:brightness-110 text-white transition-all px-6 py-3 rounded-md font-bold shadow-lg">Request a Demo</button>
      </div>
    </div>
  );
};

export default LandingPage;
