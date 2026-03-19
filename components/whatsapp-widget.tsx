"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);

  // Auto open logic (Desktop only after 5 seconds)
  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth > 768) {
      const timer = setTimeout(() => setOpen(true), 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const phoneNumber = "918802684249";
  
  const quickReplies = [
    { text: "I want to grow my business ", label: "Grow Business" },
  ];

  const handleChat = (message?: string) => {
    const finalMsg = message || "Hi ViralNest, I want to grow my business ";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(finalMsg)}`;
    window.open(url, "_blank");
    setOpen(false);
  };

  return (
    <div className="fixed bottom-6 left-6 z-[9999] flex flex-col items-start gap-4">
      
      {/* --- PREMIUM POPUP CARD --- */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="w-80 rounded-2xl overflow-hidden shadow-2xl border border-white/20"
            style={{
              background: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(12px)",
            }}
          >
            {/* Header with Brand Gradient */}
            <div 
              className="p-4 relative overflow-hidden flex justify-between items-center"
              style={{
                background: "linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)",
              }}
            >
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-white/10 rounded-full blur-xl" />
              <div className="absolute bottom-0 left-0 w-10 h-10 bg-white/10 rounded-full blur-md" />

              <div className="flex items-center gap-3 relative z-10">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                      <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"/>
                    </svg>
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-purple-600 rounded-full"></span>
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm tracking-wide">VIRAL NEST</h3>
                  <p className="text-purple-200 text-xs">Digital Marketing Agency</p>
                </div>
              </div>

              <button 
                onClick={() => setOpen(false)}
                className="text-white/70 hover:text-white hover:bg-white/20 rounded-full p-1 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Body Content */}
            <div className="p-5">
              <div className="mb-4">
                <p className="text-gray-800 font-medium text-sm mb-1">
                  Hi there! 👋 Ready to scale up?
                </p>
                <p className="text-gray-500 text-xs leading-relaxed">
                  We help brands grow in Dubai, Europe & India.
                </p>
              </div>

              {/* Quick Reply Button */}
              <div className="space-y-2 mb-4">
                {quickReplies.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleChat(item.text)}
                    className="w-full text-left px-3 py-2.5 rounded-lg text-xs font-medium transition-all duration-200 border border-gray-100 hover:border-purple-200 hover:bg-purple-50 hover:text-purple-700 group flex justify-between items-center"
                  >
                    <span>{item.label}</span>
                    <svg className="w-4 h-4 text-gray-300 group-hover:text-purple-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                ))}
              </div>

              {/* Main CTA Button */}
              <button
                onClick={() => handleChat()}
                className="w-full py-3 rounded-xl text-white font-semibold text-sm shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95"
                style={{
                  background: "linear-gradient(135deg, #7c3aed, #6d28d9)",
                }}
              >
                Start Conversation on WhatsApp
              </button>
              
              <p className="text-center text-[10px] text-gray-400 mt-3 flex items-center justify-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                Secured Connection
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- FLOATING BUTTON --- */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="group relative flex items-center justify-center w-16 h-16 rounded-full shadow-2xl transition-all duration-300"
      >
        <span
          className="absolute inset-0 rounded-full blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-300"
          style={{
            background: "linear-gradient(135deg, #7c3aed, #25D366)",
          }}
        />

        <span className="absolute inset-0 rounded-full animate-ping bg-green-400 opacity-20" />
        
        <span className="absolute inset-1 rounded-full backdrop-blur-md bg-white/10 border border-white/20" />

        <motion.span
          animate={{ rotate: open ? 90 : 0 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="relative flex items-center justify-center w-14 h-14 rounded-full shadow-inner"
          style={{
            background: "linear-gradient(135deg, #25D366, #128C7E)",
          }}
        >
          {open ? (
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white drop-shadow-md">
              <path d="M16 .396C7.163.396 0 7.56 0 16.396c0 2.89.757 5.6 2.076 7.95L.25 31.75l7.63-1.99A15.94 15.94 0 0016 32c8.837 0 16-7.164 16-16S24.837.396 16 .396zm0 29.24c-2.5 0-4.86-.73-6.85-2l-.49-.29-4.53 1.18 1.21-4.42-.32-.51a13.9 13.9 0 01-2.14-7.45c0-7.72 6.28-14 14-14s14 6.28 14 14-6.28 14-14 14zm7.7-10.46c-.42-.21-2.47-1.22-2.85-1.36-.38-.14-.66-.21-.94.21s-1.08 1.36-1.33 1.64c-.24.28-.49.32-.91.11-.42-.21-1.76-.65-3.35-2.06-1.24-1.1-2.08-2.46-2.32-2.88-.24-.42-.03-.65.18-.86.18-.18.42-.49.63-.73.21-.24.28-.42.42-.7.14-.28.07-.53-.04-.73-.11-.21-.94-2.26-1.29-3.1-.34-.82-.69-.71-.94-.72h-.8c-.28 0-.73.11-1.11.53s-1.46 1.42-1.46 3.46 1.49 4.01 1.7 4.29c.21.28 2.93 4.48 7.1 6.29.99.43 1.76.69 2.36.88.99.31 1.9.27 2.61.16.8-.12 2.47-1.01 2.82-1.99.35-.98.35-1.82.24-1.99-.1-.17-.38-.28-.8-.49z" />
            </svg>
          )}
        </motion.span>
      </motion.button>
    </div>
  );
}