'use client';
import React from 'react';
import { Code2, Settings, Bot, Palette, TrendingUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Specialties: React.FC = () => {
  const { t } = useLanguage();

  const specialtiesData = [
    {
      title: t.specialties.items.id.title,
      description: t.specialties.items.id.description,
      icon: Palette
    },
    {
      title: t.specialties.items.web.title,
      description: t.specialties.items.web.description,
      icon: Code2
    },
    {
      title: t.specialties.items.ads.title,
      description: t.specialties.items.ads.description,
      icon: TrendingUp
    },
    {
      title: t.specialties.items.qa.title,
      description: t.specialties.items.qa.description,
      icon: Settings
    },
    {
      title: t.specialties.items.auto.title,
      description: t.specialties.items.auto.description,
      icon: Bot
    }
  ];

  return (
    <section id="specialties" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          {t.specialties.prefix} <span className="text-neon">{t.specialties.heading}.</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {specialtiesData.map((item, index) => (
            <div key={index} className="w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.33%-2rem)]  min-w-[280px] bg-transparent p-6 rounded-lg group hover:bg-cardbg transition-colors duration-300 border border-transparent hover:border-white/10 flex flex-col">
              <div className="mb-6">
                <item.icon className="w-12 h-12 text-neon stroke-[1.5]" />
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};