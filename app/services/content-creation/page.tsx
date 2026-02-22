import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import { ArrowRight, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title:
    "Content Creation Services | Reels, Video & Brand Creatives | Viral Nest Media",
  description:
    "Professional content creation services including reels production, short-form videos, graphic design and brand creatives for businesses in India, Europe and worldwide.",
  keywords: [
    "Content creation services",
    "Reels production agency",
    "Short form video editing",
    "Graphic design services",
    "Social media content agency",
    "Brand creative services"
  ],
  alternates: {
    canonical: "https://viralnest.co.in/services/content-creation",
  },
  openGraph: {
    title:
      "Content Creation Services | Viral Nest Media",
    description:
      "High-impact visual content including reels, short videos, graphic design and branded creatives for modern brands.",
    url: "https://viralnest.co.in/services/content-creation",
    siteName: "Viral Nest Media",
    type: "website",
  },
}

export default function ContentCreationPage() {
  return (
    <div className="pt-24">

      {/* Enhanced Service Schema */}
      <Script
        id="content-creation-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Content Creation Services",
            description:
              "Professional reels production, short-form video editing, graphic design and branded creative services.",
            provider: {
              "@type": "Organization",
              name: "Viral Nest Media",
              url: "https://viralnest.co.in",
            },
            areaServed: [
              { "@type": "Country", name: "India" },
              { "@type": "Country", name: "United Arab Emirates" },
              { "@type": "Continent", name: "Europe" }
            ],
            serviceType: "Digital Content Creation",
          }),
        }}
      />

      {/* Hero Section */}
      <section className="py-24 text-center max-w-5xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Professional Content Creation Services
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
          We produce high-impact visual content including Instagram reels, 
          short-form videos, graphic design and branded creatives that capture 
          attention and drive engagement across digital platforms.
        </p>

        <Link
          href="/contact"
          className="mt-10 inline-flex items-center gap-2 bg-primary px-8 py-4 rounded-full text-white font-medium hover:opacity-90 transition"
        >
          Start Your Project <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      {/* Services Section */}
      <section className="bg-muted/30 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center">
            What We Offer
          </h2>

          <div className="grid md:grid-cols-2 gap-10 mt-12">
            <div className="p-6 rounded-xl bg-background shadow-sm">
              <h3 className="text-xl font-semibold">
                Instagram Reels & Short Videos
              </h3>
              <p className="mt-4 text-muted-foreground">
                Trend-driven short-form video production designed to boost 
                engagement and increase organic reach.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-background shadow-sm">
              <h3 className="text-xl font-semibold">
                Professional Graphic Design
              </h3>
              <p className="mt-4 text-muted-foreground">
                High-quality brand graphics, social media creatives and 
                marketing visuals tailored to your identity.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-background shadow-sm">
              <h3 className="text-xl font-semibold">
                Brand Visual Identity
              </h3>
              <p className="mt-4 text-muted-foreground">
                Cohesive brand design systems that strengthen recognition 
                and visual consistency.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-background shadow-sm">
              <h3 className="text-xl font-semibold">
                Trend-Based Creative Concepts
              </h3>
              <p className="mt-4 text-muted-foreground">
                Platform-specific content strategies aligned with trends 
                and audience behavior.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center">
          Why Choose Viral Nest Media?
        </h2>

        <ul className="mt-12 space-y-6">
          {[
            "Platform-optimized creative strategies",
            "Data-driven content planning",
            "High-engagement visual storytelling",
            "Global expertise across India & Europe",
            "Performance-focused creative execution"
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-4">
              <CheckCircle className="text-primary mt-1" size={20} />
              <span className="text-muted-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Final CTA */}
      <section className="bg-primary text-white py-20 text-center px-6">
        <h2 className="text-3xl font-semibold">
          Ready to Elevate Your Brand Content?
        </h2>
        <p className="mt-4 max-w-2xl mx-auto opacity-90">
          Let’s create scroll-stopping content that drives engagement 
          and builds long-term brand authority.
        </p>

        <Link
          href="/contact"
          className="mt-8 inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-medium hover:opacity-90 transition"
        >
          Get Creative Strategy <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

    </div>
  )
}
