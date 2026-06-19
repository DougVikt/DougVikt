const i18n = {
    currentLang: 'pt-BR',
    translations: {},

    async init() {
        const saved = localStorage.getItem('lang');
        const browserLang = navigator.language || navigator.languages?.[0] || 'pt-BR';
        this.currentLang = saved || (browserLang.startsWith('pt') ? 'pt-BR' : 'en');
        await this.load(this.currentLang);
        this.translatePage();
    },

    async load(lang) {
        try {
            const res = await fetch(`locales/${lang}.json`);
            this.translations = await res.json();
            this.currentLang = lang;
            localStorage.setItem('lang', lang);
        } catch {
            if (lang !== 'pt-BR') {
                await this.load('pt-BR');
            }
        }
    },

    t(key) {
        return this.translations[key] || key;
    },

    async switchLang(lang) {
        await this.load(lang);
        this.translatePage();
        document.documentElement.lang = lang;
        const evt = new CustomEvent('langChanged', { detail: lang });
        document.dispatchEvent(evt);
    },

    translatePage() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            el.textContent = this.t(key);
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            el.placeholder = this.t(el.dataset.i18nPlaceholder);
        });
        document.querySelectorAll('[data-i18n-alt]').forEach(el => {
            el.alt = this.t(el.dataset.i18nAlt);
        });
    }
};
