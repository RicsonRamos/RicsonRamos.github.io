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

    // 2. PROJECT CAROUSEL RENDER & LOGIC
    const projectsContainer = document.querySelector('.animated-gallery');

    if (projectsContainer && projects.length > 0) {
        // Render projects with clones for infinite loop
        const clonesCount = 4; // Increased clones for better coverage
        const firstClones = projects.slice(0, clonesCount);
        const lastClones = projects.slice(-clonesCount);
        const displayProjects = [...lastClones, ...projects, ...firstClones];

        projectsContainer.innerHTML = displayProjects.map((p, index) => `
            <div class="project-card" onclick="window.location.href='${p.url}'">
                <img src="${p.image}" alt="${p.title}" loading="lazy">
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

        // Carousel State
        let currentIndex = clonesCount;
        const gap = 32; // 2rem in px
        
        function getCardWidth() {
            const firstCard = projectsContainer.querySelector('.project-card');
            return firstCard ? firstCard.offsetWidth : 450;
        }

        function moveToIndex(index, animate = true) {
            const totalWidth = getCardWidth() + gap;
            currentIndex = index;
            const targetX = -currentIndex * totalWidth;

            if (animate) {
                gsap.to(projectsContainer, {
                    x: targetX,
                    duration: 1.2, // Slightly slower for more premium feel
                    ease: "power2.inOut",
                    onComplete: () => {
                        // Handle infinite loop jumps
                        if (currentIndex >= projects.length + clonesCount) {
                            currentIndex = clonesCount;
                            gsap.set(projectsContainer, { x: -currentIndex * totalWidth });
                        } else if (currentIndex < clonesCount) {
                            currentIndex = projects.length + clonesCount - 1;
                            gsap.set(projectsContainer, { x: -currentIndex * totalWidth });
                        }
                    }
                });
            } else {
                gsap.set(projectsContainer, { x: targetX });
            }
        }

        // Initial position
        moveToIndex(currentIndex, false);

        // Event Listeners for Nav Triggers
        const pTrigger = document.querySelector('.prev-trigger');
        const nTrigger = document.querySelector('.next-trigger');
        if (pTrigger) pTrigger.addEventListener('click', (e) => {
            e.stopPropagation();
            moveToIndex(currentIndex - 1);
        });
        if (nTrigger) nTrigger.addEventListener('click', (e) => {
            e.stopPropagation();
            moveToIndex(currentIndex + 1);
        });

        // Resize handler
        window.addEventListener('resize', () => moveToIndex(currentIndex, false));

        // Auto-play periodic sliding
        let autoPlay = setInterval(() => moveToIndex(currentIndex + 1), 4000);

        const container = document.querySelector('.carousel-container');
        if (container) {
            container.addEventListener('mouseenter', () => clearInterval(autoPlay));
            container.addEventListener('mouseleave', () => {
                autoPlay = setInterval(() => moveToIndex(currentIndex + 1), 4000);
            });
        }

        // Optional: Touch/Scroll support can be added here if needed
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
