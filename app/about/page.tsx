import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Target, Eye, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | Viral Nest Media - Digital Marketing Agency",
  description:
    "Learn about Viral Nest Media, a results-driven digital marketing and branding agency helping businesses across Dubai, Europe and India grow.",
}

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "200+", label: "Brands Served" },
  { value: "3", label: "Global Regions" },
  { value: "95%", label: "Client Retention" },
]

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To help brands achieve consistent growth, authority and long-term digital success through strategic and customized marketing solutions.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To become the most trusted digital marketing partner for businesses scaling across international markets.",
  },
  {
    icon: Zap,
    title: "Our Approach",
    description:
      "Data-driven strategies combined with creative storytelling to build genuine connections between brands and their audiences.",
  },
]

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                About Us
              </p>
              <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
                Results-Driven Digital Growth Agency
              </h1>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Viral Nest Media is a results-driven digital marketing and branding agency helping
                businesses across Dubai, Europe and India grow through strategic content, social
                media and digital visibility.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                With over 10+ years of experience, we specialize in building strong brand presence,
                generating organic leads and scaling businesses through customized marketing
                strategies.
              </p>
              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:shadow-primary/50 hover:brightness-110"
              >
                Work With Us
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-primary/20">
              <Image
                src="/images/about-team.png"
                alt="Viral Nest Media team collaborating on digital strategy"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-primary/10 bg-card/30 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{stat.value}</p>
                <p className="mt-2 text-sm font-medium text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Approach */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="flex flex-col gap-4 rounded-2xl border border-border/50 bg-card/40 p-8 backdrop-blur-sm transition-all hover:border-primary/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-primary/10 bg-card/30 py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Ready to Scale Your Brand?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Let&apos;s discuss your business goals and craft a strategy tailored to your market.
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
