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
}

export function Footer() {
  return (
    <footer className="border-t border-primary/20 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3">
                <Image
                  src="/images/viral-nest-logo.png"
                  alt="Viral Nest logo"
                  width={36}
                  height={36}
                  loading="lazy"
                  className="h-9 w-9 rounded-full object-contain"
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

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
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
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary/20 pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Viral Nest Media. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="text-xs text-muted-foreground transition-colors hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/contact" className="text-xs text-muted-foreground transition-colors hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
