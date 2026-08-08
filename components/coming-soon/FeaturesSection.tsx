"use client";

import { motion } from "framer-motion";
import { Lock, UserCheck, CalendarDays } from "lucide-react";
import translationsData from "../../data/translations.json";

type Language = "en" | "si" | "ta";

interface FeaturesSectionProps {
  lang: Language;
}

export function FeaturesSection({ lang }: FeaturesSectionProps) {
  const t = translationsData[lang];

  const features = [
    {
      icon: Lock,
      title: t.features.f1Title,
      description: t.features.f1Desc,
    },
    {
      icon: UserCheck,
      title: t.features.f2Title,
      description: t.features.f2Desc,
    },
    {
      icon: CalendarDays,
      title: t.features.f3Title,
      description: t.features.f3Desc,
    },
  ];

  return (
    <section className="relative w-full py-20 px-4 sm:px-6 bg-white overflow-hidden z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[var(--navy)]">
            {t.features.title}
          </h2>
          <div className="w-20 h-1 bg-[var(--teal)] mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-white shadow-[0_10px_40px_-10px_rgba(0,168,181,0.15)] border border-[var(--teal)]/10 hover:shadow-[0_20px_40px_-10px_rgba(0,168,181,0.25)] transition-all hover:-translate-y-1"
            >
              <div className="w-16 h-16 rounded-full bg-[var(--mint)] flex items-center justify-center mb-6 text-[var(--teal)]">
                <feature.icon className="w-8 h-8" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-[var(--navy)] mb-3">
                {feature.title}
              </h3>
              <p className="text-[var(--navy)]/70 leading-relaxed font-medium">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
