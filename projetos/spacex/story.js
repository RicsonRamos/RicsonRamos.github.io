/* ===== SPACEX ETL PIPELINE - MODULAR CONTENT ===== */
const ProjectContent = {
    id: "spacex",
    title: "SpaceX ETL Pipeline",
    storyline: [
        {
            phase: 'Contexto',
            title: 'O DESAFIO',
            title2: 'DADOS ESPACIAIS',
            description: 'Transformar dados brutos de APIs da SpaceX e NASA em inteligência de negócio acionável, com qualidade e governança em cada camada.',
            image: '../../assets/images/windows.png'
        },
        {
            phase: 'Arquitetura',
            title: 'MEDALLION',
            title2: 'BRONZE > GOLD',
            description: 'Arquitetura em três camadas: Bronze (ingestão raw), Silver (limpeza e padronização via dbt) e Gold (KPIs prontos para BI).',
            image: '../../assets/images/windows.png'
        },
        {
            phase: 'Qualidade',
            title: 'CI/CD',
            title2: '82% COBERTURA',
            description: 'Pipeline com 58 testes automatizados rodando via GitHub Actions a cada push. Observabilidade completa com logs JSON estruturados e alertas de SLA.',
            image: '../../assets/images/windows.png'
        }
    ],
    fullContent: [
        "Este projeto implementa um pipeline de dados de produção que consome dados em tempo real das APIs públicas da SpaceX e NASA, transformando informações brutas em inteligência estratégica para análise de missões espaciais.",
        "A arquitetura segue o padrão **Medallion** (Bronze, Silver, Gold), garantindo rastreabilidade e governança completa. O Apache Airflow orquestra todas as tarefas, desde a ingestão até a disponibilização em dashboards Metabase.",
        "O stack tecnológico inclui **Python, Apache Airflow, dbt, PostgreSQL e Docker**, com toda a infraestrutura containerizada via Docker Compose para facilitar deploys reproduzíveis.",
        "O pipeline possui **82% de cobertura de testes** com 58 testes unitários rodando automaticamente via GitHub Actions em cada pull request, garantindo que nenhuma regressão chegue à produção.",
        "A camada Gold expõe KPIs como taxa de sucesso de lançamentos por foguete, densidade de missões por período e análise comparativa SpaceX vs NASA, todos disponíveis em dashboards interativos no Metabase."
    ]
};
