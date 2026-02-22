import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Website Development Company | Custom Web Design & SEO | Viral Nest Media",
  description:
    "Professional website development services for businesses in India, Europe and worldwide. We build fast, SEO-optimized and conversion-focused websites designed for growth.",
  keywords: [
    "Website development company",
    "Web development services",
    "Custom website design",
    "SEO website development",
    "Business website development India",
    "Web development Europe",
    "Web development Dubai",
    "Web development europe",
  ],
  alternates: {
    canonical: "https://viralnest.co.in/services/website-development",
  },
  openGraph: {
    title: "Professional Website Development Services | Viral Nest Media",
    description:
      "Custom-built, SEO-friendly and high-performance websites for businesses worldwide.",
    url: "https://viralnest.co.in/services/website-development",
    siteName: "Viral Nest Media",
    type: "website",
  },
}

export default function WebsiteDevelopmentPage() {
  return (
    <div className="pt-24">

      {/* Hero Section */}
      <section className="text-center max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Custom Website Development Services
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
          We design and develop high-performance, SEO-optimized and conversion-focused 
          websites for businesses in India, Europe and worldwide. Our websites are 
          built to generate traffic, build authority and convert visitors into customers.
        </p>

        <Link
          href="/contact"
          className="mt-10 inline-flex items-center gap-2 bg-primary px-8 py-4 rounded-full text-white font-medium hover:opacity-90 transition"
        >
          Start Your Project <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      {/* Services Section */}
      <section className="bg-muted/30 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center">
            What We Deliver
          </h2>

          <div className="grid md:grid-cols-2 gap-10 mt-12">
            <div className="p-6 rounded-xl bg-background shadow-sm">
              <h3 className="text-xl font-semibold">
                SEO-Optimized Website Architecture
              </h3>
              <p className="mt-4 text-muted-foreground">
                Clean technical structure, schema integration, optimized URLs 
                and search engine-friendly coding practices to improve rankings.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-background shadow-sm">
              <h3 className="text-xl font-semibold">
                Mobile-First Responsive Design
              </h3>
              <p className="mt-4 text-muted-foreground">
                Seamless performance across mobile, tablet and desktop devices 
                to maximize engagement and usability.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-background shadow-sm">
              <h3 className="text-xl font-semibold">
                Conversion-Focused UI/UX
              </h3>
              <p className="mt-4 text-muted-foreground">
                Strategic layouts, compelling CTAs and optimized user journeys 
                designed to increase leads and sales.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-background shadow-sm">
              <h3 className="text-xl font-semibold">
                Speed & Performance Optimization
              </h3>
              <p className="mt-4 text-muted-foreground">
                Core Web Vitals optimization, fast load speeds and scalable 
                infrastructure for long-term growth.
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
            "Global website development expertise",
            "SEO-first technical approach",
            "Modern scalable technologies",
            "Conversion-driven strategy",
            "Ongoing support & optimization"
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
          Ready to Build a High-Performance Website?
        </h2>
        <p className="mt-4 max-w-2xl mx-auto opacity-90">
          Let’s create a powerful digital presence for your business — whether 
          you're in India, Europe or anywhere in the world.
        </p>

        <Link
          href="/contact"
          className="mt-8 inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-medium hover:opacity-90 transition"
        >
          Get a Free Consultation <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </div>
  )
}
