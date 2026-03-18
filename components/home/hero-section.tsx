import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title:
    "Influencer Marketing Agency | Creator Campaigns & Brand Growth | Viral Nest Media",

  description:
    "Top influencer marketing agency helping brands grow through Instagram, YouTube & TikTok creators. Data-driven campaigns, verified influencers, and measurable ROI.",

  keywords: [
    "influencer marketing agency",
    "influencer marketing services",
    "instagram influencer marketing",
    "youtube influencer campaigns",
    "tiktok influencer marketing",
    "creator marketing agency",
    "brand collaborations",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/services/influencer-marketing",
  },

  openGraph: {
    title: "Influencer Marketing Agency | Viral Nest Media",
    description:
      "Grow your brand with high-performing influencer campaigns across Instagram, YouTube & TikTok.",
    url: "/services/influencer-marketing",
    siteName: "Viral Nest Media",
    type: "website",
    images: [
      {
        url: "https://viralnest.co.in/og-image.jpg", // 🔥 create this image
        width: 1200,
        height: 630,
        alt: "Influencer Marketing Agency - Viral Nest Media",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Influencer Marketing Agency | Viral Nest Media",
    description:
      "Performance-driven influencer marketing campaigns for global brands.",
    images: ["https://viralnest.co.in/og-image.jpg"],
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
          We help brands scale using strategic influencer marketing across Instagram,
          YouTube, and TikTok. Our campaigns are data-driven, performance-focused,
          and built for measurable ROI.
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
            {[
              {
                title: "Influencer Research & Vetting",
                desc: "We identify and verify high-quality influencers using audience insights, engagement metrics, and authenticity checks.",
              },
              {
                title: "Campaign Strategy & Planning",
                desc: "Custom influencer strategies aligned with your brand goals, audience targeting, and campaign KPIs.",
              },
              {
                title: "Outreach & Negotiation",
                desc: "We handle influencer outreach, communication, pricing negotiation, and campaign execution.",
              },
              {
                title: "Performance Tracking & ROI",
                desc: "Detailed analytics on reach, engagement, conversions, and ROI to measure campaign success.",
              },
            ].map((service, index) => (
              <div key={index} className="p-6 rounded-xl bg-background shadow-sm">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-4 text-muted-foreground">{service.desc}</p>
              </div>
            ))}
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
            "Access to verified global influencers",
            "Data-driven influencer selection",
            "ROI-focused campaign execution",
            "Transparent reporting",
            "Long-term brand growth strategies",
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
            Our Influencer Marketing Process
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We research your brand, identify the right influencers, execute campaigns,
            and continuously optimize performance using real-time data insights.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary text-white py-20 text-center px-6">
        <h2 className="text-3xl font-semibold">
          Ready to Grow with Influencer Marketing?
        </h2>

        <p className="mt-4 max-w-2xl mx-auto opacity-90">
          Let’s create high-impact influencer campaigns that deliver real business results.
        </p>

        <Link
          href="/contact"
          className="mt-8 inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-medium hover:opacity-90 transition"
        >
          Get Free Strategy <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

    </div>
  )
}