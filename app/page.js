"use client";

import { useState } from "react";
import { tourSpaces } from "./tour-data";
import { siteDescription, siteName, siteUrl } from "./site-config";

const exhibits = [
  { src: "/assets/uniform.webp", alt: "Στρατιωτική στολή σε προθήκη", label: "Στολές και διακριτικά", images: ["/assets/uniform.webp", "/assets/tour/upper-left-pht03384.webp", "/assets/collection/pht03386.webp", "/assets/collection/pht03398.webp", "/assets/collection/pht03433.webp", "/assets/collection/pht03434.webp", "/assets/collection/pht03372.webp", "/assets/collection/pht03438.webp"] },
  { src: "/assets/medals.webp", alt: "Συλλογή μεταλλίων σε κορνίζα", label: "Παράσημα και διαμνημονεύσεις", images: ["/assets/medals.webp", "/assets/collection/pht03408.webp"] },
  { src: "/assets/field-kit.webp", alt: "Πιστόλι, μετάλλια και στρατιωτικά πηλήκια σε προθήκη", label: "Εξοπλισμός στο πεδίο", images: ["/assets/field-kit.webp", "/assets/tour/upper-left-pht03381.webp", "/assets/collection/pht03382.webp", "/assets/collection/pht03392.webp", "/assets/collection/pht03400.webp"] },
  { src: "/assets/machine-gun.webp", alt: "Πολυβόλο σε έκθεση οπλισμού", label: "Ιστορικός οπλισμός", images: ["/assets/machine-gun.webp", "/assets/tour/upper-right-pht03403.webp", "/assets/collection/pht03406.webp", "/assets/collection/pht03401.webp"] },
  { src: "/assets/fortification-model.webp", alt: "Μακέτα οχυρωματικού έργου", label: "Μακέτες", images: ["/assets/fortification-model.webp"] },
  { src: "/assets/field-telephone.webp", alt: "Στρατιωτικό τηλέφωνο εκστρατείας", label: "Επικοινωνίες στο πεδίο", images: ["/assets/field-telephone.webp", "/assets/collection/pht03446.webp", "/assets/collection/pht03448.webp", "/assets/tour/ground-left-pht03445.webp", "/assets/tour/upper-left-pht03394.webp"] },
  { src: "/assets/war-diorama.webp", alt: "Διοράμα στρατιωτικής επιχείρησης", label: "Διοράματα", images: ["/assets/war-diorama.webp", "/assets/collection/pht03452.webp"] },
  { src: "/assets/service-medals.webp", alt: "Μετάλλια και αρχειακά τεκμήρια σε προθήκη", label: "Προσωπικά τεκμήρια", images: ["/assets/service-medals.webp", "/assets/collection/pht03460.webp", "/assets/collection/pht03461.webp"] },
];

export default function Home() {
  const [selected, setSelected] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Museum",
    name: siteName,
    description: siteDescription,
    url: siteUrl,
    image: `${siteUrl}/assets/hero.png`,
    logo: `${siteUrl}/icon.png`,
    telephone: "+302531054214",
    email: "xxitut@army.gr",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Λεωφόρος Ηρ. 1940–1941",
      addressLocality: "Κομοτηνή",
      postalCode: "69100",
      addressCountry: "GR",
    },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Thursday", "Friday", "Saturday"], opens: "09:00", closes: "14:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "09:00", closes: "14:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Tuesday", "Thursday"], opens: "17:00", closes: "20:00" },
    ],
    isAccessibleForFree: true,
    inLanguage: "el",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <header className="nav">
        <a className="brand" href="#top"><img src="/assets/museum-emblem.png" alt="Έμβλημα 21ης Τεθωρακισμένης Ταξιαρχίας" /><span>Στρατιωτικό Μουσείο<small>Κομοτηνή</small></span></a>
        <nav className="links"><a href="#museum">Το Μουσείο</a><a href="#tour">Περιήγηση</a><a href="#collections">Συλλογές</a><a href="#visit">Επίσκεψη</a></nav>
        <a className="visit" href="#visit">ΟΡΓΑΝΩΣΤΕ ΤΗΝ ΕΠΙΣΚΕΨΗ ΣΑΣ</a>
      </header>
      <section className="hero" id="top">
        <div className="hero-copy"><div className="kicker">Κομοτηνή · Θράκη</div><h1>Στρατιωτικό<br />Μουσείο Κομοτηνής</h1><p>Ένας τόπος συνάντησης με την ιστορία, τα αντικείμενα και τις ανθρώπινες διαδρομές που σημάδεψαν μια εποχή.</p><a className="arrow" href="#museum">Ανακαλύψτε το μουσείο <span>↓</span></a></div>
        <div className="hero-number">01 — 04</div>
      </section>
      <main>
        <section className="intro" id="museum"><div><div className="section-label">01 / Το μουσείο</div><h2>Ένας τόπος όπου η ιστορία ζωντανεύει</h2></div><div><p>To Στρατιωτικό Μουσείο Κομοτηνής αποτελεί έναν χώρο συγκέντρωσης, διαφύλαξης και έκθεσης των πολεμικών κειμηλίων, τεκμηρίωσης και μελέτης της πολεμικής ιστορίας, καθώς και προβολής των ιερών αγώνων του σύγχρονου Ελληνικού Έθνους μέχρι σήμερα.</p><p>Το κτήριο που σήμερα στεγάζεται το Στρατιωτικό Μουσείο Κομοτηνής κτίστηκε το 1910. Τον Μάιο του 2011, ο χώρος εγκαινιάστηκε ως στρατιωτικό μουσείο έπειτα από πρωτοβουλία του τότε Α/ΓΕΣ κ. Φραγκούλη Φράγκου και αφού πραγματοποιήθηκαν εκτεταμένες εργασίες συντήρησης του χώρου.</p><p className="note">Περιηγηθείτε στους χώρους του μουσείου και ανακαλύψτε αντικείμενα, στολές και αρχειακό υλικό μέσα από μια ήρεμη, ουσιαστική εμπειρία.</p></div></section>
        <section className="feature"><div className="feature-image" role="img" aria-label="Προαύλιος χώρος του Στρατιωτικού Μουσείου Κομοτηνής" style={{ backgroundImage: "url('/assets/tour/courtyard-pht03415.webp')" }} /><div className="feature-copy"><div><div className="emblem">✦</div><div className="feature-meta top-meta">Προαύλιος χώρος</div><h3>Ιστορία και μνήμη στον υπαίθριο χώρο</h3><p>Ο προαύλιος χώρος του μουσείου συνδέει την επίσκεψη με τα εκθέματα και τις ιστορίες που διατηρούν ζωντανή τη μνήμη του τόπου.</p></div><div className="feature-meta">Στρατιωτικό Μουσείο Κομοτηνής</div></div></section>
        <section className="tour" id="tour"><div className="tour-head"><div><div className="section-label">02 / Περιήγηση</div><h2>Γνωρίστε τους χώρους</h2></div><p>Ακολουθήστε τη διαδρομή από το ισόγειο στον πρώτο όροφο και ως τον προαύλιο χώρο.</p></div><div className="tour-grid">{tourSpaces.map((space) => <a className="tour-card" href={`/perigisi/${space.slug}`} key={space.slug}><img src={space.cover} alt={`${space.section} · ${space.title}`} /><span><small>{space.section}</small>{space.title}</span></a>)}</div></section>
        <section className="collection" id="collections"><div className="collection-head"><div><div className="section-label">02 / Επιλεγμένα εκθέματα</div><h2>Αντικείμενα που αφηγούνται</h2></div><p>Μικρές λεπτομέρειες, προσωπικά ίχνη και υλικά τεκμήρια συνθέτουν την εικόνα μιας άλλης εποχής.</p></div><div className="gallery">{exhibits.map((item, index) => <button className="card" key={index} onClick={() => { setSelected(item); setSelectedImage(0); }}><img src={item.src} alt={item.alt} /><span className="caption">{item.label}</span></button>)}</div></section>
        <section className="quote"><div className="mark">“</div><blockquote>Κάθε έκθεμα είναι μια αφορμή να επανεστιάσουμε στο παρελθόν με προσοχή</blockquote><cite>Μουσείο · μνήμη · διάλογος</cite></section>
        <section className="visit-section" id="visit"><div><div className="section-label">03 / Επίσκεψη</div><h2>Σχεδιάστε τη δική σας διαδρομή</h2><p>Η είσοδος στο μουσείο είναι δωρεάν. Επισκεφθείτε μας στη Λεωφόρο Ηρ. 1940–1941, στην Κομοτηνή.</p><a className="cta" href="https://maps.app.goo.gl/JCxX2vrm6vM5coYP8" target="_blank" rel="noreferrer">ΠΡΟΒΟΛΗ ΣΤΟΝ ΧΑΡΤΗ ↗</a></div><div className="visit-box"><h3>Ώρες λειτουργίας</h3><div className="hours"><div><span>Δευτέρα, Τετάρτη, Παρασκευή, Σάββατο</span><strong>09:00–14:00</strong></div><div><span>Τρίτη, Πέμπτη</span><strong>09:00–14:00 · 17:00–20:00</strong></div><div><span>Κυριακή</span><strong>Κλειστά</strong></div></div><p className="group-notice">Οι επισκέψεις μεγάλων γκρουπ, όπως σύλλογοι και σχολεία, πραγματοποιούνται κατόπιν ραντεβού.</p><div className="contact"><a href="tel:+302531054214"><span aria-hidden="true">☎</span>25310 54214</a><a href="mailto:xxitut@army.gr"><span aria-hidden="true">✉</span>xxitut@army.gr</a></div></div></section>
      </main>
      <footer><span>Στρατιωτικό Μουσείο Κομοτηνής</span><span>© 2026 · Κομοτηνή, Θράκη</span></footer>
      {selected && <div className="modal" role="dialog" aria-modal="true" aria-label={selected.label} onClick={() => setSelected(null)}><div className="carousel" onClick={(event) => event.stopPropagation()}><button className="modal-close" aria-label="Κλείσιμο" onClick={() => setSelected(null)}>×</button><img src={selected.images[selectedImage]} alt={`${selected.alt} · φωτογραφία ${selectedImage + 1}`} /><div className="carousel-details"><strong>{selected.label}</strong><span>{selectedImage + 1} / {selected.images.length}</span></div><button className="carousel-arrow previous" aria-label="Προηγούμενη φωτογραφία" onClick={() => setSelectedImage((selectedImage - 1 + selected.images.length) % selected.images.length)}>←</button><button className="carousel-arrow next" aria-label="Επόμενη φωτογραφία" onClick={() => setSelectedImage((selectedImage + 1) % selected.images.length)}>→</button><div className="carousel-thumbnails">{selected.images.map((image, index) => <button className={index === selectedImage ? "active" : ""} key={image} aria-label={`Φωτογραφία ${index + 1}`} onClick={() => setSelectedImage(index)}><img src={image} alt="" /></button>)}</div></div></div>}
    </>
  );
}
