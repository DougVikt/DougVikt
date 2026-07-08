// ========================================
// DADOS DO PORTFÓLIO - EDITE AQUI!
// ========================================

// Informações Pessoais
const personalInfo = {
    nameKey: "personal.name",
    titleKey: "personal.title",
    taglineKey: "personal.tagline",
    email: "douglasviktormartins@hotmail.com",
    linkedin: "https://linkedin.com/in/douglas-viktor-a3422b343/",
    github: "https://github.com/dougvikt",
    locationKey: "personal.location",
};

// Habilidades Técnicas
const skills = [
    {
        categoryKey: "skills.category.frontend",
        technologies: [
            { name: "React", level: 10 },
            { name: "JavaScript", level: 15 },
            { name: "HTML5 & CSS3", level: 30 },
            { name: "Bootstrap", level: 65 }
        ]
    },
    {
        categoryKey: "skills.category.backend",
        technologies: [
            { name: "Python", level: 76 },
            { name: "Django", level: 35 },
            { name: "RESTful APIs", level: 12 },
            { name: "SQL", level: 40 },
            { name: "PHP", level: 32 },
        ]
    },
    {
        categoryKey: "skills.category.database",
        technologies: [
            { name: "MongoDB", level: 10 },
            { name: "MySQL", level: 75 },
            { name: "PostgreSQL", level: 10 },
            { name: "Oracle", level: 12 }
        ]
    },
    {
        categoryKey: "skills.category.devops",
        technologies: [
            { name: "Git & GitHub", level: 65 },
            { name: "Windows", level: 75 },
            { name: "Linux", level: 25 },
            { name: "UE/UX", level: 34 },
            { name: "Docker", level: 12 }
            
        ]
    }
];

// Projetos
const projects = [
    {
        id: 1,
        titleKey: "project.1.title",
        descriptionKey: "project.1.desc",
        image: "img/snake.gif",
        tags: ["Python", "Game"],
        github: "https://github.com/DougVikt/GAMES",
        featured: false,
        doc:false
    },
    {
        id: 2,
        titleKey: "project.2.title",
        descriptionKey: "project.2.desc",
        image: "img/ploop.gif",
        tags: ["Python", "Game"],
        github: "https://github.com/DougVikt/GAMES",
        featured: false,
        doc:false
    },
    {
        id: 3,
        titleKey: "project.3.title",
        descriptionKey: "project.3.desc",
        image: "img/adv.gif",
        tags: ["c#", "Game"],
        github: "https://github.com/DougVikt/GAMES",
        featured: false,
        doc:false
    },
    {
        id: 4,
        titleKey: "project.4.title",
        descriptionKey: "project.4.desc",
        image: "img/logo_biblio_amanaje.png",
        tags: ["HTML","Css","Bootstrap","JavaScript","PHP","Site"],
        github: "https://github.com/DougVikt/SITE_GERENT_BIBLIOTECA",
        featured: false,
        doc:false
    },
    {
        id: 5,
        titleKey: "project.5.title",
        descriptionKey: "project.5.desc",
        image: "img/logo_vaudio.jpg",
        tags: ["Python", "App desktop"],
        github: "https://github.com/DougVikt/APP_V-AUDIO",
        featured: false,
        doc:false
    },
    {
        id: 6,
        titleKey: "project.6.title",
        descriptionKey: "project.6.desc",
        image: "img/logo_ticlean.jpg",
        tags: ["Python", "App desktop"],
        github: "https://github.com/DougVikt/Acessorios_de_TI",
        featured: false,
        doc:false
    },
    {
        id: 7,
        titleKey: "project.7.title",
        descriptionKey: "project.7.desc",
        image: "img/sm_site.gif",
        tags: ["Html","Css","JavaScript","Django","Bootstrap","Site"],
        github: "https://github.com/DougVikt/SintoniaMental",
        demo: "https://sintoniamental.onrender.com",
        featured: false,
        doc:false
    },
    {
        id: 8,
        titleKey: "project.8.title",
        descriptionKey: "project.8.desc",
        image: "img/api.jpeg",
        tags: ["Python", "Django","Django Rest Framework"],
        github: "https://github.com/DougVikt/API-CineReserve",
        featured: false,
        doc:false
    },
    {
        id:9,
        titleKey: "project.9.title",
        descriptionKey: "project.9.desc",
        image:"img/dj-reframe.jpeg",
        tags:["Python","Django","Pacote Pypi" , "CLI"],
        github:"https://github.com/DougVikt/dj-reframe",
        featured: true,
        doc:false

    },
      {
        id:10,
        titleKey: "project.10.title",
        descriptionKey: "project.10.desc",
        image:"img/app_agendamento.gif",
        tags:["Python","Flask","Web" , "Intranet"],
        github:"https://github.com/DougVikt/app_agendamento",
        featured: false,
        doc:false

    },
     {
        id:11,
        titleKey: "project.11.title",
        descriptionKey: "project.11.desc",
        image:"img/dataswitch.gif",
        tags:["React","Web"],
        site:"https://dataswitch.com.br",
        github:"",
        featured: true,
        doc:false
    },
     {
        id:12,
        titleKey: "project.12.title",
        descriptionKey: "project.12.desc",
        image:"img/commit_pattern.png",
        tags:["Commits","Documentation"],
        site:"",
        github:"https://github.com/DougVikt/commit_pattern",
        featured: true,
        doc:true,
    },
    {
        id:13,
        titleKey: "project.13.title",
        descriptionKey: "project.13.desc",
        image:"img/caminho_dev.png",
        tags:["Documentation","Instruction"],
        site:"",
        github:"https://github.com/DougVikt/caminho-do-desenvolvedor",
        featured: true,
        doc:true,
    }

    
];

// Experiência e Certificações
const experience = [
    {
        id: 1,
        titleKey: "exp.1.title",
        companyKey: "exp.1.company",
        periodKey: "exp.1.period",
        descriptionKey: "exp.1.desc",
        type: "certification"
    },
    {
        id: 2,
        titleKey: "exp.2.title",
        companyKey: "exp.2.company",
        periodKey: "exp.2.period",
        descriptionKey: "exp.2.desc",
        type: "education"
    },
    {
        id: 3,
        titleKey: "exp.3.title",
        companyKey: "exp.3.company",
        periodKey: "exp.3.period",
        descriptionKey: "exp.3.desc",
        type: "education"
    },
    {
        id: 4,
        titleKey: "exp.4.title",
        companyKey: "exp.4.company",
        periodKey: "exp.4.period",
        descriptionKey: "exp.4.desc",
        type: "education"
    },
     {
        id: 5,
        titleKey: "exp.5.title",
        companyKey: "exp.5.company",
        periodKey: "exp.5.period",
        descriptionKey: "exp.5.desc",
        type: "certification"
    },
    {
        id:6,
        titleKey: "exp.6.title",
        companyKey: "exp.6.company",
        periodKey: "exp.6.period",
        descriptionKey: "exp.6.desc",
        type: "work"
    }
];