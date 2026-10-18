import type { Metadata, Viewport } from 'next'
import { Archivo } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import SkipLink from '@/components/SkipLink'
import SiteScripts from '@/components/SiteScripts'

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-archivo',
})

const SITE = 'https://arnaugarriga.com'
const TITLE = 'Arnau Garriga Torné · Data Engineer & Founding Sales Engineer'
const DESCRIPTION =
  'Portfolio of Arnau Garriga Torné, Data Engineer and Founding Sales Engineer at Prosper AI in Barcelona. Work experience, side projects like Satellite Tracker, and contact.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: 'Arnau Garriga Torné',
  authors: [{ name: 'Arnau Garriga Torné', url: SITE }],
  creator: 'Arnau Garriga Torné',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'profile',
    url: SITE,
    siteName: 'Arnau Garriga Torné',
    title: TITLE,
    description: DESCRIPTION,
    locale: 'en_US',
    firstName: 'Arnau',
    lastName: 'Garriga Torné',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Arnau Garriga Torné, Data Engineer and Founding Sales Engineer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/og.png'],
  },
  robots: { index: true, follow: true },
}

// Machine-readable identity for search engines and AI answer engines (not visible).
const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Arnau Garriga Torné',
  alternateName: ['Arnau Garriga', 'Arnau Garriga Torne'],
  url: SITE,
  image: `${SITE}/og.png`,
  jobTitle: 'Founding Sales Engineer',
  worksFor: { '@type': 'Organization', name: 'Prosper AI', url: 'https://www.getprosper.ai' },
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'Universitat Autònoma de Barcelona' },
  address: { '@type': 'PostalAddress', addressLocality: 'Barcelona', addressCountry: 'ES' },
  knowsAbout: ['Data engineering', 'Sales engineering', 'AI agents', 'Python', 'SQL', 'React'],
  knowsLanguage: ['ca', 'es', 'en', 'pt'],
  sameAs: [
    'https://github.com/garrigarnau',
    'https://www.linkedin.com/in/arnau-garriga-696991163',
    'https://satellitetracker.arnaugarriga.com',
  ],
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={archivo.variable}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, '\\u003c') }}
        />
        <SkipLink />
        <Navigation />
        <main id="main">
          {children}
        </main>
        <SiteScripts />
      </body>
    </html>
  )
}
