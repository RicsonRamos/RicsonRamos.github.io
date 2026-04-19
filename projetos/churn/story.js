/* ===== CHURN ANALYSIS MODULAR CONTENT ===== */
const ProjectContent = {
    id: "churn",
    github: "https://github.com/RicsonRamos/streaming_service_analysis_churn",

    title: "Churn Analysis Intelligence",
    storyline: [
        {
            phase: 'Contexto',
            title: 'O DESAFIO',
            title2: 'EVASÃO DE CLIENTES',
            description: 'Altas taxas de cancelamento impactavam o faturamento mensal de uma empresa de serviços SaaS.',
            image: '../../assets/images/windows.png'
        },
        {
            phase: 'Ideia',
            title: 'A SOLUÇÃO',
            title2: 'IA PREDITIVA',
            description: 'Implementar um modelo de Machine Learning para prever a probabilidade de cancelamento antes de ele ocorrer.',
            image: '../../assets/images/windows.png'
        },
        {
            phase: 'Implementação',
            title: 'TECH STACK',
            title2: 'DATA SCIENCE',
            description: 'Uso de Scikit-Learn para modelagem e SHAP para explicabilidade do comportamento do cliente.',
            image: '../../assets/images/windows.png'
        }
    ],
    sections: [
        {
            title: "O Desafio do Churn",
            paragraphs: [
                "A retenção de clientes é um dos pilares mais críticos para qualquer modelo de negócio recorrente. Neste projeto, analisamos dados históricos de comportamento de usuários para identificar padrões que antecedem o cancelamento.",
                "O dataset continha variáveis como frequência de login, tickets de suporte abertos e tempo de contrato, totalizando mais de 500 mil registros de clientes de uma plataforma de streaming."
            ]
        },
        {
            title: "Modelagem Preditiva",
            paragraphs: [
                "Desenvolvemos um modelo baseado em **LightGBM**, otimizado para lidar com classes desbalanceadas através de técnicas de oversampling sintético.",
                "Além da predição básica, focamos na **interpretabilidade**, utilizando valores SHAP para explicar ao time de Customer Success exatamente por que um cliente era classificado como 'alto risco'."
            ]
        },
        {
            title: "Stack Tecnológica",
            paragraphs: [
                "A solução foi construída utilizando o ecossistema Python moderno para Data Science, garantindo robustez desde o pré-processamento até o deploy do modelo.",
                "A integração com hubs de marketing permitiu que o modelo disparasse campanhas de retenção automaticamente, resultando em uma redução de 15% na taxa de churn."
            ],
            tech: [
                { name: "Python", icon: "python" },
                { name: "Scikit-Learn", icon: "scikitlearn" },
                { name: "Pandas", icon: "pandas" },
                { name: "Plotly", icon: "plotly" }
            ]
        }
    ]
};
