// JavaScript para o popup da extensão

// Estado da aplicação
let currentSettings = null;
let recentNotifications = [];

// Elementos DOM
const elements = {
    masterToggle: document.getElementById('masterToggle'),
    statusCard: document.getElementById('statusCard'),
    statusText: document.getElementById('statusText'),
    statusDetail: document.getElementById('statusDetail'),
    sitesList: document.getElementById('sitesList'),
    notificationsList: document.getElementById('notificationsList'),
    totalNotifications: document.getElementById('totalNotifications'),
    settingsBtn: document.getElementById('settingsBtn'),
    addSiteBtn: document.getElementById('addSiteBtn'),
    clearNotificationsBtn: document.getElementById('clearNotificationsBtn'),
    doNotDisturbBtn: document.getElementById('doNotDisturbBtn'),
    
    // Modal
    addSiteModal: document.getElementById('addSiteModal'),
    closeModalBtn: document.getElementById('closeModalBtn'),
    cancelBtn: document.getElementById('cancelBtn'),
    saveBtn: document.getElementById('saveBtn'),
    siteName: document.getElementById('siteName'),
    siteUrl: document.getElementById('siteUrl'),
    sitePriority: document.getElementById('sitePriority')
};

// Inicialização
document.addEventListener('DOMContentLoaded', async () => {
    console.log('Popup carregado');
    await loadSettings();
    await loadRecentNotifications();
    setupEventListeners();
    updateUI();
});

// Configurar event listeners
function setupEventListeners() {
    // Toggle principal
    elements.masterToggle.addEventListener('change', handleMasterToggle);
    
    // Botões
    elements.settingsBtn.addEventListener('click', openSettings);
    elements.addSiteBtn.addEventListener('click', openAddSiteModal);
    elements.clearNotificationsBtn.addEventListener('click', clearNotifications);
    elements.doNotDisturbBtn.addEventListener('click', toggleDoNotDisturb);
    
    // Modal
    elements.closeModalBtn.addEventListener('click', closeAddSiteModal);
    elements.cancelBtn.addEventListener('click', closeAddSiteModal);
    elements.saveBtn.addEventListener('click', saveSite);
    
    // Fechar modal ao clicar fora
    elements.addSiteModal.addEventListener('click', (e) => {
        if (e.target === elements.addSiteModal) {
            closeAddSiteModal();
        }
    });
    
    // Tecla ESC para fechar modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && elements.addSiteModal.classList.contains('show')) {
            closeAddSiteModal();
        }
    });
}

// Carregar configurações
async function loadSettings() {
    try {
        const response = await chrome.runtime.sendMessage({ type: 'GET_SETTINGS' });
        currentSettings = response;
        console.log('Configurações carregadas:', currentSettings);
    } catch (error) {
        console.error('Erro ao carregar configurações:', error);
        // Usar configurações padrão
        currentSettings = {
            enabled: true,
            doNotDisturb: false,
            sites: {}
        };
    }
}

// Carregar notificações recentes
async function loadRecentNotifications() {
    try {
        const data = await chrome.storage.local.get();
        recentNotifications = [];
        
        const now = Date.now();
        const oneDay = 24 * 60 * 60 * 1000;
        
        for (const key in data) {
            if (key.startsWith('notification_') && data[key].timestamp > now - oneDay) {
                recentNotifications.push(data[key]);
            }
        }
        
        // Ordenar por timestamp (mais recente primeiro)
        recentNotifications.sort((a, b) => b.timestamp - a.timestamp);
        recentNotifications = recentNotifications.slice(0, 10); // Máximo 10
        
        console.log('Notificações recentes carregadas:', recentNotifications.length);
    } catch (error) {
        console.error('Erro ao carregar notificações:', error);
        recentNotifications = [];
    }
}

// Atualizar interface
function updateUI() {
    updateStatusCard();
    updateSitesList();
    updateNotificationsList();
    updateFooterStats();
}

// Atualizar cartão de estado
function updateStatusCard() {
    const isEnabled = currentSettings.enabled;
    const isDoNotDisturb = currentSettings.doNotDisturb;
    
    elements.masterToggle.checked = isEnabled;
    
    // Remover classes anteriores
    elements.statusCard.classList.remove('inactive', 'dnd');
    
    if (!isEnabled) {
        elements.statusCard.classList.add('inactive');
        elements.statusText.textContent = 'Inativo';
        elements.statusDetail.textContent = 'Notificações desativadas';
    } else if (isDoNotDisturb) {
        elements.statusCard.classList.add('dnd');
        elements.statusText.textContent = 'Não Perturbar';
        elements.statusDetail.textContent = 'Modo silencioso ativo';
    } else {
        const activeSites = Object.values(currentSettings.sites).filter(site => site.enabled).length;
        elements.statusText.textContent = 'Ativo';
        elements.statusDetail.textContent = `Monitorando ${activeSites} sites`;
    }
    
    // Atualizar botão "Não Perturbar"
    if (isDoNotDisturb) {
        elements.doNotDisturbBtn.classList.add('active');
    } else {
        elements.doNotDisturbBtn.classList.remove('active');
    }
}

// Atualizar lista de sites
function updateSitesList() {
    const sites = currentSettings.sites || {};
    const siteEntries = Object.entries(sites);
    
    if (siteEntries.length === 0) {
        elements.sitesList.innerHTML = `
            <div class="empty-state">
                <p>Nenhum site configurado</p>
                <p style="font-size: 11px; margin-top: 4px;">Clique em "Adicionar" para começar</p>
            </div>
        `;
        return;
    }
    
    elements.sitesList.innerHTML = siteEntries.map(([hostname, site]) => {
        const iconClass = getIconClass(hostname);
        const isEnabled = site.enabled;
        
        return `
            <div class="site-item ${isEnabled ? '' : 'disabled'}" data-hostname="${hostname}">
                <div class="site-info">
                    <div class="site-icon ${iconClass}">
                        ${getSiteInitials(site.name)}
                    </div>
                    <div class="site-details">
                        <div class="site-name">${site.name}</div>
                        <div class="site-status">${isEnabled ? 'Ativo' : 'Inativo'}</div>
                    </div>
                </div>
                <div class="site-controls">
                    <span class="site-priority ${site.priority}">${getPriorityText(site.priority)}</span>
                    <div class="site-toggle ${isEnabled ? 'active' : ''}" data-hostname="${hostname}"></div>
                </div>
            </div>
        `;
    }).join('');
    
    // Adicionar event listeners para os toggles
    document.querySelectorAll('.site-toggle').forEach(toggle => {
        toggle.addEventListener('click', handleSiteToggle);
    });
}

// Atualizar lista de notificações
function updateNotificationsList() {
    if (recentNotifications.length === 0) {
        elements.notificationsList.innerHTML = `
            <div class="empty-state">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p>Nenhuma notificação recente</p>
            </div>
        `;
        return;
    }
    
    elements.notificationsList.innerHTML = recentNotifications.map(notification => {
        const timeAgo = getTimeAgo(notification.timestamp);
        const siteName = getSiteNameFromUrl(notification.url);
        const priority = getSitePriority(notification.url);
        
        return `
            <div class="notification-item ${priority}">
                <div class="notification-content">
                    <div class="notification-header">
                        <span class="notification-site">${siteName}</span>
                        <span class="notification-time">${timeAgo}</span>
                    </div>
                    <div class="notification-message">${notification.content || 'Nova mensagem'}</div>
                </div>
            </div>
        `;
    }).join('');
}

// Atualizar estatísticas do rodapé
function updateFooterStats() {
    const today = new Date().toDateString();
    const todayNotifications = recentNotifications.filter(n => 
        new Date(n.timestamp).toDateString() === today
    ).length;
    
    elements.totalNotifications.textContent = `${todayNotifications} notificações hoje`;
}

// Handlers de eventos
async function handleMasterToggle() {
    const isEnabled = elements.masterToggle.checked;
    currentSettings.enabled = isEnabled;
    
    await saveSettings();
    updateUI();
}

async function handleSiteToggle(event) {
    const hostname = event.target.dataset.hostname;
    const site = currentSettings.sites[hostname];
    
    if (site) {
        site.enabled = !site.enabled;
        await saveSettings();
        updateUI();
    }
}

async function toggleDoNotDisturb() {
    currentSettings.doNotDisturb = !currentSettings.doNotDisturb;
    await saveSettings();
    updateUI();
}

function openSettings() {
    chrome.runtime.openOptionsPage();
}

function openAddSiteModal() {
    elements.addSiteModal.classList.add('show');
    elements.siteName.focus();
}

function closeAddSiteModal() {
    elements.addSiteModal.classList.remove('show');
    elements.siteName.value = '';
    elements.siteUrl.value = '';
    elements.sitePriority.value = 'medium';
}

async function saveSite() {
    const name = elements.siteName.value.trim();
    const url = elements.siteUrl.value.trim();
    const priority = elements.sitePriority.value;
    
    if (!name || !url) {
        alert('Por favor, preencha todos os campos');
        return;
    }
    
    try {
        const hostname = new URL(url).hostname;
        
        currentSettings.sites[hostname] = {
            name: name,
            enabled: true,
            priority: priority,
            sound: 'notification.mp3',
            keywords: []
        };
        
        await saveSettings();
        updateUI();
        closeAddSiteModal();
    } catch (error) {
        alert('URL inválida. Por favor, insira uma URL válida.');
    }
}

async function clearNotifications() {
    try {
        // Limpar do storage local
        const data = await chrome.storage.local.get();
        const keysToRemove = Object.keys(data).filter(key => key.startsWith('notification_'));
        
        if (keysToRemove.length > 0) {
            await chrome.storage.local.remove(keysToRemove);
        }
        
        recentNotifications = [];
        updateNotificationsList();
        updateFooterStats();
    } catch (error) {
        console.error('Erro ao limpar notificações:', error);
    }
}

// Funções auxiliares
async function saveSettings() {
    try {
        await chrome.runtime.sendMessage({
            type: 'UPDATE_SETTINGS',
            settings: currentSettings
        });
    } catch (error) {
        console.error('Erro ao salvar configurações:', error);
    }
}

function getIconClass(hostname) {
    if (hostname.includes('whatsapp')) return 'whatsapp';
    if (hostname.includes('telegram')) return 'telegram';
    if (hostname.includes('discord')) return 'discord';
    if (hostname.includes('slack')) return 'slack';
    return '';
}

function getSiteInitials(name) {
    return name.split(' ').map(word => word[0]).join('').substring(0, 2).toUpperCase();
}

function getPriorityText(priority) {
    const texts = {
        high: 'Alta',
        medium: 'Média',
        low: 'Baixa'
    };
    return texts[priority] || 'Média';
}

function getSiteNameFromUrl(url) {
    try {
        const hostname = new URL(url).hostname;
        const site = currentSettings.sites[hostname];
        return site ? site.name : hostname;
    } catch {
        return 'Site desconhecido';
    }
}

function getSitePriority(url) {
    try {
        const hostname = new URL(url).hostname;
        const site = currentSettings.sites[hostname];
        return site ? site.priority : 'medium';
    } catch {
        return 'medium';
    }
}

function getTimeAgo(timestamp) {
    const now = Date.now();
    const diff = now - timestamp;
    
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    if (minutes < 1) return 'agora';
    if (minutes < 60) return `${minutes}m`;
    if (hours < 24) return `${hours}h`;
    return `${days}d`;
}

// Escutar mudanças nas configurações
chrome.storage.onChanged.addListener((changes, namespace) => {
    if (namespace === 'sync' && changes.settings) {
        currentSettings = changes.settings.newValue;
        updateUI();
    }
});

// Atualizar notificações em tempo real
setInterval(async () => {
    await loadRecentNotifications();
    updateNotificationsList();
    updateFooterStats();
}, 10000); // A cada 10 segundos

