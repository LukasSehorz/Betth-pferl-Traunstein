import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../startseite/components/Footer";
import { useIsMobile } from "./useIsMobile";

const INITIAL_VISIBLE = 8;
const LOAD_MORE = 8;

export default function KategoriePage({ title, products, bannerImgs = [] }) {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);
  const loadMoreRef = useRef(null);

  const totalProducts = products.filter(p => p.name).length;
  const visibleProducts = products.slice(0, visibleCount);
  const shownCount = visibleProducts.filter(p => p.name).length;
  const remaining = totalProducts - shownCount;

  const colCount = isMobile ? Math.min(totalProducts, 2) : Math.min(totalProducts, 4);

  const chunks = [];
  for (let i = 0; i < visibleProducts.length; i += colCount) {
    chunks.push(visibleProducts.slice(i, i + colCount));
  }

  return (
    <div style={{ minHeight: "100vh", background: "#f5f1eb", fontFamily: "'Cormorant Garamond', serif" }}>

      {/* Title */}
      <div style={{ textAlign: "center", padding: isMobile ? "5rem 0 2.5rem" : "8rem 0 4.5rem" }}>
        <h1 style={{ margin: 0, fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "2.6rem", color: "#1a1a1a", letterSpacing: "0.02em" }}>
          {title}
        </h1>
      </div>

      {/* Product count bar */}
      <div style={{ borderTop: "1px solid #d8d0c8", borderBottom: "1px solid #d8d0c8", padding: "0.85rem 2.5rem" }}>
        <span style={{ fontSize: "0.82rem", color: "#555", letterSpacing: "0.06em" }}>
          {totalProducts} Produkte
        </span>
      </div>

      {/* Product grid + portrait banners */}
      <div style={{ padding: isMobile ? "0 0.5rem" : "0 1.5rem" }}>
        {chunks.map((chunk, chunkIndex) => (
          <React.Fragment key={chunkIndex}>
            <div
              ref={chunkIndex === Math.floor(visibleCount / colCount) - 1 ? loadMoreRef : null}
              style={{ display: "grid", gridTemplateColumns: `repeat(${colCount}, 1fr)` }}>
              {chunk.map((product, i) => (
                <div key={i}
                  className="card-hover"
                  onClick={() => product.route && navigate(product.route)}
                  style={{ cursor: product.route ? "pointer" : "default", padding: "1.5rem 1rem 2.5rem" }}>
                  <div className="img-zoom img-overlay" style={{ position: "relative", width: "100%", paddingBottom: "133%", background: "#ece7e0", overflow: "hidden" }}>
                    {product.img && (
                      <img src={product.img} alt={product.name}
                        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }} />
                    )}
                  </div>
                  <div style={{ padding: "0.9rem 0 0" }}>
                    <p style={{ margin: "0 0 0.25rem", fontSize: "0.95rem", color: "#1a1a1a", fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}>
                      {product.name}
                    </p>
                    <p style={{ margin: 0, fontSize: "0.82rem", color: "#9b6a4a", fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}>
                      {product.material}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </React.Fragment>
        ))}
      </div>

      {/* Load more */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.2rem", padding: "3rem 0 5rem" }}>
        <p style={{ margin: 0, fontSize: "0.82rem", color: "#888", letterSpacing: "0.06em", fontFamily: "'Cormorant Garamond', serif" }}>
          {shownCount} von {totalProducts} Produkten
        </p>
        {remaining > 0 && (
          <button
            onClick={() => {
              setVisibleCount(c => c + LOAD_MORE);
              setTimeout(() => {
                if (loadMoreRef.current) {
                  loadMoreRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }, 50);
            }}
            style={{ padding: "0.85rem 2.5rem", background: "none", border: "1px solid #1a1a1a", fontFamily: "'Cormorant Garamond', serif", fontSize: "0.85rem", letterSpacing: "0.08em", color: "#1a1a1a", cursor: "pointer" }}>
            Weitere {Math.min(remaining, LOAD_MORE)} Produkte anzeigen
          </button>
        )}
      </div>

      {/* Store hint */}
      <div style={{ textAlign: "center", padding: "2rem 2rem 5rem", borderTop: "1px solid #d8d0c8", margin: "0 1.5rem" }}>
        <p style={{ margin: "0 0 0.5rem", fontSize: "0.65rem", letterSpacing: "0.24em", textTransform: "uppercase", color: "#9b6a4a", fontFamily: "'Cormorant Garamond', serif" }}>
          Unsere Boutique
        </p>
        <p style={{ margin: 0, fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontStyle: "italic", fontSize: "1.05rem", color: "#555", lineHeight: 1.8, maxWidth: "480px", marginLeft: "auto", marginRight: "auto" }}>
          Dies ist nur eine Auswahl dieser Kollektion — das vollständige Sortiment entdecken Sie bei uns im Laden am Stadtplatz 11 in Traunstein.
        </p>
      </div>

      <Footer />
    </div>
  );
}
