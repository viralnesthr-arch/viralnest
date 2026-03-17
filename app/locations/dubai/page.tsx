import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Dubai | Social Media & Branding Experts",
  description:
    "Award-driven digital marketing agency in Dubai helping brands dominate social media, generate qualified leads and scale revenue with performance marketing strategies tailored for the UAE market.",
  keywords: [
    "digital marketing agency Dubai",
    "social media agency Dubai",
    "branding agency Dubai",
    "lead generation company Dubai",
    "performance marketing UAE",
    "influencer marketing Dubai",
  ],
  alternates: {
    canonical: "/locations/dubai",
  },
  openGraph: {
    title: "Top Digital Marketing Agency in Dubai | Viral Nest Media",
    description:
      "Scale your brand in Dubai with strategic social media marketing, branding and ROI-driven performance campaigns.",
    url: "/locations/dubai",
    type: "website",
  },
}

export default function DubaiPage() {
  return (
    <div className="pt-20">

      {/* HERO */}
      <section className="py-24 text-center">
        <div className="mx-auto max-w-5xl px-6">
          <h1 className="text-4xl font-bold sm:text-5xl">
            Digital Marketing Agency in Dubai Driving Real Business Growth
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Viral Nest Media is a results-driven digital marketing agency in Dubai
            helping brands increase visibility, generate high-quality leads and
            dominate competitive markets across the UAE.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-8 bg-primary text-white px-6 py-3 rounded-lg font-semibold"
          >
            Get a Free Strategy Consultation
          </Link>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="pb-24">
        <div className="mx-auto max-w-4xl px-6 space-y-8 text-muted-foreground leading-relaxed">

          <h2 className="text-2xl font-bold text-foreground">
            Why Your Business in Dubai Needs a Strong Digital Presence
          </h2>

          <p>
            Dubai is one of the fastest-growing business hubs in the world.
            With intense competition across industries like real estate,
            hospitality, fintech, luxury retail and e-commerce, standing out
            online is no longer optional — it’s essential.
          </p>

          <p>
            As a leading digital marketing agency in Dubai, we design
            performance-focused strategies that align with UAE consumer
            behavior, regional trends and market demand. Our approach combines
            creativity with analytics to ensure measurable ROI.
          </p>

          <h2 className="text-2xl font-bold text-foreground">
            Our Digital Marketing Services in Dubai
          </h2>

          <h3 className="text-xl font-semibold text-foreground">
            1. Social Media Marketing in Dubai
          </h3>
          <p>
            We create engaging, conversion-driven content for Instagram,
            TikTok, LinkedIn and Facebook. Our campaigns are tailored to the
            Dubai audience, focusing on premium branding and audience growth.
          </p>

          <h3 className="text-xl font-semibold text-foreground">
            2. Performance Marketing & Lead Generation
          </h3>
          <p>
            We run highly targeted Google Ads and Meta Ads campaigns designed
            to generate qualified leads. Whether you're in real estate,
            healthcare or luxury services, we optimize for revenue — not just clicks.
          </p>

          <h3 className="text-xl font-semibold text-foreground">
            3. Branding & Positioning
          </h3>
          <p>
            In a premium market like Dubai, brand perception matters. We build
            powerful brand identities that elevate trust, authority and customer loyalty.
          </p>

          <h3 className="text-xl font-semibold text-foreground">
            4. Influencer Marketing in UAE
          </h3>
          <p>
            Collaborate with top UAE influencers to increase reach and brand
            credibility. Our influencer campaigns focus on strategic partnerships
            that convert followers into customers.
          </p>

          <h3 className="text-xl font-semibold text-foreground">
            5. Website Development & Funnel Optimization
          </h3>
          <p>
            We design conversion-focused websites optimized for SEO and lead
            generation. Every page is built to guide visitors toward action.
          </p>

          <h2 className="text-2xl font-bold text-foreground">
            Industries We Serve in Dubai
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Real Estate Developers & Agencies</li>
            <li>Luxury Brands & Retail</li>
            <li>Hospitality & Restaurants</li>
            <li>Fintech & Startups</li>
            <li>Healthcare & Clinics</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground">
            What Makes Us Different from Other Marketing Agencies in Dubai?
          </h2>

          <p>
            Many agencies focus only on vanity metrics like followers and impressions.
            We focus on revenue, ROI and scalable growth. Every strategy is backed by
            performance data, audience research and competitor analysis.
          </p>

          <p>
            Our team blends creativity with analytical precision to create campaigns
            that don’t just look good — they deliver measurable business results.
          </p>

          <h2 className="text-2xl font-bold text-foreground">
            Ready to Scale Your Business in Dubai?
          </h2>

          <p>
            If you're looking for a trusted digital marketing agency in Dubai
            that understands the UAE market and delivers measurable growth,
            Viral Nest Media is your strategic partner.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-6 text-primary font-semibold"
          >
            Book Your Free Dubai Strategy Call →
          </Link>

        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="pb-24 bg-muted/30">
        <div className="mx-auto max-w-4xl px-6 space-y-6">
          <h2 className="text-2xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>

          <div>
            <h3 className="font-semibold">
              How much does digital marketing cost in Dubai?
            </h3>
            <p className="text-muted-foreground">
              Costs vary depending on campaign scope, advertising budget and
              services required. We offer customized packages tailored to your business goals.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Do you work with startups in Dubai?
            </h3>
            <p className="text-muted-foreground">
              Yes. We help startups build brand visibility, generate leads and
              scale sustainably in competitive markets.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Do you provide SEO services in Dubai?
            </h3>
            <p className="text-muted-foreground">
              Absolutely. Our SEO strategies focus on local keyword ranking,
              content authority and technical optimization.
            </p>
          </div>
        </div>
      </section>

      {/* STRUCTURED DATA */}
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Digital Marketing Agency",
            areaServed: {
              "@type": "City",
              name: "Dubai"
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
