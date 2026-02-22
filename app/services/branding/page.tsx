import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Branding Agency | Brand Strategy & Identity Services | Viral Nest Media",
  description:
    "Expert branding and strategy services including brand identity, positioning and growth roadmap. Serving businesses across Dubai, India and Europe.",
  keywords: [
    "branding agency",
    "brand strategy services",
    "brand identity development",
    "logo design agency",
    "branding company Dubai",
    "branding agency India",
    "brand strategy Europe"
  ],
  alternates: {
    canonical: "https://viralnest.co.in/services/branding",
  },
  openGraph: {
    title: "Branding Agency | Brand Strategy & Identity Services",
    description:
      "Build a powerful brand identity and strategic growth roadmap with Viral Nest Media.",
    url: "https://viralnest.co.in/services/branding",
    siteName: "Viral Nest Media",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Branding Agency | Viral Nest Media",
    description:
      "Brand identity, positioning and strategic growth planning for modern businesses.",
  },
}

export default function BrandingPage() {
  return (
    <div className="pt-20">
      <Script
        id="branding-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Branding & Strategy Services",
            description:
              "Professional branding services including brand identity, positioning and growth strategy.",
            serviceType: "Branding and Strategy",
            provider: {
              "@type": "Organization",
              name: "Viral Nest Media",
              url: "https://viralnest.co.in",
            },
            areaServed: [
              {
                "@type": "City",
                name: "Dubai",
              },
              {
                "@type": "Country",
                name: "India",
              },
              {
                "@type": "Place",
                name: "Europe",
              },
            ],
          }),
        }}
      />

      <section className="py-24 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold">
          Branding & Strategy Services
        </h1>
        <p className="mt-6 text-muted-foreground">
          We build powerful brand identities that differentiate your business
          in competitive markets. From positioning to execution, we design
          brands that scale across Dubai, India and Europe.
        </p>

        <div className="mt-10 text-left space-y-4">
          <h2 className="text-2xl font-semibold">Our Branding Services</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Brand Identity Development</li>
            <li>Logo & Visual Guidelines</li>
            <li>Market & Competitor Research</li>
            <li>Growth Strategy Planning</li>
          </ul>
        </div>

        <Link
          href="/contact"
          className="mt-10 inline-flex items-center gap-2 bg-primary px-6 py-3 rounded-full text-white"
        >
          Build Your Brand <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </div>
  )
}
