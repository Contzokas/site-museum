import { tourSpaces } from "./tour-data";
import { siteUrl } from "./site-config";

export default function sitemap() {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      images: [`${siteUrl}/assets/hero.png`],
    },
    ...tourSpaces.map((space) => ({
      url: `${siteUrl}/perigisi/${space.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${siteUrl}${space.cover}`],
    })),
  ];
}
