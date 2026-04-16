/* ===== CASE STUDY ENGINE (PAGE SPECIFIC) ===== */
document.addEventListener('DOMContentLoaded', initCaseStudy);

async function initCaseStudy() {
    window.scrollTo(0, 0);

    let project;
    if (typeof ProjectContent !== 'undefined') {
        project = ProjectContent;
    } else if (typeof PortfolioData !== 'undefined') {
        const path = window.location.pathname;
        const fileName = path.split('/').pop().replace('.html', '');
        project = PortfolioData.projects.find(p => p.id === fileName);
    }

    if (!project || !project.storyline) return;

    const data = project.storyline;
    const canvas = document.getElementById('story-canvas');
    const demo = document.getElementById('demo');
    const footerContainer = document.querySelector('.dashboard-footer');
    
    // 1. RENDER DASHBOARD NAVIGATION (CARDS)
    if (demo) {
        demo.innerHTML = data.map((i, index) => `
            <div class="card" id="card${index}" onclick="switchPhase(${index})">
                <div class="card-img-bg" style="background-image:url(${i.image})"></div>
                <div class="card-content-overlay">
                    <div class="content-place">${i.phase}</div>
                    <div class="content-title-1">${i.title}</div>
                </div>
            </div>
        `).reverse().join('');
    }

    // 2. INJECT FOOTER UI
    if (footerContainer) {
        footerContainer.innerHTML = `
            <div class="pagination-text">PHASE <span id="current-phase">01</span> / 0${data.length}</div>
            <div class="progress-container">
                <div class="progress-bar" id="phase-progress"></div>
            </div>
            <button class="discover-btn" onclick="nextPhase()">
                Next Phase 
                <svg viewBox="0 0 50 20" fill="none" stroke="currentColor">
                    <path d="M1 10H48M48 10L40 2M48 10L40 18" />
                </svg>
            </button>
        `;
    }

    // 3. RENDER STORYTELLING CANVAS (CHAPTERS)
    if (canvas) {
        if (project.sections) {
            canvas.innerHTML = `
                <div class="story-container">
                    <div class="story-intro">// CASE STUDY // 00${project.id || '1'}</div>
                    ${project.sections.map((section, idx) => `
                        <div class="story-chapter">
                            <h2 class="story-title">${section.title}</h2>
                            <div class="story-chapter-body">
                                ${section.paragraphs.map(para => `<p class="story-paragraph">${para}</p>`).join('')}
                            </div>
                            ${section.tech ? renderTechGrid(section.tech) : ''}
                        </div>
                    `).join('')}
                </div>
            `;
        } else if (project.fullContent) {
            canvas.innerHTML = `
                <div class="story-container">
                    <div class="story-intro">// CASE STUDY // 00${project.id || '1'}</div>
                    <h2 class="story-title">${project.title || 'Project Depth'}</h2>
                    <div class="story-chapter-body">
                        ${project.fullContent.map(para => `<p class="story-paragraph">${para}</p>`).join('')}
                    </div>
                </div>
            `;
        }
    }

    // STATIC TECH GRID HELPER
    function renderTechGrid(techList) {
        return `
            <div class="tech-grid">
                ${techList.map(t => `
                    <div class="tech-item">
                        <img src="../../assets/images/icons/${t.icon}.svg" alt="${t.name}" onerror="this.src='https://cdn.simpleicons.org/${t.icon}/white'">
                        <span>${t.name}</span>
                    </div>
                `).join('')}
            </div>
        `;
    }

    let current = 0;
    let detailsEven = true;

    // 4. NARRATIVE SWITCHER logic
    window.switchPhase = function(index) {
        if (index === current) return;
        
        data.forEach((_, i) => document.getElementById(`card${i}`)?.classList.remove('active'));
        document.getElementById(`card${index}`)?.classList.add('active');

        const currentP = document.getElementById('current-phase');
        if (currentP) currentP.textContent = (index + 1).toString().padStart(2, '0');
        
        const progBar = document.getElementById('phase-progress');
        if (progBar) progBar.style.width = `${((index + 1) / data.length) * 100}%`;

        detailsEven = !detailsEven;
        const activeContainer = detailsEven ? "#details-even" : "#details-odd";
        const inactiveContainer = detailsEven ? "#details-odd" : "#details-even";
        const phaseData = data[index];

        const activeEl = document.querySelector(activeContainer);
        if (activeEl) {
            activeEl.querySelector('.text').textContent = phaseData.phase;
            activeEl.querySelector('.title-1').textContent = phaseData.title;
            activeEl.querySelector('.title-2').textContent = phaseData.title2 || '';
            activeEl.querySelector('.desc').textContent = phaseData.description;

            gsap.timeline()
                .to(inactiveContainer, { opacity: 0, x: -30, duration: 0.4 })
                .fromTo(activeContainer, { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: 0.6 }, "-=0.2");
        }
        current = index;
    };

    window.nextPhase = () => switchPhase((current + 1) % data.length);

    // 5. INITIAL SETUP
    const setupFirstPhase = () => {
        const initial = data[0];
        const initialContainer = document.querySelector("#details-even");
        if (initialContainer) {
            initialContainer.querySelector('.text').textContent = initial.phase;
            initialContainer.querySelector('.title-1').textContent = initial.title;
            initialContainer.querySelector('.title-2').textContent = initial.title2 || '';
            initialContainer.querySelector('.desc').textContent = initial.description;
            gsap.set("#details-even", { opacity: 1, x: 0 });
            document.getElementById(`card0`)?.classList.add('active');
            const progBar = document.getElementById('phase-progress');
            if (progBar) progBar.style.width = `${(1 / data.length) * 100}%`;
        }
    }
    setupFirstPhase();

    // 6. SCROLL INTERACTIONS
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY > 100;
        document.body.classList.toggle('scrolled-past', scrolled);
    });
}