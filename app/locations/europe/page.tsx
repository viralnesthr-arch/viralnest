import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Europe | Multi-Language Growth Experts",
  description:
    "Strategic digital marketing agency serving businesses across Europe with branding, performance marketing and multi-language content strategies.",
  keywords: [
    "digital marketing agency Europe",
    "social media agency Europe",
    "branding agency Europe",
    "performance marketing Europe",
    "multi language marketing agency Europe",
  ],
  alternates: {
    canonical: "/locations/europe",
  },
}

export default function EuropePage() {
  return (
    <div className="pt-20">

      <section className="py-24 text-center">
        <div className="mx-auto max-w-5xl px-6">
          <h1 className="text-4xl font-bold sm:text-5xl">
            Digital Marketing Agency in Europe Expanding Brands Across Borders
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Viral Nest Media helps European brands scale with localized,
            multi-language marketing strategies and performance-driven campaigns.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-8 bg-primary text-white px-6 py-3 rounded-lg font-semibold"
          >
            Expand Across Europe
          </Link>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-4xl px-6 space-y-8 text-muted-foreground leading-relaxed">

          <h2 className="text-2xl font-bold text-foreground">
            Marketing Across Diverse European Markets
          </h2>

          <p>
            Europe consists of diverse cultures, languages and regulations.
            Effective marketing requires localization, compliance awareness and
            audience-specific messaging.
          </p>

          <h2 className="text-2xl font-bold text-foreground">
            Our Europe Digital Marketing Services
          </h2>

          <h3 className="text-xl font-semibold text-foreground">
            1. Multi-Language Content Strategy
          </h3>
          <p>
            We create localized content campaigns tailored to specific European markets.
          </p>

          <h3 className="text-xl font-semibold text-foreground">
            2. Performance Advertising
          </h3>
          <p>
            Data-driven paid campaigns targeting high-intent audiences across Europe.
          </p>

          <h3 className="text-xl font-semibold text-foreground">
            3. Brand Positioning
          </h3>
          <p>
            We craft premium brand narratives aligned with European consumer expectations.
          </p>

          <h2 className="text-2xl font-bold text-foreground">
            Industries We Support in Europe
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>SaaS & Tech Companies</li>
            <li>E-commerce Brands</li>
            <li>Luxury & Fashion</li>
            <li>Hospitality</li>
            <li>Professional Services</li>
          </ul>

          <Link
            href="/contact"
            className="inline-block mt-6 text-primary font-semibold"
          >
            Grow Your Brand in Europe →
          </Link>

        </div>
      </section>

      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Digital Marketing Agency",
            areaServed: {
              "@type": "Continent",
              name: "Europe"
            },
            provider: {
              "@type": "Organization",
              name: "Viral Nest Media"
            }
          }),
        }}
      />

    </div>
  )
}
