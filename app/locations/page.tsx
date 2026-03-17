import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import { ArrowRight, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title:
    "Digital Marketing Agency in Dubai, Europe & India | Viral Nest Media",
  description:
    "Looking for a top digital marketing agency in Dubai, Europe or India? Viral Nest Media helps brands grow with social media marketing, branding, influencer campaigns and performance-driven strategies.",
  keywords: [
    "digital marketing agency Dubai",
    "social media agency UAE",
    "branding agency Dubai",
    "digital marketing agency Europe",
    "social media agency India",
    "branding agency India",
    "performance marketing agency",
  ],
  alternates: {
    canonical: "/locations",
  },
}

const locations = [
  {
    region: "Dubai",
    slug: "dubai",
    headline: "Digital Marketing Agency in Dubai",
    description:
      "We help Dubai businesses grow through social media marketing, branding and lead generation strategies tailored for competitive markets in the UAE.",
  },
  {
    region: "Europe",
    slug: "europe",
    headline: "Digital Marketing Agency in Europe",
    description:
      "We support businesses across Europe with customized digital marketing solutions focused on brand growth, engagement and performance.",
  },
  {
    region: "India",
    slug: "india",
    headline: "Digital Marketing Agency in India",
    description:
      "Helping Indian businesses scale with affordable and performance-driven digital marketing strategies tailored to diverse regional markets.",
  },
]

export default function LocationsPage() {
  return (
    <div className="pt-20">

      {/* HERO */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Digital Marketing Agency Serving Dubai, Europe & India
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            Explore our dedicated regional pages to learn how we help brands grow
            in competitive global markets.
          </p>
        </div>
      </section>

      {/* LOCATION CARDS */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 md:grid-cols-3">

            {locations.map((location) => (
              <div
                key={location.region}
                className="rounded-2xl border border-border/50 p-8 transition hover:shadow-lg"
              >
                <div className="mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="font-semibold text-primary">
                    {location.region}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-foreground">
                  <Link
                    href={`/locations/${location.slug}`}
                    className="hover:text-primary"
                  >
                    {location.headline}
                  </Link>
                </h2>

                <p className="mt-4 text-sm text-muted-foreground">
                  {location.description}
                </p>

                <Link
                  href={`/locations/${location.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                >
                  Learn More About {location.region}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* STRUCTURED DATA */}
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Viral Nest Media",
            url: "https://yourdomain.com",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Digital Marketing Locations",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    areaServed: "Dubai"
                  }
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    areaServed: "India"
                  }
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    areaServed: "Europe"
                  }
                }
              ]
            }
          }),
        }}
      />

    </div>
  )
}
