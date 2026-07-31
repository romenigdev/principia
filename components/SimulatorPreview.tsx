/**
 * Preview/mock do produto — laboratório de função afim (MAT-01).
 * Removido da home a pedido ("deixe sem por enquanto"), preservado aqui.
 * Para reativar: importe <SimulatorPreview /> em app/page.tsx dentro de
 * .labInner e restaure a grade de 2 colunas (ver globals.css: .labInner).
 */
export function SimulatorPreview() {
  return (
    <div className="simFrame" aria-hidden="true">
      <div className="simBar">
        <span className="simDots">
          <i />
          <i />
          <i />
        </span>
        <span className="simTab">
          <b>MAT-01</b> · função afim
        </span>
        <span className="simChip">EM13MAT401</span>
      </div>

      <div className="simScreen">
        <div className="simScreenLabel">Representação algébrica</div>
        <div className="simEq">
          <em>y</em> = 2<em>x</em> + 5
        </div>

        <svg className="simGraph" viewBox="0 0 340 210" role="img" aria-label="Gráfico de função afim">
          <g stroke="#eef2f7" strokeWidth="1">
            <line x1="30" y1="40" x2="316" y2="40" />
            <line x1="30" y1="70" x2="316" y2="70" />
            <line x1="30" y1="100" x2="316" y2="100" />
            <line x1="30" y1="130" x2="316" y2="130" />
            <line x1="30" y1="160" x2="316" y2="160" />
            <line x1="90" y1="24" x2="90" y2="186" />
            <line x1="150" y1="24" x2="150" y2="186" />
            <line x1="210" y1="24" x2="210" y2="186" />
            <line x1="270" y1="24" x2="270" y2="186" />
          </g>
          {/* eixos */}
          <line x1="30" y1="150" x2="316" y2="150" stroke="#cbd5e1" strokeWidth="1.5" />
          <line x1="60" y1="24" x2="60" y2="186" stroke="#cbd5e1" strokeWidth="1.5" />
          {/* triângulo de inclinação */}
          <g stroke="#0f766e" strokeWidth="1.4" fill="none" strokeDasharray="4 3">
            <line x1="150" y1="122" x2="210" y2="122" />
            <line x1="210" y1="122" x2="210" y2="91" />
          </g>
          {/* reta y = 2x + 5 */}
          <line x1="40" y1="180" x2="300" y2="44" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" />
          {/* alças */}
          <circle cx="95" cy="151" r="6" fill="#2563eb" stroke="#ffffff" strokeWidth="2.5" />
          <circle cx="255" cy="68" r="6" fill="#6366f1" stroke="#ffffff" strokeWidth="2.5" />
        </svg>

        <div className="simValues">
          <div className="simValue">
            <div className="k">
              <em>a</em>
            </div>
            <div className="v">2</div>
          </div>
          <div className="simValue">
            <div className="k">
              <em>b</em>
            </div>
            <div className="v">5</div>
          </div>
          <div className="simValue">
            <div className="k">Δy/Δx</div>
            <div className="v">2</div>
          </div>
        </div>

        <span className="simPill">↗ Crescente</span>
      </div>
    </div>
  );
}
