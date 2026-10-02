import type { Metadata } from 'next';
import { Instrument_Sans, Newsreader } from 'next/font/google';
import './globals.css';

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://abhayjain.net'),
  title: 'Abhay Jain — Business & Strategy Leader',
  description: 'Executive profile of Abhay Jain, a business and strategy leader working across power-management semiconductors, product direction, and execution.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Abhay Jain — Business & Strategy Leader',
    description: 'Business and strategy leader working across power-management semiconductors, product direction, and execution.',
    url: 'https://abhayjain.net',
    siteName: 'Abhay Jain',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Abhay Jain — Business & Strategy Leader',
    description: 'Business and strategy leader working across power-management semiconductors, product direction, and execution.',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.variable} ${newsreader.variable}`}>{children}</body>
    </html>
  );
}
