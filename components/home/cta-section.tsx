"use client"

import Link from "next/link"
import { ArrowRight, MessageCircle } from "lucide-react"
import { Vortex } from "@/components/ui/vortex"
import { useTheme } from "next-themes" // <-- 1. Import the hook
import { useEffect, useState } from "react"

export function CTASection() {
  const { resolvedTheme } = useTheme() // <-- 2. Get the current theme
  const [bgColor, setBgColor] = useState("hsl(40 25% 98%)") // Default to light

  // 3. Update background color when theme changes
  useEffect(() => {
    setBgColor(resolvedTheme === 'dark' ? '#0a0510' : 'hsl(40 25% 98%)')
  }, [resolvedTheme])

  return (
    <Vortex
      containerClassName="border-t border-border"
      className="flex items-center justify-center"
      particleCount={200}
      baseHue={282}
      rangeY={150}
      baseRadius={0.5}
      rangeRadius={1.5}
      baseSpeed={0.05}
      rangeSpeed={0.5}
      backgroundColor={bgColor} // <-- 4. Use the dynamic background color
    >
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        {/* ... Rest of your component is unchanged ... */}
        <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">Get Your Free Growth Plan</h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">Limited slots available for international clients. Book a free strategy call and discover how we can help your brand scale globally.</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/contact" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-semibold text-primary-foreground shadow-xl shadow-primary/20 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 hover:scale-105">Book Free Strategy Call<ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /></Link>
          <a href="https://wa.me/918802684249" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 rounded-full border border-border/80 bg-secondary px-8 py-4 text-base font-semibold text-secondary-foreground transition-all duration-300 hover:border-primary/50 hover:bg-secondary/80 hover:scale-105"><MessageCircle className="h-4 w-4" />WhatsApp Now</a>
        </div>
      </div>
    </Vortex>
  )
}