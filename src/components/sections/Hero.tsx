"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Briefcase } from "lucide-react";
import { portfolioData } from "../../config/portfolioData";

export default function Hero() {
  const { hero, stats } = portfolioData;

  // 📝 مصفوفة الجمل الإنجليزية الاحترافية
  const words = [
    "Available for Opportunities",
    "Open for Freelance Projects",
    "Ready for Remote Work",
    "Bringing Ideas to Life"
  ];

  // هيديروا حالة الكتابة والمسح والتنقل بين الجمل Hooks الـ
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleType = () => {
      const fullText = words[currentWordIndex];
      
      if (!isDeleting) {
        // تأثير الكتابة: إضافة حرف حرف
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(80); // سرعة الكتابة
      } else {
        // تأثير المسح: حذف حرف حرف
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(40); // سرعة المسح بتكون أسرع
      }

      // إذا اكتملت كتابة الجملة بالكامل، ننتظر ثانية ونص قبل ما نمسح
      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } 
      // إذا اتمسحت الجملة بالكامل، ننقل على الجملة اللي بعدها في المصفوفة
      else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex]);

  // إعدادات أنيميشن الظهور التدريجي (Framer Motion Variants)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  //إعدادات أنيميشن الظهور التدريجي لكل عنصر
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }as const;

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-32 pb-16 overflow-hidden">
      {/* تأثير إضاءة خلفي (Glow Effect) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] bg-primary/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />

      <motion.div
        className="max-w-[1200px] w-full mx-auto flex flex-col items-center text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* الحالة المتغيرة / Status Badge مع تأثير الكيبورد */}
        {/* الحالة المتغيرة / Status Badge مع تأثير الكيبورد الاحترافي */}
<motion.div
  variants={itemVariants}
  className="inline-flex items-center gap-2 bg-surface-container-high border border-outline-variant/30 px-4 py-2 rounded-full mb-6 min-h-[40px] w-[290px] sm:w-[320px] justify-start"
>
  {/* نقطة النبض الخضراء/السيان الجانبية ثابتة في مكانها */}
  <span className="relative flex h-2 w-2 shrink-0">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
    <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
  </span>

  {/* نص الكتابة الديناميكي: هنا سر الطبخة! خط المؤشر لزق في النص مباشرة */}
  <span className="font-body text-xs sm:text-sm text-on-surface font-medium border-r-2 border-primary pr-1 animate-blink inline-block w-auto whitespace-nowrap">
    {currentText}
  </span>
</motion.div>

        {/* العنوان الرئيسي بخط العناوين (Headline) */}
        <motion.h1
          variants={itemVariants}
          className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-on-background tracking-tight max-w-4xl leading-[1.15] mb-6"
        >
          Crafting <span className="text-primary">Next-Gen</span> Interfaces
        </motion.h1>

        {/* الوصف المرجعي بخط نصوص الجسم (Body) */}
        <motion.p
          variants={itemVariants}
          className="font-body text-base sm:text-lg text-on-surface-variant max-w-2xl mb-10 leading-relaxed"
        >
          {hero.description}
        </motion.p>

        {/* أزرار اتخاذ الإجراء (CTA Buttons) */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 mb-20 w-full sm:w-auto"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 font-heading bg-primary text-on-primary px-6 py-3.5 rounded-xl font-semibold hover:bg-primary-container transition-all group shadow-lg shadow-primary/10"
          >
            <Briefcase className="w-5 h-5" />
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 font-heading bg-surface-container border border-outline-variant/50 text-on-surface px-6 py-3.5 rounded-xl font-semibold hover:bg-surface-container-high transition-all"
          >
            Contact Me
            <ArrowDown className="w-4 h-4 animate-bounce mt-0.5" />
          </a>
        </motion.div>

        {/* قسم الإحصائيات الذكي (Stats Section) */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 w-full border-t border-outline-variant/20 pt-12 mt-auto"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center p-2"
            >
              <span className={`font-heading text-3xl sm:text-4xl font-black ${stat.color} mb-1`}>
                {stat.value}
              </span>
              <span className="font-body text-xs sm:text-sm text-on-surface-variant font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}