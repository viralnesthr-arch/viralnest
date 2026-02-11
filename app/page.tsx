import { HeroSection } from "@/components/home/hero-section"
import { ServicesOverview } from "@/components/home/services-overview"
import { IndustriesSection } from "@/components/home/industries-section"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { CTASection } from "@/components/home/cta-section"
import { TrustBanner } from "@/components/home/trust-banner"

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
