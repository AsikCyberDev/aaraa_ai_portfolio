import React from 'react';
import { motion } from 'framer-motion';

const PricingCard = ({ title, price, features, highlighted = false }) => (
  <motion.div
    className={`bg-white text-indigo-900 p-6 rounded-lg shadow-lg ${
      highlighted ? 'border-4 border-yellow-400' : ''
    }`}
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-4xl font-bold mb-6">
      {typeof price === 'number' ? `$${price}` : price}
      <span className="text-xl font-normal">/month</span>
    </p>
    <ul className="mb-6">
      {features.map((feature, index) => (
        <li key={index} className="mb-2 flex items-center">
          <span className="text-green-500 mr-2">✓</span> {feature}
        </li>
      ))}
    </ul>
    <button className={`w-full py-2 px-4 rounded-full font-bold transition-colors ${
      highlighted
        ? 'bg-yellow-400 text-indigo-900 hover:bg-yellow-500'
        : 'bg-indigo-600 text-white hover:bg-indigo-700'
    }`}>
      Choose Plan
    </button>
  </motion.div>
);

export default PricingCard;