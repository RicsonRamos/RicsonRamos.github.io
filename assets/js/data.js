const PortfolioData = {
    config: {
        name: "Ricson Ramos",
        role: "Data Engineer / Python Specialist",
        email: "contato@exemplo.com",
        social: {
            linkedin: "https://linkedin.com/in/ricson-ramos",
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
            featured: true
        },
        {
            id: "churn",
            title: "Churn Analysis",
            subtitle: "ML Pipeline with XGBoost",
            image: "assets/images/churn.jpg",
            tags: ["XGBoost", "Streamlit"],
            url: "projetos/churn/index.html",
            featured: false
        },
        {
            id: "spacex",
            title: "SpaceX ETL",
            subtitle: "Data Pipeline Automation",
            image: "exemples/Animated Image Gallery/3.jpg",
            tags: ["Python", "Pandas"],
            url: "https://github.com/RicsonRamos/pipeline_etl_spacex",
            featured: false
        },
        {
            id: "smtp",
            title: "Email SMTP",
            subtitle: "Messaging Microservice",
            image: "exemples/Animated Image Gallery/4.jpg",
            tags: ["SMTP", "Python"],
            url: "https://github.com/RicsonRamos/remetente_de_email_smtp",
            featured: false
        }
    ],
    experience: [
        {
            id: "job-4",
            year: "2019",
            title: "Intern",
            company: "JP Morgan Chase",
            from: "June 2019",
            to: "December 2020",
            code: "const job = {\n  title: \"Intern\",\n  from: \"June 2019\",\n  to: \"December 2020\",\n  company: \"JP Morgan Chase\"\n}"
        },
        {
            id: "job-3",
            year: "2021",
            title: "Data Analyst",
            company: "Nexus Finance",
            from: "January 2021",
            to: "May 2022",
            code: "const job = {\n  title: \"Data Analyst\",\n  from: \"January 2021\",\n  to: \"May 2022\",\n  company: \"Nexus Finance\",\n  tools: [\"Pandas\", \"SQL\", \"Tableau\"]\n}"
        },
        {
            id: "job-2",
            year: "2022",
            title: "Senior Python Developer",
            company: "Elysium Tech",
            from: "June 2022",
            to: "December 2023",
            code: "const job = {\n  title: \"Senior Python Developer\",\n  from: \"June 2022\",\n  to: \"December 2023\",\n  company: \"Elysium Tech\",\n  stack: [\"FastAPI\", \"Redis\", \"Kafka\"]\n}"
        },
        {
            id: "job-1",
            year: "2024",
            title: "Lead Data Engineer",
            company: "MacroPulse Intelligence",
            from: "January 2024",
            to: "Present",
            code: "const job = {\n  title: \"Lead Data Engineer\",\n  from: \"Jan 2024\",\n  to: \"Present\",\n  company: \"MacroPulse Intelligence\",\n  impact: \"Orchestrated ETL for 50M+ signals\"\n}"
        }
    ]
};
