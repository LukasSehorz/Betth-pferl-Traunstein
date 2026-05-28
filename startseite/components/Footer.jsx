import React from "react";
import { useNavigate } from "react-router-dom";
import { useIsMobile } from "../../shared/useIsMobile";

const kollektionen = [
  { label: "Damen",            route: "/damen" },
  { label: "Herren",           route: "/herren" },
  { label: "Bademode",         route: "/bademode/alle" },
  { label: "Dessous & Lingerie", route: "/dessous-lingerie" },
  { label: "Nachtwäsche",      route: "/nachtwaesche" },
  { label: "Marken",           route: "/marken" },
];

const service = [
  { label: "Boutique",    route: "/boutique" },
  { label: "Journal",     route: "/journal" },
];

export function Footer() {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  return (
    <footer style={{ background: "#7A1528", color: "#f5f1eb", fontFamily: "'Cormorant Garamond', serif" }}>

      {/* Main footer content */}
      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "2fr 1fr 1fr 1fr", gap: isMobile ? "2rem" : "3rem", padding: isMobile ? "3rem 1.5rem 2rem" : "5rem 4rem 4rem" }}>

        {/* Brand */}
        <div>
          <h2 style={{ margin: "0 0 1.2rem", fontFamily: "'Bodoni Moda', serif", fontWeight: 700, fontSize: "1.6rem", color: "#f5f1eb", letterSpacing: "0.06em" }}>
            Betthupferl
          </h2>
          <p style={{ margin: "0 0 1.5rem", fontSize: "0.9rem", color: "rgba(245,241,235,0.65)", lineHeight: 1.8, maxWidth: "280px" }}>
            Ihr Spezialist für hochwertige Dessous, Nachtwäsche und Loungewear in Traunstein.
          </p>
          <p style={{ margin: "0 0 0.4rem", fontSize: "0.85rem", color: "rgba(245,241,235,0.65)" }}>
            Stadtpl. 11 · 83278 Traunstein
          </p>
          <p style={{ margin: "0 0 0.4rem", fontSize: "0.85rem", color: "rgba(245,241,235,0.65)" }}>
            Di–Fr: 10:00–18:00 · Sa: 10:00–14:00
          </p>
          <p style={{ margin: "0 0 0.4rem", fontSize: "0.85rem", color: "rgba(245,241,235,0.65)" }}>
            Mo & So: Geschlossen
          </p>
          <p style={{ margin: 0, fontSize: "0.85rem", color: "rgba(245,241,235,0.65)" }}>
            Tel: 0861 90977109
          </p>
        </div>

        {/* Kollektionen */}
        <div>
          <h3 style={{ margin: "0 0 1.2rem", fontSize: "0.75rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(245,241,235,0.5)", fontWeight: 400 }}>
            Kollektionen
          </h3>
          {kollektionen.map(({ label, route }) => (
            <button key={label} onClick={() => navigate(route)}
              style={{ display: "block", background: "none", border: "none", cursor: "pointer", padding: "0 0 0.65rem", fontFamily: "'Cormorant Garamond', serif", fontSize: "0.9rem", color: "rgba(245,241,235,0.75)", textAlign: "left", letterSpacing: "0.02em" }}>
              {label}
            </button>
          ))}
        </div>

        {/* Service */}
        <div>
          <h3 style={{ margin: "0 0 1.2rem", fontSize: "0.75rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(245,241,235,0.5)", fontWeight: 400 }}>
            Entdecken
          </h3>
          {service.map(({ label, route }) => (
            <button key={label} onClick={() => navigate(route)}
              style={{ display: "block", background: "none", border: "none", cursor: "pointer", padding: "0 0 0.65rem", fontFamily: "'Cormorant Garamond', serif", fontSize: "0.9rem", color: "rgba(245,241,235,0.75)", textAlign: "left", letterSpacing: "0.02em" }}>
              {label}
            </button>
          ))}
        </div>

        {/* Newsletter */}
        <div>
          <h3 style={{ margin: "0 0 1.2rem", fontSize: "0.75rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(245,241,235,0.5)", fontWeight: 400 }}>
            Newsletter
          </h3>
          <p style={{ margin: "0 0 1.2rem", fontSize: "0.88rem", color: "rgba(245,241,235,0.65)", lineHeight: 1.7 }}>
            Erhalten Sie exklusive Einblicke und Neuheiten direkt in Ihr Postfach.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            <input
              type="email"
              placeholder="Ihre E-Mail-Adresse"
              style={{ padding: "0.7rem 0.9rem", background: "none", border: "1px solid rgba(245,241,235,0.3)", color: "#f5f1eb", fontFamily: "'Cormorant Garamond', serif", fontSize: "0.88rem", outline: "none" }}
            />
            <button style={{ padding: "0.7rem", background: "#f5f1eb", color: "#7A1528", border: "none", fontFamily: "'Cormorant Garamond', serif", fontSize: "0.82rem", letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer" }}>
              Anmelden
            </button>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div style={{ height: "1px", background: "rgba(245,241,235,0.12)", margin: isMobile ? "0 1.5rem" : "0 4rem" }} />

      {/* Bottom bar */}
      <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "center", gap: isMobile ? "0.8rem" : 0, padding: isMobile ? "1.2rem 1.5rem" : "1.5rem 4rem" }}>
        <p style={{ margin: 0, fontSize: "0.78rem", color: "rgba(245,241,235,0.4)", letterSpacing: "0.04em" }}>
          © 2026 Betthupferl. Alle Rechte vorbehalten.
        </p>
        <div style={{ display: "flex", gap: "2rem" }}>
          {[["Impressum", "/impressum"], ["Datenschutz", "/datenschutz"]].map(([label, route]) => (
            <button key={label} onClick={() => navigate(route)}
              style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "'Cormorant Garamond', serif", fontSize: "0.78rem", color: "rgba(245,241,235,0.4)", letterSpacing: "0.04em" }}>
              {label}
            </button>
          ))}
        </div>
      </div>

    </footer>
  );
}
