import React, { useState, useEffect } from 'react';
import { getServiceInstancesWithSlo } from '../../services/apiService';
import type { ServiceInstance, ServiceState } from '../../types';
import AdminSloChart from './AdminSloChart';

const getStatusColor = (status: ServiceState) => {
    switch (status) {
        case 'LIVE': return 'bg-green-100 text-green-800';
        case 'PROVISIONING': return 'bg-blue-100 text-blue-800';
        default: return 'bg-red-100 text-red-800';
    }
};

const AdminSlaMonitoringPage: React.FC = () => {
    const [services, setServices] = useState<ServiceInstance[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getServiceInstancesWithSlo()
            .then(setServices)
            .catch(console.error)
            .finally(() => setIsLoading(false));
    }, []);

    if (isLoading) {
        return <div className="p-4 text-center">Loading service instances...</div>;
    }

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">SLA / SLO Monitoring</h1>
                <p className="mt-1 text-sm text-gray-600">Live health and performance monitoring for all provisioned services.</p>
            </div>
            
            {services.map(service => (
                <div key={service.id} className="bg-white shadow rounded-lg">
                    <div className="p-6 border-b border-gray-200">
                        <div className="flex justify-between items-start">
                            <div>
                                <h2 className="text-lg font-bold text-gray-900">{service.skuName}</h2>
                                <p className="text-sm text-gray-500">Account: {service.accountName}</p>
                                <p className="text-xs text-gray-400 font-mono mt-1">Instance ID: {service.id}</p>
                            </div>
                            <span className={`px-3 py-1 text-xs leading-5 font-semibold rounded-full ${getStatusColor(service.state)}`}>
                                {service.state}
                            </span>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200">
                        {service.sloMetrics.map(metric => (
                            <div key={metric.name} className="bg-gray-50 p-4">
                                <AdminSloChart metric={metric} />
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            {services.length === 0 && (
                 <div className="bg-white shadow rounded-lg p-8 text-center">
                    <p className="text-gray-500">No live service instances with SLOs found.</p>
                </div>
            )}
        </div>
    );
};

export default AdminSlaMonitoringPage;