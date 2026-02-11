import type { Metadata } from "next"
import { ContactForm } from "@/components/contact/contact-form"
import { Mail, MessageCircle, MapPin, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us | Viral Nest Media - Book a Free Strategy Call",
  description:
    "Book a free strategy call to discuss your business growth. Contact Viral Nest Media for social media management, branding and digital marketing services.",
}

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    value: "viralnesthr@gmail.com",
    href: "mailto:viralnesthr@gmail.com",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "Chat with us now",
    href: "https://wa.me/8802684249",
  },
  {
    icon: MapPin,
    title: "Locations",
    value: "Dubai / Europe / India",
    href: "/locations",
  },
  {
    icon: Clock,
    title: "Response Time",
    value: "Within 24 hours",
    href: null,
  },
]

export default function ContactPage() {
  return (
    <div className="pt-20">
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Left */}
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Contact
              </p>
              <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
                Let&apos;s Grow Your Brand
              </h1>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Book a free strategy call to discuss your business growth. Our team will audit your
                current digital presence and recommend the best plan for your brand.
              </p>

              <div className="mt-12 grid gap-6 sm:grid-cols-2">
                {contactInfo.map((info) => (
                  <div
                    key={info.title}
                    className="flex flex-col gap-3 rounded-2xl border border-border/50 bg-card/40 p-6 backdrop-blur-sm"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      {info.title}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-sm font-medium text-foreground transition-colors hover:text-primary"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-foreground">{info.value}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Limited Slots */}
              <div className="mt-8 rounded-2xl border border-primary/30 bg-primary/5 p-6 backdrop-blur-sm">
                <p className="text-sm font-semibold text-primary">Limited Client Slots Available</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  We work with a limited number of clients to ensure dedicated attention and premium
                  results. Book your consultation before slots fill up.
                </p>
              </div>
            </div>

            {/* Right - Form */}
            <div className="rounded-2xl border border-border/50 bg-card/40 p-8 backdrop-blur-sm md:p-10">
              <h2 className="font-display text-2xl font-bold text-foreground">
                Book a Free Strategy Call
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Fill in the details below and our team will get back to you within 24 hours.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
