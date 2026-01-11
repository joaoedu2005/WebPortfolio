'use client';
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
    prefix: string;
    highlight: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    send: string;
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
      prefix : "MINHAS",
      heading: "ESPECIALIDADES",
      items: {
        id: { title: "Designer de Identidade Visual", description: "Crio identidades visuais marcantes que se conectam diretamente com a criação de Landing Pages de alta conversão. Unifico o design da marca com a estratégia web." },
        web: { title: "Web Developer", description: "Transformo ideias em realidade com Landing Pages rápidas, responsivas e otimizadas para converter visitantes em clientes." },
        ads: { title: "Tráfego Pago", description: "Gestão estratégica de campanhas (Google Ads e Meta Ads) para alavancar a visibilidade da sua marca, atrair o público qualificado e aumentar suas vendas." },
        qa: { title: "Quality Assurance", description: "Garanto que tudo funcione perfeitamente com testes manuais e automatizados (Cypress, Postman), prevenindo erros antes que seu cliente os veja." },
        auto: { title: "Automação de Tarefas", description: "Crio workflows inteligentes com n8n e IA para automatizar processos repetitivos, economizando seu tempo e aumentando a eficiência." }
      }
    },
    about: {
      prefix:"MUITO PRAZER",
      title: "SOU JOÃO EDUARDO.",
      p1: "Sou um parceiro completo para o seu crescimento digital. Começo criando uma Identidade Visual forte, desenvolvo sua Landing Page de alta performance e trago os clientes certos através de Tráfego Pago estratégico.",
      p2: "Minha obsessão por qualidade (QA) e eficiência (Automação com IA) garante que sua operação rode macia, sem falhas e com o máximo de resultados.",
      p3: "Se você quer alguém que cuide da imagem, da tecnologia e da atração de clientes do seu negócio, vamos conversar!"
    },
    portfolio: {
      prefix:"MEU",
      heading: "PORTFÓLIO",
      categories: { solar: "Landing Page | Energia Solar", ecommerce: "E-commerce", health: "Landing Page | Saúde", automation: "Automação" }
    },
    contact: {
      prefix: "FALA",
      highlight: "COMIGO.",
      namePlaceholder: "Seu Nome",
      emailPlaceholder: "Seu E-mail",
      messagePlaceholder: "Escreva sua mensagem aqui.",
      send: "Enviar"
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
      prefix:"ENCANTADO DE CONOCERTE",
      title: "SOY JOÃO EDUARDO.",
      p1: "Soy un socio completo para tu crecimiento digital. Comienzo creando una Identidad Visual fuerte, desarrollo tu Landing Page de alto rendimiento y traigo a los clientes correctos a través de Tráfico Pago estratégico.",
      p2: "Mi obsesión por la calidad (QA) y la eficiencia (Automatización con IA) garantiza que tu operación funcione sin problemas y con el máximo de resultados.",
      p3: "Si buscas a alguien que cuide de la imagen, la tecnología y la atracción de clientes de tu negocio, ¡hablemos!"
    },
    portfolio: {
      prefix:"MI",
      heading: "PORTAFOLIO",
      categories: { solar: "Landing Page | Energía Solar", ecommerce: "Comercio Electrónico", health: "Salud", automation: "Automatización" }
    },
    contact: {
      prefix: "HABLA",
      highlight: "CONMIGO.",
      namePlaceholder: "Tu Nombre",
      emailPlaceholder: "Tu Correo",
      messagePlaceholder: "Escribe tu mensaje aquí.",
      send: "Enviar"
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
      prefix:"NICE TO MEET YOU",
      title: "I AM JOÃO EDUARDO.",
      p1: "I am a complete partner for your digital growth. I start by creating a strong Visual Identity, develop your high-performance Landing Page, and bring the right customers through strategic Paid Traffic.",
      p2: "My obsession with quality (QA) and efficiency (AI Automation) ensures your operation runs smoothly and with maximum results.",
      p3: "If you are looking for someone who takes care of image, technology, and customer acquisition for your business, let's talk!"
    },
    portfolio: {
      prefix:"MY",
      heading: "PORTFOLIO",
      categories: { solar: "Landing Page | Solar Energy", ecommerce: "E-commerce", health: "Health", automation: "Automation" }
    },
    contact: {
      prefix: "TALK",
      highlight: "WITH ME.",
      namePlaceholder: "Your Name",
      emailPlaceholder: "Your Email",
      messagePlaceholder: "Write your message here.",
      send: "Send"
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
