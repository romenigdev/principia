import { SectionTitle } from '@/components/SectionTitle';
import { MobileMenu } from '@/components/MobileMenu';
import { ContactForm } from '@/components/ContactForm';
import { BrandLogo } from '@/components/BrandLogo';
import { navItems, services, teamMembers, contactInfo } from '@/content/site';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Principia',
  legalName: 'Birô Principia',
  description:
    'Birô editorial especializado em materiais didáticos de Ciências da Natureza, Matemática e Computação para a educação básica.',
  url: `https://${contactInfo.domain}`,
  logo: `https://${contactInfo.domain}/logo-principia-gema.svg`,
  email: contactInfo.email,
};

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

      <header className="header">
        <div className="container nav">
          <a href="#inicio" className="brand" aria-label="Página inicial Principia">
            <BrandLogo gemSize={42} wordmarkSize={28} />
          </a>

          <nav className="primaryNav" aria-label="Navegação principal">
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

      {/* ── Hero ── */}
      <section id="inicio" className="hero">
        <div className="container heroInner">
          <div className="heroText">
            <span className="eyebrow">Birô editorial para materiais didáticos</span>
            <h1>Produção de conteúdo para materiais didáticos</h1>
            <p>
              A Principia presta serviços editoriais para editoras e instituições de ensino, produzindo conteúdo para
              materiais didáticos de Ciências da Natureza, Matemática e Computação. Atuamos da concepção dos originais à
              leitura de provas, com mais de dez anos de experiência no mercado editorial educacional brasileiro.
            </p>

            <div className="heroActions">
              <a className="btn primary" href="#contato">
                Solicitar orçamento
              </a>
            </div>

            <div className="quickInfo">
              <span>✓ Conteúdo alinhado à BNCC</span>
              <span>✓ Mais de 10 anos de experiência</span>
              <span>✓ Formação acadêmica pela USP</span>
            </div>
          </div>

          <aside className="heroCard" aria-label="Áreas de atuação">
            <h2>Áreas de atuação</h2>
            <p>
              Trabalhamos com as disciplinas da área de Ciências da Natureza e Matemática
              para todos os segmentos da educação básica:
            </p>
            <ul>
              <li>Física</li>
              <li>Biologia</li>
              <li>Matemática</li>
            </ul>
          </aside>
        </div>
      </section>

      {/* ── Serviços ── */}
      <section id="servicos" className="section surface">
        <div className="container">
          <SectionTitle
            title="Serviços"
            subtitle="Acompanhamento do conteúdo, do original à publicação — serviços editoriais para materiais didáticos impressos e digitais."
          />

          <div className="servicesGrid">
            {services.map((service) => (
              <article key={service.title} className="serviceCard">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="serviceList">
                  {service.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quem Somos ── */}
      <section id="quem-somos" className="section">
        <div className="container">
          <SectionTitle
            eyebrow="A equipe"
            accent="var(--blue)"
            title="Quem somos"
          />

          {/* Texto institucional ocultado a pedido — preservado para reativação futura:
              subtitle="Profissionais com formação pela USP e trajetória consolidada na produção editorial de materiais didáticos."

          <div className="teamIntro">
            <p>
              Somos uma equipe com formação acadêmica pela Universidade de São Paulo, reunindo licenciatura,
              mestrado e pós-doutorado nas áreas de Ciências Exatas e da Natureza. Nossos profissionais atuam há mais de dez anos
              no mercado editorial brasileiro, com experiência em grandes editoras e projetos
              didáticos de abrangência nacional.
            </p>
            <p>
              Nossa especialidade abrange Física, Química, Biologia, Matemática e Computação, sempre com
              atenção à precisão conceitual, à progressão pedagógica e à adequação curricular exigida pela BNCC.
              Da elaboração de originais à leitura de provas, oferecemos um acompanhamento completo do conteúdo.
            </p>
          </div>
          */}

          <div className="teamGrid">
            {teamMembers.map((member) => (
              <article key={member.name} className="teamCard">
                {member.photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img className="teamPhoto" src={member.photo} alt={`Foto de ${member.name}`} width={92} height={92} />
                ) : (
                  <div className="teamAvatar" aria-hidden="true">
                    {member.initials}
                  </div>
                )}
                <div className="teamMeta">
                  <h3>{member.name}</h3>
                  <span className="teamRole">{member.role}</span>
                  <p className="teamCred">{member.credentials}</p>
                  <div className="areaChips">
                    {member.areas.map((area) => (
                      <span key={area} className="areaChip">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Seção "Simuladores" removida por enquanto — preservada em
          components/SimulatorsSection.tsx (e o mock em components/SimulatorPreview.tsx).
          Para reativar: importe <SimulatorsSection /> aqui e recoloque o item de nav. */}

      {/* ── Contato ── */}
      <section id="contato" className="section surface">
        <div className="container contact">
          <div className="contactAside">
            <SectionTitle
              title="Contato"
              subtitle="Envie sua demanda ou solicite um orçamento. Retornamos em até um dia útil."
            />
            <div className="contactCtas">
              <a className="btn primary" href={`mailto:${contactInfo.email}`}>
                {contactInfo.email}
              </a>
            </div>
            <div className="contactMeta">
              <div className="row">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
                <span>{contactInfo.email}</span>
              </div>
              <div className="row">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
                </svg>
                <span>{contactInfo.domain}</span>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <footer className="footer">
        <div className="spectralRule" />
        <div className="container footerWrap">
          <div className="footerBrand">
            <BrandLogo tone="light" />
          </div>
          <nav className="footerLinks" aria-label="Rodapé">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <p className="copyright">© {year} Principia. Todos os direitos reservados.</p>
        </div>
      </footer>
    </main>
  );
}
