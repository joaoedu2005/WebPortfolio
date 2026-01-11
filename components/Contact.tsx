'use client';
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-transparent to-[#0a0a0a]">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 uppercase">
          {t.contact.prefix} <span className="text-neon">{t.contact.highlight}</span>
        </h2>

        <form 
          action="https://formsubmit.co/joaoeduardogirao@gmail.com" 
          method="POST" 
          className="space-y-6"
        >
          {/* FormSubmit Configuration */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          
          <input 
            type="text" 
            name="name"
            placeholder={t.contact.namePlaceholder}
            required
            className="w-full bg-inputbg text-white px-6 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon border border-transparent transition-all"
          />
          <input 
            type="email" 
            name="email"
            placeholder={t.contact.emailPlaceholder}
            required
            className="w-full bg-inputbg text-white px-6 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon border border-transparent transition-all"
          />
          <textarea 
            name="message"
            placeholder={t.contact.messagePlaceholder}
            rows={5}
            required
            className="w-full bg-inputbg text-white px-6 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon border border-transparent transition-all resize-none"
          ></textarea>

          <button 
            type="submit" 
            className="bg-neon text-black font-extrabold px-12 py-4 rounded-lg hover:bg-green-400 transition-all duration-300 uppercase tracking-wide hover:shadow-[0_0_30px_rgba(0,230,0,0.6)] hover:scale-105"
          >
            {t.contact.send}
          </button>
        </form>
      </div>
    </section>
  );
};