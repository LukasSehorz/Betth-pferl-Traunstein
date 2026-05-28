import React, { useState, useEffect } from "react";

export function IntroScreen({ onDone }) {
  const [showRule, setShowRule] = useState(false);
  const [showLine2, setShowLine2] = useState(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // After line 1 sweep (1.6s) + short hold
    const t1 = setTimeout(() => {
      setShowRule(true);
      setTimeout(() => {
        setShowLine2(true);
        // After line 2 sweep (2.2s) + hold, fade out
        setTimeout(() => {
          setFading(true);
          setTimeout(onDone, 900);
        }, 3200);
      }, 500);
    }, 1800);

    return () => clearTimeout(t1);
  }, []);

  return (
    <div style={{
      position: "fixed",
      inset: 0,
      background: "#f5f1eb",
      zIndex: 9999,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      opacity: fading ? 0 : 1,
      transition: "opacity 0.9s ease",
      pointerEvents: fading ? "none" : "all",
    }}>

      <h1 style={{
        margin: 0,
        fontFamily: "'Bodoni Moda', serif",
        fontWeight: 400,
        fontSize: "clamp(1.8rem, 4vw, 3.2rem)",
        color: "#7A1528",
        letterSpacing: "0.1em",
        animation: "revealLine 1.6s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        clipPath: "inset(0 100% 0 0)",
      }}>
        Das Betthupferl Traunstein
      </h1>

      <div style={{
        width: "1.8rem",
        height: "1px",
        background: "#7A1528",
        margin: "1.2rem 0",
        opacity: showRule ? 0.45 : 0,
        transition: "opacity 0.8s ease",
      }} />

      <p style={{
        margin: 0,
        fontFamily: "'Cormorant Garamond', serif",
        fontWeight: 300,
        fontSize: "clamp(0.9rem, 2vw, 1.3rem)",
        color: "#7A1528",
        letterSpacing: "0.08em",
        clipPath: showLine2 ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
        transition: showLine2 ? "clip-path 2.2s cubic-bezier(0.4, 0, 0.2, 1)" : "none",
      }}>
        Ein Ort der Eleganz im Herzen Traunsteins
      </p>

      <style>{`
        @keyframes revealLine {
          from { clip-path: inset(0 100% 0 0); }
          to   { clip-path: inset(0 0% 0 0); }
        }
      `}</style>

    </div>
  );
}
