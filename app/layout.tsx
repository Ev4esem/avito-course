import type { Metadata } from 'next';
import Script from 'next/script';
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

// Replace with your actual Google Analytics Measurement ID
const GA_MEASUREMENT_ID = 'G-6K5NFRLRRJ';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
