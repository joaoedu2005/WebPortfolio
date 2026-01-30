import React, { useState } from 'react';
import { Project } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { X, Calendar, User, CheckCircle2 } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 'vittahub',
      title: t.portfolio.projects.vitta.title,
      category: t.portfolio.categories.health,
      imageUrl: 'print_screen_vittahub.png',
      scrollEffect: false,
      details: t.portfolio.projects.vitta.details
    },
    {
      id: 'sim',
      title: t.portfolio.projects.sim.title,
      category: t.portfolio.categories.automation,
      imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop',
      scrollEffect: false,
      details: t.portfolio.projects.sim.details
    },
    {
      id: 'craft',
      title: t.portfolio.projects.craft.title,
      category: t.portfolio.categories.ecommerce,
      imageUrl: 'print_screen_centroartesanato.png',
      scrollEffect: true,
      details: t.portfolio.projects.craft.details
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-black relative">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          {t.portfolio.prefix} <span className="text-neon">{t.portfolio.heading}.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project) => (
            <div 
              key={project.id} 
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-xl overflow-hidden border border-white/10 bg-cardbg h-[400px] cursor-pointer hover:border-neon/50 transition-all duration-300"
            >
              
              <div className="w-full h-full overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className={`w-full h-full object-cover transition-all ease-in-out duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40`}
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-8">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-neon font-mono text-xs uppercase tracking-wider mb-2 block">{project.category}</span>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 text-sm mt-2 font-medium flex items-center gap-2">
                       <span className="bg-white/10 px-3 py-1 rounded-full text-xs">
                         Ver detalhes +
                       </span>
                    </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Project Details */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedProject(null)}>
          <div 
            className="bg-[#111] border border-white/10 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-[0_0_50px_rgba(0,0,0,0.8)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative h-48 sm:h-64">
              <img 
                src={selectedProject.imageUrl} 
                alt={selectedProject.title} 
                className="w-full h-full object-cover opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent"></div>
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-neon hover:text-black text-white p-2 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-neon font-mono text-sm uppercase tracking-wider mb-2 block">{selectedProject.category}</span>
                <h3 className="text-3xl md:text-4xl font-bold text-white">{selectedProject.title}</h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 space-y-6">
              
              {/* Role & Duration */}
              <div className="flex flex-col md:flex-row gap-4 md:gap-8 border-b border-white/10 pb-6">
                <div className="flex items-center gap-3">
                  <div className="bg-neon/10 p-2 rounded-lg text-neon">
                    <User size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-widest">Role</p>
                    <p className="font-bold text-white">{selectedProject.details?.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-neon/10 p-2 rounded-lg text-neon">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-widest">Duration</p>
                    <p className="font-bold text-white">{selectedProject.details?.duration}</p>
                  </div>
                </div>
              </div>

              {/* Responsibilities */}
              <div>
                <h4 className="text-xl font-bold mb-4">Responsabilidades & Impacto</h4>
                <ul className="space-y-4">
                  {selectedProject.details?.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="text-neon shrink-0 w-5 h-5 mt-0.5" />
                      <span className="text-gray-300 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};