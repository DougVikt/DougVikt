// Background script para a extensão de Notificações Prioritárias

// Configurações padrão
const DEFAULT_SETTINGS = {
  enabled: true,
  volume: 0.8,
  doNotDisturb: false,
  doNotDisturbStart: '22:00',
  doNotDisturbEnd: '08:00',
  maxNotificationsPerMinute: 5,
  sites: {
    'web.whatsapp.com': {
      enabled: true,
      priority: 'high',
      sound: 'notification.mp3',
      keywords: [],
      name: 'WhatsApp'
    },
    'web.telegram.org': {
      enabled: true,
      priority: 'medium',
      sound: 'notification.mp3',
      keywords: [],
      name: 'Telegram'
    },
    'discord.com': {
      enabled: true,
      priority: 'medium',
      sound: 'notification.mp3',
      keywords: [],
      name: 'Discord'
    },
    'app.slack.com': {
      enabled: true,
      priority: 'high',
      sound: 'priority-high.mp3',
      keywords: [],
      name: 'Slack'
    }
  }
};

// Contador de notificações por minuto
let notificationCount = 0;
let lastResetTime = Date.now();

// Inicialização da extensão
chrome.runtime.onInstalled.addListener(async () => {
  console.log('Extensão Notificações Prioritárias instalada');
  
  // Configurar configurações padrão
  const result = await chrome.storage.sync.get(['settings']);
  if (!result.settings) {
    await chrome.storage.sync.set({ settings: DEFAULT_SETTINGS });
  }
  
  // Criar contexto de notificação
  chrome.contextMenus.create({
    id: 'priority-notifications',
    title: 'Configurar Notificações Prioritárias',
    contexts: ['page']
  });
});

// Escutar mensagens dos content scripts
chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  console.log('Mensagem recebida:', message);
  
  switch (message.type) {
    case 'NEW_MESSAGE':
      await handleNewMessage(message, sender.tab);
      break;
    case 'GET_SETTINGS':
      const settings = await getSettings();
      sendResponse(settings);
      break;
    case 'UPDATE_SETTINGS':
      await updateSettings(message.settings);
      sendResponse({ success: true });
      break;
    case 'PLAY_SOUND':
      await playNotificationSound(message.sound, message.volume);
      break;
  }
  
  return true; // Manter o canal de mensagem aberto
});

// Gerir novas mensagens
async function handleNewMessage(messageData, tab) {
  const settings = await getSettings();
  
  if (!settings.enabled) return;
  
  const hostname = new URL(tab.url).hostname;
  const siteConfig = settings.sites[hostname];
  
  if (!siteConfig || !siteConfig.enabled) return;
  
  // Verificar modo "Não Perturbar"
  if (isDoNotDisturbActive(settings)) return;
  
  // Verificar limite de notificações por minuto
  if (!checkNotificationLimit(settings)) return;
  
  // Verificar palavras-chave se configuradas
  if (siteConfig.keywords.length > 0) {
    const hasKeyword = siteConfig.keywords.some(keyword => 
      messageData.content.toLowerCase().includes(keyword.toLowerCase())
    );
    if (!hasKeyword) return;
  }
  
  // Criar notificação
  await createNotification(messageData, siteConfig, tab);
  
  // Tocar som
  await playNotificationSound(siteConfig.sound, settings.volume);
  
  // Incrementar contador
  notificationCount++;
}

// Criar notificação do Chrome
async function createNotification(messageData, siteConfig, tab) {
  const notificationId = `notification_${Date.now()}`;
  
  const options = {
    type: 'basic',
    iconUrl: 'icons/icon48.png',
    title: `${siteConfig.name} - ${siteConfig.priority.toUpperCase()}`,
    message: messageData.content || 'Nova mensagem recebida',
    priority: siteConfig.priority === 'high' ? 2 : siteConfig.priority === 'medium' ? 1 : 0,
    requireInteraction: siteConfig.priority === 'high',
    buttons: [
      { title: 'Abrir' },
      { title: 'Marcar como lida' }
    ]
  };
  
  chrome.notifications.create(notificationId, options);
  
  // Guardar referência da aba para abrir quando clicado
  await chrome.storage.local.set({
    [`notification_${notificationId}`]: {
      tabId: tab.id,
      url: tab.url,
      timestamp: Date.now()
    }
  });
}

// Tocar som de notificação
async function playNotificationSound(soundFile, volume) {
  try {
    // Criar elemento de áudio
    const audio = new Audio(chrome.runtime.getURL(`sounds/${soundFile}`));
    audio.volume = volume || 0.8;
    await audio.play();
  } catch (error) {
    console.error('Erro ao tocar som:', error);
  }
}

// Verificar se está no modo "Não Perturbar"
function isDoNotDisturbActive(settings) {
  if (!settings.doNotDisturb) return false;
  
  const now = new Date();
  const currentTime = now.getHours() * 60 + now.getMinutes();
  
  const [startHour, startMin] = settings.doNotDisturbStart.split(':').map(Number);
  const [endHour, endMin] = settings.doNotDisturbEnd.split(':').map(Number);
  
  const startTime = startHour * 60 + startMin;
  const endTime = endHour * 60 + endMin;
  
  if (startTime <= endTime) {
    return currentTime >= startTime && currentTime <= endTime;
  } else {
    return currentTime >= startTime || currentTime <= endTime;
  }
}

// Verificar limite de notificações por minuto
function checkNotificationLimit(settings) {
  const now = Date.now();
  
  // Reset contador a cada minuto
  if (now - lastResetTime > 60000) {
    notificationCount = 0;
    lastResetTime = now;
  }
  
  return notificationCount < settings.maxNotificationsPerMinute;
}

// Obter configurações
async function getSettings() {
  const result = await chrome.storage.sync.get(['settings']);
  return result.settings || DEFAULT_SETTINGS;
}

// Atualizar configurações
async function updateSettings(newSettings) {
  await chrome.storage.sync.set({ settings: newSettings });
}

// Gerir cliques nas notificações
chrome.notifications.onClicked.addListener(async (notificationId) => {
  const data = await chrome.storage.local.get([`notification_${notificationId}`]);
  const notificationData = data[`notification_${notificationId}`];
  
  if (notificationData) {
    // Focar na aba ou criar nova se não existir
    try {
      await chrome.tabs.update(notificationData.tabId, { active: true });
      await chrome.windows.update((await chrome.tabs.get(notificationData.tabId)).windowId, { focused: true });
    } catch (error) {
      // Se a aba não existir, criar nova
      await chrome.tabs.create({ url: notificationData.url });
    }
  }
  
  // Limpar notificação
  chrome.notifications.clear(notificationId);
  await chrome.storage.local.remove([`notification_${notificationId}`]);
});

// Gerir botões das notificações
chrome.notifications.onButtonClicked.addListener(async (notificationId, buttonIndex) => {
  if (buttonIndex === 0) {
    // Botão "Abrir" - mesmo comportamento do clique
    chrome.notifications.onClicked.dispatch(notificationId);
  } else if (buttonIndex === 1) {
    // Botão "Marcar como lida" - apenas fechar
    chrome.notifications.clear(notificationId);
    await chrome.storage.local.remove([`notification_${notificationId}`]);
  }
});

// Limpar notificações antigas (executar a cada hora)
setInterval(async () => {
  const data = await chrome.storage.local.get();
  const now = Date.now();
  const oneHour = 60 * 60 * 1000;
  
  for (const key in data) {
    if (key.startsWith('notification_') && data[key].timestamp < now - oneHour) {
      await chrome.storage.local.remove([key]);
    }
  }
}, 60 * 60 * 1000);

