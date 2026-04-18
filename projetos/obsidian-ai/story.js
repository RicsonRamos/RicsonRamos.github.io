/* ===== OBSIDIAN AI - MODULAR CONTENT ===== */
const ProjectContent = {
    id: "obsidian-ai",
    github: "https://github.com/RicsonRamos/obsidian-ai",

    title: "Obsidian AI — Second Brain",
    storyline: [
        {
            phase: 'Contexto',
            title: 'O DESAFIO',
            title2: 'CONHECIMENTO PERDIDO',
            description: 'Notas acumuladas ao longo de anos sem conexão entre si. Informações valiosas enterradas em arquivos Markdown sem possibilidade de recuperação inteligente.',
            image: '../../assets/images/windows.png'
        },
        {
            phase: 'Solução',
            title: 'LOCAL-FIRST',
            title2: 'LLM + RAG',
            description: 'Sistema de Second Brain que usa LLMs locais (Ollama) e nuvem (Gemini) para transformar notas Obsidian em grafos de conhecimento estruturados e consultáveis.',
            image: '../../assets/images/windows.png'
        },
        {
            phase: 'Resultado',
            title: 'KNOWLEDGE GRAPH',
            title2: 'PRIVACY FIRST',
            description: 'Processamento 100% local com Ollama. Sem dados saindo do seu computador. Integração nativa com o vault Obsidian, gerando automaticamente links entre conceitos.',
            image: '../../assets/images/windows.png'
        }
    ],
    fullContent: [
        "O **Obsidian AI** é um sistema de Second Brain *local-first* que utiliza Large Language Models para transformar notas brutas do Obsidian em um grafo de conhecimento inteligente e interconectado.",
        "O pipeline RAG (**Retrieval-Augmented Generation**) indexa todos os arquivos Markdown do vault, cria embeddings semânticos e permite consultas em linguagem natural com citação exata das fontes.",
        "O projeto suporta dois modos de operação: **local** (via Ollama, sem internet, privacidade total) e **nuvem** (via Google Gemini API, para capacidade máxima de raciocínio).",
        "A integração nativa com o Obsidian gera automaticamente arquivos `.md` de síntese entre conceitos relacionados, links bidirecionais e mapas de conhecimento prontos para serem visualizados no Graph View.",
        "Com foco em **privacidade e soberania de dados**, o sistema nunca envia suas notas para terceiros quando operado localmente, tornando-o ideal para profissionais que lidam com informações sensíveis."
    ]
};
