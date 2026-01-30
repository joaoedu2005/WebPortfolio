import React from 'react';
import { Code2, ShieldCheck, Users, Cpu } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Specialties: React.FC = () => {
  const { t } = useLanguage();

  const specialtiesData = [
    {
      title: t.specialties.items.arch.title,
      description: t.specialties.items.arch.description,
      icon: Code2
    },
    {
      title: t.specialties.items.qa.title,
      description: t.specialties.items.qa.description,
      icon: ShieldCheck
    },
    {
      title: t.specialties.items.agile.title,
      description: t.specialties.items.agile.description,
      icon: Users
    },
    {
      title: t.specialties.items.ai.title,
      description: t.specialties.items.ai.description,
      icon: Cpu
    }
  ];

  return (
    <section id="specialties" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          {t.specialties.prefix} <span className="text-neon">{t.specialties.heading}.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialtiesData.map((item, index) => (
            <div key={index} className="bg-cardbg/50 p-6 rounded-lg border border-white/5 hover:border-neon/50 transition-colors duration-300 flex flex-col h-full">
              <div className="mb-6 bg-black/50 w-fit p-3 rounded-lg">
                <item.icon className="w-8 h-8 text-neon" />
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed flex-1">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};