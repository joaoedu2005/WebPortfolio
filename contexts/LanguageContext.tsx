import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'PT' | 'ES' | 'US';

interface Translations {
  nav: {
    home: string;
    specialties: string;
    about: string;
    projects: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    cta: string;
  };
  specialties: {
    prefix: string;
    heading: string;
    items: {
      id: { title: string; description: string };
      web: { title: string; description: string };
      ads: { title: string; description: string };
      qa: { title: string; description: string };
      auto: { title: string; description: string };
    };
  };
  about: {
    prefix: string;
    title: string;
    p1: string;
    p2: string;
    p3: string;
  };
  portfolio: {
    prefix: string;
    heading: string;
    categories: {
        solar: string;
        ecommerce: string;
        health: string;
        automation: string;
    }
  };
  contact: {
    ctaTitle: string;
    ctaSubtitle: string;
    introTitle: string;
    introText: string;
    plans: {
        slice: {
            title: string;
            subtitle: string;
            price: string;
            features: string[];
            button: string;
            message: string;
        };
        cake: {
            title: string;
            subtitle: string;
            price: string;
            features: string[];
            button: string;
            message: string;
        };
    }
  };
  footer: {
    rights: string;
  };
}

const translationsData: Record<Language, Translations> = {
  PT: {
    nav: { home: "Início", specialties: "Especialidades", about: "Sobre", projects: "Projetos", contact: "Contato" },
    hero: {
      title: "Design Único.",
      subtitle: "Resultados Reais.",
      description: "Do visual à venda: Crio Identidades Visuais marcantes, desenvolvo Landing Pages de alta conversão e gerencio Tráfego Pago para escalar seu negócio. Tudo isso com automação inteligente e qualidade absoluta.",
      cta: "Entre em contato"
    },
    specialties: {
      prefix: "MINHAS",
      heading: "ESPECIALIDADES",
      items: {
        id: { title: "Designer de Identidade Visual", description: "Crio identidades visuais marcantes que se conectam diretamente com a criação de Landing Pages de alta conversão. Unifico o design da marca com a estratégia web." },
        web: { title: "Web Developer", description: "Transformo ideias em realidade com Landing Pages rápidas, responsivas e otimizadas para converter visitantes em clientes." },
        ads: { title: "Tráfego Pago", description: "Gestão estratégica de campanhas (Google Ads e Meta Ads) para alavancar a visibilidade da sua marca, atrair o público qualificado e aumentar suas vendas." },
        qa: { title: "Quality Assurance", description: "Garanto que tudo funcione perfeitamente com testes manuais e automatizados (Cypress, Postman), prevenindo erros antes que seu cliente os veja." },
        auto: { title: "Automação de Tarefas", description: "Crio workflows inteligentes com n8n e IA para automatizar processos repetitivos, economizando seu tempo e aumentando a eficiência." }
      },
    },
    about: {
      prefix: "MUITO PRAZER,",
      title: "SOU JOÃO EDUARDO.",
      p1: "Sou um parceiro completo para o seu crescimento digital. Começo criando uma Identidade Visual forte, desenvolvo sua Landing Page de alta performance e trago os clientes certos através de Tráfego Pago estratégico.",
      p2: "Minha obsessão por qualidade (QA) e eficiência (Automação com IA) garante que sua operação rode macia, sem falhas e com o máximo de resultados.",
      p3: "Se você quer alguém que cuide da imagem, da tecnologia e da atração de clientes do seu negócio, vamos conversar!"
    },
    portfolio: {
      prefix: "MEU",
      heading: "PORTFÓLIO",
      categories: { solar: "Landing Page | Energia Solar", ecommerce: "E-commerce", health: "Landing Page | Saúde", automation: "Automação" }
    },
    contact: {
      ctaTitle: "PARE DE PERDER",
      ctaSubtitle: "DINHEIRO HOJE.",
      introTitle: "O Custo da Invisibilidade",
      introText: "Você sabe que seu produto é bom, mas seu cliente não te acha. Agências cobram fortunas (R$ 2.000+) e levam 30 dias para entregar o básico. Eu quebro esse padrão: entrego qualidade de agência, com velocidade recorde e preço justo.",
      plans: {
        slice: {
            title: "PRESENÇA DIGITAL (Start)",
            subtitle: "Saia do Amadorismo",
            price: "R$ 697,90",
            features: ["Chega de perder venda por não ter site", "Preço 3x menor que agências tradicionais", "Entrega Relâmpago (Pronta para uso)", "Design que passa credibilidade imediata"],
            button: "QUERO VENDER AGORA",
            message: "Olá, cansei de perder vendas. Quero minha Landing Page de R$ 697,90!"
        },
        cake: {
            title: "MÁQUINA DE VENDAS (Scale)",
            subtitle: "Ecossistema Completo",
            price: "A partir de R$ 2.499,90",
            features: ["Identidade Visual (Sua marca forte)", "Landing Page de Alta Conversão", "Tráfego Pago (Clientes todos os dias)", "Chatbot IA (Atendimento 24h)"],
            button: "QUERO DOMINAR O MERCADO",
            message: "Olá, quero o pacote completo com Tráfego e Automação para escalar meu negócio!"
        }
      }
    },
    footer: { rights: "Todos os direitos reservados." }
  },
  ES: {
    nav: { home: "Inicio", specialties: "Especialidades", about: "Sobre Mí", projects: "Proyectos", contact: "Contacto" },
    hero: {
      title: "Diseño Único.",
      subtitle: "Resultados Reales.",
      description: "Del diseño a la venta: Creo Identidades Visuales impactantes, desarrollo Landing Pages de alta conversión y gestiono Tráfico Pago para escalar tu negocio. Todo con automatización inteligente y calidad absoluta.",
      cta: "Ponerse en contacto"
    },
    specialties: {
      prefix: "MIS",
      heading: "ESPECIALIDADES",
      items: {
        id: { title: "Diseñador de Identidad Visual", description: "Creo identidades visuales impactantes que se conectan directamente con la creación de Landing Pages de alta conversión." },
        web: { title: "Desarrollador Web", description: "Transformo ideas en realidad con Landing Pages rápidas, responsivas y optimizadas para convertir visitantes en clientes." },
        ads: { title: "Tráfico Pago", description: "Gestión estratégica de campañas (Google/Meta Ads) para aumentar la visibilidad, atraer al público calificado e impulsar tus ventas." },
        qa: { title: "Aseguramiento de Calidad", description: "Garantizo que todo funcione perfectamente con pruebas manuales y automatizadas, previniendo errores antes de que tu cliente los vea." },
        auto: { title: "Automatización de Tareas", description: "Creo flujos de trabajo inteligentes con n8n e IA para automatizar procesos repetitivos, ahorrando tiempo y aumentando la eficiencia." }
      }
    },
    about: {
      prefix: "MUCHO GUSTO,",
      title: "SOY JOÃO EDUARDO.",
      p1: "Soy un socio completo para tu crecimiento digital. Comienzo creando una Identidad Visual fuerte, desarrollo tu Landing Page de alto rendimiento y traigo a los clientes correctos a través de Tráfico Pago estratégico.",
      p2: "Mi obsesión por la calidad (QA) y la eficiencia (Automatización con IA) garantiza que tu operación funcione sin problemas y con el máximo de resultados.",
      p3: "Si buscas a alguien que cuide de la imagen, la tecnología y la atracción de clientes de tu negocio, ¡hablemos!"
    },
    portfolio: {
      prefix: "MI",
      heading: "PORTAFOLIO",
      categories: { solar: "Landing Page | Energía Solar", ecommerce: "Comercio Electrónico", health: "Salud", automation: "Automatización" }
    },
    contact: {
      ctaTitle: "DEJA DE PERDER",
      ctaSubtitle: "DINERO HOY.",
      introTitle: "El Costo de la Invisibilidad",
      introText: "Sabes que tu producto es bueno, pero tu cliente no te encuentra. Las agencias cobran fortunas y tardan 30 días en entregar lo básico. Yo rompo ese patrón: entrego calidad de agencia, con velocidad récord y precio justo.",
      plans: {
        slice: {
            title: "PRESENCIA DIGITAL (Start)",
            subtitle: "Sal del Amateurismo",
            price: "R$ 697,90",
            features: ["Deja de perder ventas por no tener sitio", "Precio 3x menor que agencias tradicionales", "Entrega Relámpago (Lista para usar)", "Diseño que transmite credibilidad inmediata"],
            button: "QUIERO VENDER AHORA",
            message: "Hola, me cansé de perder ventas. Quiero mi Landing Page lista."
        },
        cake: {
            title: "MÁQUINA DE VENTAS (Scale)",
            subtitle: "Ecosistema Completo",
            price: "Desde R$ 2.499,90",
            features: ["Identidad Visual (Tu marca fuerte)", "Landing Page de Alta Conversión", "Tráfico Pago (Clientes todos los días)", "Chatbot IA (Atención 24h)"],
            button: "QUIERO DOMINAR EL MERCADO",
            message: "Hola, quiero el paquete completo con Tráfico y Automatización."
        }
      }
    },
    footer: { rights: "Todos los derechos reservados." }
  },
  US: {
    nav: { home: "Home", specialties: "Specialties", about: "About", projects: "Projects", contact: "Contact" },
    hero: {
      title: "Unique Design.",
      subtitle: "Real Results.",
      description: "From visual to sales: I create striking Visual Identities, develop high-conversion Landing Pages, and manage Paid Traffic to scale your business. All with intelligent automation and absolute quality.",
      cta: "Get in touch"
    },
    specialties: {
      prefix: "MY",
      heading: "SPECIALTIES",
      items: {
        id: { title: "Visual Identity Designer", description: "I create striking visual identities that connect directly with the creation of high-conversion Landing Pages." },
        web: { title: "Web Developer", description: "I transform ideas into reality with fast, responsive Landing Pages optimized to convert visitors into customers." },
        ads: { title: "Paid Traffic", description: "Strategic campaign management (Google/Meta Ads) to boost visibility, attract the qualified audience, and increase your sales." },
        qa: { title: "Quality Assurance", description: "I ensure everything runs perfectly with manual and automated tests, preventing errors before your customer sees them." },
        auto: { title: "Task Automation", description: "I create intelligent workflows with n8n and AI to automate repetitive processes, saving time and increasing efficiency." }
      }
    },
    about: {
      prefix: "NICE TO MEET YOU,",
      title: "I AM JOÃO EDUARDO.",
      p1: "I am a complete partner for your digital growth. I start by creating a strong Visual Identity, develop your high-performance Landing Page, and bring the right customers through strategic Paid Traffic.",
      p2: "My obsession with quality (QA) and efficiency (AI Automation) ensures your operation runs smoothly and with maximum results.",
      p3: "If you are looking for someone who takes care of image, technology, and customer acquisition for your business, let's talk!"
    },
    portfolio: {
      prefix: "MY",
      heading: "PORTFOLIO",
      categories: { solar: "Landing Page | Solar Energy", ecommerce: "E-commerce", health: "Health", automation: "Automation" }
    },
    contact: {
      ctaTitle: "STOP LOSING",
      ctaSubtitle: "MONEY TODAY.",
      introTitle: "The Cost of Being Invisible",
      introText: "You know your product is good, but customers can't find you. Agencies charge fortunes and take 30 days to deliver the basics. I break that pattern: Agency quality, record speed, fair price.",
      plans: {
        slice: {
            title: "DIGITAL PRESENCE (Start)",
            subtitle: "Quit Being an Amateur",
            price: "$150 USD",
            features: ["Stop losing sales due to no website", "3x cheaper than traditional agencies", "Lightning Delivery (Ready to use)", "Design that builds instant trust"],
            button: "I WANT TO SELL NOW",
            message: "Hello, I'm tired of losing sales. I want my Landing Page."
        },
        cake: {
            title: "SALES MACHINE (Scale)",
            subtitle: "Full Ecosystem",
            price: "From $500 USD",
            features: ["Visual Identity (Strong Brand)", "High Conversion Landing Page", "Paid Traffic (Customers every day)", "AI Chatbot (24/7 Support)"],
            button: "I WANT MARKET DOMINANCE",
            message: "Hello, I want the full package with Traffic and Automation."
        }
      }
    },
    footer: { rights: "All rights reserved." }
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('PT');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translationsData[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};