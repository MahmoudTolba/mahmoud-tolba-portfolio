"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, Copyright, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

// كومبوننت داخلي لأيقونة GitHub بـ SVG أصلي ونظيف
function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg 
      role="img" 
      viewBox="0 0 24 24" 
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>GitHub</title>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  );
}

// كومبوننت داخلي لأيقونة LinkedIn بـ SVG أصلي ومضمون
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg 
      role="img" 
      viewBox="0 0 24 24" 
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>LinkedIn</title>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/>
    </svg>
  );
}

export default function Footer() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" }); // تفريغ الـ Input بعد النجاح
        setTimeout(() => setStatus("idle"), 4000); // إخفاء الإشعار بعد 4 ثواني
      } else {
        console.error("Server API issue:", result);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch (err) {
      console.error("Network crash error:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="pt-24 pb-12 px-6 relative border-t border-outline-variant/10 bg-transparent overflow-hidden">
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto space-y-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-primary font-heading text-sm font-semibold tracking-wider uppercase block">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-black text-on-background tracking-tight">
                Let's Build Something Modern Together.
              </h2>
            </div>
            
            <p className="font-body text-base text-on-surface-variant leading-relaxed">
              Whether you have a localized enterprise application to launch or looking to add specialized frontend velocity to your team, my inbox is open.
            </p>

            <div className="flex flex-col gap-3 pt-2">
              <a 
                href="mailto:mahmoudtolba499@gmail.com" 
                className="inline-flex items-center gap-3 font-body text-sm text-on-surface-variant hover:text-primary transition-colors group w-fit"
              >
                <div className="p-2.5 rounded-xl bg-surface-container border border-outline-variant/20 text-outline group-hover:text-primary group-hover:border-primary/30 transition-all">
                  <Mail className="w-4 h-4" />
                </div>
                mahmoudtolba499@gmail.com
              </a>

              <div className="flex items-center gap-4 pt-4">
                <a 
                  href="https://github.com/MahmoudTolba" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-surface-container border border-outline-variant/20 text-on-surface-variant hover:text-primary hover:border-primary/30 transition-all shadow-sm"
                  aria-label="GitHub Profile"
                >
                  <GitHubIcon className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/mahmoud-tolba-2910b9207/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-surface-container border border-outline-variant/20 text-on-surface-variant hover:text-primary hover:border-primary/30 transition-all shadow-sm"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedInIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 w-full">
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-2xl bg-surface-container border border-outline-variant/10 space-y-4 shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="font-heading text-xs font-bold text-on-surface-variant uppercase tracking-wider">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    disabled={status === "loading"}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Mohamed Ahmed"
                    className="w-full font-body text-sm px-4 py-3 rounded-xl bg-background border border-outline-variant/30 text-on-background focus:outline-none focus:border-primary transition-colors placeholder:text-outline/50 disabled:opacity-50"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="font-heading text-xs font-bold text-on-surface-variant uppercase tracking-wider">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    disabled={status === "loading"}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Mohamed@example.com"
                    className="w-full font-body text-sm px-4 py-3 rounded-xl bg-background border border-outline-variant/30 text-on-background focus:outline-none focus:border-primary transition-colors placeholder:text-outline/50 disabled:opacity-50"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="font-heading text-xs font-bold text-on-surface-variant uppercase tracking-wider">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  required
                  disabled={status === "loading"}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your next-gen web project..."
                  className="w-full font-body text-sm px-4 py-3 rounded-xl bg-background border border-outline-variant/30 text-on-background focus:outline-none focus:border-primary transition-colors placeholder:text-outline/50 resize-none disabled:opacity-50"
                />
              </div>

              {/* 🎉 زر الإرسال الذكي بتأثير الـ Loading والتشفير التفاعلي */}
              <button 
                type="submit"
                disabled={status === "loading"}
                className={`w-full inline-flex items-center border justify-center gap-2 font-heading px-5 py-3.5 rounded-xl font-bold transition-all group shadow-md text-on-primary
                  ${status === "loading" 
                    ? "bg-primary/70 cursor-not-allowed border-transparent" 
                    : "bg-primary hover:bg-primary-container border-primary shadow-primary/5 active:scale-[0.98]"
                  }`}
              >
                {status === "loading" ? (
                  <>
                    <span>Sending Message...</span>
                    <Loader2 className="w-4 h-4 animate-spin text-on-primary" />
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </>
                )}
              </button>

              {/* 📬 إشعارات نجاح أو فشل الإرسال بأنيميشن سلس */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 text-green-400 bg-green-500/10 border border-green-500/20 p-3 rounded-xl text-xs sm:text-sm font-body justify-center"
                  >
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Your message has been sent successfully! Thanks for reaching out.</span>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 text-red-400 bg-red-500/10 border border-red-500/20 p-3 rounded-xl text-xs sm:text-sm font-body justify-center"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>Failed to send message. Please try again.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>

        </div>

        <div className="border-t border-outline-variant/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-brush text-2xl text-primary tracking-wider">
            Tolba.
          </span>

          <div className="flex items-center gap-1.5 font-body text-xs text-on-surface-variant">
            <Copyright className="w-3.5 h-3.5 text-outline" />
            <span>2026 Mahmoud Tolba. All rights reserved.</span>
          </div>
        </div>

      </div>
    </section>
  );
}