/* ==============================================================================
   RICSON RAMOS | HOMEPAGE CONTROLLER (2026)
   Vanilla JS • Dark/Light Theme • Multilingual (PT-BR / EN) • Zero Bloat
   ============================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    if (typeof PortfolioData === 'undefined') {
        console.error('PortfolioData not found.');
        return;
    }

    // =========================================================================
    // 1. THEME CONTROLLER (Dark Mode / Light Mode)
    // =========================================================================
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeMeta = document.querySelector('meta[name="theme-color"]');

    function getPreferredTheme() {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark' || storedTheme === 'light') {
            return storedTheme;
        }
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches 
            ? 'light' 
            : 'dark';
    }

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);

        if (themeMeta) {
            themeMeta.setAttribute('content', theme === 'dark' ? '#07090e' : '#f8fafc');
        }

        if (themeToggleBtn) {
            const isDark = theme === 'dark';
            themeToggleBtn.setAttribute('aria-pressed', (!isDark).toString());
            const currentLang = getCurrentLanguage();
            const localeData = PortfolioData.getData(currentLang);
            const label = isDark ? localeData.i18n.theme.light : localeData.i18n.theme.dark;
            themeToggleBtn.setAttribute('title', label);
            themeToggleBtn.setAttribute('aria-label', label);
        }
    }

    // Set initial theme
    const initialTheme = getPreferredTheme();
    applyTheme(initialTheme);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
            const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
            applyTheme(nextTheme);
        });
    }

    // Listen to system theme changes if user hasn't explicitly set preference
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!localStorage.getItem('theme')) {
                applyTheme(e.matches ? 'dark' : 'light');
            }
        });
    }

    // =========================================================================
    // 2. LANGUAGE CONTROLLER (PT-BR / EN)
    // =========================================================================
    let currentLanguage = 'pt-BR';
    let currentFilter = 'all';

    function getNestedValue(obj, path) {
        return path.split('.').reduce((prev, curr) => (prev ? prev[curr] : undefined), obj);
    }

    function getCurrentLanguage() {
        const storedLang = localStorage.getItem('lang');
        if (storedLang === 'en' || storedLang === 'pt-BR') {
            return storedLang;
        }
        const browserLang = navigator.language || navigator.userLanguage || 'pt';
        return browserLang.toLowerCase().startsWith('en') ? 'en' : 'pt-BR';
    }

    function renderValueStrip(valueProps, badgeText) {
        const valueStripContainer = document.getElementById('value-strip');
        if (!valueStripContainer || !valueProps) return;

        valueStripContainer.innerHTML = valueProps.map(vp => `
            <div class="value-card">
                <div class="value-card-header">
                    <span>${vp.icon}</span>
                    <span>${badgeText}</span>
                </div>
                <h3 class="value-card-title">${vp.title}</h3>
                <p class="value-card-desc">${vp.desc}</p>
            </div>
        `).join('');
    }

    function renderProjects(filter = 'all') {
        const projectsContainer = document.getElementById('projects-grid');
        const localeData = PortfolioData.getData(currentLanguage);
        const { projects, i18n } = localeData;

        if (!projectsContainer || !projects) return;

        currentFilter = filter;
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
                            <strong>${i18n.projects.challenge}</strong> ${p.problem}
                        </div>
                        <div class="story-item">
                            <strong>${i18n.projects.solution}</strong> ${p.solution}
                        </div>
                        <div class="story-item">
                            <strong>${i18n.projects.impact}</strong> ${p.impact}
                        </div>
                    </div>

                    <div class="tech-pills">
                        ${p.tags.map(t => `<span class="tech-pill">${t}</span>`).join('')}
                    </div>

                    <div class="project-actions">
                        <a href="${p.url}" class="btn btn-primary">
                            <span>${i18n.projects.case_study}</span>
                        </a>
                        <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="btn btn-outline" aria-label="GitHub">
                            <span>${i18n.projects.code}</span>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
                        </a>
                    </div>
                </div>
            </article>
        `).join('');
    }

    function renderTimeline(experience) {
        const timelineContainer = document.getElementById('timeline-list');
        if (!timelineContainer || !experience) return;

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

    function renderPhilosophy(philosophy) {
        const philosophyContainer = document.getElementById('philosophy-grid');
        if (!philosophyContainer || !philosophy) return;

        philosophyContainer.innerHTML = philosophy.map(item => `
            <div class="philosophy-card">
                <span class="philosophy-icon">${item.icon}</span>
                <h3 class="philosophy-title">${item.title}</h3>
                <p class="philosophy-desc">${item.desc}</p>
            </div>
        `).join('');
    }

    function applyLanguage(lang) {
        currentLanguage = lang.startsWith('en') ? 'en' : 'pt-BR';
        document.documentElement.setAttribute('lang', currentLanguage);
        localStorage.setItem('lang', currentLanguage);

        const localeData = PortfolioData.getData(currentLanguage);
        const { config, i18n, valueProps, experience, philosophy } = localeData;

        // 1. Update static elements with data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = getNestedValue(i18n, key);
            if (translation !== undefined) {
                el.innerHTML = translation;
            }
        });

        // 2. Update page title and SEO
        if (config.seo) {
            document.title = config.seo.title;
            const metaDesc = document.querySelector('meta[name="description"]');
            if (metaDesc) metaDesc.setAttribute('content', config.seo.description);
        }

        // 3. Update Language switcher UI buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            const btnLang = btn.getAttribute('data-lang');
            const isActive = (btnLang === currentLanguage) || 
                             (btnLang === 'pt-BR' && currentLanguage.startsWith('pt')) ||
                             (btnLang === 'en' && currentLanguage.startsWith('en'));
            btn.classList.toggle('active', isActive);
            btn.setAttribute('aria-pressed', isActive.toString());
        });

        // 4. Update Theme button title/aria-label in current language
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        if (themeToggleBtn) {
            const label = currentTheme === 'dark' ? i18n.theme.light : i18n.theme.dark;
            themeToggleBtn.setAttribute('title', label);
            themeToggleBtn.setAttribute('aria-label', label);
        }

        // 5. Render dynamic components
        renderValueStrip(valueProps, i18n.value.badge);
        renderProjects(currentFilter);
        renderTimeline(experience);
        renderPhilosophy(philosophy);
    }

    // Language switcher buttons click handlers
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const targetLang = btn.getAttribute('data-lang');
            if (targetLang && targetLang !== currentLanguage) {
                applyLanguage(targetLang);
            }
        });
    });

    // Initialize Language
    currentLanguage = getCurrentLanguage();
    applyLanguage(currentLanguage);

    // =========================================================================
    // 3. PROJECT CATEGORY FILTERS
    // =========================================================================
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filterValue = btn.getAttribute('data-filter') || 'all';
            renderProjects(filterValue);
        });
    });

    // =========================================================================
    // 4. MOBILE NAVBAR CONTROLS
    // =========================================================================
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

    // =========================================================================
    // 5. COPY EMAIL BUTTON INTERACTION
    // =========================================================================
    const copyEmailBtn = document.getElementById('copy-email-btn');
    if (copyEmailBtn) {
        copyEmailBtn.addEventListener('click', () => {
            const localeData = PortfolioData.getData(currentLanguage);
            const email = localeData.config.email;
            const successText = localeData.i18n.hero.email_copied;
            const originalText = localeData.i18n.hero.copy_email;

            navigator.clipboard.writeText(email).then(() => {
                copyEmailBtn.innerHTML = `<span>${successText}</span>`;
                copyEmailBtn.classList.add('btn-primary');
                copyEmailBtn.classList.remove('btn-outline');
                setTimeout(() => {
                    copyEmailBtn.innerHTML = `<span>${originalText}</span>`;
                    copyEmailBtn.classList.remove('btn-primary');
                    copyEmailBtn.classList.add('btn-outline');
                }, 2500);
            }).catch(err => {
                console.warn('Clipboard write error:', err);
                window.location.href = `mailto:${email}`;
            });
        });
    }

    // =========================================================================
    // 6. ACTIVE NAVIGATION ON SCROLL
    // =========================================================================
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
