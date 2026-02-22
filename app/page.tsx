import type { Metadata } from "next"
import Script from "next/script"

import { HeroSection } from "@/components/home/hero-section"
import { ServicesOverview } from "@/components/home/services-overview"
import { IndustriesSection } from "@/components/home/industries-section"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { CTASection } from "@/components/home/cta-section"
import { TrustBanner } from "@/components/home/trust-banner"

export const metadata: Metadata = {
  title:
    "Digital Marketing Agency in Dubai | Social Media & Branding Experts | Viral Nest Media",
  description:
    "Viral Nest Media is a leading digital marketing agency in Dubai helping brands grow through social media marketing, performance ads, branding, and content strategy. We deliver measurable results across hospitality, real estate, fitness, and luxury industries.",
  keywords: [
    "Digital Marketing Agency Dubai",
    "Social Media Marketing Dubai",
    "Branding Agency Dubai",
    "Performance Marketing Agency",
    "Instagram Marketing Dubai",
    "Lead Generation Agency Dubai",
    "Viral Nest Media",
  ],
  alternates: {
    canonical: "https://viralnest.co.in",
  },
  openGraph: {
    title:
      "Digital Marketing Agency in Dubai | Viral Nest Media",
    description:
      "We help brands scale with social media marketing, paid ads, branding, and performance strategies across Dubai, India, and Europe.",
    url: "https://viralnest.co.in",
    siteName: "Viral Nest Media",
    images: [
      {
        url: "https://viralnest.co.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "Viral Nest Media Digital Marketing Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Agency in Dubai | Viral Nest Media",
    description:
      "Scale your brand with expert social media marketing, branding and performance campaigns.",
    images: ["https://viralnest.co.in/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function HomePage() {
  return (
    <>
      {/* Structured Data */}
      <Script
        id="homepage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Viral Nest Media",
              url: "https://viralnest.co.in",
              logo: "https://viralnest.co.in/viral-nest-logo.png",
              sameAs: [
                "https://www.instagram.com/",
                "https://www.linkedin.com/",
                "https://www.facebook.com/"
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Viral Nest Media",
              image: "https://viralnest.co.in/og-image.png",
              url: "https://viralnest.co.in",
              areaServed: ["Dubai", "India", "Europe"],
              description:
                "Digital marketing agency specializing in social media marketing, branding and performance campaigns.",
            },
          ]),
        }}
      />

      <HeroSection />
      <TrustBanner />
      <ServicesOverview />
      <IndustriesSection />
      <WhyChooseUs />
      <CTASection />
    </>
  )
}
