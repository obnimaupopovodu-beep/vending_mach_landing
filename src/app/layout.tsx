import type { Metadata } from "next";
import { Manrope, Unbounded } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/language-provider";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["cyrillic", "latin"] });
const unbounded = Unbounded({ variable: "--font-unbounded", subsets: ["cyrillic", "latin"] });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
export const metadata: Metadata = { metadataBase: new URL(siteUrl), title: "EVA: вендинговые аппараты женской гигиены в Москве", description: "Вендинговые аппараты EVA со средствами женской гигиены для аэропортов, университетов, торговых и бизнес-центров Москвы. Комфорт, доступность и забота о женщинах.", alternates: { canonical: "/" }, openGraph: { title: "EVA: вендинговые аппараты женской гигиены в Москве", description: "Комфорт, доступность и забота о женщинах.", type: "website", locale: "ru_RU" } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="ru" suppressHydrationWarning><body className={`${manrope.variable} ${unbounded.variable}`}><LanguageProvider>{children}</LanguageProvider></body></html>; }
