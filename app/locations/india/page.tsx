import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Digital Marketing Agency in India | Social Media & Performance Experts",
  description:
    "Leading digital marketing agency in India helping startups and businesses scale with social media marketing, branding, YouTube growth and performance-driven lead generation.",
  keywords: [
    "digital marketing agency India",
    "social media agency India",
    "branding agency India",
    "startup marketing India",
    "performance marketing company India",
    "YouTube marketing agency India",
  ],
  alternates: {
    canonical: "/locations/india",
  },
}

export default function IndiaPage() {
  return (
    <div className="pt-20">

      <section className="py-24 text-center">
        <div className="mx-auto max-w-5xl px-6">
          <h1 className="text-4xl font-bold sm:text-5xl">
            Digital Marketing Agency in India Driving Scalable Growth
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Viral Nest Media is a performance-driven digital marketing agency in India
            helping startups, D2C brands and enterprises grow through strategic
            social media marketing, branding and ROI-focused campaigns.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-8 bg-primary text-white px-6 py-3 rounded-lg font-semibold"
          >
            Get Your Free Growth Strategy
          </Link>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-4xl px-6 space-y-8 text-muted-foreground leading-relaxed">

          <h2 className="text-2xl font-bold text-foreground">
            Why Digital Marketing is Essential in India
          </h2>

          <p>
            India has one of the fastest-growing digital populations in the world.
            With millions of daily users on Instagram, YouTube and Google,
            businesses that leverage digital marketing effectively gain a massive
            competitive advantage.
          </p>

          <p>
            As a leading digital marketing agency in India, we design campaigns
            tailored to Indian consumer behavior, regional diversity and price-sensitive
            markets while maintaining premium brand positioning.
          </p>

          <h2 className="text-2xl font-bold text-foreground">
            Our Digital Marketing Services in India
          </h2>

          <h3 className="text-xl font-semibold text-foreground">
            1. Social Media Marketing & Reels Strategy
          </h3>
          <p>
            We create viral short-form content optimized for engagement and reach.
            Our strategies focus on audience growth and brand visibility.
          </p>

          <h3 className="text-xl font-semibold text-foreground">
            2. Performance Marketing & Paid Ads
          </h3>
          <p>
            We run highly optimized Google Ads and Meta Ads campaigns focused on
            generating qualified leads and increasing conversions.
          </p>

          <h3 className="text-xl font-semibold text-foreground">
            3. YouTube Growth & Video Marketing
          </h3>
          <p>
            India is one of the largest YouTube markets globally. We help brands
            scale their channels with content strategy, optimization and growth frameworks.
          </p>

          <h3 className="text-xl font-semibold text-foreground">
            4. Startup Branding & Positioning
          </h3>
          <p>
            We help Indian startups build strong brand identities that attract
            investors, customers and long-term credibility.
          </p>

          <h2 className="text-2xl font-bold text-foreground">
            Industries We Serve in India
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>D2C & E-commerce Brands</li>
            <li>EdTech & Coaching Institutes</li>
            <li>Real Estate</li>
            <li>Healthcare & Clinics</li>
            <li>Tech Startups</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground">
            Why Choose Us as Your Marketing Partner in India?
          </h2>

          <p>
            Unlike agencies focused only on vanity metrics, we prioritize measurable
            growth, lead generation and sustainable scaling.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-6 text-primary font-semibold"
          >
            Scale Your Brand in India →
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
              "@type": "Country",
              name: "India"
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
