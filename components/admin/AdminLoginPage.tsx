import React, { useState } from 'react';

interface AdminLoginPageProps {
    onLogin: (email: string, password: string) => void;
    isLoading: boolean;
    error: string;
    onSwitchToCustomer: () => void;
}

const AdminLoginPage: React.FC<AdminLoginPageProps> = ({ onLogin, isLoading, error, onSwitchToCustomer }) => {
    const [email, setEmail] = useState('admin@enterprisehorizon.io');
    const [password, setPassword] = useState('password');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onLogin(email, password);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center font-sans text-gray-800">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                     <h1 className="text-3xl font-bold text-gray-800">Enterprise Horizon</h1>
                     <h2 className="text-xl font-semibold text-gray-600">Admin Portal</h2>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-8">
                    <h3 className="text-2xl font-semibold text-center text-gray-700 mb-6">Administrator Sign In</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {error && <p className="bg-red-100 border border-red-400 text-red-700 text-sm px-4 py-3 rounded-md">{error}</p>}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email Address</label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label htmlFor="password"  className="block text-sm font-medium text-gray-600">Password</label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                        >
                            {isLoading ? 'Signing In...' : 'Sign In'}
                        </button>
                    </form>
                </div>
                 <div className="mt-6 text-center">
                    <button
                        onClick={onSwitchToCustomer}
                        className="text-sm text-gray-600 hover:text-blue-500 hover:underline"
                    >
                        Return to Customer Portal
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdminLoginPage;
