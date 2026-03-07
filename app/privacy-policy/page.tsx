import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | ViralNest",
  description: "Privacy Policy for ViralNest. Learn how we collect, use, and protect your data when using our digital marketing services.",
  robots: "index, follow",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
          Privacy Policy
        </h1>
        <p className="text-sm text-muted-foreground mb-8">
          Last updated: {new Date().toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="text-muted-foreground leading-relaxed">
            At <strong>ViralNest</strong> ("we", "us", "our"), accessible from <a href="https://viralnest.co.in" className="text-primary hover:underline">viralnest.co.in</a>, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by ViralNest and how we use it.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4 text-foreground">1. Information We Collect</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We collect information you provide directly to us, such as when you fill out a contact form, subscribe to a newsletter, or request a service. This may include:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-6">
            <li>Name and Business Name</li>
            <li>Email Address and Phone Number</li>
            <li>Project Details and Requirements</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4 text-foreground">2. How We Use Your Information</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-6">
            <li>Provide, maintain, and improve our services.</li>
            <li>Process your requests and respond to your inquiries.</li>
            <li>Send you technical notices, updates, security alerts, and support messages.</li>
            <li>Communicate with you about products, services, offers, and events.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4 text-foreground">3. Google Ads Lead Forms</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            If you submit information via a Google Ads Lead Form extension, that data is transmitted to Google and then to ViralNest. We use this data solely to contact you regarding your interest in our services. Google's use of your information is governed by their own privacy policies.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4 text-foreground">4. Cookies and Analytics</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4 text-foreground">5. Contact Us</h2>
          <p className="text-muted-foreground leading-relaxed">
            If you have any questions about this Privacy Policy, please contact us:
            <br />
            By email: <a href="mailto:viralnesthr@gmail.com" className="text-primary hover:underline">viralnesthr@gmail.com</a>
          </p>
        </div>
        
        <div className="mt-12 pt-8 border-t border-primary/10">
          <Link href="/" className="text-sm text-primary hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}