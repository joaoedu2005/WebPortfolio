import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Layout, Server, CheckCircle, Terminal } from 'lucide-react';

export const Stack: React.FC = () => {
  const { t } = useLanguage();

  // Helper to get devicon class
  // Using 'plain' versions where possible ensures they inherit the text color (gray/white)
  // This is critical for dark mode, as 'original' icons for Next.js/GitHub are often black and invisible.
  const getDeviconClass = (skill: string) => {
    const map: Record<string, string> = {
      'React.js': 'devicon-react-original', // React original is blue, visible on black
      'Next.js': 'devicon-nextjs-plain', // Original is black, plain inherits text color
      'TypeScript': 'devicon-typescript-plain',
      'Tailwind CSS': 'devicon-tailwindcss-original',
      'Angular': 'devicon-angular-plain',
      'Figma': 'devicon-figma-plain',
      'Node.js': 'devicon-nodejs-plain',
      'Nest.js': 'devicon-nestjs-plain',
      'Express.js': 'devicon-express-original', // Express original is black. Might need specific handling or be invisible.
      'PostgreSQL': 'devicon-postgresql-plain',
      'MySQL': 'devicon-mysql-plain',
      'MongoDB': 'devicon-mongodb-plain',
      'Redis': 'devicon-redis-plain',
      'Cypress': 'devicon-cypressio-plain',
      'Postman': 'devicon-postman-plain',
      'Swagger': 'devicon-swagger-plain',
      'Jira': 'devicon-jira-plain',
      'Unit Testing': 'devicon-jest-plain',
      'Automated Testing': 'devicon-selenium-plain', // Use plain for visibility
      'Git / Github': 'devicon-github-original', // GitHub original is black. Special handling added below.
      'Docker': 'devicon-docker-plain',
      'n8n': 'devicon-n8n-plain',
      'RAG (AI)': 'devicon-python-plain',
      'Scrum / Kanban': 'devicon-trello-plain'
    };

    return map[skill] || '';
  };

  const stackCategories = [
    {
      key: 'frontend',
      title: t.stack.categories.frontend,
      icon: Layout,
      skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Angular', 'Figma']
    },
    {
      key: 'backend',
      title: t.stack.categories.backend,
      icon: Server,
      skills: ['Node.js', 'Nest.js', 'Express.js', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis']
    },
    {
      key: 'qa',
      title: t.stack.categories.qa,
      icon: CheckCircle,
      skills: ['Cypress', 'Postman', 'Swagger', 'Jira', 'Unit Testing', 'Automated Testing']
    },
    {
      key: 'tools',
      title: t.stack.categories.tools,
      icon: Terminal,
      skills: ['Git / Github', 'Docker', 'n8n', 'RAG (AI)', 'Scrum / Kanban']
    }
  ];

  return (
    <section id="stack" className="py-24 px-6 bg-cardbg/20">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          {t.stack.prefix} <span className="text-neon">{t.stack.heading}.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {stackCategories.map((category) => (
            <div key={category.key} className="bg-black/50 border border-white/5 rounded-2xl p-8 hover:border-neon/30 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-neon/10 p-3 rounded-lg text-neon">
                  <category.icon size={24} />
                </div>
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill) => {
                  const iconClass = getDeviconClass(skill);
                  // Special handling for dark icons on dark background
                  const isDarkIcon = skill === 'Git / Github' || skill === 'Express.js';
                  // If it's a dark icon, force it to be white using filter or background
                  const iconStyleClass = isDarkIcon ? 'bg-white rounded-full p-0.5 text-black' : 'text-gray-400';

                  return (
                    <div 
                      key={skill} 
                      className="flex flex-col items-center justify-center p-3 bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 hover:border-neon/30 hover:scale-105 transition-all duration-300 group cursor-default h-24"
                    >
                      {iconClass ? (
                         <i className={`${iconClass} text-3xl mb-2 ${iconStyleClass} group-hover:text-white transition-colors`}></i>
                      ) : (
                         <div className="w-8 h-8 rounded-full bg-white/10 mb-2 flex items-center justify-center text-xs font-bold text-gray-400 group-hover:text-white">
                           {skill.charAt(0)}
                         </div>
                      )}
                      <span className="text-xs font-mono text-gray-400 group-hover:text-white text-center leading-tight">
                        {skill}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};