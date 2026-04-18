/* ===== SALES FORECASTING - MODULAR CONTENT ===== */
const ProjectContent = {
    id: "sales-forecasting",
    github: "https://github.com/RicsonRamos/Sales-Forecasting",

    title: "Sales Forecasting & Analytics",
    storyline: [
        {
            phase: 'Contexto',
            title: 'O DESAFIO',
            title2: 'PREVISÃO DE VENDAS',
            description: 'Equipe comercial operando sem visibilidade do futuro. A falta de previsibilidade de receita comprometia a alocação de recursos e o planejamento estratégico.',
            image: '../../assets/images/windows.png'
        },
        {
            phase: 'Modelagem',
            title: 'TIME SERIES',
            title2: 'ML PIPELINE',
            description: 'Implementação de modelos de séries temporais com Scikit-Learn e Prophet, combinados com feature engineering baseado em sazonalidade e tendência histórica.',
            image: '../../assets/images/windows.png'
        },
        {
            phase: 'Resultados',
            title: 'DASHBOARD',
            title2: 'INSIGHTS',
            description: 'Dashboard interativo de performance de vendas com KPIs em tempo real, comparativo de metas vs. realizado e previsão de receita para os próximos 90 dias.',
            image: '../../assets/images/windows.png'
        }
    ],
    fullContent: [
        "O projeto de **Sales Forecasting** combina análise exploratória de dados históricos de vendas com modelos preditivos de séries temporais para fornecer previsões de receita com alta acurácia.",
        "Utilizando **Python, Pandas e Scikit-Learn**, o pipeline processa dados históricos de vendas, realiza feature engineering (sazonalidade, tendência, lag features) e treina modelos de regressão e séries temporais.",
        "O dashboard de **Performance Analytics** exibe KPIs críticos como taxa de conversão por canal, ticket médio por segmento, desempenho por vendedor e variância entre meta e realizado.",
        "A previsão de vendas alcançou um erro médio absoluto (**MAE**) de menos de 8% nos testes de validação, permitindo que a equipe comercial planejasse suas ações com base em dados confiáveis.",
        "O sistema gera relatórios automatizados em PDF e CSV, com alertas configuráveis para desvios significativos entre a previsão e os números reais, disparados via email ou webhook."
    ]
};
