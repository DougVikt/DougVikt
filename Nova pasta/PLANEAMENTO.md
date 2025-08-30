# Extensão Chrome - Notificações Prioritárias

## Visão Geral
Extensão para Chrome que monitora sites de chat e envia notificações prioritárias com alertas sonoros e visuais.

## Funcionalidades Principais

### 1. Gestão de Sites de Chat
- Interface para adicionar/remover sites de chat
- Suporte para sites populares (WhatsApp Web, Telegram Web, Discord, Slack, etc.)
- Configuração personalizada para sites não reconhecidos
- Sistema de prioridades por site

### 2. Sistema de Notificações
- Notificações nativas do Chrome
- Alertas sonoros personalizáveis
- Diferentes níveis de prioridade (Alta, Média, Baixa)
- Notificações persistentes para mensagens importantes
- Contador de mensagens não lidas

### 3. Interface de Utilizador
- Popup principal com lista de sites monitorizados
- Configurações de notificação
- Controlos de ativação/desativação por site
- Histórico de notificações recentes
- Configurações de som e prioridade

### 4. Monitoramento Inteligente
- Deteção automática de novas mensagens
- Filtros para evitar spam de notificações
- Modo "Não Perturbar" com horários configuráveis
- Sincronização entre abas do mesmo site

## Arquitetura Técnica

### Ficheiros da Extensão
```
chrome-priority-notifications/
├── manifest.json          # Configuração da extensão
├── background.js          # Script de background
├── content.js            # Script de conteúdo
├── popup.html            # Interface principal
├── popup.js              # Lógica do popup
├── popup.css             # Estilos do popup
├── options.html          # Página de configurações
├── options.js            # Lógica das configurações
├── options.css           # Estilos das configurações
├── icons/                # Ícones da extensão
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
└── sounds/               # Ficheiros de som
    ├── notification.mp3
    ├── priority-high.mp3
    └── priority-low.mp3
```

### Permissões Necessárias
- `notifications`: Para criar notificações do sistema
- `storage`: Para guardar configurações
- `activeTab`: Para aceder ao conteúdo das abas
- `background`: Para executar scripts em background
- `<all_urls>`: Para monitorizar qualquer site (configurável)

### Comunicação Entre Scripts
- Background Script ↔ Content Script: Mensagens para deteção de notificações
- Popup ↔ Background Script: Gestão de configurações e estado
- Content Script → Background Script: Envio de eventos de novas mensagens

## Fluxo de Funcionamento

1. **Inicialização**: Utilizador instala extensão e configura sites
2. **Monitoramento**: Content scripts detetam mudanças nos sites de chat
3. **Processamento**: Background script processa eventos e aplica filtros
4. **Notificação**: Sistema envia notificação com som baseado na prioridade
5. **Interação**: Utilizador pode clicar na notificação para abrir o site

## Configurações Disponíveis

### Por Site
- Ativado/Desativado
- Nível de prioridade
- Som personalizado
- Filtros de palavras-chave
- Horários de funcionamento

### Globais
- Volume dos alertas
- Modo "Não Perturbar"
- Duração das notificações
- Limite de notificações por minuto
- Tema da interface (claro/escuro)

