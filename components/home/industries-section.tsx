import Link from "next/link"
import {
  Building2,
  HeartPulse,
  ShoppingBag,
  Rocket,
  UserCircle,
  Gamepad2,
  Hotel,
  GraduationCap,
} from "lucide-react"

const industries = [
  { icon: Building2, name: "Real Estate" },
  { icon: HeartPulse, name: "Healthcare" },
  { icon: ShoppingBag, name: "E-commerce" },
  { icon: Rocket, name: "Startups" },
  { icon: UserCircle, name: "Personal Brands" },
  { icon: Gamepad2, name: "Gaming & Entertainment" },
  { icon: Hotel, name: "Hospitality" },
  { icon: GraduationCap, name: "Education" },
]

export function IndustriesSection() {
  return (
    <section className="border-t border-primary/10 bg-card/30 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Expertise
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Industries We Work With
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {industries.map((industry) => (
            <Link
              key={industry.name}
              href="/industries"
              className="group flex flex-col items-center gap-4 rounded-2xl border border-border/50 bg-card/40 p-8 text-center backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-card/60 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-transform group-hover:scale-110">
                <industry.icon className="h-7 w-7 text-primary" />
              </div>
              <span className="text-sm font-semibold text-foreground">{industry.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
