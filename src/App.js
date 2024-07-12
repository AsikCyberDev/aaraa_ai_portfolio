import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Demo from './components/Demo';
import Footer from './components/Footer';
import PlatformInsights from './components/PlatformInsights';

const App = () => {
  const [currentSection, setCurrentSection] = useState('home');

  return (
    <div className="bg-gradient-to-br from-primary to-secondary min-h-screen text-white font-sans">
      <Navigation setCurrentSection={setCurrentSection} />

      <main className="pt-20">
        <AnimatePresence mode="wait">
          {currentSection === 'home' && <Home setCurrentSection={setCurrentSection} />}
          {currentSection === 'features' && <Features />}
          {currentSection === 'pricing' && <Pricing />}
          {currentSection === 'demo' && <Demo />}
        </AnimatePresence>
      </main>

      {currentSection !== 'demo' && <PlatformInsights />}

      <Footer />
    </div>
  );
};

export default App;