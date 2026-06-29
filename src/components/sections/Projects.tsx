"use client";

import { motion } from "framer-motion";
import { ExternalLink, FolderGit2 } from "lucide-react";
import { portfolioData } from "../../config/portfolioData";

export default function Projects() {
  const { projects } = portfolioData;

  // أنيميشن ظهور الجريد بالكامل بشكل متتالي (Stagger)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }as const;

  return (
    <section id="projects" className="py-24 px-6 relative border-t border-outline-variant/10 bg-transparent">
      {/* تأثير ضوئي خفيف في الخلفية ليعطي عمق بصري */}
      <div className="absolute top-1/3 right-10 w-[250px] h-[250px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto space-y-12">
        
        {/* رأس السيكشن (Section Header) */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-primary font-heading text-sm font-semibold tracking-wider uppercase block">
            Masterpieces
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-on-background tracking-tight flex items-center justify-center gap-3">
            <FolderGit2 className="w-8 h-8 text-primary" />
            Selected Projects
          </h2>
          <p className="font-body text-base text-on-surface-variant leading-relaxed">
            A curated showcase of production-ready web applications, interactive dashboards, and pixel-perfect front-end architectures.
          </p>
        </div>

        {/* شبكة المشاريع (Projects Grid) */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="group rounded-2xl bg-surface-container border border-outline-variant/20 overflow-hidden shadow-md flex flex-col h-full"
            >
              {/* حاوية الصورة مع تأثير الزووم والتعتيم عند الـ Hover */}
              <div className="relative aspect-[16/10] overflow-hidden bg-surface-container-low border-b border-outline-variant/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.altText}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out grayscale-[20%] group-hover:grayscale-0"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* تفاصيل المشروع (Project Meta) */}
              <div className="p-6 flex flex-col flex-grow space-y-4">
                <div className="space-y-2">
                  <h3 className="font-heading text-xl font-bold text-on-background group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed min-h-[48px]">
                    {project.description}
                  </p>
                </div>

                {/* الـ Badges / التقنيات المستخدمة */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="font-body text-xs px-3 py-1 rounded-md bg-surface-container-high border border-outline-variant/30 text-on-surface font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* زرار المعاينة / Link السفلي */}
                <div className="pt-4 mt-auto flex items-center justify-between border-t border-outline-variant/10">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-heading text-sm text-primary font-semibold hover:text-primary-container transition-colors group/link"
                    >
                      Live Preview
                      <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  ) : (
                    <span className="font-body text-xs text-on-surface-variant italic">
                      Private Enterprise Dashboard
                    </span>
                  )}
                  
                  <div className="w-2 h-2 rounded-full bg-outline-variant/40 group-hover:bg-primary transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}