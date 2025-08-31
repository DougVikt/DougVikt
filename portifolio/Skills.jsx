import { useState } from 'react'
import { Code, Database, Server, Smartphone, Shield, Wrench } from 'lucide-react'

export function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend')

  const skillCategories = {
    frontend: {
      icon: Code,
      title: 'Frontend',
      skills: [
        { name: 'JavaScript', level: 90 },
        { name: 'React', level: 85 },
        { name: 'Vue.js', level: 80 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'TypeScript', level: 75 },
        { name: 'Tailwind CSS', level: 90 }
      ]
    },
    backend: {
      icon: Server,
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'PHP', level: 75 },
        { name: 'Laravel', level: 70 },
        { name: 'Express.js', level: 85 },
        { name: 'FastAPI', level: 75 }
      ]
    },
    database: {
      icon: Database,
      title: 'Base de Dados',
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'Redis', level: 70 },
        { name: 'Firebase', level: 80 },
        { name: 'SQL Server', level: 75 }
      ]
    },
    mobile: {
      icon: Smartphone,
      title: 'Mobile',
      skills: [
        { name: 'React Native', level: 80 },
        { name: 'Flutter', level: 70 },
        { name: 'Ionic', level: 65 },
        { name: 'PWA', level: 85 },
        { name: 'App Store Deploy', level: 75 },
        { name: 'Push Notifications', level: 80 }
      ]
    },
    devops: {
      icon: Shield,
      title: 'DevOps & Segurança',
      skills: [
        { name: 'Docker', level: 80 },
        { name: 'Linux', level: 85 },
        { name: 'Git', level: 90 },
        { name: 'CI/CD', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'Nginx', level: 80 }
      ]
    },
    tools: {
      icon: Wrench,
      title: 'Ferramentas & Outros',
      skills: [
        { name: 'VS Code', level: 95 },
        { name: 'Figma', level: 75 },
        { name: 'Postman', level: 85 },
        { name: 'Jira', level: 70 },
        { name: 'Photoshop', level: 65 },
        { name: 'Slack', level: 90 }
      ]
    }
  }

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Competências
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tecnologias e ferramentas que domino para criar soluções completas e eficientes.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(skillCategories).map(([key, category]) => {
              const IconComponent = category.icon
              return (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                    activeCategory === key
                      ? 'bg-gradient-to-r from-primary to-purple-600 text-white shadow-lg scale-105'
                      : 'bg-card text-muted-foreground hover:text-foreground hover:scale-105 border border-border'
                  }`}
                >
                  <IconComponent className="h-5 w-5" />
                  <span className="font-medium">{category.title}</span>
                </button>
              )
            })}
          </div>

          {/* Skills Display */}
          <div className="bg-card rounded-2xl border border-border p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-purple-600 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${skill.level}%`,
                        animation: `slideIn 1s ease-out ${index * 0.1}s both`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-card rounded-xl border border-border">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-muted-foreground">Linguagens de Programação</div>
            </div>
            <div className="text-center p-6 bg-card rounded-xl border border-border">
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground">Frameworks & Bibliotecas</div>
            </div>
            <div className="text-center p-6 bg-card rounded-xl border border-border">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Ferramentas & Tecnologias</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            width: 0%;
          }
          to {
            width: var(--target-width);
          }
        }
      `}</style>
    </section>
  )
}

