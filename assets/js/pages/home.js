/* ==============================================================================
   RICSON RAMOS | HOMEPAGE CONTROLLER (2026)
   Vanilla JS • Zero Bloat • 60fps Native Performance
   ============================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    if (typeof PortfolioData === 'undefined') {
        console.error('PortfolioData not found.');
        return;
    }

    const { config, valueProps, projects, experience, philosophy } = PortfolioData;

    // 1. MOBILE NAVBAR CONTROLS
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('open');
            navToggle.setAttribute('aria-expanded', isOpen);
            navToggle.innerHTML = isOpen 
                ? '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>'
                : '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
        });

        // Close when clicking any nav link
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
                navToggle.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
            });
        });
    }

    // 2. RENDER VALUE STRIP
    const valueStripContainer = document.getElementById('value-strip');
    if (valueStripContainer && valueProps) {
        valueStripContainer.innerHTML = valueProps.map(vp => `
            <div class="value-card">
                <div class="value-card-header">
                    <span>${vp.icon}</span>
                    <span>Pilar de Entrega</span>
                </div>
                <h3 class="value-card-title">${vp.title}</h3>
                <p class="value-card-desc">${vp.desc}</p>
            </div>
        `).join('');
    }

    // 3. RENDER PROJECTS GRID & FILTERING
    const projectsContainer = document.getElementById('projects-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');

    function renderProjects(filter = 'all') {
        if (!projectsContainer || !projects) return;

        const filtered = filter === 'all' 
            ? projects 
            : projects.filter(p => p.category === filter);

        projectsContainer.innerHTML = filtered.map(p => `
            <article class="project-card" data-category="${p.category}">
                <div class="project-image-container">
                    <picture>
                        <source srcset="${p.image}" type="image/webp">
                        <img 
                            src="${p.image}" 
                            alt="${p.title}" 
                            class="project-image"
                            loading="lazy"
                            decoding="async"
                            width="540"
                            height="304"
                        >
                    </picture>
                </div>
                <div class="project-body">
                    <div class="project-meta">
                        <span class="project-category">${p.categoryLabel}</span>
                        ${p.roiBadge ? `<span class="project-badge-roi">${p.roiBadge}</span>` : ''}
                    </div>
                    <h3 class="project-title">${p.title}</h3>

                    <div class="story-block">
                        <div class="story-item">
                            <strong>🎯 Desafio:</strong> ${p.problem}
                        </div>
                        <div class="story-item">
                            <strong>💡 Solução:</strong> ${p.solution}
                        </div>
                        <div class="story-item">
                            <strong>📈 Impacto:</strong> ${p.impact}
                        </div>
                    </div>

                    <div class="tech-pills">
                        ${p.tags.map(t => `<span class="tech-pill">${t}</span>`).join('')}
                    </div>

                    <div class="project-actions">
                        <a href="${p.url}" class="btn btn-primary">
                            <span>📖 Estudo de Caso</span>
                        </a>
                        <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="btn btn-outline" aria-label="Código no GitHub">
                            <span>💻 Código</span>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
                        </a>
                    </div>
                </div>
            </article>
        `).join('');
    }

    // Initial project render
    renderProjects('all');

    // Filter event listeners
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filterValue = btn.getAttribute('data-filter');
            renderProjects(filterValue);
        });
    });

    // 4. RENDER TIMELINE / EXPERIENCE
    const timelineContainer = document.getElementById('timeline-list');
    if (timelineContainer && experience) {
        timelineContainer.innerHTML = experience.map(exp => `
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-card">
                    <div class="timeline-period">${exp.year}</div>
                    <h3 class="timeline-role">${exp.role}</h3>
                    <div class="timeline-company">${exp.company}</div>
                    <p class="timeline-desc">${exp.desc}</p>
                </div>
            </div>
        `).join('');
    }

    // 5. RENDER TECHNICAL PHILOSOPHY
    const philosophyContainer = document.getElementById('philosophy-grid');
    if (philosophyContainer && philosophy) {
        philosophyContainer.innerHTML = philosophy.map(item => `
            <div class="philosophy-card">
                <span class="philosophy-icon">${item.icon}</span>
                <h3 class="philosophy-title">${item.title}</h3>
                <p class="philosophy-desc">${item.desc}</p>
            </div>
        `).join('');
    }

    // 6. COPY EMAIL BUTTON INTERACTION
    const copyEmailBtn = document.getElementById('copy-email-btn');
    if (copyEmailBtn) {
        copyEmailBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(config.email).then(() => {
                const originalText = copyEmailBtn.innerHTML;
                copyEmailBtn.innerHTML = '<span>✅ E-mail Copiado!</span>';
                copyEmailBtn.classList.add('btn-primary');
                copyEmailBtn.classList.remove('btn-outline');
                setTimeout(() => {
                    copyEmailBtn.innerHTML = originalText;
                    copyEmailBtn.classList.remove('btn-primary');
                    copyEmailBtn.classList.add('btn-outline');
                }, 2500);
            }).catch(err => {
                console.warn('Clipboard write error:', err);
                window.location.href = `mailto:${config.email}`;
            });
        });
    }

    // 7. ACTIVE NAVIGATION ON SCROLL
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

    function updateActiveNav() {
        const scrollY = window.pageYOffset;

        sections.forEach(sec => {
            const sectionHeight = sec.offsetHeight;
            const sectionTop = sec.offsetTop - 120;
            const sectionId = sec.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav, { passive: true });
});
