import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  Building2,
  HeartPulse,
  ShoppingBag,
  Rocket,
  UserCircle,
  Gamepad2,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Industries | Viral Nest Media - Marketing for Every Sector",
  description:
    "We serve real estate, healthcare, e-commerce, startups, personal brands and gaming industries with tailored digital marketing strategies.",
}

const industries = [
  {
    icon: Building2,
    title: "Marketing for Real Estate",
    description:
      "Property promotion and brand visibility. We create compelling visual content, run targeted campaigns and build authority for real estate brands through social media, video tours and lead generation strategies.",
    results: "3X increase in property inquiries through targeted social campaigns.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare Marketing",
    description:
      "Trust-building content and patient awareness. We help healthcare providers connect with patients through educational content, reputation management and compliant digital marketing strategies.",
    results: "50% growth in patient awareness through educational content campaigns.",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce Marketing",
    description:
      "Product-focused reels and influencer collaborations. We drive sales for e-commerce brands through high-converting content, influencer partnerships and strategic social commerce campaigns.",
    results: "2X return on ad spend through influencer and reels-first strategy.",
  },
  {
    icon: Rocket,
    title: "Startup & Personal Branding",
    description:
      "Authority building and audience growth. We help founders and startups establish their voice, build credibility and grow a loyal following through thought leadership and strategic content.",
    results: "10K+ followers gained organically in 90 days for personal brand clients.",
  },
  {
    icon: UserCircle,
    title: "Personal Brands",
    description:
      "Transform your personal brand into a powerful business asset. We craft your unique narrative, create consistent content and position you as an authority in your niche across all platforms.",
    results: "Consistent 5X engagement growth for personal brand clients.",
  },
  {
    icon: Gamepad2,
    title: "Gaming & Entertainment",
    description:
      "User engagement and community growth. We build thriving gaming communities, create viral content and drive engagement through platform-specific strategies tailored to gaming audiences.",
    results: "200% increase in community engagement for gaming brands.",
  },
]

export default function IndustriesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Industries
          </p>
          <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
            Tailored Strategies for Every Industry
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            We understand that every industry has unique challenges. Our specialized approach ensures
            your marketing strategy is built for your specific market.
          </p>
        </div>
      </section>

      {/* Industry Cards */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {industries.map((industry) => (
              <div
                key={industry.title}
                className="flex flex-col rounded-2xl border border-border/50 bg-card/40 p-8 backdrop-blur-sm transition-all hover:border-primary/30 md:p-10"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                  <industry.icon className="h-7 w-7 text-primary" />
                </div>
                <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                  {industry.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {industry.description}
                </p>
                <div className="mt-6 rounded-xl border border-primary/10 bg-primary/5 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Results
                  </p>
                  <p className="mt-1 text-sm font-medium text-foreground">{industry.results}</p>
                </div>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-opacity hover:opacity-80"
                >
                  Get Industry Strategy
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-primary/10 bg-card/30 py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Don&apos;t See Your Industry?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            We work with businesses across all sectors. Book a free consultation and we&apos;ll
            create a customized strategy for your specific market.
          </p>
          <Link
            href="/contact"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:shadow-primary/50 hover:brightness-110"
          >
            Book Free Consultation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  )
}
