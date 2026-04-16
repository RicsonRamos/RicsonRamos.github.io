/* ===== CORE ENGINE (GLOBAL) ===== */
document.addEventListener('DOMContentLoaded', () => {
    if (typeof PortfolioData === 'undefined') return;

    const { config } = PortfolioData;

    // 1. GLOBAL UI INITIALIZATION
    document.title = config.seo.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', config.seo.description);
    
    // Header Logo
    const logo = document.querySelector('.logo');
    if (logo) {
        const nameParts = config.name.split(' ');
        logo.innerHTML = `${nameParts[0]} <span class="hero-highlight">${nameParts[1]}</span>`;
    }

    // 2. STICKY NAV & INDICATOR LOGIC
    const nav = document.querySelector('#main-nav');
    if (nav) {
        const indicator = document.createElement('div');
        indicator.classList.add('active-element');
        nav.querySelector('ul').appendChild(indicator);

        function updateIndicator(targetButton) {
            const rect = targetButton.getBoundingClientRect();
            const navRect = nav.getBoundingClientRect();
            gsap.to(indicator, {
                left: rect.left - navRect.left,
                width: rect.width,
                duration: 0.5,
                ease: "power3.out"
            });
        }

        const initialActive = document.querySelector('.nav-item.active button');
        if (initialActive) updateIndicator(initialActive);

        window.addEventListener('resize', () => {
            const activeBtn = document.querySelector('.nav-item.active button');
            if (activeBtn) updateIndicator(activeBtn);
        });

        // Global Nav Observer (Sections)
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    document.querySelectorAll('.nav-item').forEach(item => {
                        const btn = item.querySelector('button');
                        const isActive = btn.getAttribute('data-section') === id;
                        item.classList.toggle('active', isActive);
                        if (isActive) updateIndicator(btn);
                    });
                }
            });
        }, { threshold: 0.3 });
        document.querySelectorAll('section').forEach(s => sectionObserver.observe(s));
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
