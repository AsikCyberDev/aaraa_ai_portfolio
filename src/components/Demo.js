import React from 'react';
import { motion } from 'framer-motion';
import InteractiveChatbotScene from './InteractiveChatbotScene';

const Demo = () => (
  <motion.section
    key="demo"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="min-h-screen relative overflow-hidden"
  >
    <InteractiveChatbotScene />
  </motion.section>
);

export default Demo;