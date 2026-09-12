import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { pageDescription, siteName, themeColor } from '@/data/projects'

export const metadata: Metadata = {
  title: {
    default: siteName,
    template: `%s | Udhaya Pooja R.`,
  },
  description: pageDescription,
  metadataBase: new URL('https://udhayapooja.dev'),
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    title: siteName,
    description: pageDescription,
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

