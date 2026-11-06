const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const parsedUrl = new URL(configuredUrl);

if (
  !["http:", "https:"].includes(parsedUrl.protocol) ||
  parsedUrl.pathname !== "/" || parsedUrl.search || parsedUrl.hash ||
  parsedUrl.username || parsedUrl.password ||
  (process.env.NODE_ENV === "production" && (
    !process.env.NEXT_PUBLIC_SITE_URL || parsedUrl.protocol !== "https:" ||
    ["localhost", "127.0.0.1", "[::1]"].includes(parsedUrl.hostname)
  ))
) {
  throw new Error("Set NEXT_PUBLIC_SITE_URL to the final HTTPS origin (e.g. https://museum.gr), without a path, query, or credentials.");
}

export const siteUrl = parsedUrl.origin;
export const siteName = "Στρατιωτικό Μουσείο Κομοτηνής";
export const siteDescription = "Ιστορία, εκθέματα και πληροφορίες επίσκεψης για το Στρατιωτικό Μουσείο Κομοτηνής.";
