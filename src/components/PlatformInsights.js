import React from 'react';
import { motion } from 'framer-motion';
import AnalyticsChart from './AnalyticsChart';
import { FiUsers, FiMessageSquare, FiPieChart } from 'react-icons/fi';

const StatCard = ({ icon, title, value, change }) => (
  <motion.div 
    className="bg-white p-6 rounded-lg shadow-lg"
    whileHover={{ y: -5 }}
    transition={{ duration: 0.3 }}
  >
    <div className="flex items-center justify-between mb-4">
      <div className="text-3xl text-indigo-500">{icon}</div>
      <div className={`text-sm font-semibold ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
        {change >= 0 ? '▲' : '▼'} {Math.abs(change)}%
      </div>
    </div>
    <h3 className="text-lg font-semibold text-gray-700 mb-2">{title}</h3>
    <p className="text-2xl font-bold text-gray-900">{value.toLocaleString()}</p>
  </motion.div>
);

const PlatformInsights = () => (
  <section className="py-20 bg-gray-100">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Platform Insights</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <StatCard icon={<FiUsers />} title="Total Users" value={125000} change={12} />
        <StatCard icon={<FiMessageSquare />} title="Messages Sent" value={1250000} change={8} />
        <StatCard icon={<FiPieChart />} title="Satisfaction Rate" value={98} change={-2} />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">User Engagement Trends</h3>
        <AnalyticsChart />
      </div>
    </div>
  </section>
);

export default PlatformInsights;