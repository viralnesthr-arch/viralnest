import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "YouTube Management Services | Grow Your Channel | Viral Nest Media",
  description:
    "Professional YouTube management services including channel SEO, thumbnail optimization, content strategy, growth systems and monetization planning. Scale your YouTube channel with Viral Nest Media.",
  keywords: [
    "YouTube management services",
    "YouTube SEO services",
    "YouTube growth agency",
    "channel optimization",
    "YouTube thumbnail design",
    "YouTube strategy"
  ],
  alternates: {
    canonical: "https://viralnest.co.in/services/youtube-management",
  },
  openGraph: {
    title: "YouTube Management Services | Viral Nest Media",
    description:
      "Scale your YouTube channel with expert SEO, thumbnails, strategy and growth systems.",
    url: "https://viralnest.co.in/services/youtube-management",
    siteName: "Viral Nest Media",
    type: "website",
  },
}

export default function YouTubeManagementPage() {
  return (
    <div className="pt-24">

      {/* Hero Section */}
      <section className="text-center max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Professional YouTube Management Services
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
          We help creators, brands and businesses grow on YouTube with strategic
          content planning, powerful SEO optimization, high-converting thumbnails
          and data-driven growth systems.
        </p>

        <Link
          href="/contact"
          className="mt-10 inline-flex items-center gap-2 bg-primary px-8 py-4 rounded-full text-white font-medium hover:opacity-90 transition"
        >
          Grow Your Channel <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      {/* Services Section */}
      <section className="bg-muted/30 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center">
            Our YouTube Channel Growth Services
          </h2>

          <div className="grid md:grid-cols-2 gap-10 mt-12">
            <div className="p-6 rounded-xl bg-background shadow-sm">
              <h3 className="text-xl font-semibold">Channel Setup & Optimization</h3>
              <p className="mt-4 text-muted-foreground">
                Complete channel branding, keyword-optimized descriptions,
                playlist structuring and SEO-friendly setup to maximize discoverability.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-background shadow-sm">
              <h3 className="text-xl font-semibold">YouTube SEO & Keyword Strategy</h3>
              <p className="mt-4 text-muted-foreground">
                Advanced keyword research, metadata optimization, ranking strategies
                and algorithm alignment to boost organic visibility.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-background shadow-sm">
              <h3 className="text-xl font-semibold">Thumbnail & Title Optimization</h3>
              <p className="mt-4 text-muted-foreground">
                High CTR thumbnails and psychologically optimized titles designed
                to increase clicks and watch time.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-background shadow-sm">
              <h3 className="text-xl font-semibold">Content Strategy & Growth Plan</h3>
              <p className="mt-4 text-muted-foreground">
                Custom content calendar, competitor analysis, retention strategy
                and monetization roadmap for long-term scaling.
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
            "Data-driven YouTube growth strategies",
            "SEO-focused optimization techniques",
            "Consistent content planning systems",
            "Long-term channel scaling approach",
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-4">
              <CheckCircle className="text-primary mt-1" size={20} />
              <span className="text-muted-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-20 text-center px-6">
        <h2 className="text-3xl font-semibold">
          Ready to Scale Your YouTube Channel?
        </h2>
        <p className="mt-4 max-w-2xl mx-auto opacity-90">
          Let’s build a powerful content strategy and turn your channel into
          a consistent growth machine.
        </p>

        <Link
          href="/contact"
          className="mt-8 inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-medium hover:opacity-90 transition"
        >
          Get Started Today <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </div>
  )
}
