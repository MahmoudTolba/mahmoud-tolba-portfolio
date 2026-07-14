"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 600);
    }, 2800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          // z-[999999] مع !important في الخلفية السوداء لعزل تام
          className="fixed inset-0 z-[999999] bg-[#09090b] flex flex-col items-center justify-center gap-8 pointer-events-auto"
          style={{ backgroundColor: "#09090b", zIndex: 999999 }}
        >
          {/* حاوية اللوجو بـ SVG نظيف */}
          <div className="w-[300px] sm:w-[450px] h-32 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 400 120"
              className="w-full h-full"
            >
              <motion.text
                x="50%"
                y="55%"
                dominantBaseline="middle"
                textAnchor="middle"
                // هنا كتبنا الكلمة جوة التاج عشان تترسم وتظهر!
                className="font-brush text-6xl sm:text-7xl tracking-wider text-primary"
                stroke="#6750A4" // لون الـ Primary البنفسجي
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ strokeDasharray: 1000, strokeDashoffset: 1000, fill: "rgba(103, 80, 164, 0)" }}
                animate={{ 
                  strokeDashoffset: 0,
                  fill: "rgba(103, 80, 164, 1)", 
                  transition: { 
                    strokeDashoffset: { duration: 1.8, ease: "easeInOut" },
                    fill: { duration: 0.8, delay: 1.4 } 
                  }
                }}
              >
                Tolba.
              </motion.text>
            </svg>
          </div>

          {/* خط التحميل السفلي */}
          <div className="w-40 h-[3px] bg-white/5 rounded-full overflow-hidden relative">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.2, ease: "easeInOut" }}
              className="h-full bg-[#6750A4] shadow-[0_0_8px_#6750A4]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}