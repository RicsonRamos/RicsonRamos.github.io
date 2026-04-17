/* ===== HOMEPAGE MODULES ===== */
document.addEventListener('DOMContentLoaded', () => {
    if (typeof PortfolioData === 'undefined') return;
    const { config, projects, experience } = PortfolioData;

    // 1. HERO CONTENT
    const heroPrefix = document.querySelector('.hero-prefix');
    const heroH1 = document.querySelector('#hero h1');
    const heroInstruct = document.querySelector('.hero-instruction');
    const githubCta = document.getElementById('github-cta');

    if (heroPrefix) heroPrefix.innerHTML = `${config.hero.welcome} <span class="hero-highlight">${config.hero.highlight}</span> of`;
    if (heroH1) {
        const nameParts = config.name.split(' ');
        heroH1.innerHTML = `${nameParts[0]} <span class="hero-highlight">${nameParts[1]}</span>`;
    }
    if (heroInstruct) heroInstruct.textContent = config.hero.instruction;
    if (githubCta) githubCta.href = config.social.github;

    // 2. PROJECT GALLERY RENDER & HOVER
    const projectsContainer = document.querySelector('.animated-gallery');
    if (projectsContainer) {
        projectsContainer.innerHTML = projects.map((p, index) => `
            <div class="project-card ${index === 0 ? 'active' : ''}" onclick="window.location.href='${p.url}'">
                <img src="${p.image}" alt="${p.title}">
                <div class="project-info">
                    <h3>${p.title}</h3>
                    <p>${p.subtitle}</p>
                    <div class="badges">
                        ${p.tags.map(tag => `<span>${tag}</span>`).join('')}
                    </div>
                    <div class="project-cta">Ver Projeto →</div>
                </div>
            </div>
        `).join('');

        // Hover expansion
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                document.querySelectorAll('.project-card').forEach(c => c.classList.remove('active'));
                card.classList.add('active');
            });
        });
    }

    // 3. EXPERIENCE TIMELINE & IDE
    const timelineH = document.querySelector('.timeline-h');
    const ideTabBar = document.querySelector('.ide-tab-bar');
    const ideContent = document.querySelector('#ide-content');

    if (timelineH && ideTabBar) {
        timelineH.innerHTML = experience.map((job, index) => `
            <div class="timeline-dot-h ${index === 0 ? 'active' : ''}" data-year="${job.year}" data-job="${index}"></div>
        `).join('');

        const windowControls = `<div class="window-controls"><span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span></div>`;
        ideTabBar.innerHTML = windowControls + experience.map((job, index) => `
            <div class="ide-tab ${index === 0 ? 'active' : ''}" data-job="${index}">${job.id}.js <span class="close-icon">×</span></div>
        `).join('');

        function switchJob(index) {
            const job = experience[index];
            document.querySelectorAll('.timeline-dot-h').forEach((dot, i) => dot.classList.toggle('active', i === index));
            document.querySelectorAll('.ide-tab').forEach((tab, i) => tab.classList.toggle('active', i === index));
            if (ideContent) {
                gsap.to(ideContent, { opacity: 0, duration: 0.1, onComplete: () => {
                    ideContent.textContent = job.code;
                    gsap.to(ideContent, { opacity: 1, duration: 0.2 });
                }});
            }
        }

        document.querySelectorAll('.timeline-dot-h').forEach((dot, index) => dot.addEventListener('click', () => switchJob(index)));
        document.querySelectorAll('.ide-tab').forEach((tab, index) => tab.addEventListener('click', () => switchJob(index)));
        switchJob(0);
    }

    // 4. UFO ABDUCTION (CONTACT)
    const ufoContainer = document.querySelector('.ufo-abduction-container');
    if (ufoContainer) {
        ufoContainer.addEventListener('mouseover', () => ufoContainer.classList.add('triggered'), { once: true });
    }
});
