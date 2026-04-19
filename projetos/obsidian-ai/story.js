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
            description: 'Notas acumuladas ao longo de anos sem conexão entre si. Informações valiosas enterradas em arquivos Markdown.',
            image: '../../assets/images/windows.png'
        },
        {
            phase: 'Solução',
            title: 'LOCAL-FIRST',
            title2: 'LLM + RAG',
            description: 'Sistema que usa LLMs locais e nuvem para transformar notas Obsidian em grafos de conhecimento estruturados.',
            image: '../../assets/images/windows.png'
        },
        {
            phase: 'Resultado',
            title: 'KNOWLEDGE GRAPH',
            title2: 'PRIVACY FIRST',
            description: 'Processamento 100% local com Ollama. Sem dados saindo do seu computador. Integração nativa com o vault Obsidian.',
            image: '../../assets/images/windows.png'
        }
    ],
    sections: [
        {
            title: "O Problema do Excesso de Informação",
            paragraphs: [
                "Nossas notas digitais costumam ser um cemitério de ideias. O **Obsidian AI** nasceu da frustração de ter mil arquivos Markdown e não conseguir encontrar conexões semânticas entre eles de forma automática.",
                "O objetivo era criar um mentor digital que conhecesse cada palavra escrita nas minhas notas de estudo e pesquisa, respeitando a privacidade total."
            ]
        },
        {
            title: "Arquitetura Local-First",
            paragraphs: [
                "Implementamos um pipeline **RAG (Retrieval-Augmented Generation)** que roda inteiramente no seu hardware. Utilizamos o **Ollama** para inferência de modelos como Llama 3 e Mistral.",
                "O sistema cria um banco de dados de vetores local, permitindo que você 'converse' com suas notas em linguagem natural, recebendo respostas com citações diretas dos seus arquivos."
            ]
        },
        {
            title: "Resultados e Stack",
            paragraphs: [
                "A solução permite a geração automática de resumos, identificação de links faltantes e a criação de novos arquivos de síntese baseados em temas recorrentes no seu vault.",
                "A stack prioriza a soberania de dados, garantindo que sua propriedade intelectual nunca saia do seu computador."
            ],
            tech: [
                { name: "Python", icon: "python" },
                { name: "Ollama", icon: "ollama" },
                { name: "Gemini API", icon: "google-gemini" },
                { name: "LangChain", icon: "langchain" }
            ]
        }
    ]
};
