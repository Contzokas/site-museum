"use client";

export default function GlobalError({ retry }) {
  return (
    <html lang="el">
      <body style={{ margin: 0, background: "#14201b", color: "#f4f0e7", fontFamily: "Georgia, serif" }}>
        <title>Προσωρινή δυσκολία | Στρατιωτικό Μουσείο Κομοτηνής</title>
        <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: "32px" }}>
          <section style={{ maxWidth: "620px", borderTop: "3px solid #b89753", paddingTop: "28px" }}>
            <p style={{ color: "#dfc584", fontFamily: "monospace", fontSize: "11px", letterSpacing: ".16em" }}>ΠΡΟΣΩΡΙΝΗ ΔΥΣΚΟΛΙΑ · 500</p>
            <h1 style={{ margin: "18px 0", fontSize: "clamp(38px, 7vw, 70px)", fontWeight: 500, lineHeight: 1 }}>Η περιήγηση διακόπηκε</h1>
            <p style={{ maxWidth: "480px", color: "#d5d4ca", fontFamily: "Arial, sans-serif", lineHeight: 1.7 }}>Παρουσιάστηκε ένα προσωρινό πρόβλημα. Παρακαλούμε δοκιμάστε ξανά.</p>
            <button type="button" onClick={() => retry()} style={{ marginTop: "16px", border: "1px solid #dfc584", background: "transparent", color: "#f4f0e7", padding: "13px 18px", cursor: "pointer", fontFamily: "monospace", fontSize: "11px", letterSpacing: ".08em" }}>ΔΟΚΙΜΑΣΤΕ ΞΑΝΑ ↻</button>
          </section>
        </main>
      </body>
    </html>
  );
}
