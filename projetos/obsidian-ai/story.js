/* ===== OBSIDIAN AI - MODULAR CONTENT ===== */
const ProjectContent = {
    id: "obsidian-ai",
    github: "https://github.com/RicsonRamos/obsidian-ai",

    title: "Obsidian AI — Second Brain",
    storyline: [
        {
            phase: 'Contexto',
            title: 'O DESAFIO',
            title2: 'CONHECIMENTO DISPERSO',
            description: 'Milhares de notas analíticas e documentos isolados sem conexões semânticas, dificultando a recuperação rápida de insights.',
            image: '../../assets/images/obsidianai.png'
        },
        {
            phase: 'Solução',
            title: 'LOCAL-FIRST',
            title2: 'LLM + RAG HÍBRIDO',
            description: 'Arquitetura que utiliza modelos de linguagem locais (Ollama) e Google Gemini para transformar notas em grafos de conhecimento estruturados.',
            image: '../../assets/images/obsidianai.png'
        },
        {
            phase: 'Resultado',
            title: 'KNOWLEDGE GRAPH',
            title2: 'PRIVACIDADE & CONTROLE',
            description: 'Interface web moderna conectada a um motor de pesquisa semântica que opera sobre os vaults locais do Obsidian.',
            image: '../../assets/images/obsidianai.png'
        }
    ],
    sections: [
        {
            title: "Inteligência Estruturada para Conhecimento",
            paragraphs: [
                "Profissionais analíticos geram diariamente volumes massivos de notas técnicas, briefings e documentação. Sem um mecanismo inteligente de vinculação, esse capital intelectual se perde.",
                "O Obsidian AI foi projetado como um sistema de **Segundo Cérebro Autônomo**, capaz de ler bases textuais em Markdown e inferir relacionamentos conceituais automaticamente."
            ]
        },
        {
            title: "Arquitetura Híbrida: Local-First e Nuvem",
            paragraphs: [
                "Para proteger a privacidade de informações confidenciais, a ingestão e extração de entidades operam prioritariamente com modelos locais via **Ollama**, com opção de enriquecimento semântico com a API do **Google Gemini**.",
                "O motor constrói um grafo de entidades e tópicos que é gravado de volta diretamente na estrutura nativa do vault do Obsidian, sem vendor lock-in."
            ]
        },
        {
            title: "Interface de Interação e Visualização",
            paragraphs: [
                "Além da integração de arquivo, o projeto dispõe de uma interface desenvolvida em **Next.js e React** que permite chat contextual e navegação interativa pelas conexões do grafo.",
                "Demonstra a convergência entre **Sistemas de Informação, Engenharia de Software Moderna e Inteligência Artificial Generativa**."
            ],
            tech: [
                { name: "Python", icon: "python" },
                { name: "Ollama", icon: "python" },
                { name: "Next.js", icon: "javascript" },
                { name: "Gemini", icon: "googlegemini" }
            ]
        }
    ]
};
