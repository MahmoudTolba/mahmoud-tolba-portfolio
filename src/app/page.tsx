"use client";

import { useState, useEffect } from "react";
import Loader from "../components/sections/Loader";
import Hero from "../components/sections/Hero";
import AboutSkills from "../components/sections/AboutSkills";
import Projects from "../components/sections/Projects";
import Experience from "../components/sections/Experience";
import Footer from "../components/sections/Footer";

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  // التحكم في السكرول والـ Navbar الخارجي أثناء التحميل
  useEffect(() => {
    const globalNav = document.querySelector("header, nav") as HTMLElement;

    if (loading) {
      document.body.style.overflow = "hidden";
      if (globalNav) {
        globalNav.style.display = "none"; // إخفاء الـ Navbar أثناء اللودر
      }
    } else {
      document.body.style.overflow = "unset";
      if (globalNav) {
        globalNav.style.display = ""; // 👈 مسح الـ inline style تماماً ليعود للـ Tailwind الأصلي بتاعه بدون تخريب!
      }
    }

    return () => {
      document.body.style.overflow = "unset";
      if (globalNav) {
        globalNav.style.display = ""; // إعادة الاستايل الافتراضي عند الخروج
      }
    };
  }, [loading]);

  return (
    <>
      {/* 1. اللودر */}
      {loading && <Loader onComplete={() => setLoading(false)} />}

      {/* 2. محتوى الصفحة الرئيسي */}
      <main 
        className={`bg-transparent transition-opacity duration-700 ease-in-out ${
          loading ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <Hero />
        <AboutSkills />
        <Projects />
        <Experience />
        <Footer />
      </main>
    </>
  );
}