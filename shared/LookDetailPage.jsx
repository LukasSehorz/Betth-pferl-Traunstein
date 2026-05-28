import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../startseite/components/Footer";

const colors = [
  { hex: "#f0e8de", name: "Creme" },
  { hex: "#d4c8a8", name: "Sand" },
  { hex: "#e8c4b8", name: "Blush" },
  { hex: "#c8d4dc", name: "Eisblau" },
  { hex: "#1c1410", name: "Espresso" },
  { hex: "#6b4c30", name: "Kastanie" },
];

const sizes = ["XS", "S", "M", "L", "XL"];

function ProductPanel({ product }) {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [sizeOpen, setSizeOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", gap: "0", borderTop: "1px solid #e0d8d0", paddingTop: "2rem" }}>

      {/* Product image */}
      <div style={{ flex: "0 0 42%", background: "#f0ece6", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "320px" }}>
        {product.img ? (
          <img src={product.img} alt={product.name} style={{ width: "100%", height: "100%", objectFit: "contain", display: "block", maxHeight: "340px" }} />
        ) : (
          <div style={{ width: "100%", height: "340px", background: "#e8e2db" }} />
        )}
      </div>

      {/* Product info */}
      <div style={{ flex: 1, padding: "0 0 0 2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div>
          <p style={{ margin: "0 0 0.3rem", fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", fontWeight: 400, color: "#1a1a1a" }}>
            {product.name}
          </p>
          <p style={{ margin: "0 0 0.6rem", fontFamily: "'Cormorant Garamond', serif", fontSize: "0.9rem", color: "#9b6a4a" }}>
            {product.material}
          </p>
          <p style={{ margin: 0, fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem", color: "#1a1a1a" }}>
            {product.preis}
          </p>
        </div>

        <div style={{ height: "1px", background: "#e0d8d0" }} />

        {/* Farbe */}
        <div>
          <p style={{ margin: "0 0 0.6rem", fontFamily: "'Cormorant Garamond', serif", fontSize: "0.85rem", color: "#1a1a1a" }}>
            Farbe : <span style={{ color: "#888" }}>{selectedColor.name}</span>
          </p>
          <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
            {colors.map(c => (
              <button key={c.hex} onClick={() => setSelectedColor(c)} title={c.name}
                style={{ width: "24px", height: "24px", background: c.hex, border: selectedColor.hex === c.hex ? "2px solid #1a1a1a" : "1px solid #ccc", cursor: "pointer", padding: 0 }} />
            ))}
          </div>
        </div>

        {/* Größe */}
        <div>
          <button onClick={() => setSizeOpen(o => !o)}
            style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", background: "none", border: "none", borderTop: "1px solid #e0d8d0", borderBottom: sizeOpen ? "none" : "1px solid #e0d8d0", padding: "0.6rem 0", cursor: "pointer", fontFamily: "'Cormorant Garamond', serif", fontSize: "0.85rem", color: "#1a1a1a" }}>
            <span>Wählen Sie {selectedSize ? `– ${selectedSize}` : ""}</span>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <a href="#" style={{ fontSize: "0.8rem", color: "#7A1528", textDecoration: "none", fontFamily: "'Cormorant Garamond', serif" }}>Größenguide</a>
              <span style={{ fontSize: "0.7rem", transform: sizeOpen ? "rotate(90deg)" : "none", transition: "0.2s" }}>›</span>
            </div>
          </button>
          {sizeOpen && (
            <div style={{ borderBottom: "1px solid #e0d8d0" }}>
              {sizes.map(s => (
                <button key={s} onClick={() => { setSelectedSize(s); setSizeOpen(false); }}
                  style={{ display: "block", width: "100%", padding: "0.5rem 0", background: "none", border: "none", borderBottom: "1px solid #f0e8e0", textAlign: "left", fontFamily: "'Cormorant Garamond', serif", fontSize: "0.85rem", color: selectedSize === s ? "#1a1a1a" : "#555", fontWeight: selectedSize === s ? 600 : 400, cursor: "pointer" }}>
                  {s}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Button */}
        <button
          onClick={() => product.route && navigate(product.route)}
          style={{ width: "100%", padding: "0.85rem", background: "#7A1528", color: "#fff", border: "none", fontFamily: "'Cormorant Garamond', serif", fontSize: "0.85rem", letterSpacing: "0.06em", cursor: "pointer" }}>
          Dieses Stück reservieren
        </button>

        {/* Link */}
        {product.route && (
          <p style={{ margin: 0, fontFamily: "'Cormorant Garamond', serif", fontSize: "0.8rem", color: "#555" }}>
            Vollständige Produktbeschreibung aufrufen:{" "}
            <a href="#" onClick={e => { e.preventDefault(); navigate(product.route); }} style={{ color: "#7A1528", textDecoration: "underline" }}>Produktseite</a>
          </p>
        )}
      </div>
    </div>
  );
}

export default function LookDetailPage({ lookTitle, modelImg, products }) {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: "100vh", background: "#f5f1eb", fontFamily: "'Cormorant Garamond', serif" }}>
      <div style={{ display: "flex", minHeight: "100vh" }}>

        {/* Left: model image - sticky */}
        <div style={{ flex: "0 0 45%", position: "sticky", top: 0, height: "100vh", overflow: "hidden" }}>
          {modelImg ? (
            <img src={modelImg} alt={lookTitle} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }} />
          ) : (
            <div style={{ width: "100%", height: "100%", background: "#e0d9d0" }} />
          )}
        </div>

        {/* Right: look info */}
        <div style={{ flex: 1, padding: "4rem 3rem 4rem 3rem", overflowY: "auto" }}>

          {/* Back */}
          <button onClick={() => navigate("/looks")} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "'Cormorant Garamond', serif", fontSize: "0.9rem", color: "#555", letterSpacing: "0.06em", marginBottom: "2rem", padding: 0 }}>
            ← Alle Looks
          </button>

          {/* Look title */}
          <h1 style={{ margin: "0 0 0.4rem", fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "2rem", color: "#1a1a1a" }}>
            {lookTitle}
          </h1>
          <p style={{ margin: "0 0 2.5rem", fontFamily: "'Cormorant Garamond', serif", fontSize: "0.9rem", color: "#888" }}>
            {products.length} Produkte in diesem Look enthalten
          </p>

          {/* Products */}
          <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
            {products.map((product, i) => (
              <ProductPanel key={i} product={product} />
            ))}
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}
