"use client";

import { content, type Locale, type SiteCopy } from "@/content/site-content";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

type LanguageContextValue = { locale: Locale; copy: SiteCopy; setLocale: (locale: Locale) => void };
const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("ru");
  useEffect(() => {
    const saved = localStorage.getItem("eva-locale");
    if (saved === "ru" || saved === "en") setLocaleState(saved);
  }, []);
  useEffect(() => { document.documentElement.lang = locale; }, [locale]);
  const value = useMemo(() => ({ locale, copy: content[locale], setLocale: (next: Locale) => { localStorage.setItem("eva-locale", next); setLocaleState(next); } }), [locale]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value) throw new Error("useLanguage must be used within LanguageProvider");
  return value;
}
