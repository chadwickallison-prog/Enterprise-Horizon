import React, { useState, useEffect } from 'react';
import { getServiceCatalog } from '../../services/apiService';
import type { Sku } from '../../types';

const AdminServiceCatalogPage: React.FC = () => {
    const [catalog, setCatalog] = useState<Sku[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getServiceCatalog()
            .then(setCatalog)
            .catch(console.error)
            .finally(() => setIsLoading(false));
    }, []);

    if (isLoading) {
        return <div className="p-4 text-center">Loading service catalog...</div>;
    }

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">Service Catalog</h1>
                <p className="mt-1 text-sm text-gray-600">Manage all available products, services, and solutions (SKUs).</p>
            </div>
            <div className="bg-white shadow rounded-lg overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SKU ID</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {catalog.map(sku => (
                            <tr key={sku.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-800">{sku.id}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{sku.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{sku.type}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                        sku.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                    }`}>
                                        {sku.active ? 'Active' : 'Inactive'}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminServiceCatalogPage;
