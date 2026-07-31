type GemProps = { size?: number; className?: string };

/** Gema isométrica espectral — logotipo Principia (opção 1a). */
export function Gem({ size = 30, className }: GemProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      className={className}
      role="img"
      aria-label="Principia"
    >
      <g stroke="#ffffff" strokeWidth={2.2} strokeLinejoin="round">
        <polygon points="60,14 20,37 60,60" fill="#f59e0b" />
        <polygon points="60,14 100,37 60,60" fill="#ef4444" />
        <polygon points="20,37 60,60 60,106" fill="#7c3aed" />
        <polygon points="20,37 60,106 20,83" fill="#6366f1" />
        <polygon points="100,37 60,60 60,106" fill="#2563eb" />
        <polygon points="100,37 60,106 100,83" fill="#10b981" />
      </g>
      <polygon
        points="60,14 100,37 100,83 60,106 20,83 20,37"
        fill="none"
        stroke="#0f172a"
        strokeWidth={2.6}
        strokeLinejoin="round"
      />
    </svg>
  );
}

type BrandLogoProps = {
  /** 'dark' = wordmark escura (fundo claro); 'light' = wordmark clara (fundo escuro). */
  tone?: 'dark' | 'light';
  gemSize?: number;
  wordmarkSize?: number;
};

/** Lockup completo: gema + wordmark "Principia". */
export function BrandLogo({ tone = 'dark', gemSize = 30, wordmarkSize = 21 }: BrandLogoProps) {
  return (
    <span className="brandLockup">
      <Gem size={gemSize} />
      <span
        className="brandWordmark"
        style={{ color: tone === 'light' ? '#ffffff' : '#0f172a', fontSize: wordmarkSize }}
      >
        Principia
      </span>
    </span>
  );
}
