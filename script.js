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

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeIcon.innerText = document.body.classList.contains('dark-mode') ? "🌙" : "☀️";
});