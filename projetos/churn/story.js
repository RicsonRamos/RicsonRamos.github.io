/* ===== CHURN ANALYSIS MODULAR CONTENT ===== */
const ProjectContent = {
    id: "churn",
    github: "https://github.com/RicsonRamos/streaming_service_analysis_churn",

    title: "Streaming Churn Radar",
    storyline: [
        {
            phase: 'Contexto',
            title: 'O DESAFIO',
            title2: 'EVASÃO DE RECEITA',
            description: 'Altas taxas de cancelamento impactavam o faturamento mensal recorrente (ARR). Descontos genéricos desperdiçavam margem de lucro.',
            image: '../../assets/images/churn.webp'
        },
        {
            phase: 'Ideia',
            title: 'A SOLUÇÃO',
            title2: 'IA PREDITIVA COM XAI',
            description: 'Implementar modelo XGBoost para prever cancelamentos e SHAP Values para auditar exatamente por que cada cliente quer sair.',
            image: '../../assets/images/churn.webp'
        },
        {
            phase: 'Implementação',
            title: 'MLOPS PRÁTICO',
            title2: 'AÇÃO & ROI',
            description: 'Painel operacional em Streamlit conteinerizado em Docker, com simulação em tempo real de retorno sobre investimento da retenção.',
            image: '../../assets/images/churn.webp'
        }
    ],
    sections: [
        {
            title: "O Desafio do Churn Recorrente",
            paragraphs: [
                "Para serviços de assinatura e streaming, **reter um cliente existente é até cinco vezes mais barato do que adquirir um novo**. No entanto, a maioria das empresas descobre o cancelamento apenas depois que o cliente já cancelou o cartão.",
                "O objetivo central foi criar um **sistema preventivo de ação tática**, onde a equipe de marketing e atendimento sabe quais contas abordar antes da intenção de cancelamento virar fato consumado."
            ]
        },
        {
            title: "Engenharia de MLOps e Modelagem",
            paragraphs: [
                "Utilizamos **XGBoost Native** com calibração probabilística rigorosa para otimização de AUC-ROC e LogLoss. O pipeline completo foi versionado com **DVC** para integridade de dados e rastreado no **MLflow** para governança de experimentos.",
                "Para romper com a 'caixa preta' do Machine Learning, integramos **SHAP Values (Explainable AI)**, permitindo que o analista de retenção leia o motivo exato de cada alerta individual."
            ]
        },
        {
            title: "Impacto Financeiro e Simulador de ROI",
            paragraphs: [
                "O entregável final não é um notebook, mas uma **plataforma operacional em Streamlit**. Nela, o gestor define o custo da intervenção (oferta/desconto) e o sistema calcula a probabilidade ideal de corte, maximizando a receita líquida recuperada.",
                "Todo o sistema roda de forma autônoma e conteinerizada via **Docker Compose**, pronto para ambientes de produção."
            ],
            tech: [
                { name: "Python", icon: "python" },
                { name: "XGBoost", icon: "scikitlearn" },
                { name: "MLflow", icon: "python" },
                { name: "DVC", icon: "git" },
                { name: "Streamlit", icon: "streamlit" },
                { name: "Docker", icon: "docker" }
            ]
        }
    ]
};
