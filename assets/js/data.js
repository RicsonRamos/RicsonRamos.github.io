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
            tags: ["Python", "OpenAI", "RAG"],
            url: "projetos/obsidian-ai/index.html",
            github: "https://github.com/RicsonRamos/obsidian-ai",
            featured: false
        },
        {
            id: "spacex",
            title: "SpaceX ETL",
            subtitle: "Data Pipeline Automation",
            image: "assets/images/spacexetl.png",
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
