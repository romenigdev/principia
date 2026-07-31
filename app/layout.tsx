import type { Metadata } from 'next';
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

const display = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const sans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.biroprincipia.com.br'),
  title: {
    default: 'Principia | Serviços Editoriais para Materiais Didáticos',
    template: '%s | Principia',
  },
  description:
    'Birô editorial especializado em revisão técnica, elaboração de originais e leitura de provas para materiais didáticos de Ciências da Natureza, Matemática e Computação.',
  openGraph: {
    title: 'Principia | Serviços Editoriais para Materiais Didáticos',
    description:
      'Serviços editoriais para materiais didáticos de Ciências da Natureza, Matemática e Computação. Revisão técnica, elaboração de originais e leitura de provas.',
    type: 'website',
    locale: 'pt_BR',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
