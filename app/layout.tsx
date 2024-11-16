import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

// Initialize Inter font with latin subset
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'MaintainME - Smart Grounds Maintenance Solutions',
  description: 'Enterprise-grade maintenance solutions for optimal performance. Sustainable, efficient, and reliable grounds maintenance services.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
