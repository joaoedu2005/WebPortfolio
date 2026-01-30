import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Mail, Linkedin, ExternalLink } from 'lucide-react';

export const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-neon/5 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto max-w-4xl relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase leading-tight">
          {t.contact.title} <br />
          <span className="text-neon stroke-text">{t.contact.subtitle}</span>
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          {t.contact.text}
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a 
            href={`mailto:${t.contact.email}`}
            className="flex items-center gap-3 bg-white text-black font-bold px-8 py-4 rounded-xl hover:bg-neon transition-all duration-300 w-full md:w-auto justify-center"
          >
            <Mail size={20} />
            {t.contact.email}
          </a>
          
          <a 
            href={`https://${t.contact.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-cardbg border border-white/10 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-300 w-full md:w-auto justify-center"
          >
            <Linkedin size={20} />
            LinkedIn <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};