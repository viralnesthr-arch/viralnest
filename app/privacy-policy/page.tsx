import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Database, Cookie, Mail, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | ViralNest",
  description:
    "Privacy Policy for ViralNest. Learn how we collect, use, and protect your data when using our digital marketing services.",
  robots: "index, follow",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">

        {/* Header */}
        <div className="mb-14 text-center">
          <div className="flex justify-center mb-4">
            <Shield className="h-10 w-10 text-primary" />
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            Privacy Policy
          </h1>

          <p className="mt-3 text-muted-foreground">
            Your privacy is important to us. This policy explains how ViralNest
            collects and protects your data.
          </p>

          <p className="text-sm text-muted-foreground mt-2">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        {/* Intro */}
        <div className="bg-card border rounded-xl p-6 shadow-sm mb-10">
          <p className="text-muted-foreground leading-relaxed">
            At <strong>ViralNest</strong>, accessible from{" "}
            <a
              href="https://viralnest.co.in"
              className="text-primary font-medium hover:underline"
            >
              viralnest.co.in
            </a>
            , protecting the privacy of our visitors and clients is one of our
            top priorities. This Privacy Policy outlines the types of
            information that we collect and how it is used.
          </p>
        </div>

        <div className="space-y-10">

          {/* Information Collection */}
          <section className="bg-card border rounded-xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Database className="text-primary" />
              <h2 className="text-xl font-semibold">
                1. Information We Collect
              </h2>
            </div>

            <p className="text-muted-foreground mb-4">
              When you interact with our website or request services, we may
              collect the following information:
            </p>

            <ul className="grid sm:grid-cols-2 gap-3 text-muted-foreground">
              <li className="bg-muted/40 p-3 rounded-lg">
                Name and Business Name
              </li>
              <li className="bg-muted/40 p-3 rounded-lg">
                Email Address
              </li>
              <li className="bg-muted/40 p-3 rounded-lg">
                Phone Number
              </li>
              <li className="bg-muted/40 p-3 rounded-lg">
                Project Details & Requirements
              </li>
            </ul>
          </section>

          {/* Usage */}
          <section className="bg-card border rounded-xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="text-primary" />
              <h2 className="text-xl font-semibold">
                2. How We Use Your Information
              </h2>
            </div>

            <ul className="space-y-3 text-muted-foreground">
              <li>✔ Provide and improve our digital marketing services.</li>
              <li>✔ Respond to your inquiries and service requests.</li>
              <li>✔ Send updates, security notifications, and support messages.</li>
              <li>✔ Inform you about offers, services, or updates related to ViralNest.</li>
            </ul>
          </section>

          {/* Google Ads */}
          <section className="bg-card border rounded-xl p-8 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">
              3. Google Ads Lead Forms
            </h2>

            <p className="text-muted-foreground">
              If you submit your information through a Google Ads Lead Form,
              the data is first collected by Google and then shared with
              ViralNest. We only use this information to contact you regarding
              our services. Google’s use of your information is governed by
              their privacy policies.
            </p>
          </section>

          {/* Cookies */}
          <section className="bg-card border rounded-xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Cookie className="text-primary" />
              <h2 className="text-xl font-semibold">
                4. Cookies and Analytics
              </h2>
            </div>

            <p className="text-muted-foreground">
              Our website uses cookies and similar technologies to improve
              website performance and analyze traffic. You may choose to
              disable cookies through your browser settings.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-card border rounded-xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="text-primary" />
              <h2 className="text-xl font-semibold">
                5. Contact Us
              </h2>
            </div>

            <p className="text-muted-foreground">
              If you have questions about this Privacy Policy, please contact
              us at:
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
          <Link
            href="/"
            className="text-sm text-primary hover:underline"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}