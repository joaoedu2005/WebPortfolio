import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Check, ArrowRight, AlertCircle, Zap, Crown, Layers, PenTool } from 'lucide-react';

export const Contact: React.FC = () => {
  const { t } = useLanguage();

  const createWhatsappLink = (message: string) => {
    return `https://wa.me/5588981615599?text=${encodeURIComponent(message)}`;
  };

  const plans = [
    {
      key: 'start',
      data: t.contact.plans.start,
      icon: Zap,
      style: 'border-white/10 bg-cardbg hover:border-white/30',
      tagColor: 'bg-white/10 text-white',
      btnStyle: 'bg-white text-black hover:bg-gray-200'
    },
    {
      key: 'combo',
      data: t.contact.plans.combo,
      icon: Layers,
      style: 'border-neon/50 bg-cardbg shadow-[0_0_20px_rgba(0,230,0,0.1)] hover:shadow-[0_0_30px_rgba(0,230,0,0.2)]',
      tagColor: 'bg-neon text-black',
      btnStyle: 'bg-neon text-black hover:bg-green-400'
    },
    {
      key: 'custom',
      data: t.contact.plans.custom,
      icon: PenTool,
      style: 'border-white/10 bg-cardbg hover:border-white/30',
      tagColor: 'bg-blue-500/20 text-blue-300',
      btnStyle: 'bg-transparent border border-white text-white hover:bg-white hover:text-black'
    },
    {
      key: 'scale',
      data: t.contact.plans.scale,
      icon: Crown,
      style: 'bg-black border-2 border-neon shadow-[0_0_30px_rgba(0,230,0,0.15)] hover:shadow-[0_0_50px_rgba(0,230,0,0.3)]',
      tagColor: 'bg-neon text-black',
      btnStyle: 'bg-neon text-black hover:bg-green-400'
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-b from-cardbg to-black relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] max-w-none bg-neon/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        
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

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
            
            {plans.map((plan) => (
              <div key={plan.key} className={`rounded-3xl p-6 md:p-8 flex flex-col relative overflow-hidden transition-all duration-300 group border ${plan.style}`}>
                  
                  {/* Icon Watermark */}
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                      <plan.icon size={80} />
                  </div>
                  
                  <div className="mb-4">
                      <span className={`inline-block text-[10px] md:text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider ${plan.tagColor}`}>
                          {plan.data.tag}
                      </span>
                      <h3 className="text-xl md:text-2xl font-black italic text-gray-100">{plan.data.title}</h3>
                      <p className="text-gray-400 text-sm mt-1 h-10 font-medium leading-tight flex items-center">{plan.data.subtitle}</p>
                  </div>

                  <div className="mb-6">
                      <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight">{plan.data.price}</span>
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                      {plan.data.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-300">
                              <Check className="text-neon shrink-0 w-4 h-4 mt-0.5" />
                              <span className="text-xs md:text-sm font-medium">{feature}</span>
                          </li>
                      ))}
                  </ul>

                  <a 
                      href={createWhatsappLink(plan.data.message)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full flex items-center justify-center gap-2 font-bold py-3 rounded-xl transition-all duration-300 shadow-lg ${plan.btnStyle}`}
                  >
                      {plan.data.button}
                      {plan.key === 'scale' && <ArrowRight className="w-4 h-4" />}
                  </a>
              </div>
            ))}

        </div>
        
      </div>
    </section>
  );
};