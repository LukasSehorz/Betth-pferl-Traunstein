import React from "react";
import { Footer } from "../startseite/components/Footer";

const Section = ({ title, children }) => (
  <div style={{ marginBottom: "2.5rem" }}>
    <h2 style={{ margin: "0 0 1rem", fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "1.3rem", color: "#1a1a1a", letterSpacing: "0.02em" }}>
      {title}
    </h2>
    <div style={{ fontSize: "0.95rem", color: "#444", lineHeight: 1.85, fontFamily: "'Cormorant Garamond', serif" }}>
      {children}
    </div>
  </div>
);

export default function Impressum() {
  return (
    <div style={{ minHeight: "100vh", background: "#f5f1eb", fontFamily: "'Cormorant Garamond', serif" }}>

      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "9rem 2rem 7rem" }}>

        <p style={{ margin: "0 0 0.8rem", fontSize: "0.65rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "#9b6a4a" }}>
          Rechtliches
        </p>
        <h1 style={{ margin: "0 0 0.8rem", fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "2.8rem", color: "#1a1a1a", letterSpacing: "0.02em" }}>
          Impressum
        </h1>
        <div style={{ width: "1px", height: "3rem", background: "#7A1528", margin: "0 0 3.5rem" }} />

        <Section title="Angaben gemäß § 5 TMG">
          <p style={{ margin: 0 }}>
            Betthupferl Traunstein<br />
            Stadtpl. 11<br />
            83278 Traunstein<br />
            Deutschland
          </p>
        </Section>

        <Section title="Kontakt">
          <p style={{ margin: 0 }}>
            Telefon: 0861 90977109<br />
            E-Mail: info@betthupferl-traunstein.de
          </p>
        </Section>

        <Section title="Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV">
          <p style={{ margin: 0 }}>
            Betthupferl Traunstein<br />
            Stadtpl. 11<br />
            83278 Traunstein
          </p>
        </Section>

        <Section title="Haftung für Inhalte">
          <p style={{ margin: "0 0 0.8rem" }}>
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
          <p style={{ margin: 0 }}>
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </p>
        </Section>

        <Section title="Haftung für Links">
          <p style={{ margin: "0 0 0.8rem" }}>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          </p>
          <p style={{ margin: 0 }}>
            Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
          </p>
        </Section>

        <Section title="Urheberrecht">
          <p style={{ margin: "0 0 0.8rem" }}>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
          <p style={{ margin: 0 }}>
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
          </p>
        </Section>

        <Section title="Online-Streitbeilegung">
          <p style={{ margin: 0 }}>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <span style={{ color: "#7A1528" }}>https://ec.europa.eu/consumers/odr</span>. Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </Section>

      </div>

      <Footer />
    </div>
  );
}
