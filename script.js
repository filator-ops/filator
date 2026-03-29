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
        subtitle: "Python Developer | SysAdmin",
        "about-title": "About Me",
        "about-text": "Specializing in Python bots and server automation.",
        "projects-title": "Projects",
        "p1-title": "IP & Domain Checker",
        "p1-desc": "A tool to analyze IPs and domains via Telegram bot.",
        launch: "Launch",
        "contacts-title": "Contact",
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
    }, 150); 

    setTimeout(() => targets.forEach(t => t.classList.remove('text-fade')), 300);
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


let starsCreated = false;
let meteorInterval;

function checkTimeAndTheme() {
    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const mskTime = new Date(utc + (3600000 * 3));
    const hour = mskTime.getHours();

    const isNight = hour >= 20 || hour < 5;

    if (isNight) {
        document.body.classList.add('dark-mode');
        if (!starsCreated) {
            createStaticStars();
            startMeteors();
            starsCreated = true;
        }
    } else {
        document.body.classList.remove('dark-mode');
        removeSpace();
    }
}


function createStaticStars() {
    const container = document.getElementById('stars-container');
    if (!container) return;
    
    
    const isMobile = window.innerWidth <= 768;
    const starCount = isMobile ? 30 : 80; 
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'static-star';
        const size = Math.random() * 2 + 1; 
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.animationDuration = (Math.random() * 3 + 2) + 's';
        star.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(star);
    }
}

function startMeteors() {
    const spawn = () => {
        if (!document.body.classList.contains('dark-mode')) return;
        createSingleMeteor();
        meteorInterval = setTimeout(spawn, Math.random() * 10000 + 5000);
    };
    spawn();
}

function createSingleMeteor() {
    const container = document.getElementById('stars-container');
    const meteor = document.createElement('div');
    meteor.className = 'shooting-star';
    meteor.style.top = Math.random() * 50 + 'vh';
    meteor.style.left = (Math.random() * 50 + 50) + 'vw';
    container.appendChild(meteor);
    setTimeout(() => meteor.remove(), 800);
}

function removeSpace() {
    const container = document.getElementById('stars-container');
    if (container) container.innerHTML = '';
    clearTimeout(meteorInterval);
    starsCreated = false;
}

checkTimeAndTheme();
setInterval(checkTimeAndTheme, 60000);
updateLanguage();
