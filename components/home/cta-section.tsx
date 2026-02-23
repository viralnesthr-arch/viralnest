"use client"

import Link from "next/link"
import { ArrowRight, MessageCircle } from "lucide-react"
import { Vortex } from "@/components/ui/vortex"

export function CTASection() {
  return (
    <Vortex
      containerClassName="border-t border-primary/10"
      className="flex items-center justify-center"
      particleCount={300}
      baseHue={282}
      rangeY={150}
      baseRadius={0.5}
      rangeRadius={1.5}
      baseSpeed={0.0}
      rangeSpeed={1.0}
      backgroundColor="#0a0510"
    >
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
          Get Your Free Growth Plan
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
          Limited slots available for international clients. Book a free strategy call and
          discover how we can help your brand scale globally.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:shadow-primary/50 hover:brightness-110"
          >
            Book Free Strategy Call
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="https://wa.me/8802684249"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/30 px-8 py-4 text-base font-semibold text-foreground backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-card/50"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp Now
          </a>
        </div>
      </div>
    </Vortex>
  )
}
