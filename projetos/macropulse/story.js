/* ===== MACROPULSE MODULAR CONTENT ===== */
const ProjectContent = {
    id: "macropulse",
    github: "https://github.com/RicsonRamos/macropulse",

    title: "MacroPulse Intelligence Platform",
    storyline: [
        {
            phase: 'Contexto',
            title: 'O DESAFIO',
            title2: 'SINAIS DISPERSOS',
            description: 'A fragmentação e assincronia de indicadores macroeconômicos globais dificultavam a tomada de decisão ágil para alocação de capital.',
            image: '../../assets/images/macropulse.webp'
        },
        {
            phase: 'Ideia',
            title: 'A SOLUÇÃO',
            title2: 'TERMINAL UNIFICADO',
            description: 'Consolidar indicadores de mercado, taxas de juros, inflação e atividade real em um motor único com pontuação dinâmica de risco.',
            image: '../../assets/images/macropulse.webp'
        },
        {
            phase: 'Implementação',
            title: 'TECH STACK',
            title2: 'ALTA PERFORMANCE',
            description: 'Backend assíncrono em FastAPI, pipelines de ingestão ETL automatizados e camada de dados otimizada para séries temporais.',
            image: '../../assets/images/macropulse.webp'
        }
    ],
    sections: [
        {
            title: "Inteligência Macroeconômica em Tempo Real",
            paragraphs: [
                "No cenário econômico moderno, a **velocidade da informação e a precisão do sinal** determinam a proteção de portfólios contra solavancos de mercado.",
                "O MacroPulse nasceu para transformar dados econômicos brutos e dispersos em índices acionáveis de regime de mercado e apetite a risco."
            ]
        },
        {
            title: "Arquitetura e Pipeline de Ingestão",
            paragraphs: [
                "Construído com pipelines modulares de extração e transformação em **Python**, o sistema padroniza séries temporais de fontes heterogêneas e armazena em banco relacional otimizado.",
                "A camada de serviço foi desenvolvida com **FastAPI**, fornecendo endpoints REST assíncronos de ultra-baixa latência para consumo de dados e alertas automatizados."
            ]
        },
        {
            title: "Métricas de Decisão e Governança",
            paragraphs: [
                "O motor calcula dinamicamente scores de risco e correlações entre classes de ativos, servindo como uma camada única de decisão para gestores de risco e analistas quantitativos.",
                "Todo o código segue padrões de tipagem estrita, separação em serviços de domínio e empacotamento pronto para nuvem."
            ],
            tech: [
                { name: "Python", icon: "python" },
                { name: "FastAPI", icon: "fastapi" },
                { name: "PostgreSQL", icon: "postgresql" },
                { name: "Docker", icon: "docker" }
            ]
        }
    ]
};
