/* ===== MACROPULSE MODULAR CONTENT ===== */
const ProjectContent = {
    id: "macropulse",
    title: "MacroPulse Intelligence",
    storyline: [
        {
            phase: 'Contexto',
            title: 'O DESAFIO',
            title2: 'MERCADO VOLÁTIL',
            description: 'A fragmentação de dados macroeconômicos dificultava a tomada de decisão em tempo real para fundos de investimento.',
            image: '../../assets/images/windows.png'
        },
        {
            phase: 'Ideia',
            title: 'A SOLUÇÃO',
            title2: 'CONSOLIDAÇÃO ALFA',
            description: 'Criar um terminal único que processa sinais de OSINT e indicadores técnicos em uma arquitetura de baixa latência.',
            image: '../../assets/images/windows.png'
        },
        {
            phase: 'Implementação',
            title: 'TECH STACK',
            title2: 'PERFORMANCE PURA',
            description: 'Utilização de Redis para cache de sinais e FastAPI para entrega assíncrona de métricas em milissegundos.',
            image: '../../assets/images/windows.png'
        }
    ],
    sections: [
        {
            title: "MacroPulse Intelligence",
            paragraphs: [
                "No cenário financeiro atual, a **velocidade da informação** é o diferencial entre o lucro e o prejuízo. O MacroPulse nasceu da necessidade de consolidar fontes heterogêneas de dados — desde feeds do Banco Central até menções monitoradas via OSINT em redes sociais.",
                "O principal desafio técnico foi a **baixa latência**. Processar 50 milhões de sinais diariamente exigiu uma arquitetura que não apenas recebesse os dados, mas que os filtrasse e categorizasse em tempo quase real usando pipelines de processamento assíncrono."
            ]
        },
        {
            title: "A Solução",
            paragraphs: [
                "A solução envolveu o desenvolvimento de um motor de ETL sob medida em **Python**, capaz de orquestrar centenas de web workers simultâneos. Utilizamos **FastAPI** para o backend, garantindo respostas rápidas e documentação automática via OpenAPI.",
                "Para a camada de persistência transitória, o **Redis** foi essencial, permitindo que os indicadores técnicos mais solicitados fossem servidos instantaneamente para a camada visual do terminal."
            ]
        },
        {
            title: "Tech Stack",
            paragraphs: [
                "Abaixo, apresentamos as tecnologias fundamentais que transformaram a latência de minutos em milissegundos, permitindo uma análise preditiva real em tempo de execução.",
                "O uso de conteinerização com **Docker** permitiu a escalabilidade horizontal de nossos pipelines de coleta de dados sem aumentar a sobrecarga de manutenção."
            ],
            tech: [
                { name: "Python", icon: "python" },
                { name: "FastAPI", icon: "fastapi" },
                { name: "Redis", icon: "redis" },
                { name: "PostgreSQL", icon: "postgresql" },
                { name: "Docker", icon: "docker" }
            ]
        }
    ]
};
