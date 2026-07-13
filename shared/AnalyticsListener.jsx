import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useCookieConsent } from "./CookieBanner";
import { initAnalytics, trackPageView } from "./analytics";

// Initialisiert Google Analytics (nur bei erteilter Statistik-Einwilligung)
// und meldet bei jedem Routenwechsel einen Seitenaufruf.
export function AnalyticsListener() {
  const location = useLocation();
  const { statisticsAllowed } = useCookieConsent();

  useEffect(() => {
    if (!statisticsAllowed) return;
    initAnalytics();
    trackPageView(location.pathname + location.search);
  }, [location.pathname, location.search, statisticsAllowed]);

  return null;
}
