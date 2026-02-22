import React from "react"
import type { Metadata, Viewport } from "next"
import Script from "next/script"
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GoogleTagManager } from "@next/third-parties/google"

import "./globals.css"

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://viralnest.co.in"),

  title: {
    default:
      "Digital Marketing & Branding Agency | Viral Nest Media",
    template: "%s | Viral Nest Media",
  },

  description:
    "Viral Nest Media helps brands in Dubai, Europe & India grow through 360° digital marketing, branding, influencer marketing and performance strategy.",

  keywords: [
    "Digital Marketing Agency Dubai",
    "Branding Agency India",
    "Social Media Marketing Europe",
    "Influencer Marketing Dubai",
    "SEO Agency India",
    "Performance Marketing UAE",
  ],

  authors: [{ name: "Viral Nest Media" }],
  creator: "Viral Nest Media",
  publisher: "Viral Nest Media",

  alternates: {
    canonical:
      "https://viralnest.co.in",
  },

  openGraph: {
    title:
      "Digital Marketing & Branding Agency | Viral Nest Media",
    description:
      "Helping brands scale across Dubai, Europe & India with high-performance digital marketing & branding strategies.",
    url: "https://viralnest.co.in",
    siteName: "Viral Nest Media",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Viral Nest Media - Digital Marketing Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Digital Marketing & Branding Agency | Viral Nest Media",
    description:
      "Helping brands grow across Dubai, Europe & India with powerful digital marketing.",
    images: ["/og-image.png"],
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${jakartaSans.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      {/* Google Tag Manager */}
      <GoogleTagManager gtmId="GTM-WT8GFP5C" />

      {/* Structured Data Schema */}
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
              url: "https://viralnest.co.in/og-image.png"
            },
            description:
              "Digital marketing and branding agency helping businesses grow across Dubai, Europe and India.",
            sameAs: [
              "https://www.instagram.com/yourprofile",
              "https://www.linkedin.com/company/yourcompany"
            ]
          }),
        }}
      />


      <body
        className="font-sans antialiased"
        suppressHydrationWarning
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
