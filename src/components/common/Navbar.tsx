"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/config/portfolioData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // تأثير عند التمرير لتغيير خلفية الـ Navbar ومظهرها
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // منع السكرول في الخلفية لما قائمة الموبايل تكون مفتوحة
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface-container/80 backdrop-blur-md border-b border-outline-variant/30 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between relative z-50">
        {/* اللوجو بخط الفرشاة المميز */}
        <a href="#" className="font-brush text-3xl text-primary tracking-wider relative z-50">
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

        {/* زرار الـ Mobile Menu مدمج بـ z-index عالي ليظهر فوق التغطية الحجمية */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-on-surface hover:text-primary transition-colors relative z-50 p-2"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* القائمة لـ شاشات الموبايل (التصميم الجديد المعزول بالكامل) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 w-full h-screen bg-background/95 backdrop-blur-xl px-8 pt-32 pb-12 flex flex-col justify-between md:hidden z-40"
          >
            {/* روابط التنقل بتأثير تدرجي مريح للأعين */}
            <nav className="flex flex-col gap-4 mt-8">
              <motion.a 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                onClick={() => setIsOpen(false)} 
                href="#about" 
                className="font-heading text-2xl font-bold text-on-background py-3 border-b border-outline-variant/10 flex justify-between items-center group"
              >
                <span>About</span>
                <ArrowUpRight className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity" />
              </motion.a>
              
              <motion.a 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 }}
                onClick={() => setIsOpen(false)} 
                href="#projects" 
                className="font-heading text-2xl font-bold text-on-background py-3 border-b border-outline-variant/10 flex justify-between items-center group"
              >
                <span>Projects</span>
                <ArrowUpRight className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity" />
              </motion.a>
              
              <motion.a 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                onClick={() => setIsOpen(false)} 
                href="#experience" 
                className="font-heading text-2xl font-bold text-on-background py-3 border-b border-outline-variant/10 flex justify-between items-center group"
              >
                <span>Experience</span>
                <ArrowUpRight className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            </nav>

            {/* الزر السفلي ممتد وكبير ومناسب لضغطة الـ Thumb في الموبايل */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              <a 
                onClick={() => setIsOpen(false)} 
                href="#contact" 
                className="inline-flex items-center justify-center gap-2 w-full font-heading text-base bg-primary text-on-primary px-5 py-4 rounded-xl font-bold shadow-lg shadow-primary/20 active:scale-[0.98] transition-transform"
              >
                Let's Talk
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}