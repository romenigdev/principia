import Image from 'next/image';
import { SectionTitle } from '@/components/SectionTitle';
import { AppsCarousel } from '@/components/AppsCarousel';
import { digitalContent, interactiveApps, clients, clientsTitle, clientsSubtitle } from '@/content/site';

export function DigitalContentSection() {
  return (
    <section id="conteudo-digital" className="section">
      <div className="container">
        <SectionTitle
          eyebrow={digitalContent.eyebrow}
          accent="var(--orange)"
          title={digitalContent.title}
          subtitle={digitalContent.subtitle}
        />

        <AppsCarousel apps={interactiveApps} />

        <p className="digitalNote">{digitalContent.note}</p>

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
