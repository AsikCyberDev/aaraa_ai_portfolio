import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ChatInterface from './ChatInterface';

const InteractiveChatbotScene = () => {
  const [currentKudo, setCurrentKudo] = useState(0);
  const [showKudos, setShowKudos] = useState(false);

  const kudos = [
    "Increased Customer Satisfaction by 40%",
    "Reduced Response Time by 80%",
    "Handled 10,000+ Queries Daily",
    "98% Accuracy in Intent Recognition",
    "Seamless Integration with 20+ Platforms",
    "50% Reduction in Customer Service Costs"
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowKudos(true);
    }, 5000); // Start showing kudos after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showKudos) {
      const interval = setInterval(() => {
        setCurrentKudo((prevKudo) => (prevKudo + 1) % kudos.length);
      }, 3000); // Change kudo every 3 seconds

      return () => clearInterval(interval);
    }
  }, [showKudos, kudos.length]);

  return (
    <div className="relative h-screen bg-gradient-to-br from-indigo-900 to-blue-900 flex items-center justify-center">
      <div className="text-center text-white max-w-2xl px-4">
        <h1 className="text-4xl font-bold mb-6">Experience Next-Gen AI Interaction</h1>
        <p className="text-xl mb-8">
          Engage with our advanced AI chatbot and discover how it can revolutionize your customer interactions. 
          Ask anything to get started!
        </p>
      </div>

      <AnimatePresence>
        {showKudos && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="absolute bottom-20 left-0 right-0 text-center"
          >
            <div className="bg-black bg-opacity-50 text-white py-4 px-8 inline-block rounded-lg">
              <h2 className="text-2xl font-semibold mb-2">Did you know?</h2>
              <p className="text-lg">{kudos[currentKudo]}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-4 right-4 w-96"
      >
        <ChatInterface />
      </motion.div>
    </div>
  );
};

export default InteractiveChatbotScene;