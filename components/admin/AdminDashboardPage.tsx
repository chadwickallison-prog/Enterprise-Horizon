import React, { useState, useEffect } from 'react';
import { getAdminDashboardData } from '../../services/apiService';
import type { AdminDashboardData, AdminPage } from '../../types';
import AdminChartWrapper from './AdminChartWrapper';
import AdminLineChart from './AdminLineChart';
import AdminDonutChart from './AdminDonutChart';
import AdminBarChart from './AdminBarChart';
import LoadingSpinner from '../LoadingSpinner'; // Using customer-facing spinner for now

const StatCard: React.FC<{ label: string; value: string | number, onClick?: () => void }> = ({ label, value, onClick }) => (
    <div className={`bg-white overflow-hidden shadow rounded-lg ${onClick ? 'cursor-pointer hover:bg-gray-50' : ''}`} onClick={onClick}>
        <div className="px-4 py-5 sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">{label}</dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">{value}</dd>
        </div>
    </div>
);

const AdminDashboardPage: React.FC<{onNavigate: (page: AdminPage) => void}> = ({ onNavigate }) => {
    const [data, setData] = useState<AdminDashboardData | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getAdminDashboardData()
            .then(setData)
            .catch(console.error)
            .finally(() => setIsLoading(false));
    }, []);

    if (isLoading || !data) {
        return <div className="p-4 text-center">Loading dashboard...</div>;
    }

    const lineChartData1 = data.userGrowth.map(d => ({ name: d.name, value: d['New Users'] }));
    const lineChartData2 = data.assessmentGrowth.map(d => ({ name: d.name, value: d.Assessments }));

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                <p className="mt-1 text-sm text-gray-600">Overview of platform activity and key metrics.</p>
            </div>
            
            <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                <StatCard label="Total Users" value={data.totalUsers} onClick={() => onNavigate('users')} />
                <StatCard label="Assessments Completed" value={data.assessmentsCompleted} onClick={() => onNavigate('assessments')} />
                <StatCard label="Average SII Score" value={data.averageSiiScore > 0 ? data.averageSiiScore.toFixed(1) : 'N/A'} />
            </dl>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <AdminChartWrapper title="User & Assessment Growth (Last 6 Months)" className="lg:col-span-2">
                    <AdminLineChart 
                        data={lineChartData1} 
                        data2={lineChartData2} 
                    />
                </AdminChartWrapper>
                <AdminChartWrapper title="Users by Plan">
                    <AdminDonutChart data={data.usersByPlan} />
                </AdminChartWrapper>
                <AdminChartWrapper title="SII Score Distribution" className="lg:col-span-3">
                    <AdminBarChart data={data.siiScoreDistribution} />
                </AdminChartWrapper>
                
                <div className="lg:col-span-3 bg-white shadow rounded-lg">
                    <h3 className="text-lg font-medium text-gray-900 p-6 border-b">Recent User Sign-ups</h3>
                    <ul className="divide-y divide-gray-200">
                        {data.recentSignups.length > 0 ? data.recentSignups.map(user => (
                            <li key={user.id} className="px-6 py-4 flex justify-between items-center">
                                <div>
                                    <p className="text-sm font-medium text-gray-800">{user.username}</p>
                                    <p className="text-sm text-gray-500">{user.email}</p>
                                </div>
                                <span className="text-xs text-gray-500">{new Date(user.registeredAt).toLocaleDateString()}</span>
                            </li>
                        )) : <li className="px-6 py-4 text-sm text-gray-500 text-center">No recent sign-ups.</li>}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default AdminDashboardPage;