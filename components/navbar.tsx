"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle" // <-- 1. IMPORT THE THEME TOGGLE

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/locations", label: "Locations" },
  { href: "/industries", label: "Industries" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/60 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/viral-nest-logo.png"
            alt="Viral Nest logo"
            width={48}
            height={48}
            className="h-12 w-12 rounded-full object-contain"
            style={{ objectFit: "contain" }}
          />
          <span className="font-display text-lg font-bold tracking-tight text-foreground">
            VIRAL<span className="text-primary">NEST</span>
          </span>
        </Link>

        {/* 2. GROUP ALL RIGHT-SIDE ITEMS FOR PROPER ALIGNMENT */}
        <div className="flex items-center gap-2">
          {/* Desktop Nav (unchanged) */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative group text-sm font-medium transition-colors focus:outline-none ${
                  pathname === link.href ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
                <span className={`absolute bottom-[-4px] left-0 h-0.5 bg-primary transition-all duration-300 ease-out group-hover:w-full ${
                    pathname === link.href ? "w-full" : "w-0"
                }`}></span>
              </Link>
            ))}
            <Link
              href="/contact"
              className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:scale-105"
            >
              Book Free Call
            </Link>
          </div>

          {/* 3. ADD THE THEME TOGGLE BUTTON HERE */}
          <ThemeToggle />

          {/* Mobile Toggle (unchanged) */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground lg:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav (unchanged) */}
      {isOpen && (
        <div className="border-t border-border/50 bg-background/95 backdrop-blur-xl px-6 py-6 lg:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-base font-medium transition-colors hover:text-foreground focus:outline-none ${
                  pathname === link.href ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-full bg-primary px-6 py-2.5 text-center text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25"
            >
              Book Free Call
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}