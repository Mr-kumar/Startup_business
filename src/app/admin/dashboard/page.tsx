'use client'; // if you're in a Next.js app directory structure

import React from 'react';
import Navbar from '../(components)/AdminNavbar';
import TaskCard from '../(components)/TaskCard';
import { HiOfficeBuilding } from 'react-icons/hi';

const stats = [
    { label: 'My Open Deals', value: 8 },
    { label: 'My Untouched Deals', value: 2 },
    { label: 'My Calls Today', value: 0 },
    { label: 'My Leads', value: 10 },
];

const Dashboard: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <main className="p-6">
                <div className="p-6 bg-gray-100">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <div className="bg-blue-100 p-3 rounded-xl">
                                <HiOfficeBuilding className="text-blue-600 text-3xl" />
                            </div>
                            <h1 className="text-xl font-semibold">Welcome deepanshu varshney</h1>
                        </div>

                        {/* Home Selector + Reload */}
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => window.location.reload()}
                                className="text-gray-500 hover:text-gray-800"
                                title="Reload"
                            >
                                🔄
                            </button>
                            <select className="border rounded px-2 py-1 text-sm">
                                <option>deepanshu varshney&apos;s Home</option>
                            </select>
                            <button className="text-gray-500 hover:text-gray-800">⋮</button>
                        </div>
                    </div>

                    {/* Stat Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        {stats.map((stat) => (
                            <div
                                key={stat.label}
                                className="bg-white rounded-xl shadow p-4 flex flex-col justify-between"
                            >
                                <p className="text-sm text-gray-600">{stat.label}</p>
                                <p className="text-2xl font-semibold mt-2">{stat.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <TaskCard />
            </main>
        </div>
    );
};

export default Dashboard;
