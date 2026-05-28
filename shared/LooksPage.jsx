import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../startseite/components/Footer";

function LookCard({ look, onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ cursor: "pointer" }}
    >
      <div style={{ width: "100%", paddingBottom: "133%", position: "relative", overflow: "hidden", background: "#e0d9d0" }}>
        {look.img && (
          <img
            src={look.img}
            alt={look.name}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }}
          />
        )}
        {/* Hover overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: "rgba(245,241,235,0.18)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
        }} />
        {/* Text overlay */}
        <div style={{
          position: "absolute", bottom: "1.8rem", left: "1.5rem",
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateY(0)" : "translateY(6px)",
          transition: "opacity 0.3s ease, transform 0.3s ease",
        }}>
          <p style={{ margin: "0 0 0.3rem", fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "1.9rem", color: "#1a1a1a", lineHeight: 1 }}>
            {look.name}
          </p>
          <p style={{ margin: 0, fontFamily: "'Cormorant Garamond', serif", fontSize: "0.85rem", color: "#7A1528", letterSpacing: "0.06em" }}>
            – Entdecken –
          </p>
        </div>
      </div>
    </div>
  );
}

const damenLooks = [
  { id: "damen-1", name: "Look 1", img: "/images/bild16.png" },
  { id: "damen-2", name: "Look 2", img: null },
  { id: "damen-3", name: "Look 3", img: null },
  { id: "damen-4", name: "Look 4", img: null },
  { id: "damen-5", name: "Look 5", img: null },
  { id: "damen-6", name: "Look 6", img: null },
];

const herrenLooks = [
  { id: "herren-1", name: "Look 1", img: "/images/bild17.png" },
  { id: "herren-2", name: "Look 2", img: null },
  { id: "herren-3", name: "Look 3", img: null },
  { id: "herren-4", name: "Look 4", img: null },
  { id: "herren-5", name: "Look 5", img: null },
  { id: "herren-6", name: "Look 6", img: null },
];

export default function LooksPage() {
  const [active, setActive] = useState("damen");
  const navigate = useNavigate();
  const looks = active === "damen" ? damenLooks : herrenLooks;
  const title = active === "damen" ? "Damen-Resortkollektion 2026" : "Herren-Resortkollektion 2026";

  return (
    <div style={{ minHeight: "100vh", background: "#f5f1eb", fontFamily: "'Cormorant Garamond', serif" }}>

      {/* Title */}
      <div style={{ textAlign: "center", padding: "5rem 0 3rem" }}>
        <h1 style={{ margin: 0, fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "2rem", color: "#1a1a1a", letterSpacing: "0.01em" }}>
          {title}
        </h1>
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", justifyContent: "center", gap: "3rem", marginBottom: "3rem", borderBottom: "1px solid #d8d0c8", paddingBottom: "1rem" }}>
        {[["damen", "Damen"], ["herren", "Herren"]].map(([key, label]) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            style={{
              background: "none", border: "none", cursor: "pointer",
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "0.9rem", letterSpacing: "0.08em",
              color: active === key ? "#7A1528" : "#888",
              borderBottom: active === key ? "1px solid #7A1528" : "1px solid transparent",
              paddingBottom: "0.3rem",
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0" }}>
        {looks.map((look) => (
          <LookCard key={look.id} look={look} onClick={() => navigate(`/looks/${look.id}`)} />
        ))}
      </div>

      <Footer />
    </div>
  );
}
