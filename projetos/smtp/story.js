/* ===== SMTP EMAIL SENDER - MODULAR CONTENT ===== */
const ProjectContent = {
    id: "smtp",
    title: "SMTP Email Sender",
    storyline: [
        {
            phase: 'Contexto',
            title: 'O DESAFIO',
            title2: 'AUTOMAÇÃO DE EMAIL',
            description: 'Criar um microserviço Python robusto para disparar emails HTML e texto em massa, com suporte a anexos e variáveis de ambiente seguras.',
            image: '../../assets/images/macropulse.jpg'
        },
        {
            phase: 'Implementação',
            title: 'SMTP SEGURO',
            title2: 'DISPATCHER',
            description: 'Integração com servidores SMTP via TLS, leitura de credenciais via .env, suporte a templates HTML e envio em bulk com retry automático.',
            image: '../../assets/images/macropulse.jpg'
        },
        {
            phase: 'Deploy',
            title: 'DOCKER',
            title2: 'CONTAINERIZADO',
            description: 'Empacotado em Docker para execução isolada e reproduzível em qualquer ambiente, com configuração mínima e zero dependências externas.',
            image: '../../assets/images/macropulse.jpg'
        }
    ],
    fullContent: [
        "O **SMTP Email Sender** é uma ferramenta Python de linha de comando e API para disparar emails HTML/Texto via protocolo SMTP com suporte completo a autenticação segura.",
        "O projeto suporta **attachments**, templates HTML dinâmicos, envio em bulk com controle de taxa (rate limiting) e logs detalhados de cada operação para auditoria.",
        "As credenciais são gerenciadas via **variáveis de ambiente** com suporte ao padrão `.env`, garantindo que nenhuma informação sensível seja exposta no código-fonte.",
        "A aplicação foi containerizada com **Docker**, permitindo execução em qualquer ambiente sem configuração adicional. Um simples `docker-compose up` é suficiente para subir a infraestrutura completa.",
        "O projeto serve como microserviço reutilizável, podendo ser integrado a pipelines de ETL, sistemas de alertas ou aplicações web que precisem de capacidade de notificação por email."
    ]
};
