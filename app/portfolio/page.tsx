import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Portfolio & Case Studies | Digital Marketing Results | Viral Nest Media",
  description:
    "Explore real digital marketing case studies by Viral Nest Media. See how we helped brands across Dubai, Europe, and India achieve measurable growth through social media marketing, branding, and performance campaigns.",
  keywords: [
    "Digital Marketing Case Studies",
    "Social Media Marketing Results",
    "Dubai Marketing Agency",
    "Hospitality Marketing",
    "Real Estate Lead Generation",
    "Brand Growth Case Study",
    "Viral Nest Media Portfolio",
  ],
  alternates: {
    canonical: "https://viralnest.co.in/portfolio",
  },
  openGraph: {
    title: "Portfolio & Case Studies | Viral Nest Media",
    description:
      "Discover how Viral Nest Media delivers measurable growth through strategic digital marketing campaigns.",
    url: "https://viralnest.co.in/portfolio",
    siteName: "Viral Nest Media",
    images: [
      {
        url: "https://viralnest.co.in/og-portfolio.jpg",
        width: 1200,
        height: 630,
        alt: "Viral Nest Media Case Studies",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio & Case Studies | Viral Nest Media",
    description:
      "Real digital marketing results across hospitality, real estate, fitness and luxury brands.",
    images: ["https://viralnest.co.in/og-portfolio.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

const clientLogos = [
  "/images/accor.png",
  "/images/adama.png",
  "/images/baazar_logo.png",
  "/images/biba-logo.png",
  "/images/blue-tokai.png",
  "/images/dream11.png",
  "/images/faces-canada.png",
  "/images/ganesh.jpg",
  "/images/GBaCr8TXYAA2xMd.png",
  "/images/heermaya.png",
  "/images/HIMMS.png",
  "/images/Honda_Motorcycle.png",
  "/images/HPJ.png",
  "/images/IILM.png",
  "/images/Joy.jpg",
  "/images/kumbh-mela.png",
  "/images/landmark.png",
  "/images/lasolitaire.png",
  "/images/maruti-suzuki.png",
  "/images/beer-biceps.jpg",
  "/images/meshki-logo.png",
  "/images/Ministry_of_External_Affairs_India.png",
  "/images/MOK.jpg",
  "/images/MSP.png",
  "/images/Novotel.png",
  "/images/omara-logo.jpg",
  "/images/pandit-jasraj.jpeg",
  "/images/Patanjali-Logo.png",
  "/images/pran.png",
  "/images/PVR.png",
  "/images/rajshamani.png",
  "/images/Roadster.png",
  "/images/SGT.png",
  "/images/shalimars.png",
  "/images/Škoda.png",
  "/images/taj.png",
]

const caseStudies = [
  {
    image: "/images/case-jewelry.png",
    industry: "Jewelry Brand",
    title: "3X Engagement Growth in 60 Days",
    challenge:
      "A luxury jewelry brand in Dubai was struggling with low engagement and minimal online presence despite having high-quality products.",
    strategy:
      "We implemented a reels-first content strategy, partnered with micro-influencers and created a cohesive visual brand identity across Instagram and TikTok.",
    results: [
      "3X increase in engagement rate",
      "150% growth in followers",
      "45% increase in website traffic from social",
      "2X more inquiries per month",
    ],
  },
  {
    image: "/images/case-realestate.png",
    industry: "Real Estate",
    title: "200+ Qualified Leads in 90 Days",
    challenge:
      "A premium real estate developer in Dubai needed to generate qualified leads for luxury property listings through digital channels.",
    strategy:
      "We built a comprehensive social media presence, created virtual tour content, ran targeted campaigns and optimized their lead funnel with landing pages.",
    results: [
      "200+ qualified leads generated",
      "5X ROI on digital spend",
      "60% reduction in cost per lead",
      "Brand awareness up by 300%",
    ],
  },
  {
    image: "/images/case-fitness.png",
    industry: "Fitness & Wellness",
    title: "From 0 to 50K Followers Organically",
    challenge:
      "A European fitness brand wanted to build a strong social media following and establish authority in a saturated wellness market.",
    strategy:
      "We developed a content pillar strategy, produced daily reels and stories, built a community engagement framework and leveraged trending audio and formats.",
    results: [
      "50K followers in 6 months",
      "Avg 500K+ monthly impressions",
      "Featured on explore page 12+ times",
      "Partnership deals from organic reach",
    ],
  },
  {
    image: "/images/case-restaurant.png",
    industry: "Hospitality",
    title: "40% Revenue Increase Through Social",
    challenge:
      "An upscale restaurant chain in India was losing foot traffic to competitors with stronger digital presence and social media marketing.",
    strategy:
      "We revamped their social media with professional food photography, influencer dining experiences, local SEO optimization and a review management strategy.",
    results: [
      "40% increase in monthly revenue",
      "200% growth in social following",
      "85% increase in online reservations",
      "Top-rated on Google Maps locally",
    ],
  },
]

export default function PortfolioPage() {
  return (
    <div className="pt-20">
      
      {/* Structured Data */}
      <Script
        id="portfolio-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Digital Marketing Case Studies",
            itemListElement: caseStudies.map((study, index) => ({
              "@type": "CreativeWork",
              position: index + 1,
              name: study.title,
              description: study.challenge,
            })),
          }),
        }}
      />

      {/* Hero */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Portfolio
          </p>
          <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
            Case Studies & Results
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Real results for real brands. Explore how our strategies have driven measurable growth
            for businesses across different industries and markets.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-16">
            {caseStudies.map((study, index) => (
              <div
                key={study.title}
                className="overflow-hidden rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm transition-transform will-change-transform hover:scale-[1.01] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-4"
                tabIndex={0}
                role="region"
                aria-label={study.title}
              >
                <div
                  className={`flex flex-col ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className="relative aspect-[4/3] lg:aspect-auto lg:w-1/2">
                    <Image
                      src={study.image}
                      alt={`Digital marketing case study for ${study.industry}`}
                      fill
                      loading="lazy"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                    <div className="absolute left-6 top-6">
                      <span className="rounded-full bg-gradient-to-r from-primary to-accent px-4 py-1.5 text-xs font-semibold text-primary-foreground">
                        {study.industry}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col justify-center p-8 md:p-12">
                    <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                      {study.title}
                    </h2>

                    <div className="mt-6">
                      <h4 className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                        Challenge
                      </h4>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {study.challenge}
                      </p>
                    </div>

                    <div className="mt-4">
                      <h4 className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                        Strategy
                      </h4>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {study.strategy}
                      </p>
                    </div>

                    <div className="mt-6">
                      <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                        Results
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {study.results.map((result) => (
                          <div
                            key={result}
                            className="rounded-xl border border-primary/10 bg-primary/5 p-3"
                          >
                            <p className="text-xs font-medium text-foreground">{result}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-10 text-center text-sm font-semibold uppercase tracking-[0.25em] text-muted-foreground">
            Our Association with Brands
          </p>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 items-center">
            {clientLogos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center rounded-2xl border border-white/10 bg-white p-4 shadow-sm transition hover:scale-105"
              >
                <Image
                  src={logo}
                  alt={`Client brand logo ${index + 1}`}
                  width={160}
                  height={90}
                  className="object-contain grayscale hover:grayscale-0 transition"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-primary/10 bg-card/30 py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Want Results Like These?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Book a free strategy call and let&apos;s discuss how we can achieve similar growth for
            your brand.
          </p>
          <Link
            href="/contact"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:shadow-primary/50 hover:brightness-110"
          >
            Book Free Strategy Call
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  )
}
