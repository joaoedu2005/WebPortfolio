import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowDown, Download } from 'lucide-react';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="pt-32 pb-20 px-6 min-h-[90vh] flex items-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Text Content */}
        <div className="flex-1 max-w-2xl">
          <span className="text-neon font-mono tracking-wider text-sm mb-4 block">
             &lt;{t.hero.role} /&gt;
          </span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            {t.hero.title} <span className="text-neon block">{t.hero.subtitle}</span>
          </h1>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-xl border-l-2 border-neon pl-6">
            {t.hero.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#projects" 
              className="inline-flex items-center justify-center gap-2 bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-neon transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,230,0,0.4)]"
            >
              {t.hero.cta} <ArrowDown size={18} />
            </a>

            <a 
              href="https://drive.google.com/file/d/15JCdWC2GOIaBWBf2A9pRptG0v2vLYmLM/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-bold px-8 py-3 rounded-full hover:bg-white/10 hover:border-neon/50 transition-all duration-300"
            >
              {t.hero.downloadCv} <Download size={18} />
            </a>
          </div>
        </div>

        {/* Hero Image - Hexagon */}
        <div className="flex-1 flex justify-center md:justify-end relative">
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-neon/10 blur-3xl rounded-full"></div>
            <div className="relative w-full h-full hexagon overflow-hidden border-4 border-neon/50 shadow-[0_0_30px_rgba(0,230,0,0.2)]">
               {/* Updated with foto_editada.png */}
              <img 
                src="foto_editada.png" 
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