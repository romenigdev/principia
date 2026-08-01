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
  photo?: string;
  initials?: string;
};

export type SimulatorFeature = {
  title: string;
  description: string;
};

export type Shot = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
  /** 'wide' ocupa mais espaço na grade (captura de desktop). */
  format: 'wide' | 'phone';
};

export type Client = {
  name: string;
  logo: string;
  logoWidth: number;
  logoHeight: number;
  description: string;
  url?: string;
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
  { label: 'Serviços', href: '#servicos' },
  { label: 'Conteúdo digital', href: '#conteudo-digital' },
  { label: 'Quem somos', href: '#quem-somos' },
  // { label: 'Simuladores', href: '#simuladores' }, // seção removida por enquanto
  { label: 'Contato', href: '#contato' },
];

export const teamMembers: TeamMember[] = [
  {
    name: 'Romenig da Silva Ribeiro',
    role: 'Matemática e Computação',
    credentials:
      'Licenciado em Matemática e Mestre em Ciência da Computação pelo Instituto de Matemática e Estatística da Universidade de São Paulo (IME-USP). Mais de 10 anos de experiência como editor de livros didáticos de Matemática e conteúdo digital de Matemática.',
    areas: ['Matemática', 'Conteúdo Digital', 'Computação'],
    photo: '/romenig.png',
  },
  /* Ocultado por enquanto — Rodrigo não está atuando diretamente conosco no momento.
     Preservado para reativação futura:
  {
    name: 'Rodrigo Uchida Ichikawa',
    role: 'Ciências da Natureza',
    credentials:
      'Bacharel em Física e Pós-doutor pelo IPEN-USP. Atua na elaboração e revisão técnica de materiais didáticos de Física, Química e Biologia, com experiência em pesquisa aplicada e divulgação científica.',
    areas: ['Física', 'Química', 'Biologia'],
    initials: 'RI',
  },
  */
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
  {
    title: 'Objetos Digitais Interativos em HTML',
    description:
      'Concepção e desenvolvimento de objetos educacionais interativos em HTML — do desenho pedagógico ao código final, prontos para rodar em qualquer navegador.',
    bullets: [
      'Simulações, gráficos manipuláveis e calculadoras',
      'Atividades interativas com resposta imediata',
      'Entrega em HTML, sem plugins nem instalação',
    ],
  },
];

export const digitalContent = {
  eyebrow: 'Conteúdo digital interativo',
  title: 'Conteúdo que o aluno manipula, não apenas lê',
  subtitle:
    'Quando o conceito pede movimento, tentativa e erro, o material precisa deixar de ser página e virar ferramenta. A gente projeta e desenvolve o objeto digital inteiro — da ideia pedagógica ao HTML que roda no navegador do aluno.',
  showcase: {
    name: 'TucaProg',
    logo: '/tucaprog-logo.png',
    logoWidth: 2934,
    logoHeight: 424,
    chip: 'Estudo de caso',
    tagline: 'Programação visual em blocos para crianças',
    lead: 'Um tucano, seis blocos e um plano cartesiano. A criança encaixa os comandos, aperta Executar — e o Tuca voa pela tela deixando rastro. É a tartaruga do LOGO, de Seymour Papert, repaginada para o navegador: sem instalação, sem login e funcionando até offline.',
    features: [
      {
        title: 'Seis blocos, de propósito',
        description:
          'Um conjunto enxuto que a criança lê de uma vez e domina na primeira sessão: desenho, movimento, repetição e números.',
      },
      {
        title: 'A matemática fica visível',
        description:
          'Cada quadradinho vale uma unidade e o centro é o (0, 0). Ângulo, repetição e distância deixam de ser abstração e viram desenho.',
      },
      {
        title: 'Do celular ao computador',
        description:
          'A mesma experiência no telefone da criança e na máquina da escola, com blocos e palco lado a lado na tela grande.',
      },
      {
        title: 'Livre, leve e sem fricção',
        description:
          'Abre no navegador, instala como aplicativo e funciona sem internet. Gratuito e de código aberto.',
      },
    ] as SimulatorFeature[],
    shots: [
      {
        src: '/tucaprog-desktop.png',
        alt: 'TucaProg no computador, com os blocos de programação à esquerda e o desenho gerado pelo Tuca à direita.',
        width: 2000,
        height: 1600,
        caption: 'No computador — blocos e palco lado a lado',
        format: 'wide',
      },
      {
        src: '/tucaprog-blocos.png',
        alt: 'TucaProg no celular, mostrando o programa montado com blocos de repetição, movimento e cor.',
        width: 1170,
        height: 2532,
        caption: 'No celular — montando o programa',
        format: 'phone',
      },
      {
        src: '/tucaprog-desenho.png',
        alt: 'TucaProg no celular, exibindo a rosácea colorida desenhada pelo Tuca no plano cartesiano.',
        width: 1170,
        height: 2532,
        caption: 'O resultado — repetição vira rosácea',
        format: 'phone',
      },
    ] as Shot[],
    note: 'Desenvolvido para o Humor com Ciência.',
  },
};

export const clientsTitle = 'Clientes';
export const clientsSubtitle = 'Instituições e projetos que confiam no nosso trabalho.';

export const clients: Client[] = [
  {
    name: 'Humor com Ciência',
    logo: '/humor-com-ciencia.png',
    logoWidth: 1071,
    logoHeight: 173,
    description:
      'Divulgação científica e educação. Parceiro na produção de conteúdo digital e no desenvolvimento do TucaProg.',
    url: 'https://www.humorcomciencia.com',
  },
];

export const simulators = {
  eyebrow: 'Laboratório interativo',
  title: 'Física e Matemática que se manipulam.',
  lead: 'Do mesmo rigor técnico dos nossos materiais nasce uma família de simuladores para o Ensino Médio, alinhados à BNCC. Em vez de apenas ler sobre a função afim ou uma colisão, o estudante manipula: arrasta, prevê, executa e explica — e cada representação (algébrica, gráfica e tabular) se atualiza junto, na hora.',
  features: [
    {
      title: 'Alinhados à BNCC',
      description: 'Cada simulador mira habilidades específicas do Ensino Médio — da função afim às colisões e à conservação da energia.',
    },
    {
      title: 'Aprender fazendo',
      description: 'Missões guiadas no ciclo prever → executar → inspecionar → explicar, com devolutiva baseada em evidências.',
    },
    {
      title: 'Matemática de verdade',
      description: 'Fórmulas renderizadas com variáveis em itálico e frações em pé — nada de “a/b” improvisado.',
    },
    {
      title: 'Sem fricção',
      description: 'Roda 100% no navegador, sem instalação e sem login. Os dados ficam somente no dispositivo do estudante.',
    },
  ] as SimulatorFeature[],
  capabilitiesTitle: 'E não paramos nos simuladores',
  capabilitiesLead: 'A mesma equipe que edita também programa. Se o seu projeto pede um objeto digital sob medida, a gente desenha e desenvolve.',
  capabilities: [
    'Objetos educacionais digitais (OEDs)',
    'Figuras e gráficos interativos',
    'Calculadoras e visualizações',
    'Animações e videoaulas',
    'Ferramentas web sob medida',
  ],
};

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
