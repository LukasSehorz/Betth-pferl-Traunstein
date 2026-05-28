import React from "react";
import { useNavigate } from "react-router-dom";
import { useFadeUp } from "../../shared/useGsap";
import { useIsMobile } from "../../shared/useIsMobile";

export function EditorialSection() {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const leftRef = useFadeUp(0.1);
  const rightRef = useFadeUp(0.25);

  return (
    <section style={{ display: "flex", flexDirection: isMobile ? "column-reverse" : "row", height: isMobile ? "auto" : "100vh", background: "#f2ede8", overflow: "hidden" }}>

      {/* Left: small image + text */}
      <div ref={leftRef} style={{ flex: isMobile ? "none" : "0 0 50%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: isMobile ? "2.5rem 1.5rem" : "0 5rem" }}>

        {/* Small image */}
        <div className="img-zoom" style={{ width: isMobile ? "55%" : "42%", marginBottom: "2.5rem" }}>
          <img src="/images/bild21.png" alt="Editorial" style={{ width: "100%", display: "block", objectFit: "cover" }} />
        </div>

        {/* Title */}
        <h2 style={{
          margin: "0 0 1rem",
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 400,
          fontSize: "2rem",
          color: "#1a1a1a",
          textAlign: "center",
          letterSpacing: "0.01em",
        }}>
          Elegante Nacht-Essentials
        </h2>

        {/* Description */}
        <p style={{
          margin: "0 0 2.5rem",
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 400,
          fontSize: "0.95rem",
          color: "#555",
          textAlign: "center",
          lineHeight: 1.7,
        }}>
          Mühelos und zugleich elegant verleihen die Stücke von Betthupferl
          der Silhouette eine natürliche Raffinesse.
        </p>

        {/* Links */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.8rem" }}>
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.95rem", color: "#7A1528", letterSpacing: "0.06em" }}>
            – Damen –
          </span>
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.95rem", color: "#7A1528", letterSpacing: "0.06em" }}>
            – Herren –
          </span>
        </div>

      </div>

      {/* Right: large full-height image */}
      <div ref={rightRef} style={{ flex: isMobile ? "none" : "0 0 50%", height: isMobile ? "110vw" : undefined, overflow: "hidden" }}>
        <img
          src="/images/bild23.png"
          alt="Editorial"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }}
        />
      </div>

    </section>
  );
}
