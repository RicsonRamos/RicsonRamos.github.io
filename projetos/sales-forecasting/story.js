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
            description: 'Equipe comercial operando sem visibilidade do futuro. A falta de previsibilidade de receita comprometia o planejamento estratégico.',
            image: '../../assets/images/windows.png'
        },
        {
            phase: 'Modelagem',
            title: 'TIME SERIES',
            title2: 'ML PIPELINE',
            description: 'Implementação de modelos de séries temporais com Scikit-Learn e Prophet, combinados com feature engineering avançada.',
            image: '../../assets/images/windows.png'
        },
        {
            phase: 'Resultados',
            title: 'DASHBOARD',
            title2: 'INSIGHTS',
            description: 'Dashboard interativo de performance de vendas com KPIs em tempo real e previsão de receita para os próximos 90 dias.',
            image: '../../assets/images/windows.png'
        }
    ],
    sections: [
        {
            title: "O Problema da Previsibilidade",
            paragraphs: [
                "No setor comercial, a **incerteza é o maior custo**. Este projeto nasceu da necessidade de transformar dados históricos de vendas em um motor de previsão confiável para apoiar a tomada de decisão.",
                "O principal desafio foi lidar com a sazonalidade agressiva e os efeitos externos que impactavam o comportamento de compra dos clientes B2B."
            ]
        },
        {
            title: "Arquitetura Analítica",
            paragraphs: [
                "Utilizamos uma abordagem híbrida de modelagem. O **Facebook Prophet** foi empregado para capturar tendências de longo prazo e sazonalidades anuais, enquanto modelos de **Boosting** trataram as variações locais.",
                "O pipeline de dados foi desenhado para ser totalmente automatizado, desde a extração do ERP até a atualização dos modelos sem intervenção manual."
            ]
        },
        {
            title: "Performance e Stack",
            paragraphs: [
                "A previsão final alcançou um erro médio absoluto (**MAE**) de menos de 8%, permitindo uma redução significativa no excesso de estoque e uma melhor alocação da força de vendas.",
                "A stack tecnológica foca em ferramentas de código aberto de alta performance, permitindo escalabilidade e facilidade de manutenção."
            ],
            tech: [
                { name: "Python", icon: "python" },
                { name: "Pandas", icon: "pandas" },
                { name: "Scikit-Learn", icon: "scikitlearn" },
                { name: "PowerBI", icon: "powerbi" }
            ]
        }
    ]
};
