import React from "react"
import type { Metadata, Viewport } from "next"
import Script from "next/script"
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GoogleTagManager } from "@next/third-parties/google"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import WhatsAppWidget from "@/components/whatsapp-widget"

import "./globals.css"

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
})

const fontDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://viralnest.co.in"),
  title: {
    default: "Digital Marketing & Branding Agency in Dubai, Europe & India | Viral Nest Media",
    template: "%s | Viral Nest Media",
  },
  description: "Viral Nest Media is a full-service digital marketing and branding agency helping businesses grow across Dubai, Europe and India.",
}

export const viewport: Viewport = {
  themeColor: "#000000",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakartaSans.variable} ${fontDisplay.variable}`} suppressHydrationWarning>
      <script
        id="gtm-script"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KH35TJTB');`,
        }}
      />
      <body className={cn("font-sans antialiased", jakartaSans.variable, fontDisplay.variable)} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppWidget />
        </ThemeProvider>
      </body>
    </html>
  )
}
