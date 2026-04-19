const PortfolioData = {
    config: {
        name: "Ricson Ramos",
        role: "Data Engineer / Python Specialist",
        email: "ricsonramos@outlook.com",
        social: {
            linkedin: "https://www.linkedin.com/in/ricsonramos/",
            github: "https://github.com/RicsonRamos"
        },
        hero: {
            welcome: "Welcome to the web portfolio of",
            highlight: "web portfolio",
            instruction: "SCROLL DOWN TO LEARN MORE ABOUT MY SKILLS & EXPERIENCES"
        },
        seo: {
            title: "Ricson Ramos | Data Engineer Portfolio",
            description: "Engenheiro de Dados e Desenvolvedor Python. Automação, ETL e inteligência de dados com foco em performance."
        }
    },
    projects: [
        {
            id: "macropulse",
            title: "Macropulse",
            subtitle: "Inteligência Macroeconômica",
            image: "assets/images/macropulse.jpg",
            tags: ["Python", "FastAPI", "Redis"],
            url: "projetos/macropulse/index.html",
            github: "https://github.com/RicsonRamos/MacroPulse",
            featured: true
        },
        {
            id: "churn",
            title: "Churn Analysis",
            subtitle: "ML Pipeline with XGBoost",
            image: "assets/images/churn.jpg",
            tags: ["XGBoost", "Streamlit"],
            url: "projetos/churn/index.html",
            github: "https://github.com/RicsonRamos/streaming_service_analysis_churn",
            featured: true
        },
        {
            id: "sales-forecasting",
            title: "Sales Forecasting",
            subtitle: "Performance Analytics Dashboard",
            image: "assets/images/salesforecasting.png",
            tags: ["Python", "Pandas", "Scikit-Learn"],
            url: "projetos/sales-forecasting/index.html",
            github: "https://github.com/RicsonRamos/sales-forecasting-and-performance-analytics",
            featured: false
        },
        {
            id: "obsidian-ai",
            title: "Obsidian AI",
            subtitle: "Knowledge Graph Intelligence",
            image: "assets/images/obsidianai.png",
            tags: ["Python", "googlegemini", "RAG"],
            url: "projetos/obsidian-ai/index.html",
            github: "https://github.com/RicsonRamos/obsidian-ai",
            featured: false
        },
        {
            id: "spacex",
            title: "SpaceX ETL",
            subtitle: "Data Pipeline Automation",
            image: "assets/images/spacexetl.jpg",
            tags: ["Python", "Apache Airflow"],
            url: "projetos/spacex/index.html",
            github: "https://github.com/RicsonRamos/spacex_etl_pipeline",
            featured: false
        },
        {
            id: "smtp",
            title: "Email SMTP",
            subtitle: "Messaging Microservice",
            image: "assets/images/smtpsender.png",
            tags: ["SMTP", "Python", "Docker"],
            url: "projetos/smtp/index.html",
            github: "https://github.com/RicsonRamos/smtp_email_sender",
            featured: false
        }
    ],

    experience: [
        {
            id: "job-1",
            year: "2025",
            title: "Software Engineer",
            company: "Advanced Engineering",
            from: "Jan 2025",
            to: "Present",
            code: "const softwareEngineering = {\n  architecture: \"Clean Code & Scalability\",\n  tools: [\"Docker\", \"CI/CD\", \"Cloud Systems\"],\n  goal: \"High-performance data pipelines.\"\n}"
        },
        {
            id: "job-2",
            year: "2024",
            title: "Data Science Tech",
            company: "University",
            from: "Jan 2024",
            to: "Present",
            code: "const dataScience = {\n  focus: \"ETL & Statistical Analysis\",\n  stack: [\"Python\", \"Pandas\", \"Scikit-learn\"],\n  status: \"Final Stage / Advanced Research\"\n}"
        },
        {
            id: "job-3",
            year: "2016",
            title: "Public Safety Specialist",
            company: "PMMG",
            from: "2016",
            to: "Present",
            code: "const policeForce = {\n  role: \"Public Safety Specialist\",\n  tenure: \"10 years\",\n  expertise: [\"Operational Planning\", \"Crisis Mgmt\"],\n  legacy: \"Tactical discipline applied to dev workflow.\"\n}"
        }
    ],

    about: {
        id: "about-me",
        storyline: [
            {
                phase: 'Foundations',
                title: 'ACADEMICS &',
                title2: 'EARLY RESEARCH',
                description: 'Starting with a deep curiosity for systems and logic, my journey began in theoretical research where I learned the rigor of data validation.',
                image: 'assets/images/windows.png'
            },
            {
                phase: 'Evolution',
                title: 'DATA',
                title2: 'ENGINEERING',
                description: 'Transitioning into the corporate world, I focused on building high-performance Python backends and scalable ETL pipelines.',
                image: 'assets/images/windows.png'
            },
            {
                phase: 'Vision',
                title: 'AI & DATA',
                title2: 'ARCHITECTURE',
                description: 'Currently leveraging advanced LLMs and RAG architectures to build the next generation of knowledge intelligence systems.',
                image: 'assets/images/windows.png'
            }
        ],
        sections: [
            {
                title: "O Início da Jornada",
                paragraphs: [
                    "Sempre fui fascinado por como os dados podem contar histórias. Minha formação acadêmica me deu as ferramentas para traduzir problemas complexos em algoritmos eficientes.",
                    "Desde o início, foquei em **Python** como minha linguagem principal, explorando suas capacidades em automação e processamento científico."
                ]
            },
            {
                title: "A Especialização em Engenharia",
                paragraphs: [
                    "No mercado financeiro e em tech-hubs, percebi que o dado bruto é apenas o começo. O verdadeiro valor está na **infraestrutura**: pipelines que não quebram e sistemas que escalam.",
                    "Especializei-me em arquiteturas orientadas a eventos e processamento em tempo real, garantindo que a informação certa chegue no momento exato."
                ]
            },
            {
                title: "Propósito e Tecnologias",
                paragraphs: [
                    "Hoje, meu foco está na interseção entre a **Engenharia de Dados Tradicional** e a **Inteligência Artificial Generativa**. Acredito em sistemas que não apenas armazenam, mas compreendem a informação.",
                    "Utilizo uma stack moderna focada em performance, segurança e, acima de tudo, estabilidade operacional."
                ],
                tech: [
                    { name: "Python", icon: "python" },
                    { name: "FastAPI", icon: "fastapi" },
                    { name: "Docker", icon: "docker" },
                    { name: "PostgreSQL", icon: "postgresql" },
                    { name: "Airflow", icon: "apacheairflow" },
                    { name: "Gemini", icon: "googlegemini" }
                ]
            }
        ]
    }
};
