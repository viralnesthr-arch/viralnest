import { Award, Globe, Leaf, UserCheck, BarChart3 } from "lucide-react"

const reasons = [
  {
    icon: Award,
    stat: "7+",
    title: "Years Experience",
    description: "Proven track record delivering results for brands across multiple markets.",
  },
  {
    icon: Globe,
    stat: "3",
    title: "Global Regions",
    description: "Seamless communication and strategy execution across time zones.",
  },
  {
    icon: Leaf,
    stat: "100%",
    title: "Organic Focus",
    description: "Sustainable strategies that build genuine, long-lasting brand authority.",
  },
  {
    icon: UserCheck,
    stat: "1:1",
    title: "Dedicated Manager",
    description: "A single point of contact who understands your business inside out.",
  },
  {
    icon: BarChart3,
    stat: "95%",
    title: "Client Retention",
    description: "Every decision backed by analytics, insights and measurable KPIs.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Why Us
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Why Clients Choose Viral Nest
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className={`flex flex-col gap-4 rounded-2xl border border-border/50 bg-card/40 p-8 backdrop-blur-sm ${
                index === reasons.length - 1 && reasons.length % 3 === 2
                  ? "md:col-span-2 lg:col-span-1"
                  : ""
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <reason.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="font-display text-3xl font-bold text-primary">{reason.stat}</span>
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">
                {reason.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
