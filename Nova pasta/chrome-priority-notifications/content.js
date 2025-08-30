// Content script para deteção de mensagens em sites de chat

console.log('Content script carregado para:', window.location.hostname);

// Configurações específicas por site
const SITE_CONFIGS = {
  'web.whatsapp.com': {
    messageSelector: '[data-testid="conversation-panel-messages"] [data-testid="msg-container"]',
    unreadSelector: '[data-testid="unread-count"]',
    chatListSelector: '[data-testid="chat-list"] [data-testid="cell-frame-container"]',
    newMessageIndicator: '[data-testid="unread-count"]',
    messageTextSelector: '[data-testid="msg-text"] span, [data-testid="quoted-text"] span'
  },
  'web.telegram.org': {
    messageSelector: '.message',
    unreadSelector: '.unread-count',
    chatListSelector: '.chat-list .chatlist-chat',
    newMessageIndicator: '.unread-count',
    messageTextSelector: '.message-text'
  },
  'discord.com': {
    messageSelector: '[class*="message-"]',
    unreadSelector: '[class*="numberBadge-"]',
    chatListSelector: '[class*="channel-"]',
    newMessageIndicator: '[class*="numberBadge-"]',
    messageTextSelector: '[class*="messageContent-"]'
  },
  'app.slack.com': {
    messageSelector: '.c-message',
    unreadSelector: '.c-mention_badge',
    chatListSelector: '.p-channel_sidebar__channel',
    newMessageIndicator: '.c-mention_badge',
    messageTextSelector: '.c-message__body'
  }
};

// Estado atual
let lastMessageCount = 0;
let lastUnreadCount = 0;
let isMonitoring = false;
let observer = null;

// Inicializar monitoramento
function initializeMonitoring() {
  const hostname = window.location.hostname;
  const config = SITE_CONFIGS[hostname];
  
  if (!config) {
    console.log('Site não suportado:', hostname);
    return;
  }
  
  console.log('Inicializando monitoramento para:', hostname);
  
  // Aguardar carregamento da página
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => startMonitoring(config));
  } else {
    startMonitoring(config);
  }
}

// Iniciar monitoramento
function startMonitoring(config) {
  if (isMonitoring) return;
  
  isMonitoring = true;
  console.log('Monitoramento iniciado');
  
  // Configurar observador de mutações
  setupMutationObserver(config);
  
  // Verificação inicial
  checkForNewMessages(config);
  
  // Verificação periódica (backup)
  setInterval(() => checkForNewMessages(config), 5000);
}

// Configurar observador de mutações DOM
function setupMutationObserver(config) {
  observer = new MutationObserver((mutations) => {
    let shouldCheck = false;
    
    mutations.forEach((mutation) => {
      // Verificar se houve mudanças relevantes
      if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
        shouldCheck = true;
      } else if (mutation.type === 'attributes' && 
                 (mutation.attributeName === 'class' || mutation.attributeName === 'data-testid')) {
        shouldCheck = true;
      }
    });
    
    if (shouldCheck) {
      setTimeout(() => checkForNewMessages(config), 100);
    }
  });
  
  // Observar mudanças no documento
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['class', 'data-testid']
  });
}

// Verificar novas mensagens
function checkForNewMessages(config) {
  try {
    // Verificar mensagens não lidas
    const unreadElements = document.querySelectorAll(config.unreadSelector);
    const currentUnreadCount = Array.from(unreadElements).reduce((total, el) => {
      const count = parseInt(el.textContent) || 1;
      return total + count;
    }, 0);
    
    // Verificar se há novas mensagens
    if (currentUnreadCount > lastUnreadCount) {
      console.log('Novas mensagens detetadas:', currentUnreadCount - lastUnreadCount);
      
      // Obter conteúdo da última mensagem
      const lastMessage = getLastMessage(config);
      
      // Enviar notificação
      sendNotification({
        type: 'NEW_MESSAGE',
        content: lastMessage,
        unreadCount: currentUnreadCount,
        site: window.location.hostname,
        timestamp: Date.now()
      });
    }
    
    lastUnreadCount = currentUnreadCount;
    
  } catch (error) {
    console.error('Erro ao verificar mensagens:', error);
  }
}

// Obter conteúdo da última mensagem
function getLastMessage(config) {
  try {
    const messages = document.querySelectorAll(config.messageSelector);
    if (messages.length === 0) return 'Nova mensagem';
    
    const lastMessage = messages[messages.length - 1];
    const textElement = lastMessage.querySelector(config.messageTextSelector);
    
    if (textElement) {
      let text = textElement.textContent.trim();
      // Limitar tamanho da mensagem
      if (text.length > 100) {
        text = text.substring(0, 97) + '...';
      }
      return text || 'Nova mensagem';
    }
    
    return 'Nova mensagem';
  } catch (error) {
    console.error('Erro ao obter última mensagem:', error);
    return 'Nova mensagem';
  }
}

// Enviar notificação para o background script
function sendNotification(data) {
  chrome.runtime.sendMessage(data).catch(error => {
    console.error('Erro ao enviar mensagem:', error);
  });
}

// Escutar mensagens do background script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  switch (message.type) {
    case 'CHECK_STATUS':
      sendResponse({
        isMonitoring: isMonitoring,
        lastUnreadCount: lastUnreadCount,
        site: window.location.hostname
      });
      break;
    case 'RESTART_MONITORING':
      if (observer) {
        observer.disconnect();
      }
      isMonitoring = false;
      initializeMonitoring();
      sendResponse({ success: true });
      break;
  }
  
  return true;
});

// Detetar mudanças de página (SPA)
let currentUrl = window.location.href;
setInterval(() => {
  if (window.location.href !== currentUrl) {
    currentUrl = window.location.href;
    console.log('URL mudou, reiniciando monitoramento');
    
    // Reiniciar monitoramento
    if (observer) {
      observer.disconnect();
    }
    isMonitoring = false;
    lastMessageCount = 0;
    lastUnreadCount = 0;
    
    setTimeout(() => initializeMonitoring(), 1000);
  }
}, 1000);

// Detetar quando a aba fica ativa/inativa
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') {
    console.log('Aba ficou ativa, verificando mensagens');
    const hostname = window.location.hostname;
    const config = SITE_CONFIGS[hostname];
    if (config) {
      setTimeout(() => checkForNewMessages(config), 500);
    }
  }
});

// Inicializar quando o script carrega
initializeMonitoring();

