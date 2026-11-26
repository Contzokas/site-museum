import { tourSpaces } from "./tour-data";
import { siteUrl } from "./site-config";

export default function sitemap() {
  return [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
      images: [`${siteUrl}/assets/hero.png`, `${siteUrl}/assets/modelism-poster.webp`],
    },
    ...tourSpaces.map((space) => ({
      url: `${siteUrl}/perigisi/${space.slug}`,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${siteUrl}${space.cover}`],
    })),
  ];
}
