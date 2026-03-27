// Página desabilitada — preservada para reativação futura

import type { Metadata } from 'next';

export const metadata: Metadata = {
  robots: 'noindex',
};

export default function PortfolioPage() {
  return (
    <main style={{ padding: '3rem 1rem', maxWidth: 900, margin: '0 auto' }}>
      <h1>Portfólio</h1>
      <p>Em breve. Nossos projetos editoriais serão exibidos aqui.</p>
    </main>
  );
}
