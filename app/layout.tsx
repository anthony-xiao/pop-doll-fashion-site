import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './components/ThemeProvider'
import { CartProvider } from './contexts/CartContext'
import { WishlistProvider } from './contexts/WishlistContext'
import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Pop Doll Fashion - Designer Clothes for Labubu & Collectible Dolls',
    template: '%s | Pop Doll Fashion'
  },
  description: 'Discover premium designer clothing and accessories for Labubu dolls and collectible figures. Unique, high-quality outfits that bring your dolls to life with style and personality.',
  keywords: [
    'Labubu clothes',
    'doll fashion',
    'collectible doll outfits',
    'designer doll clothes',
    'Pop Mart accessories',
    'miniature fashion',
    'doll clothing store',
    'custom doll outfits',
    'luxury doll fashion',
    'collectible figure accessories'
  ],
  authors: [{ name: 'Pop Doll Fashion' }],
  creator: 'Pop Doll Fashion',
  publisher: 'Pop Doll Fashion',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://popdollfashion.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://popdollfashion.com',
    title: 'Pop Doll Fashion - Designer Clothes for Labubu & Collectible Dolls',
    description: 'Discover premium designer clothing and accessories for Labubu dolls and collectible figures. Unique, high-quality outfits that bring your dolls to life.',
    siteName: 'Pop Doll Fashion',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pop Doll Fashion - Designer Doll Clothes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pop Doll Fashion - Designer Clothes for Labubu & Collectible Dolls',
    description: 'Discover premium designer clothing and accessories for Labubu dolls and collectible figures.',
    images: ['/og-image.jpg'],
    creator: '@popdollfashion',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ec4899" />
        <meta name="msapplication-TileColor" content="#ec4899" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Pop Doll Fashion',
              url: 'https://popdollfashion.com',
              logo: 'https://popdollfashion.com/logo.png',
              description: 'Premium designer clothing and accessories for Labubu dolls and collectible figures.',
              sameAs: [
                'https://instagram.com/popdollfashion',
                'https://twitter.com/popdollfashion',
                'https://facebook.com/popdollfashion'
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer service',
                email: 'hello@popdollfashion.com'
              }
            })
          }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <CartProvider>
            <WishlistProvider>
              <div className="flex flex-col min-h-screen">
                <Navigation />
                <main className="flex-grow pt-14 lg:pt-16">
                  {children}
                </main>
                <Footer />
              </div>
            </WishlistProvider>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}