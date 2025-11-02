import React, { useState, useEffect } from 'react';
import { getCustomer360Data } from '../../services/apiService';
import type { Customer360Data } from '../../types';
import SlaChart from './SlaChart';

const StatCard: React.FC<{ label: string; value: string | number }> = ({ label, value }) => (
    <div className="bg-gray-50 px-4 py-5 sm:p-6 rounded-lg shadow-sm">
        <dt className="text-sm font-medium text-gray-500 truncate">{label}</dt>
        <dd className="mt-1 text-2xl font-bold text-gray-900">{value}</dd>
    </div>
);

const AdminCustomer360Page: React.FC<{ userEmail: string; onBack: () => void; }> = ({ userEmail, onBack }) => {
    const [data, setData] = useState<Customer360Data | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        getCustomer360Data(userEmail)
            .then(setData)
            .catch(error => console.error("Failed to fetch user 360 data:", error))
            .finally(() => setIsLoading(false));
    }, [userEmail]);

    if (isLoading) {
        return <div className="p-4 text-center">Loading customer details...</div>;
    }

    if (!data) {
        return <div className="p-4 text-center text-red-600">Could not find details for user: {userEmail}</div>
    }
    
    const { user, account, billing, team, activity, sla, lastAssessment, subscribedSolutions, initiatives, integrationPlans } = data;

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <button onClick={onBack} className="text-sm text-blue-600 hover:underline mb-2">‹ Back to User List</button>
                    <h1 className="text-2xl font-bold text-gray-900">{account.name}</h1>
                    <p className="mt-1 text-sm text-gray-600">Account Owner: {user.username} ({user.email})</p>
                </div>
            </div>

            <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                <StatCard label="Subscription Plan" value={billing.plan} />
                <StatCard label="Billing Status" value={billing.status} />
                <StatCard label="Last SII Score" value={lastAssessment ? lastAssessment.siiScore : 'N/A'} />
                <StatCard label="Renewal Date" value={new Date(billing.renewalDate).toLocaleDateString()} />
            </dl>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                     <div className="bg-white shadow rounded-lg p-6">
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Live SLA Monitoring (Last 24h)</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <SlaChart title="API Uptime (%)" data={sla.apiUptime} color="#3B82F6" yDomain={[99.8, 100]} />
                            <SlaChart title="Report Latency (ms)" data={sla.reportLatency} color="#10B981" />
                        </div>
                    </div>
                     <div className="bg-white shadow rounded-lg">
                        <h3 className="text-lg font-medium text-gray-900 p-6 border-b">Activity Log</h3>
                        <ul className="divide-y divide-gray-200 max-h-60 overflow-y-auto">
                            {activity.map(log => (
                                <li key={log.id} className="px-6 py-3 text-sm flex justify-between">
                                    <span className="text-gray-700">{log.activity}</span>
                                    <span className="text-gray-400">{new Date(log.timestamp).toLocaleTimeString()}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="space-y-8">
                    <div className="bg-white shadow rounded-lg">
                        <h3 className="text-lg font-medium text-gray-900 p-6 border-b">Team Members</h3>
                        <ul className="divide-y divide-gray-200">
                            {team.map(member => (
                                <li key={member.id} className="px-6 py-4">
                                    <p className="text-sm font-medium text-gray-800">{member.name}</p>
                                    <p className="text-sm text-gray-500">{member.role}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                     <div className="bg-white shadow rounded-lg">
                        <h3 className="text-lg font-medium text-gray-900 p-6 border-b">Subscribed Solutions</h3>
                        <ul className="divide-y divide-gray-200">
                             {subscribedSolutions.map(s => <li key={s} className="px-6 py-3 text-sm text-gray-700">{s}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="bg-white shadow rounded-lg">
                    <h3 className="text-lg font-medium text-gray-900 p-6 border-b">Saved Initiative Plans</h3>
                    <ul className="divide-y divide-gray-200">
                        {initiatives.length > 0 ? initiatives.map(i => (
                            <li key={i.id} className="px-6 py-4 text-sm">{i.name} ({i.pilots.length} pilots)</li>
                        )) : <li className="px-6 py-4 text-sm text-gray-500">No plans saved.</li>}
                    </ul>
                 </div>
                 <div className="bg-white shadow rounded-lg">
                    <h3 className="text-lg font-medium text-gray-900 p-6 border-b">Saved Integration Plans</h3>
                    <ul className="divide-y divide-gray-200">
                        {integrationPlans.length > 0 ? integrationPlans.map(p => (
                            <li key={p.id} className="px-6 py-4 text-sm">{p.name} ({p.integrations.length} integrations)</li>
                        )) : <li className="px-6 py-4 text-sm text-gray-500">No plans saved.</li>}
                    </ul>
                 </div>
             </div>
        </div>
    );
};

export default AdminCustomer360Page;
