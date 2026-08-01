import Image from 'next/image';
import { SectionTitle } from '@/components/SectionTitle';
import { digitalContent, clients, clientsTitle, clientsSubtitle } from '@/content/site';

export function DigitalContentSection() {
  const { showcase } = digitalContent;

  return (
    <section id="conteudo-digital" className="section">
      <div className="container">
        <SectionTitle
          eyebrow={digitalContent.eyebrow}
          accent="var(--orange)"
          title={digitalContent.title}
          subtitle={digitalContent.subtitle}
        />

        {/* ── Estudo de caso: TucaProg ── */}
        <article className="showcase">
          <header className="showcaseHead">
            <Image
              className="showcaseLogo"
              src={showcase.logo}
              alt={`Logotipo ${showcase.name}`}
              width={showcase.logoWidth}
              height={showcase.logoHeight}
              sizes="(max-width: 700px) 240px, 300px"
            />
            <span className="showcaseChip">{showcase.chip}</span>
          </header>

          <p className="showcaseTagline">{showcase.tagline}</p>
          <p className="showcaseLead">{showcase.lead}</p>

          <div className="showcaseShots">
            {showcase.shots.map((shot) => (
              <figure key={shot.src} className={`shot shot--${shot.format}`}>
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={shot.width}
                  height={shot.height}
                  sizes={shot.format === 'wide' ? '(max-width: 860px) 92vw, 560px' : '(max-width: 860px) 44vw, 260px'}
                />
                <figcaption>{shot.caption}</figcaption>
              </figure>
            ))}
          </div>

          <ul className="showcaseFeatures">
            {showcase.features.map((feature) => (
              <li key={feature.title}>
                <span className="dot" aria-hidden="true" />
                <div>
                  <strong>{feature.title}</strong>
                  <span>{feature.description}</span>
                </div>
              </li>
            ))}
          </ul>

          <footer className="showcaseFoot">
            <p className="showcaseNote">{showcase.note}</p>
            <div className="showcaseActions">
              <a
                className="btn tuca"
                href={showcase.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Experimente o ${showcase.name} (abre em nova aba)`}
              >
                Experimente! <span aria-hidden="true">→</span>
              </a>
              <a className="btn onDark" href="#contato">
                Quero um projeto assim
              </a>
            </div>
          </footer>
        </article>

        {/* ── Clientes ── */}
        <div className="clients">
          <h3 className="clientsTitle">{clientsTitle}</h3>
          <p className="clientsSubtitle">{clientsSubtitle}</p>

          <div className="clientsGrid">
            {clients.map((client) => {
              const logo = (
                <Image
                  className="clientLogo"
                  src={client.logo}
                  alt={`Logotipo ${client.name}`}
                  width={client.logoWidth}
                  height={client.logoHeight}
                  sizes="(max-width: 700px) 78vw, 320px"
                />
              );

              return (
                <article key={client.name} className="clientCard">
                  {client.url ? (
                    <a
                      href={client.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Site do ${client.name} (abre em nova aba)`}
                    >
                      {logo}
                    </a>
                  ) : (
                    logo
                  )}
                  <p>{client.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
