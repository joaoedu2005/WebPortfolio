import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Specialties } from './components/Specialties';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Stack } from './components/Stack';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black text-white font-sans selection:bg-neon selection:text-black">
        <Header />
        <main>
          <Hero />
          <Specialties />
          <About />
          <Stack />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;