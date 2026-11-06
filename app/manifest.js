import { siteDescription, siteName } from "./site-config";

export default function manifest() {
  return {
    name: siteName,
    short_name: "Μουσείο Κομοτηνής",
    description: siteDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#f4f0e7",
    theme_color: "#14201b",
    lang: "el",
    icons: [{ src: "/icon.png", sizes: "512x512", type: "image/png" }],
  };
}
