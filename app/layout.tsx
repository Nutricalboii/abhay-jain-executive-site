import type { Metadata } from 'next';
import { Fraunces, Instrument_Sans } from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
});

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});


export const metadata: Metadata = {
  metadataBase: new URL('https://abhayjain.net'),
  title: 'Abhay Jain — Executive Profile',
  description: 'Executive profile of Abhay Jain, a business and strategy professional working across consulting, energy, sustainability, technology, and manufacturing.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Abhay Jain — Executive Profile',
    description: 'Business and strategy professional working across consulting, energy, sustainability, technology, and manufacturing.',
    url: 'https://abhayjain.net',
    siteName: 'Abhay Jain',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Abhay Jain — Executive Profile',
    description: 'Business and strategy professional working across consulting, energy, sustainability, technology, and manufacturing.',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${instrumentSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
