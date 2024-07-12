import React from 'react';
import { motion } from 'framer-motion';

const Navigation = ({ setCurrentSection }) => (
  <nav className="fixed w-full z-10 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <motion.h1 
        className="text-2xl font-bold font-display"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Aaraa.Ai
      </motion.h1>
      <motion.div 
        className="space-x-4"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {['home', 'features', 'pricing', 'demo'].map((section) => (
          <button
            key={section}
            onClick={() => setCurrentSection(section)}
            className="text-white hover:text-accent transition-colors duration-300 capitalize"
          >
            {section}
          </button>
        ))}
      </motion.div>
    </div>
  </nav>
);

export default Navigation;