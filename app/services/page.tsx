import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  Share2,
  Film,
  Users,
  Lightbulb,
  Globe,
  Youtube,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Services | Viral Nest Media - Digital Marketing & Branding",
  description:
    "Explore our full range of digital marketing services including social media management, content creation, influencer marketing, branding & strategy, website development and YouTube management.",
}

const services = [
  {
    icon: Share2,
    title: "Social Media Management",
    description:
      "Complete content strategy, posting, engagement and analytics. We manage your social media presence from end to end, ensuring consistent brand messaging, audience growth and measurable results across all platforms.",
    features: [
      "Platform-specific content strategy",
      "Daily posting & community management",
      "Engagement analytics & reporting",
      "Audience growth optimization",
    ],
  },
  {
    icon: Film,
    title: "Content Creation",
    description:
      "High-quality graphics, reels, video editing and brand creatives. Our creative team produces scroll-stopping content that captures attention and drives engagement across Instagram, TikTok and beyond.",
    features: [
      "Professional graphic design",
      "Short-form video & Reels production",
      "Brand-consistent visual assets",
      "Trend-driven creative concepts",
    ],
  },
  {
    icon: Users,
    title: "Influencer Marketing",
    description:
      "Influencer identification, outreach and campaign execution. We connect your brand with the right voices to amplify your message and reach new audiences authentically.",
    features: [
      "Influencer research & vetting",
      "Campaign strategy & briefing",
      "Outreach & negotiation",
      "Performance tracking & ROI analysis",
    ],
  },
  {
    icon: Lightbulb,
    title: "Branding & Strategy",
    description:
      "Brand positioning, audience strategy and growth planning. We define your brand identity and create a roadmap for sustainable growth that differentiates you in competitive markets.",
    features: [
      "Brand identity development",
      "Competitive market analysis",
      "Target audience profiling",
      "Growth strategy roadmap",
    ],
  },
  {
    icon: Globe,
    title: "Website Development",
    description:
      "SEO-optimized websites designed for business growth. We build fast, modern and conversion-focused websites that serve as the digital foundation for your brand.",
    features: [
      "SEO-optimized architecture",
      "Responsive, mobile-first design",
      "Lead capture & conversion optimization",
      "Performance & speed tuning",
    ],
  },
  {
    icon: Youtube,
    title: "YouTube Management",
    description:
      "Channel setup, SEO optimization and content strategy. We help you build a YouTube presence that drives views, subscribers and long-term brand authority through video.",
    features: [
      "Channel setup & optimization",
      "Video SEO & keyword strategy",
      "Thumbnail & title optimization",
      "Content calendar planning",
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Our Services
          </p>
          <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
            360&deg; Digital Marketing Solutions
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            From strategy to execution, we deliver comprehensive digital marketing services
            tailored to your business goals and market.
          </p>
        </div>
      </section>

      {/* Service Blocks */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-12">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`flex flex-col gap-8 rounded-2xl border border-border/50 p-8 backdrop-blur-sm md:p-12 lg:flex-row lg:items-center lg:gap-16 ${
                  index % 2 === 0 ? "bg-card/40" : "bg-secondary/30"
                } transition-all hover:border-primary/30`}
              >
                <div className="flex-1">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-opacity hover:opacity-80"
                  >
                    Book a Free Consultation
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="flex-shrink-0 lg:w-80">
                  <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    What&apos;s Included
                  </h4>
                  <ul className="flex flex-col gap-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm text-foreground"
                      >
                        <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-primary/10 bg-card/30 py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Not Sure What You Need?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Book a free strategy call and we&apos;ll audit your current digital presence and
            recommend the best plan for your business.
          </p>
          <Link
            href="/contact"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:shadow-primary/50 hover:brightness-110"
          >
            Get Free Audit
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  )
}
