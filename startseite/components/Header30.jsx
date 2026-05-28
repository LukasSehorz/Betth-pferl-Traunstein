"use client";

import React from "react";

export function Header30() {
  return (
    <section style={{ background: "#fff", position: "relative" }}>
      <div style={{ margin: "0 12%", position: "relative" }}>

        {/* Layer 1 — Original photos */}
        <div style={{ display: "flex", gap: 0, height: "100vh", position: "relative", zIndex: 1 }}>
          <img
            src="/images/bild1.jpeg"
            alt=""
            style={{ flex: 1, objectFit: "cover", objectPosition: "top center", display: "block" }}
          />
          <img
            src="/images/bild2.jpeg?v=bild3"
            alt=""
            style={{ flex: 1, objectFit: "cover", objectPosition: "top center", display: "block" }}
          />
        </div>

        {/* Layer 2 — BETTHUPFERL Text */}
        <span
          style={{
            fontFamily: "'Bodoni Moda', serif",
            fontSize: "11.8vw",
            fontWeight: 900,
            lineHeight: 0.82,
            color: "#000",
            whiteSpace: "nowrap",
            letterSpacing: "-0.01em",
            position: "absolute",
            top: "15%",
            left: "-10vw",
            transform: "scaleY(1.5)",
            transformOrigin: "top left",
            zIndex: 10,
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          BETTHUPFERL
        </span>

        {/* Layer 3 — Freigestellte Personen über dem Text */}
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 20,
            display: "flex",
            gap: 0,
            pointerEvents: "none",
          }}
        >
          <img
            src="/images/person1.png"
            alt=""
            style={{
              flex: 1,
              objectFit: "cover",
              objectPosition: "top center",
              display: "block",
            }}
          />
          <img
            src="/images/person2.png?v=clean10"
            alt=""
            style={{
              flex: 1,
              objectFit: "cover",
              objectPosition: "top center",
              display: "block",
            }}
          />
        </div>

      </div>
    </section>
  );
}
