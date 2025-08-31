# Portfólio - Programador & Técnico em Informática

## Resumo do Projeto

Foi criado com sucesso um site de portfólio interativo e moderno para programador e técnico em informática, com foco no modo noturno e alta interatividade.

## Características Principais

### ✨ Design e Experiência do Utilizador
- **Modo Noturno por Defeito**: O site inicia automaticamente em modo escuro, com possibilidade de alternar para modo claro
- **Design Responsivo**: Totalmente adaptado para desktop, tablet e dispositivos móveis
- **Animações Suaves**: Transições e efeitos hover em todos os elementos interativos
- **Paleta de Cores Moderna**: Gradientes roxo/azul com acentos vibrantes

### 🎯 Secções do Site
1. **Hero Section**: Apresentação com texto animado e botões de ação
2. **Sobre Mim**: Descrição profissional com competências e estatísticas
3. **Projetos**: Showcase interativo com navegação por setas e indicadores
4. **Competências**: Sistema de abas com barras de progresso animadas
5. **Contacto**: Formulário funcional com informações de contacto
6. **Rodapé**: Links rápidos e informações adicionais

### 🛠️ Tecnologias Utilizadas
- **React 18**: Framework principal
- **Tailwind CSS**: Estilização moderna e responsiva
- **Shadcn/UI**: Componentes de interface profissionais
- **Lucide Icons**: Ícones modernos e consistentes
- **Vite**: Build tool rápido e eficiente

### 🎨 Elementos Interativos
- **Toggle de Tema**: Alternância suave entre modo claro/escuro
- **Navegação Suave**: Scroll automático entre secções
- **Carrossel de Projetos**: Navegação com setas e indicadores
- **Abas de Competências**: Sistema de categorias interativo
- **Formulário de Contacto**: Com validação e feedback visual
- **Efeitos Hover**: Em botões, cartões e elementos clicáveis

### 📱 Responsividade
- Layout adaptativo para todas as resoluções
- Menu hambúrguer em dispositivos móveis
- Componentes que se reorganizam automaticamente
- Tipografia escalável

## Estrutura de Ficheiros

```
portfolio-site/
├── src/
│   ├── components/
│   │   ├── ThemeToggle.jsx    # Alternador de tema
│   │   ├── Header.jsx         # Cabeçalho e navegação
│   │   ├── Hero.jsx           # Secção principal
│   │   ├── About.jsx          # Sobre mim
│   │   ├── Projects.jsx       # Projetos
│   │   ├── Skills.jsx         # Competências
│   │   ├── Contact.jsx        # Contacto
│   │   └── Footer.jsx         # Rodapé
│   ├── App.jsx               # Componente principal
│   └── App.css              # Estilos globais
├── dist/                    # Versão de produção
└── package.json            # Dependências
```

## Como Utilizar

### Desenvolvimento Local
```bash
cd portfolio-site
npm run dev
```

### Build de Produção
```bash
npm run build
```

## Personalização

O site está preparado para ser facilmente personalizado:

1. **Conteúdo**: Editar os textos nos componentes
2. **Projetos**: Adicionar/remover projetos no array `projects`
3. **Competências**: Modificar as categorias e níveis em `Skills.jsx`
4. **Contacto**: Atualizar informações pessoais em `Contact.jsx`
5. **Cores**: Ajustar a paleta no ficheiro `App.css`

## Funcionalidades Avançadas

- **Persistência de Tema**: O modo escolhido é guardado no localStorage
- **Animações de Texto**: Efeito de máquina de escrever na secção hero
- **Barras de Progresso**: Animadas com delays escalonados
- **Formulário Funcional**: Pronto para integração com backend
- **SEO Otimizado**: Meta tags e estrutura semântica

## Estado do Projeto

✅ **Concluído e Testado**
- Todas as funcionalidades implementadas
- Testado em modo claro e escuro
- Responsividade verificada
- Build de produção criado
- Pronto para deployment

O site está agora disponível para visualização e pode ser facilmente alojado em qualquer serviço de hosting estático.

