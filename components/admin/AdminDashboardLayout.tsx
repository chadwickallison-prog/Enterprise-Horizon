import React, { useState } from 'react';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import type { AdminUser, AdminPage } from '../../types';

interface AdminDashboardLayoutProps {
    user: AdminUser;
    onLogout: () => void;
    onNavigate: (page: AdminPage) => void;
    currentPage: AdminPage;
    children: React.ReactNode;
    onSwitchToCustomer: () => void;
}

const AdminDashboardLayout: React.FC<AdminDashboardLayoutProps> = ({ user, onLogout, onNavigate, currentPage, children, onSwitchToCustomer }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100 font-sans text-gray-800">
            <AdminSidebar 
                isOpen={sidebarOpen}
                setIsOpen={setSidebarOpen}
                onNavigate={onNavigate}
                currentPage={currentPage}
                onSwitchToCustomer={onSwitchToCustomer}
            />
            <div className="lg:pl-64 flex flex-col flex-1">
                <AdminHeader user={user} onLogout={onLogout} toggleSidebar={() => setSidebarOpen(true)} />
                <main className="flex-1 pb-8">
                    <div className="mt-8">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                           {children}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AdminDashboardLayout;
