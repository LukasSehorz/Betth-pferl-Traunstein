import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Damen",               href: "/damen" },
  { label: "Herren",              href: "/herren" },
  { label: "Marken",              href: "/marken" },
  { label: "Boutique",            href: "/boutique" },
  { label: "Journal",             href: "/journal" },
];

export function PageNavbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* Navbar bar */}
      <nav style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        height: "52px",
        zIndex: 1000,
        background: "#f5f1eb",
        borderBottom: scrolled ? "1px solid rgba(216,208,200,0.9)" : "1px solid rgba(216,208,200,0.5)",
        boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,0.06)" : "none",
        transition: "box-shadow 0.3s ease, border-color 0.3s ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 1.1rem",
      }}>

        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "0.35rem",
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "0.82rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#1a1a1a",
            padding: "6px 0",
            opacity: 0.7,
            transition: "opacity 0.2s ease",
            minWidth: "60px",
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = "1"}
          onMouseLeave={e => e.currentTarget.style.opacity = "0.7"}
        >
          <span style={{ fontSize: "1rem", lineHeight: 1 }}>←</span>
          <span>Zurück</span>
        </button>

        {/* Logo */}
        <button
          onClick={() => navigate("/")}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontFamily: "'Bodoni Moda', serif",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "1.15rem",
            letterSpacing: "0.04em",
            color: "#1a1a1a",
            padding: 0,
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          Betthupferl
        </button>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "6px 0",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            minWidth: "60px",
            alignItems: "flex-end",
          }}
          aria-label="Menü öffnen"
        >
          <span style={{
            display: "block", width: "22px", height: "1.5px",
            background: "#1a1a1a",
            transition: "transform 0.3s ease, opacity 0.3s ease",
            transform: menuOpen ? "translateY(6.5px) rotate(45deg)" : "none",
          }} />
          <span style={{
            display: "block", width: "22px", height: "1.5px",
            background: "#1a1a1a",
            transition: "opacity 0.2s ease",
            opacity: menuOpen ? 0 : 1,
          }} />
          <span style={{
            display: "block", width: "22px", height: "1.5px",
            background: "#1a1a1a",
            transition: "transform 0.3s ease, opacity 0.3s ease",
            transform: menuOpen ? "translateY(-6.5px) rotate(-45deg)" : "none",
          }} />
        </button>
      </nav>

      {/* Full-screen menu overlay */}
      <div style={{
        position: "fixed",
        inset: 0,
        zIndex: 999,
        background: "#f5f1eb",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity: menuOpen ? 1 : 0,
        pointerEvents: menuOpen ? "all" : "none",
        transition: "opacity 0.35s ease",
      }}>

        {/* Decorative line top */}
        <div style={{
          position: "absolute",
          top: "52px", left: "1.1rem", right: "1.1rem",
          height: "1px",
          background: "rgba(216,208,200,0.6)",
        }} />

        {/* Nav links */}
        <nav style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.15rem",
        }}>
          {navLinks.map(({ label, href }, i) => (
            <button
              key={href}
              onClick={() => navigate(href)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 400,
                fontSize: "clamp(1.6rem, 5vw, 2.2rem)",
                letterSpacing: "0.06em",
                color: location.pathname === href ? "#7A1528" : "#1a1a1a",
                padding: "0.5rem 1rem",
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(14px)",
                transition: `opacity 0.4s ease ${0.06 * i + 0.1}s, transform 0.4s ease ${0.06 * i + 0.1}s, color 0.2s ease`,
                lineHeight: 1.2,
              }}
              onMouseEnter={e => { if (location.pathname !== href) e.currentTarget.style.color = "#7A1528"; }}
              onMouseLeave={e => { if (location.pathname !== href) e.currentTarget.style.color = "#1a1a1a"; }}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Divider */}
        <div style={{
          width: "1.5rem", height: "1px",
          background: "rgba(122,21,40,0.3)",
          margin: "2rem 0 1.5rem",
          opacity: menuOpen ? 1 : 0,
          transition: "opacity 0.4s ease 0.45s",
        }} />

        {/* Secondary links */}
        <div style={{
          display: "flex",
          gap: "2rem",
          opacity: menuOpen ? 1 : 0,
          transition: "opacity 0.4s ease 0.5s",
        }}>
          {[{ label: "Impressum", href: "/impressum" }, { label: "Datenschutz", href: "/datenschutz" }].map(({ label, href }) => (
            <button
              key={href}
              onClick={() => navigate(href)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "0.78rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#888",
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Spacer so content doesn't hide behind fixed navbar */}
      <div style={{ height: "52px" }} />
    </>
  );
}
