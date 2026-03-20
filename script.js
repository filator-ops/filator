const myProjects = [
    { 
        title: "IP & Domain Checker", 
        description: "Инструмент для анализа IP-адресов и доменов через Telegram.",
        tech: ["Python", "aiogram", "API"],
        link: "https://t.me/ipchech_bot"
    }
];

const container = document.getElementById('project-container');

myProjects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    const techTags = project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('');
    card.innerHTML = `
        <h3 style="margin-bottom: 10px;">${project.title}</h3>
        <p style="font-size: 0.95rem; opacity: 0.8;">${project.description}</p>
        <div style="display: flex; gap: 8px; justify-content: center; margin: 15px 0;">${techTags}</div>
        <a href="${project.link}" target="_blank" class="project-btn">Запустить бота</a>
    `;
    container.appendChild(card);
});

const toggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

function toggleTheme(e) {
    // Предотвращаем стандартное поведение и "всплытие" события
    if (e) e.preventDefault();
    
    document.body.classList.toggle('dark-mode');
    
    const isDark = document.body.classList.contains('dark-mode');
    themeIcon.innerText = isDark ? "🌙" : "☀️";
    
    // Сохраняем выбор пользователя, чтобы тема не слетала при обновлении
    localStorage.setItem('theme', isDark ? 'dark' : 'light');

    // Визуальный отклик для мобилок
    toggleBtn.style.transform = "scale(0.9)";
    setTimeout(() => {
        toggleBtn.style.transform = "scale(1)";
    }, 100);
}

// Слушаем и клик, и касание для мгновенного отклика
toggleBtn.addEventListener('click', toggleTheme);
toggleBtn.addEventListener('touchstart', toggleTheme, {passive: false});

// Проверка сохраненной темы при загрузке страницы
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeIcon.innerText = "🌙";
}
