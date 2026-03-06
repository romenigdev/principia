export type Service = {
  title: string;
  description: string;
  bullets: string[];
};

export type PortfolioItem = {
  title: string;
  category: string;
  summary: string;
};

export type BlogPost = {
  title: string;
  excerpt: string;
  date: string;
  tag: string;
};

export const navItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contato', href: '#contato' },
];

export const services: Service[] = [
  {
    title: 'Material Didático Completo',
    description:
      'Produção de apostilas, cadernos e conteúdos educacionais com estrutura pedagógica consistente.',
    bullets: ['Planejamento editorial', 'Organização de capítulos', 'Entrega em Word e PDF'],
  },
  {
    title: 'Diagramação e Design Editorial',
    description:
      'Projeto visual moderno e legível para impressão e tela, priorizando leitura confortável em qualquer dispositivo.',
    bullets: ['Grid responsivo', 'Padronização visual', 'Aplicação de identidade da instituição'],
  },
  {
    title: 'Revisão Técnica e Linguística',
    description:
      'Revisão ortográfica, gramatical e técnica para elevar a qualidade final do material antes da publicação.',
    bullets: ['Norma culta', 'Consistência terminológica', 'Checklist de qualidade'],
  },
  {
    title: 'Apoio de Produção',
    description:
      'Acompanhamento do fluxo de criação com cronograma, versionamento e comunicação centralizada.',
    bullets: ['Gestão de versões', 'Prazos e marcos', 'Suporte até entrega final'],
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Coleção de Apostilas Integradas',
    category: 'Apostila',
    summary: 'Pacote modular para disciplinas regulares com padronização visual e sumário inteligente.',
  },
  {
    title: 'Caderno de Atividades Práticas',
    category: 'Caderno',
    summary: 'Material com exercícios progressivos, gabarito e instruções para aplicação em sala.',
  },
  {
    title: 'Guia Metodológico do Docente',
    category: 'Guia',
    summary: 'Documento de apoio ao professor com orientações por aula, objetivos e métricas.',
  },
  {
    title: 'Módulo de Formação Técnica',
    category: 'Treinamento',
    summary: 'Conteúdo estruturado para cursos técnicos com atividades e estudos dirigidos.',
  },
  {
    title: 'Coleção Preparatória por Eixos',
    category: 'Preparatório',
    summary: 'Conjunto de materiais por tema com progressão de dificuldade e revisão final.',
  },
  {
    title: 'Série de Exercícios Digitais',
    category: 'Digital',
    summary: 'Pacote em PDF interativo para uso em desktop e celular com organização por trilhas.',
  },
];

export const blogItems: BlogPost[] = [
  {
    title: 'Como estruturar materiais didáticos para melhor retenção',
    excerpt: 'Modelo base de organização de conteúdo para facilitar estudo e revisão.',
    date: '10/03/2026',
    tag: 'Processo Editorial',
  },
  {
    title: 'Checklist de revisão antes da entrega final',
    excerpt: 'Itens essenciais para reduzir retrabalho e garantir padrão técnico.',
    date: '06/03/2026',
    tag: 'Qualidade',
  },
  {
    title: 'Boas práticas de diagramação para leitura em celular',
    excerpt: 'Ajustes de tipografia, espaçamento e hierarquia para telas menores.',
    date: '02/03/2026',
    tag: 'UX Editorial',
  },
];
