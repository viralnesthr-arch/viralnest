"use client"

import { useState } from "react"
import { Send } from "lucide-react"

const services = [
  "Social Media Management",
  "Content Creation",
  "Influencer Marketing",
  "Branding & Strategy",
  "Website Development",
  "YouTube Management",
  "Full 360 Package",
]

const budgetRanges = [
  "Under $1,000/mo",
  "$1,000 - $3,000/mo",
  "$3,000 - $5,000/mo",
  "$5,000 - $10,000/mo",
  "$10,000+/mo",
]

const inputStyles =
  "rounded-xl border border-border/50 bg-secondary/30 px-4 py-3 text-sm text-foreground backdrop-blur-sm placeholder:text-muted-foreground focus:border-primary/60 focus:outline-none focus:ring-1 focus:ring-primary/40"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="mt-8 flex flex-col items-center gap-4 py-12 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <Send className="h-7 w-7 text-primary" />
        </div>
        <h3 className="font-display text-xl font-bold text-foreground">Message Sent</h3>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          Thank you for reaching out. Our team will review your details and get back to you within
          24 hours with a customized strategy recommendation.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        setSubmitted(true)
      }}
      className="mt-8 flex flex-col gap-6"
    >
      {/* Name */}
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Your Name
        </label>
        <input
          id="name"
          type="text"
          required
          placeholder="John Smith"
          className={inputStyles}
        />
      </div>

      {/* Business Name */}
      <div className="flex flex-col gap-2">
        <label htmlFor="business" className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Business Name
        </label>
        <input
          id="business"
          type="text"
          required
          placeholder="Your Company Ltd."
          className={inputStyles}
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          required
          placeholder="john@company.com"
          className={inputStyles}
        />
      </div>

      {/* Country */}
      <div className="flex flex-col gap-2">
        <label htmlFor="country" className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Country
        </label>
        <input
          id="country"
          type="text"
          required
          placeholder="UAE, UK, India, etc."
          className={inputStyles}
        />
      </div>

      {/* Service */}
      <div className="flex flex-col gap-2">
        <label htmlFor="service" className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Service Needed
        </label>
        <select
          id="service"
          required
          className={inputStyles}
          defaultValue=""
        >
          <option value="" disabled>
            Select a service
          </option>
          {services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>

      {/* Budget */}
      <div className="flex flex-col gap-2">
        <label htmlFor="budget" className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Monthly Budget
        </label>
        <select
          id="budget"
          required
          className={inputStyles}
          defaultValue=""
        >
          <option value="" disabled>
            Select budget range
          </option>
          {budgetRanges.map((range) => (
            <option key={range} value={range}>
              {range}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Tell Us About Your Goals
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Describe your business, current challenges and what you'd like to achieve..."
          className={`resize-none ${inputStyles}`}
        />
      </div>

      <button
        type="submit"
        className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:shadow-primary/50 hover:brightness-110"
      >
        Send Message
        <Send className="h-4 w-4" />
      </button>
    </form>
  )
}
