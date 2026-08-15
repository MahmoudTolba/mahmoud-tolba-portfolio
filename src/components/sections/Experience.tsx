"use client";

import { motion, Variants } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { portfolioData } from "../../config/portfolioData";

export default function Experience() {
  const { experience } = portfolioData;

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // دالة مساعدة لتنسيق النصوص وتحويل الكلمات المحاطة بـ ** إلى Bold تلقائياً
  const renderFormattedText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={i} className="font-semibold text-on-background">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  return (
    <section id="experience" className="py-24 px-6 relative border-t border-outline-variant/10 bg-transparent">
      {/* تأثير ضوئي خفيف في الخلفية */}
      <div className="absolute bottom-1/4 left-10 w-[200px] h-[200px] bg-tertiary/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto space-y-16">
        
        {/* عنوان السيكشن الرئيسي */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-secondary font-heading text-sm font-semibold tracking-wider uppercase block">
            The Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-on-background tracking-tight flex items-center justify-center gap-3">
            <Briefcase className="w-8 h-8 text-secondary" />
            Professional Experience
          </h2>
          <p className="font-body text-base text-on-surface-variant leading-relaxed">
            Proven track record in front-end development, API integrations, and teaching computer science fundamentals.
          </p>
        </div>

        {/* حاوية الـ Timeline الرئيسي */}
        <div className="relative max-w-3xl mx-auto pl-6 sm:pl-8 border-l border-outline-variant/30 space-y-10">
          
          {experience.map((exp, index) => {
            const colorClass = 
              exp.color === "primary" ? "bg-primary/10 text-primary border-primary/20" : 
              exp.color === "secondary" ? "bg-secondary/10 text-secondary border-secondary/20" : 
              "bg-tertiary/10 text-tertiary border-tertiary/20";

            const borderClass = 
              exp.color === "primary" ? "border-primary" : 
              exp.color === "secondary" ? "border-secondary" : 
              "border-tertiary";

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="relative group p-6 sm:p-7 rounded-2xl bg-surface-container border border-outline-variant/15 hover:border-outline-variant/40 transition-all duration-300 shadow-sm"
              >
                {/* النقطة المضيئة على الخط الزمني */}
                <div className={`absolute -left-[31px] sm:-left-[39px] top-8 w-4 h-4 rounded-full border-4 bg-background transition-transform duration-300 group-hover:scale-125 ${borderClass}`} />

                {/* رأس الكارت: المسمى والشركة والمدة والتاريخ */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-6 pb-4 border-b border-outline-variant/10">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-heading text-xl font-bold text-on-background">
                        {exp.role}
                      </h3>
                      {exp.type && (
                        <span className={`text-[11px] font-heading font-bold px-2.5 py-0.5 rounded-full border ${colorClass}`}>
                          {exp.type}
                        </span>
                      )}
                    </div>

                    <p className="font-body text-base text-primary font-semibold italic">
                      {exp.company}
                    </p>
                  </div>
                  
                  {/* التاريخ والمكان */}
                  <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-2 text-xs font-body text-on-surface-variant shrink-0">
                    <div className="flex items-center gap-1.5 bg-surface-container-high px-3 py-1 rounded-lg border border-outline-variant/20">
                      <Calendar className="w-3.5 h-3.5 text-primary" />
                      <span className="font-medium text-on-surface">{exp.period}</span>
                    </div>
                    {exp.location && (
                      <div className="flex items-center gap-1 text-on-surface-variant/80 px-1">
                        <MapPin className="w-3.5 h-3.5 text-outline" />
                        <span>{exp.location}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* قائمة النقاط الحقيقية المأخوذة من الـ CV */}
                <ul className="space-y-3 font-body text-sm text-on-surface-variant leading-relaxed">
                  {exp.bullets?.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      <span>{renderFormattedText(bullet)}</span>
                    </li>
                  ))}
                </ul>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}