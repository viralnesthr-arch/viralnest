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
    "Viral Nest Media is a leading digital marketing agency in Dubai helping brands grow through social media marketing, performance ads, branding, and content strategy.",
  alternates: {
    canonical: "https://viralnest.co.in",
  },
}

export default function HomePage() {
  return (
    <>
      <Script
        id="homepage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Viral Nest Media",
            url: "https://viralnest.co.in",
          }),
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
