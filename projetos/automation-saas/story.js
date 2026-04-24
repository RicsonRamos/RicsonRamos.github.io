/* ===== AUTOMATION SAAS MODULAR CONTENT ===== */
const ProjectContent = {
    id: "automation-saas",
    github: "https://github.com/RicsonRamos/automation_saas",

    title: "AutoProposta SaaS",
    storyline: [
        {
            phase: 'Contexto',
            title: 'O DESAFIO',
            title2: 'CAOS DOCUMENTAL',
            description: 'O processo manual de "copia e cola" em propostas comerciais causava erros críticos e perda de tempo para freelancers e pequenas agências.',
            image: '../../assets/images/automation_saas.png'
        },
        {
            phase: 'Ideia',
            title: 'A SOLUÇÃO',
            title2: 'CÉREBRO COMERCIAL',
            description: 'Desenvolver um ecossistema local que centraliza clientes, automatiza contratos e oferece um painel financeiro transparente.',
            image: '../../assets/images/automation_saas.png'
        },
        {
            phase: 'Implementação',
            title: 'TECH STACK',
            title2: 'SIMPLICIDADE & PODER',
            description: 'Integração de Streamlit para UI, docxtpl para renderização de documentos dinâmicos e SQLite para persistência leve.',
            image: '../../assets/images/automation_saas.png'
        }
    ],
    sections: [
        {
            title: "AutoProposta SaaS",
            paragraphs: [
                "O AutoProposta SaaS nasceu para ser o cérebro comercial de pequenos negócios. Ele não é apenas um gerador de documentos; é um ecossistema local que transforma conversas em contratos e contratos em receita.",
                "O principal objetivo foi eliminar o erro humano no fechamento de negócios, garantindo que propostas profissionais sejam geradas em segundos, mantendo toda a formatação e identidade visual da marca."
            ]
        },
        {
            title: "Funcionalidades de Gestão",
            paragraphs: [
                "A plataforma inclui um **Dashboard de Performance** que permite visualizar a saúde financeira instantaneamente, acompanhando receitas geradas e esperadas.",
                "O sistema de **Gestão de Clientes (CRM Light)** centraliza dados de PF e PJ, mantendo o histórico de contatos e documentos sempre acessíveis, enquanto o motor de automação cuida do ciclo de vida dos documentos."
            ]
        },
        {
            title: "Arquitetura Técnica",
            paragraphs: [
                "Desenvolvido com foco em **velocidade e robustez**, o projeto utiliza **Streamlit** para uma interface moderna e **docxtpl** (baseado em Jinja2) para injetar dados em arquivos Word.",
                "A persistência é garantida pelo **SQLite**, permitindo que o software rode localmente com 100% de privacidade para os dados do usuário."
            ],
            tech: [
                { name: "Python", icon: "python" },
                { name: "Streamlit", icon: "fastapi" }, // Usando fastapi icon como placeholder se streamlit não existir no simples-icons
                { name: "SQLite", icon: "postgresql" }, // Usando postgresql icon como placeholder
                { name: "Word Automation", icon: "python" }
            ]
        }
    ]
};
