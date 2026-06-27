"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/config/portfolioData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // تأثير عند التمرير لتغيير خلفية الـ Navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface-container/80 backdrop-blur-md border-b border-outline-variant/30 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        {/* اللوجو بخط الفرشاة المميز */}
        <a href="#" className="font-brush text-3xl text-primary tracking-wider">
          {portfolioData.hero.status.includes("Tolba") ? "Tolba." : "Tolba."}
        </a>

        {/* القائمة لـ الشاشات الكبيرة (Desktop Menu) */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="font-body text-sm text-on-surface-variant hover:text-primary transition-colors">About</a>
          <a href="#projects" className="font-body text-sm text-on-surface-variant hover:text-primary transition-colors">Projects</a>
          <a href="#experience" className="font-body text-sm text-on-surface-variant hover:text-primary transition-colors">Experience</a>
          <a href="#contact" className="inline-flex items-center gap-1 font-heading text-sm bg-primary text-on-primary px-4 py-2 rounded-xl font-semibold hover:bg-primary-container transition-all group">
            Let's Talk
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </nav>

        {/* زرار الـ Mobile Menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-on-surface hover:text-primary transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* القائمة لـ شاشات الموبايل (Mobile Menu Menu Mobile Animation) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-surface-container border-b border-outline-variant/50 px-6 py-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            <a onClick={() => setIsOpen(false)} href="#about" className="font-body text-lg text-on-surface py-2 border-b border-outline-variant/10">About</a>
            <a onClick={() => setIsOpen(false)} href="#projects" className="font-body text-lg text-on-surface py-2 border-b border-outline-variant/10">Projects</a>
            <a onClick={() => setIsOpen(false)} href="#experience" className="font-body text-lg text-on-surface py-2 border-b border-outline-variant/10">Experience</a>
            <a onClick={() => setIsOpen(false)} href="#contact" className="inline-flex items-center justify-center gap-2 font-heading text-base bg-primary text-on-primary px-4 py-3 rounded-xl font-semibold mt-2">
              Let's Talk
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}