import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'PT' | 'ES' | 'US';

interface Translations {
  nav: {
    home: string;
    specialties: string;
    about: string;
    projects: string;
    stack: string;
    contact: string;
  };
  hero: {
    role: string;
    title: string;
    subtitle: string;
    description: string;
    cta: string;
    downloadCv: string;
  };
  specialties: {
    prefix: string;
    heading: string;
    items: {
      arch: { title: string; description: string };
      qa: { title: string; description: string };
      agile: { title: string; description: string };
      ai: { title: string; description: string };
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
        health: string;
        automation: string;
        ecommerce: string;
    };
    projects: {
        vitta: { 
          title: string; 
          desc: string;
          details: {
            role: string;
            duration: string;
            items: string[];
          }
        };
        sim: { 
          title: string; 
          desc: string; 
          details: {
            role: string;
            duration: string;
            items: string[];
          }
        };
        craft: { 
          title: string; 
          desc: string; 
          details: {
            role: string;
            duration: string;
            items: string[];
          }
        };
    }
  };
  stack: {
    prefix: string;
    heading: string;
    categories: {
        frontend: string;
        backend: string;
        qa: string;
        tools: string;
    }
  };
  contact: {
    title: string;
    subtitle: string;
    text: string;
    email: string;
    linkedin: string;
    cta: string;
  };
  footer: {
    rights: string;
  };
}

const translationsData: Record<Language, Translations> = {
  PT: {
    nav: { home: "Início", specialties: "Competências", about: "Resumo", projects: "Experiência", stack: "Tech Stack", contact: "Contato" },
    hero: {
      role: "Software Engineer | Full-Stack | QA",
      title: "Arquitetura Robusta.",
      subtitle: "Qualidade Escalável.",
      description: "Desenvolvedor Full-Stack e QA especialista em identificar problemas de arquitetura antes que se tornem críticos. Foco total no ciclo de vida do produto, da regra de negócio à experiência do usuário.",
      cta: "Ver Projetos",
      downloadCv: "Baixar Currículo"
    },
    specialties: {
      prefix: "MINHAS",
      heading: "COMPETÊNCIAS",
      items: {
        arch: { title: "Arquitetura & Clean Code", description: "Foco em aplicações escaláveis e modulares. Documentação de requisitos e modelagem desde o início para evitar retrabalho." },
        qa: { title: "Quality Assurance (QA)", description: "Aplicação de Shift Left Testing. Testes manuais e automatizados com Cypress e Postman para garantir software livre de bugs." },
        agile: { title: "Metodologias Ágeis", description: "Vivência consolidada em SCRUM e Kanban. Condução de reuniões com stakeholders para alinhamento total de expectativas." },
        ai: { title: "Automação & IA", description: "Uso estratégico de IA (RAG, n8n) para otimizar processos, desde geração de cenários de teste até automação de workflows complexos." }
      },
    },
    about: {
      prefix: "SOBRE MIM",
      title: "JOÃO EDUARDO GIRÃO",
      p1: "Meu diferencial está em me preocupar com todo o ciclo de vida do produto. Não basta a aplicação funcionar; ela precisa ser escalável, manutenível e resolver o problema certo.",
      p2: "Estudo profundamente as regras de negócio e tenho habilidade comprovada em elicitar requisitos. Trabalho com Next.js, Nest.js e arquiteturas modernas, sempre aplicando boas práticas de QA.",
      p3: "Atualmente busco oportunidades onde possa aplicar minha experiência em QA, desenvolvimento e automação para resolver problemas reais em ambientes desafiadores."
    },
    portfolio: {
      prefix: "MINHA",
      heading: "EXPERIÊNCIA",
      categories: { health: "HealthTech", automation: "GovTech / AI", ecommerce: "E-commerce" },
      projects: {
        vitta: { 
          title: "Plataforma VittaHub", 
          desc: "Plataforma de saúde robusta para gestão de clínicas e especialistas.", 
          details: {
            role: "Desenvolvedor Front-end",
            duration: "Out 2025 - Presente",
            items: [
              "Criação de interface de alta performance para sistema de saúde.",
              "Arquitetura modular e escalável com Next.js, TypeScript e TailwindCSS.",
              "Desenvolvimento de biblioteca de componentes reutilizáveis (cards, modais, toasters).",
              "Integração de APIs REST para exibição dinâmica de dados.",
              "Documentação de demandas no Jira e versionamento com Git/Github."
            ]
          }
        },
        sim: { 
          title: "Chatbot SIM (IA)", 
          desc: "Sistema de RAG que reduziu 80% da carga operacional.", 
          details: {
            role: "Engenheiro de Automação",
            duration: "Set 2025 - Set 2025",
            items: [
              "Automatização de atendimento público 24/7 para Serviço de Inspeção Municipal.",
              "Implementação de RAG consumindo API do Google Drive (81 pgs de docs, 600+ artigos).",
              "Desenvolvimento de workflows complexos no n8n.",
              "Deploy em VPS Hostinger utilizando Redis para gestão de sessões.",
              "Redução de 80% no tempo gasto com dúvidas frequentes e 95% de uptime."
            ]
          }
        },
        craft: { 
          title: "Centro de Artesanato", 
          desc: "Plataforma completa de vendas para artesãs locais.", 
          details: {
            role: "Analista de Sistemas",
            duration: "Mar 2025 - Ago 2025",
            items: [
              "Desenvolvimento de sistema web para auxiliar artesãs na divulgação e venda.",
              "Elicitação, documentação e validação de requisitos.",
              "Desenvolvimento de protótipo de alta fidelidade no Figma.",
              "Produção de páginas funcionais com Next.js e TailwindCSS.",
              "Testes de funcionalidade (QA) unitários e automatizados com Cypress."
            ]
          }
        }
      }
    },
    stack: {
      prefix: "MINHA",
      heading: "STACK TECNOLÓGICA",
      categories: { frontend: "Front-end", backend: "Back-end", qa: "QA & Testes", tools: "DevOps & Ferramentas" }
    },
    contact: {
      title: "VAMOS CONSTRUIR",
      subtitle: "ALGO SÓLIDO.",
      text: "Estou disponível para novos desafios em Engenharia de Software e QA. Vamos conversar sobre como posso contribuir para o seu time.",
      email: "joaoeduardogirao@gmail.com",
      linkedin: "linkedin.com/in/joaoedugirao",
      cta: "Entrar em contato"
    },
    footer: { rights: "Todos os direitos reservados." }
  },
  ES: {
    nav: { home: "Inicio", specialties: "Competencias", about: "Resumen", projects: "Experiencia", stack: "Tech Stack", contact: "Contacto" },
    hero: {
      role: "Software Engineer | Full-Stack | QA",
      title: "Arquitectura Robusta.",
      subtitle: "Calidad Escalable.",
      description: "Desarrollador Full-Stack y QA especialista en identificar problemas de arquitectura antes de que sean críticos. Enfoque total en el ciclo de vida del producto.",
      cta: "Ver Proyectos",
      downloadCv: "Descargar CV"
    },
    specialties: {
      prefix: "MIS",
      heading: "COMPETENCIAS",
      items: {
        arch: { title: "Arquitectura & Clean Code", description: "Enfoque en aplicaciones escalables y modulares. Documentación de requisitos y modelado desde el inicio." },
        qa: { title: "Quality Assurance (QA)", description: "Aplicación de Shift Left Testing. Pruebas manuales y automatizadas con Cypress y Postman." },
        agile: { title: "Metodologías Ágiles", description: "Experiencia consolidada en SCRUM y Kanban. Conducción de reuniones con stakeholders para alineación total." },
        ai: { title: "Automatización & IA", description: "Uso estratégico de IA (RAG, n8n) para optimizar procesos y flujos de trabajo complejos." }
      }
    },
    about: {
      prefix: "SOBRE MÍ",
      title: "JOÃO EDUARDO GIRÃO",
      p1: "Mi diferencial está en preocuparme por todo el ciclo de vida del producto. No basta con que la aplicación funcione; debe ser escalable y resolver el problema correcto.",
      p2: "Estudio profundamente las reglas de negocio. Trabajo con Next.js, Nest.js y arquitecturas modernas, siempre aplicando buenas prácticas de QA.",
      p3: "Busco oportunidades donde pueda aplicar mi experiencia en QA, desarrollo y automatización en ambientes desafiantes."
    },
    portfolio: {
      prefix: "MI",
      heading: "EXPERIENCIA",
      categories: { health: "HealthTech", automation: "GovTech / AI", ecommerce: "E-commerce" },
      projects: {
        vitta: { 
          title: "Plataforma VittaHub", 
          desc: "Plataforma de salud robusta para gestión de clínicas.", 
          details: {
            role: "Desarrollador Front-end",
            duration: "Oct 2025 - Presente",
            items: [
              "Creación de interfaz de alto rendimiento para sistema de salud.",
              "Arquitectura modular y escalable con Next.js, TypeScript y TailwindCSS.",
              "Desarrollo de biblioteca de componentes reutilizables.",
              "Integración de APIs REST.",
              "Gestión con Jira y control de versiones con Git/Github."
            ]
          }
        },
        sim: { 
          title: "Chatbot SIM (IA)", 
          desc: "Sistema RAG que redujo 80% la carga operativa.", 
          details: {
            role: "Ingeniero de Automatización",
            duration: "Sep 2025 - Sep 2025",
            items: [
              "Automatización de atención pública 24/7.",
              "Implementación de RAG consumiendo API de Google Drive.",
              "Flujos de trabajo complejos en n8n.",
              "Despliegue en VPS Hostinger con Redis.",
              "Reducción del 80% en carga operativa y 95% de uptime."
            ]
          }
        },
        craft: { 
          title: "Centro de Artesanía", 
          desc: "Plataforma completa de ventas para artesanos.", 
          details: {
            role: "Analista de Sistemas",
            duration: "Mar 2025 - Ago 2025",
            items: [
              "Desarrollo de sistema web para artesanos locales.",
              "Levantamiento y validación de requisitos.",
              "Prototipado de alta fidelidad en Figma.",
              "Desarrollo con Next.js y TailwindCSS.",
              "Pruebas unitarias y automatizadas con Cypress."
            ]
          }
        }
      }
    },
    stack: {
      prefix: "MI",
      heading: "STACK TECNOLÓGICO",
      categories: { frontend: "Front-end", backend: "Back-end", qa: "QA & Pruebas", tools: "DevOps & Herramientas" }
    },
    contact: {
      title: "CONSTRUYAMOS",
      subtitle: "ALGO SÓLIDO.",
      text: "Estoy disponible para nuevos desafíos en Ingeniería de Software y QA. Hablemos.",
      email: "joaoeduardogirao@gmail.com",
      linkedin: "linkedin.com/in/joaoedugirao",
      cta: "Ponerse en contacto"
    },
    footer: { rights: "Todos los derechos reservados." }
  },
  US: {
    nav: { home: "Home", specialties: "Skills", about: "Summary", projects: "Experience", stack: "Tech Stack", contact: "Contact" },
    hero: {
      role: "Software Engineer | Full-Stack | QA",
      title: "Robust Architecture.",
      subtitle: "Scalable Quality.",
      description: "Full-Stack Developer and QA specialist in identifying architectural issues before they become critical. Total focus on product lifecycle, from business rules to UX.",
      cta: "View Projects",
      downloadCv: "Download CV"
    },
    specialties: {
      prefix: "MY",
      heading: "COMPETENCIES",
      items: {
        arch: { title: "Architecture & Clean Code", description: "Focus on scalable and modular applications. Requirements documentation and modeling to avoid rework." },
        qa: { title: "Quality Assurance (QA)", description: "Shift Left Testing application. Manual and automated tests with Cypress and Postman to ensure bug-free software." },
        agile: { title: "Agile Methodologies", description: "Consolidated experience in SCRUM and Kanban. Conducting meetings with stakeholders for total alignment." },
        ai: { title: "Automation & AI", description: "Strategic use of AI (RAG, n8n) to optimize processes, from generating test scenarios to complex workflow automation." }
      }
    },
    about: {
      prefix: "ABOUT ME",
      title: "JOÃO EDUARDO GIRÃO",
      p1: "My differentiator is caring about the entire product lifecycle. It's not enough for the app to work; it must be scalable, maintainable, and solve the right problem.",
      p2: "I deeply study business rules and have proven skills in requirements elicitation. I work with Next.js, Nest.js, and modern architectures, always applying QA best practices.",
      p3: "I am currently looking for opportunities where I can apply my experience in QA, development, and automation to solve real problems."
    },
    portfolio: {
      prefix: "MY",
      heading: "EXPERIENCE",
      categories: { health: "HealthTech", automation: "GovTech / AI", ecommerce: "E-commerce" },
      projects: {
        vitta: { 
          title: "VittaHub Platform", 
          desc: "Robust health platform for clinic management.", 
          details: {
            role: "Frontend Developer",
            duration: "Oct 2025 - Present",
            items: [
              "Created high-performance interface for health systems.",
              "Modular and scalable architecture with Next.js, TypeScript, and TailwindCSS.",
              "Developed reusable component library (cards, modals, toasters).",
              "REST API integration for dynamic data.",
              "Task management in Jira and versioning with Git/Github."
            ]
          }
        },
        sim: { 
          title: "SIM Chatbot (AI)", 
          desc: "RAG system that reduced operational load by 80%.", 
          details: {
            role: "Automation Engineer",
            duration: "Sep 2025 - Sep 2025",
            items: [
              "Automated 24/7 public service for Municipal Inspection Service.",
              "Implemented RAG consuming Google Drive API (81+ pages, 600+ articles).",
              "Developed complex workflows in n8n.",
              "Deployed on Hostinger VPS using Redis for session management.",
              "80% reduction in operational load and 95% uptime."
            ]
          }
        },
        craft: { 
          title: "Artisan Center", 
          desc: "Complete sales platform for local artisans.", 
          details: {
            role: "Systems Analyst",
            duration: "Mar 2025 - Aug 2025",
            items: [
              "Developed web system for local artisans sales.",
              "Requirements elicitation and validation.",
              "High-fidelity prototyping in Figma.",
              "Functional page production with Next.js and TailwindCSS.",
              "Unit and automated functional testing (QA) with Cypress."
            ]
          }
        }
      }
    },
    stack: {
      prefix: "MY",
      heading: "TECH STACK",
      categories: { frontend: "Front-end", backend: "Back-end", qa: "QA & Testing", tools: "DevOps & Tools" }
    },
    contact: {
      title: "LET'S BUILD",
      subtitle: "SOMETHING SOLID.",
      text: "I am available for new challenges in Software Engineering and QA. Let's talk about how I can contribute to your team.",
      email: "joaoeduardogirao@gmail.com",
      linkedin: "linkedin.com/in/joaoedugirao",
      cta: "Get in touch"
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