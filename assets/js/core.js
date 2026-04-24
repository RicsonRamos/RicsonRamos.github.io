/* ===== CORE ENGINE (GLOBAL) ===== */
document.addEventListener('DOMContentLoaded', () => {
    if (typeof PortfolioData === 'undefined') return;

    const { config } = PortfolioData;

    // 0. HAMBURGER MENU & SCROLL LOCK
    const navToggle = document.getElementById('nav-toggle');
    const navList = document.getElementById('nav-list');
    
    function toggleMenu(forceClose = false) {
        const isOpen = forceClose ? false : navList.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', isOpen);
        navToggle.classList.toggle('open', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';

        if (isOpen) {
            // Focus Trap - Focus first link
            const firstLink = navList.querySelector('a');
            if (firstLink) firstLink.focus();
        } else {
            // Restore Focus
            navToggle.focus();
        }
    }

    if (navToggle && navList) {
        navToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMenu();
        });
        
        // Close on link click
        navList.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => toggleMenu(true));
        });

        // Close on outside click
        document.addEventListener('click', (e) => {
            if (navList.classList.contains('open') && !navList.contains(e.target) && !navToggle.contains(e.target)) {
                toggleMenu(true);
            }
        });

        // ESC key to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navList.classList.contains('open')) {
                toggleMenu(true);
            }
            
            // Basic Focus Trap (Loop tabbing)
            if (e.key === 'Tab' && navList.classList.contains('open')) {
                const focusableEls = navList.querySelectorAll('a');
                const first = focusableEls[0];
                const last = focusableEls[focusableEls.length - 1];

                if (e.shiftKey && document.activeElement === first) {
                    last.focus();
                    e.preventDefault();
                } else if (!e.shiftKey && document.activeElement === last) {
                    first.focus();
                    e.preventDefault();
                }
            }
        });
    }

    // 1. GLOBAL UI INITIALIZATION
    document.title = config.seo.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', config.seo.description);

    // 2. NAV INDICATOR LOGIC (Optimized with ResizeObserver)
    const nav = document.querySelector('#main-nav');
    if (nav) {
        const indicator = document.createElement('div');
        indicator.classList.add('active-element');
        nav.appendChild(indicator);

        function updateIndicator(targetEl) {
            if (!targetEl) return;
            const rect = targetEl.getBoundingClientRect();
            const navRect = nav.getBoundingClientRect();
            
            gsap.to(indicator, {
                left: rect.left - navRect.left,
                width: rect.width,
                duration: 0.5,
                ease: "power3.out"
            });
        }

        const resizeObserver = new ResizeObserver(() => {
            const activeEl = document.querySelector('.nav-item.active a, .nav-item.active button');
            if (activeEl) updateIndicator(activeEl);
        });
        resizeObserver.observe(nav);

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

        // Nav Click Handlers
        nav.querySelectorAll('a, button').forEach(el => {
            el.addEventListener('click', (e) => {
                const sectionId = el.getAttribute('data-section');
                if (!sectionId) return;

                const section = document.getElementById(sectionId);
                if (section) {
                    e.preventDefault();
                    section.scrollIntoView({ behavior: 'smooth' });
                    history.pushState(null, null, `#${sectionId}`);
                }
            });
        });
    }

    // 3. REVEAL ANIMATIONS
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target); // Optimize performance
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(r => revealObserver.observe(r));

    // 4. FOOTER & SOCIALS
    const contactLinks = document.querySelector('.contact-links');
    if (contactLinks) {
        contactLinks.innerHTML = `
            <a href="mailto:${config.email}" class="link-item btn outline-btn">Email</a>
            <a href="${config.social.linkedin}" class="link-item btn outline-btn" target="_blank" rel="noopener">LinkedIn</a>
            <a href="${config.social.github}" class="link-item btn outline-btn" target="_blank" rel="noopener">GitHub</a>
        `;
    }

    // 5. PRODUCTION INSTRUMENTATION (Staff-Level Observability)
    if ('PerformanceObserver' in window) {
        // Track LCP (Largest Contentful Paint)
        const lcpObserver = new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            const lastEntry = entries[entries.length - 1];
            console.log(`[RUM] LCP: ${lastEntry.startTime.toFixed(2)}ms`, lastEntry);
        });
        lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });

        // Track INP / Long Animation Frames (Experimental but recommended)
        const longTaskObserver = new PerformanceObserver((entryList) => {
            for (const entry of entryList.getEntries()) {
                if (entry.duration > 50) {
                    console.warn(`[RUM] Long Task Detected: ${entry.duration.toFixed(2)}ms at ${entry.startTime.toFixed(2)}ms`);
                }
            }
        });
        longTaskObserver.observe({ type: 'longtask' });

        // Track Layout Shifts (CLS)
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((entryList) => {
            for (const entry of entryList.getEntries()) {
                if (!entry.hadRecentInput) {
                    clsValue += entry.value;
                    console.log(`[RUM] Cumulative Layout Shift: ${clsValue.toFixed(4)}`);
                }
            }
        });
        clsObserver.observe({ type: 'layout-shift', buffered: true });
    }
});
