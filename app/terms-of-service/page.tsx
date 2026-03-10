// app/terms-of-service/page.tsx

import type { Metadata } from "next"
import Link from "next/link"
import {
  FileText,
  Shield,
  Users,
  Scale,
  AlertTriangle,
  Mail,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Terms of Service | ViralNest",
  description:
    "Read the Terms of Service for using the ViralNest website and related services.",
}

const LAST_UPDATED = "07 March 2026"

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex justify-center mb-4">
            <FileText className="h-10 w-10 text-primary" />
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            Terms of Service
          </h1>

          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            These Terms of Service govern your access to and use of the
            ViralNest website and related communications.
          </p>

          <p className="text-sm text-muted-foreground mt-2">
            Last updated: {LAST_UPDATED}
          </p>
        </div>

        {/* Intro */}
        <div className="bg-card border rounded-xl p-6 shadow-sm mb-10">
          <p className="text-muted-foreground leading-relaxed">
            These Terms of Service (“Terms”) govern your access to and use of{" "}
            <span className="font-semibold text-foreground">
              viralnest.co.in
            </span>{" "}
            (the “Website”). By accessing or using the Website, you agree to
            comply with these Terms.
          </p>
        </div>

        <div className="space-y-10">

          {/* Who we are */}
          <section className="bg-card border rounded-xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Users className="text-primary" />
              <h2 className="text-xl font-semibold">1. Who we are</h2>
            </div>

            <p className="text-muted-foreground">
              “ViralNest”, “we”, “us”, or “our” refers to Viral Nest Media.
            </p>
          </section>

          {/* Acceptance */}
          <section className="bg-card border rounded-xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="text-primary" />
              <h2 className="text-xl font-semibold">
                2. Acceptance of these Terms
              </h2>
            </div>

            <p className="text-muted-foreground">
              By accessing or using this Website, you agree to be bound by
              these Terms. If you do not agree with any part of these Terms,
              please do not use our Website.
            </p>
          </section>

          {/* Website usage */}
          <section className="bg-card border rounded-xl p-8 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">
              3. Website Use & Acceptable Behavior
            </h2>

            <ul className="space-y-3 text-muted-foreground">
              <li>✔ Use the Website only for lawful purposes.</li>
              <li>✔ Do not attempt to hack, disrupt, or scrape the Website.</li>
              <li>✔ Do not upload malicious code or harmful content.</li>
              <li>✔ Do not misuse contact forms or emails for spam.</li>
            </ul>
          </section>

          {/* Information */}
          <section className="bg-card border rounded-xl p-8 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">
              4. Information on the Website
            </h2>

            <p className="text-muted-foreground">
              Content on the Website may include information about marketing,
              branding, development services, or case studies. These are
              provided for informational purposes only and do not guarantee
              similar results.
            </p>
          </section>

          {/* Leads */}
          <section className="bg-card border rounded-xl p-8 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">
              5. Leads, Consultations & Proposals
            </h2>

            <p className="text-muted-foreground">
              When you submit a form or contact ViralNest, we may provide
              consultations, proposals, or pricing. Any actual services will
              be governed by a separate written agreement or contract.
            </p>
          </section>

          {/* IP */}
          <section className="bg-card border rounded-xl p-8 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">
              6. Intellectual Property
            </h2>

            <p className="text-muted-foreground">
              All content on the Website including text, design, graphics,
              and logos is owned by or licensed to ViralNest and protected
              by intellectual property laws. Unauthorized copying or
              redistribution is prohibited.
            </p>
          </section>

          {/* Third party */}
          <section className="bg-card border rounded-xl p-8 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">
              7. Third-Party Links
            </h2>

            <p className="text-muted-foreground">
              Our Website may include links to third-party websites or tools.
              We are not responsible for their content or policies.
            </p>
          </section>

          {/* Privacy */}
          <section className="bg-card border rounded-xl p-8 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">8. Privacy</h2>

            <p className="text-muted-foreground">
              Your use of the Website is also governed by our{" "}
              <Link
                href="/privacy-policy"
                className="text-primary font-medium hover:underline"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </section>

          {/* Disclaimer */}
          <section className="bg-card border rounded-xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="text-primary" />
              <h2 className="text-xl font-semibold">
                9. Disclaimer of Warranties
              </h2>
            </div>

            <p className="text-muted-foreground">
              The Website is provided on an “as is” and “as available” basis
              without warranties of any kind.
            </p>
          </section>

          {/* Liability */}
          <section className="bg-card border rounded-xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="text-primary" />
              <h2 className="text-xl font-semibold">
                10. Limitation of Liability
              </h2>
            </div>

            <p className="text-muted-foreground">
              ViralNest will not be liable for indirect, incidental,
              or consequential damages related to your use of the Website.
            </p>
          </section>

          {/* Changes */}
          <section className="bg-card border rounded-xl p-8 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">
              11. Changes to These Terms
            </h2>

            <p className="text-muted-foreground">
              We may update these Terms periodically. Continued use of the
              Website after updates indicates acceptance of the new Terms.
            </p>
          </section>

          {/* Law */}
          <section className="bg-card border rounded-xl p-8 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">
              12. Governing Law
            </h2>

            <p className="text-muted-foreground">
              These Terms are governed by the laws applicable in India unless
              otherwise stated in a separate agreement.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-card border rounded-xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="text-primary" />
              <h2 className="text-xl font-semibold">13. Contact</h2>
            </div>

            <p className="text-muted-foreground">
              If you have questions regarding these Terms, please contact us:
            </p>

            <a
              href="mailto:viralnesthr@gmail.com"
              className="inline-block mt-3 text-primary font-medium hover:underline"
            >
              viralnesthr@gmail.com
            </a>
          </section>
        </div>

        {/* Footer Navigation */}
        <div className="mt-16 pt-8 border-t border-muted flex justify-center">
          <Link href="/" className="text-sm text-primary hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}