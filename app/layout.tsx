import './globals.css'
import type { Metadata } from 'next'
import { GeistMono } from 'geist/font';
import Nav from '@/components/nav';
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

export const metadata: Metadata = {
  title: 'linkr',
  description: 'URL shortner w/ some sprinkes on top.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = createClientComponentClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();


  return (
    <html lang="en">
      <body className={GeistMono.className + " bg-gray-100 min-h-screen"}>
        <Nav user={user} />
        {children}
      </body>
    </html>
  )
}
