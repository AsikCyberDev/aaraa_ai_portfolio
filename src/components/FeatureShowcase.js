import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FeatureShowcase = () => {
  const [activeFeature, setActiveFeature] = useState(null);

  const features = [
    { id: 'nlp', name: 'Natural Language Processing', description: 'Understand and respond to complex human language patterns.' },
    { id: 'ml', name: 'Machine Learning', description: 'Continuously improve performance based on interactions.' },
    { id: 'analytics', name: 'Advanced Analytics', description: 'Gain insights into user behavior and chatbot performance.' }
  ];

  return (
    <div className="bg-white text-indigo-900 p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-4">Key Features</h3>
      <div className="flex space-x-4 mb-4">
        {features.map(feature => (
          <button
            key={feature.id}
            onClick={() => setActiveFeature(feature.id)}
            className={`px-4 py-2 rounded-full ${
              activeFeature === feature.id
                ? 'bg-indigo-600 text-white'
                : 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200'
            }`}
          >
            {feature.name}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        {activeFeature && (
          <motion.div
            key={activeFeature}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-indigo-50 p-4 rounded-lg"
          >
            <p>{features.find(f => f.id === activeFeature).description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FeatureShowcase;