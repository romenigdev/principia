import Image from 'next/image';
import Link from 'next/link';
import { SectionTitle } from '@/components/SectionTitle';
import { MobileMenu } from '@/components/MobileMenu';
import { navItems, services, teamMembers, contactInfo } from '@/content/site';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Birô Principia',
  description:
    'Birô editorial especializado em revisão técnica, elaboração de originais e serviços editoriais para materiais didáticos de Ciências da Natureza, Matemática e Computação, alinhados à BNCC.',
  url: `https://${contactInfo.domain}`,
  logo: `https://${contactInfo.domain}/logo_principia.png`,
  email: contactInfo.email,
};

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

      <header className="header">
        <div className="container nav">
          <a href="#inicio" className="brand" aria-label="Página inicial Birô Principia">
            <Image src="/logo_com_branco.png" alt="Logotipo Birô Principia" width={200} height={60} priority />
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

          <MobileMenu navItems={navItems} />
        </div>
      </header>

      <section id="inicio" className="hero container">
        <div>
          <span className="eyebrow">Birô editorial especializado em materiais didáticos</span>
          <h1>Excelência editorial em Ciências da Natureza, Matemática e Computação</h1>
          <p>
            Com mais de 10 anos de experiência no mercado editorial educacional, o Birô Principia oferece serviços
            especializados de revisão técnica, elaboração de originais e produção de conteúdo didático alinhado à BNCC.
            Nossa equipe reúne formação acadêmica de ponta — do mestrado ao pós-doutorado — pela Universidade de São Paulo.
          </p>

          <div className="heroActions">
            <a className="btn primary" href="#contato">
              Solicitar orçamento
            </a>
          </div>

          <div className="quickInfo">
            <span>✓ Alinhamento à BNCC</span>
            <span>✓ +10 anos de experiência</span>
            <span>✓ Equipe com pós-doutorado (USP)</span>
          </div>
        </div>

        <aside className="heroCard" aria-label="Áreas de atuação">
          <h2>Áreas de atuação</h2>
          <p>
            Atuamos em todas as disciplinas de Ciências da Natureza e Exatas para a educação básica,
            com especialização nas seguintes áreas:
          </p>
          <ul>
            <li>Física — incluindo abordagens experimentais e conceituais</li>
            <li>Química — do ensino fundamental ao médio</li>
            <li>Biologia — ciências da vida e meio ambiente</li>
            <li>Matemática — do letramento ao pensamento algébrico</li>
            <li>Computação — pensamento computacional e programação</li>
          </ul>
        </aside>
      </section>

      <section id="quem-somos" className="section container">
        <SectionTitle
          title="Quem Somos"
          subtitle="Editores experientes com formação acadêmica pela USP, dedicados à qualidade editorial em materiais didáticos."
        />

        <div className="teamGrid">
          {teamMembers.map((member) => (
            <article key={member.name} className="teamCard">
              <h3>{member.name}</h3>
              <p className="teamRole">{member.role}</p>
              <p className="teamCredentials">{member.credentials}</p>
              <div className="teamAreas">
                {member.areas.map((area) => (
                  <span key={area} className="areaPill">{area}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <p className="teamSummary">
          Juntos, combinamos rigor científico e experiência editorial para entregar materiais didáticos que atendem
          aos mais altos padrões de qualidade. Nossa atuação abrange desde a elaboração de originais até a revisão
          técnica final, sempre com foco na precisão conceitual e na adequação pedagógica exigida pela BNCC.
        </p>
      </section>

      <section id="servicos" className="section container">
        <SectionTitle
          title="Serviços"
          subtitle="Soluções editoriais completas para materiais didáticos impressos e digitais, do original à publicação."
        />

        <div className="grid gridAuto">
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

      <section id="contato" className="section container contact">
        <div>
          <SectionTitle
            title="Contato e orçamento"
            subtitle="Entre em contato para discutir seu projeto editorial. Respondemos em até 24 horas úteis."
          />
          <div className="contactCtas">
            <Link className="btn primary" href={`mailto:${contactInfo.email}`}>
              {contactInfo.email}
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
            <input id="service" type="text" placeholder="Ex: revisão técnica de apostila" />
          </label>
          <label htmlFor="message">
            Mensagem
            <textarea id="message" rows={4} placeholder="Descreva seu projeto editorial" />
          </label>
          <button type="button" className="btn primary">
            Enviar solicitação
          </button>
        </form>
      </section>

      <footer className="footer">
        <div className="container footerWrap">
          <Image src="/logo_com_branco.png" alt="Logotipo Birô Principia" width={140} height={42} />
          <p>© {new Date().getFullYear()} Birô Principia. Serviços editoriais especializados em materiais didáticos.</p>
        </div>
      </footer>
    </main>
  );
}
