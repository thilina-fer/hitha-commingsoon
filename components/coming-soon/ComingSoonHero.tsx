"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Languages } from "lucide-react";
import { BackgroundClock } from "./BackgroundClock";
import { WaitlistForm } from "./WaitlistForm";
import translationsData from "../../data/translations.json";

type Language = "en" | "si" | "ta";

export function ComingSoonHero() {
  const [activeMessage, setActiveMessage] = useState<string | null>(null);
  const [lang, setLang] = useState<Language>("en");
  const timeoutRef = useRef<NodeJS.Timeout>(undefined);
  const mascotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (mascotRef.current && !mascotRef.current.contains(event.target as Node)) {
        setActiveMessage(null);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const toggleLanguage = () => {
    if (lang === "en") setLang("si");
    else if (lang === "si") setLang("ta");
    else setLang("en");
  };

  const t = translationsData[lang];

  const handleMascotClick = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    const randomMsg = t.mascotMessages[Math.floor(Math.random() * t.mascotMessages.length)];
    setActiveMessage(randomMsg);
    
    timeoutRef.current = setTimeout(() => {
      setActiveMessage(null);
    }, 4000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  };

  return (
    <main className="relative h-[100dvh] w-full flex flex-col items-center justify-center p-4 sm:p-6 overflow-hidden z-0">
      <BackgroundClock />

      {/* Language Switcher Button (Cycle) */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50">
        <button
          onClick={toggleLanguage}
          className="h-10 px-4 flex items-center justify-center gap-2 bg-white/70 backdrop-blur-md rounded-full border border-[var(--teal)]/20 shadow-sm hover:bg-white hover:shadow-md transition-all text-[var(--navy)] font-bold text-sm"
        >
          <Languages className="w-5 h-5" />
          <span>{lang.toUpperCase()}</span>
        </button>
      </div>

      <motion.div
        className="relative w-full max-w-3xl mx-auto flex flex-col items-center text-center z-10 h-full justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* 1. Header Logo - Centered */}
        <motion.div variants={itemVariants} className="absolute top-8 sm:top-10 left-1/2 -translate-x-1/2 flex items-center justify-center">
          <Image src="/hitha logo.png" alt="Hitha Logo" width={140} height={46} className="object-contain" priority />
        </motion.div>

        {/* 2. Headline */}
        <motion.div variants={itemVariants} className="mt-12 mb-4">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-[var(--navy)] tracking-tight">
            {t.hero.headline}
          </h1>
        </motion.div>

        {/* 3. Supporting line */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-[var(--navy)]/70 max-w-lg mx-auto mb-10 leading-relaxed px-4 font-medium"
        >
          {t.hero.subheadline}
        </motion.p>

        {/* 5. Waitlist Form */}
        <motion.div variants={itemVariants} className="w-full mb-8 shrink-0 px-4">
          <WaitlistForm 
            placeholder={t.hero.emailPlaceholder}
            buttonText={t.hero.ctaButton}
            successMessage={t.hero.successMsg}
          />
        </motion.div>

        {/* 6. Mascot - Floating (Fixed Bottom Right) */}
        <motion.div
          ref={mascotRef}
          variants={itemVariants}
          className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 w-20 h-20 sm:w-28 sm:h-28 shrink-0 z-50 cursor-pointer"
          onClick={handleMascotClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence>
            {activeMessage && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.8 }}
                className="absolute bottom-full mb-4 right-0 w-max max-w-[220px] bg-white text-[var(--navy)] text-sm px-5 py-3 rounded-3xl shadow-[0_8px_30px_-4px_rgba(0,168,181,0.2)] border border-[var(--teal)]/20 font-bold z-50 origin-bottom-right"
              >
                {activeMessage}
                {/* Thought bubble trail */}
                <div className="absolute -bottom-3 right-6 w-4 h-4 bg-white rounded-full border border-[var(--teal)]/20 shadow-sm" />
                <div className="absolute -bottom-6 right-4 w-2.5 h-2.5 bg-white rounded-full border border-[var(--teal)]/20 shadow-sm" />
              </motion.div>
            )}
          </AnimatePresence>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" as const }}
            className="relative w-full h-full drop-shadow-md"
          >
            <Image
              src="/mascot.png"
              alt="Hitha Chatbot"
              fill
              className="object-contain"
            />
          </motion.div>
        </motion.div>

        {/* 7. Small Footer */}
        <motion.div 
          variants={itemVariants} 
          className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 w-full px-4"
        >
          <p className="text-xs sm:text-sm text-[var(--navy)]/50 font-medium">
            {t.footer.copyright}
          </p>
        </motion.div>
      </motion.div>
    </main>
  );
}
