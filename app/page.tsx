import Image from 'next/image';
import { SectionTitle } from '@/components/SectionTitle';
import { MobileMenu } from '@/components/MobileMenu';
import { navItems, services, teamMembers, contactInfo } from '@/content/site';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Birô Principia',
  description:
    'Birô editorial especializado em materiais didáticos de Ciências da Natureza, Matemática e Computação para a educação básica.',
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
          <span className="eyebrow">Birô editorial para materiais didáticos</span>
          <h1>Revisão técnica, elaboração de originais e produção editorial para educação básica</h1>
          <p>
            O Birô Principia presta serviços editoriais para editoras e instituições de ensino que desenvolvem materiais
            didáticos de Ciências da Natureza, Matemática e Computação. Atuamos da concepção dos originais à leitura
            de provas, com mais de dez anos de experiência no mercado editorial educacional brasileiro.
          </p>

          <div className="heroActions">
            <a className="btn primary" href="#contato">
              Solicitar orçamento
            </a>
          </div>

          <div className="quickInfo">
            <span>✓ Conteúdo alinhado à BNCC</span>
            <span>✓ Mais de 10 anos no mercado editorial</span>
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
            <li>Química</li>
            <li>Biologia</li>
            <li>Matemática</li>
            <li>Computação e Pensamento Computacional</li>
          </ul>
        </aside>
      </section>

      <section id="quem-somos" className="section container">
        <SectionTitle
          title="Quem Somos"
          subtitle="Profissionais com formação pela USP e trajetória consolidada na produção editorial de materiais didáticos."
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
          Reunimos rigor acadêmico e vivência prática no fluxo editorial de grandes editoras. Nossa atuação vai
          da elaboração de originais à revisão técnica e leitura de provas, sempre com atenção à precisão
          conceitual e à adequação pedagógica exigidas pela BNCC.
        </p>
      </section>

      <section id="servicos" className="section container">
        <SectionTitle
          title="Serviços"
          subtitle="Do original à publicação — serviços editoriais para materiais didáticos impressos e digitais."
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
            title="Contato"
            subtitle="Envie sua demanda ou solicite um orçamento. Retornamos em até um dia útil."
          />
          <div className="contactCtas">
            <a className="btn primary" href={`mailto:${contactInfo.email}`}>
              {contactInfo.email}
            </a>
          </div>
        </div>

        <form className="contactForm" aria-label="Formulário de contato">
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
            <input id="service" type="text" placeholder="Ex: revisão técnica, elaboração de originais" />
          </label>
          <label htmlFor="message">
            Mensagem
            <textarea id="message" rows={4} placeholder="Descreva brevemente sua demanda" />
          </label>
          <button type="submit" className="btn primary">
            Enviar mensagem
          </button>
        </form>
      </section>

      <footer className="footer">
        <div className="container footerWrap">
          <Image src="/logo_com_branco.png" alt="Logotipo Birô Principia" width={140} height={42} />
          <p>© {new Date().getFullYear()} Birô Principia. Todos os direitos reservados.</p>
        </div>
      </footer>
    </main>
  );
}
