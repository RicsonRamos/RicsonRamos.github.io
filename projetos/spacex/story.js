/* ===== SPACEX ETL PIPELINE - MODULAR CONTENT ===== */
const ProjectContent = {
    id: "spacex",
    github: "https://github.com/RicsonRamos/spacex_etl_pipeline",

    title: "SpaceX Production ETL Pipeline",
    storyline: [
        {
            phase: 'Contexto',
            title: 'O DESAFIO',
            title2: 'INGESTÃO COMPLEXA',
            description: 'Coletar e estruturar dados telemétricos e históricos de lançamentos da SpaceX e clima espacial da NASA em escala contínua.',
            image: '../../assets/images/spacexetl.jpg'
        },
        {
            phase: 'Arquitetura',
            title: 'ORQUESTRAÇÃO',
            title2: 'AIRFLOW + DBT',
            description: 'Orquestração de DAGs no Apache Airflow integradas a transformações dimensionais no dbt e banco PostgreSQL.',
            image: '../../assets/images/spacexetl.jpg'
        },
        {
            phase: 'Qualidade',
            title: 'BI & QUALIDADE',
            title2: 'DADOS CONFIÁVEIS',
            description: 'Camada analítica conectada ao Metabase com testes automatizados de dados e validação de cobertura via CI/CD.',
            image: '../../assets/images/spacexetl.jpg'
        }
    ],
    sections: [
        {
            title: "Engenharia de Dados em Escala",
            paragraphs: [
                "Pipelines de dados modernos exigem mais do que simples scripts de extração; exigem **idempotência, tolerância a falhas e observabilidade contínua**.",
                "O pipeline da SpaceX foi construído para demonstrar o padrão de produção corporativo na ingestão de eventos complexos da API pública da SpaceX correlacionados a fenômenos de clima espacial da NASA."
            ]
        },
        {
            title: "Orquestração com Apache Airflow & dbt",
            paragraphs: [
                "Utilizando o **Apache Airflow**, as DAGs controlam desde o agendamento da extração até a inicialização dos modelos de transformação dimensional executados no **dbt**.",
                "Essa arquitetura desacopla totalmente a orquestração do processamento, permitindo reprocessamentos parciais e auditoria de cada lote de carga."
            ]
        },
        {
            title: "Camada de Apresentação e CI/CD",
            paragraphs: [
                "Os dados consolidados alimentam dashboards no **Metabase**, oferecendo visões analíticas de taxa de sucesso de lançamentos, reutilização de foguetes e correlação com anomalias solares.",
                "O repositório possui suíte de testes automatizada e pipeline de CI no **GitHub Actions** para validação antes de cada deploy."
            ],
            tech: [
                { name: "Python", icon: "python" },
                { name: "Airflow", icon: "apacheairflow" },
                { name: "dbt", icon: "dbt" },
                { name: "PostgreSQL", icon: "postgresql" },
                { name: "Docker", icon: "docker" }
            ]
        }
    ]
};
