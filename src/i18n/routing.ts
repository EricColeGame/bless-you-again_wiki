import { defineRouting } from "next-intl/routing";

export const locales = ["en", "es", "pt", "ja"] as const;

export const routing = defineRouting({
  locales: [...locales],
  defaultLocale: "en",
  localePrefix: "always",
  localeDetection: false,
});

export type Locale = (typeof locales)[number];
