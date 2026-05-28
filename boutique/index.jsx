import React from "react";
import { Footer } from "../startseite/components/Footer";
import { useFadeUp, useStaggerFadeUp } from "../shared/useGsap";
import { useIsMobile } from "../shared/useIsMobile";

const galleryImages = [
  { img: "/images/bild31.jpg", tall: true },
  { img: "/images/bild29.jpg", tall: false },
  { img: "/images/bild30.jpg", tall: false },
  { img: "/images/bild37.jpg", tall: true },
  { img: "/images/bild32.jpg", tall: false },
  { img: "/images/bild33.jpg", tall: false },
];

export default function Boutique() {
  const isMobile = useIsMobile();
  const introRef = useFadeUp();
  const galleryRef = useStaggerFadeUp(0.08);
  const infoRef = useFadeUp(0.1);

  return (
    <div style={{ background: "#f5f1eb", fontFamily: "'Cormorant Garamond', serif" }}>

      {/* Intro */}
      <div ref={introRef} style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: isMobile ? "4rem 1.5rem 2.5rem" : "6rem 0", maxWidth: "560px", margin: "0 auto", textAlign: "center" }}>
        <p style={{ margin: "0 0 1.2rem", fontSize: "0.72rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "#9b6a4a" }}>
          Unsere Welt
        </p>
        <h2 style={{ margin: "0 0 1.8rem", fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "2.2rem", color: "#1a1a1a", letterSpacing: "0.02em", lineHeight: 1.2 }}>
          Ein Ort der Eleganz im Herzen Traunsteins
        </h2>
        <p style={{ margin: 0, fontSize: "1rem", color: "#666", lineHeight: 1.9, letterSpacing: "0.01em" }}>
          Betthupferl empfängt Sie in einer stilvollen Boutique am Stadtplatz. Erleben Sie hochwertige Dessous, Nachtwäsche und Loungewear in einer Atmosphäre, die Ruhe und Eleganz vereint.
        </p>
      </div>

      {/* Gallery */}
      <div ref={galleryRef} style={{ padding: isMobile ? "0 0.8rem 3rem" : "0 2rem 6rem", display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "1fr 1fr 1fr", gap: "1.2rem" }}>
        {galleryImages.map((item, i) => (
          <div
            key={i}
            className="img-zoom img-overlay"
            style={{
              position: "relative",
              overflow: "hidden",
              background: "#e0d9d0",
              paddingBottom: item.tall ? "140%" : "100%",
            }}
          >
            <img
              src={item.img}
              alt=""
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }}
            />
          </div>
        ))}
      </div>

      {/* Divider */}
      <div style={{ height: "1px", background: "#d8d0c8", margin: "0 2rem" }} />

      {/* Info + Map */}
      <div ref={infoRef} style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", minHeight: isMobile ? "auto" : "520px" }}>

        {/* Left: store info */}
        <div style={{ padding: isMobile ? "2.5rem 1.5rem" : "6rem 5rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <p style={{ margin: "0 0 0.6rem", fontSize: "0.72rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "#9b6a4a" }}>
            Besuchen Sie uns
          </p>
          <h2 style={{ margin: "0 0 3rem", fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "2rem", color: "#1a1a1a", letterSpacing: "0.02em" }}>
            Betthupferl Traunstein
          </h2>

          {/* Address */}
          <div style={{ marginBottom: "2rem" }}>
            <p style={{ margin: "0 0 0.3rem", fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#9b6a4a" }}>Adresse</p>
            <p style={{ margin: 0, fontSize: "1rem", color: "#444", lineHeight: 1.7 }}>
              Stadtpl. 11<br />83278 Traunstein
            </p>
          </div>

          {/* Hours */}
          <div style={{ marginBottom: "2rem" }}>
            <p style={{ margin: "0 0 0.3rem", fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#9b6a4a" }}>Öffnungszeiten</p>
            <table style={{ fontSize: "1rem", color: "#444", lineHeight: 1.8, borderSpacing: "0 0", borderCollapse: "collapse" }}>
              <tbody>
                {[
                  ["Mo", "10:00 – 18:00"],
                  ["Di", "10:00 – 18:00"],
                  ["Mi", "10:00 – 18:00"],
                  ["Do", "10:00 – 18:00"],
                  ["Fr", "10:00 – 18:00"],
                  ["Sa", "10:00 – 14:00"],
                  ["So", "Geschlossen"],
                ].map(([day, hours]) => (
                  <tr key={day}>
                    <td style={{ paddingRight: "1.8rem", color: "#888", fontSize: "0.9rem" }}>{day}</td>
                    <td>{hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Contact */}
          <div style={{ marginBottom: "2.5rem" }}>
            <p style={{ margin: "0 0 0.3rem", fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#9b6a4a" }}>Telefon</p>
            <p style={{ margin: 0, fontSize: "1rem", color: "#444", lineHeight: 1.9 }}>
              <a href="tel:+4986190977109" style={{ color: "#444", textDecoration: "none" }}>0861 90977109</a>
            </p>
          </div>
        </div>

        {/* Right: Google Maps */}
        <div style={{ position: "relative" }}>
          <iframe
            title="Betthupferl Traunstein"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2677.3!2d12.6431!3d47.8678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477690b0e7f2b6b7%3A0x1!2sStadtplatz+12%2C+83278+Traunstein!5e0!3m2!1sde!2sde!4v1"
            width="100%"
            height="100%"
            style={{ border: 0, display: "block", minHeight: isMobile ? "300px" : "520px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>

      <Footer />
    </div>
  );
}
