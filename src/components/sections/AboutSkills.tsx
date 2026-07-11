"use client";

import { Laptop, Cpu } from "lucide-react";
import { portfolioData } from "../../config/portfolioData";

// استيراد الأيقونات بالمسميات الصحيحة والدقيقة المتوافقة مع نسختك
import { 
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiReact, SiNextdotjs, 
  SiNuxt, SiVuedotjs, SiTailwindcss, SiBootstrap, SiNodedotjs, 
  SiExpress, SiMongodb, SiSupabase, SiFirebase, SiPostgresql, SiPhp, SiGit
} from "react-icons/si";

// دالة ذكية لإرجاع الأيقونة الرسمية الملونة للتقنية بدلاً من الأيقونات الموحدة
function SkillIcon({ name }: { name: string }) {
  const norm = name.toLowerCase();
  
  if (norm.includes("html5") || norm === "html") return <SiHtml5 className="w-6 h-6 text-[#E34F26]" />;
  if (norm.includes("css3") || norm === "css") return <SiCss className="w-6 h-6 text-[#1572B6]" />;
  if (norm.includes("javascript") || norm === "js") return <SiJavascript className="w-6 h-6 text-[#F7DF1E]" />;
  if (norm.includes("typescript") || norm === "ts") return <SiTypescript className="w-6 h-6 text-[#3178C6]" />;
  if (norm.includes("react")) return <SiReact className="w-6 h-6 text-[#61DAFB]" />;
  if (norm.includes("next")) return <SiNextdotjs className="w-6 h-6 text-black dark:text-white" />;
  if (norm.includes("nuxt")) return <SiNuxt className="w-6 h-6 text-[#00DC82]" />;
  if (norm.includes("vue")) return <SiVuedotjs className="w-6 h-6 text-[#4FC08D]" />; // 👈 إرجاع الاسم لـ SiVuedotjs هنا
  if (norm.includes("tailwind")) return <SiTailwindcss className="w-6 h-6 text-[#06B6D4]" />;
  if (norm.includes("bootstrap")) return <SiBootstrap className="w-6 h-6 text-[#7952B3]" />;
  if (norm.includes("node")) return <SiNodedotjs className="w-6 h-6 text-[#339933]" />;
  if (norm.includes("express")) return <SiExpress className="w-6 h-6 text-black dark:text-white" />;
  if (norm.includes("mongo")) return <SiMongodb className="w-6 h-6 text-[#47A248]" />;
  if (norm.includes("supabase")) return <SiSupabase className="w-6 h-6 text-[#3ECF8E]" />;
  if (norm.includes("firebase")) return <SiFirebase className="w-6 h-6 text-[#FFCA28]" />;
  if (norm.includes("postgre")) return <SiPostgresql className="w-6 h-6 text-[#4169E1]" />;
  if (norm.includes("php")) return <SiPhp className="w-6 h-6 text-[#777BB4]" />;
  if (norm.includes("git")) return <SiGit className="w-6 h-6 text-[#F05032]" />;
  
  return <SiReact className="w-6 h-6 text-primary" />;
}

export default function AboutSkills() {
  const { about, skills } = portfolioData;

  const half = Math.ceil(skills.length / 2);
  const row1 = [...skills.slice(0, half), ...skills.slice(0, half)]; 
  const row2 = [...skills.slice(half), ...skills.slice(half)];

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden border-t border-outline-variant/10 bg-transparent">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* الجزء الأيسر: نصوص التعريف والبطاقة التقنية */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-2">
            <span className="text-secondary font-heading text-sm font-semibold tracking-wider uppercase block">
              {about.subtitle}
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-on-background tracking-tight">
              {about.title}
            </h2>
          </div>
          
          <div className="space-y-4 font-body text-base text-on-surface-variant leading-relaxed">
            {about.paragraphs.map((p, index) => (
              <p key={index}>{p}</p>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/20 flex items-start gap-4 shadow-sm">
            <div className="p-3 rounded-xl bg-tertiary/10 text-tertiary shrink-0">
              <Laptop className="w-6 h-6"/>
            </div>
            <div>
              <h4 className="font-heading font-bold text-on-background text-sm">Full-Stack Capability</h4>
              <p className="font-body text-xs text-on-surface-variant mt-1">
                Deep architectural focus from frontend view layers up to robust Node.js environments and MongoDB solutions.
              </p>
            </div>
          </div>
        </div>

        {/* الجزء الأيمن: الـ Marquee المدمج بالأيقونات الرسمية */}
        <div className="lg:col-span-6 w-full relative space-y-6">
          <div className="space-y-1">
            <h3 className="font-heading text-lg font-bold text-on-background flex items-center gap-2">
              <Cpu className="w-4 h-4 text-primary"/>
              Technical Stack
            </h3>
          </div>

          <div className="relative w-full flex flex-col gap-4 overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
            
            {/* الصف الأول */}
            <div className="flex w-max gap-4 animate-marquee-left hover:[animation-play-state:paused]">
              {row1.map((skill, index) => (
                <div
                  key={`r1-${index}`}
                  className={`group flex items-center gap-3 px-5 py-3 rounded-xl bg-surface-container border border-outline-variant/20 min-w-[160px] cursor-pointer transition-all duration-300 ${skill.hoverColor} ${skill.shadowColor}`}
                >
                  <div className="group-hover:scale-110 transition-transform duration-300 shrink-0">
                    <SkillIcon name={skill.name}/>
                  </div>
                  <span className={`font-body text-sm font-semibold text-on-surface-variant transition-colors ${skill.textColor}`}>
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>

            {/* الصف الثاني */}
            <div className="flex w-max gap-4 animate-marquee-right hover:[animation-play-state:paused]">
              {row2.map((skill, index) => (
                <div
                  key={`r2-${index}`}
                  className={`group flex items-center gap-3 px-5 py-3 rounded-xl bg-surface-container border border-outline-variant/20 min-w-[160px] cursor-pointer transition-all duration-300 ${skill.hoverColor} ${skill.shadowColor}`}
                >
                  <div className="group-hover:scale-110 transition-transform duration-300 shrink-0">
                    <SkillIcon name={skill.name}/>
                  </div>
                  <span className={`font-body text-sm font-semibold text-on-surface-variant transition-colors ${skill.textColor}`}>
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>

      <style jsx global>{`
        @keyframes marqueeLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marqueeLeft 25s linear infinite;
        }
        .animate-marquee-right {
          animation: marqueeRight 25s linear infinite;
        }
      `}</style>
    </section>
  );
}