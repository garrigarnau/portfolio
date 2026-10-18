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

export const metadata: Metadata = {
  title: 'Arnau Garriga Torné | Portfolio',
  description: 'Personal portfolio of Arnau Garriga Torné, Data Engineer and Founding Sales Engineer in Barcelona',
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
