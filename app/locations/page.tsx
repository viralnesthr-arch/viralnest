import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Locations | Viral Nest Media - Dubai, Europe & India",
  description:
    "Viral Nest Media serves businesses across Dubai, Europe and India with customized digital marketing solutions focused on brand growth and organic visibility.",
}

const locations = [
  {
    region: "Dubai",
    headline: "Digital Marketing Agency in Dubai",
    description:
      "We help Dubai businesses grow through social media marketing, branding and lead generation strategies tailored for competitive markets. From real estate to hospitality, our Dubai-focused strategies drive results in the UAE's dynamic business landscape.",
    services: [
      "Social media management",
      "Content creation",
      "Influencer campaigns",
      "Website development",
      "Lead generation",
    ],
    keywords: ["digital marketing agency Dubai", "social media agency UAE", "branding agency Dubai"],
  },
  {
    region: "Europe",
    headline: "Digital Marketing Agency in Europe",
    description:
      "We support businesses across Europe with customized digital marketing solutions focused on brand growth, audience engagement and organic visibility. Our strategies are tailored to European markets, regulations and consumer behavior.",
    services: [
      "Multi-language content strategy",
      "Social media management",
      "Brand positioning",
      "Performance marketing",
      "Influencer partnerships",
    ],
    keywords: ["digital marketing agency Europe", "social media agency Europe", "branding agency Europe"],
  },
  {
    region: "India",
    headline: "Digital Marketing Agency in India",
    description:
      "Helping Indian businesses scale with affordable and performance-driven social media and branding strategies. We understand the diverse Indian market and create campaigns that resonate with local audiences while building global brand credibility.",
    services: [
      "Social media management",
      "Content creation & reels",
      "Startup branding",
      "YouTube management",
      "Website development",
    ],
    keywords: ["digital marketing company India", "social media agency India", "branding agency India"],
  },
]

export default function LocationsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Global Reach
          </p>
          <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
            We Serve Brands Worldwide
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            With clients across three major markets, we bring localized expertise with a global perspective to every project.
          </p>
        </div>
      </section>

      {/* Location Blocks */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-12">
            {locations.map((location) => (
              <div
                key={location.region}
                className="rounded-2xl border border-border/50 bg-card/40 p-8 backdrop-blur-sm transition-all hover:border-primary/30 md:p-12"
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                    {location.region}
                  </span>
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                  {location.headline}
                </h2>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
                  {location.description}
                </p>

                <div className="mt-8 grid gap-8 lg:grid-cols-2">
                  <div>
                    <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      Services Available
                    </h4>
                    <ul className="flex flex-col gap-3">
                      {location.services.map((service) => (
                        <li key={service} className="flex items-center gap-3 text-sm text-foreground">
                          <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      Key Focus Areas
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {location.keywords.map((keyword) => (
                        <span
                          key={keyword}
                          className="rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-foreground"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-opacity hover:opacity-80"
                >
                  Get Started in {location.region}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
