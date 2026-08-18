import { EducationItem, Project } from "./types";

// TODO: substitua os campos "github" e "demo" pelos links reais de cada projeto.
// Enquanto forem `null`, os botões correspondentes ficam ocultos no card e no modal.
export const projects: Project[] = [
  {
    id: 1,
    featured: true,
    title: "Sistema Financeiro",
    description: "Sistema completo com dashboard, controle de receitas/despesas, relatórios e exportação PDF.",
    tags: ["React", "Node.js", "MySQL", "Express", "JWT"],
    image: "/projects/sistema-financeiro.png",
    problem: "A falta de controle financeiro pessoal e empresarial dificulta a tomada de decisões.",
    architecture: "Frontend em React integrado a uma API REST construída com Node.js e Express, utilizando banco de dados MySQL e autenticação segura com JWT.",
    challenges: "Estruturar a exportação eficiente de relatórios em PDF a partir de grandes volumes de dados de transações: resolvido com consultas já filtradas/indexadas (índice composto userId+date) e streaming do PDF direto para a resposta, sem bufferizar o documento inteiro em memória.",
    impact: "Proporcionou aos usuários uma visão clara de suas finanças com dashboards interativos e relatórios detalhados.",
    github: "https://github.com/luizhenriquefernandes20-svg/sistema-financeiro",
    demo: null,
  },
  {
    id: 2,
    featured: true,
    title: "Sistema de Estoque",
    description: "Cadastro de produtos, controle de entrada/saída e relatórios detalhados.",
    tags: ["Python", "Flask", "SQLite", "HTML/CSS"],
    image: "/projects/sistema-estoque.png",
    problem: "Gestão manual de estoque causando perdas por produtos vencidos ou falta de mercadoria.",
    architecture: "Aplicação full-stack utilizando Python com o micro-framework Flask e SQLite para garantir leveza e facilidade de deploy.",
    challenges: "Manter a consistência dos dados de inventário durante atualizações simultâneas de entrada e saída: a solução foi usar UPDATE atômico no banco (quantity = quantity + delta) em vez de ler e regravar em Python, eliminando a condição de corrida.",
    impact: "Digitalização e controle preciso do inventário, reduzindo erros de contagem e facilitando a gestão.",
    github: "https://github.com/luizhenriquefernandes20-svg/sistema-estoque",
    demo: null,
  },
  {
    id: 3,
    title: "API REST",
    description: "API REST completa com arquitetura MVC, documentação Swagger e conteinerização Docker.",
    tags: ["Node.js", "Docker", "Swagger", "MVC", "JWT"],
    image: "/projects/api-rest.png",
    problem: "Necessidade de um backend escalável e bem documentado para servir múltiplos clientes (web e mobile).",
    architecture: "Arquitetura MVC garantindo separação de responsabilidades. Autenticação JWT e infraestrutura empacotada com Docker.",
    challenges: "Implementar uma documentação interativa e sempre atualizada (Swagger) sem poluir demasiadamente o código das rotas: resolvido gerando o spec OpenAPI a partir de anotações JSDoc nas próprias rotas, então documentação e código nunca ficam dessincronizados.",
    impact: "Facilitou a integração por times de frontend e terceiros através de rotas seguras e documentação clara.",
    github: "https://github.com/luizhenriquefernandes20-svg/api-rest-tasks",
    demo: null,
  },
  {
    id: 4,
    title: "Dashboard Administrativo",
    description: "Painel administrativo com gráficos em tempo real, gestão de usuários e permissões.",
    tags: ["React", "Recharts", "Node.js", "RBAC"],
    image: "/projects/dashboard-admin.png",
    problem: "Dificuldade na visualização de métricas do sistema e gerenciamento de acessos da equipe.",
    architecture: "Frontend em React consumindo dados via WebSockets para gráficos em tempo real (Recharts). Sistema de controle de acesso baseado em roles (RBAC).",
    challenges: "Renderizar grandes conjuntos de dados em gráficos em tempo real sem comprometer a performance no navegador: resolvido com uma janela deslizante de tamanho fixo no cliente e o servidor transmitindo só o ponto novo a cada tick, nunca o histórico inteiro.",
    impact: "Visibilidade em tempo real do estado do sistema e delegação segura de permissões administrativas.",
    github: "https://github.com/luizhenriquefernandes20-svg/dashboard-admin",
    demo: null,
  },
  {
    id: 5,
    title: "Spotify Web Player",
    description: "Interface web responsiva com pesquisa de músicas, player customizado e consumo da API oficial do Spotify.",
    tags: ["React", "TypeScript", "Spotify API", "OAuth/PKCE"],
    image: "/projects/spotify-web-player.png",
    problem: "Criar uma interface própria, fluida e bem projetada para navegar e tocar músicas usando os dados reais do Spotify.",
    architecture: "React com TypeScript e integração direta com a Web API e o Web Playback SDK do Spotify via OAuth 2.0 (Authorization Code + PKCE), sem backend.",
    challenges: "Lidar com a autenticação OAuth do Spotify e o gerenciamento de estado entre dois motores de reprodução: resolvido detectando contas não-Premium (que não suportam o Web Playback SDK) e caindo automaticamente para prévias de 30s, com o estado de reprodução centralizado para refletir corretamente qual faixa toca em qual modo.",
    impact: "Interface moderna e responsiva demonstrando forte habilidade em UI/UX e consumo de APIs externas de terceiros.",
    github: "https://github.com/luizhenriquefernandes20-svg/spotify-web-player",
    demo: null,
  },
  {
    id: 6,
    title: "Chat em Tempo Real",
    description: "Aplicação de chat com salas privadas, mensagens instantâneas e notificações baseadas em WebSockets.",
    tags: ["React", "Node.js", "WebSocket", "Socket.io"],
    image: "/projects/chat-tempo-real.png",
    problem: "Comunicação síncrona e instantânea exigindo baixa latência, diferente do modelo tradicional HTTP request-response.",
    architecture: "Servidor Node.js utilizando Socket.io para manter conexões bidirecionais contínuas com clientes React.",
    challenges: "Gerenciar conexões instáveis (o cliente ressincroniza sala, histórico e presença ao reconectar) e o estado das salas de forma distribuída caso o servidor escale — resolvido com suporte opcional a adapter Redis via Pub/Sub.",
    impact: "Comunicação fluida em tempo real simulando a experiência de grandes plataformas de mensageria.",
    github: "https://github.com/luizhenriquefernandes20-svg/chat-tempo-real",
    demo: null,
  },
];

export const education: EducationItem[] = [
  {
    year: "2024 — 2026",
    title: "Desenvolvimento de Software",
    institution: "Instituição de Ensino Superior",
    type: "degree",
    detail: "Curso Superior · Previsão de conclusão: 2026",
  },
  {
    year: "2024",
    title: "Trilha Node.js, Next.js & Docker",
    institution: "Cursos Livres e Bootcamps",
    type: "cert",
    detail: "Certificação em backend avançado, containers e automação",
  },
  {
    year: "2024",
    title: "Especialização em React & Ecossistema",
    institution: "Cursos Livres",
    type: "cert",
    detail: "Certificação em interfaces modernas, SPA e UI/UX",
  },
  {
    year: "2023",
    title: "Desenvolvimento Backend em Python",
    institution: "Cursos Livres",
    type: "cert",
    detail: "Certificação focada em APIs REST, Flask e FastAPI",
  },
  {
    year: "2023",
    title: "Banco de Dados & SQL",
    institution: "Cursos Livres",
    type: "course",
    detail: "Modelagem relacional, queries avançadas e performance",
  },
  {
    year: "2022",
    title: "Fundamentos: JavaScript & Git",
    institution: "Cursos Livres",
    type: "course",
    detail: "Lógica de programação, ES6+ e versionamento de código",
  },
];

export const contactInfo = {
  email: "luizhenriquefernandes20@gmail.com",
  whatsapp: "https://wa.me/5511975181445",
  linkedin: "https://www.linkedin.com/in/luiz-henrique-fernandes-da-silva-a583a5340/",
  github: "https://github.com/luizhenriquefernandes20-svg",
  // TODO: coloque seu currículo em PDF na pasta `public/` com o nome `cv.pdf`
  // e troque o valor abaixo para "/cv.pdf". Enquanto for `null`, o botão
  // "Baixar Currículo" fica oculto (mesmo padrão usado em `github`/`demo`).
  resume: null as string | null,
};

export const skillGroups: { label: string; items: string[] }[] = [
  { label: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "HTML/CSS"] },
  { label: "Backend", items: ["Node.js", "Express", "Python", "Flask"] },
  { label: "Banco de Dados", items: ["MySQL", "SQLite", "Modelagem Relacional"] },
  { label: "Ferramentas", items: ["Docker", "Git", "JWT", "Swagger", "WebSockets"] },
];
