import Hero from "../components/sections/Hero";
import AboutSkills from "../components/sections/AboutSkills";
import Projects from "../components/sections/Projects";
import Experience from "../components/sections/Experience";
import Footer from "../components/sections/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-on-background flex flex-col gap-6 items-center justify-center pt-24">
      <Hero />
      <AboutSkills />
      <Projects />
      <Experience />
      <Footer />

    
    </main>
  );
}