"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, MessageCircle } from "lucide-react"
import { Vortex } from "@/components/ui/vortex"
import { useTheme } from "next-themes" // <-- 1. Import the hook
import { useEffect, useState } from "react"

export function HeroSection() {
  const { resolvedTheme } = useTheme() // <-- 2. Get the current theme
  const [bgColor, setBgColor] = useState("hsl(40 30% 96%)") // Default to light

  // 3. Update background color when theme changes
  useEffect(() => {
    setBgColor(resolvedTheme === 'dark' ? '#0a0510' : 'hsl(40 30% 96%)')
  }, [resolvedTheme])

  return (
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
      backgroundColor={bgColor} // <-- 4. Use the dynamic background color
    >
      <div className="mx-auto max-w-5xl px-6 py-32 text-center">
        {/* ... Rest of your component is unchanged ... */}
        <div className="mb-8 flex justify-center">
          <Image src="/images/viral-nest-logo.png" alt="Viral Nest logo" width={100} height={100} className="h-45 w-45 rounded-full object-contain drop-shadow-[0_0_20px_rgba(123,31,162,0.5)]" style={{ objectFit: "contain" }} priority />
        </div>
        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">Digital Marketing &middot; Branding &middot; Strategy</p>
        <h1 className="font-display text-4xl font-bold leading-[1.2] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl text-balance">Helping Brands Grow Across <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Dubai, Europe & India</span></h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">We provide 360&deg; digital marketing, branding and social media solutions to help businesses generate leads, build authority and scale globally.</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/contact" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-semibold text-primary-foreground shadow-xl shadow-primary/20 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 hover:scale-105"><ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />Book Free Strategy Call</Link>
          <a href="https://wa.me/918802684249" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/30 px-8 py-4 text-base font-semibold text-foreground backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card/50 hover:scale-105"><MessageCircle className="h-4 w-4" />WhatsApp Now</a>
        </div>
      </div>
    </Vortex>
  )
}