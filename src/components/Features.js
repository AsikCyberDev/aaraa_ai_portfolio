import React from 'react';
import { motion } from 'framer-motion';
import FeatureCard from './FeatureCard';

const featuresData = [
  { title: "Natural Language Processing", description: "Understand and respond to complex human language patterns with ease.", icon: "🧠" },
  { title: "Machine Learning Integration", description: "Continuously improve performance based on interactions and feedback.", icon: "🤖" },
  { title: "Advanced Analytics", description: "Gain insights into user behavior and chatbot performance metrics.", icon: "📊" },
  { title: "Multi-Platform Support", description: "Deploy your chatbot across web, mobile, and messaging platforms.", icon: "🌐" },
  { title: "Customizable Responses", description: "Tailor your chatbot's personality and knowledge base to fit your brand.", icon: "🎨" },
  { title: "Seamless Integration", description: "Easily integrate with your existing systems and workflows.", icon: "🔗" }
];

const Features = () => (
  <motion.section
    key="features"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="min-h-screen py-20 px-4"
  >
    <div className="container mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center font-display">Platform Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuresData.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  </motion.section>
);

export default Features;