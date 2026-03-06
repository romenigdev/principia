import Image from 'next/image';
import Link from 'next/link';
import { SectionTitle } from '@/components/SectionTitle';
import { blogItems, navItems, portfolioItems, services } from '@/content/site';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Birô Principia',
  description: 'Birô editorial focado em material didático, diagramação e revisão técnica.',
  url: 'https://www.exemplo.com.br',
  logo: 'https://www.exemplo.com.br/logo_principia.png',
};

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

      <header className="header">
        <div className="container nav">
          <a href="#inicio" className="brand" aria-label="Página inicial Birô Principia">
            <Image src="/logo_principia.png" alt="Logotipo Birô Principia" width={220} height={68} priority />
          </a>

          <nav aria-label="Navegação principal">
            <ul className="menu">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <a className="btn primary navCta" href="#contato">
            Orçamento
          </a>
        </div>
      </header>

      <section id="inicio" className="hero container">
        <div>
          <span className="eyebrow">Birô editorial para materiais didáticos</span>
          <h1>Site inicial moderno, rápido e pronto para evoluir com portfólio e blog.</h1>
          <p>
            Estrutura pensada para subir no GitHub e publicar na Vercel com alto desempenho, foco mobile e base
            preparada para integração com CMS e automações futuras.
          </p>

          <div className="heroActions">
            <a className="btn primary" href="#contato">
              Solicitar orçamento
            </a>
            <a className="btn ghost" href="#portfolio">
              Ver galeria
            </a>
          </div>

          <div className="quickInfo">
            <span>✓ Responsivo (celular e desktop)</span>
            <span>✓ Estrutura pronta para CMS</span>
            <span>✓ SEO inicial implementado</span>
          </div>
        </div>

        <aside className="heroCard" aria-label="Resumo técnico da versão inicial">
          <h2>Base técnica da versão inicial</h2>
          <p>
            Projeto desenvolvido em Next.js com TypeScript, arquitetura modular de conteúdo e componentes reutilizáveis.
          </p>
          <ul>
            <li>Seções institucionais prontas para edição de conteúdo</li>
            <li>Galeria de portfólio preparada para integração com mídia</li>
            <li>Bloco de blog inicial para evolução com posts dinâmicos</li>
            <li>Formulário pronto para integração com API de contato</li>
          </ul>
        </aside>
      </section>

      <section id="sobre" className="section container">
        <SectionTitle
          title="Apresentação do Birô"
          subtitle="Texto institucional inicial (frio) para você substituir por missão, história, diferenciais e área de atuação."
        />
        <div className="aboutGrid">
          <article className="card soft">
            <h3>Posicionamento</h3>
            <p>
              Produção editorial com foco em materiais didáticos claros, organizados e visualmente consistentes para
              diferentes públicos.
            </p>
          </article>
          <article className="card soft">
            <h3>Metodologia</h3>
            <p>
              Fluxo de trabalho baseado em planejamento, produção, revisão e entrega, garantindo previsibilidade e
              qualidade técnica.
            </p>
          </article>
          <article className="card soft">
            <h3>Escalabilidade</h3>
            <p>
              Estrutura pronta para expandir com páginas internas, gestão por CMS e publicação contínua de artigos no
              blog.
            </p>
          </article>
        </div>
      </section>

      <section id="servicos" className="section container">
        <SectionTitle
          title="Serviços"
          subtitle="Cards com descrição objetiva e espaço para detalhar escopo, prazo e formatos de entrega."
        />

        <div className="grid grid2">
          {services.map((service) => (
            <article key={service.title} className="card serviceCard">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="portfolio" className="section container">
        <SectionTitle
          title="Portfólio em formato de galeria"
          subtitle="Demonstração inicial para exibir documentos em Word/PDF, capas, projetos e amostras por categoria."
        />

        <div className="grid grid3">
          {portfolioItems.map((item, index) => (
            <article key={item.title} className="portfolioCard">
              <div className="thumb" aria-hidden>
                <span>{item.category}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <small>Projeto #{index + 1}</small>
            </article>
          ))}
        </div>
      </section>

      <section id="blog" className="section container">
        <SectionTitle
          title="Blog e conteúdo"
          subtitle="Área inicial para publicar artigos e fortalecer presença orgânica com SEO."
        />

        <div className="grid grid3">
          {blogItems.map((post) => (
            <article key={post.title} className="card blogCard">
              <span className="tag">{post.tag}</span>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <div className="metaRow">
                <small>{post.date}</small>
                <a href="#" aria-label={`Abrir artigo: ${post.title}`}>
                  Ler mais →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contato" className="section container contact">
        <div>
          <SectionTitle
            title="Contato e orçamento"
            subtitle="Formulário de exemplo pronto para integração com envio por e-mail ou CRM."
          />
          <div className="contactCtas">
            <a className="btn ghost" href="https://wa.me/5500000000000" target="_blank" rel="noreferrer">
              WhatsApp comercial
            </a>
            <Link className="btn ghost" href="mailto:contato@exemplo.com.br">
              E-mail institucional
            </Link>
          </div>
        </div>

        <form className="contactForm" aria-label="Formulário de orçamento">
          <label htmlFor="name">
            Nome
            <input id="name" type="text" placeholder="Seu nome" />
          </label>
          <label htmlFor="email">
            E-mail
            <input id="email" type="email" placeholder="seuemail@dominio.com" />
          </label>
          <label htmlFor="service">
            Serviço de interesse
            <input id="service" type="text" placeholder="Ex: diagramação de apostila" />
          </label>
          <label htmlFor="message">
            Mensagem
            <textarea id="message" rows={4} placeholder="Descreva seu projeto" />
          </label>
          <button type="button" className="btn primary">
            Enviar solicitação
          </button>
        </form>
      </section>

      <footer className="footer">
        <div className="container footerWrap">
          <Image src="/logo-biro-principia.svg" alt="Logotipo Birô Principia" width={180} height={56} />
          <p>© {new Date().getFullYear()} Birô Principia. Base inicial para evolução com CMS, blog e galeria.</p>
        </div>
      </footer>
    </main>
  );
}
