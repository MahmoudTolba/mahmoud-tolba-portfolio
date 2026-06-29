"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, ShieldCheck } from "lucide-react";
import { portfolioData } from "../../config/portfolioData";

export default function Experience() {
  const { experience } = portfolioData;

  // تأثيرات الحركية لكل عنصر في الخط الزمني
  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="experience" className="py-24 px-6 relative border-t border-outline-variant/10 bg-background">
      {/* تأثير توهج خلفي خفيف جداً */}
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
            Over 4 years of refining front-end systems, working inside high-paced environments, and leading interactive education campaigns.
          </p>
        </div>

        {/* حاوية الـ Timeline الرئيسي */}
        <div className="relative max-w-3xl mx-auto pl-6 sm:pl-8 border-l border-outline-variant/30 space-y-12">
          
          {experience.map((exp, index) => {
            // تخصيص ألوان ذكية بناءً على الداتا المرجعية لكل شركة
            const colorClass = 
              exp.color === "primary" ? "bg-primary text-on-primary" : 
              exp.color === "secondary" ? "bg-secondary text-on-secondary" : 
              "bg-tertiary text-on-tertiary";

            const borderClass = 
              exp.color === "primary" ? "border-primary/40" : 
              exp.color === "secondary" ? "border-secondary/40" : 
              "border-tertiary/40";

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className={`relative group p-6 rounded-2xl bg-surface-container border border-outline-variant/10 hover:border-outline-variant/40 transition-all duration-300 shadow-sm`}
              >
                {/* النقطة المضيئة على الخط الزمني الافتراضي */}
                <div className={`absolute -left-[31px] sm:-left-[39px] top-7 w-4 h-4 rounded-full border-4 bg-background transition-transform duration-300 group-hover:scale-125 ${borderClass}`} />

                {/* تفاصيل المسمى والشركة والمدة الزمنية */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div className="space-y-1">
                    <span className={`inline-flex items-center gap-1 font-heading text-xs px-2.5 py-1 rounded-md font-bold uppercase tracking-wider mb-1 ${colorClass}`}>
                      {exp.type}
                    </span>
                    <h3 className="font-heading text-xl font-bold text-on-background">
                      {exp.role}
                    </h3>
                    <p className="font-body text-sm text-primary font-medium">
                      {exp.company}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-1.5 font-body text-xs text-on-surface-variant bg-surface-container-high px-3 py-1.5 rounded-lg border border-outline-variant/20 h-fit w-fit">
                    <Calendar className="w-3.5 h-3.5 text-outline" />
                    {exp.period}
                  </div>
                </div>

                {/* تفاصيل الدور الوظيفي والمميزات التقنية */}
                <div className="font-body text-sm text-on-surface-variant leading-relaxed space-y-2 border-t border-outline-variant/10 pt-4">
                  <div className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                    <span>Developing secure, highly reusable, and fully semantic code structures adhering to modern clean standards.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                    <span>Handling architectural layout optimization, state management, and real-time backend API streaming integrations.</span>
                  </div>
                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}