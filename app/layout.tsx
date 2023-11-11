import './globals.css'
import type { Metadata } from 'next'
import { GeistMono } from 'geist/font';

export const metadata: Metadata = {
  title: 'linkr',
  description: 'URL shortner w/ some sprinkes on top.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={GeistMono.className}>{children}</body>
    </html>
  )
}
