import Link from "next/link"
import Image from "next/image"

const footerLinks = {
  Navigation: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ],
  Services: [
    { href: "/services", label: "Social Media Management" },
    { href: "/services", label: "Content Creation" },
    { href: "/services", label: "Influencer Marketing" },
    { href: "/services", label: "Branding & Strategy" },
    { href: "/services", label: "Website Development" },
  ],
  Locations: [
    { href: "/locations", label: "Dubai" },
    { href: "/locations", label: "Europe" },
    { href: "/locations", label: "India" },
  ],
  // Added Legal section for cleaner data management (optional, but good for SEO structure)
  Legal: [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-of-service", label: "Terms of Service" },
  ]
}

export function Footer() {
  return (
    <footer className="border-t border-primary/20 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link 
              href="/" 
              className="flex items-center gap-3 group"
              aria-label="ViralNest Home"
            >
                <Image
                  src="/images/viral-nest-logo.png"
                  alt="Viral Nest logo"
                  width={36}
                  height={36}
                  loading="lazy"
                  className="h-9 w-9 rounded-full object-contain transition-transform group-hover:scale-105"
                  style={{ objectFit: "contain" }}
                />
              <span className="font-display text-lg font-bold tracking-tight text-foreground">
                VIRAL<span className="text-primary">NEST</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Premium digital marketing and branding agency trusted by businesses across Dubai, Europe and India.
            </p>
          </div>

          {/* Links Map - Unchanged Logic, just renders the new Legal section if you want it in columns too */}
          {Object.entries(footerLinks).map(([title, links]) => (
            // Only render the main 3 columns in the grid, keep Legal for the bottom bar if preferred
            // If you want Legal in the 4th column, remove the filter below. 
            // Currently keeping your original 3-column layout + Brand.
            title !== "Legal" && (
              <div key={title}>
                <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                  {title}
                </h4>
                <ul className="flex flex-col gap-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm transition-colors hover:text-primary text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary/20 pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Viral Nest Media. All rights reserved.
          </p>
          
          {/* ✅ FIXED: Updated Hrefs to correct routes for SEO & Google Ads Compliance */}
          <div className="flex items-center gap-6">
            <Link 
              href="/privacy-policy" 
              className="text-xs text-muted-foreground transition-colors hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
              aria-label="Read our Privacy Policy"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms-of-service" 
              className="text-xs text-muted-foreground transition-colors hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
              aria-label="Read our Terms of Service"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}