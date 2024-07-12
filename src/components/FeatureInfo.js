import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FeatureInfo = ({ feature }) => {
  const featureDetails = {
    NLP: "Our Natural Language Processing capabilities allow chatbots to understand and respond to complex human language patterns.",
    ML: "Machine Learning algorithms continuously improve the chatbot's performance based on interactions and feedback.",
    Analytics: "Advanced analytics provide insights into user behavior, popular queries, and chatbot performance metrics."
  };

  return (
    <AnimatePresence>
      {feature && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="absolute top-4 left-4 bg-white p-4 rounded-lg shadow-lg"
        >
          <h3 className="text-lg font-bold mb-2">{feature}</h3>
          <p>{featureDetails[feature]}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FeatureInfo;