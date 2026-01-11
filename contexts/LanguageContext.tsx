import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'PT' | 'ES' | 'US';

interface Translations {
  nav: {
    home: string;
    specialties: string;
    about: string;
    projects: string;
    plans: string;
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
        start: {
            tag: string;
            title: string;
            subtitle: string;
            price: string;
            features: string[];
            button: string;
            message: string;
        };
        combo: {
            tag: string;
            title: string;
            subtitle: string;
            price: string;
            features: string[];
            button: string;
            message: string;
        };
        scale: {
            tag: string;
            title: string;
            subtitle: string;
            price: string;
            features: string[];
            button: string;
            message: string;
        };
        custom: {
            tag: string;
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
    nav: { home: "Início", specialties: "Especialidades", about: "Sobre", projects: "Projetos", plans: "Planos", contact: "Contato" },
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
      categories: { solar: "Landing Page | Energia Solar", ecommerce: "E-commerce", health: "Saúde", automation: "Automação" }
    },
    contact: {
      ctaTitle: "PARE DE PERDER",
      ctaSubtitle: "DINHEIRO HOJE.",
      introTitle: "O Custo da Invisibilidade",
      introText: "Você sabe que seu produto é bom, mas seu cliente não te acha. Agências cobram fortunas e levam 30 dias para entregar o básico. Aqui você tem velocidade, qualidade e opções que cabem no seu momento.",
      plans: {
        start: {
            tag: "ENTRADA",
            title: "LANDING PAGE",
            subtitle: "Saia do Amadorismo",
            price: "R$ 697,90",
            features: ["Landing Page de Alta Conversão", "Design focado em Vendas", "Entrega Rápida", "Ideal para validar oferta"],
            button: "QUERO VENDER",
            message: "Olá, quero a Landing Page de R$ 697,90!"
        },
        combo: {
            tag: "MELHOR CUSTO-BENEFÍCIO",
            title: "BRANDING + WEB",
            subtitle: "Profissionalize sua Marca",
            price: "A partir de R$ 897,90",
            features: ["Tudo do plano anterior", "Criação de Identidade Visual", "Logo e Manual da Marca", "Design Coerente e Forte"],
            button: "QUERO O COMBO",
            message: "Olá, me interessei pelo Combo de Branding + Landing Page!"
        },
        custom: {
            tag: "FLEXÍVEL",
            title: "PERSONALIZADO",
            subtitle: "Do Seu Jeito",
            price: "A combinar",
            features: [
              "Escolha os serviços a seu gosto",
              "Criação de Landing Page (Página na Web)",
              "Criação de Identidade Visual (ou Rebranding)",
              "Tráfego Pago (Aumentar sua visibilidade e seus clientes)",
              "Chatbot com IA (Automatize seu Whatsapp ou Instagram)"
            ],
            button: "MONTAR PACOTE",
            message: "Olá, gostaria de montar um pacote personalizado."
        },
        scale: {
            tag: "COMPLETO",
            title: "ECOSSISTEMA",
            subtitle: "Dominação de Mercado",
            price: "A partir de R$ 2.499,90",
            features: ["Identidade Visual Completa", "LP Premium", "Tráfego Pago (Ads)", "Chatbot com IA"],
            button: "DOMINAR MERCADO",
            message: "Olá, estou pronto para o Ecossistema Completo!"
        }
      }
    },
    footer: { rights: "Todos os direitos reservados." }
  },
  ES: {
    nav: { home: "Inicio", specialties: "Especialidades", about: "Sobre Mí", projects: "Proyectos", plans: "Planes", contact: "Contacto" },
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
      introText: "Sabes que tu producto es bueno, pero tu cliente no te encuentra. Aquí tienes velocidad, calidad y opciones que se adaptan a tu momento.",
      plans: {
        start: {
            tag: "ENTRADA",
            title: "LANDING PAGE",
            subtitle: "Sal del Amateurismo",
            price: "R$ 697,90",
            features: ["Landing Page de Alta Conversión", "Diseño enfocado en Ventas", "Entrega Rápida", "Ideal para validar oferta"],
            button: "QUIERO VENDER",
            message: "Hola, quiero la Landing Page!"
        },
        combo: {
            tag: "MEJOR VALOR",
            title: "BRANDING + WEB",
            subtitle: "Profesionaliza tu Marca",
            price: "Desde R$ 897,90",
            features: ["Todo del plan anterior", "Creación de Identidad Visual", "Logo y Manual de Marca", "Diseño Coherente y Fuerte"],
            button: "QUIERO EL COMBO",
            message: "Hola, me interesa el Combo de Branding + Landing Page!"
        },
        custom: {
            tag: "FLEXIBLE",
            title: "PERSONALIZADO",
            subtitle: "A Tu Manera",
            price: "A convenir",
            features: [
              "Elige los servicios a tu gusto",
              "Creación de Landing Page (Página Web)",
              "Creación de Identidad Visual (o Rebranding)",
              "Tráfico Pago (Aumenta tu visibilidad y clientes)",
              "Chatbot con IA (Automatiza tu WhatsApp o Instagram)"
            ],
            button: "ARMAR PAQUETE",
            message: "Hola, me gustaría armar un paquete personalizado."
        },
        scale: {
            tag: "COMPLETO",
            title: "ECOSISTEMA",
            subtitle: "Dominación de Mercado",
            price: "Desde R$ 2.499,90",
            features: ["Identidad Visual Completa", "LP Premium", "Tráfico Pago (Ads)", "Chatbot con IA"],
            button: "DOMINAR MERCADO",
            message: "Hola, estoy listo para el Ecosistema Completo!"
        }
      }
    },
    footer: { rights: "Todos los derechos reservados." }
  },
  US: {
    nav: { home: "Home", specialties: "Specialties", about: "About", projects: "Projects", plans: "Plans", contact: "Contact" },
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
      introText: "You know your product is good, but customers can't find you. Here you have speed, quality, and options that fit your moment.",
      plans: {
        start: {
            tag: "ENTRY",
            title: "LANDING PAGE",
            subtitle: "Quit Being an Amateur",
            price: "$150 USD",
            features: ["High Conversion Landing Page", "Sales Optimized Design", "Fast Delivery", "Ideal to validate offer"],
            button: "I WANT TO SELL",
            message: "Hello, I want the Landing Page!"
        },
        combo: {
            tag: "BEST VALUE",
            title: "BRANDING + WEB",
            subtitle: "Professionalize Your Brand",
            price: "From $180 USD",
            features: ["Everything in previous plan", "Visual Identity Creation", "Logo & Brand Manual", "Strong Coherent Design"],
            button: "I WANT THE COMBO",
            message: "Hello, I am interested in the Branding + Landing Page Combo!"
        },
        custom: {
            tag: "FLEXIBLE",
            title: "CUSTOM",
            subtitle: "Your Way",
            price: "Contact me",
            features: [
              "Choose services to your liking",
              "Landing Page Creation (Web Page)",
              "Visual Identity Creation (or Rebranding)",
              "Paid Traffic (Increase visibility and clients)",
              "AI Chatbot (Automate WhatsApp or Instagram)"
            ],
            button: "BUILD PACKAGE",
            message: "Hello, I would like to build a custom package."
        },
        scale: {
            tag: "FULL",
            title: "ECOSYSTEM",
            subtitle: "Market Dominance",
            price: "From $500 USD",
            features: ["Complete Visual Identity", "Premium LP", "Paid Traffic (Ads)", "AI Chatbot"],
            button: "DOMINATE MARKET",
            message: "Hello, I am ready for the Full Ecosystem!"
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