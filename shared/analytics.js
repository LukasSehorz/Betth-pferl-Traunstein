// Google Analytics 4 – wird ausschließlich nach ausdrücklicher Einwilligung
// (Statistik-Cookies) über den Cookie-Banner geladen. Ohne Consent wird
// gtag.js nicht eingebunden und es werden keine Daten an Google übertragen.

export const GA_MEASUREMENT_ID = "G-MP0LEHCQV5";

let initialized = false;

// Lädt gtag.js und initialisiert GA4. Idempotent – ein erneuter Aufruf lädt
// das Skript nicht doppelt, hebt aber ein evtl. gesetztes Opt-out wieder auf.
export function initAnalytics() {
  if (typeof window === "undefined") return;

  // Google-Opt-out-Flag wieder deaktivieren (falls zuvor abgelehnt wurde)
  window[`ga-disable-${GA_MEASUREMENT_ID}`] = false;

  if (initialized) return;
  initialized = true;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;

  gtag("js", new Date());
  // Seitenaufrufe steuern wir manuell (SPA), daher send_page_view: false.
  // anonymize_ip zur Datensparsamkeit.
  gtag("config", GA_MEASUREMENT_ID, {
    anonymize_ip: true,
    send_page_view: false,
  });
}

// Manueller Seitenaufruf – für die Single-Page-App bei jedem Routenwechsel.
export function trackPageView(path) {
  if (!initialized || typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", "page_view", {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
}

// Widerruf: Google-Opt-out-Flag setzen (keine weiteren Hits) und GA-Cookies löschen.
export function disableAnalytics() {
  if (typeof window === "undefined") return;
  window[`ga-disable-${GA_MEASUREMENT_ID}`] = true;
  try {
    const host = window.location.hostname;
    document.cookie.split(";").forEach((c) => {
      const name = c.split("=")[0].trim();
      if (name.startsWith("_ga") || name === "_gid" || name === "_gat") {
        const expire = "; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        document.cookie = name + "=" + expire;
        document.cookie = name + "=; path=/; domain=" + host + expire;
        document.cookie = name + "=; path=/; domain=." + host + expire;
      }
    });
  } catch {}
}
