import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/providers/Providers';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'YourVisa.ai - AI-Powered Visa Processing Platform',
  description: 'Enterprise-grade AI-powered visa processing platform. Reduce processing time from hours to minutes with our intelligent automation.',
  keywords: 'visa processing, AI automation, ETIAS 2026, travel visas, immigration',
  authors: [{ name: 'YourVisa.ai Team' }],
  robots: 'index, follow',
  openGraph: {
    title: 'YourVisa.ai - AI-Powered Visa Processing Platform',
    description: 'Enterprise-grade AI-powered visa processing platform. Reduce processing time from hours to minutes.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YourVisa.ai - AI-Powered Visa Processing Platform',
    description: 'Enterprise-grade AI-powered visa processing platform.',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
