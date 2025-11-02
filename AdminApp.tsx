import React, { useState } from 'react';
import AdminLoginPage from './components/admin/AdminLoginPage';
import AdminDashboardLayout from './components/admin/AdminDashboardLayout';
import AdminDashboardPage from './components/admin/AdminDashboardPage';
import AdminUserManagementPage from './components/admin/AdminUserManagementPage';
import AdminCustomer360Page from './components/admin/AdminCustomer360Page';
import AdminAssessmentsPage from './components/admin/AdminAssessmentsPage';
import AdminServiceCatalogPage from './components/admin/AdminServiceCatalogPage';
import AdminOrdersPage from './components/admin/AdminOrdersPage';
import AdminSlaMonitoringPage from './components/admin/AdminAnalyticsPage'; 

import type { AdminUser, AdminPage } from './types';
import { adminLogin } from './services/apiService';

interface AdminAppProps {
    onSwitchToCustomer: () => void;
}

const AdminApp: React.FC<AdminAppProps> = ({ onSwitchToCustomer }) => {
    const [adminUser, setAdminUser] = useState<AdminUser | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [currentPage, setCurrentPage] = useState<AdminPage>('dashboard');
    const [selectedUserEmail, setSelectedUserEmail] = useState<string | null>(null);

    const handleLogin = async (email: string, password: string) => {
        setIsLoading(true);
        setError('');
        try {
            const user = await adminLogin(email, password);
            setAdminUser(user);
        } catch (err) {
            setError((err as Error).message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleLogout = () => {
        setAdminUser(null);
        setCurrentPage('dashboard');
    };
    
    const handleNavigate = (page: AdminPage) => {
        setCurrentPage(page);
    }
    
    const handleViewUser = (email: string) => {
        setSelectedUserEmail(email);
        setCurrentPage('customer360');
    }

    if (!adminUser) {
        return (
            <AdminLoginPage 
                onLogin={handleLogin} 
                isLoading={isLoading}
                error={error}
                onSwitchToCustomer={onSwitchToCustomer}
            />
        );
    }
    
    const renderPage = () => {
        switch (currentPage) {
            case 'dashboard':
                return <AdminDashboardPage onNavigate={handleNavigate} />;
            case 'users':
                return <AdminUserManagementPage onViewUser={handleViewUser} />;
            case 'customer360':
                if (selectedUserEmail) {
                    return <AdminCustomer360Page userEmail={selectedUserEmail} onBack={() => setCurrentPage('users')} />;
                }
                return <AdminUserManagementPage onViewUser={handleViewUser} />;
            case 'assessments':
                return <AdminAssessmentsPage onViewCustomer={handleViewUser} />;
            case 'catalog':
                return <AdminServiceCatalogPage />;
            case 'orders':
                return <AdminOrdersPage />;
            case 'slo':
                 return <AdminSlaMonitoringPage />;
            default:
                return <AdminDashboardPage onNavigate={handleNavigate} />;
        }
    }

    return (
       <AdminDashboardLayout 
            user={adminUser} 
            onLogout={handleLogout}
            onNavigate={handleNavigate}
            currentPage={currentPage}
            onSwitchToCustomer={onSwitchToCustomer}
        >
            {renderPage()}
       </AdminDashboardLayout>
    );
};

export default AdminApp;
