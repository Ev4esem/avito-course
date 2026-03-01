import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'АвитоПро — Курс по заработку на Авито',
  description: 'Научись зарабатывать от 100 000 руб/мес на Авито. Реальные стратегии, проверенные схемы, живое сопровождение.',
  keywords: 'авито, курс авито, заработок авито, авито про, обучение авито',
  openGraph: {
    title: 'АвитоПро — Курс по заработку на Авито',
    description: 'Научись зарабатывать от 100 000 руб/мес на Авито',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
