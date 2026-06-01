import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const STORAGE_KEY = "bh_cookie_consent";

function getConsent() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch { return null; }
}

function saveConsent(value) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(value)); } catch {}
}

export function useCookieConsent() {
  const consent = getConsent();
  return {
    hasConsented: consent !== null,
    externalAllowed: consent?.external === true,
  };
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [reopenVisible, setReopenVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const consent = getConsent();
    if (consent === null) {
      setVisible(true);
    } else {
      setReopenVisible(true);
    }
  }, []);

  const acceptAll = () => {
    saveConsent({ necessary: true, external: true, timestamp: Date.now() });
    setVisible(false);
    setReopenVisible(true);
  };

  const acceptNecessary = () => {
    saveConsent({ necessary: true, external: false, timestamp: Date.now() });
    setVisible(false);
    setReopenVisible(true);
  };

  const reopen = () => {
    setReopenVisible(false);
    setVisible(true);
  };

  if (!visible && !reopenVisible) return null;

  return (
    <>
      {/* ── Main banner ── */}
      {visible && (
        <div style={{
          position: "fixed",
          bottom: 0, left: 0, right: 0,
          zIndex: 99999,
          background: "#f5f1eb",
          borderTop: "1px solid #d8d0c8",
          boxShadow: "0 -4px 24px rgba(0,0,0,0.08)",
          fontFamily: "'Cormorant Garamond', serif",
        }}>
          <div style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "1.6rem 2rem",
          }}>

            {/* Top row: text + buttons */}
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-start",
              gap: "1.5rem",
              justifyContent: "space-between",
            }}>

              {/* Text */}
              <div style={{ flex: "1 1 340px", minWidth: 0 }}>
                <p style={{
                  margin: "0 0 0.5rem",
                  fontSize: "0.72rem",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#9b6a4a",
                }}>
                  Datenschutz & Cookies
                </p>
                <p style={{
                  margin: "0 0 0.5rem",
                  fontSize: "1rem",
                  color: "#1a1a1a",
                  lineHeight: 1.65,
                }}>
                  Diese Website verwendet Cookies und externe Dienste (Google Fonts, Google Maps).
                  Notwendige Dienste sind immer aktiv. Alle anderen benötigen Ihre Einwilligung.
                </p>
                <button
                  onClick={() => setShowDetails(d => !d)}
                  style={{
                    background: "none", border: "none", cursor: "pointer",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "0.85rem", color: "#7A1528",
                    padding: 0, letterSpacing: "0.04em",
                    textDecoration: "underline",
                  }}
                >
                  {showDetails ? "Details ausblenden ↑" : "Details anzeigen ↓"}
                </button>
              </div>

              {/* Buttons */}
              <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.6rem",
                minWidth: "200px",
                alignSelf: "center",
              }}>
                <button
                  onClick={acceptAll}
                  style={{
                    padding: "0.75rem 1.8rem",
                    background: "#7A1528",
                    color: "#f5f1eb",
                    border: "1px solid #7A1528",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "0.9rem",
                    letterSpacing: "0.1em",
                    cursor: "pointer",
                    transition: "background 0.2s ease",
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = "#5d0f1e"}
                  onMouseLeave={e => e.currentTarget.style.background = "#7A1528"}
                >
                  Alle akzeptieren
                </button>
                <button
                  onClick={acceptNecessary}
                  style={{
                    padding: "0.75rem 1.8rem",
                    background: "transparent",
                    color: "#1a1a1a",
                    border: "1px solid #1a1a1a",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "0.9rem",
                    letterSpacing: "0.1em",
                    cursor: "pointer",
                    transition: "background 0.2s ease, color 0.2s ease",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = "#1a1a1a"; e.currentTarget.style.color = "#f5f1eb"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#1a1a1a"; }}
                >
                  Nur notwendige
                </button>
                <button
                  onClick={() => navigate("/datenschutz")}
                  style={{
                    background: "none", border: "none", cursor: "pointer",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "0.78rem", color: "#888",
                    letterSpacing: "0.06em", textAlign: "center",
                    padding: "0.2rem 0",
                    textDecoration: "underline",
                  }}
                >
                  Datenschutzerklärung
                </button>
              </div>
            </div>

            {/* Details */}
            {showDetails && (
              <div style={{
                marginTop: "1.2rem",
                borderTop: "1px solid #d8d0c8",
                paddingTop: "1.2rem",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "1rem",
              }}>
                {[
                  {
                    title: "Notwendig",
                    badge: "Immer aktiv",
                    badgeColor: "#2d7a3a",
                    desc: "Technisch erforderliche Funktionen wie Sitzungsspeicher für die Navigation. Keine personenbezogenen Daten werden gespeichert.",
                  },
                  {
                    title: "Externe Dienste",
                    badge: "Einwilligung erforderlich",
                    badgeColor: "#9b6a4a",
                    desc: "Google Fonts (Schriftarten) und Google Maps (Kartenansicht auf der Boutique-Seite). Dabei wird Ihre IP-Adresse an Google übertragen.",
                  },
                ].map(cat => (
                  <div key={cat.title} style={{
                    background: "#fff",
                    border: "1px solid #e8e0d8",
                    padding: "1rem 1.2rem",
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                      <span style={{ fontWeight: 600, fontSize: "0.95rem", color: "#1a1a1a" }}>{cat.title}</span>
                      <span style={{
                        fontSize: "0.65rem", letterSpacing: "0.08em",
                        color: cat.badgeColor, border: `1px solid ${cat.badgeColor}`,
                        padding: "2px 6px",
                      }}>
                        {cat.badge}
                      </span>
                    </div>
                    <p style={{ margin: 0, fontSize: "0.85rem", color: "#666", lineHeight: 1.6 }}>
                      {cat.desc}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── Reopen button ── */}
      {reopenVisible && (
        <button
          onClick={reopen}
          title="Cookie-Einstellungen"
          style={{
            position: "fixed",
            bottom: "1.2rem",
            left: "1.2rem",
            zIndex: 9998,
            background: "#f5f1eb",
            border: "1px solid #d8d0c8",
            borderRadius: "50%",
            width: "40px", height: "40px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
            transition: "box-shadow 0.2s ease",
            fontSize: "1.1rem",
          }}
          onMouseEnter={e => e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.15)"}
          onMouseLeave={e => e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.1)"}
        >
          🍪
        </button>
      )}
    </>
  );
}
