import type { Metadata } from 'next';
import './globals.css';

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
      <body>{children}</body>
    </html>
  );
}
