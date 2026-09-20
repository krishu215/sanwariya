import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Manrope } from 'next/font/google'
import { business } from '@/lib/site-data'
import { getSiteUrl } from '@/lib/site-seo'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist', display: 'swap' })
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap' })
const title = 'Shree Sanwariya Marketing | Digital & Offline Marketing Agency in Indore'

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title,
  description: business.description,
  applicationName: business.name,
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website', locale: 'en_IN', url: '/', siteName: business.name,
    title, description: business.description,
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'SSM — Ideas that get noticed. Marketing that gets remembered.' }],
  },
  twitter: {
    card: 'summary_large_image', title, description: business.description,
    images: ['/opengraph-image'],
  },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }, { url: '/brand-icon-192.png', type: 'image/png', sizes: '192x192' }],
    apple: [{ url: '/brand-icon-192.png', sizes: '192x192', type: 'image/png' }],
  },
  manifest: '/manifest.webmanifest',
}

export const viewport: Viewport = {
  width: 'device-width', initialScale: 1, colorScheme: 'light', themeColor: '#f6f4ee',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" className={`${geist.variable} ${manrope.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">Skip to content</a>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
