import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Header from './components/Header';
import Hero from './components/Hero';
import ThemeShowcase from './components/ThemeShowcase';
import SeoFeature from './components/SeoFeature';
import OmnichannelTabs from './components/OmnichannelTabs';
import StatsAndTestimonials from './components/StatsAndTestimonials';
import FaqAccordion from './components/FaqAccordion';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import TrialModal from './components/TrialModal';

export default function App() {
  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const [initialData, setInitialData] = useState('');

  // Initialize Lenis Smooth Scroll with Golden Ratio Lerp (0.05) & Exponential Decay for ULTIMATE SMOOTHNESS
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.05,
      duration: 2.0,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.8,
      touchMultiplier: 2.0,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleOpenTrial = (data = '') => {
    setInitialData(data);
    setTrialModalOpen(true);
  };

  const handleCloseTrial = () => {
    setTrialModalOpen(false);
  };

  return (
    <div className="app-container">
      <Header onOpenTrial={handleOpenTrial} />
      <main>
        <Hero onOpenTrial={handleOpenTrial} />
        <ThemeShowcase onOpenTrial={handleOpenTrial} />
        <SeoFeature onOpenTrial={handleOpenTrial} />
        <OmnichannelTabs onOpenTrial={handleOpenTrial} />
        <StatsAndTestimonials />
        <FaqAccordion onOpenTrial={handleOpenTrial} />
        <CtaBanner onOpenTrial={handleOpenTrial} />
      </main>
      <Footer />
      <TrialModal 
        isOpen={trialModalOpen} 
        onClose={handleCloseTrial} 
        initialData={initialData} 
      />
    </div>
  );
}
