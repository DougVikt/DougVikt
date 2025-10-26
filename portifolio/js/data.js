// ========================================
// DADOS DO PORTFÓLIO - EDITE AQUI!
// ========================================

// Informações Pessoais
const personalInfo = {
    name: "Douglas Viktor",
    title: "Desenvolvedor Backend & Técnico em Informática",
    tagline: "Transformando ideias em soluções digitais",
    email: "dougvikt@proton.me",
    linkedin: "https://linkedin.com/in/douglas-viktor-a3422b343/",
    github: "https://github.com/dougvikt",
    location: "Sou de Natal, RN, Brasil",
};

// Habilidades Técnicas
const skills = [
    {
        category: "Frontend",
        technologies: [
            { name: "React", level: 10 },
            { name: "JavaScript", level: 15 },
            { name: "HTML5 & CSS3", level: 30 },
            { name: "Bootstrap", level: 65 }
        ]
    },
    {
        category: "Backend",
        technologies: [
            { name: "Python", level: 86 },
            { name: "RESTful APIs", level: 9 },
            { name: "SQL", level: 40 },
            { name: "PHP", level: 32 },
        ]
    },
    {
        category: "Database",
        technologies: [
            { name: "MongoDB", level: 10 },
            { name: "MySQL", level: 75 },
            { name: "PostgreSQL", level: 10 },
            { name: "Oracle", level: 10 }
        ]
    },
    {
        category: "DevOps & Tools",
        technologies: [
            { name: "Git & GitHub", level: 65 },
            { name: "Windows", level: 75 },
            { name: "Linux", level: 25 },
            { name: "UE/UX", level: 34 }
            
        ]
    }
];

// Projetos
const projects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "Plataforma completa de e-commerce com carrinho, pagamentos e painel administrativo.",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
        tags: ["React", "Node.js", "MongoDB", "Stripe"],
        github: "https://github.com/seu-usuario/projeto-1",
        demo: "https://demo-projeto-1.com",
        featured: true
    },
    {
        id: 2,
        title: "Task Management App",
        description: "Aplicativo de gerenciamento de tarefas com sistema de colaboração em tempo real.",
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
        tags: ["React", "FastAPI", "WebSockets", "PostgreSQL"],
        github: "https://github.com/seu-usuario/projeto-2",
        demo: "https://demo-projeto-2.com",
        featured: true
    },
    {
        id: 3,
        title: "Portfolio Website",
        description: "Site de portfólio pessoal com animações e design moderno.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        tags: ["Next.js", "Tailwind", "Framer Motion"],
        github: "https://github.com/seu-usuario/projeto-3",
        demo: "https://demo-projeto-3.com",
        featured: false
    },
    {
        id: 4,
        title: "API RESTful",
        description: "API robusta para gerenciamento de recursos com autenticação JWT.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
        tags: ["Python", "FastAPI", "JWT", "Docker"],
        github: "https://github.com/seu-usuario/projeto-4",
        demo: null,
        featured: false
    },
    {
        id: 5,
        title: "Dashboard Analytics",
        description: "Dashboard interativo para visualização de dados e métricas em tempo real.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        tags: ["React", "D3.js", "Node.js", "MongoDB"],
        github: "https://github.com/seu-usuario/projeto-5",
        demo: "https://demo-projeto-5.com",
        featured: true
    },
    {
        id: 6,
        title: "Mobile App Backend",
        description: "Backend escalável para aplicativo mobile com sistema de notificações.",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
        tags: ["Node.js", "Express", "Firebase", "Redis"],
        github: "https://github.com/seu-usuario/projeto-6",
        demo: null,
        featured: false
    }
];

// Experiência e Certificações
const experience = [
    {
        id: 1,
        title: "Desenvolvedor Full-Stack",
        company: "Nome da Empresa",
        period: "2022 - Presente",
        description: "Desenvolvimento de aplicações web completas, desde o frontend até o backend, utilizando React, Node.js e MongoDB. Implementação de APIs RESTful e integração com serviços externos.",
        type: "work"
    },
    {
        id: 2,
        title: "Técnico em Informática",
        company: "Nome da Empresa",
        period: "2020 - 2022",
        description: "Suporte técnico, manutenção de sistemas, configuração de redes e resolução de problemas de hardware e software.",
        type: "work"
    },
    {
        id: 3,
        title: "Certificação AWS Cloud Practitioner",
        company: "Amazon Web Services",
        period: "2023",
        description: "Certificação em fundamentos de cloud computing e serviços AWS.",
        type: "certification"
    },
    {
        id: 4,
        title: "Curso de Desenvolvimento Web Full-Stack",
        company: "Instituição de Ensino",
        period: "2021",
        description: "Formação completa em desenvolvimento web, incluindo frontend, backend, banco de dados e deploy.",
        type: "education"
    }
];