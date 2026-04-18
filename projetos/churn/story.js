/* ===== CHURN ANALYSIS MODULAR CONTENT ===== */
const ProjectContent = {
    id: "churn",
    github: "https://github.com/RicsonRamos/Churn-Analysis",

    title: "Project Churn Analysis",
    storyline: [
        {
            phase: 'Contexto',
            title: 'O DESAFIO',
            title2: 'EVASÃO DE CLIENTES',
            description: 'Altas taxas de cancelamento impactavam o faturamento mensal de uma empresa de serviços SaaS.',
            image: '../../assets/images/churn.jpg'
        },
        {
            phase: 'Ideia',
            title: 'A SOLUÇÃO',
            title2: 'IA PREDITIVA',
            description: 'Implementar um modelo de Machine Learning para prever a probabilidade de cancelamento antes de ele ocorrer.',
            image: '../../assets/images/churn.jpg'
        },
        {
            phase: 'Implementação',
            title: 'TECH STACK',
            title2: 'DATA SCIENCE',
            description: 'Uso de Scikit-Learn para modelagem e SHAP para explicabilidade do comportamento do cliente.',
            image: '../../assets/images/churn.jpg'
        }
    ],
    fullContent: [
        "A retenção de clientes é um dos pilares mais críticos para qualquer modelo de negócio recorrente. Neste projeto, analisamos dados históricos de comportamento de usuários para identificar padrões que antecedem o cancelamento.",
        "O dataset continha variáveis como frequência de login, tickets de suporte abertos e tempo de contrato, totalizando mais de 500 mil registros.",
        "Desenvolvemos um modelo baseado em **LightGBM**, otimizado para lidar com classes desbalanceadas. O modelo alcançou uma AUC-ROC de 0.89.",
        "Além da predição, focamos na **interpretabilidade**, utilizando valores SHAP para explicar ao time de Customer Success exatamente por que um cliente era classificado como 'alto risco'.",
        "A integração com o hub de marketing permitiu disparar campanhas de retenção automaticamente em tempo real, reduzindo a taxa de churn em 15% nos primeiros três meses."
    ]
};
