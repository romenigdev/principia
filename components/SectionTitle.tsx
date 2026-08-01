type SectionTitleProps = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  /** Cor do traço/acento do eyebrow (ex.: var(--blue), var(--orange)). */
  accent?: string;
  tone?: 'dark' | 'light';
};

export function SectionTitle({ title, subtitle, eyebrow, accent, tone = 'dark' }: SectionTitleProps) {
  return (
    <div className={`sectionHeader${tone === 'light' ? ' onDark' : ''}`}>
      {eyebrow && (
        <span className="eyebrow" style={accent ? { color: accent } : undefined}>
          {eyebrow}
        </span>
      )}
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}
