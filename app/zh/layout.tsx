import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import '../globals.css'
import { ThemeProvider } from '../components/ThemeProvider'
import { CartProvider } from '../contexts/CartContext'
import { WishlistProvider } from '../contexts/WishlistContext'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'

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
    default: 'Pop Doll Fashion - Labubu和收藏娃娃的设计师服装',
    template: '%s | Pop Doll Fashion'
  },
  description: '为Labubu娃娃和收藏人偶发现优质设计师服装和配饰。独特、高品质的服装，为您的娃娃带来时尚和个性。',
  keywords: [
    'Labubu服装',
    '娃娃时尚',
    '收藏娃娃服装',
    '设计师娃娃服装',
    'Pop Mart配饰',
    '迷你时尚',
    '娃娃服装店',
    '定制娃娃服装',
    '奢华娃娃时尚',
    '收藏人偶配饰',
    'Labubu clothes',
    'doll fashion',
    'collectible doll outfits'
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
    canonical: '/zh',
    languages: {
      'en': '/',
      'zh': '/zh',
      'zh-CN': '/zh',
      'zh-TW': '/zh',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://popdollfashion.com/zh',
    title: 'Pop Doll Fashion - Labubu和收藏娃娃的设计师服装',
    description: '为Labubu娃娃和收藏人偶发现优质设计师服装和配饰。独特、高品质的服装，为您的娃娃带来时尚和个性。',
    siteName: 'Pop Doll Fashion',
    images: [
      {
        url: '/og-image-zh.jpg',
        width: 1200,
        height: 630,
        alt: 'Pop Doll Fashion - 设计师娃娃服装',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pop Doll Fashion - Labubu和收藏娃娃的设计师服装',
    description: '为Labubu娃娃和收藏人偶发现优质设计师服装和配饰。',
    images: ['/og-image-zh.jpg'],
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

export default function ZhLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
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
              url: 'https://popdollfashion.com/zh',
              logo: 'https://popdollfashion.com/logo.png',
              description: '为Labubu娃娃和收藏人偶提供优质设计师服装和配饰。',
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