"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface LoaderProps {
  onComplete: () => void;
}

const NAME = "Tolba.";
const COLOR = "#6750A4";

// التوقيتات (بالثواني)
const DRAW_DURATION = 1.8; // رسم الـ outline
const REVEAL_DELAY = 0.5; // بداية ظهور الـ fill
const REVEAL_DURATION = 1.9; // مدة كتابة الـ fill
const HOLD_AFTER = 0.9; // وقت الثبات بعد ما الاسم يكتمل
const TOTAL = REVEAL_DELAY + REVEAL_DURATION + HOLD_AFTER; // 3.3s

// خليها true لما تخلص تطوير عشان اللودر يظهر مرة واحدة في الـ session
const SKIP_IF_SEEN = false;
const SESSION_KEY = "loader-seen";

export default function Loader({ onComplete }: LoaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [ready, setReady] = useState(false);

  const onCompleteRef = useRef(onComplete);
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    if (SKIP_IF_SEEN && sessionStorage.getItem(SESSION_KEY)) {
      setIsVisible(false);
      return;
    }

    let cancelled = false;
    let timer: ReturnType<typeof setTimeout>;

    // نستنى الخط يتحمل (بحد أقصى 1.5 ثانية) قبل ما نبدأ الأنيميشن
    Promise.race([
      document.fonts.ready,
      new Promise((r) => setTimeout(r, 1500)),
    ]).then(() => {
      if (cancelled) return;
      setReady(true);
      timer = setTimeout(() => {
        if (SKIP_IF_SEEN) sessionStorage.setItem(SESSION_KEY, "1");
        setIsVisible(false);
      }, TOTAL * 1000);
    });

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, []);

  // منع الـ scroll
  useEffect(() => {
    if (!isVisible) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isVisible]);

  const textProps = {
    x: "50%",
    y: "55%",
    dominantBaseline: "middle" as const,
    textAnchor: "middle" as const,
    className: "font-brush text-6xl tracking-wider sm:text-7xl",
  };

  return (
    <AnimatePresence onExitComplete={() => onCompleteRef.current()}>
      {isVisible && (
        <motion.div
          key="loader"
          role="status"
          aria-label="Loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03, filter: "blur(8px)" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[999999] flex flex-col items-center justify-center gap-8 bg-[#09090b]"
        >
          {/* توهج خفيف في الخلفية */}
          <motion.div
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: ready ? 1 : 0 }}
            transition={{ duration: 1.5 }}
            className="pointer-events-none absolute h-72 w-72 rounded-full blur-[100px]"
            style={{ background: "rgba(103,80,164,0.25)" }}
          />

          <div className="relative h-32 w-[300px] sm:w-[450px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 400 120"
              className="h-full w-full overflow-visible"
              aria-hidden="true"
            >
              <defs>
                {/* حافة ناعمة للـ mask عشان الكتابة تبان سلسة */}
                <linearGradient id="reveal-fade" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0" stopColor="white" />
                  <stop offset="0.85" stopColor="white" />
                  <stop offset="1" stopColor="black" />
                </linearGradient>

                <mask id="reveal-mask" maskUnits="userSpaceOnUse" x="-100" y="-50" width="600" height="220">
                  <motion.rect
                    y="-50"
                    width="560"
                    height="220"
                    fill="url(#reveal-fade)"
                    initial={{ x: -560 }}
                    animate={{ x: ready ? 0 : -560 }}
                    transition={{
                      duration: REVEAL_DURATION,
                      delay: REVEAL_DELAY,
                      ease: [0.45, 0, 0.25, 1],
                    }}
                  />
                </mask>
              </defs>

              {/* الطبقة 1: الـ outline بيترسم وبعدين يختفي */}
              <motion.text
                {...textProps}
                fill="none"
                stroke={COLOR}
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{
                  strokeDasharray: 1200,
                  strokeDashoffset: 1200,
                  strokeOpacity: 1,
                }}
                animate={
                  ready
                    ? { strokeDashoffset: 0, strokeOpacity: [1, 1, 0] }
                    : undefined
                }
                transition={{
                  strokeDashoffset: { duration: DRAW_DURATION, ease: "easeInOut" },
                  strokeOpacity: {
                    duration: REVEAL_DELAY + REVEAL_DURATION + 0.4,
                    times: [0, 0.75, 1],
                    ease: "easeOut",
                  },
                }}
              >
                {NAME}
              </motion.text>

              {/* الطبقة 2: الـ fill بيظهر من الشمال لليمين */}
              <text
                {...textProps}
                fill={COLOR}
                mask="url(#reveal-mask)"
                style={{ filter: "drop-shadow(0 0 14px rgba(103,80,164,0.55))" }}
              >
                {NAME}
              </text>
            </svg>
          </div>

          {/* شريط التقدم متزامن مع المدة الكلية */}
          <div className="relative h-[3px] w-40 overflow-hidden rounded-full bg-white/5">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: ready ? 1 : 0 }}
              transition={{ duration: TOTAL, ease: "easeInOut" }}
              className="h-full origin-left bg-[#6750A4] shadow-[0_0_8px_#6750A4]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}