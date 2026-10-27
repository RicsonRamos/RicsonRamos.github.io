const PortfolioData = {
    config: {
        name: "Ricson Ramos",
        role: "Tecnólogo em Ciência de Dados | Foco em Inteligência de Risco, Cybersecurity & OSINT",
        email: "ricsonramos@outlook.com",
        location: "Brasil",
        social: {
            linkedin: "https://www.linkedin.com/in/ricsonramos/",
            github: "https://github.com/RicsonRamos"
        },
        hero: {
            status: "Transição para Tecnologia • Foco em Dados & Inteligência de Risco",
            title: "Ricson Ramos",
            role: "Tecnólogo em Ciência de Dados (2026)",
            headline: "Construindo soluções analíticas de ponta a ponta com dados públicos: aprendizado de máquina, engenharia analítica e inteligência investigativa.",
            instruction: "Explore os projetos práticos desenvolvidos com dados públicos e padrões de mercado."
        },
        seo: {
            title: "Ricson Ramos | Tecnólogo em Ciência de Dados | Risco, Cyber & OSINT",
            description: "Portfólio de Ciência de Dados e Inteligência de Risco: projetos práticos de ponta a ponta aplicados a dados públicos, mitigação de risco e aprendizado de máquina."
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
};
