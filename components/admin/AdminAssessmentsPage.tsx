import React, { useState, useEffect } from 'react';
import type { AssessmentReport } from '../../types';
import { getAssessmentRecords } from '../../services/apiService';
import type { AssessmentRecord } from '../../types';


interface AdminAssessmentsPageProps {
    onViewCustomer: (email: string) => void;
}

const AdminAssessmentsPage: React.FC<AdminAssessmentsPageProps> = ({ onViewCustomer }) => {
    const [assessmentRecords, setAssessmentRecords] = useState<AssessmentRecord[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getAssessmentRecords()
            .then(data => {
                setAssessmentRecords(data.sort((a, b) => new Date(b.report.createdAt).getTime() - new Date(a.report.createdAt).getTime()));
                setIsLoading(false);
            })
            .catch(console.error);
    }, []);
    
    if (isLoading) {
        return <div className="p-4 text-center">Loading assessments...</div>;
    }

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">All Assessments</h1>
                <p className="mt-1 text-sm text-gray-600">A log of all assessments completed by users.</p>
            </div>
             <div className="bg-white shadow rounded-lg overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer Name</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SII Score</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Completed</th>
                            <th scope="col" className="relative px-6 py-3"><span className="sr-only">View Customer</span></th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {assessmentRecords.length > 0 ? assessmentRecords.map(({report, user}) => (
                            <tr key={report.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.username}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{report.siiScore}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(report.createdAt).toLocaleString()}</td>
                                 <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <button onClick={() => onViewCustomer(user.email)} className="text-blue-600 hover:text-blue-900">View Customer</button>
                                </td>
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan={4} className="px-6 py-4 text-center text-sm text-gray-500">No assessments found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminAssessmentsPage;