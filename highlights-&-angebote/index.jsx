import React from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../startseite/components/Footer";
import { useFadeUp } from "../shared/useGsap";

const angebote = [
  {
    large: {
      img: "/images/bild6.png",
      name: "Satin-Morgenmantel",
      oldPrice: "189",
      newPrice: "129",
      route: "/produkt/satin-morgenmantel",
    },
    small: {
      img: "/images/bild16.png",
      name: "Baumwoll-Pyjama",
      oldPrice: "149",
      newPrice: "99",
      route: "/produkt/baumwoll-pyjama",
    },
    largeLeft: true,
  },
  {
    large: {
      img: "/images/bild23.png",
      name: "Spitzen-Negligé",
      oldPrice: "219",
      newPrice: "159",
      route: "/produkt/spitzen-neglige",
      objectPosition: "center 20%",
    },
    small: {
      img: "/images/bild9.png",
      name: "Seiden-Nachthemd",
      oldPrice: "259",
      newPrice: "179",
      route: null,
    },
    largeLeft: false,
  },
  {
    large: {
      img: "/images/bild11.png",
      name: "Seiden-Schlafanzug",
      oldPrice: "299",
      newPrice: "199",
      route: null,
    },
    small: {
      img: "/images/bild21.png",
      name: "Seiden-Kimono",
      oldPrice: "249",
      newPrice: "169",
      route: null,
    },
    largeLeft: true,
  },
];

function AngebotSection({ large, small, largeLeft }) {
  const navigate = useNavigate();
  const sectionRef = useFadeUp();

  const largeImg = (
    <div
      style={{
        flex: "0 0 62%",
        display: "flex",
        alignItems: "center",
        padding: "3rem 2rem",
        background: "#f5f1eb",
        height: "88vh",
        boxSizing: "border-box",
      }}
    >
      <div
        onClick={() => large.route && navigate(large.route)}
        className="img-zoom"
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          cursor: large.route ? "pointer" : "default",
        }}
      >
        <img
          src={large.img}
          alt={large.name}
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: large.objectPosition || "top center", display: "block" }}
        />
        {/* Overlay gradient */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 55%)" }} />
        {/* Text overlay */}
        <div style={{ position: "absolute", bottom: "2rem", left: "2rem" }}>
          <p style={{ margin: "0 0 0.5rem", fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", fontWeight: 400, color: "#fff", letterSpacing: "0.03em" }}>
            {large.name}
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem", color: "rgba(255,255,255,0.6)", textDecoration: "line-through" }}>
              {large.oldPrice} €
            </span>
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.25rem", color: "#fff", fontWeight: 500 }}>
              {large.newPrice} €
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  const smallImg = (
    <div
      style={{
        flex: "0 0 38%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "3rem 2.5rem",
        background: "#f5f1eb",
        height: "88vh",
        boxSizing: "border-box",
      }}
    >
      <div
        onClick={() => small.route && navigate(small.route)}
        style={{ width: "75%", cursor: small.route ? "pointer" : "default" }}
      >
        <div className="img-zoom" style={{ position: "relative", width: "100%", paddingBottom: "130%", overflow: "hidden", background: "#e0d9d0" }}>
          <img
            src={small.img}
            alt={small.name}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }}
          />
        </div>
      </div>
      <div style={{ width: "75%", marginTop: "1.4rem" }}>
        <p style={{ margin: "0 0 0.5rem", fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", fontWeight: 400, color: "#1a1a1a", letterSpacing: "0.02em" }}>
          {small.name}
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.9rem", color: "#999", textDecoration: "line-through" }}>
            {small.oldPrice} €
          </span>
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem", color: "#7A1528", fontWeight: 500 }}>
            {small.newPrice} €
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <div ref={sectionRef} style={{ display: "flex", width: "100%" }}>
      {largeLeft ? largeImg : smallImg}
      {largeLeft ? smallImg : largeImg}
    </div>
  );
}

export default function Angebote() {
  return (
    <div style={{ background: "#f5f1eb", fontFamily: "'Cormorant Garamond', serif" }}>

      {/* Title */}
      <div style={{ textAlign: "center", padding: "8rem 0 5rem" }}>
        <p style={{ margin: "0 0 0.8rem", fontSize: "0.72rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#9b6a4a" }}>
          Limitierte Angebote
        </p>
        <h1 style={{ margin: 0, fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "2.8rem", color: "#1a1a1a", letterSpacing: "0.02em" }}>
          Highlights & Angebote
        </h1>
        <div style={{ width: "1px", height: "3rem", background: "#7A1528", margin: "1.5rem auto 0" }} />
      </div>

      {/* Sections */}
      {angebote.map((angebot, i) => (
        <AngebotSection key={i} {...angebot} />
      ))}

      <Footer />
    </div>
  );
}
