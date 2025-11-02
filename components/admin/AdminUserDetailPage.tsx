import React from 'react';

// This component can be used as a wrapper or for a simpler detail view if needed.
// For the current implementation, AdminApp routes directly to AdminCustomer360Page.

const AdminUserDetailPage: React.FC = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-900">User Detail</h1>
            <p className="mt-1 text-sm text-gray-600">Loading user details...</p>
        </div>
    );
};

export default AdminUserDetailPage;
