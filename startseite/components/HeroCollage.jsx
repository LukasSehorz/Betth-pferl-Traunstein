import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useIsMobile } from "../../shared/useIsMobile";

const damenLinks = [
  { label: "Nachtwäsche",        href: "/nachtwaesche" },
  { label: "Unterwäsche",        href: "/unterwaesche" },
  { label: "Dessous & Lingerie", href: "/dessous-lingerie" },
  { label: "Bademode",           href: "/bademode" },
  { label: "Alles ansehen",      href: "/damen/alle" },
];

const herrenLinks = [
  { label: "Unterwäsche",  href: "/herren-unterwaesche" },
  { label: "Bademode",     href: "/herren-bademode" },
  { label: "Alles ansehen",href: "/herren/alle" },
];

const simpleLinks = [
  { label: "Marken",   href: "/marken" },
  { label: "Boutique", href: "/boutique" },
  { label: "Journal",  href: "/journal" },
];

function NavItem({ label, href, subLinks, navigate, mobile }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{ position: "relative" }}
      onMouseEnter={() => !mobile && setOpen(true)}
      onMouseLeave={() => !mobile && setOpen(false)}
    >
      <div style={{ position: "relative", display: "inline-flex", alignItems: "center" }}>
        <button
          onClick={() => navigate(href)}
          className="link-underline"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: mobile ? "1.05rem" : "clamp(0.85rem, 1.1vw, 1rem)",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#1a1a1a",
            padding: 0,
          }}
        >
          {label}
        </button>
        {subLinks && (
          <button
            onClick={() => setOpen(o => !o)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "2px 4px",
              display: "flex",
              alignItems: "center",
              position: "absolute",
              left: "100%",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            <svg
              width="9" height="9"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#7A1528"
              strokeWidth="2.5"
              style={{
                transition: "transform 0.2s ease",
                transform: open ? "rotate(90deg)" : "rotate(0deg)",
              }}
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        )}
      </div>

      <AnimatePresence>
        {open && subLinks && (
          <motion.div
            initial={{ opacity: 0, y: mobile ? -4 : 0, x: mobile ? 0 : -6 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: mobile ? -4 : 0, x: mobile ? 0 : -6 }}
            transition={{ duration: 0.15 }}
            style={mobile ? {
              position: "absolute",
              top: "calc(100% + 0.5rem)",
              left: "50%",
              transform: "translateX(-50%)",
              background: "#fff",
              border: "1px solid #e8e0d8",
              boxShadow: "0 8px 32px rgba(0,0,0,0.09)",
              minWidth: "180px",
              zIndex: 100,
            } : {
              position: "absolute",
              top: "50%",
              left: "calc(100% + 1.2rem)",
              transform: "translateY(-50%)",
              background: "#fff",
              border: "1px solid #e8e0d8",
              boxShadow: "0 8px 32px rgba(0,0,0,0.09)",
              minWidth: "200px",
              zIndex: 100,
            }}
          >
            {subLinks.map((sub, i) => (
              <button
                key={sub.label}
                onClick={() => { navigate(sub.href); setOpen(false); }}
                style={{
                  display: "block",
                  width: "100%",
                  padding: "0.65rem 1.4rem",
                  background: "none",
                  border: "none",
                  borderBottom: i < subLinks.length - 1 ? "1px solid #f0ebe4" : "none",
                  textAlign: "left",
                  cursor: "pointer",
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "0.9rem",
                  color: "#333",
                  letterSpacing: "0.04em",
                }}
                onMouseEnter={e => e.currentTarget.style.color = "#7A1528"}
                onMouseLeave={e => e.currentTarget.style.color = "#333"}
              >
                {sub.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function HeroCollage() {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div style={{ width: "100%", background: "#fff", display: "flex", flexDirection: "column" }}>

        {/* Top image row */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3px", height: "42vw" }}>
          <div className="img-zoom" style={{ overflow: "hidden" }}>
            <img src="/images/bild31.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }} />
          </div>
          <div className="img-zoom" style={{ overflow: "hidden" }}>
            <img src="/images/bild33.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }} />
          </div>
        </div>

        {/* Center: nav + logo + tagline */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "2.5rem 1.5rem",
          gap: "1.8rem",
        }}>
          <div style={{ textAlign: "center" }}>
            <nav style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.7rem", marginBottom: "1rem" }}>
              <NavItem label="Damen"  href="/damen"  subLinks={damenLinks}  navigate={navigate} mobile />
              <NavItem label="Herren" href="/herren" subLinks={herrenLinks} navigate={navigate} mobile />
              {simpleLinks.map(link => (
                <NavItem key={link.label} label={link.label} href={link.href} navigate={navigate} mobile />
              ))}
            </nav>
            <div style={{ width: "1.6rem", height: "1px", background: "#7A1528", margin: "0 auto", opacity: 0.5 }} />
          </div>

          <img
            src="/images/bild40.png"
            alt="Betthupferl"
            style={{ maxWidth: "72%", objectFit: "contain", display: "block" }}
          />

          <div style={{ textAlign: "center" }}>
            <div style={{ width: "1.6rem", height: "1px", background: "#7A1528", margin: "0 auto 0.7rem", opacity: 0.5 }} />
            <p style={{
              margin: 0,
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontStyle: "italic",
              fontSize: "0.95rem",
              color: "#7A1528",
              letterSpacing: "0.04em",
              lineHeight: 1.6,
            }}>
              Ein Ort der Eleganz<br />im Herzen Traunsteins
            </p>
          </div>
        </div>

        {/* Bottom image row */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3px", height: "42vw" }}>
          <div className="img-zoom" style={{ overflow: "hidden" }}>
            <img src="/images/bild29.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }} />
          </div>
          <div className="img-zoom" style={{ overflow: "hidden" }}>
            <img src="/images/bild38.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }} />
          </div>
        </div>

      </div>
    );
  }

  return (
    <div style={{
      width: "100%",
      height: "100vh",
      background: "#fff",
      display: "grid",
      gridTemplateColumns: "1fr 1.05fr 1.7fr 1.05fr 1fr",
      gridTemplateRows: "1.25fr 1fr 0.85fr",
      gap: "5px",
      overflow: "hidden",
    }}>
      <div className="img-zoom" style={{ gridColumn: "1", gridRow: "1 / 3", overflow: "hidden" }}>
        <img src="/images/bild31.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }} />
      </div>
      <div className="img-zoom" style={{ gridColumn: "2", gridRow: "1", overflow: "hidden" }}>
        <img src="/images/bild29.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }} />
      </div>
      <div style={{
        gridColumn: "3",
        gridRow: "1 / 4",
        background: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "3.5rem 2.5rem",
        position: "relative",
      }}>
        <div style={{ textAlign: "center" }}>
          <nav style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.55rem", marginBottom: "0.9rem" }}>
            <NavItem label="Damen"  href="/damen"  subLinks={damenLinks}  navigate={navigate} />
            <NavItem label="Herren" href="/herren" subLinks={herrenLinks} navigate={navigate} />
            {simpleLinks.map(link => (
              <NavItem key={link.label} label={link.label} href={link.href} navigate={navigate} />
            ))}
          </nav>
          <div style={{ width: "1.6rem", height: "1px", background: "#7A1528", margin: "0 auto", opacity: 0.5 }} />
        </div>
        <img src="/images/bild40.png" alt="Betthupferl" style={{ maxWidth: "88%", objectFit: "contain", display: "block" }} />
        <div style={{ textAlign: "center" }}>
          <div style={{ width: "1.6rem", height: "1px", background: "#7A1528", margin: "0 auto 0.7rem", opacity: 0.5 }} />
          <p style={{ margin: 0, fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontStyle: "italic", fontSize: "clamp(0.85rem, 1.2vw, 1.05rem)", color: "#7A1528", letterSpacing: "0.04em", lineHeight: 1.6 }}>
            Ein Ort der Eleganz<br />im Herzen Traunsteins
          </p>
        </div>
      </div>
      <div className="img-zoom" style={{ gridColumn: "4", gridRow: "1", overflow: "hidden" }}>
        <img src="/images/bild30.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }} />
      </div>
      <div className="img-zoom" style={{ gridColumn: "5", gridRow: "1 / 3", overflow: "hidden" }}>
        <img src="/images/bild33.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }} />
      </div>
      <div className="img-zoom" style={{ gridColumn: "2", gridRow: "2 / 4", overflow: "hidden" }}>
        <img src="/images/bild37.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }} />
      </div>
      <div className="img-zoom" style={{ gridColumn: "4", gridRow: "2 / 4", overflow: "hidden" }}>
        <img src="/images/bild32.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }} />
      </div>
      <div className="img-zoom" style={{ gridColumn: "1", gridRow: "3", overflow: "hidden" }}>
        <img src="/images/bild38.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }} />
      </div>
      <div className="img-zoom" style={{ gridColumn: "5", gridRow: "3", overflow: "hidden" }}>
        <img src="/images/bild39.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }} />
      </div>
    </div>
  );
}
