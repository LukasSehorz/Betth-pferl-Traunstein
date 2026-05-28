import React from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../startseite/components/Footer";

export default function HerrenUnterwaesche() {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: "100vh", background: "#f5f1eb", fontFamily: "'Cormorant Garamond', serif" }}>

      {/* Header */}
      <div style={{ textAlign: "center", padding: "9rem 2rem 5rem" }}>
        <p style={{ margin: "0 0 0.8rem", fontSize: "0.65rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "#9b6a4a" }}>
          Herren
        </p>
        <h1 style={{ margin: "0 0 1.5rem", fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "2.8rem", color: "#1a1a1a", letterSpacing: "0.02em" }}>
          Unterwäsche
        </h1>
        <div style={{ width: "1px", height: "3rem", background: "#7A1528", margin: "0 auto" }} />
      </div>

      {/* Single image */}
      <div style={{ padding: "0 4rem 8rem", maxWidth: "900px", margin: "0 auto" }}>
        <div style={{ position: "relative", overflow: "hidden" }}>
          <img
            src="/images/bild53.png"
            alt="Unterwäsche"
            style={{ width: "100%", display: "block", objectFit: "cover" }}
          />
          <div style={{
            position: "absolute",
            bottom: "2.5rem",
            left: "2.5rem",
          }}>
            <p style={{ margin: "0 0 0.3rem", fontSize: "0.6rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "#fff", opacity: 0.85 }}>
              Unterwäsche
            </p>
            <p style={{ margin: 0, fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "1.6rem", color: "#fff", letterSpacing: "0.06em" }}>
              bruno banani
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
