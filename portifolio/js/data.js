// ========================================
// DADOS DO PORTFÓLIO - EDITE AQUI!
// ========================================

// Informações Pessoais
const personalInfo = {
    name: "Douglas Viktor",
    title: "Desenvolvedor Backend & Técnico em Informática",
    tagline: "Transformando ideias em soluções digitais",
    email: "douglasviktormartins@hotmail.com",
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
            { name: "Python", level: 76 },
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
        title: "Snake",
        description: "Um jogo no estilo classico do game da 'cobrinha' , onde a cada multiplo de 120 aumenta o nivel , com isso a velocidade",
        image: "img/snake.gif",
        tags: ["Python", "Game"],
        github: "https://github.com/DougVikt/GAMES",
        featured: false
    },
    {
        id: 2,
        title: "Ploop",
        description: `Game no estilo quebra blocos, mas sendo so o usuario contra o sistema, objetivo e não deixar a bola cair ,
        onde a cada 15s a velocidae da bola aumenta `,
        image: "img/ploop.gif",
        tags: ["Python", "Game"],
        github: "https://github.com/DougVikt/GAMES",
        featured: false
    },
    {
        id: 3,
        title: "Adivinhe a palavra",
        description: `Game de adivinhar a palavra , onde o usuario pode criar sua lista palavras , o sistema escolherá uma palavra aleatoria
        o usaurio tem 5 mais a quantidade de letras da palavra para acertar (ex: faca = 4 letras , 4 + 5 = 9 chances de acertar ), pode ser jogado 
        varias vezes com a mesma lista , mas tambem tem a opção de trocar a cada fim de partida  .`,
        image: "img/adv.gif",
        tags: ["c#", "Game"],
        github: "https://github.com/DougVikt/GAMES",
        featured: false
    },
    {
        id: 4,
        title: "Biblioteca Amanajé",
        description: "Site de gerenciamento de biblioteca com autenticação de usuários e sistema de empréstimos de livros com avaliação pelos usuarios .",
        image: "img/logo_biblio_amanaje.png",
        tags: ["HTML","Css","Bootstrap","JavaScript","PHP","Site"],
        github: "https://github.com/DougVikt/SITE_GERENT_BIBLIOTECA",
        featured: true
    },
    {
        id: 5,
        title: "Vaudio",
        description: `App desktop que adiona atalho de aumentar e diminur o volume do sistema , 
        rodando em segundo plano pode reagir a qualquer mon=mento que o usuario precisar .`,
        image: "img/logo_vaudio.jpg",
        tags: ["Python", "App desktop"],
        github: "https://github.com/DougVikt/APP_V-AUDIO",
        featured: false
    },
    {
        id: 6,
        title: "TiClean",
        description: `Aplicação para desktop de limpeza rotineira de arquivos temporários e desnecessários do sistema operacional, 
        melhorando o desempenho do computador.Apos iniciado faz tudo automatizado o usuario so precisa iniciar o app e deixar ele fazer o resto .`,
        image: "img/logo_ticlean.jpg",
        tags: ["Python", "App desktop"],
        github: "https://github.com/DougVikt/Acessorios_de_TI",
        featured: false
    },
    {
        id: 7,
        title: "Sintonia Mental",
        description: `Aplicação web para consultas online , onde o plubico alvo são pessoas que ja tem ou com potencial para o TDAH,
        com consultas online com os medicos especialistas cadastrados , agendamentos e pagamentos tudo sem precisar ir presencialmente.`,
        image: "img/sm_site.gif",
        tags: ["Html","Css","JavaScript","Django","Bootstrap","Site"],
        github: "https://github.com/DougVikt/Sintonia-da-mente",
        featured: true
    }
];

// Experiência e Certificações
const experience = [
    {
        id: 1,
        title: "Técnico em informática",
        company: "Grau Técnico",
        period: "2022-2024",
        description: `Curso técnico com ênfase em Programação Web para desenvolver soluções digitais inovadoras, codificação e manutenção de sites e aplicativos web responsivos.
        Integra conhecimentos de front-end (HTML, CSS, JavaScript) e back-end (PHP, Node.js, bancos de dados como MySQL), com tambem manutenção de hardware e software, 
        configuração de redes e suporte técnico.`,
        type: "certification"
    },
    {
        id: 2,
        title: "Framework Bootstrap",
        company: "Grau Educacional",
        period: "2023",
        description: "Curso focado no desenvolvimento de interfaces responsivas e modernas utilizando o framework Bootstrap, abrangendo conceitos de design, componentes e personalização.",
        type: "education"
    },
    {
        id: 3,
        title: "POO com python",
        company: "Fundação Bradesco",
        period: "2023",
        description: "Curso que aborda os princípios da Programação Orientada a Objetos (POO) utilizando a linguagem Python, incluindo conceitos como classes, objetos, herança, encapsulamento e polimorfismo.",
        type: "education"
    },
     {
        id: 4,
        title: "Técnologo Beckend",
        company: "Cruzeiro do Sul",
        period: "2025-2027",
        description: "Curso focado no desenvolvimento de aplicações web do lado do servidor, abrangendo linguagens como Python, Node.js e PHP, além de bancos de dados, APIs e segurança.",
        type: "certification"
    },
    {
        id: 5,
        title: "Técnico em Informática",
        company: "Grau Educacional",
        period: "Atualmente Trabalhando",
        description: "Suporte técnico, manutenção de sistemas, configuração de redes e resolução de problemas de hardware e software.",
        type: "work"
    }
];