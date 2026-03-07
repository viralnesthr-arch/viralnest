"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, MessageCircle } from "lucide-react"
import { Vortex } from "@/components/ui/vortex"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function HeroSection() {
  const { resolvedTheme } = useTheme()
  const [bgColor, setBgColor] = useState("hsl(40 30% 96%)")

  useEffect(() => {
    setBgColor(resolvedTheme === "dark" ? "#0a0510" : "hsl(40 30% 96%)")
  }, [resolvedTheme])

  // 🔹 GTM event for WhatsApp conversion
  const handleWhatsAppClick = () => {
    if (typeof window !== "undefined") {
      // Ensure dataLayer exists
      // @ts-ignore - if you're using TypeScript and get a type error
      window.dataLayer = window.dataLayer || []
      // Push a custom event for GTM
      // Event name: "whatsapp_lead"
      // Location: "hero"
      window.dataLayer.push({
        event: "whatsapp_lead",
        cta_location: "hero",
      })
    }
  }

  return (
    <section
      aria-label="Digital Marketing and Branding Agency Hero Section"
      className="relative"
    >
      <Vortex
        containerClassName="min-h-screen flex items-center justify-center"
        className="flex items-center justify-center"
        particleCount={400}
        baseHue={285}
        rangeY={100}
        baseRadius={1}
        rangeRadius={1.5}
        baseSpeed={0.05}
        rangeSpeed={0.5}
        backgroundColor={bgColor}
      >
        <div className="mx-auto max-w-5xl px-6 py-32 text-center">

          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <Image
              src="/images/viral-nest-logo.png"
              alt="Viral Nest Digital Marketing and Branding Agency Logo"
              width={120}
              height={120}
              priority
              className="rounded-full object-contain drop-shadow-[0_0_20px_rgba(123,31,162,0.5)]"
            />
          </div>

          {/* Services Category Line */}
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Digital Marketing · Branding · Social Media · Performance Marketing
          </p>

          {/* H1 */}
          <h1 className="font-display text-4xl font-bold leading-[1.2] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl text-balance">
            Digital Marketing & Branding Agency in{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Dubai, Europe & India
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Viral Nest is a full-service digital marketing and branding agency
            helping businesses build strong brand identities, generate quality
            leads, and scale globally through strategic marketing, creative
            campaigns, social media management, and performance-driven growth solutions.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              aria-label="Book a free digital marketing consultation"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-semibold text-primary-foreground shadow-xl shadow-primary/20 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 hover:scale-105"
            >
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              Book Free Strategy Call
            </Link>

            <a
              href="https://wa.me/918802684249"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Viral Nest on WhatsApp"
              className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/30 px-8 py-4 text-base font-semibold text-foreground backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card/50 hover:scale-105"
              onClick={handleWhatsAppClick} // 🔹 Added for conversion tracking
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Now
            </a>
          </div>

        </div>
      </Vortex>
    </section>
  )
}