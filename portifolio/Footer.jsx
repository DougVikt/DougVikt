import { Heart, ArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                &lt;Dev/&gt;
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Programador e Técnico em Informática apaixonado por criar 
                soluções inovadoras e eficientes através da tecnologia.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Links Rápidos</h3>
              <div className="space-y-2">
                {[
                  { href: '#home', label: 'Início' },
                  { href: '#about', label: 'Sobre' },
                  { href: '#projects', label: 'Projetos' },
                  { href: '#skills', label: 'Competências' },
                  { href: '#contact', label: 'Contacto' }
                ].map((link) => (
                  <button
                    key={link.href}
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                    className="block text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Contacto</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>seu.email@exemplo.com</p>
                <p>+351 123 456 789</p>
                <p>Lisboa, Portugal</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border my-8"></div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>© {currentYear} Feito com</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>por um Programador Apaixonado</span>
            </div>

            {/* Back to Top Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="flex items-center gap-2 hover:scale-105 transition-transform duration-200"
            >
              <ArrowUp className="h-4 w-4" />
              Voltar ao Topo
            </Button>
          </div>

          {/* Additional Info */}
          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              Este portfólio foi desenvolvido com React, Tailwind CSS e muito café ☕
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

