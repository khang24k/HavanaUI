import React, { useState } from 'react';
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
        <FaqAccordion />
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
