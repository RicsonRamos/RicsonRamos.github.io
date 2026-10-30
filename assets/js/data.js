const PortfolioData = {
    locales: {
        "pt-BR": {
            config: {
                name: "Ricson Ramos",
                role: "Data Scientist & Analytics Engineer",
                email: "ricsonramos@outlook.com",
                location: "Brasil",
                social: {
                    linkedin: "https://www.linkedin.com/in/ricsonramos/",
                    github: "https://github.com/RicsonRamos"
                },
                hero: {
                    status: "Disponível para novas oportunidades em Dados",
                    title: "Ricson Ramos",
                    role: "Data Scientist & Analytics Engineer",
                    headline: "Transformando dados brutos em decisões de negócio, retorno financeiro mensurável (ROI) e sistemas preditivos de produção.",
                    instruction: "Explore os projetos práticos desenvolvidos com dados reais e padrões de mercado."
                },
                seo: {
                    title: "Ricson Ramos | Data Scientist & Analytics Engineer",
                    description: "Portfólio executivo de Ciência de Dados e Analytics Engineering: estudos de caso focados em retenção de receita, governança métrica e inteligência preditiva."
                }
            },

            i18n: {
                nav: {
                    projects: "Estudos de Caso",
                    experience: "Trajetória",
                    philosophy: "Como Trabalho",
                    contact: "Contato"
                },
                hero: {
                    status: "Disponível para novas oportunidades em Dados",
                    role: "Data Scientist & Analytics Engineer",
                    description: "Transformando dados brutos em <strong>decisões de negócio</strong>, <strong>retorno financeiro mensurável (ROI)</strong> e <strong>sistemas preditivos de produção</strong>.",
                    cta_projects: "Explorar Projetos & Estudos de Caso",
                    copy_email: "📋 Copiar E-mail",
                    email_copied: "✅ E-mail Copiado!"
                },
                value: {
                    badge: "Pilar de Entrega"
                },
                projects: {
                    tag: "Estudos de Caso de Negócio",
                    title: "Soluções que Geram Impacto Real",
                    subtitle: "Cada projeto resolve um problema concreto de faturamento, eficiência ou governança métrica. Clique em \"Estudo de Caso\" para explorar a narrativa de negócio ou em \"Código\" para auditar a arquitetura técnica.",
                    filter_all: "Todos os Projetos",
                    filter_ml: "Machine Learning & MLOps",
                    filter_data_eng: "Analytics Engineering",
                    filter_analytics: "Inteligência & Varejo",
                    challenge: "🎯 Desafio:",
                    solution: "💡 Solução:",
                    impact: "📈 Impacto:",
                    case_study: "📖 Estudo de Caso",
                    code: "💻 Código"
                },
                experience: {
                    tag: "Trajetória & Formação",
                    title: "Rigor Analítico e Prática Contínua",
                    subtitle: "Combinação sólida de experiência em tomada de decisão crítica com formação superior em Ciência de Dados e Engenharia de Software."
                },
                philosophy: {
                    tag: "Padrão de Qualidade",
                    title: "Como Eu Trabalho",
                    subtitle: "Princípios inegociáveis que garantem que modelos e pipelines funcionem com estabilidade, transparência e valor financeiro."
                },
                contact: {
                    tag: "Contato Direto",
                    title: "Vamos Conversar sobre Dados?",
                    subtitle: "Estou aberto para oportunidades em <strong>Ciência de Dados</strong>, <strong>Analytics Engineering</strong> e projetos de alta criticidade."
                },
                footer: {
                    copy: "© 2026 Ricson Ramos. Todos os direitos reservados.",
                    tagline: "⚡ Carregamento Ultrarrápido • Otimizado em WebP • Código 100% Autoral"
                },
                theme: {
                    toggle: "Alternar modo claro / escuro",
                    light: "Modo Claro",
                    dark: "Modo Escuro"
                },
                lang: {
                    switch: "Alternar idioma"
                }
            },

            valueProps: [
                {
                    icon: "📈",
                    title: "Machine Learning & MLOps",
                    desc: "Modelagem supervisionada com XGBoost, explicabilidade SHAP, rastreamento MLflow e versionamento DVC."
                },
                {
                    icon: "🔍",
                    title: "Inteligência de Risco & OSINT",
                    desc: "Investigação com fontes abertas (OSINT), análise de padrões críticos, detecção de anomalias e integridade de dados."
                },
                {
                    icon: "🏗️",
                    title: "Analytics Engineering",
                    desc: "Modelagem dimensional (Star Schema), governança e testes automatizados de dados com dbt e PostgreSQL."
                },
                {
                    icon: "🚀",
                    title: "Pipelines & Produção",
                    desc: "Deploy conteinerizado com Docker Compose, APIs assíncronas em FastAPI e automação de fluxos analíticos."
                }
            ],

            projects: [
                {
                    id: "churn",
                    title: "Streaming Churn Radar",
                    subtitle: "Predição Preditiva & ROI de Retenção",
                    image: "assets/images/churn.webp",
                    category: "ml",
                    categoryLabel: "Machine Learning & MLOps",
                    roiBadge: "ROI Positivo na Retenção",
                    problem: "Cancelamentos inesperados impactavam o faturamento anual recorrente (ARR) sem oportunidade de ação preventiva.",
                    solution: "Modelo supervisionado em XGBoost Native com calibração de probabilidade, explicabilidade SHAP e MLOps com MLflow.",
                    impact: "Dashboard em Streamlit com simulador financeiro que otimiza o corte de intervenção, preservando receita líquida.",
                    tags: ["XGBoost", "MLflow", "DVC", "SHAP", "Streamlit", "Docker"],
                    url: "projetos/churn/index.html",
                    github: "https://github.com/RicsonRamos/streaming_service_analysis_churn",
                    featured: true
                },
                {
                    id: "olist-data-platform",
                    title: "Olist E-Commerce Data Platform",
                    subtitle: "Lakehouse Híbrido & Confiabilidade Métrica",
                    image: "assets/images/olist_data_platform.webp",
                    category: "data-eng",
                    categoryLabel: "Analytics Engineering",
                    roiBadge: "90% Menos Tempo de Pipeline",
                    problem: "Dados transacionais brutos fragmentados geravam relatórios conflitantes entre diretoria, financeiro e operações.",
                    solution: "Plataforma ELT moderna com arquitetura medalhão, transformações dimensionais no dbt e testes de qualidade automáticos.",
                    impact: "Criação da fonte única da verdade para BI (Metabase / Power BI) com auditoria ponta a ponta e zero dados duplicados.",
                    tags: ["dbt Core", "PostgreSQL", "Docker", "SQLFluff", "CI/CD", "Star Schema"],
                    url: "projetos/olist-data-platform/index.html",
                    github: "https://github.com/RicsonRamos/olist-data-platform",
                    featured: true
                },
                {
                    id: "sales-forecasting",
                    title: "Retail Sales Intelligence",
                    subtitle: "Previsão de Demanda & Segmentação",
                    image: "assets/images/salesforecasting.webp",
                    category: "analytics",
                    categoryLabel: "Data Science & Varejo",
                    roiBadge: "Estoque Otimizado",
                    problem: "Ruptura de estoque em itens de alto giro e capital de giro imobilizado em produtos encalhados.",
                    solution: "Segmentação comportamental via K-Means Clustering associada a modelos de regressão supervisionada para previsão de faturamento.",
                    impact: "Alocação precisa de compras e estoques com aplicação interativa conteinerizada em Docker.",
                    tags: ["Scikit-Learn", "K-Means", "Streamlit", "Pandas", "Docker"],
                    url: "projetos/sales-forecasting/index.html",
                    github: "https://github.com/RicsonRamos/sales-forecasting-and-performance-analytics",
                    featured: true
                },
                {
                    id: "macropulse",
                    title: "MacroPulse Intelligence Platform",
                    subtitle: "Terminal Macroeconômico & Score de Risco",
                    image: "assets/images/macropulse.webp",
                    category: "analytics",
                    categoryLabel: "Inteligência & APIs",
                    roiBadge: "Decisão em Milissegundos",
                    problem: "Dispersão de dezenas de indicadores macroeconômicos atrasava decisões de proteção de capital e alocação de risco.",
                    solution: "Terminal em tempo real com pipelines de ingestão ETL automatizados, FastAPI assíncrono e motor de scoring de risco.",
                    impact: "Monitoramento centralizado de inflação, juros e câmbio para tomada de decisão ágil sob volatilidade.",
                    tags: ["FastAPI", "Python", "ETL", "PostgreSQL", "Docker"],
                    url: "projetos/macropulse/index.html",
                    github: "https://github.com/RicsonRamos/macropulse",
                    featured: true
                },
                {
                    id: "spacex",
                    title: "SpaceX Production ETL",
                    subtitle: "Orquestração de Pipelines com Airflow",
                    image: "assets/images/spacexetl.webp",
                    category: "data-eng",
                    categoryLabel: "Engenharia de Dados",
                    roiBadge: "Pipeline Automatizado",
                    problem: "Ingestão e correlação de eventos complexos de lançamentos espaciais e clima solar da NASA.",
                    solution: "DAGs orquestradas no Apache Airflow com transformações dimensionais no dbt e banco relacional PostgreSQL.",
                    impact: "Pipeline desacoplado e tolerante a falhas, conectado diretamente à camada analítica do Metabase.",
                    tags: ["Apache Airflow", "dbt", "PostgreSQL", "Metabase", "Docker"],
                    url: "projetos/spacex/index.html",
                    github: "https://github.com/RicsonRamos/spacex_etl_pipeline",
                    featured: false
                },
                {
                    id: "obsidian-ai",
                    title: "Obsidian AI Second Brain",
                    subtitle: "Knowledge Graph com LLMs & RAG",
                    image: "assets/images/obsidianai.webp",
                    category: "ml",
                    categoryLabel: "IA Generativa & RAG",
                    roiBadge: "Privacidade Local-First",
                    problem: "Milhares de notas analíticas isoladas sem conexões semânticas automáticas, dificultando a recuperação de conhecimento.",
                    solution: "Arquitetura híbrida que processa vaults locais com Ollama e Google Gemini, gerando grafos de conhecimento interativos.",
                    impact: "Recuperação contextual rápida e geração de insights com interface web moderna em Next.js.",
                    tags: ["LLM", "Ollama", "Gemini", "Next.js", "Python"],
                    url: "projetos/obsidian-ai/index.html",
                    github: "https://github.com/RicsonRamos/obsidian-ai",
                    featured: false
                }
            ],

            experience: [
                {
                    year: "2016 — Presente",
                    role: "Inteligência Operacional & Mitigação de Risco",
                    company: "Setor Público",
                    desc: "Atuação direta em operações de alta criticidade e tomada de decisão sob risco. Desenvolvimento de abordagens estruturadas para reconhecimento de padrões, consistência de dados e precisão relatorial."
                },
                {
                    year: "2024 — 2026",
                    role: "Tecnólogo em Ciência de Dados",
                    company: "Faculdade Anhanguera",
                    desc: "Formação superior com ênfase em modelagem estatística, inferência, aprendizado de máquina supervisionado e não-supervisionado, manipulação massiva com SQL e visualização analítica."
                },
                {
                    year: "2026 — Presente",
                    role: "Bacharelado em Engenharia de Software",
                    company: "Faculdade Gran",
                    desc: "Aprofundamento em sistemas distribuídos, arquitetura segura, microsserviços, qualidade de código e práticas modernas de DevOps e conteinerização."
                }
            ],

            philosophy: [
                {
                    icon: "⚖️",
                    title: "Rigor de Engenharia",
                    desc: "Notebooks são para experimentação; código de produção deve ter modularização em Python, testes automatizados, controle de versão estrito e conteinerização Docker."
                },
                {
                    icon: "🎯",
                    title: "Foco no Retorno Financeiro",
                    desc: "Cada modelo preditivo deve ser avaliado pelo ROI que gera ou pelo custo que evita: AUC-ROC e LogLoss devem conversar diretamente com LTV, CAC e ARR."
                },
                {
                    icon: "🏛️",
                    title: "Governança & Confiabilidade",
                    desc: "Dados limpos antes de qualquer algoritmo. Utilização de dbt para modelagem dimensional (Star Schema), auditoria de integridade e fontes únicas da verdade."
                },
                {
                    icon: "🗣️",
                    title: "Storytelling Executivo",
                    desc: "Capacidade de traduzir sistemas complexos em narrativas claras e intuitivas para tomadores de decisão, C-levels e recrutadores não técnicos."
                }
            ]
        },

        "en": {
            config: {
                name: "Ricson Ramos",
                role: "Data Scientist & Analytics Engineer",
                email: "ricsonramos@outlook.com",
                location: "Brazil",
                social: {
                    linkedin: "https://www.linkedin.com/in/ricsonramos/",
                    github: "https://github.com/RicsonRamos"
                },
                hero: {
                    status: "Available for new Data opportunities",
                    title: "Ricson Ramos",
                    role: "Data Scientist & Analytics Engineer",
                    headline: "Transforming raw data into business decisions, measurable financial return (ROI), and production predictive systems.",
                    instruction: "Explore practical projects built with real-world data and industry standards."
                },
                seo: {
                    title: "Ricson Ramos | Data Scientist & Analytics Engineer",
                    description: "Executive Data Science and Analytics Engineering portfolio: case studies focused on revenue retention, metric governance, and predictive intelligence."
                }
            },

            i18n: {
                nav: {
                    projects: "Case Studies",
                    experience: "Experience",
                    philosophy: "How I Work",
                    contact: "Contact"
                },
                hero: {
                    status: "Available for new Data opportunities",
                    role: "Data Scientist & Analytics Engineer",
                    description: "Transforming raw data into <strong>business decisions</strong>, <strong>measurable financial return (ROI)</strong>, and <strong>production predictive systems</strong>.",
                    cta_projects: "Explore Projects & Case Studies",
                    copy_email: "📋 Copy Email",
                    email_copied: "✅ Email Copied!"
                },
                value: {
                    badge: "Delivery Pillar"
                },
                projects: {
                    tag: "Business Case Studies",
                    title: "Solutions Driving Real Impact",
                    subtitle: "Each project solves a concrete revenue, efficiency, or metric governance challenge. Click \"Case Study\" to explore the business narrative or \"Code\" to audit the technical architecture.",
                    filter_all: "All Projects",
                    filter_ml: "Machine Learning & MLOps",
                    filter_data_eng: "Analytics Engineering",
                    filter_analytics: "Intelligence & Retail",
                    challenge: "🎯 Challenge:",
                    solution: "💡 Solution:",
                    impact: "📈 Impact:",
                    case_study: "📖 Case Study",
                    code: "💻 Code"
                },
                experience: {
                    tag: "Career & Education",
                    title: "Analytical Rigor & Continuous Practice",
                    subtitle: "Solid combination of high-stakes critical decision-making experience and formal education in Data Science and Software Engineering."
                },
                philosophy: {
                    tag: "Quality Standards",
                    title: "How I Work",
                    subtitle: "Non-negotiable principles ensuring models and pipelines deliver stability, transparency, and financial value."
                },
                contact: {
                    tag: "Direct Contact",
                    title: "Let's Talk About Data",
                    subtitle: "Open for opportunities in <strong>Data Science</strong>, <strong>Analytics Engineering</strong>, and high-impact initiatives."
                },
                footer: {
                    copy: "© 2026 Ricson Ramos. All rights reserved.",
                    tagline: "⚡ Ultra-Fast Loading • WebP Optimized • 100% Original Code"
                },
                theme: {
                    toggle: "Toggle light / dark mode",
                    light: "Light Mode",
                    dark: "Dark Mode"
                },
                lang: {
                    switch: "Select language"
                }
            },

            valueProps: [
                {
                    icon: "📈",
                    title: "Machine Learning & MLOps",
                    desc: "Supervised modeling with XGBoost, SHAP explainability, MLflow experiment tracking, and DVC versioning."
                },
                {
                    icon: "🔍",
                    title: "Risk Intelligence & OSINT",
                    desc: "Open-source intelligence (OSINT), critical pattern recognition, anomaly detection, and data integrity."
                },
                {
                    icon: "🏗️",
                    title: "Analytics Engineering",
                    desc: "Dimensional modeling (Star Schema), metric governance, and automated data quality testing with dbt and PostgreSQL."
                },
                {
                    icon: "🚀",
                    title: "Production Pipelines",
                    desc: "Containerized deployment with Docker Compose, asynchronous FastAPI services, and analytics workflow automation."
                }
            ],

            projects: [
                {
                    id: "churn",
                    title: "Streaming Churn Radar",
                    subtitle: "Predictive Intelligence & Retention ROI",
                    image: "assets/images/churn.webp",
                    category: "ml",
                    categoryLabel: "Machine Learning & MLOps",
                    roiBadge: "Positive Retention ROI",
                    problem: "Unexpected subscriber churn eroded annual recurring revenue (ARR) without early warning or preventive action.",
                    solution: "Supervised native XGBoost model with probability calibration, SHAP explainability, and MLflow tracking.",
                    impact: "Streamlit dashboard with a financial simulator optimizing intervention thresholds to protect net revenue.",
                    tags: ["XGBoost", "MLflow", "DVC", "SHAP", "Streamlit", "Docker"],
                    url: "projetos/churn/index.html",
                    github: "https://github.com/RicsonRamos/streaming_service_analysis_churn",
                    featured: true
                },
                {
                    id: "olist-data-platform",
                    title: "Olist E-Commerce Data Platform",
                    subtitle: "Hybrid Lakehouse & Metric Governance",
                    image: "assets/images/olist_data_platform.webp",
                    category: "data-eng",
                    categoryLabel: "Analytics Engineering",
                    roiBadge: "90% Pipeline Time Reduction",
                    problem: "Fragmented raw transactional data led to conflicting reports across leadership, finance, and operations.",
                    solution: "Modern ELT platform with medallion architecture, dbt dimensional modeling, and automated data quality tests.",
                    impact: "Single source of truth for BI (Metabase / Power BI) with end-to-end auditability and zero duplicate records.",
                    tags: ["dbt Core", "PostgreSQL", "Docker", "SQLFluff", "CI/CD", "Star Schema"],
                    url: "projetos/olist-data-platform/index.html",
                    github: "https://github.com/RicsonRamos/olist-data-platform",
                    featured: true
                },
                {
                    id: "sales-forecasting",
                    title: "Retail Sales Intelligence",
                    subtitle: "Demand Forecasting & Segmentation",
                    image: "assets/images/salesforecasting.webp",
                    category: "analytics",
                    categoryLabel: "Data Science & Retail",
                    roiBadge: "Optimized Inventory",
                    problem: "Stockouts in high-turnover items and working capital trapped in stagnant, slow-moving inventory.",
                    solution: "Behavioral customer segmentation via K-Means clustering combined with regression models for revenue forecasting.",
                    impact: "Precise procurement and inventory allocation with an interactive containerized Docker application.",
                    tags: ["Scikit-Learn", "K-Means", "Streamlit", "Pandas", "Docker"],
                    url: "projetos/sales-forecasting/index.html",
                    github: "https://github.com/RicsonRamos/sales-forecasting-and-performance-analytics",
                    featured: true
                },
                {
                    id: "macropulse",
                    title: "MacroPulse Intelligence Platform",
                    subtitle: "Macroeconomic Terminal & Risk Scoring",
                    image: "assets/images/macropulse.webp",
                    category: "analytics",
                    categoryLabel: "Intelligence & APIs",
                    roiBadge: "Millisecond Decisioning",
                    problem: "Scattered macroeconomic indicators delayed capital hedging and risk allocation decisions.",
                    solution: "Real-time terminal with automated ETL pipelines, asynchronous FastAPI services, and risk scoring engine.",
                    impact: "Centralized tracking of inflation, interest rates, and FX for agile decision-making during market volatility.",
                    tags: ["FastAPI", "Python", "ETL", "PostgreSQL", "Docker"],
                    url: "projetos/macropulse/index.html",
                    github: "https://github.com/RicsonRamos/macropulse",
                    featured: true
                },
                {
                    id: "spacex",
                    title: "SpaceX Production ETL",
                    subtitle: "Pipeline Orchestration with Airflow",
                    image: "assets/images/spacexetl.webp",
                    category: "data-eng",
                    categoryLabel: "Data Engineering",
                    roiBadge: "Automated Pipeline",
                    problem: "Ingesting and correlating complex space launch events with NASA solar weather data.",
                    solution: "DAGs orchestrated via Apache Airflow with dbt dimensional transforms and PostgreSQL relational storage.",
                    impact: "Decoupled, fault-tolerant pipeline feeding directly into Metabase analytics dashboards.",
                    tags: ["Apache Airflow", "dbt", "PostgreSQL", "Metabase", "Docker"],
                    url: "projetos/spacex/index.html",
                    github: "https://github.com/RicsonRamos/spacex_etl_pipeline",
                    featured: false
                },
                {
                    id: "obsidian-ai",
                    title: "Obsidian AI Second Brain",
                    subtitle: "Knowledge Graph with LLMs & RAG",
                    image: "assets/images/obsidianai.webp",
                    category: "ml",
                    categoryLabel: "Generative AI & RAG",
                    roiBadge: "Local-First Privacy",
                    problem: "Thousands of isolated analytical notes lacking semantic links, hindering fast knowledge retrieval.",
                    solution: "Hybrid architecture processing local Markdown vaults with Ollama and Google Gemini to build interactive knowledge graphs.",
                    impact: "Instant contextual retrieval and insight synthesis via a modern Next.js interface.",
                    tags: ["LLM", "Ollama", "Gemini", "Next.js", "Python"],
                    url: "projetos/obsidian-ai/index.html",
                    github: "https://github.com/RicsonRamos/obsidian-ai",
                    featured: false
                }
            ],

            experience: [
                {
                    year: "2016 — Present",
                    role: "Operational Intelligence & Risk Mitigation",
                    company: "Public Sector",
                    desc: "Direct action in high-criticality operations and high-stakes decision-making. Development of structured approaches for pattern recognition, data consistency, and report precision."
                },
                {
                    year: "2024 — 2026",
                    role: "Associate Degree in Data Science",
                    company: "Anhanguera University",
                    desc: "Higher education degree focusing on statistical modeling, inference, supervised and unsupervised machine learning, large-scale SQL processing, and analytical visualization."
                },
                {
                    year: "2026 — Present",
                    role: "B.S. in Software Engineering",
                    company: "Gran University",
                    desc: "In-depth study of distributed systems, secure architecture, microservices, code quality, and modern DevOps and containerization practices."
                }
            ],

            philosophy: [
                {
                    icon: "⚖️",
                    title: "Engineering Rigor",
                    desc: "Notebooks are for experimentation; production code requires modular Python, automated testing, strict version control, and Docker containerization."
                },
                {
                    icon: "🎯",
                    title: "Financial Return Focus",
                    desc: "Every predictive model must be evaluated by the ROI it generates or costs it avoids: AUC-ROC and LogLoss must directly connect to LTV, CAC, and ARR."
                },
                {
                    icon: "🏛️",
                    title: "Governance & Reliability",
                    desc: "Clean data before any algorithm. Leveraging dbt for dimensional modeling (Star Schema), integrity audits, and single sources of truth."
                },
                {
                    icon: "🗣️",
                    title: "Executive Storytelling",
                    desc: "Ability to translate complex systems into clear, intuitive narratives for decision-makers, C-levels, and non-technical recruiters."
                }
            ]
        }
    },

    // Helper to get locale data
    getData(lang = 'pt-BR') {
        const key = lang.startsWith('en') ? 'en' : 'pt-BR';
        return this.locales[key] || this.locales['pt-BR'];
    }
};

// Default backwards compatibility
PortfolioData.config = PortfolioData.locales['pt-BR'].config;
PortfolioData.valueProps = PortfolioData.locales['pt-BR'].valueProps;
PortfolioData.projects = PortfolioData.locales['pt-BR'].projects;
PortfolioData.experience = PortfolioData.locales['pt-BR'].experience;
PortfolioData.philosophy = PortfolioData.locales['pt-BR'].philosophy;
