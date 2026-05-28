import React from "react";
import { Footer } from "../startseite/components/Footer";
import { useIsMobile } from "../shared/useIsMobile";

const rows = [
  [
    { name: "MARIE JO",    font: "'Playfair Display', serif",  weight: 400, size: "3rem",   style: "normal",  spacing: "0.18em" },
    { name: "PRIMADONNA",  font: "'Playfair Display', serif",  weight: 400, size: "3rem",   style: "italic",  spacing: "0.14em" },
  ],
  [
    { name: "NINA VON C",  font: "'Montserrat', sans-serif",   weight: 200, size: "2.2rem", style: "normal",  spacing: "0.22em" },
    { name: "CHANTELLE",   font: "'Raleway', sans-serif",      weight: 200, size: "2.2rem", style: "normal",  spacing: "0.3em"  },
    { name: "FANTASIE",    font: "'Cormorant Garamond', serif", weight: 300, size: "2.4rem", style: "italic",  spacing: "0.1em"  },
  ],
  [
    { name: "PIP Studio Amsterdam", font: "'Poppins', sans-serif",  weight: 300, size: "1.9rem", style: "normal", spacing: "0.08em" },
    { name: "Freya",       font: "'Playfair Display', serif",  weight: 400, size: "2rem",   style: "italic",  spacing: "0.06em" },
    { name: "ANITA",       font: "'Open Sans', sans-serif",    weight: 300, size: "1.8rem", style: "normal",  spacing: "0.24em" },
    { name: "Wacoal",      font: "'Raleway', sans-serif",      weight: 300, size: "1.9rem", style: "normal",  spacing: "0.16em" },
  ],
  [
    { name: "MAGIC BODYFASHION", font: "'Montserrat', sans-serif", weight: 300, size: "1.6rem", style: "normal", spacing: "0.2em" },
    { name: "elomi",       font: "'Quicksand', sans-serif",    weight: 400, size: "1.9rem", style: "normal",  spacing: "0.08em" },
    { name: "mey",         font: "'Raleway', sans-serif",      weight: 300, size: "2rem",   style: "normal",  spacing: "0.12em" },
    { name: "LISCA",       font: "'Montserrat', sans-serif",   weight: 200, size: "2rem",   style: "normal",  spacing: "0.28em" },
  ],
  [
    { name: "RINGELLA",       font: "'Open Sans', sans-serif",   weight: 300, size: "1.45rem", style: "normal", spacing: "0.22em" },
    { name: "Comfort SUSA",   font: "'Poppins', sans-serif",     weight: 300, size: "1.45rem", style: "normal", spacing: "0.06em" },
    { name: "Marc O’Polo", font: "'Poppins', sans-serif",   weight: 300, size: "1.45rem", style: "normal", spacing: "0.08em" },
    { name: "chantelle pulp", font: "'Raleway', sans-serif",     weight: 300, size: "1.45rem", style: "normal", spacing: "0.1em"  },
    { name: "bruno banani",   font: "'Raleway', sans-serif",     weight: 300, size: "1.45rem", style: "normal", spacing: "0.04em" },
  ],
];

export default function Marken() {
  const isMobile = useIsMobile();
  return (
    <div style={{ minHeight: "100vh", background: "#f5f1eb", fontFamily: "'Cormorant Garamond', serif" }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=Montserrat:wght@200;300;400&family=Raleway:wght@200;300;400&family=Poppins:wght@300;400&family=Open+Sans:wght@300;400&family=Quicksand:wght@400;500&display=swap');
      `}</style>

      {/* Header */}
      <div style={{ textAlign: "center", padding: isMobile ? "5rem 1.5rem 3rem" : "9rem 2rem 5rem" }}>
        <p style={{ margin: "0 0 0.8rem", fontSize: "0.65rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "#9b6a4a" }}>
          Unsere Partner
        </p>
        <h1 style={{ margin: "0 0 1.5rem", fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "2.8rem", color: "#1a1a1a", letterSpacing: "0.02em" }}>
          Marken
        </h1>
        <div style={{ width: "1px", height: "3rem", background: "#7A1528", margin: "0 auto" }} />
      </div>

      {/* Brand rows */}
      <div style={{ padding: isMobile ? "1rem 1rem 5rem" : "2rem 4rem 8rem", display: "flex", flexDirection: "column", gap: "0", alignItems: "center" }}>
        {rows.map((row, ri) => (
          <React.Fragment key={ri}>
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              gap: "0",
              padding: "1.8rem 0",
            }}>
              {row.map((brand, bi) => (
                <React.Fragment key={brand.name}>
                  <span style={{
                    fontFamily: brand.font,
                    fontWeight: brand.weight,
                    fontSize: brand.size,
                    fontStyle: brand.style,
                    letterSpacing: brand.spacing,
                    color: "#1a1a1a",
                    whiteSpace: "nowrap",
                    padding: "0 1.6rem",
                    transition: "color 0.25s ease",
                    cursor: "default",
                  }}
                    onMouseEnter={e => e.currentTarget.style.color = "#7A1528"}
                    onMouseLeave={e => e.currentTarget.style.color = "#1a1a1a"}
                  >
                    {brand.name}
                  </span>
                  {bi < row.length - 1 && (
                    <span style={{ color: "#c8b8a8", fontSize: "0.7rem", flexShrink: 0 }}>·</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {ri < rows.length - 1 && (
              <div style={{ width: "3rem", height: "1px", background: "#d8d0c8", margin: "0.2rem 0" }} />
            )}
          </React.Fragment>
        ))}
      </div>

      <Footer />
    </div>
  );
}
