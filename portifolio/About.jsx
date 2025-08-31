import { Code, Server, Shield, Wrench } from 'lucide-react'

export function About() {
  const highlights = [
    {
      icon: Code,
      title: 'Desenvolvimento Web',
      description: 'Frontend e Backend com tecnologias modernas'
    },
    {
      icon: Server,
      title: 'Infraestrutura',
      description: 'Configuração e manutenção de servidores'
    },
    {
      icon: Shield,
      title: 'Segurança',
      description: 'Implementação de práticas de segurança'
    },
    {
      icon: Wrench,
      title: 'Suporte Técnico',
      description: 'Resolução de problemas e manutenção'
    }
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Sobre Mim
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
                Programador & Técnico em Informática
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sou um profissional apaixonado por tecnologia com experiência em desenvolvimento 
                de software e suporte técnico. Combino conhecimentos sólidos em programação com 
                competências práticas em infraestrutura e manutenção de sistemas.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                A minha abordagem foca-se em criar soluções eficientes e escaláveis, sempre 
                mantendo as melhores práticas de desenvolvimento e segurança. Estou constantemente 
                a aprender novas tecnologias para me manter atualizado com as tendências do mercado.
              </p>

              <div className="pt-4">
                <h4 className="text-xl font-semibold mb-4 text-foreground">Principais Competências:</h4>
                <div className="flex flex-wrap gap-3">
                  {['JavaScript', 'React', 'Node.js', 'Python', 'SQL', 'Linux', 'Docker', 'Git'].map((skill) => (
                    <span 
                      key={skill}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '3+', label: 'Anos de Experiência' },
              { number: '20+', label: 'Projetos Concluídos' },
              { number: '10+', label: 'Tecnologias' },
              { number: '100%', label: 'Dedicação' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

