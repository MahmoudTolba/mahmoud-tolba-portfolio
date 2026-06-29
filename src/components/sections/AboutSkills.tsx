"use client";

import { Laptop, Cpu, Terminal, Code2, Database, Layers, Flame, Globe } from "lucide-react";
import { portfolioData } from "../../config/portfolioData";

// دالة ذكية لإرجاع الأيقونة المناسبة بناءً على الاسم الفعلي للمهارة
function SkillIcon({ name }: { name: string }) {
  const norm = name.toLowerCase();
  if (norm.includes("node") || norm.includes("express")) return <Terminal className="w-5 h-5" />;
  if (norm.includes("mongo") || norm.includes("compass") || norm.includes("supabase") || norm.includes("firebase")) return <Database className="w-5 h-5"/>;
  if (norm.includes("vue") || norm.includes("nuxt") || norm.includes("react") || norm.includes("pinia")) return <Layers className="w-5 h-5"/>;
  if (norm.includes("tailwind") || norm.includes("bootstrap")) return <Flame className="w-5 h-5"/>;
  if (norm.includes("js") || norm.includes("ts") || norm.includes("php") || norm.includes("html") || norm.includes("css")) return <Code2 className="w-5 h-5"/>;
  return <Globe className="w-5 h-5"/>;
}

export default function AboutSkills() {
  const { about, skills } = portfolioData;

  // تقسيم المهارات بشكل متساوٍ لضمان حركة انسيابية موازية
  const half = Math.ceil(skills.length / 2);
  const row1 = [...skills.slice(0, half), ...skills.slice(0, half)]; 
  const row2 = [...skills.slice(half), ...skills.slice(half)];

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden border-t border-outline-variant/10 bg-transparent">
      {/* شبكة توزيع احترافية 50/50 لتناسق المظهر البصري بالكامل */}
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

        {/* الجزء الأيمن: الـ Marquee المدمج داخل حاوية مخصصة متناسقة الأبعاد */}
        <div className="lg:col-span-6 w-full relative space-y-6">
          <div className="space-y-1">
            <h3 className="font-heading text-lg font-bold text-on-background flex items-center gap-2">
              <Cpu className="w-4 h-4 text-primary"/>
              Technical Stack
            </h3>
            {/* <p className="font-body text-xs text-on-surface-variant">
              Hover over any card to pause the scroll and light up its custom design tokens.
            </p> */}
          </div>

          {/* حاوية الـ Marquee الذكية بـ Fade Mask مذهل على الأطراف يمين ويسار */}
          <div className="relative w-full flex flex-col gap-4 overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
            
            {/* الصف الأول: يمين لشمال */}
            <div className="flex w-max gap-4 animate-marquee-left hover:[animation-play-state:paused]">
              {row1.map((skill, index) => (
                <div
                  key={`r1-${index}`}
                  className={`group flex items-center gap-3 px-5 py-3 rounded-xl bg-surface-container border border-outline-variant/20 min-w-[160px] cursor-pointer transition-all duration-300 ${skill.hoverColor} ${skill.shadowColor}`}
                >
                  {/* تصليح تمرير المتغير للـ Component عشان يسحب الأيقونة الصح */}
                  <div className={`text-outline group-hover:scale-110 transition-transform duration-300 ${skill.textColor}`}>
                    <SkillIcon name={skill.name}/>
                  </div>
                  <span className={`font-body text-sm font-semibold text-on-surface-variant transition-colors ${skill.textColor}`}>
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>

            {/* الصف الثاني: شمال ليمين */}
            <div className="flex w-max gap-4 animate-marquee-right hover:[animation-play-state:paused]">
              {row2.map((skill, index) => (
                <div
                  key={`r2-${index}`}
                  className={`group flex items-center gap-3 px-5 py-3 rounded-xl bg-surface-container border border-outline-variant/20 min-w-[160px] cursor-pointer transition-all duration-300 ${skill.hoverColor} ${skill.shadowColor}`}
                >
                  <div className={`text-outline group-hover:scale-110 transition-transform duration-300 ${skill.textColor}`}>
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

      {/* الأنيميشن المحسن فائق النعومة */}
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