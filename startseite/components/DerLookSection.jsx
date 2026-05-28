import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useIsMobile } from "../../shared/useIsMobile";

const items = [
  { img: "/images/bild58.png", name: "Nachtwäsche",  material: "PIP Studio", route: "/nachtwaesche" },
  { img: "/images/bild48.png", name: "Nachtwäsche",  material: "PIP Studio", route: "/nachtwaesche" },
];

export function DerLookSection() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const next = () => setIndex(i => Math.min(i + 1, items.length - 1));
  const prev = () => setIndex(i => Math.max(i - 1, 0));

  return (
    <section style={{ display: "flex", flexDirection: isMobile ? "column" : "row", height: isMobile ? "auto" : "100vh", background: "#f2ede8", overflow: "hidden" }}>

      {/* Left / Top: full model image */}
      <div style={{ flex: isMobile ? "none" : "0 0 50%", height: isMobile ? "135vw" : undefined, overflow: "hidden" }}>
        <img
          src="/images/bild57.png"
          alt="Der Look"
          style={{ width: "100%", height: "100%", objectFit: isMobile ? "cover" : "contain", objectPosition: "center bottom", display: "block" }}
        />
      </div>

      {/* Right / Bottom panel */}
      <div style={{ flex: isMobile ? "none" : "0 0 50%", display: "flex", flexDirection: "column", background: "#f2ede8", padding: isMobile ? "1.5rem 1.2rem" : "2rem", gap: "0" }}>

        {/* Inner box */}
        <div style={{ flex: 1, background: "#f2ede8", display: "flex", flexDirection: "column", overflow: "hidden" }}>

        {/* Top: title */}
        <div style={{
          flex: "0 0 38%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <h2 style={{
            margin: "0 0 1.4rem",
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 400,
            fontSize: "2.5rem",
            color: "#1a1a1a",
            letterSpacing: "0.02em",
          }}>
            Der Look
          </h2>
          <div style={{ width: "1px", height: "2.8rem", background: "#7A1528" }} />
        </div>

        <div style={{ height: "1px", background: "#e0d8d0", flexShrink: 0 }} />

        {/* Carousel area */}
        <div style={{ flex: 1, overflow: "hidden", position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>

          {/* Sliding track */}
          <div style={{ flex: 1, overflow: "hidden", position: "relative" }}>
            <div style={{
              display: "flex",
              height: "100%",
              transform: `translateX(-${index * 100}%)`,
              transition: "transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
            }}>
              {items.map((item, i) => (
                <div
                  key={i}
                  style={{
                    flex: "0 0 100%",
                    height: "100%",
                    padding: "1.5rem 1.5rem 0",
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                  }}
                >
                  <div
                    onClick={() => navigate(item.route)}
                    className="img-zoom"
                    style={{ cursor: "pointer", background: "#f5f1eb", lineHeight: 0 }}
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      style={{ width: "100%", maxHeight: isMobile ? "55vw" : "46vh", objectFit: "contain", objectPosition: "bottom center", display: "block" }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Prev arrow — centered in image track */}
            {index > 0 && (
              <button onClick={prev} style={{
                position: "absolute", left: "1.2rem", top: "50%", transform: "translateY(-50%)",
                width: "42px", height: "42px", borderRadius: "50%",
                background: "#fff", border: "none",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", fontSize: "1.3rem", color: "#7A1528",
                boxShadow: "0 1px 6px rgba(0,0,0,0.15)", zIndex: 10,
              }}>‹</button>
            )}

            {/* Next arrow — centered in image track */}
            {index < items.length - 1 && (
              <button onClick={next} style={{
                position: "absolute", right: "1.2rem", top: "50%", transform: "translateY(-50%)",
                width: "42px", height: "42px", borderRadius: "50%",
                background: "#fff", border: "none",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", fontSize: "1.3rem", color: "#7A1528",
                boxShadow: "0 1px 6px rgba(0,0,0,0.15)", zIndex: 10,
              }}>›</button>
            )}
          </div>

          {/* Product names — fixed below track, also slides */}
          <div style={{ overflow: "hidden", flexShrink: 0 }}>
            <div style={{
              display: "flex",
              transform: `translateX(-${index * 100}%)`,
              transition: "transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
            }}>
              {items.map((item, i) => (
                <div key={i} style={{ flex: "0 0 100%", padding: "0.75rem 1.5rem 0" }}>
                  <p style={{ margin: "0 0 0.2rem", fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "0.95rem", color: "#1a1a1a" }}>
                    {item.name}
                  </p>
                  <p style={{ margin: 0, fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "0.82rem", color: "#9b6a4a" }}>
                    {item.material}
                  </p>
                </div>
              ))}
            </div>
          </div>



        </div>
        </div> {/* end inner wine-red box */}
      </div>
    </section>
  );
}
