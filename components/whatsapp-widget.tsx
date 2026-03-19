"use client"

import { useEffect, useState } from "react"

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false)

  // Auto open after 5 sec (desktop only)
  useEffect(() => {
    if (window.innerWidth > 768) {
      const timer = setTimeout(() => setOpen(true), 5000)
      return () => clearTimeout(timer)
    }
  }, [])

  return (
    <div className="fixed bottom-5 left-5 z-[9999]">
      
      {/* Chat Box */}
      {open && (
        <div className="w-72 bg-white rounded-xl shadow-2xl mb-3 overflow-hidden animate-in fade-in slide-in-from-bottom-5">
          
          {/* Header */}
          <div className="bg-green-500 text-white px-4 py-3 flex justify-between items-center">
            <span className="font-semibold text-sm">Viral Nest</span>
            <button onClick={() => setOpen(false)}>✕</button>
          </div>

          {/* Body */}
          <div className="p-4 text-sm text-gray-700">
            Hi 👋 <br />
            Want to grow your brand with us?
          </div>

          {/* CTA */}
          <a
            href="https://wa.me/918802684249?text=Hi%20ViralNest%2C%20I%20want%20to%20grow%20my%20business%20🚀"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-green-500 text-white text-center py-2 text-sm font-medium hover:bg-green-600 transition"
          >
            Start Chat
          </a>
        </div>
      )}

      {/* Floating Button */}
<button
  onClick={() => setOpen(!open)}
  className="group relative flex items-center justify-center w-14 h-14 rounded-full transition-all duration-300 hover:scale-110"
>
  {/* Glow Effect */}
  <span className="absolute inset-0 rounded-full blur-lg opacity-60 group-hover:opacity-90 transition"
    style={{
      background: "linear-gradient(135deg, #7c3aed, #25D366)",
    }}
  ></span>

  {/* Glass Layer */}
  <span className="absolute inset-0 rounded-full backdrop-blur-md bg-white/10 border border-white/20"></span>

  {/* Ripple Animation */}
  <span className="absolute inset-0 rounded-full animate-ping bg-green-400 opacity-20"></span>

  {/* Button Core */}
  <span
    className="relative flex items-center justify-center w-12 h-12 rounded-full shadow-xl"
    style={{
      background: "linear-gradient(135deg, #25D366, #128C7E)",
    }}
  >
    {/* WhatsApp Icon */}
    <svg
      viewBox="0 0 32 32"
      className="w-6 h-6 fill-white"
    >
      <path d="M16 .396C7.163.396 0 7.56 0 16.396c0 2.89.757 5.6 2.076 7.95L.25 31.75l7.63-1.99A15.94 15.94 0 0016 32c8.837 0 16-7.164 16-16S24.837.396 16 .396zm0 29.24c-2.5 0-4.86-.73-6.85-2l-.49-.29-4.53 1.18 1.21-4.42-.32-.51a13.9 13.9 0 01-2.14-7.45c0-7.72 6.28-14 14-14s14 6.28 14 14-6.28 14-14 14zm7.7-10.46c-.42-.21-2.47-1.22-2.85-1.36-.38-.14-.66-.21-.94.21s-1.08 1.36-1.33 1.64c-.24.28-.49.32-.91.11-.42-.21-1.76-.65-3.35-2.06-1.24-1.1-2.08-2.46-2.32-2.88-.24-.42-.03-.65.18-.86.18-.18.42-.49.63-.73.21-.24.28-.42.42-.7.14-.28.07-.53-.04-.73-.11-.21-.94-2.26-1.29-3.1-.34-.82-.69-.71-.94-.72h-.8c-.28 0-.73.11-1.11.53s-1.46 1.42-1.46 3.46 1.49 4.01 1.7 4.29c.21.28 2.93 4.48 7.1 6.29.99.43 1.76.69 2.36.88.99.31 1.9.27 2.61.16.8-.12 2.47-1.01 2.82-1.99.35-.98.35-1.82.24-1.99-.1-.17-.38-.28-.8-.49z" />
    </svg>
  </span>
</button>
    </div>
  )
}