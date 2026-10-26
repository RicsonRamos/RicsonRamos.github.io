/* ===== SALES FORECASTING - MODULAR CONTENT ===== */
const ProjectContent = {
    id: "sales-forecasting",
    github: "https://github.com/RicsonRamos/sales-forecasting-and-performance-analytics",

    title: "Retail Sales Intelligence",
    storyline: [
        {
            phase: 'Contexto',
            title: 'O DESAFIO',
            title2: 'INCERTEZA DE DEMANDA',
            description: 'Equipe comercial operando sem visibilidade do futuro: rupturas de estoque e capital de giro imobilizado em produtos de baixo giro.',
            image: '../../assets/images/salesforecasting.png'
        },
        {
            phase: 'Modelagem',
            title: 'CLUSTER & ML',
            title2: 'PREVISÃO ESTRATÉGICA',
            description: 'Segmentação comportamental de clientes com K-Means Clustering e modelos supervisionados para estimar receita futura por categoria.',
            image: '../../assets/images/salesforecasting.png'
        },
        {
            phase: 'Resultados',
            title: 'DASHBOARD',
            title2: 'AÇÃO OPERACIONAL',
            description: 'Aplicação analítica interativa em Streamlit conteinerizada com Docker, orientando decisões de compra e campanhas personalizadas.',
            image: '../../assets/images/salesforecasting.png'
        }
    ],
    sections: [
        {
            title: "O Problema da Previsibilidade",
            paragraphs: [
                "No setor varejista, a **incerteza no planejamento de estoque gera prejuízos duplos**: a falta de produto perde vendas imediatas, enquanto o excesso imobiliza capital de giro.",
                "Este projeto transformou dados históricos de vendas em um motor analítico duplo: **compreender quem compra** e **antecipar quanto será faturado**."
            ]
        },
        {
            title: "Arquitetura Analítica",
            paragraphs: [
                "Desenvolvemos uma abordagem em duas frentes: segmentação não-supervisionada via **K-Means Clustering** para identificar grupos de clientes por volume e frequência de consumo, e modelos de regressão (**Random Forest**) para estimativa de receita.",
                "O código foi modularizado em padrões de engenharia de software dentro da pasta `src/`, separando limpeza, engenharia de atributos e inferência."
            ]
        },
        {
            title: "Performance e Entrega Operacional",
            paragraphs: [
                "A entrega final foi consolidada em uma aplicação operacional em **Streamlit**, empacotada em contêiner **Docker** para execução consistente em qualquer infraestrutura.",
                "A liderança comercial ganha visibilidade instantânea de quais filiais e categorias de produtos demandam reforço logístico com semanas de antecedência."
            ],
            tech: [
                { name: "Python", icon: "python" },
                { name: "Scikit-Learn", icon: "scikitlearn" },
                { name: "Pandas", icon: "pandas" },
                { name: "Streamlit", icon: "streamlit" },
                { name: "Docker", icon: "docker" }
            ]
        }
    ]
};
