import React from 'react';
import Dashboard from '../../components/Elements/Dashboard'; // Import the Dashboard component

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-teal-600 mb-6">Admin Dashboard</h1>
      <Dashboard />
    </div>
  );
};

export default AdminDashboard;
