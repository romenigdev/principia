// Página desabilitada — preservada para reativação futura

import type { Metadata } from 'next';

export const metadata: Metadata = {
  robots: 'noindex',
};

export default function BlogPage() {
  return (
    <main style={{ padding: '3rem 1rem', maxWidth: 900, margin: '0 auto' }}>
      <h1>Blog</h1>
      <p>Em breve. Estamos preparando conteúdo sobre produção editorial e materiais didáticos.</p>
    </main>
  );
}
