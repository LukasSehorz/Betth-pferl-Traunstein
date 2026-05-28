import React from "react";
import { useFadeUp, useStaggerFadeUp } from "../../shared/useGsap";
import { useIsMobile } from "../../shared/useIsMobile";

const articles = [
  {
    img: "/images/bild37.jpg",
    title: "Der Umzug nach Traunstein",
    text: "Ein neues Kapitel beginnt – Betthupferl findet ein neues Zuhause in der Herzkammer des Chiemgaus und bringt seine Welt der Eleganz in die Stadt.",
  },
  {
    img: "/images/bild25.jpg",
    title: "Der Tag der Neueröffnung",
    text: "Ein unvergesslicher Moment: die Türen öffnen sich, Champagner fließt und die neue Boutique empfängt ihre ersten Gäste mit offenen Armen.",
  },
];

export function InsideSection() {
  const isMobile = useIsMobile();
  const headerRef = useFadeUp();
  const cardsRef = useStaggerFadeUp(0.13);

  return (
    <section style={{ background: "#f5f1eb", padding: "4rem 0 5rem", overflowX: "hidden" }}>

      {/* Header */}
      <div ref={headerRef} style={{ padding: "0 3rem", marginBottom: "2.5rem" }}>
        <h2 style={{
          margin: 0,
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 400,
          fontSize: "1.6rem",
          color: "#1a1a1a",
          letterSpacing: "0.01em",
        }}>
          Inside Betthupferl
        </h2>
      </div>

      {/* Cards track */}
      <div style={{ padding: isMobile ? "0 1.2rem" : "0 3rem", paddingBottom: "2rem" }}>
        <div ref={cardsRef} style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? "2.5rem" : "3rem",
        }}>
          {articles.map((article, i) => (
            <div key={i} className="card-hover" style={{ cursor: "pointer" }}>

              {/* Image */}
              <div className="img-zoom" style={{ width: "100%", paddingBottom: "128%", position: "relative", overflow: "hidden", background: "#e0d9d0", marginBottom: "1.2rem" }}>
                {article.img && (
                  <img
                    src={article.img}
                    alt={article.title}
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
                  />
                )}
              </div>

              {/* Title */}
              <p style={{ margin: "0 0 0.5rem", fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "1.05rem", color: "#1a1a1a", letterSpacing: "0.01em", lineHeight: 1.3 }}>
                {article.title}
              </p>

              {/* Description */}
              <p style={{ margin: 0, fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "0.88rem", color: "#666", lineHeight: 1.65 }}>
                {article.text}
              </p>

            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
