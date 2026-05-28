import React, { useState } from "react";
import { Footer } from "../startseite/components/Footer";

const colors = [
  { hex: "#f0e8de", name: "Creme" },
  { hex: "#d4c8a8", name: "Sand" },
  { hex: "#e8c4b8", name: "Blush" },
  { hex: "#c8d4dc", name: "Eisblau" },
  { hex: "#b8c8d4", name: "Powder" },
  { hex: "#a8c4a0", name: "Sage" },
  { hex: "#b8c0d0", name: "Lavendel" },
  { hex: "#e0d8c0", name: "Ivory" },
  { hex: "#c4a870", name: "Camel" },
  { hex: "#c09868", name: "Taupe" },
  { hex: "#6b4c30", name: "Kastanie" },
  { hex: "#1c1410", name: "Espresso" },
];

const sizes = ["XS", "S", "M", "L", "XL"];

export default function ProduktSeite({ name, material, preis, img1, img2 }) {
  const [selectedColor, setSelectedColor] = useState(colors[11]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [sizeOpen, setSizeOpen] = useState(false);

  return (
    <div style={{ minHeight: "100vh", background: "#f5f1eb", fontFamily: "'Cormorant Garamond', serif", fontSize: "14px" }}>

      {/* Navbar */}
      <div style={{ background: "#fff", borderBottom: "1px solid #e8e0d8", padding: "0 2.5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", padding: "0.9rem 0 0.7rem" }}>
          <a href="/" style={{ fontSize: "0.92rem", color: "#555", textDecoration: "none", letterSpacing: "0.06em", fontFamily: "'Cormorant Garamond', serif" }}>← Zurück</a>
          <a href="/" style={{ textDecoration: "none", color: "#1a1a1a", fontFamily: "'Bodoni Moda', serif", fontSize: "1.4rem", fontWeight: 700, letterSpacing: "0.06em", textAlign: "center" }}>
            Betthupferl
          </a>
          <div />
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: "2.5rem", padding: "0.5rem 0 0.9rem", borderTop: "1px solid #f0e8e0" }}>
          {["Damen", "Herren", "Angebote", "Marken", "Boutique", "Journal"].map(link => (
            <a key={link} href={`/${link.toLowerCase()}`} style={{ textDecoration: "none", color: "#333", fontSize: "1rem", letterSpacing: "0.06em", fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}>{link}</a>
          ))}
        </div>
      </div>

      {/* Main */}
      <div style={{ display: "flex", height: "calc(100vh - 105px)" }}>

        {/* Images */}
        <div style={{ display: "flex", flex: "0 0 72%", overflow: "hidden" }}>
          <div style={{ flex: 1, overflow: "hidden", background: "#ece7e0" }}>
            <img src={img1} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }} />
          </div>
          <div style={{ flex: 1, overflow: "hidden", background: "#ece7e0" }}>
            <img src={img2 || img1} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }} />
          </div>
        </div>

        {/* Info */}
        <div style={{ flex: "0 0 28%", background: "#fff", borderLeft: "1px solid #e8e0d8", overflowY: "auto", padding: "2rem 1.8rem 3rem", display: "flex", flexDirection: "column", gap: "1.4rem" }}>

          <div>
            <h1 style={{ margin: "0 0 0.3rem", fontSize: "1.55rem", fontFamily: "'Bodoni Moda', serif", fontWeight: 700, color: "#1a1a1a", lineHeight: 1.25 }}>
              {name}
            </h1>
            <p style={{ margin: "0 0 0.9rem", fontSize: "1rem", color: "#9b6a4a", fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, letterSpacing: "0.08em", textTransform: "uppercase" }}>{material}</p>
            <p style={{ margin: 0, fontSize: "1.15rem", color: "#1a1a1a", fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}>{preis}</p>
          </div>

          <div style={{ borderTop: "1px solid #ebe3db" }} />

          {/* Farbe */}
          <div>
            <p style={{ margin: "0 0 0.8rem", fontSize: "1rem", color: "#1a1a1a", fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, letterSpacing: "0.04em" }}>
              Farbe : <span style={{ color: "#888" }}>{selectedColor.name}</span>
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "5px" }}>
              {colors.map((color) => (
                <button key={color.hex} onClick={() => setSelectedColor(color)} title={color.name}
                  style={{ aspectRatio: "1", background: color.hex, border: selectedColor.hex === color.hex ? "2px solid #1a1a1a" : "1px solid #ccc", cursor: "pointer", padding: 0, display: "block", width: "100%" }} />
              ))}
            </div>
          </div>

          {/* Größe */}
          <div>
            <button onClick={() => setSizeOpen(o => !o)}
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", background: "none", border: "none", borderTop: "1px solid #ebe3db", borderBottom: sizeOpen ? "none" : "1px solid #ebe3db", padding: "0.75rem 0", cursor: "pointer", fontSize: "1rem", color: "#1a1a1a", fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, letterSpacing: "0.04em" }}>
              <span>Wählen Sie {selectedSize ? `– ${selectedSize}` : ""}</span>
              <span style={{ fontSize: "0.7rem", transform: sizeOpen ? "rotate(90deg)" : "none", transition: "0.2s" }}>›</span>
            </button>
            {sizeOpen && (
              <div style={{ borderBottom: "1px solid #ebe3db", paddingBottom: "0.5rem" }}>
                {sizes.map((size) => (
                  <button key={size} onClick={() => { setSelectedSize(size); setSizeOpen(false); }}
                    style={{ display: "block", width: "100%", padding: "0.6rem 0", background: "none", border: "none", borderBottom: "1px solid #f0e8e0", textAlign: "left", fontSize: "1rem", color: selectedSize === size ? "#1a1a1a" : "#555", fontWeight: selectedSize === size ? 600 : 400, cursor: "pointer", fontFamily: "'Cormorant Garamond', serif", letterSpacing: "0.04em" }}>
                    {size}
                  </button>
                ))}
              </div>
            )}
            <a href="#" style={{ display: "block", marginTop: "0.6rem", fontSize: "0.95rem", color: "#555", textDecoration: "underline", fontFamily: "'Cormorant Garamond', serif", letterSpacing: "0.04em" }}>Größenguide</a>
          </div>

          <button className="btn-wine" style={{ width: "100%", padding: "0.9rem", background: "#7A1528", color: "#fff", border: "none", borderRadius: "4px", fontSize: "0.95rem", letterSpacing: "0.12em", textTransform: "uppercase", cursor: "pointer", fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}>
            Dieses Stück reservieren
          </button>

          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.95rem", fontFamily: "'Cormorant Garamond', serif", letterSpacing: "0.04em" }}>
            <span style={{ color: "#555" }}>Benötigen Sie Hilfe?</span>
            <a href="#" style={{ color: "#333", textDecoration: "underline" }}>Kontaktieren Sie uns</a>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}
