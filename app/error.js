"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({ error, retry }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="status-page status-page-error">
      <header className="status-nav">
        <Link className="brand" href="/">
          <img src="/assets/museum-emblem.png" alt="Έμβλημα 21ης Τεθωρακισμένης Ταξιαρχίας" />
          <span>Στρατιωτικό Μουσείο<small>Κομοτηνή</small></span>
        </Link>
        <Link href="/">ΑΡΧΙΚΗ ΣΕΛΙΔΑ</Link>
      </header>
      <section className="status-content" aria-labelledby="error-title">
        <div className="status-code" aria-hidden="true">500</div>
        <div className="status-copy">
          <p className="section-label">ΠΡΟΣΩΡΙΝΗ ΔΥΣΚΟΛΙΑ</p>
          <h1 id="error-title">Κάτι διέκοψε την περιήγηση</h1>
          <p>Η σελίδα δεν μπόρεσε να φορτώσει αυτή τη στιγμή. Δοκιμάστε ξανά ή επιστρέψτε στην αρχική σελίδα.</p>
          <div className="status-actions">
            <button className="status-action" type="button" onClick={() => retry()}>ΔΟΚΙΜΑΣΤΕ ΞΑΝΑ <span>↻</span></button>
            <Link className="status-secondary" href="/">ΕΠΙΣΤΡΟΦΗ ΣΤΗΝ ΑΡΧΙΚΗ</Link>
          </div>
        </div>
      </section>
      <footer><span>Στρατιωτικό Μουσείο Κομοτηνής</span><span>© 2026 · Κομοτηνή, Θράκη</span></footer>
    </main>
  );
}
