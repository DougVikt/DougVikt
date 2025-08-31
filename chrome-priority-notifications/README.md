# Extensão Chrome - Notificações Prioritárias

Uma extensão para Chrome que monitora sites de chat e envia notificações prioritárias com alertas sonoros e visuais personalizáveis.

## 🚀 Funcionalidades

### ✨ Principais
- **Monitoramento Inteligente**: Detecta automaticamente novas mensagens em sites de chat populares
- **Notificações Prioritárias**: Sistema de prioridades (Alta, Média, Baixa) com diferentes alertas
- **Alertas Sonoros**: Sons personalizáveis para diferentes níveis de prioridade
- **Interface Intuitiva**: Popup moderno e página de configurações completa
- **Modo Não Perturbar**: Silenciar notificações em horários específicos

### 🎯 Sites Suportados
- WhatsApp Web
- Telegram Web
- Discord
- Slack
- Microsoft Teams
- Gmail
- Outlook
- Qualquer site personalizado

### ⚙️ Configurações Avançadas
- Limite de notificações por minuto
- Horários automáticos para modo silencioso
- Filtros por palavras-chave
- Volume personalizado dos alertas
- Notificações persistentes para alta prioridade

## 📦 Instalação

### Método 1: Instalação Manual (Recomendado)

1. **Baixar a Extensão**
   - Faça download de todos os ficheiros da extensão
   - Mantenha a estrutura de pastas intacta

2. **Abrir o Chrome**
   - Navegue para `chrome://extensions/`
   - Ative o "Modo de programador" no canto superior direito

3. **Carregar a Extensão**
   - Clique em "Carregar extensão sem compactação"
   - Selecione a pasta `chrome-priority-notifications`
   - A extensão será instalada automaticamente

4. **Configurar Permissões**
   - Aceite todas as permissões solicitadas
   - A extensão precisa de acesso aos sites para monitorar mensagens

### Método 2: Instalação via Ficheiro .crx

1. **Empacotar a Extensão**
   - Na página `chrome://extensions/`
   - Clique em "Empacotar extensão"
   - Selecione a pasta da extensão
   - Será gerado um ficheiro `.crx`

2. **Instalar o Ficheiro**
   - Arraste o ficheiro `.crx` para a página de extensões
   - Confirme a instalação

## 🎮 Como Usar

### Configuração Inicial

1. **Abrir a Extensão**
   - Clique no ícone da extensão na barra de ferramentas
   - Ou use o atalho de teclado (se configurado)

2. **Ativar Monitoramento**
   - Toggle principal deve estar ativado (azul)
   - Verifique se os sites desejados estão habilitados

3. **Configurar Sites**
   - Clique em "Adicionar" para novos sites
   - Configure prioridade e sons para cada site
   - Defina palavras-chave se necessário

### Uso Diário

1. **Monitoramento Automático**
   - A extensão monitora automaticamente os sites configurados
   - Notificações aparecem quando há novas mensagens

2. **Interagir com Notificações**
   - Clique na notificação para abrir o site
   - Use os botões "Abrir" ou "Marcar como lida"

3. **Controlo Rápido**
   - Use o popup para ativar/desativar sites específicos
   - Ative o modo "Não Perturbar" quando necessário

### Configurações Avançadas

1. **Abrir Configurações**
   - Clique no ícone de engrenagem no popup
   - Ou vá a `chrome://extensions/` → Detalhes → Opções da extensão

2. **Personalizar por Aba**
   - **Geral**: Configurações básicas e volume
   - **Sites**: Gestão completa de sites monitorizados
   - **Notificações**: Comportamento das notificações
   - **Sons**: Personalização de alertas sonoros
   - **Horários**: Modo "Não Perturbar" automático

## 🔧 Configurações Detalhadas

### Prioridades de Sites

- **Alta**: Notificações persistentes, som mais alto, cor vermelha
- **Média**: Notificações normais, som padrão, cor amarela
- **Baixa**: Notificações discretas, som suave, cor verde

### Filtros por Palavras-chave

- Configure palavras específicas para cada site
- Apenas mensagens contendo essas palavras geram notificações
- Útil para filtrar mensagens importantes em grupos grandes

### Modo Não Perturbar

- **Manual**: Ativar/desativar via popup ou configurações
- **Automático**: Configurar horários específicos
- **Dias da Semana**: Escolher quais dias aplicar o horário

## 🎵 Sons Incluídos

A extensão inclui três sons pré-configurados:

- **notification.wav**: Som padrão suave
- **priority-high.wav**: Som urgente para alta prioridade
- **priority-low.wav**: Som discreto para baixa prioridade

## 🛠️ Resolução de Problemas

### Notificações Não Aparecem

1. **Verificar Permissões**
   - Vá a `chrome://settings/content/notifications`
   - Certifique-se que as notificações estão permitidas

2. **Verificar Configurações da Extensão**
   - Toggle principal deve estar ativado
   - Sites específicos devem estar habilitados
   - Modo "Não Perturbar" deve estar desativado

3. **Recarregar Sites**
   - Atualize as abas dos sites de chat
   - A extensão precisa reinicializar o monitoramento

### Sons Não Tocam

1. **Verificar Volume**
   - Ajustar volume nas configurações da extensão
   - Verificar volume do sistema

2. **Verificar Permissões de Áudio**
   - Chrome pode bloquear reprodução automática
   - Permitir áudio para a extensão

### Performance

1. **Muitas Notificações**
   - Ajustar limite de notificações por minuto
   - Usar filtros por palavras-chave
   - Desativar sites menos importantes

2. **Consumo de Recursos**
   - A extensão é otimizada para baixo consumo
   - Monitoramento usa observadores DOM eficientes

## 📋 Requisitos do Sistema

- **Chrome**: Versão 88 ou superior
- **Manifest V3**: Suporte nativo
- **Permissões**: Notificações, Storage, ActiveTab
- **Conectividade**: Internet para acessar sites de chat

## 🔒 Privacidade e Segurança

- **Dados Locais**: Todas as configurações ficam no dispositivo
- **Sem Coleta**: Nenhum dado é enviado para servidores externos
- **Permissões Mínimas**: Apenas o necessário para funcionamento
- **Código Aberto**: Todo o código pode ser inspecionado

## 🆘 Suporte

### Problemas Comuns

1. **Extensão não carrega**: Verificar modo de programador ativado
2. **Sites não detectados**: Verificar se o site está na lista suportada
3. **Configurações perdidas**: Fazer backup via exportação

### Contacto

Para problemas técnicos ou sugestões:
- Verificar a documentação completa
- Consultar as configurações avançadas
- Reiniciar o Chrome se necessário

## 📄 Licença

Esta extensão é fornecida como está, para uso pessoal e educacional.

## 🔄 Atualizações

### Versão 1.0.0
- Lançamento inicial
- Suporte para sites principais
- Interface completa
- Sistema de prioridades
- Configurações avançadas

---

**Desenvolvido com ❤️ para melhorar sua produtividade e comunicação online!**

