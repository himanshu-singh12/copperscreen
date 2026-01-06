import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://copperscreen.pages.dev'),
  title: {
    default: 'Copper Screen - Enterprise Digital Consultancy | 15+ Years of Expertise',
    template: '%s | Copper Screen'
  },
  description: 'Data-backed growth. Empathy-led strategy. 15+ years of expertise in SEO, web CRO, full-scale development, and AI agents for enterprise clients across APAC, Australia, Europe, and North America.',
  keywords: [
    'digital consultancy',
    'SEO services',
    'web development',
    'CRO optimization',
    'AI agents',
    'enterprise solutions',
    'digital transformation',
    'growth strategy',
    'APAC digital marketing',
    'Australia web development',
    'Europe SEO services',
    'North America AI solutions'
  ],
  authors: [{ name: 'Copper Screen', url: 'https://copperscreen.pages.dev' }],
  creator: 'Copper Screen',
  publisher: 'Copper Screen',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://copperscreen.pages.dev',
    siteName: 'Copper Screen',
    title: 'Copper Screen - Enterprise Digital Consultancy',
    description: 'Data-backed growth. Empathy-led strategy. 15+ years of expertise in digital transformation for enterprise clients globally.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Copper Screen - Digital Consultancy',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@copperscreen',
    creator: '@copperscreen',
    title: 'Copper Screen - Enterprise Digital Consultancy',
    description: 'Data-backed growth. Empathy-led strategy. 15+ years of expertise in digital transformation.',
    images: ['/images/og-image.jpg'],
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || 'https://copperscreen.pages.dev',
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION,
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}