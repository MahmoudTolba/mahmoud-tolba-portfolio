import Hero from "../components/sections/Hero";
import AboutSkills from "../components/sections/AboutSkills";
import Projects from "../components/sections/Projects";
import Experience from "../components/sections/Experience";
import Footer from "../components/sections/Footer";

export default function HomePage() {
  return (
    // جعلنا الحاوية شفافة تماماً لتقرأ من الـ fixed layout الخلفي
    <main className="bg-transparent">
      <Hero />
      <AboutSkills />
      <Projects />
      <Experience />
      <Footer />
    </main>
  );
}