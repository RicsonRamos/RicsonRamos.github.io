/* ===== SMTP EMAIL SENDER - MODULAR CONTENT ===== */
const ProjectContent = {
    id: "smtp",
    github: "https://github.com/RicsonRamos/SMTP-Sender",

    title: "SMTP Email Sender",
    storyline: [
        {
            phase: 'Contexto',
            title: 'O DESAFIO',
            title2: 'AUTOMAÇÃO DE EMAIL',
            description: 'Criar um microserviço Python robusto para disparar emails HTML e texto em massa, com suporte a anexos.',
            image: '../../assets/images/windows.png'
        },
        {
            phase: 'Implementação',
            title: 'SMTP SEGURO',
            title2: 'DISPATCHER',
            description: 'Integração com servidores SMTP via TLS, leitura de credenciais via .env e suporte a templates HTML.',
            image: '../../assets/images/windows.png'
        },
        {
            phase: 'Deploy',
            title: 'DOCKER',
            title2: 'CONTAINERIZADO',
            description: 'Empacotado em Docker para execução isolada e reproduzível em qualquer ambiente, com configuração mínima.',
            image: '../../assets/images/windows.png'
        }
    ],
    sections: [
        {
            title: "O Problema do Envio em Massa",
            paragraphs: [
                "O **SMTP Email Sender** é uma ferramenta Python desenhada para resolver a necessidade de disparar emails HTML/Texto de forma programática e segura, sem depender de serviços externos caros.",
                "O foco principal foi a capacidade de gerenciar templates dinâmicos e anexos pesados de forma assíncrona, garantindo que o remitente não seja bloqueado por provedores."
            ]
        },
        {
            title: "Segurança e Configuração",
            paragraphs: [
                "Utilizamos o padrão de **variáveis de ambiente** para gerenciar credenciais SMTP, garantindo que chaves de acesso nunca sejam expostas. A comunicação é criptografada via TLS/SSL em todas as transações.",
                "O dispatcher suporta retry automático e controle de taxa (rate limiting), essencial para manter a reputação do domínio de envio."
            ]
        },
        {
            title: "Infraestrutura Containerizada",
            paragraphs: [
                "A aplicação foi 100% containerizada com **Docker**, permitindo que o microserviço seja subido instantaneamente em qualquer pipeline de CI/CD ou servidor de aplicação.",
                "Um simples arquivo de configuração YAML permite definir múltiplos servidores SMTP para failover automático, garantindo que a entrega de emails críticos nunca falhe."
            ],
            tech: [
                { name: "Python", icon: "python" },
                { name: "Docker", icon: "docker" },
                { name: "SMTP Protocol", icon: "postfix" }
            ]
        }
    ]
};
