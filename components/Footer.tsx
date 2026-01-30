import React from 'react';
import { Instagram, Linkedin, Github, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-12 px-6 border-t border-white/10 bg-black">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Logo */}
        <div className="flex flex-col leading-none">
          <span className="text-neon font-black text-xl tracking-tighter">JEOG</span>
        </div>

        {/* Contact Link */}
        <a href="mailto:joaoeduardogirao@gmail.com" className="flex items-center gap-2 text-white hover:text-neon transition-colors text-sm">
          <Mail size={16} />
          joaoeduardogirao@gmail.com
        </a>

        {/* Socials & Copyright */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex gap-4">
             <a href="https://www.instagram.com/joaoedugirao16/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-neon flex items-center justify-center text-black hover:bg-white transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://www.linkedin.com/in/joaoedugirao/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-neon flex items-center justify-center text-black hover:bg-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/joaoedu2005" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-neon flex items-center justify-center text-black hover:bg-white transition-colors">
              <Github size={20} />
            </a>
          </div>
          <p className="text-gray-600 text-xs">
            © 2026 {t.footer.rights}
          </p>
        </div>

      </div>
    </footer>
  );
};