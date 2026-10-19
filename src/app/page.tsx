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

  // الـ Navbar بيتخفى بالـ CSS attribute بدل ما نلمس الـ DOM يدويًا
  useEffect(() => {
    document.documentElement.dataset.loading = String(loading);
    return () => {
      delete document.documentElement.dataset.loading;
    };
  }, [loading]);

  return (
    <>
      {/* اللودر دايمًا موجود، وهو اللي بيتحكم في ظهوره واختفائه */}
      <Loader onComplete={() => setLoading(false)} />

      <main
        className={`bg-transparent transition-opacity duration-700 ease-in-out ${
          loading ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
        aria-hidden={loading}
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