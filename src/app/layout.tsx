import type { Metadata } from "next";
import { Inter, Geist, Permanent_Marker } from "next/font/google";
import Navbar from "../components/common/Navbar"; 
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });
const permanentMarker = Permanent_Marker({ weight: "400", subsets: ["latin"], variable: "--font-brush", display: "swap" });

export const metadata: Metadata = {
  title: "Mahmoud Tolba | Front-End Developer",
  description: "Innovative Front-End Developer specialized in building next-gen web interfaces.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html 
      lang="en" 
      className={`dark ${inter.variable} ${geist.variable} ${permanentMarker.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body 
        className="bg-[#131313] text-on-background antialiased selection:bg-primary/30 min-h-screen relative"
        suppressHydrationWarning
      >
        
        {/* 🌌 حاوية الخلفية التفاعلية المضيئة */}
        <div className="fixed inset-0 -z-40 overflow-hidden pointer-events-none">
          
          {/* 1. خيوط الـ Grid الهندسي */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff07_1px,transparent_1px),linear-gradient(to_bottom,#ffffff07_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
          
          {/* 2. التوهج البنفسجي العلوي (Primary Glow) */}
          <div 
            className="absolute top-[-25%] left-[-10%] w-[70vw] h-[70vw] rounded-[50%] blur-[130px] animate-ambient-pulse" 
            style={{ backgroundColor: "rgba(192, 193, 255, 0.08)" }} 
          />
          
          {/* 3. التوهج السيان الجانبي (Secondary Glow) */}
          <div 
            className="absolute top-[30%] right-[-15%] w-[60vw] h-[60vw] rounded-[50%] blur-[160px] animate-ambient-pulse" 
            style={{ backgroundColor: "rgba(93, 230, 255, 0.06)", animationDelay: "2s" }} 
          />
          
        </div>

        {/* محتوى موقعك الفعلي */}
        <Navbar />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}