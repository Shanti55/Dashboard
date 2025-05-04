import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-blue-700 text-white p-6 rounded-r-xl">
      <h1 className="text-2xl font-bold mb-8">Dashboard</h1>
      <ul className="space-y-4">
        <li><NavLink to="/" className="block bg-blue-600 px-3 py-2 rounded">Home</NavLink></li>
        <li><NavLink to="/profile" className="block hover:bg-blue-600 px-3 py-2 rounded">Profile</NavLink></li>
        <li><NavLink to="/settings" className="block hover:bg-blue-600 px-3 py-2 rounded">Settings</NavLink></li>
      </ul>
    </aside>
  );
}

export default Sidebar;