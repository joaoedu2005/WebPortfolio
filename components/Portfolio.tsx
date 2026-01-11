'use client';
import React from 'react';
import { Project } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

export const Portfolio: React.FC = () => {
  const { t } = useLanguage();

  // Make sure to add these files to your public/ root folder:
  // maxconsult_full.png
  // artesanato_full.png
  // unimed_full.png
  const projects: Project[] = [
    {
      id: 'maxconsult',
      title: 'MaxConsult',
      category: t.portfolio.categories.solar,
      imageUrl: '/maxconsult_full.png', 
      featured: true,
      scrollEffect: true
    },
    {
      id: 'craft',
      title: 'Centro de Artesanato',
      category: t.portfolio.categories.ecommerce,
      imageUrl: '/artesanato_full.png', 
      scrollEffect: true
    },
    {
      id: 'unimed',
      title: 'Unimed Concept',
      category: t.portfolio.categories.health,
      imageUrl: '/Unimed_LandingPage_Tela_Inteira1.png', 
      scrollEffect: true
    },
    {
      id: 'n8n',
      title: 'Chatbot para Whatsapp',
      category: t.portfolio.categories.automation,
      imageUrl: '/whatsappchatbot.jpeg',
      scrollEffect: true // Keeping original zoom effect
    }
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          {t.portfolio.prefix} <span className="text-neon">{t.portfolio.heading}.</span>
        </h2>

        {/* Adjusted grid to 2x2 for 4 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
            <div key={project.id} className="group relative rounded-2xl overflow-hidden border border-white/10 bg-cardbg h-[500px]">
              
              {/* Image Container with Scrolling Animation OR Scale Effect */}
              <div className="w-full h-full overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className={`w-full h-full object-cover transition-all ease-in-out ${
                    project.scrollEffect 
                      ? "object-top group-hover:object-bottom duration-[4000ms]" 
                      : "object-center transform group-hover:scale-105 duration-700"
                  }`}
                />
              </div>
              
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none opacity-100 flex flex-col justify-end p-8">
                <div className="bg-black/80 backdrop-blur-sm p-4 rounded-lg border border-white/5 inline-block self-start transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-neon font-bold text-sm block mb-1">{project.category}</span>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};