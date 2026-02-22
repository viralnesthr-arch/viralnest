import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title:
    "Influencer Marketing Agency | Creator Campaigns & Brand Growth | Viral Nest Media",
  description:
    "Strategic influencer marketing agency connecting brands with the right creators across Instagram, YouTube and TikTok. Performance-driven campaigns for measurable ROI worldwide.",
  keywords: [
    "Influencer marketing agency",
    "Influencer marketing services",
    "Creator marketing agency",
    "Instagram influencer campaigns",
    "YouTube influencer marketing",
    "Brand collaboration agency"
  ],
  alternates: {
    canonical: "https://viralnest.co.in/services/influencer-marketing",
  },
  openGraph: {
    title:
      "Influencer Marketing Agency | Viral Nest Media",
    description:
      "We connect brands with high-impact creators to drive engagement, awareness and measurable ROI.",
    url: "https://viralnest.co.in/services/influencer-marketing",
    siteName: "Viral Nest Media",
    type: "website",
  },
}

export default function InfluencerMarketingPage() {
  return (
    <div className="pt-24">

      {/* Hero Section */}
      <section className="py-24 text-center max-w-5xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Influencer Marketing Agency for Modern Brands
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
          We design and execute performance-driven influencer campaigns that 
          connect your brand with the right creators across Instagram, YouTube 
          and TikTok — driving awareness, engagement and measurable ROI.
        </p>

        <Link
          href="/contact"
          className="mt-10 inline-flex items-center gap-2 bg-primary px-8 py-4 rounded-full text-white font-medium hover:opacity-90 transition"
        >
          Launch Your Campaign <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      {/* Services Section */}
      <section className="bg-muted/30 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center">
            Our Influencer Marketing Services
          </h2>

          <div className="grid md:grid-cols-2 gap-10 mt-12">
            <div className="p-6 rounded-xl bg-background shadow-sm">
              <h3 className="text-xl font-semibold">
                Influencer Research & Vetting
              </h3>
              <p className="mt-4 text-muted-foreground">
                In-depth creator analysis including audience demographics, 
                engagement rates and authenticity checks.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-background shadow-sm">
              <h3 className="text-xl font-semibold">
                Campaign Strategy & Briefing
              </h3>
              <p className="mt-4 text-muted-foreground">
                Strategic planning aligned with your brand objectives, target 
                audience and campaign KPIs.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-background shadow-sm">
              <h3 className="text-xl font-semibold">
                Outreach & Negotiation
              </h3>
              <p className="mt-4 text-muted-foreground">
                End-to-end influencer communication, contract negotiation and 
                campaign coordination.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-background shadow-sm">
              <h3 className="text-xl font-semibold">
                Performance Tracking & ROI Reporting
              </h3>
              <p className="mt-4 text-muted-foreground">
                Data-driven reporting including reach, engagement, conversions 
                and ROI analysis for measurable impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center">
          Why Partner With Viral Nest Media?
        </h2>

        <ul className="mt-12 space-y-6">
          {[
            "Access to verified global creator networks",
            "Data-driven influencer selection process",
            "Performance-focused campaign execution",
            "Transparent reporting & measurable ROI",
            "Long-term brand partnership strategies"
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-4">
              <CheckCircle className="text-primary mt-1" size={20} />
              <span className="text-muted-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Process Section */}
      <section className="py-20 border-t">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-8">
            Our Influencer Campaign Process
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We begin with brand research and audience analysis, identify the 
            right creators, execute campaign strategy and continuously optimize 
            performance based on real-time data insights.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary text-white py-20 text-center px-6">
        <h2 className="text-3xl font-semibold">
          Ready to Amplify Your Brand Through Influencers?
        </h2>
        <p className="mt-4 max-w-2xl mx-auto opacity-90">
          Let’s create impactful influencer collaborations that drive real business results.
        </p>

        <Link
          href="/contact"
          className="mt-8 inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-medium hover:opacity-90 transition"
        >
          Get Campaign Strategy <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

    </div>
  )
}
