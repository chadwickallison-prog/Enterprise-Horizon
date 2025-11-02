import React, { useState, useEffect } from 'react';
import { getOrders } from '../../services/apiService';
import type { Order, OrderState } from '../../types';

const getStatusColor = (status: OrderState) => {
    switch (status) {
        case 'LIVE': return 'bg-green-100 text-green-800';
        case 'PROVISION': return 'bg-blue-100 text-blue-800';
        case 'DRAFT':
        case 'QUOTE':
            return 'bg-gray-100 text-gray-800';
        case 'TERMINATE':
        case 'SUSPEND':
            return 'bg-red-100 text-red-800';
        default:
            return 'bg-yellow-100 text-yellow-800';
    }
};

const AdminOrdersPage: React.FC = () => {
    const [orders, setOrders] = useState<Order[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getOrders()
            .then(setOrders)
            .catch(console.error)
            .finally(() => setIsLoading(false));
    }, []);

    if (isLoading) {
        return <div className="p-4 text-center">Loading orders...</div>;
    }

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Orders & Changes</h1>
                <p className="mt-1 text-sm text-gray-600">Track all customer service orders and their current status.</p>
            </div>
            <div className="bg-white shadow rounded-lg overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Account</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created At</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {orders.map(order => (
                            <tr key={order.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-800">{order.id.split('-')[0]}...</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.accountName}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.project}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm">
                                     <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(order.state)}`}>
                                        {order.state}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(order.created_at).toLocaleDateString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminOrdersPage;
