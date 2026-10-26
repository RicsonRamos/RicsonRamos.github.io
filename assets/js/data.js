const PortfolioData = {
    config: {
        name: "Ricson Ramos",
        role: "Data Scientist & Analytics Engineer",
        email: "ricsonramos@outlook.com",
        social: {
            linkedin: "https://www.linkedin.com/in/ricsonramos-analise-dados/",
            github: "https://github.com/RicsonRamos"
        },
        hero: {
            welcome: "Portfólio Executivo de",
            highlight: "Soluções em Dados",
            instruction: "ESTUDOS DE CASO DE NEGÓCIO // MODELAGEM PREDITIVA // RETORNO FINANCEIRO"
        },
        seo: {
            title: "Ricson Ramos | Data Scientist & Analytics Engineer",
            description: "Portfólio executivo de Ciência de Dados e Analytics Engineering: estudos de caso focados em retenção de receita, governança métrica e inteligência preditiva."
        }
    },
    projects: [
        {
            id: "churn",
            title: "Streaming Churn Radar",
            subtitle: "Predição Preditiva & ROI de Retenção",
            image: "assets/images/churn.jpg",
            tags: ["XGBoost", "MLOps", "Streamlit", "SHAP"],
            url: "projetos/churn/index.html",
            github: "https://github.com/RicsonRamos/streaming_service_analysis_churn",
            featured: true
        },
        {
            id: "olist-data-platform",
            title: "Olist Data Platform",
            subtitle: "Lakehouse Híbrido & Confiabilidade Métrica",
            image: "assets/images/olist_data_platform.png",
            tags: ["dbt", "PostgreSQL", "Docker", "Star Schema"],
            url: "projetos/olist-data-platform/index.html",
            github: "https://github.com/RicsonRamos/olist-data-platform",
            featured: true
        },
        {
            id: "sales-forecasting",
            title: "Retail Sales Intelligence",
            subtitle: "Previsão de Demanda & Segmentação",
            image: "assets/images/salesforecasting.png",
            tags: ["Scikit-Learn", "K-Means", "Streamlit", "Docker"],
            url: "projetos/sales-forecasting/index.html",
            github: "https://github.com/RicsonRamos/sales-forecasting-and-performance-analytics",
            featured: true
        },
        {
            id: "macropulse",
            title: "MacroPulse Intelligence",
            subtitle: "Terminal Macroeconômico & Score de Risco",
            image: "assets/images/macropulse.jpg",
            tags: ["FastAPI", "Python", "Redis", "Real-Time ETL"],
            url: "projetos/macropulse/index.html",
            github: "https://github.com/RicsonRamos/macropulse",
            featured: true
        },
        {
            id: "spacex",
            title: "SpaceX Production ETL",
            subtitle: "Orquestração de Pipelines de Dados",
            image: "assets/images/spacexetl.jpg",
            tags: ["Airflow", "dbt", "PostgreSQL", "Metabase"],
            url: "projetos/spacex/index.html",
            github: "https://github.com/RicsonRamos/spacex_etl_pipeline",
            featured: false
        },
        {
            id: "obsidian-ai",
            title: "Obsidian AI Second Brain",
            subtitle: "Knowledge Graph com LLMs & RAG",
            image: "assets/images/obsidianai.png",
            tags: ["LLM", "RAG Local", "Ollama", "Gemini"],
            url: "projetos/obsidian-ai/index.html",
            github: "https://github.com/RicsonRamos/obsidian-ai",
            featured: false
        },
        {
            id: "automation-saas",
            title: "AutoProposta Platform",
            subtitle: "Automação Operacional & Compliance",
            image: "assets/images/automation_saas.png",
            tags: ["Python", "Streamlit", "SQLite"],
            url: "projetos/automation-saas/index.html",
            github: "https://github.com/RicsonRamos/automation_saas",
            featured: false
        },
        {
            id: "smtp",
            title: "Email Dispatcher Service",
            subtitle: "Microsserviço de Mensageria",
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
            year: "2016",
            title: "Public Security Officer & Operational Risk",
            company: "Governo Estadual / Segurança Pública",
            from: "Janeiro 2016",
            to: "Presente",
            code: "const carreira = {\n  setor: \"Segurança Pública\",\n  foco: \"Inteligência Operacional & Mitigação de Riscos\",\n  periodo: \"2016 - Presente\"\n};"
        },
        {
            id: "job-2",
            year: "2024",
            title: "Graduação em Ciência de Dados",
            company: "Faculdade Anhanguera",
            from: "Janeiro 2024",
            to: "Presente",
            code: "const academico = {\n  curso: \"Ciência de Dados\",\n  enfase: [\"Modelagem Estatística\", \"Machine Learning\", \"SQL\"],\n  instituicao: \"Faculdade Anhanguera\"\n};"
        },
        {
            id: "job-3",
            year: "2026",
            title: "Graduação em Engenharia de Software",
            company: "Faculdade Gran",
            from: "Janeiro 2026",
            to: "Presente",
            code: "const academico = {\n  curso: \"Engenharia de Software\",\n  enfase: [\"Sistemas Distribuídos\", \"Arquitetura de Dados\", \"DevOps\"],\n  instituicao: \"Faculdade Gran\"\n};"
        }
    ],

    about: {
        id: "about-me",
        storyline: [
            {
                phase: 'Fundamentos',
                title: 'INTELIGÊNCIA &',
                title2: 'RIGOR OPERACIONAL',
                description: 'Desde 2016 atuando em ambientes de alta criticidade e tomada de decisão sob risco, onde precisão e integridade de informação são inegociáveis.',
                image: 'assets/images/windows.png'
            },
            {
                phase: 'Evolução',
                title: 'CIÊNCIA DE DADOS',
                title2: '& ANALYTICS',
                description: 'Transição estruturada para Ciência de Dados e Analytics Engineering: unindo rigor matemático e estatístico a valor financeiro mensurável.',
                image: 'assets/images/windows.png'
            },
            {
                phase: 'Engenharia',
                title: 'SISTEMAS ROBUSTOS',
                title2: '& IA MODERNA',
                description: 'Construção de pipelines de dados conteinerizados, modelos explicáveis (SHAP), governança com dbt e sistemas integrados com LLMs.',
                image: 'assets/images/windows.png'
            }
        ],
        sections: [
            {
                title: "Da Inteligência Operacional à Ciência de Dados",
                paragraphs: [
                    "Minha trajetória começou em operações de alta criticidade na segurança pública, onde aprendi na prática que **decisões sem dados estruturados custam caro**.",
                    "Essa vivência forjou minha obsessão por **rigor analítico, validação estrita e resiliência**: pipelines que não quebram em momentos de pressão e dados que resistem a qualquer auditoria."
                ]
            },
            {
                title: "A Abordagem Orientada a Negócio",
                paragraphs: [
                    "Não construo modelos preditivos por mera vaidade algorítmica. O verdadeiro papel do Cientista de Dados é responder perguntas que movem os ponteiros da empresa: **qual cliente vai sair e por quê? Quanto vamos faturar no próximo trimestre? Onde estão os gargalos logísticos?**",
                    "Trabalho na interseção entre **Machine Learning (XGBoost, Scikit-learn)** e **Analytics Engineering (dbt, PostgreSQL, Docker)** para garantir que as previsões cheguem diretamente à mesa dos tomadores de decisão em dashboards operacionais e APIs de alta performance."
                ]
            },
            {
                title: "Padrão de Engenharia & Tecnologias",
                paragraphs: [
                    "Acredito em código limpo, testes automatizados e reprodutibilidade total. Cada solução é entregue pronta para produção, documentada e conteinerizada.",
                    "Abaixo estão os pilares tecnológicos que utilizo para transformar dados brutos em inteligência corporativa:"
                ],
                tech: [
                    { name: "Python", icon: "python" },
                    { name: "SQL & dbt", icon: "postgresql" },
                    { name: "Docker", icon: "docker" },
                    { name: "FastAPI", icon: "fastapi" },
                    { name: "MLflow", icon: "scikitlearn" },
                    { name: "Airflow", icon: "apacheairflow" }
                ]
            }
        ]
    }
};
