import type { Metadata } from "next"
import { HeroSection } from "@/components/home/hero-section"
import { ServicesOverview } from "@/components/home/services-overview"
import { IndustriesSection } from "@/components/home/industries-section"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { CTASection } from "@/components/home/cta-section"
import { TrustBanner } from "@/components/home/trust-banner"

export const metadata: Metadata = {
  title: "Digital Marketing & Branding Agency in Dubai, Europe & India | Viral Nest Media",
  description: "Viral Nest Media is a full-service digital marketing and branding agency helping businesses build strong brand identities and scale globally.",
  alternates: {
    canonical: "https://viralnest.co.in",
  },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBanner />
      <ServicesOverview />
      <IndustriesSection />
      <WhyChooseUs />
      <CTASection />
    </>
  )
}
