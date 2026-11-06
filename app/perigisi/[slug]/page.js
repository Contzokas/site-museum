import { notFound } from "next/navigation";
import { imagePath, tourSpaces } from "../../tour-data";
import { siteName } from "../../site-config";
import ZoomableTourPhoto from "./zoomable-tour-photo";

export function generateStaticParams() {
  return tourSpaces.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const space = tourSpaces.find((item) => item.slug === slug);
  if (!space) return {};

  const title = `${space.title} · ${space.section}`;
  const description = `${space.description} ${siteName}.`;

  return {
    title,
    description,
    alternates: { canonical: `/perigisi/${space.slug}` },
    openGraph: {
      title,
      description,
      type: "article",
      url: `/perigisi/${space.slug}`,
      siteName,
      locale: "el_GR",
      images: [{ url: space.cover, alt: `${space.section} · ${space.title}` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [space.cover],
    },
  };
}

export default async function TourSpacePage({ params }) {
  const { slug } = await params;
  const space = tourSpaces.find((item) => item.slug === slug);
  if (!space) notFound();

  return (
    <main className="space-page">
      <header className="space-nav"><a className="brand" href="/"><img src="/assets/museum-emblem.png" alt="Έμβλημα 21ης Τεθωρακισμένης Ταξιαρχίας" /><span>Στρατιωτικό Μουσείο<small>Κομοτηνή</small></span></a><a href="/#tour">← ΕΠΙΣΤΡΟΦΗ ΣΤΗΝ ΠΕΡΙΗΓΗΣΗ</a></header>
      <section className="space-hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(8,16,12,.68), rgba(8,16,12,.15)), url('${space.cover}')` }}><div><div className="section-label">{space.section}</div><h1>{space.title}</h1><p>{space.description}</p></div></section>
      {space.content && <section className="space-intro"><article><div className="space-intro-label">Μια διαδρομή μνήμης</div><h2>{space.introTitle}</h2>{space.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</article><div className="space-intro-images">{space.images.map((image, index) => <figure key={image}><div className="space-intro-image"><ZoomableTourPhoto src={imagePath(space, image)} alt={index === 0 ? space.introImageAlt : `${space.title} · φωτογραφία ${index + 1}`} /></div><figcaption>{space.section} · {space.title}</figcaption></figure>)}</div></section>}
      {!space.content && <section className="space-gallery"><div className="section-label">Φωτογραφική περιήγηση</div><div className="space-gallery-grid">{space.images.map((image, index) => <figure key={image}><ZoomableTourPhoto src={imagePath(space, image)} alt={`${space.title} · φωτογραφία ${index + 1}`} /><figcaption>{space.section} · {space.title}</figcaption></figure>)}</div></section>}
      <footer><span>Στρατιωτικό Μουσείο Κομοτηνής</span><span>© 2026 · Κομοτηνή, Θράκη</span></footer>
    </main>
  );
}
