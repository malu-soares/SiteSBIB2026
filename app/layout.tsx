import type { Metadata } from 'next';
import Footer from './_components/Footer';
import Header from './_components/Header';
import './globals.css';

export const metadata: Metadata = {
  title: '24ª Semana Brasileira de Informática Biomédica',
  description: 'SBIB 2026: evento híbrido sobre tecnologia, inovação e saúde.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
