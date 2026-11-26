import "./globals.css";
import { siteDescription, siteName, siteUrl } from "./site-config";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Εκθέματα, Ιστορία, Ωράριο και Εκδηλώσεις`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  verification: { google: "W3Fv-eUGbnMxCeAUybs98udF77yjGBlk889givhD55I" },
  keywords: ["Στρατιωτικό Μουσείο Κομοτηνής", "μουσείο Κομοτηνής", "στρατιωτική ιστορία", "Θράκη", "εκθέματα", "Έκθεση Στατικού Μοντελισμού", "μοντελισμός Κομοτηνή", "εκδηλώσεις Κομοτηνή"],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "el_GR",
    url: "/",
    siteName,
    title: siteName,
    description: siteDescription,
    images: [{ url: "/assets/hero.png", width: 1537, height: 1023, alt: "Στρατιωτικό Μουσείο Κομοτηνής" }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: ["/assets/hero.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return <html lang="el"><head><link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" /><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Manrope:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap" /></head><body>{children}</body></html>;
}
