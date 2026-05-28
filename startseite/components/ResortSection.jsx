import React from "react";
import { useNavigate } from "react-router-dom";
import { useStaggerFadeUp } from "../../shared/useGsap";
import { useIsMobile } from "../../shared/useIsMobile";

const items = [
  { tag: "RESORT 2026", title: "Geschenk für sie", img: "/images/bild11.png", route: "/damen/alle" },
  { tag: "RESORT 2026", title: "Geschenk für ihn", img: "/images/bild12.png", route: "/herren/alle" },
  { tag: "RESORT 2026", title: "Bademode",          img: "/images/bild13.png", route: "/bademode/alle" },
];

export function ResortSection() {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const gridRef = useStaggerFadeUp(0.13);

  return (
    <section style={{ background: "#f2ede8", padding: isMobile ? "2.5rem 1.2rem 3rem" : "5rem 3.5rem 5.5rem" }}>
      <div ref={gridRef} style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: isMobile ? "2.5rem" : "1.5rem" }}>
        {items.map((item, i) => (
          <div key={i} className="card-hover" style={{ cursor: "pointer" }} onClick={() => navigate(item.route)}>

            {/* Bild */}
            <div className="img-zoom img-overlay" style={{ width: "100%", paddingBottom: isMobile ? "75%" : "130%", position: "relative", overflow: "hidden", background: "#e0d9d0" }}>
              {item.img && (
                <img
                  src={item.img}
                  alt={item.title}
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              )}
            </div>

            {/* Text */}
            <div style={{ textAlign: "center", padding: "1.4rem 0 0" }}>
              <p style={{
                margin: "0 0 0.5rem",
                fontSize: "0.72rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#888",
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 400,
              }}>
                {item.tag}
              </p>
              <h3 style={{
                margin: "0 0 0.7rem",
                fontSize: "2.1rem",
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 400,
                color: "#1a1a1a",
                lineHeight: 1.1,
              }}>
                {item.title}
              </h3>
              <p style={{
                margin: 0,
                fontSize: "0.82rem",
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 400,
                color: "#555",
                letterSpacing: "0.06em",
              }}>
                – Entdecken –
              </p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
