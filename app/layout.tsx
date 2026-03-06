import React from "react"
import type { Metadata, Viewport } from "next"
import Script from "next/script"
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GoogleTagManager } from "@next/third-parties/google"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

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

/* =========================
   ✅ SEO OPTIMIZED METADATA
   ========================= */

export const metadata: Metadata = {
  metadataBase: new URL("https://viralnest.co.in"),

  title: {
    default:
      "Digital Marketing & Branding Agency in Dubai, Europe & India | Viral Nest Media",
    template: "%s | Viral Nest Media",
  },

  description:
    "Viral Nest Media is a full-service digital marketing and branding agency helping businesses grow across Dubai, Europe and India through strategic marketing, social media management, influencer campaigns and performance-driven solutions.",

  keywords: [
    "digital marketing agency Dubai",
    "branding agency Dubai",
    "digital marketing agency India",
    "branding agency Europe",
    "social media marketing company",
    "influencer marketing agency",
    "performance marketing services",
    "creative branding agency"
  ],

  authors: [{ name: "Viral Nest Media" }],
  creator: "Viral Nest Media",
  publisher: "Viral Nest Media",

  alternates: {
    canonical: "https://viralnest.co.in",
  },

  openGraph: {
    title:
      "Digital Marketing & Branding Agency in Dubai, Europe & India | Viral Nest Media",
    description:
      "Helping brands scale across Dubai, Europe and India with strategic digital marketing, branding and performance campaigns.",
    url: "https://viralnest.co.in",
    siteName: "Viral Nest Media",
    images: [
      {
        url: "https://viralnest.co.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "Viral Nest Media - Digital Marketing & Branding Agency",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Digital Marketing & Branding Agency | Viral Nest Media",
    description:
      "Full-service digital marketing and branding agency serving Dubai, Europe and India.",
    images: ["https://viralnest.co.in/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "Digital Marketing",

  verification: {
    google: "ADD_GOOGLE_VERIFICATION_CODE",
    other: {
      "msvalidate.01": "ADD_BING_VERIFICATION_CODE",
    },
  },
}

export const viewport: Viewport = {
  themeColor: "#000000",
}

/* =========================
   ✅ ROOT LAYOUT
   ========================= */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${jakartaSans.variable} ${fontDisplay.variable}`}
      suppressHydrationWarning
    >
      {/* ✅ Google Tag Manager (UNTOUCHED) */}
      <GoogleTagManager gtmId="GTM-KH35TJTB" />

      {/* ✅ Structured Data (Enhanced for SEO) */}
      <Script
        id="schema-org"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://viralnest.co.in/#organization",
            name: "Viral Nest Media",
            url: "https://viralnest.co.in",
            logo: {
              "@type": "ImageObject",
              url: "https://viralnest.co.in/og-image.png",
            },
            description:
              "Digital marketing and branding agency helping businesses grow across Dubai, Europe and India.",
            areaServed: [
              { "@type": "Place", name: "Dubai" },
              { "@type": "Place", name: "India" },
              { "@type": "Place", name: "Europe" }
            ],
            sameAs: [
              "https://www.instagram.com/yourprofile",
              "https://www.linkedin.com/company/yourcompany"
            ]
          }),
        }}
      />

      <body
        className={cn(
          "font-sans antialiased",
          jakartaSans.variable,
          fontDisplay.variable
        )}
        suppressHydrationWarning
      >
        {/* ✅ Theme Provider (UNTOUCHED) */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}