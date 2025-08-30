// JavaScript para a página de configurações

// Estado da aplicação
let currentSettings = null;
let currentEditingSite = null;

// Elementos DOM
const elements = {
    // Navegação
    navTabs: document.querySelectorAll('.nav-tab'),
    tabContents: document.querySelectorAll('.tab-content'),
    
    // Botões principais
    saveBtn: document.getElementById('saveBtn'),
    resetBtn: document.getElementById('resetBtn'),
    exportBtn: document.getElementById('exportBtn'),
    
    // Aba Geral
    enabledToggle: document.getElementById('enabledToggle'),
    dndToggle: document.getElementById('dndToggle'),
    maxNotifications: document.getElementById('maxNotifications'),
    volume: document.getElementById('volume'),
    volumeValue: document.getElementById('volumeValue'),
    
    // Aba Sites
    addSiteBtn: document.getElementById('addSiteBtn'),
    sitesGrid: document.getElementById('sitesGrid'),
    
    // Aba Notificações
    persistentNotifications: document.getElementById('persistentNotifications'),
    notificationDuration: document.getElementById('notificationDuration'),
    showBadge: document.getElementById('showBadge'),
    
    // Aba Sons
    defaultSound: document.getElementById('defaultSound'),
    highPrioritySound: document.getElementById('highPrioritySound'),
    lowPrioritySound: document.getElementById('lowPrioritySound'),
    
    // Aba Horários
    autoDoNotDisturb: document.getElementById('autoDoNotDisturb'),
    timeSettings: document.getElementById('timeSettings'),
    dndStartTime: document.getElementById('dndStartTime'),
    dndEndTime: document.getElementById('dndEndTime'),
    
    // Modal
    siteModal: document.getElementById('siteModal'),
    modalTitle: document.getElementById('modalTitle'),
    closeModalBtn: document.getElementById('closeModalBtn'),
    modalCancelBtn: document.getElementById('modalCancelBtn'),
    modalDeleteBtn: document.getElementById('modalDeleteBtn'),
    modalSaveBtn: document.getElementById('modalSaveBtn'),
    modalSiteName: document.getElementById('modalSiteName'),
    modalSiteUrl: document.getElementById('modalSiteUrl'),
    modalSitePriority: document.getElementById('modalSitePriority'),
    modalSiteSound: document.getElementById('modalSiteSound'),
    modalSiteKeywords: document.getElementById('modalSiteKeywords')
};

// Configurações padrão
const DEFAULT_SETTINGS = {
    enabled: true,
    volume: 0.8,
    doNotDisturb: false,
    doNotDisturbStart: '22:00',
    doNotDisturbEnd: '08:00',
    maxNotificationsPerMinute: 5,
    persistentNotifications: true,
    notificationDuration: 8,
    showBadge: true,
    autoDoNotDisturb: false,
    dndDays: [1, 2, 3, 4, 5], // Segunda a sexta
    sounds: {
        default: 'notification.wav',
        high: 'priority-high.wav',
        low: 'priority-low.wav'
    },
    sites: {
        'web.whatsapp.com': {
            enabled: true,
            priority: 'high',
            sound: 'notification.wav',
            keywords: [],
            name: 'WhatsApp'
        },
        'web.telegram.org': {
            enabled: true,
            priority: 'medium',
            sound: 'notification.wav',
            keywords: [],
            name: 'Telegram'
        },
        'discord.com': {
            enabled: true,
            priority: 'medium',
            sound: 'notification.wav',
            keywords: [],
            name: 'Discord'
        },
        'app.slack.com': {
            enabled: true,
            priority: 'high',
            sound: 'priority-high.wav',
            keywords: [],
            name: 'Slack'
        }
    }
};

// Inicialização
document.addEventListener('DOMContentLoaded', async () => {
    console.log('Página de configurações carregada');
    await loadSettings();
    setupEventListeners();
    updateUI();
});

// Configurar event listeners
function setupEventListeners() {
    // Navegação por abas
    elements.navTabs.forEach(tab => {
        tab.addEventListener('click', () => switchTab(tab.dataset.tab));
    });
    
    // Botões principais
    elements.saveBtn.addEventListener('click', saveSettings);
    elements.resetBtn.addEventListener('click', resetSettings);
    elements.exportBtn.addEventListener('click', exportSettings);
    
    // Aba Geral
    elements.enabledToggle.addEventListener('change', updateSettings);
    elements.dndToggle.addEventListener('change', updateSettings);
    elements.maxNotifications.addEventListener('change', updateSettings);
    elements.volume.addEventListener('input', updateVolumeDisplay);
    elements.volume.addEventListener('change', updateSettings);
    
    // Aba Sites
    elements.addSiteBtn.addEventListener('click', () => openSiteModal());
    
    // Aba Notificações
    elements.persistentNotifications.addEventListener('change', updateSettings);
    elements.notificationDuration.addEventListener('change', updateSettings);
    elements.showBadge.addEventListener('change', updateSettings);
    
    // Aba Sons
    elements.defaultSound.addEventListener('change', updateSettings);
    elements.highPrioritySound.addEventListener('change', updateSettings);
    elements.lowPrioritySound.addEventListener('change', updateSettings);
    
    // Botões de teste de som
    document.querySelectorAll('.btn-test').forEach(btn => {
        btn.addEventListener('click', () => testSound(btn.dataset.sound));
    });
    
    // Aba Horários
    elements.autoDoNotDisturb.addEventListener('change', toggleTimeSettings);
    elements.dndStartTime.addEventListener('change', updateSettings);
    elements.dndEndTime.addEventListener('change', updateSettings);
    
    // Checkboxes dos dias
    ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].forEach(day => {
        const checkbox = document.getElementById(day);
        if (checkbox) {
            checkbox.addEventListener('change', updateSettings);
        }
    });
    
    // Modal
    elements.closeModalBtn.addEventListener('click', closeSiteModal);
    elements.modalCancelBtn.addEventListener('click', closeSiteModal);
    elements.modalDeleteBtn.addEventListener('click', deleteSite);
    elements.modalSaveBtn.addEventListener('click', saveSite);
    
    // Fechar modal ao clicar fora
    elements.siteModal.addEventListener('click', (e) => {
        if (e.target === elements.siteModal) {
            closeSiteModal();
        }
    });
    
    // Tecla ESC para fechar modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && elements.siteModal.classList.contains('show')) {
            closeSiteModal();
        }
    });
}

// Carregar configurações
async function loadSettings() {
    try {
        const response = await chrome.runtime.sendMessage({ type: 'GET_SETTINGS' });
        currentSettings = { ...DEFAULT_SETTINGS, ...response };
        console.log('Configurações carregadas:', currentSettings);
    } catch (error) {
        console.error('Erro ao carregar configurações:', error);
        currentSettings = { ...DEFAULT_SETTINGS };
    }
}

// Atualizar interface
function updateUI() {
    updateGeneralTab();
    updateSitesTab();
    updateNotificationsTab();
    updateSoundsTab();
    updateScheduleTab();
}

// Atualizar aba geral
function updateGeneralTab() {
    elements.enabledToggle.checked = currentSettings.enabled;
    elements.dndToggle.checked = currentSettings.doNotDisturb;
    elements.maxNotifications.value = currentSettings.maxNotificationsPerMinute;
    elements.volume.value = Math.round(currentSettings.volume * 100);
    updateVolumeDisplay();
}

// Atualizar aba de sites
function updateSitesTab() {
    const sites = currentSettings.sites || {};
    const siteEntries = Object.entries(sites);
    
    if (siteEntries.length === 0) {
        elements.sitesGrid.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1; text-align: center; padding: 40px;">
                <p>Nenhum site configurado</p>
                <p style="font-size: 12px; margin-top: 8px; color: #6c757d;">Clique em "Adicionar Site" para começar</p>
            </div>
        `;
        return;
    }
    
    elements.sitesGrid.innerHTML = siteEntries.map(([hostname, site]) => `
        <div class="site-card ${site.enabled ? '' : 'disabled'}" data-hostname="${hostname}">
            <div class="site-card-header">
                <div class="site-info">
                    <h3>${site.name}</h3>
                    <p>${hostname}</p>
                </div>
                <span class="site-priority ${site.priority}">${getPriorityText(site.priority)}</span>
            </div>
            <div class="site-card-body">
                <p><strong>Som:</strong> ${getSoundName(site.sound)}</p>
                ${site.keywords.length > 0 ? `<p><strong>Palavras-chave:</strong> ${site.keywords.join(', ')}</p>` : ''}
            </div>
            <div class="site-card-footer">
                <button class="btn-secondary edit-site-btn" data-hostname="${hostname}">Editar</button>
                <div class="site-toggle ${site.enabled ? 'active' : ''}" data-hostname="${hostname}"></div>
            </div>
        </div>
    `).join('');
    
    // Adicionar event listeners
    document.querySelectorAll('.edit-site-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            openSiteModal(btn.dataset.hostname);
        });
    });
    
    document.querySelectorAll('.site-toggle').forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleSite(toggle.dataset.hostname);
        });
    });
}

// Atualizar aba de notificações
function updateNotificationsTab() {
    elements.persistentNotifications.checked = currentSettings.persistentNotifications;
    elements.notificationDuration.value = currentSettings.notificationDuration;
    elements.showBadge.checked = currentSettings.showBadge;
}

// Atualizar aba de sons
function updateSoundsTab() {
    elements.defaultSound.value = currentSettings.sounds.default;
    elements.highPrioritySound.value = currentSettings.sounds.high;
    elements.lowPrioritySound.value = currentSettings.sounds.low;
}

// Atualizar aba de horários
function updateScheduleTab() {
    elements.autoDoNotDisturb.checked = currentSettings.autoDoNotDisturb;
    elements.dndStartTime.value = currentSettings.doNotDisturbStart;
    elements.dndEndTime.value = currentSettings.doNotDisturbEnd;
    
    toggleTimeSettings();
    
    // Atualizar checkboxes dos dias
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    days.forEach((day, index) => {
        const checkbox = document.getElementById(day);
        if (checkbox) {
            checkbox.checked = currentSettings.dndDays.includes(index + 1);
        }
    });
}

// Handlers de eventos
function switchTab(tabName) {
    // Atualizar navegação
    elements.navTabs.forEach(tab => {
        tab.classList.toggle('active', tab.dataset.tab === tabName);
    });
    
    // Atualizar conteúdo
    elements.tabContents.forEach(content => {
        content.classList.toggle('active', content.id === tabName);
    });
}

function updateVolumeDisplay() {
    elements.volumeValue.textContent = elements.volume.value + '%';
}

function toggleTimeSettings() {
    const isEnabled = elements.autoDoNotDisturb.checked;
    elements.timeSettings.style.opacity = isEnabled ? '1' : '0.5';
    elements.timeSettings.style.pointerEvents = isEnabled ? 'auto' : 'none';
    
    updateSettings();
}

function toggleSite(hostname) {
    if (currentSettings.sites[hostname]) {
        currentSettings.sites[hostname].enabled = !currentSettings.sites[hostname].enabled;
        updateSitesTab();
    }
}

async function updateSettings() {
    // Atualizar configurações com valores atuais
    currentSettings.enabled = elements.enabledToggle.checked;
    currentSettings.doNotDisturb = elements.dndToggle.checked;
    currentSettings.maxNotificationsPerMinute = parseInt(elements.maxNotifications.value);
    currentSettings.volume = parseInt(elements.volume.value) / 100;
    
    currentSettings.persistentNotifications = elements.persistentNotifications.checked;
    currentSettings.notificationDuration = parseInt(elements.notificationDuration.value);
    currentSettings.showBadge = elements.showBadge.checked;
    
    currentSettings.sounds.default = elements.defaultSound.value;
    currentSettings.sounds.high = elements.highPrioritySound.value;
    currentSettings.sounds.low = elements.lowPrioritySound.value;
    
    currentSettings.autoDoNotDisturb = elements.autoDoNotDisturb.checked;
    currentSettings.doNotDisturbStart = elements.dndStartTime.value;
    currentSettings.doNotDisturbEnd = elements.dndEndTime.value;
    
    // Atualizar dias da semana
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    currentSettings.dndDays = days.map((day, index) => {
        const checkbox = document.getElementById(day);
        return checkbox && checkbox.checked ? index + 1 : null;
    }).filter(day => day !== null);
}

async function saveSettings() {
    try {
        await updateSettings();
        
        await chrome.runtime.sendMessage({
            type: 'UPDATE_SETTINGS',
            settings: currentSettings
        });
        
        // Mostrar feedback visual
        const originalText = elements.saveBtn.textContent;
        elements.saveBtn.textContent = 'Guardado!';
        elements.saveBtn.style.background = '#28a745';
        
        setTimeout(() => {
            elements.saveBtn.textContent = originalText;
            elements.saveBtn.style.background = '';
        }, 2000);
        
        console.log('Configurações guardadas com sucesso');
    } catch (error) {
        console.error('Erro ao guardar configurações:', error);
        alert('Erro ao guardar configurações. Tente novamente.');
    }
}

async function resetSettings() {
    if (confirm('Tem a certeza que deseja restaurar todas as configurações padrão? Esta ação não pode ser desfeita.')) {
        currentSettings = { ...DEFAULT_SETTINGS };
        updateUI();
        await saveSettings();
    }
}

function exportSettings() {
    const dataStr = JSON.stringify(currentSettings, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = 'notificacoes-prioritarias-config.json';
    link.click();
}

async function testSound(soundFile) {
    try {
        await chrome.runtime.sendMessage({
            type: 'PLAY_SOUND',
            sound: soundFile,
            volume: currentSettings.volume
        });
    } catch (error) {
        console.error('Erro ao testar som:', error);
    }
}

// Gestão do modal de sites
function openSiteModal(hostname = null) {
    currentEditingSite = hostname;
    
    if (hostname) {
        // Modo edição
        const site = currentSettings.sites[hostname];
        elements.modalTitle.textContent = 'Editar Site';
        elements.modalSiteName.value = site.name;
        elements.modalSiteUrl.value = `https://${hostname}`;
        elements.modalSitePriority.value = site.priority;
        elements.modalSiteSound.value = site.sound;
        elements.modalSiteKeywords.value = site.keywords.join(', ');
        elements.modalDeleteBtn.style.display = 'block';
    } else {
        // Modo criação
        elements.modalTitle.textContent = 'Adicionar Site';
        elements.modalSiteName.value = '';
        elements.modalSiteUrl.value = '';
        elements.modalSitePriority.value = 'medium';
        elements.modalSiteSound.value = 'notification.wav';
        elements.modalSiteKeywords.value = '';
        elements.modalDeleteBtn.style.display = 'none';
    }
    
    elements.siteModal.classList.add('show');
    elements.modalSiteName.focus();
}

function closeSiteModal() {
    elements.siteModal.classList.remove('show');
    currentEditingSite = null;
}

async function saveSite() {
    const name = elements.modalSiteName.value.trim();
    const url = elements.modalSiteUrl.value.trim();
    const priority = elements.modalSitePriority.value;
    const sound = elements.modalSiteSound.value;
    const keywords = elements.modalSiteKeywords.value
        .split(',')
        .map(k => k.trim())
        .filter(k => k.length > 0);
    
    if (!name || !url) {
        alert('Por favor, preencha todos os campos obrigatórios');
        return;
    }
    
    try {
        const hostname = new URL(url).hostname;
        
        currentSettings.sites[hostname] = {
            name: name,
            enabled: true,
            priority: priority,
            sound: sound,
            keywords: keywords
        };
        
        updateSitesTab();
        closeSiteModal();
    } catch (error) {
        alert('URL inválida. Por favor, insira uma URL válida.');
    }
}

async function deleteSite() {
    if (currentEditingSite && confirm('Tem a certeza que deseja eliminar este site?')) {
        delete currentSettings.sites[currentEditingSite];
        updateSitesTab();
        closeSiteModal();
    }
}

// Funções auxiliares
function getPriorityText(priority) {
    const texts = {
        high: 'Alta',
        medium: 'Média',
        low: 'Baixa'
    };
    return texts[priority] || 'Média';
}

function getSoundName(soundFile) {
    const names = {
        'notification.wav': 'Padrão',
        'priority-high.wav': 'Alta Prioridade',
        'priority-low.wav': 'Baixa Prioridade'
    };
    return names[soundFile] || soundFile;
}

// Auto-save quando há mudanças
let saveTimeout;
function autoSave() {
    clearTimeout(saveTimeout);
    saveTimeout = setTimeout(saveSettings, 1000);
}

// Adicionar auto-save a todos os inputs
document.addEventListener('change', autoSave);
document.addEventListener('input', autoSave);

