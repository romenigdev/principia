export type Service = {
  title: string;
  description: string;
  bullets: string[];
};

export type TeamMember = {
  name: string;
  role: string;
  credentials: string;
  areas: string[];
};

/* ── Tipos preservados para reativação futura ── */
// export type PortfolioItem = {
//   title: string;
//   category: string;
//   summary: string;
// };

// export type BlogPost = {
//   title: string;
//   excerpt: string;
//   date: string;
//   tag: string;
// };

export const navItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Quem Somos', href: '#quem-somos' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Contato', href: '#contato' },
];

export const teamMembers: TeamMember[] = [
  {
    name: 'Romenig da Silva Ribeiro',
    role: 'Editor e Especialista em Matemática e Computação',
    credentials: 'Licenciado em Matemática e Mestre em Ciência da Computação pelo Instituto de Matemática e Estatística da Universidade de São Paulo (IME-USP).',
    areas: ['Matemática', 'Computação', 'Pensamento Computacional'],
  },
  {
    name: 'Rodrigo Uchida Ichikawa',
    role: 'Editor e Especialista em Ciências da Natureza',
    credentials: 'Bacharel em Física e Pós-doutor em Física pelo Instituto de Pesquisas Energéticas e Nucleares da Universidade de São Paulo (IPEN/USP).',
    areas: ['Física', 'Química', 'Biologia', 'Ciências da Natureza'],
  },
];

export const contactInfo = {
  email: 'editorial@biroprincipia.com.br',
  domain: 'www.biroprincipia.com.br',
};

export const services: Service[] = [
  {
    title: 'Revisão Técnica',
    description:
      'Verificação rigorosa de conteúdo científico e pedagógico, garantindo precisão conceitual e adequação à BNCC.',
    bullets: ['Análise de precisão conceitual', 'Conformidade com a BNCC', 'Consistência terminológica'],
  },
  {
    title: 'Elaboração de Originais',
    description:
      'Produção autoral de textos didáticos com linguagem clara, progressão pedagógica e rigor científico.',
    bullets: ['Textos autorais para livros didáticos', 'Progressão de conteúdo estruturada', 'Adequação ao público-alvo'],
  },
  {
    title: 'Leitura de Provas',
    description:
      'Conferência final de materiais antes da publicação, assegurando a correção ortográfica, gramatical e de formatação.',
    bullets: ['Revisão ortográfica e gramatical', 'Verificação de formatação', 'Checklist de qualidade pré-publicação'],
  },
  {
    title: 'Leitura Técnica',
    description:
      'Análise especializada do conteúdo por profissionais da área, validando conceitos, fórmulas e abordagens didáticas.',
    bullets: ['Validação de conceitos e fórmulas', 'Análise de abordagem didática', 'Parecer técnico detalhado'],
  },
  {
    title: 'Leitura Crítica',
    description:
      'Avaliação aprofundada da coerência, clareza e eficácia pedagógica do material como um todo.',
    bullets: ['Análise de coerência global', 'Avaliação de clareza expositiva', 'Sugestões de melhoria pedagógica'],
  },
  {
    title: 'Roteiros de Conteúdo Digital',
    description:
      'Elaboração de roteiros para objetos educacionais digitais, videoaulas e materiais interativos.',
    bullets: ['Roteiros para videoaulas', 'Objetos educacionais digitais', 'Materiais interativos para EaD'],
  },
  {
    title: 'Itens, Rubricas e Avaliações',
    description:
      'Elaboração de itens com distratores plausíveis, rubricas de avaliação e instrumentos avaliativos alinhados à BNCC.',
    bullets: ['Itens com distratores fundamentados', 'Rubricas de avaliação por competência', 'Avaliações diagnósticas e formativas'],
  },
];

/* ── Dados preservados para reativação futura ── */

// export const portfolioItems: PortfolioItem[] = [
//   {
//     title: 'Coleção de Apostilas Integradas',
//     category: 'Apostila',
//     summary: 'Pacote modular para disciplinas regulares com padronização visual e sumário inteligente.',
//   },
//   {
//     title: 'Caderno de Atividades Práticas',
//     category: 'Caderno',
//     summary: 'Material com exercícios progressivos, gabarito e instruções para aplicação em sala.',
//   },
//   {
//     title: 'Guia Metodológico do Docente',
//     category: 'Guia',
//     summary: 'Documento de apoio ao professor com orientações por aula, objetivos e métricas.',
//   },
//   {
//     title: 'Módulo de Formação Técnica',
//     category: 'Treinamento',
//     summary: 'Conteúdo estruturado para cursos técnicos com atividades e estudos dirigidos.',
//   },
//   {
//     title: 'Coleção Preparatória por Eixos',
//     category: 'Preparatório',
//     summary: 'Conjunto de materiais por tema com progressão de dificuldade e revisão final.',
//   },
//   {
//     title: 'Série de Exercícios Digitais',
//     category: 'Digital',
//     summary: 'Pacote em PDF interativo para uso em desktop e celular com organização por trilhas.',
//   },
// ];

// export const blogItems: BlogPost[] = [
//   {
//     title: 'Como estruturar materiais didáticos para melhor retenção',
//     excerpt: 'Modelo base de organização de conteúdo para facilitar estudo e revisão.',
//     date: '10/03/2026',
//     tag: 'Processo Editorial',
//   },
//   {
//     title: 'Checklist de revisão antes da entrega final',
//     excerpt: 'Itens essenciais para reduzir retrabalho e garantir padrão técnico.',
//     date: '06/03/2026',
//     tag: 'Qualidade',
//   },
//   {
//     title: 'Boas práticas de diagramação para leitura em celular',
//     excerpt: 'Ajustes de tipografia, espaçamento e hierarquia para telas menores.',
//     date: '02/03/2026',
//     tag: 'UX Editorial',
//   },
// ];
