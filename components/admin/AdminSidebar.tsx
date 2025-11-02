import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import type { AdminPage } from '../../types';

interface NavLinkProps {
    page: AdminPage;
    currentPage: AdminPage;
    onNavigate: (page: AdminPage) => void;
    icon: React.ReactNode;
    label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ page, currentPage, onNavigate, icon, label }) => {
    const isActive = currentPage === page || (currentPage === 'customer360' && page === 'users');
    return (
        <button
            onClick={() => onNavigate(page)}
            className={`flex items-center w-full px-2 py-2 text-sm font-medium rounded-md group transition-colors ${isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
        >
            <div className={`mr-3 h-6 w-6 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-gray-300'}`}>
                {icon}
            </div>
            {label}
        </button>
    );
};

interface AdminSidebarProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    onNavigate: (page: AdminPage) => void;
    currentPage: AdminPage;
    onSwitchToCustomer: () => void;
}

const SidebarContent: React.FC<Omit<AdminSidebarProps, 'isOpen' | 'setIsOpen'>> = ({ onNavigate, currentPage, onSwitchToCustomer }) => {
    const navItems: { page: AdminPage; label: string; icon: React.ReactNode }[] = [
        { page: 'dashboard', label: 'Dashboard', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg> },
        { page: 'users', label: 'Users & Roles', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197m0 0A5.995 5.995 0 0012 12a5.995 5.995 0 00-3-5.197M15 21a2 2 0 002-2v-1a2 2 0 00-2-2h-2.172a2 2 0 00-1.414.586l-.828.828A2 2 0 009.172 15H7a2 2 0 00-2 2v1a2 2 0 002 2h2.172a2 2 0 001.414-.586l.828-.828A2 2 0 0112.828 17H15z" /></svg> },
        { page: 'assessments', label: 'Assessments', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg> },
        { page: 'catalog', label: 'Service Catalog', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg> },
        { page: 'orders', label: 'Orders & Changes', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg> },
        { page: 'slo', label: 'SLA / SLO', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg> },
    ];
    return (
        <div className="h-0 flex-1 flex flex-col overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4 h-16 bg-gray-50 text-gray-800 font-bold text-lg border-b">
                EH Admin
            </div>
            <div className="flex-1 flex flex-col">
                <nav className="flex-1 px-2 py-4 space-y-1 bg-white">
                    {navItems.map(item => (
                        <NavLink key={item.page} {...item} currentPage={currentPage} onNavigate={onNavigate} />
                    ))}
                     <div className="pt-4 mt-4 border-t border-gray-200">
                        <button onClick={onSwitchToCustomer} className="flex items-center w-full px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900 group">
                            <svg xmlns="http://www.w3.org/2000/svg" className="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                            Customer Portal
                        </button>
                    </div>
                </nav>
            </div>
        </div>
    );
};

const AdminSidebar: React.FC<AdminSidebarProps> = ({ isOpen, setIsOpen, onNavigate, currentPage, onSwitchToCustomer }) => {
    return (
        <>
            <div className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 border-r border-gray-200 bg-white">
                <SidebarContent onNavigate={onNavigate} currentPage={currentPage} onSwitchToCustomer={onSwitchToCustomer} />
            </div>
            <Transition.Root show={isOpen} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={setIsOpen}>
                    <Transition.Child as={Fragment} enter="transition-opacity ease-linear duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="transition-opacity ease-linear duration-300" leaveFrom="opacity-100" leaveTo="opacity-0">
                        <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                    </Transition.Child>
                    <Transition.Child as={Fragment} enter="transition ease-in-out duration-300 transform" enterFrom="-translate-x-full" enterTo="translate-x-0" leave="transition ease-in-out duration-300 transform" leaveFrom="translate-x-0" leaveTo="-translate-x-full">
                        <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
                             <div className="absolute top-0 right-0 -mr-12 pt-2">
                                <button type="button" className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" onClick={() => setIsOpen(false)}>
                                    <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </div>
                            <SidebarContent onNavigate={onNavigate} currentPage={currentPage} onSwitchToCustomer={onSwitchToCustomer} />
                        </div>
                    </Transition.Child>
                     <div className="flex-shrink-0 w-14" aria-hidden="true"></div>
                </Dialog>
            </Transition.Root>
        </>
    );
};

export default AdminSidebar;
