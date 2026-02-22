import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title:
    "Social Media Management Company | Instagram & Growth Agency | Viral Nest Media",
  description:
    "Leading social media management company providing Instagram marketing, content strategy, community management and growth campaigns for brands in India, Europe and worldwide.",
  keywords: [
    "Social media management company",
    "Instagram marketing agency",
    "Social media marketing services",
    "Social media agency India",
    "Social media growth Europe",
    "Social media growth Dubai",
    "Content strategy agency"
  ],
  alternates: {
    canonical: "https://viralnest.co.in/services/social-media-management",
  },
  openGraph: {
    title:
      "Social Media Management Company | Viral Nest Media",
    description:
      "Strategic social media marketing services including content creation, engagement, analytics and growth campaigns.",
    url: "https://viralnest.co.in/services/social-media-management",
    siteName: "Viral Nest Media",
    type: "website",
  },
}

export default function SocialMediaManagementPage() {
  return (
    <div className="pt-24">

      {/* Hero Section */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl leading-tight">
            Social Media Management Company for Modern Brands
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
            We help brands scale through strategic content planning, daily posting,
            audience engagement and performance-driven campaigns across Instagram,
            LinkedIn, Facebook, TikTok and YouTube.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:brightness-110"
          >
            Book Free Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 border-t">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold mb-6">
            Struggling With Low Engagement & Inconsistent Growth?
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Many businesses waste time on social media without a structured
            content plan, analytics tracking or performance optimization.
            Without strategy, growth becomes unpredictable and ROI remains low.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 border-t bg-muted/30">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Social Media Management Services
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                title: "Platform-Specific Content Strategy",
                desc: "Custom content strategies aligned with your audience and business goals."
              },
              {
                title: "Daily Posting & Community Management",
                desc: "Consistent posting, engagement handling and audience relationship building."
              },
              {
                title: "Analytics & Performance Reporting",
                desc: "Data-driven optimization using insights, KPIs and engagement tracking."
              },
              {
                title: "Paid & Organic Growth Campaigns",
                desc: "Strategic ad campaigns combined with organic growth systems."
              },
            ].map((service) => (
              <div key={service.title} className="p-6 rounded-xl bg-background shadow-sm">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-4 text-muted-foreground">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 border-t">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold mb-8">
            Why Choose Viral Nest Media?
          </h2>

          <ul className="space-y-5">
            {[
              "Data-driven social media growth strategies",
              "Content built for engagement and conversions",
              "Global expertise across India & Europe markets",
              "Performance-focused campaign execution",
              "Long-term brand building approach"
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 border-t">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold mb-10">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-lg">
                How much does social media management cost?
              </h3>
              <p className="text-muted-foreground mt-2">
                Pricing depends on platforms, content volume and campaign scope.
                We offer customized packages based on your business goals.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Which platforms do you manage?
              </h3>
              <p className="text-muted-foreground mt-2">
                We manage Instagram, LinkedIn, Facebook, TikTok and YouTube
                depending on your audience and industry.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                When will I see results?
              </h3>
              <p className="text-muted-foreground mt-2">
                Organic growth typically shows measurable improvement within
                60–90 days depending on niche competition and strategy execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 border-t bg-primary text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold">
            Ready to Scale Your Social Media Presence?
          </h2>
          <p className="mt-4 opacity-90">
            Let’s build a data-driven social media strategy tailored to your brand.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-primary shadow-lg transition-all hover:brightness-95"
          >
            Get Free Audit
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

    </div>
  )
}
