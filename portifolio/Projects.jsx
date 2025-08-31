import { useState } from 'react'
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

export function Projects() {
  const [currentProject, setCurrentProject] = useState(0)

  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Plataforma completa de comércio eletrónico com painel administrativo, gestão de produtos, carrinho de compras e sistema de pagamentos.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      image: '/api/placeholder/600/400',
      github: '#',
      demo: '#',
      category: 'Web Development'
    },
    {
      title: 'Sistema de Gestão',
      description: 'Sistema interno para gestão de clientes, projetos e faturação com dashboard interativo e relatórios detalhados.',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Chart.js'],
      image: '/api/placeholder/600/400',
      github: '#',
      demo: '#',
      category: 'Full-Stack'
    },
    {
      title: 'App Mobile',
      description: 'Aplicação móvel para gestão de tarefas com sincronização em tempo real e notificações push.',
      technologies: ['React Native', 'Firebase', 'Redux', 'Push Notifications'],
      image: '/api/placeholder/600/400',
      github: '#',
      demo: '#',
      category: 'Mobile'
    },
    {
      title: 'API RESTful',
      description: 'API robusta para integração de sistemas com autenticação JWT, rate limiting e documentação completa.',
      technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Docker'],
      image: '/api/placeholder/600/400',
      github: '#',
      demo: '#',
      category: 'Backend'
    }
  ]

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Projetos
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Uma seleção dos meus projetos mais recentes, demonstrando diferentes tecnologias e abordagens.
            </p>
          </div>

          {/* Project Showcase */}
          <div className="relative">
            <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-lg">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Project Image */}
                <div className="relative h-64 lg:h-96 bg-gradient-to-br from-primary/20 to-purple-600/20 flex items-center justify-center">
                  <div className="text-6xl text-primary/50">
                    &lt;/&gt;
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                      {projects[currentProject].category}
                    </span>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">
                    {projects[currentProject].title}
                  </h3>
                  
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    {projects[currentProject].description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                      Tecnologias Utilizadas
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {projects[currentProject].technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-muted text-muted-foreground rounded-md text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <Button 
                      className="flex items-center gap-2 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90"
                      onClick={() => window.open(projects[currentProject].demo, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4" />
                      Ver Demo
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex items-center gap-2"
                      onClick={() => window.open(projects[currentProject].github, '_blank')}
                    >
                      <Github className="h-4 w-4" />
                      Código
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:scale-110 transition-all duration-200"
              onClick={prevProject}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:scale-110 transition-all duration-200"
              onClick={nextProject}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Project Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentProject 
                    ? 'bg-primary scale-125' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>

          {/* All Projects Grid */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Todos os Projetos</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group"
                  onClick={() => setCurrentProject(index)}
                >
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-purple-600/20 flex items-center justify-center">
                    <div className="text-4xl text-primary/50 group-hover:scale-110 transition-transform duration-200">
                      &lt;/&gt;
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-semibold mb-2 text-foreground">{project.title}</h4>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

