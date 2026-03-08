// app/terms-of-service/page.tsx
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms of Service | ViralNest",
  description:
    "Read the Terms of Service for using the ViralNest website and related services.",
}

const LAST_UPDATED = "07 March 2026" // <- change anytime you update the terms

export default function TermsOfServicePage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <header className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Terms of Service
        </h1>
        <p className="text-sm text-muted-foreground">Last updated: {LAST_UPDATED}</p>
        <p className="text-sm text-muted-foreground">
          These Terms of Service (“Terms”) govern your access to and use of{" "}
          <span className="font-medium text-foreground">viralnest.co.in</span>{" "}
          (the “Website”) and any related inquiries or communications with ViralNest.
        </p>
      </header>

      <section className="mt-10 space-y-8">
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">1) Who we are</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            “ViralNest”, “we”, “us”, or “our” refers to Viral Nest Media.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">2) Acceptance of these Terms</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            By accessing or using the Website, you agree to these Terms. If you do not agree,
            please do not use the Website.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">3) Website use & acceptable behavior</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
            <li>Use the Website only for lawful purposes.</li>
            <li>Do not attempt to disrupt, hack, scrape, or reverse engineer any part of the Website.</li>
            <li>Do not upload or transmit malicious code or harmful content.</li>
            <li>Do not misuse forms, email addresses, or phone numbers for spam.</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">4) Information on the Website (no guarantees)</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            The Website may include information about marketing, branding, web development,
            case studies, and examples. These are provided for general informational purposes
            only and may not reflect results you will achieve. Marketing outcomes can vary
            based on many factors outside our control.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">5) Leads, consultations & proposals</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            If you request a call, submit a form, or contact us, we may respond with a consultation,
            proposal, or recommended scope. Any services we provide (and any pricing, timelines,
            deliverables, refunds, or warranties) will be governed by a separate written agreement
            (such as a contract, statement of work, or invoice terms) where applicable.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">6) Intellectual property</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Unless otherwise stated, the Website content (text, design, logos, graphics, and
            other materials) is owned by or licensed to ViralNest and is protected by applicable
            intellectual property laws. You may not copy, reproduce, republish, or distribute
            any content from this Website without our prior written permission.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">7) Third-party links and tools</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            The Website may contain links to third-party websites or services. We do not control
            and are not responsible for third-party content, policies, or practices. Your use of
            third-party services is at your own risk and subject to their terms.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">8) Privacy</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Our collection and use of personal information is described in our{" "}
            <Link href="/privacy-policy" className="text-primary underline underline-offset-4">
              Privacy Policy
            </Link>
            .
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">9) Disclaimer of warranties</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            The Website is provided on an “as is” and “as available” basis. To the fullest extent
            permitted by law, we disclaim all warranties of any kind, whether express or implied,
            including merchantability, fitness for a particular purpose, and non-infringement.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">10) Limitation of liability</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            To the fullest extent permitted by law, ViralNest will not be liable for any indirect,
            incidental, special, consequential, or punitive damages, or any loss of profits, revenue,
            data, or goodwill, arising from or related to your use of (or inability to use) the Website.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">11) Changes to these Terms</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            We may update these Terms from time to time. The “Last updated” date at the top will
            reflect the latest version. Your continued use of the Website after changes means you
            accept the updated Terms.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">12) Governing law</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            These Terms are governed by the laws applicable in India, unless a separate written
            agreement states otherwise.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">13) Contact</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            For questions about these Terms, contact us via the{" "}
            <Link href="/contact" className="text-primary underline underline-offset-4">
              Contact page
            </Link>{" "}
            By email: <a href="mailto:viralnesthr@gmail.com" className="text-primary hover:underline">viralnesthr@gmail.com</a>
          </p>
        </div>
      </section>
    </main>
  )
}