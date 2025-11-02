import React from 'react';

interface AdminChartWrapperProps {
    title: string;
    children: React.ReactNode;
    className?: string;
}

const AdminChartWrapper: React.FC<AdminChartWrapperProps> = ({ title, children, className = '' }) => {
    return (
        <div className={`bg-white shadow rounded-lg ${className}`}>
            <h3 className="text-lg font-medium text-gray-900 p-6 border-b border-gray-200">
                {title}
            </h3>
            <div className="p-6">
                {children}
            </div>
        </div>
    );
};

export default AdminChartWrapper;
