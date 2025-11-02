import React, { useState } from 'react';

interface AdminUser {
    email: string;
    name: string;
}

interface AdminHeaderProps {
    user: AdminUser;
    onLogout: () => void;
    toggleSidebar: () => void;
}

const AdminHeader: React.FC<AdminHeaderProps> = ({ user, onLogout, toggleSidebar }) => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-10 bg-white shadow-sm">
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Hamburger menu for mobile */}
                    <div className="lg:hidden">
                        <button onClick={toggleSidebar} className="text-gray-500 hover:text-gray-600">
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                        </button>
                    </div>
                     <div className="hidden lg:block"></div> {/* Spacer for the left side */}
                    
                    <div className="relative">
                        <button
                            onClick={() => setMenuOpen(!isMenuOpen)}
                            className="flex items-center space-x-2 text-sm font-medium text-gray-600 hover:text-gray-800"
                        >
                            <span>{user.name}</span>
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                        </button>

                        {isMenuOpen && (
                            <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
                                <button
                                    onClick={onLogout}
                                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    Sign out
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AdminHeader;
