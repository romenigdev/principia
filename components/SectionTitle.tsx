export function SectionTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="sectionHeader">
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
}
