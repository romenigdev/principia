import { simulators } from '@/content/site';

/**
 * Seção "Simuladores" (laboratório) — removida da home a pedido ("tira por enquanto").
 * Preservada aqui para reativação futura: importe <SimulatorsSection /> em app/page.tsx
 * (após Serviços) e recoloque o item de navegação "Simuladores" em content/site.ts.
 */
export function SimulatorsSection() {
  return (
    <section id="simuladores" className="section lab">
      <div className="container labInner">
        <div className="labText">
          <span className="eyebrow">{simulators.eyebrow}</span>
          <h2 className="labTitle">{simulators.title}</h2>
          <p className="labLead">{simulators.lead}</p>

          <ul className="labFeatures">
            {simulators.features.map((feature) => (
              <li key={feature.title} className="labFeature">
                <span className="dot" aria-hidden="true" />
                <div>
                  <strong>{feature.title}</strong>
                  <span>{feature.description}</span>
                </div>
              </li>
            ))}
          </ul>

          <div className="labCapabilities">
            <h3>{simulators.capabilitiesTitle}</h3>
            <p className="capLead">{simulators.capabilitiesLead}</p>
            <div className="capChips">
              {simulators.capabilities.map((cap) => (
                <span key={cap} className="capChip">
                  {cap}
                </span>
              ))}
            </div>
          </div>

          <div className="labActions">
            <a className="btn primary" href="#contato">
              Falar sobre um projeto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
