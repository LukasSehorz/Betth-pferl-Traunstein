import React from "react";
import { Footer } from "../startseite/components/Footer";
import { PageNavbar } from "../shared/PageNavbar";

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

export default function Datenschutz() {
  return (
    <div style={{ minHeight: "100vh", background: "#f5f1eb", fontFamily: "'Cormorant Garamond', serif" }}>

      <PageNavbar />

      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "3rem 2rem 7rem" }}>

        <p style={{ margin: "0 0 0.8rem", fontSize: "0.65rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "#9b6a4a" }}>
          Rechtliches
        </p>
        <h1 style={{ margin: "0 0 0.8rem", fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "2.8rem", color: "#1a1a1a", letterSpacing: "0.02em" }}>
          Datenschutzerklärung
        </h1>
        <div style={{ width: "1px", height: "3rem", background: "#7A1528", margin: "0 0 3.5rem" }} />

        <Section title="1. Datenschutz auf einen Blick">
          <p style={{ margin: "0 0 0.8rem", fontWeight: 500, color: "#1a1a1a" }}>Allgemeine Hinweise</p>
          <p style={{ margin: 0 }}>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
          </p>
        </Section>

        <Section title="2. Verantwortliche Stelle">
          <p style={{ margin: 0 }}>
            Verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
            Betthupferl Traunstein<br />
            Stadtpl. 11<br />
            83278 Traunstein<br />
            Telefon: 0861 90977109<br />
            E-Mail: info@betthupferl-traunstein.de<br /><br />
            Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
          </p>
        </Section>

        <Section title="3. Datenerfassung auf dieser Website">
          <p style={{ margin: "0 0 0.8rem", fontWeight: 500, color: "#1a1a1a" }}>Server-Log-Dateien</p>
          <p style={{ margin: "0 0 1.2rem" }}>
            Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
          </p>
          <ul style={{ margin: "0 0 1.2rem", paddingLeft: "1.5rem" }}>
            <li>Browsertyp und Browserversion</li>
            <li>verwendetes Betriebssystem</li>
            <li>Referrer URL</li>
            <li>Hostname des zugreifenden Rechners</li>
            <li>Uhrzeit der Serveranfrage</li>
            <li>IP-Adresse</li>
          </ul>
          <p style={{ margin: 0 }}>
            Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files erfasst werden.
          </p>
        </Section>

        <Section title="4. Cookies und lokaler Speicher">
          <p style={{ margin: "0 0 0.8rem" }}>
            Diese Website verwendet keine Cookies zu Werbezwecken. Eine anonymisierte Reichweitenmessung mit Google Analytics erfolgt ausschließlich nach Ihrer ausdrücklichen Einwilligung (siehe Punkt 8). Es kommen folgende Speichertechnologien zum Einsatz:
          </p>
          <p style={{ margin: "0 0 0.5rem", fontWeight: 500, color: "#1a1a1a" }}>Technisch notwendig (kein Consent erforderlich)</p>
          <p style={{ margin: "0 0 1rem" }}>
            <strong>Session Storage:</strong> Dient dazu, die Intro-Animation der Startseite nur beim ersten Seitenaufruf je Sitzung anzuzeigen. Die Daten werden ausschließlich lokal im Browser gespeichert, nicht an uns übermittelt und beim Schließen des Tabs gelöscht.
          </p>
          <p style={{ margin: "0 0 0.5rem", fontWeight: 500, color: "#1a1a1a" }}>Technisch notwendig (kein Consent erforderlich)</p>
          <p style={{ margin: "0 0 1rem" }}>
            <strong>Local Storage (Cookie-Einwilligung):</strong> Ihre Entscheidung zu den Cookie-Einstellungen wird im Local Storage des Browsers gespeichert, damit Sie nicht bei jedem Besuch erneut gefragt werden. Diese Daten verlassen nicht Ihren Browser. Die Einwilligung kann jederzeit über das Cookie-Symbol (🍪) unten links auf der Seite widerrufen werden.
          </p>
          <p style={{ margin: "0 0 0.5rem", fontWeight: 500, color: "#1a1a1a" }}>Nur nach Ihrer Einwilligung</p>
          <p style={{ margin: 0 }}>
            <strong>Google Analytics (Statistik):</strong> Zur anonymisierten Auswertung des Nutzungsverhaltens setzt Google Analytics Cookies (u. a. <em>_ga</em>, <em>_ga_*</em>) mit einer Speicherdauer von bis zu 2 Jahren. Diese werden erst nach Ihrer Einwilligung gesetzt und bei Widerruf gelöscht. Details siehe Punkt 8.
          </p>
        </Section>

        <Section title="5. Kontaktanfragen / Newsletter">
          <p style={{ margin: 0 }}>
            Wenn Sie uns über das Kontaktformular oder den Newsletter-Bereich Ihre E-Mail-Adresse mitteilen, werden diese Daten ausschließlich zur Bearbeitung Ihrer Anfrage bzw. zur Zusendung des Newsletters verwendet. Eine Weitergabe dieser Daten an Dritte erfolgt nicht. Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). Die Einwilligung kann jederzeit durch eine formlose Mitteilung an uns widerrufen werden. Die bis zum Widerruf erfolgte Datenverarbeitung bleibt rechtmäßig.
          </p>
        </Section>

        <Section title="6. Ihre Rechte">
          <p style={{ margin: "0 0 0.8rem" }}>
            Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf:
          </p>
          <ul style={{ margin: "0 0 1.2rem", paddingLeft: "1.5rem" }}>
            <li style={{ marginBottom: "0.4rem" }}><strong>Auskunft</strong> über Ihre bei uns gespeicherten personenbezogenen Daten (Art. 15 DSGVO)</li>
            <li style={{ marginBottom: "0.4rem" }}><strong>Berichtigung</strong> unrichtiger oder unvollständiger Daten (Art. 16 DSGVO)</li>
            <li style={{ marginBottom: "0.4rem" }}><strong>Löschung</strong> Ihrer bei uns gespeicherten Daten (Art. 17 DSGVO)</li>
            <li style={{ marginBottom: "0.4rem" }}><strong>Einschränkung</strong> der Datenverarbeitung (Art. 18 DSGVO)</li>
            <li style={{ marginBottom: "0.4rem" }}><strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO)</li>
            <li style={{ marginBottom: "0.4rem" }}><strong>Widerspruch</strong> gegen die Verarbeitung Ihrer Daten (Art. 21 DSGVO)</li>
          </ul>
          <p style={{ margin: 0 }}>
            Zur Ausübung Ihrer Rechte wenden Sie sich bitte an: info@betthupferl-traunstein.de. Zudem steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde in Bayern ist das Bayerische Landesamt für Datenschutzaufsicht (BayLDA), Promenade 18, 91522 Ansbach.
          </p>
        </Section>

        <Section title="7. Datensicherheit">
          <p style={{ margin: 0 }}>
            Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile. Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
          </p>
        </Section>

        <Section title="8. Externe Dienste">
          <p style={{ margin: "0 0 0.8rem", fontWeight: 500, color: "#1a1a1a" }}>Google Maps</p>
          <p style={{ margin: "0 0 1.2rem" }}>
            Diese Website nutzt den Kartendienst Google Maps der Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA (im EWR: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland). Google Maps wird auf der Boutique-Seite nur geladen, wenn Sie der Nutzung externer Dienste zugestimmt haben. Ohne Ihre Einwilligung wird die Karte nicht geladen und es werden keine Daten an Google übertragen. Bei Erteilung der Einwilligung werden Daten (insbesondere Ihre IP-Adresse) an Google übertragen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). Die Einwilligung kann jederzeit über das Cookie-Symbol (🍪) unten links auf der Seite widerrufen werden. Näheres entnehmen Sie der Datenschutzerklärung von Google: <span style={{ color: "#7A1528" }}>https://policies.google.com/privacy</span>
          </p>
          <p style={{ margin: "0 0 0.8rem", fontWeight: 500, color: "#1a1a1a" }}>Google Analytics</p>
          <p style={{ margin: "0 0 1.2rem" }}>
            Diese Website nutzt Google Analytics 4, einen Webanalysedienst der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland („Google"). Google Analytics verwendet Cookies, die eine anonymisierte Analyse Ihrer Nutzung der Website ermöglichen (z. B. aufgerufene Seiten, Verweildauer, ungefährer Standort). Die IP-Anonymisierung ist aktiviert, sodass Ihre IP-Adresse gekürzt verarbeitet wird. Google Analytics wird ausschließlich geladen, wenn Sie zuvor in die statistische Auswertung eingewilligt haben. Ohne Ihre Einwilligung findet keine Analyse statt und es werden keine entsprechenden Cookies gesetzt oder Daten an Google übertragen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). Bei der Verarbeitung können Daten in die USA übertragen werden; Google ist unter dem EU-US Data Privacy Framework zertifiziert. Ihre Einwilligung können Sie jederzeit mit Wirkung für die Zukunft über das Cookie-Symbol (🍪) unten links widerrufen. Näheres entnehmen Sie der Datenschutzerklärung von Google: <span style={{ color: "#7A1528" }}>https://policies.google.com/privacy</span>
          </p>
          <p style={{ margin: "0 0 0.8rem", fontWeight: 500, color: "#1a1a1a" }}>Webfonts (Schriftarten)</p>
          <p style={{ margin: 0 }}>
            Diese Website verwendet die Schriftarten Cormorant Garamond, Playfair Display und Bodoni Moda. Diese Schriften sind vollständig lokal auf unserem Server eingebunden. Es findet keine Verbindung zu externen Servern (z. B. Google Fonts) statt. Es werden keine personenbezogenen Daten (insbesondere keine IP-Adresse) an Dritte übertragen.
          </p>
        </Section>

        <p style={{ margin: "3rem 0 0", fontSize: "0.82rem", color: "#888", fontFamily: "'Cormorant Garamond', serif" }}>
          Stand: Juli 2026
        </p>

      </div>

      <Footer />
    </div>
  );
}
