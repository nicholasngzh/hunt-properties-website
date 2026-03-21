import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Hunt Property Management Sdn Bhd',
  description:
    'Professional property management services in Malaysia. Specialising in strata communities, commercial properties, and mixed developments. Delivering heartfelt service, every day.',
  keywords: [
    'property management',
    'Malaysia',
    'strata',
    'Hunt Property Management',
    'facilities management',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased text-gray-800">{children}</body>
    </html>
  )
}
