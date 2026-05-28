import React, { useState } from "react";
import { Footer } from "../startseite/components/Footer";
import { useFadeUp } from "../shared/useGsap";
import { useIsMobile } from "../shared/useIsMobile";

const beitraege = [
  {
    img: "/images/bild25.jpg",
    imgPosition: "center 35%",
    kategorie: "Inside Betthupferl",
    datum: "3. Juni 2026",
    titel: "Der Tag der Neueröffnung",
    text: "Ein unvergesslicher Moment: die Türen öffnen sich, Champagner fließt und die neue Boutique empfängt ihre ersten Gäste mit offenen Armen.",
    langtext: "Der erste Tag war mehr als eine Eröffnung – er war eine Begegnung. Gäste, Freunde und Neugierige strömten durch die Tür, während Champagner in den Gläsern perlte und der Duft frischer Blumen die Boutique füllte. Ein Moment, den wir nie vergessen werden.",
    imgLeft: true,
  },
  {
    img: "/images/bild37.jpg",
    kategorie: "Inside Betthupferl",
    datum: "12. Mai 2026",
    titel: "Der Umzug nach Traunstein",
    text: "Ein neues Kapitel beginnt – Betthupferl findet ein neues Zuhause in der Herzkammer des Chiemgaus und bringt seine Welt der Eleganz in die Stadt.",
    langtext: "Was lange gereift ist, trägt endlich Früchte. Nach monatelanger Planung, unzähligen Besuchen und einem tiefen Gespür für den richtigen Ort hat Betthupferl sein neues Zuhause gefunden: mitten am Stadtplatz in Traunstein. Ein Ort, der Eleganz und Herzlichkeit vereint – genau wie die Welt, die wir für Sie schaffen möchten.",
    imgLeft: false,
  },
];

function Beitrag({ img, imgPosition = "top center", kategorie, datum, titel, text, langtext, imgLeft }) {
  const [expanded, setExpanded] = useState(false);
  const [liked, setLiked] = useState(false);
  const isMobile = useIsMobile();
  const rowRef = useFadeUp();

  const imageBlock = (
    <div className="journal-card" style={{ flex: "0 0 46%" }}>
      {/* Luxury frame: outer wine red border + white mat + inner content */}
      <div style={{
        border: "1px solid #7A1528",
        padding: "10px",
        background: "#7A1528",
        boxShadow: "0 8px 40px rgba(26,26,26,0.13)",
      }}>
        <div style={{ background: "#fff", padding: "1.2rem 1.2rem 1rem" }}>

          {/* Profile row */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
              <div style={{
                width: "34px", height: "34px", borderRadius: "50%",
                background: "#7A1528",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{ fontFamily: "'Bodoni Moda', serif", fontSize: "0.78rem", color: "#f5f1eb", fontWeight: 700 }}>B</span>
              </div>
              <div>
                <p style={{ margin: 0, fontSize: "0.78rem", fontFamily: "'Cormorant Garamond', serif", color: "#1a1a1a", letterSpacing: "0.05em", fontWeight: 500 }}>
                  betthupferl.traunstein
                </p>
                <p style={{ margin: 0, fontSize: "0.68rem", fontFamily: "'Cormorant Garamond', serif", color: "#aaa", letterSpacing: "0.03em" }}>
                  Traunstein, Bayern
                </p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "3px" }}>
              {[0,1,2].map(i => <div key={i} style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#ccc" }} />)}
            </div>
          </div>

          {/* Image with thin inner border */}
          <div style={{ border: "1px solid #ece7e0", padding: "4px", background: "#ece7e0" }}>
            <div className="img-zoom" style={{ position: "relative", width: "100%", paddingBottom: "100%", overflow: "hidden", background: "#e0d9d0" }}>
              <img
                src={img}
                alt={titel}
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: imgPosition, display: "block" }}
              />
            </div>
          </div>

          {/* Actions + date */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "0.9rem" }}>
            <div style={{ display: "flex", gap: "0.9rem", alignItems: "center" }}>
              <button onClick={() => setLiked(l => !l)} style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill={liked ? "#7A1528" : "none"} stroke={liked ? "#7A1528" : "#888"} strokeWidth="1.5">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </button>
              <button style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="1.5">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </button>
            </div>
            <p style={{ margin: 0, fontSize: "0.68rem", fontFamily: "'Cormorant Garamond', serif", color: "#bbb", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              {datum}
            </p>
          </div>

        </div>
      </div>
    </div>
  );

  const textBlock = (
    <div style={{ flex: "0 0 46%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "1rem 0" }}>
      <p style={{ margin: "0 0 0.8rem", fontSize: "0.7rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "#9b6a4a" }}>
        {kategorie}
      </p>
      <h2 style={{ margin: "0 0 1.4rem", fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "2rem", color: "#1a1a1a", letterSpacing: "0.02em", lineHeight: 1.2 }}>
        {titel}
      </h2>
      <div style={{ width: "2.5rem", height: "1px", background: "#7A1528", marginBottom: "1.4rem" }} />
      <p style={{ margin: "0 0 1rem", fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem", color: "#555", lineHeight: 1.85, letterSpacing: "0.01em" }}>
        {text}
      </p>
      {expanded && (
        <p style={{ margin: "0 0 1rem", fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem", color: "#555", lineHeight: 1.85, letterSpacing: "0.01em" }}>
          {langtext}
        </p>
      )}
      <button
        onClick={() => setExpanded(e => !e)}
        style={{ alignSelf: "flex-start", background: "none", border: "none", cursor: "pointer", fontFamily: "'Cormorant Garamond', serif", fontSize: "0.82rem", color: "#7A1528", letterSpacing: "0.1em", textTransform: "uppercase", padding: 0, marginTop: "0.5rem" }}
      >
        {expanded ? "Weniger lesen ↑" : "Weiterlesen →"}
      </button>
    </div>
  );

  return (
    <div ref={rowRef} style={{ display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "stretch" : "center", gap: isMobile ? "1.5rem" : "8%", padding: isMobile ? "3rem 1.2rem" : "5rem 6rem", borderBottom: "1px solid #d8d0c8" }}>
      {isMobile ? imageBlock : (imgLeft ? imageBlock : textBlock)}
      {isMobile ? textBlock : (imgLeft ? textBlock : imageBlock)}
    </div>
  );
}

export default function Journal() {
  const isMobile = useIsMobile();
  const headerRef = useFadeUp();

  return (
    <div style={{ background: "#f5f1eb", fontFamily: "'Cormorant Garamond', serif", minHeight: "100vh" }}>

      {/* Header */}
      <div ref={headerRef} style={{ textAlign: "center", padding: isMobile ? "5rem 1.5rem 3rem" : "8rem 0 5rem" }}>
        <p style={{ margin: "0 0 0.8rem", fontSize: "0.72rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#9b6a4a" }}>
          Geschichten & Einblicke
        </p>
        <h1 style={{ margin: 0, fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "2.8rem", color: "#1a1a1a", letterSpacing: "0.02em" }}>
          Journal
        </h1>
        <div style={{ width: "1px", height: "3rem", background: "#7A1528", margin: "1.5rem auto 0" }} />
      </div>

      {/* Beiträge */}
      {beitraege.map((b, i) => (
        <Beitrag key={i} {...b} />
      ))}

      <Footer />
    </div>
  );
}
