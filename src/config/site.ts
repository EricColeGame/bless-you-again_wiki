export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Bless You Again Wiki",
  shortName: "Bless You Again",
  logoText: "BYA",
  tagline: "Guides, Characters, Builds & Trailers",
  description: "Your ultimate guide to Bless You Again! Explore the action roguelike's characters, blessings, builds, dungeon runs, trailers, and progression tips.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://bless-you-again.wiki",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://bless-you-again.wiki").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://store.steampowered.com/app/3530630/Bless_You_Again/",
  heroVideoId: "Gak4xIA-NgM", // Bless You Again - Announcement Trailer (official channel)
  social: {
    youtube: "https://www.youtube.com/@GinoChannelYou",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
