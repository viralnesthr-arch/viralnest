import Link from "next/link"
import {
  Share2,
  Film,
  Users,
  Lightbulb,
  Globe,
  Youtube,
  TrendingUp,
} from "lucide-react"

const services = [
  {
    icon: Share2,
    title: "Social Media Management",
    description: "Complete content strategy, posting, engagement and analytics across all platforms.",
  },
  {
    icon: Film,
    title: "Content Creation & Reels",
    description: "High-quality graphics, reels, video editing and brand creatives that captivate.",
  },
  {
    icon: Users,
    title: "Influencer Marketing",
    description: "Influencer identification, outreach and campaign execution for maximum impact.",
  },
  {
    icon: Lightbulb,
    title: "Branding & Strategy",
    description: "Brand positioning, audience strategy and growth planning for long-term success.",
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "SEO-optimized websites designed for business growth and lead generation.",
  },
  {
    icon: Youtube,
    title: "YouTube Management",
    description: "Channel setup, SEO optimization and content strategy for video dominance.",
  },
  {
    icon: TrendingUp,
    title: "Performance Growth",
    description: "Data-driven strategies to scale your business and maximize ROI.",
  },
]

export function ServicesOverview() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            What We Do
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Our Global Services
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.title}
              href="/services"
              className="group flex flex-col rounded-2xl border border-border/50 bg-card/40 p-8 backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-card/70 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-display text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
