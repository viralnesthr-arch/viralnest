import React from "react"
import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

import './globals.css'

const _jakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' })
const _spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })
export const metadata: Metadata = {
  title: 'Digital Marketing & Branding Agency for Dubai, Europe & India | Viral Nest Media',
  description:
    'Viral Nest Media helps businesses in Dubai, Europe and India grow through social media management, branding, influencer marketing and digital strategy. Book a free consultation.',
}

export const viewport: Viewport = {
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${_jakartaSans.variable} ${_spaceGrotesk.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
