"use client";

import { useState } from "react";
import { ComingSoonHero } from "@/components/coming-soon/ComingSoonHero";
import { FeaturesSection } from "@/components/coming-soon/FeaturesSection";
import translationsData from "@/data/translations.json";

type Language = "en" | "si" | "ta";

export default function Home() {
  const [lang, setLang] = useState<Language>("en");

  const toggleLanguage = () => {
    if (lang === "en") setLang("si");
    else if (lang === "si") setLang("ta");
    else setLang("en");
  };

  const t = translationsData[lang];

  return (
    <main className="flex flex-col min-h-screen bg-[var(--mint)]">
      <ComingSoonHero lang={lang} toggleLanguage={toggleLanguage} />
      <FeaturesSection lang={lang} />
      
      <footer className="w-full py-6 text-center bg-white border-t border-[var(--teal)]/10">
        <p className="text-sm text-[var(--navy)]/60 font-medium">
          {t.footer.copyright}
        </p>
      </footer>
    </main>
  );
}
