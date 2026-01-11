'use client';
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="0" fill="currentColor" className="text-black">
     <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="pt-32 pb-20 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Text Content */}
        <div className="flex-1 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            {t.hero.title} <span className="text-neon block">{t.hero.subtitle}</span>
          </h1>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-xl">
            {t.hero.description}
          </p>
          {/* REPLACE '5500000000000' with your actual WhatsApp Number in the href below */}
          <a 
            href="https://wa.me/5588993519649?text=Ol%C3%A1%2C%20vim%20pelo%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20saber%20mais." 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-neon text-black font-bold px-8 py-3 rounded-full hover:bg-green-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,230,0,0.6)] hover:scale-105"
          >
            {t.hero.cta} <WhatsAppIcon />
          </a>
        </div>

        {/* Hero Image - Hexagon */}
        <div className="flex-1 flex justify-center md:justify-end relative">
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-neon/20 blur-3xl rounded-full"></div>
            <div className="relative w-full h-full hexagon overflow-hidden border-4 border-neon shadow-[0_0_30px_rgba(0,230,0,0.5)]">
               {/* Updated with foto_editada.png */}
              <img 
                src="fotominha.jpg" 
                alt="João Eduardo" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};