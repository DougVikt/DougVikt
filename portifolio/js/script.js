// ========================================
// FUNÇÕES PRINCIPAIS
// ========================================

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('mainNav');
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================================
// TYPEWRITER EFFECT
// ========================================
const titles = [
    'Desenvolvedor Full-Stack',
    'Técnico em Informática',
    'Solucionador de Problemas',
    'Entusiasta de Tecnologia'
];

let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeWriter() {
    const typedTextElement = document.getElementById('typedText');
    const currentTitle = titles[titleIndex];
    
    if (!isDeleting) {
        typedTextElement.textContent = currentTitle.substring(0, charIndex + 1);
        charIndex++;
        
        if (charIndex === currentTitle.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pause before deleting
        } else {
            typingSpeed = 100;
        }
    } else {
        typedTextElement.textContent = currentTitle.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
        
        if (charIndex === 0) {
            isDeleting = false;
            titleIndex = (titleIndex + 1) % titles.length;
            typingSpeed = 500; // Pause before typing next title
        }
    }
    
    setTimeout(typeWriter, typingSpeed);
}

// ========================================
// CARREGAR DADOS PESSOAIS
// ========================================
function loadPersonalInfo() {
    document.getElementById('heroName').textContent = personalInfo.name;
    document.getElementById('heroTagline').textContent = personalInfo.tagline;
    document.getElementById('aboutBio').textContent = personalInfo.bio;
    
    // Update contact info
    const emailLink = document.getElementById('contactEmail');
    emailLink.href = `mailto:${personalInfo.email}`;
    emailLink.querySelector('p').textContent = personalInfo.email;
    
    const linkedinLink = document.getElementById('contactLinkedin');
    linkedinLink.href = personalInfo.linkedin;
    
    const githubLink = document.getElementById('contactGithub');
    githubLink.href = personalInfo.github;
    
    // Update main contact button
    document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
        link.href = `mailto:${personalInfo.email}`;
    });
}

// ========================================
// CARREGAR HABILIDADES
// ========================================
function loadSkills() {
    const container = document.getElementById('skillsContainer');
    
    skills.forEach(skillCategory => {
        const col = document.createElement('div');
        col.className = 'col-md-6';
        
        let technologiesHTML = '';
        skillCategory.technologies.forEach(tech => {
            technologiesHTML += `
                <div class="skill-item">
                    <div class="skill-header">
                        <span class="skill-name">${tech.name}</span>
                        <span class="skill-level">${tech.level}%</span>
                    </div>
                    <div class="skill-bar">
                        <div class="skill-progress" data-width="${tech.level}"></div>
                    </div>
                </div>
            `;
        });
        
        col.innerHTML = `
            <div class="skill-card">
                <h4>${skillCategory.category}</h4>
                ${technologiesHTML}
            </div>
        `;
        
        container.appendChild(col);
    });
    
    // Animate skill bars when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBars = entry.target.querySelectorAll('.skill-progress');
                progressBars.forEach(bar => {
                    const width = bar.getAttribute('data-width');
                    bar.style.width = width + '%';
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(container);
}

// ========================================
// CARREGAR PROJETOS
// ========================================
function loadProjects(filter = 'all') {
    const container = document.getElementById('projectsContainer');
    container.innerHTML = '';
    
    let filteredProjects = projects;
    if (filter === 'featured') {
        filteredProjects = projects.filter(p => p.featured);
    }
    
    filteredProjects.forEach(project => {
        const col = document.createElement('div');
        col.className = 'col-md-6 col-lg-4';
        
        const demoLink = project.demo ? `
            <a href="${project.demo}" target="_blank" class="project-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                Demo
            </a>
        ` : '';
        
        const badge = project.featured ? `
            <div class="project-badge">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                Destaque
            </div>
        ` : '';
        
        const tagsHTML = project.tags.map(tag => `
            <span class="project-tag">${tag}</span>
        `).join('');
        
        col.innerHTML = `
            <div class="project-card">
                <div class="project-image-wrapper">
                    <img src="${project.image}" alt="${project.title}" class="project-image">
                    ${badge}
                </div>
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tags">
                        ${tagsHTML}
                    </div>
                    <div class="project-links">
                        <a href="${project.github}" target="_blank" class="project-link">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                            Código
                        </a>
                        ${demoLink}
                    </div>
                </div>
            </div>
        `;
        
        container.appendChild(col);
    });
}

// Filter buttons
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            loadProjects(this.getAttribute('data-filter'));
        });
    });
});

// ========================================
// CARREGAR EXPERIÊNCIA
// ========================================
function loadExperience() {
    const container = document.getElementById('experienceContainer');
    
    experience.forEach((item, index) => {
        const isEven = index % 2 === 0;
        const alignClass = isEven ? 'text-md-end' : 'text-start';
        
        const icons = {
            work: '<path d="M20 7h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 4h4v3h-4V4zm10 16H4V9h16v11z"></path><path d="M12 12h2v2h-2z"></path>',
            certification: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>',
            education: '<path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path>'
        };
        
        const icon = icons[item.type] || icons.work;
        
        const itemDiv = document.createElement('div');
        itemDiv.className = 'timeline-item';
        itemDiv.innerHTML = `
            <div class="row">
                <div class="col-md-6 ${isEven ? 'order-md-1' : 'order-md-2'}">
                    <div class="timeline-content ${alignClass}">
                        <div class="timeline-header ${isEven ? 'flex-md-row-reverse' : 'flex-row'} ${isEven ? 'text-md-end' : 'text-start'} d-flex flex-row text-start">
                            <div class="timeline-icon-sm">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    ${icon}
                                </svg>
                            </div>
                            <div class="flex-grow-1">
                                <h5 class="timeline-title">${item.title}</h5>
                                <p class="timeline-company">${item.company}</p>
                            </div>
                        </div>
                        <p class="timeline-period">${item.period}</p>
                        <p class="timeline-description">${item.description}</p>
                    </div>
                </div>
                <div class="col-md-6 ${isEven ? 'order-md-2' : 'order-md-1'}">
                    <!-- Empty space for alternating layout -->
                </div>
            </div>
            <div class="timeline-icon d-none d-md-flex">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    ${icon}
                </svg>
            </div>
        `;
        
        container.appendChild(itemDiv);
    });
}

// ========================================
// INICIALIZAR TUDO
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Load all content
    loadPersonalInfo();
    loadSkills();
    loadProjects();
    loadExperience();
    
    // Start typewriter effect
    typeWriter();
});
