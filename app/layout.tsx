import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.biroprincipia.com.br'),
  title: {
    default: 'Birô Principia | Serviços Editoriais para Materiais Didáticos',
    template: '%s | Birô Principia',
  },
  description:
    'Birô editorial especializado em revisão técnica, elaboração de originais e leitura de provas para materiais didáticos de Ciências da Natureza, Matemática e Computação.',
  openGraph: {
    title: 'Birô Principia | Serviços Editoriais para Materiais Didáticos',
    description:
      'Serviços editoriais para materiais didáticos de Ciências da Natureza, Matemática e Computação. Revisão técnica, elaboração de originais e leitura de provas.',
    type: 'website',
    locale: 'pt_BR',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
