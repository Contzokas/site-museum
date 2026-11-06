import "./globals.css";
import { siteDescription, siteName, siteUrl } from "./site-config";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: ["Στρατιωτικό Μουσείο Κομοτηνής", "μουσείο Κομοτηνής", "στρατιωτική ιστορία", "Θράκη", "εκθέματα"],
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
  return <html lang="el"><body>{children}</body></html>;
}
