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
  { label: 'Quem somos', href: '#quem-somos' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Contato', href: '#contato' },
];

export const teamMembers: TeamMember[] = [
  {
    name: 'Romenig da Silva Ribeiro',
    role: 'Matemática e Computação',
    credentials: 'Licenciado em Matemática e Mestre em Ciência da Computação pelo IME-USP. Atua na elaboração e revisão de materiais didáticos de Matemática e Computação para a educação básica, com ênfase em pensamento computacional e programação.',
    areas: ['Matemática', 'Computação', 'Pensamento Computacional'],
  },
  {
    name: 'Rodrigo Uchida Ichikawa',
    role: 'Ciências da Natureza',
    credentials: 'Bacharel em Física e Pós-doutor pelo IPEN-USP. Atua na elaboração e revisão técnica de materiais didáticos de Física, Química e Biologia, com experiência em pesquisa aplicada e divulgação científica.',
    areas: ['Física', 'Química', 'Biologia'],
  },
];

export const contactInfo = {
  email: 'editorial@biroprincipia.com.br',
  domain: 'www.biroprincipia.com.br',
};

export const services: Service[] = [
  {
    title: 'Leitura Técnica',
    description:
      'Análise do conteúdo teórico por especialistas da área, verificando a precisão de conceitos, dados, fórmulas e nomenclatura.',
    bullets: ['Verificação de precisão conceitual', 'Adequação à BNCC e aos PCNs', 'Parecer técnico fundamentado'],
  },
  {
    title: 'Elaboração de Originais',
    description:
      'Autoria de textos didáticos, do planejamento editorial à entrega do manuscrito, com progressão pedagógica e rigor técnico.',
    bullets: ['Textos autorais para livros e coleções', 'Estruturação de conteúdo programático', 'Adequação de linguagem ao segmento'],
  },
  {
    title: 'Leitura de Provas',
    description:
      'Conferência final do material composto, cotejando provas com os originais para assegurar fidelidade de texto, imagens e formatação.',
    bullets: ['Cotejo com originais', 'Conferência de emendas e correções', 'Verificação de padrão tipográfico'],
  },
  {
    title: 'Edição',
    description:
      'Preparação e tratamento editorial do texto, garantindo consistência de estilo, padronização de linguagem e adequação às normas da editora.',
    bullets: ['Copidesque e preparação de texto', 'Padronização de estilo e linguagem', 'Adequação às normas editoriais'],
  },
  {
    title: 'Leitura Crítica',
    description:
      'Avaliação editorial do material como um todo — coerência, clareza, encadeamento dos conteúdos e eficácia da proposta pedagógica.',
    bullets: ['Análise de coerência e encadeamento', 'Avaliação da proposta pedagógica', 'Sugestões de reestruturação e melhoria'],
  },
  {
    title: 'Roteiros de Conteúdo Digital',
    description:
      'Elaboração de roteiros para objetos educacionais digitais, videoaulas e recursos interativos, com linguagem e estrutura adequadas ao meio.',
    bullets: ['Roteiros para videoaulas e animações', 'Objetos educacionais digitais (OEDs)', 'Estruturação de trilhas de aprendizagem'],
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
