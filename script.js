const translations = {
    ru: {
        subtitle: "Python разработчик | Системное администрирование",
        "about-title": "Обо мне",
        "about-text": "Занимаюсь разработкой Telegram-ботов и автоматизацией серверной инфраструктуры.",
        "projects-title": "Проекты",
        "p1-title": "IP & Domain Checker",
        "p1-desc": "Инструмент для анализа IP-адресов и доменов через Telegram.",
        launch: "Запустить",
        "contacts-title": "Контакты",
        discord: "Discord",
        footer: "© Разработано в 2026",
        copyMsg: "Ник скопирован!"
    },
    en: {
        subtitle: "Python Developer | Infrastructure Management",
        "about-title": "About Me",
        "about-text": "Focused on Python development, Telegram bots, and server infrastructure.",
        "projects-title": "Projects",
        "p1-title": "IP & Domain Checker",
        "p1-desc": "Professional tool for IP & Domain analysis via Telegram.",
        launch: "Launch",
        "contacts-title": "Contact Me",
        discord: "Discord",
        footer: "© Developed in 2026",
        copyMsg: "Nickname copied!"
    }
};

let currentLang = localStorage.getItem('lang') || 'ru';

function updateLanguage() {
    const targets = document.querySelectorAll('.lang-target');
    
    
    targets.forEach(t => t.classList.add('text-fade'));

    setTimeout(() => {
        targets.forEach(elem => {
            const key = elem.getAttribute('data-key');
            if (translations[currentLang][key]) {
                elem.innerText = translations[currentLang][key];
            }
        });
        document.getElementById('lang-text').innerText = currentLang.toUpperCase();
    }, 200);

  
    setTimeout(() => {
        targets.forEach(t => t.classList.remove('text-fade'));
    }, 400);
}


document.getElementById('lang-toggle').addEventListener('click', () => {
    currentLang = currentLang === 'ru' ? 'en' : 'ru';
    localStorage.setItem('lang', currentLang);
    updateLanguage();
});


function copyDiscord() {
    navigator.clipboard.writeText('egorzvanov').then(() => {
        alert(translations[currentLang].copyMsg);
    });
}


const toggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

function toggleTheme(e) {
    if (e && e.cancelable) e.preventDefault();
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    themeIcon.innerText = isDark ? "🌙" : "☀️";
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

toggleBtn.addEventListener('click', toggleTheme);
toggleBtn.addEventListener('touchstart', toggleTheme, {passive: false});


if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeIcon.innerText = "🌙";
}
updateLanguage();
