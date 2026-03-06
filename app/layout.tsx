import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.exemplo.com.br'),
  title: {
    default: 'Birô Principia | Material Didático',
    template: '%s | Birô Principia',
  },
  description:
    'Birô especializado em material didático, diagramação, revisão e produção editorial com atendimento personalizado.',
  openGraph: {
    title: 'Birô Principia | Material Didático',
    description:
      'Site institucional com apresentação, serviços, portfólio em galeria e estrutura pronta para blog.',
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
