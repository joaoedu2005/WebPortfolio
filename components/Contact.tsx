import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Check, ArrowRight, AlertCircle, Rocket } from 'lucide-react';

export const Contact: React.FC = () => {
  const { t } = useLanguage();

  const createWhatsappLink = (message: string) => {
    return `https://wa.me/5588981615599?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-b from-cardbg to-black relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] max-w-none bg-neon/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase leading-tight tracking-tight">
            {t.contact.ctaTitle} <br />
            <span className="text-neon drop-shadow-[0_0_15px_rgba(0,230,0,0.5)]">
                {t.contact.ctaSubtitle}
            </span>
            </h2>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-2 flex items-center justify-center gap-2">
                  <AlertCircle className="text-neon" />
                  {t.contact.introTitle}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                    {t.contact.introText}
                </p>
            </div>
        </div>

        {/* Pricing Cards Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* CARD 1: LOW TICKET (Pain Relief) */}
            <div className="bg-cardbg border border-white/10 rounded-3xl p-8 md:p-10 flex flex-col relative overflow-hidden hover:border-neon/50 transition-colors duration-300 group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Rocket size={100} />
                </div>
                
                <div className="mb-6">
                    <span className="inline-block bg-white/10 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
                        Para começar
                    </span>
                    <h3 className="text-2xl font-black italic text-gray-200">{t.contact.plans.slice.title}</h3>
                    <p className="text-gray-400 mt-2 min-h-[3rem] font-medium">{t.contact.plans.slice.subtitle}</p>
                </div>

                <div className="mb-8">
                    <span className="text-4xl md:text-5xl font-bold text-white tracking-tight">{t.contact.plans.slice.price}</span>
                </div>

                <ul className="space-y-4 mb-8 flex-1">
                    {t.contact.plans.slice.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-300">
                            <Check className="text-neon shrink-0 w-5 h-5 mt-0.5" />
                            <span className="text-sm md:text-base">{feature}</span>
                        </li>
                    ))}
                </ul>

                <a 
                    href={createWhatsappLink(t.contact.plans.slice.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block text-center bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-200 transition-all duration-300"
                >
                    {t.contact.plans.slice.button}
                </a>
            </div>

            {/* CARD 2: HIGH TICKET (Market Dominance) */}
            <div className="bg-black border-2 border-neon/30 rounded-3xl p-8 md:p-10 flex flex-col relative overflow-hidden shadow-[0_0_30px_rgba(0,230,0,0.1)] hover:shadow-[0_0_50px_rgba(0,230,0,0.2)] transition-shadow duration-300 transform lg:-translate-y-4">
                 <div className="absolute inset-0 bg-neon/5 pointer-events-none"></div>
                 
                <div className="mb-6 relative">
                    <span className="inline-block bg-neon text-black text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
                        Recomendado
                    </span>
                    <h3 className="text-2xl font-black italic text-neon">{t.contact.plans.cake.title}</h3>
                    <p className="text-gray-400 mt-2 min-h-[3rem] font-medium">{t.contact.plans.cake.subtitle}</p>
                </div>

                <div className="mb-8 relative">
                    <span className="text-4xl md:text-5xl font-bold text-white tracking-tight">{t.contact.plans.cake.price}</span>
                    <span className="block text-xs text-gray-500 mt-1 uppercase tracking-wide">Investimento Personalizável</span>
                </div>

                <ul className="space-y-4 mb-8 flex-1 relative">
                    {t.contact.plans.cake.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-white font-medium">
                            <div className="bg-neon/20 p-1 rounded-full">
                                <Check className="text-neon shrink-0 w-4 h-4" />
                            </div>
                            <span className="text-sm md:text-base">{feature}</span>
                        </li>
                    ))}
                </ul>

                <a 
                    href={createWhatsappLink(t.contact.plans.cake.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-full flex items-center justify-center gap-2 bg-neon text-black font-black py-5 rounded-xl hover:bg-green-400 transition-all duration-300 shadow-[0_0_20px_rgba(0,230,0,0.4)] group"
                >
                    {t.contact.plans.cake.button}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
            </div>

        </div>
        
      </div>
    </section>
  );
};