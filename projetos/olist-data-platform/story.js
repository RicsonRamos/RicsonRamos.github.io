/* ===== OLIST DATA PLATFORM MODULAR CONTENT ===== */
const ProjectContent = {
    id: "olist-data-platform",
    github: "https://github.com/RicsonRamos/olist-data-platform",

    title: "Olist Data Platform",
    storyline: [
        {
            phase: 'Contexto',
            title: 'O DESAFIO',
            title2: 'DADOS FRAGMENTADOS',
            description: 'Transformar milhões de registros brutos de transações de e-commerce em uma "fonte da verdade" confiável e auditável.',
            image: '../../assets/images/olist_data_platform.png'
        },
        {
            phase: 'Ideia',
            title: 'A SOLUÇÃO',
            title2: 'LAKEHOUSE HÍBRIDO',
            description: 'Implementação de uma Arquitetura Medalhão com processamento incremental para máxima eficiência e resiliência operacional.',
            image: '../../assets/images/olist_data_platform.png'
        },
        {
            phase: 'Implementação',
            title: 'TECH STACK',
            title2: 'ENGENHARIA DE ELITE',
            description: 'Pipeline orquestrado com dbt, Python e PostgreSQL, utilizando Docker para portabilidade e CI/CD para qualidade garantida.',
            image: '../../assets/images/olist_data_platform.png'
        }
    ],
    sections: [
        {
            title: "Plataforma de Dados Olist",
            paragraphs: [
                "Este projeto demonstra a construção de uma fundação confiável para inteligência de e-commerce. O desafio central foi superar as limitações do processamento em lote tradicional, criando um sistema inerentemente autorregenerativo e idempotente.",
                "Utilizando uma **Arquitetura Medalhão**, os dados são promovidos sistematicamente desde a captura bruta (Inbound) até a entrega de métricas prontas para o negócio (Warehouse)."
            ]
        },
        {
            title: "Resiliência e Performance",
            paragraphs: [
                "A implementação de **Ingestão Incremental Inteligente** reduziu em 90% o tempo de processamento ao focar apenas em novos registros. A auditabilidade de ponta a ponta garante que cada KPI possa ser rastreado até sua origem CSV.",
                "O sistema foi projetado para falhar com segurança (Graceful Failure), garantindo que execuções parciais não corrompam os dados finais através de segurança transacional e lógica de idempotência."
            ]
        },
        {
            title: "Stack e Qualidade",
            paragraphs: [
                "A stack tecnológica combina a flexibilidade do **Python** e **Pandas** com o poder transformador do **dbt**. O ambiente é totalmente conteinerizado com **Docker**, facilitando o deploy e a escalabilidade.",
                "A qualidade é um pilar central, com **80%+ de cobertura de código** e gates automatizados de linting e testes unitários integrados via GitHub Actions."
            ],
            tech: [
                { name: "Python", icon: "python" },
                { name: "dbt", icon: "dbt" },
                { name: "Docker", icon: "docker" },
                { name: "PostgreSQL", icon: "postgresql" },
                { name: "Pandas", icon: "pandas" }
            ]
        }
    ]
};
