'use client';
import React from 'react';
import { Instagram, Linkedin, Github } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 px-6 bg-cardbg/30">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Image - Styled like a card/poster */}
        <div className="flex-1">
          <div className="relative max-w-md mx-auto transform -rotate-2 hover:rotate-0 transition-transform duration-500">
             {/* Updated with minhafotosescomp.jpg */}
            <img 
              src="minhafotosescomp.jpg" 
              alt="João Eduardo" 
              className="rounded-xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 border border-white/10"
            />
          </div>
        </div>

        {/* Text */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-bold">
            {t.about.prefix},<br />
            <span className="text-neon">{t.about.title}</span>
          </h2>
          
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>
          </div>

          <div className="flex gap-4 pt-4">
            <a href="https://www.instagram.com/joaoedugirao16/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-neon flex items-center justify-center text-black hover:bg-white transition-colors">
              <Instagram size={24} />
            </a>
            <a href="https://www.linkedin.com/in/joaoedugirao/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-neon flex items-center justify-center text-black hover:bg-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/joaoedu2005" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-neon flex items-center justify-center text-black hover:bg-white transition-colors">
              <Github size={24} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};