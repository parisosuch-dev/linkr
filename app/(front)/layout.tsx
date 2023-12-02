import '../globals.css'
import type { Metadata } from 'next'
import { GeistMono } from 'geist/font';
import Nav from '@/components/nav';
import createServerComponentClient from "@/lib/supabase/supabase-server"

export const metadata: Metadata = {
  title: 'linkr',
  description: 'URL shortner w/ some sprinkes on top.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={GeistMono.className + " bg-gray-100 min-h-screen"}>
        <Nav />
        {children}
      </body>
    </html>
  )
}

export const dynamic = 'force-dynamic'
