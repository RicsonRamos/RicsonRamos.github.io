/* ===== CORE ENGINE (GLOBAL) ===== */
document.addEventListener('DOMContentLoaded', () => {
    if (typeof PortfolioData === 'undefined') return;

    const { config } = PortfolioData;

    // 0. HAMBURGER MENU
    const navToggle = document.getElementById('nav-toggle');
    const navList = document.getElementById('nav-list');
    if (navToggle && navList) {
        navToggle.addEventListener('click', () => {
            const isOpen = navList.classList.toggle('open');
            navToggle.setAttribute('aria-expanded', isOpen);
            navToggle.classList.toggle('open', isOpen);
        });
        // Close on link click
        navList.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                navList.classList.remove('open');
                navToggle.classList.remove('open');
                navToggle.setAttribute('aria-expanded', false);
            });
        });
    }

    // 1. GLOBAL UI INITIALIZATION
    document.title = config.seo.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', config.seo.description);

    // Header Logo Injection
    const logoContainer = document.querySelector('.logo a');
    if (logoContainer) {
        const nameParts = config.name.split(' ');
        logoContainer.innerHTML = `${nameParts[0]} <span class="hero-highlight">${nameParts[1]}</span>`;
    }

    // 2. STICKY NAV & INDICATOR LOGIC
    const nav = document.querySelector('#main-nav');
    if (nav) {
        const indicator = document.createElement('div');
        indicator.classList.add('active-element');
        nav.querySelector('ul').appendChild(indicator);

        function updateIndicator(targetEl) {
            const rect = targetEl.getBoundingClientRect();
            const navRect = nav.getBoundingClientRect();
            gsap.to(indicator, {
                left: rect.left - navRect.left,
                width: rect.width,
                duration: 0.5,
                ease: "power3.out"
            });
        }

        const initialActive = document.querySelector('.nav-item.active a, .nav-item.active button');
        if (initialActive) updateIndicator(initialActive);

        window.addEventListener('resize', () => {
            const activeEl = document.querySelector('.nav-item.active a, .nav-item.active button');
            if (activeEl) updateIndicator(activeEl);
        });

        // Global Nav Observer (Sections)
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    document.querySelectorAll('.nav-item').forEach(item => {
                        const el = item.querySelector('a, button');
                        const isActive = el.getAttribute('data-section') === id;
                        item.classList.toggle('active', isActive);
                        if (isActive) updateIndicator(el);
                    });
                }
            });
        }, { threshold: 0.3 });
        document.querySelectorAll('section').forEach(s => sectionObserver.observe(s));

        // Nav Click Handlers (Internal Scroll & External Redirect)
        nav.querySelectorAll('a, button').forEach(el => {
            el.addEventListener('click', (e) => {
                const sectionId = el.getAttribute('data-section');
                if (!sectionId) return;

                const section = document.getElementById(sectionId);
                if (section) {
                    e.preventDefault();
                    section.scrollIntoView({ behavior: 'smooth' });
                    // Update URL hash without jump
                    history.pushState(null, null, `#${sectionId}`);
                } else {
                    // Redirect to home if on subpage
                    if (window.location.pathname.includes('/projetos/')) {
                        e.preventDefault();
                        window.location.href = `../../index.html#${sectionId}`;
                    }
                }
            });
        });
    }

    // 3. GLOBAL REVEAL ANIMATIONS
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('active');
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(r => revealObserver.observe(r));

    // 4. FOOTER & SOCIALS
    const contactLinks = document.querySelector('.contact-links');
    if (contactLinks) {
        contactLinks.innerHTML = `
            <a href="mailto:${config.email}" class="link-item btn outline-btn">Email</a>
            <a href="${config.social.linkedin}" class="link-item btn outline-btn" target="_blank">LinkedIn</a>
            <a href="${config.social.github}" class="link-item btn outline-btn" target="_blank">GitHub</a>
        `;
    }
});
