import React from 'react';
import Card from '../components/Card';

function Dashboard() {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">Welcome, Shanaya!</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Total Users" value="100" />
        <Card title="Active Users" value="80" />
        <Card title="New Signups" value="20" />
      </div>
    </div>
  );
}

export default Dashboard;