import React from 'react';
import { motion } from 'framer-motion';

const Home = ({ setCurrentSection }) => (
  <motion.section
    key="home"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="h-screen flex items-center justify-center px-4"
  >
    <div className="text-center">
      <motion.h1 
        className="text-5xl md:text-7xl font-bold mb-6 font-display"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        The Future of Conversation
      </motion.h1>
      <motion.p 
        className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Experience AI-powered communication like never before with our interactive 3D chatbot
      </motion.p>
      <motion.button 
        onClick={() => setCurrentSection('demo')} 
        className="bg-accent text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-80 transition-all duration-300 shadow-neon"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Try Live Demo
      </motion.button>
    </div>
  </motion.section>
);

export default Home;