"use client";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFadeUp, useStaggerFadeUp } from "../../shared/useGsap";
import { useIsMobile } from "../../shared/useIsMobile";

const damenProducts = [
  { name: "Dessous-Set",   material: "NINA VON C",  img: "/images/bild41.jpg", route: "/dessous-lingerie" },
  { name: "Unterwäsche",   material: "MARIE JO",    img: "/images/bild44.jpg", route: "/unterwaesche" },
  { name: "Nachtwäsche",   material: "PIP Studio",  img: "/images/bild47.png", route: "/nachtwaesche" },
  { name: "Bademode",      material: "CHANTELLE",   img: "/images/bild50.png", route: "/bademode" },
];

const herrenProducts = [
  { name: "Unterwäsche",   material: "bruno banani", img: "/images/bild53.png", route: "/herren-unterwaesche" },
  { name: "Bademode",      material: "bruno banani", img: "/images/bild54.png", route: "/herren-bademode" },
  { name: "Bademode",      material: "bruno banani", img: "/images/bild55.png", route: "/herren-bademode" },
  { name: "Bademode",      material: "bruno banani", img: "/images/bild56.png", route: "/herren-bademode" },
];

function ProductModal({ product, onClose }) {
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || null);
  const [selectedSize, setSelectedSize] = useState(null);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 1000,
        background: "rgba(0,0,0,0.55)",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: "#fff",
          display: "flex",
          maxWidth: "860px",
          width: "90%",
          maxHeight: "90vh",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          style={{
            position: "absolute", top: "1rem", right: "1rem",
            background: "none", border: "none", fontSize: "1.4rem",
            cursor: "pointer", zIndex: 10, color: "#333",
          }}
        >
          ✕
        </button>

        {/* Bild 6 */}
        <div style={{ flex: "0 0 50%", background: "#f2ede8" }}>
          {product.modalImg
            ? <img src={product.modalImg} alt={product.name}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            : <div style={{ width: "100%", height: "100%", minHeight: "500px", background: "#e8e2db" }} />
          }
        </div>

        {/* Info */}
        <div style={{ flex: 1, padding: "2.5rem 2rem", overflowY: "auto", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <div>
            <p style={{ margin: "0 0 0.2rem", fontSize: "0.8rem", color: "#9b6a4a", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              {product.material}
            </p>
            <h2 style={{ margin: 0, fontSize: "1.6rem", fontFamily: "'Bodoni Moda', serif", fontWeight: 700 }}>
              {product.name}
            </h2>
          </div>

          {product.description && (
            <p style={{ margin: 0, fontSize: "0.95rem", color: "#555", lineHeight: 1.7 }}>
              {product.description}
            </p>
          )}

          {/* Farben */}
          {product.colors && (
            <div>
              <p style={{ margin: "0 0 0.6rem", fontSize: "0.8rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#333" }}>
                Farbe
              </p>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                {product.colors.map((color, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedColor(color)}
                    style={{
                      width: "28px", height: "28px",
                      borderRadius: "50%",
                      background: color,
                      border: selectedColor === color ? "2px solid #333" : "1px solid #ccc",
                      cursor: "pointer",
                      outline: selectedColor === color ? "2px solid #fff" : "none",
                      outlineOffset: "-4px",
                    }}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Größen */}
          {product.sizes && (
            <div>
              <p style={{ margin: "0 0 0.6rem", fontSize: "0.8rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#333" }}>
                Größe
              </p>
              <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    style={{
                      padding: "0.4rem 0.9rem",
                      border: selectedSize === size ? "1px solid #333" : "1px solid #ccc",
                      background: selectedSize === size ? "#333" : "#fff",
                      color: selectedSize === size ? "#fff" : "#333",
                      fontSize: "0.85rem",
                      cursor: "pointer",
                    }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          <button style={{
            marginTop: "auto",
            padding: "0.85rem",
            background: "#7A1528",
            color: "#fff",
            border: "none",
            fontSize: "0.9rem",
            letterSpacing: "0.05em",
            cursor: "pointer",
          }}>
            In den Warenkorb
          </button>
        </div>
      </div>
    </div>
  );
}

export function ProductSection() {
  const [active, setActive] = useState("damen");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const products = active === "damen" ? damenProducts : herrenProducts;

  const introRef = useFadeUp();
  const gridRef = useStaggerFadeUp(0.1);

  return (
    <section style={{ background: "#f2ede8", padding: isMobile ? "2.5rem 0 2rem" : "4rem 0 3rem" }}>

      {/* Intro Text */}
      <p ref={introRef} style={{
        textAlign: "center",
        fontFamily: "'Bodoni Moda', serif",
        fontStyle: "italic",
        fontWeight: 400,
        fontSize: "1.15rem",
        color: "#333",
        maxWidth: "520px",
        margin: "0 auto 3rem",
        lineHeight: 1.7,
        padding: "0 1rem",
      }}>
        Entdecken Sie die Saison-Highlights für <span style={{ color: "#8B0000" }}>Mai</span>. Eine Garderobe voller Komfort,
        Leichtigkeit und Ästhetik.
      </p>

      {/* Tabs */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "3rem" }}>
        {[["damen", "Damen"], ["herren", "Herren"]].map(([key, label]) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            style={{
              padding: "0.6rem 3rem",
              border: "none",
              background: "#7A1528",
              color: "#fff",
              fontSize: "0.9rem",
              cursor: "pointer",
              letterSpacing: "0.05em",
              fontFamily: "inherit",
              opacity: active === key ? 1 : 0.55,
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div ref={gridRef} style={{ display: "grid", gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)", gap: "1px", alignItems: "start" }}>
        {products.map((product, i) => (
          <div
            key={i}
            className="card-hover"
            onClick={() => product.route ? navigate(product.route) : null}
            style={{ cursor: product.route ? "pointer" : "default" }}
          >
            <div className="img-zoom img-overlay" style={{
              background: "#e8e2db",
              width: "100%",
              paddingBottom: isMobile ? "120%" : "133%",
              position: "relative",
              overflow: "hidden",
            }}>
              {product.img && (
                <img
                  src={product.img}
                  alt={product.name}
                  style={{
                    position: "absolute", inset: 0,
                    width: "100%", height: "100%",
                    objectFit: "cover",
                    objectPosition: "top center",
                  }}
                />
              )}
            </div>
            <p style={{
              margin: "0.7rem 0 0.2rem",
              textAlign: "center",
              fontSize: "0.88rem",
              color: "#1a1a1a",
              fontWeight: 400,
              letterSpacing: "0.01em",
            }}>
              {product.name}
            </p>
            <p style={{
              margin: 0,
              textAlign: "center",
              fontSize: "0.78rem",
              color: "#9b6a4a",
              letterSpacing: "0.01em",
            }}>
              {product.material}
            </p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </section>
  );
}
