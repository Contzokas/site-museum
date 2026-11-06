const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const siteUrl = configuredUrl.replace(/\/$/, "");
export const siteName = "Στρατιωτικό Μουσείο Κομοτηνής";
export const siteDescription = "Ιστορία, εκθέματα και πληροφορίες επίσκεψης για το Στρατιωτικό Μουσείο Κομοτηνής.";
