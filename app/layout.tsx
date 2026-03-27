import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.biroprincipia.com.br'),
  title: {
    default: 'Birô Principia | Serviços Editoriais para Materiais Didáticos',
    template: '%s | Birô Principia',
  },
  description:
    'Birô editorial especializado em revisão técnica, elaboração de originais e produção de materiais didáticos de Ciências da Natureza, Matemática e Computação, alinhados à BNCC.',
  openGraph: {
    title: 'Birô Principia | Serviços Editoriais para Materiais Didáticos',
    description:
      'Revisão técnica, elaboração de originais e serviços editoriais para materiais didáticos de Ciências e Matemática. Equipe com formação pela USP e mais de 10 anos de experiência.',
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
