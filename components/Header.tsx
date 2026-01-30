import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm py-4 border-b border-white/10">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex flex-col leading-none">
          <span className="text-gray-400 text-xs tracking-widest uppercase">Portfolio</span>
          <span className="text-neon font-black text-2xl tracking-tighter">JEOG</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#home" className="hover:text-neon transition-colors">{t.nav.home}</a>
          <a href="#specialties" className="hover:text-neon transition-colors">{t.nav.specialties}</a>
          <a href="#about" className="hover:text-neon transition-colors">{t.nav.about}</a>
          <a href="#projects" className="hover:text-neon transition-colors">{t.nav.projects}</a>
          <a href="#stack" className="hover:text-neon transition-colors">{t.nav.stack}</a>
        </nav>

        {/* Right Side: Flags & CTA */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex gap-2 select-none">
            <span 
              onClick={() => setLanguage('PT')}
              className={`text-xl cursor-pointer hover:scale-110 transition-transform ${language === 'PT' ? 'opacity-100 scale-110' : 'opacity-40 hover:opacity-100'}`}
              title="Português"
            >
              🇧🇷
            </span>
            <span 
              onClick={() => setLanguage('ES')}
              className={`text-xl cursor-pointer hover:scale-110 transition-transform ${language === 'ES' ? 'opacity-100 scale-110' : 'opacity-40 hover:opacity-100'}`}
              title="Español"
            >
              🇪🇸
            </span>
            <span 
              onClick={() => setLanguage('US')}
              className={`text-xl cursor-pointer hover:scale-110 transition-transform ${language === 'US' ? 'opacity-100 scale-110' : 'opacity-40 hover:opacity-100'}`}
              title="English"
            >
              🇺🇸
            </span>
          </div>
          <a 
            href="http://wa.me/5588993519649"
            target='blank' 
            className="bg-white text-black font-bold px-6 py-2 rounded-full hover:bg-neon transition-all duration-300"
          >
            {t.nav.contact}
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black border-b border-white/10 py-4 px-6 flex flex-col gap-4">
           {/* Mobile Flags */}
           <div className="flex gap-4 mb-2 justify-center border-b border-white/10 pb-4">
            <span onClick={() => setLanguage('PT')} className={`text-2xl ${language === 'PT' ? 'opacity-100' : 'opacity-50'}`}>🇧🇷</span>
            <span onClick={() => setLanguage('ES')} className={`text-2xl ${language === 'ES' ? 'opacity-100' : 'opacity-50'}`}>🇪🇸</span>
            <span onClick={() => setLanguage('US')} className={`text-2xl ${language === 'US' ? 'opacity-100' : 'opacity-50'}`}>🇺🇸</span>
          </div>
          <a href="#home" className="text-white hover:text-neon" onClick={() => setIsMenuOpen(false)}>{t.nav.home}</a>
          <a href="#specialties" className="text-white hover:text-neon" onClick={() => setIsMenuOpen(false)}>{t.nav.specialties}</a>
          <a href="#about" className="text-white hover:text-neon" onClick={() => setIsMenuOpen(false)}>{t.nav.about}</a>
          <a href="#projects" className="text-white hover:text-neon" onClick={() => setIsMenuOpen(false)}>{t.nav.projects}</a>
          <a href="#stack" className="text-white hover:text-neon" onClick={() => setIsMenuOpen(false)}>{t.nav.stack}</a>
          <a href="#contact" className="text-neon font-bold mt-2" onClick={() => setIsMenuOpen(false)}>{t.nav.contact}</a>
        </div>
      )}
    </header>
  );
};