import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ title, description, icon }) => (
  <motion.div
    className="bg-white text-primary p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
    whileHover={{ y: -5 }}
  >
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

export default FeatureCard;