import Link from "next/link";

export const metadata = {
  title: "404 · Η σελίδα δεν βρέθηκε | Στρατιωτικό Μουσείο Κομοτηνής",
};

export default function NotFound() {
  return (
    <main className="status-page">
      <header className="status-nav">
        <Link className="brand" href="/">
          <img src="/assets/museum-emblem.png" alt="Έμβλημα 21ης Τεθωρακισμένης Ταξιαρχίας" />
          <span>Στρατιωτικό Μουσείο<small>Κομοτηνή</small></span>
        </Link>
        <Link href="/">ΑΡΧΙΚΗ ΣΕΛΙΔΑ</Link>
      </header>
      <section className="status-content" aria-labelledby="not-found-title">
        <div className="status-code" aria-hidden="true">404</div>
        <div className="status-copy">
          <p className="section-label">ΕΚΤΟΣ ΔΙΑΔΡΟΜΗΣ</p>
          <h1 id="not-found-title">Η σελίδα αυτή δεν βρίσκεται στο μουσείο</h1>
          <p>Ίσως η διεύθυνση δεν είναι σωστή ή η έκθεση που αναζητάτε έχει μετακινηθεί.</p>
          <Link className="status-action" href="/">ΕΠΙΣΤΡΟΦΗ ΣΤΗΝ ΑΡΧΙΚΗ <span>→</span></Link>
        </div>
      </section>
      <footer><span>Στρατιωτικό Μουσείο Κομοτηνής</span><span>© 2026 · Κομοτηνή, Θράκη</span></footer>
    </main>
  );
}
