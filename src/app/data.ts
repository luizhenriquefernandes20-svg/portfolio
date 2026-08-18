import type { EducationItem, Project } from "./types";

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
    architecture:
      "Frontend em React integrado a uma API REST construída com Node.js e Express, utilizando banco de dados MySQL e autenticação segura com JWT.",
    challenges:
      "Estruturar a exportação eficiente de relatórios em PDF a partir de grandes volumes de dados de transações: resolvido com consultas já filtradas/indexadas (índice composto userId+date) e streaming do PDF direto para a resposta, sem bufferizar o documento inteiro em memória.",
    impact:
      "Proporcionou aos usuários uma visão clara de suas finanças com dashboards interativos e relatórios detalhados.",
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
    architecture:
      "Aplicação full-stack utilizando Python com o micro-framework Flask e SQLite para garantir leveza e facilidade de deploy.",
    challenges:
      "Manter a consistência dos dados de inventário durante atualizações simultâneas de entrada e saída: a solução foi usar UPDATE atômico no banco (quantity = quantity + delta) em vez de ler e regravar em Python, eliminando a condição de corrida.",
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
    architecture:
      "Arquitetura MVC garantindo separação de responsabilidades. Autenticação JWT e infraestrutura empacotada com Docker.",
    challenges:
      "Implementar uma documentação interativa e sempre atualizada (Swagger) sem poluir demasiadamente o código das rotas: resolvido gerando o spec OpenAPI a partir de anotações JSDoc nas próprias rotas, então documentação e código nunca ficam dessincronizados.",
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
    architecture:
      "Frontend em React consumindo dados via WebSockets para gráficos em tempo real (Recharts). Sistema de controle de acesso baseado em roles (RBAC).",
    challenges:
      "Renderizar grandes conjuntos de dados em gráficos em tempo real sem comprometer a performance no navegador: resolvido com uma janela deslizante de tamanho fixo no cliente e o servidor transmitindo só o ponto novo a cada tick, nunca o histórico inteiro.",
    impact: "Visibilidade em tempo real do estado do sistema e delegação segura de permissões administrativas.",
    github: "https://github.com/luizhenriquefernandes20-svg/dashboard-admin",
    demo: null,
  },
  {
    id: 5,
    title: "Spotify Web Player",
    description:
      "Interface web responsiva com pesquisa de músicas, player customizado e consumo da API oficial do Spotify.",
    tags: ["React", "TypeScript", "Spotify API", "OAuth/PKCE"],
    image: "/projects/spotify-web-player.png",
    problem:
      "Criar uma interface própria, fluida e bem projetada para navegar e tocar músicas usando os dados reais do Spotify.",
    architecture:
      "React com TypeScript e integração direta com a Web API e o Web Playback SDK do Spotify via OAuth 2.0 (Authorization Code + PKCE), sem backend.",
    challenges:
      "Lidar com a autenticação OAuth do Spotify e o gerenciamento de estado entre dois motores de reprodução: resolvido detectando contas não-Premium (que não suportam o Web Playback SDK) e caindo automaticamente para prévias de 30s, com o estado de reprodução centralizado para refletir corretamente qual faixa toca em qual modo.",
    impact:
      "Interface moderna e responsiva demonstrando forte habilidade em UI/UX e consumo de APIs externas de terceiros.",
    github: "https://github.com/luizhenriquefernandes20-svg/spotify-web-player",
    demo: null,
  },
  {
    id: 6,
    title: "Chat em Tempo Real",
    description: "Aplicação de chat com salas privadas, mensagens instantâneas e notificações baseadas em WebSockets.",
    tags: ["React", "Node.js", "WebSocket", "Socket.io"],
    image: "/projects/chat-tempo-real.png",
    problem:
      "Comunicação síncrona e instantânea exigindo baixa latência, diferente do modelo tradicional HTTP request-response.",
    architecture:
      "Servidor Node.js utilizando Socket.io para manter conexões bidirecionais contínuas com clientes React.",
    challenges:
      "Gerenciar conexões instáveis (o cliente ressincroniza sala, histórico e presença ao reconectar) e o estado das salas de forma distribuída caso o servidor escale — resolvido com suporte opcional a adapter Redis via Pub/Sub.",
    impact: "Comunicação fluida em tempo real simulando a experiência de grandes plataformas de mensageria.",
    github: "https://github.com/luizhenriquefernandes20-svg/chat-tempo-real",
    demo: null,
  },
  {
    id: 7,
    featured: true,
    title: "Capannone Pizzaria Artesanal",
    description:
      "Site institucional real para pizzaria em Jarinu-SP: cardápio completo, pedidos via WhatsApp e SEO local.",
    tags: ["HTML", "CSS", "JavaScript", "SEO Local", "Cliente Real"],
    image: "/projects/capannone-pizzaria.png",
    problem:
      "Negócio local sem presença digital perde vendas: o cliente não encontra cardápio, endereço ou forma de pedir sem precisar telefonar.",
    architecture:
      "Site estático (sem build, sem dependências) com dados estruturados Schema.org (Restaurant) para SEO local, e um cardápio real com mais de 60 sabores extraídos do cardápio oficial do estabelecimento.",
    challenges:
      "Organizar um cardápio real e extenso (pizzas salgadas, doces, bordas, bebidas) de forma navegável, com todos os botões de pedido apontando direto para o WhatsApp real da pizzaria.",
    impact:
      "Projeto de cliente real (freelance): endereço, telefone e cardápio são verdadeiros, pronto para publicação após os ajustes finais do cliente.",
    github: "https://github.com/luizhenriquefernandes20-svg/capannone-pizzaria",
    demo: null,
  },
  {
    id: 8,
    featured: true,
    title: "Hazuki Sushi",
    description:
      "Site real para restaurante japonês em Jundiaí, com narrativa visual guiada por scroll no lugar do menu tradicional.",
    tags: ["HTML", "CSS", "JavaScript", "UI/UX", "Cliente Real"],
    image: "/projects/hazuki-sushi.png",
    problem:
      "O cliente precisava de uma identidade visual diferenciada, mas com todos os dados de contato reais e verificados — sem inventar nada que pudesse gerar prejuízo para o negócio.",
    architecture:
      "Página única com narrativa linear guiada por um trilho de progresso lateral (em vez de menu tradicional), tema escuro e tipografia serifada. Dados reais conferidos em fontes públicas e carregados via Schema.org.",
    challenges:
      "Separar o que era real do que era placeholder de forma honesta: horários sem fonte confirmada aparecem como 'a confirmar' na própria tela, e o cardápio de exemplo tem aviso visível — em vez de inventar informação que o cliente teria que corrigir depois.",
    impact:
      "Projeto de cliente real (freelance) em construção, com cuidado explícito de integridade de informação num contexto onde erro tem custo real para o dono do negócio.",
    github: "https://github.com/luizhenriquefernandes20-svg/hazuki-sushi",
    demo: null,
  },
  {
    id: 9,
    title: "Kiln — Console de Inferência",
    description:
      "Dashboard denso em dados para monitorar uma plataforma fictícia de inferência de IA, com gráficos SVG feitos à mão.",
    tags: ["HTML", "CSS", "JavaScript", "SVG", "Design System"],
    image: "/projects/dashboard-kiln.png",
    problem:
      "Interfaces de operação (o painel que alguém abre de madrugada para decidir se precisa agir) costumam poluir o canal de cor com marca e decoração, fazendo o alerta real se perder no ruído visual.",
    architecture:
      "Site estático sem dependências nem build: os gráficos e sparklines são desenhados à mão em SVG pelo próprio script, sem nenhuma biblioteca de charts.",
    challenges:
      "Definir uma paleta onde a cor só é usada para codificar dado ou estado, nunca decoração — validada nos dois temas com checagem de contraste e de separação para daltonismo.",
    impact:
      "Demonstra raciocínio de design system aplicado (paleta com propósito, acessibilidade de cor, hierarquia de leitura) além da implementação, útil para qualquer dashboard denso em dados.",
    github: "https://github.com/luizhenriquefernandes20-svg/dashboard-kiln",
    demo: null,
  },
  {
    id: 10,
    title: "Orbit — Interface estilo Discord",
    description:
      "Recriação funcional da interface de um chat em comunidade — servidores, canais e mensagens com estado real — com marca e ícones originais.",
    tags: ["HTML", "CSS", "JavaScript", "Acessibilidade", "UI/UX"],
    image: "/projects/orbit-chat-ui.png",
    problem:
      "Entender o que faz uma interface de chat complexa funcionar de verdade não é só copiar cores — é reproduzir agrupamento de mensagens, presença e microinterações que a maioria das recriações ignora.",
    architecture:
      "Site estático (HTML/CSS/JS puro, sem build). O estado da conversa é real: enviar, editar, reagir e responder mensagens altera os mesmos dados que a tela lê de volta.",
    challenges:
      "Replicar comportamentos finos como agrupamento de mensagens por tempo, respostas encenadas com indicador de digitação e navegação 100% por teclado com foco visível e leitura de tela corretos.",
    impact:
      "Mostra capacidade de dissecar e reconstruir uma interface complexa do zero, com atenção a detalhes de estado e acessibilidade que só aparecem em uso real, não em captura de tela.",
    github: "https://github.com/luizhenriquefernandes20-svg/orbit-chat-ui",
    demo: null,
  },
];

export const education: EducationItem[] = [
  {
    year: "2024 — 2026",
    title: "Tecnologia em Sistemas Embarcados",
    institution: "Fatec Jundiaí",
    type: "degree",
    detail: "Curso Superior · Previsão de conclusão: 2026",
  },
  {
    year: "2022 — 2024",
    title: "Técnico em Edificações",
    institution: "ETEC Vasco Antonio Venchiarutti",
    type: "degree",
    detail: "Ensino Médio + Técnico · Concluído em novembro de 2024",
  },
  {
    year: "2025",
    title: "Python",
    institution: "Certificação",
    type: "cert",
    detail: "8 horas",
  },
  {
    year: "2025",
    title: "Introdução à Ciência de Dados",
    institution: "Certificação",
    type: "cert",
    detail: "6 horas",
  },
  {
    year: "2025",
    title: "Google: Inteligência Artificial e Produtividade",
    institution: "Certificação",
    type: "cert",
    detail: "2 horas",
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
  location: "Jundiaí, SP",
  resume: "/cv.pdf" as string | null,
};

export const skillGroups: { label: string; items: string[] }[] = [
  { label: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "HTML/CSS"] },
  { label: "Backend", items: ["Node.js", "Express", "Python", "Flask"] },
  { label: "Banco de Dados", items: ["MySQL", "SQLite", "Modelagem Relacional"] },
  { label: "Ferramentas", items: ["Docker", "Git", "JWT", "Swagger", "WebSockets"] },
  { label: "Embarcados & IoT", items: ["ESP32", "Sensores", "Wi-Fi", "Monitoramento"] },
  { label: "Adicionais", items: ["Inteligência Artificial", "Ciência de Dados"] },
];
