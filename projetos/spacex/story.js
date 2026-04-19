/* ===== SPACEX ETL PIPELINE - MODULAR CONTENT ===== */
const ProjectContent = {
    id: "spacex",
    github: "https://github.com/RicsonRamos/SpaceX-ETL",

    title: "SpaceX ETL Pipeline",
    storyline: [
        {
            phase: 'Contexto',
            title: 'O DESAFIO',
            title2: 'DADOS ESPACIAIS',
            description: 'Transformar dados brutos de APIs da SpaceX e NASA em inteligência de negócio acionável, com qualidade em cada camada.',
            image: '../../assets/images/windows.png'
        },
        {
            phase: 'Arquitetura',
            title: 'MEDALLION',
            title2: 'BRONZE > GOLD',
            description: 'Arquitetura em três camadas: Bronze (ingestão raw), Silver (limpeza via dbt) e Gold (KPIs prontos para BI).',
            image: '../../assets/images/windows.png'
        },
        {
            phase: 'Qualidade',
            title: 'CI/CD',
            title2: '82% COBERTURA',
            description: 'Pipeline com 58 testes automatizados rodando via GitHub Actions. Observabilidade completa com logs JSON.',
            image: '../../assets/images/windows.png'
        }
    ],
    sections: [
        {
            title: "O Desafio dos Dados Espaciais",
            paragraphs: [
                "Este projeto implementa um pipeline de dados de produção que consome dados em tempo real das APIs públicas da SpaceX e NASA, transformando informações brutas em inteligência estratégica.",
                "A principal dificuldade era lidar com esquemas de dados ultra-dinâmicos e garantir que as métricas de missão fossem consistentes através de múltiplas fontes de dados."
            ]
        },
        {
            title: "A Arquitetura Medallion",
            paragraphs: [
                "A arquitetura segue o padrão **Medallion**, garantindo rastreabilidade e governança completa. Os dados fluem de sua forma bruta na camada Bronze até tabelas analíticas otimizadas na camada Gold.",
                "O **Apache Airflow** atua como o maestro, orquestrando as dependências entre a ingestão das APIs e as transformações complexas realizadas pelo dbt."
            ]
        },
        {
            title: "Qualidade e Stack Tecnológica",
            paragraphs: [
                "O pipeline possui **82% de cobertura de testes**, com validações unitárias e de integração rodando automaticamente via GitHub Actions, garantindo que nenhuma regressão chegue ao dashboard.",
                "Utilizamos ferramentas líderes de mercado para garantir uma infraestrutura robusta, escalável e fácil de monitorar."
            ],
            tech: [
                { name: "Python", icon: "python" },
                { name: "Apache Airflow", icon: "apacheairflow" },
                { name: "dbt", icon: "dbt" },
                { name: "PostgreSQL", icon: "postgresql" },
                { name: "Docker", icon: "docker" }
            ]
        }
    ]
};
