import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Herodortmund from "../components/Herodortmund";
import WhyChooseUsdortmund from "../components/WhyChooseUsdortmund";
import StadtteileDortmund from "../components/StadtteileDortmund";
import AblaufSectiondortmund from "../components/AblaufSectiondortmund";
import FeatureItemdortmund from "../components/FeatureItemdortmund";
import AutoankaufFAQSectionDortmund from "../components/AutoankaufFAQSectionDortmund";
import AutoBrandsSectiondortmund from "../components/AutoBrandsSectiondortmund";
import LocationsSectiondortmund from "../components/LocationsSectiondortmund";
import Footer from "../components/Footer";

// ✅ Deine FAQ direkt hier importieren
const faqGroups = [
  {
    title: "Auto verkaufen in Dortmund – Ablauf & Bezahlung",
    items: [
      {
        q: "Wie funktioniert der Autoankauf in Dortmund bei fairankauf.de?",
        a: "Der Autoankauf in Dortmund ist einfach und transparent. Sie übermitteln Ihre Fahrzeugdaten online, erhalten ein kostenloses Angebot und vereinbaren einen Termin. Wir kommen direkt zu Ihnen nach Dortmund, holen das Auto ab und zahlen den Kaufpreis sofort aus.",
      },
      {
        q: "Wie kann ich mein Auto in Dortmund schnell verkaufen?",
        a: "Wenn Sie Ihr Auto in Dortmund schnell verkaufen möchten, ist der Händlerankauf die sicherste Lösung. Kein Inserieren, keine Probefahrten – oft ist der gesamte Verkaufsprozess innerhalb von 24 Stunden abgeschlossen.",
      },
      {
        q: "Was ist mein Auto in Dortmund aktuell wert?",
        a: "Der Fahrzeugwert richtet sich nach Marke, Modell, Zustand, Kilometerstand und aktueller Marktnachfrage im Raum Dortmund. Bei fairankauf.de erhalten Sie eine realistische und kostenlose Preiseinschätzung.",
      },
      {
        q: "Wie schnell erhalte ich mein Geld beim Autoankauf in Dortmund?",
        a: "Die Auszahlung erfolgt direkt bei Fahrzeugübergabe in Dortmund – per Echtzeitüberweisung oder auf Wunsch bar.",
      },
      {
        q: "Welche Unterlagen benötige ich für den Autoverkauf in Dortmund?",
        a: "Für den Autoverkauf in Dortmund benötigen Sie in der Regel Fahrzeugschein, Fahrzeugbrief und einen gültigen Ausweis. Fehlende Unterlagen klären wir unkompliziert gemeinsam.",
      },
    ],
  },
  {
    title: "Fahrzeugzustand & Sonderfälle in Dortmund",
    items: [
      {
        q: "Kaufen Sie auch Unfallwagen in Dortmund?",
        a: "Ja. Wir kaufen Unfallwagen in Dortmund jeder Art – auch bei starken Schäden oder Totalschaden. Nicht fahrbereite Fahrzeuge holen wir kostenlos ab.",
      },
      {
        q: "Kann ich mein Auto ohne TÜV in Dortmund verkaufen?",
        a: "Ja. Autos ohne TÜV oder mit abgelaufener HU/AU kaufen wir in Dortmund problemlos an. Diese Fahrzeuge eignen sich besonders für Export oder Weiterverwertung.",
      },
      {
        q: "Kaufen Sie alte Autos mit hoher Laufleistung in Dortmund?",
        a: "Auch sehr alte Fahrzeuge oder Autos mit hoher Kilometerleistung kaufen wir in Dortmund an – oft zu besseren Konditionen als beim Privatverkauf.",
      },
      {
        q: "Kaufen Sie alle Automarken in Dortmund an?",
        a: "Ja. Wir kaufen alle Automarken und Modelle in Dortmund – vom Kleinwagen über SUVs bis hin zu Premiumfahrzeugen.",
      },
      {
        q: "Kaufen Sie Firmenwagen oder Leasingfahrzeuge in Dortmund?",
        a: "Ja. Firmenwagen, Leasingrückläufer und Flottenfahrzeuge kaufen wir direkt in Dortmund zu fairen Marktpreisen an.",
      },
    ],
  },
  {
    title: "Autoexport & Umwelt – Dortmund",
    items: [
      {
        q: "Was passiert mit meinem Auto nach dem Verkauf in Dortmund?",
        a: "Je nach Zustand wird Ihr Fahrzeug aus Dortmund weiterverkauft, exportiert, als Ersatzteilspender genutzt oder fachgerecht recycelt.",
      },
      {
        q: "Was bedeutet Autoexport in Dortmund?",
        a: "Beim Autoexport werden Fahrzeuge aus Dortmund in Länder mit hoher Nachfrage gebracht, wo sie weiter genutzt oder repariert werden.",
      },
      {
        q: "Ist Autoexport aus Dortmund legal?",
        a: "Ja. Unser Autoexport erfolgt vollständig legal, dokumentiert und gesetzeskonform. Für Verkäufer aus Dortmund entstehen keinerlei Risiken.",
      },
      {
        q: "Warum ist Autoexport auch aus Dortmund gut für die Umwelt?",
        a: "Autoexport reduziert Verschrottung, spart Ressourcen und verlängert den Lebenszyklus eines Fahrzeugs – ein nachhaltiger Beitrag auch für Dortmund.",
      },
      {
        q: "Warum erhalte ich beim Autoexport aus Dortmund oft einen besseren Preis?",
        a: "Fahrzeuge wie Dieselautos, Unfallwagen oder Autos ohne TÜV sind international stark gefragt. Dadurch können wir in Dortmund oft höhere Ankaufspreise anbieten.",
      },
    ],
  },
  {
    title: "Sicherheit & Vertrauen beim Autoankauf in Dortmund",
    items: [
      {
        q: "Ist der Händlerankauf in Dortmund sicherer als der Privatverkauf?",
        a: "Ja. Beim Händlerankauf in Dortmund vermeiden Sie Gewährleistungsrisiken, Betrug und Zeitverlust. Der Verkauf erfolgt rechtssicher mit Kaufvertrag.",
      },
      {
        q: "Warum fairankauf.de für den Autoankauf in Dortmund?",
        a: "fairankauf.de steht in Dortmund für faire Preise, schnelle Abwicklung, persönliche Beratung, kostenlosen Service vor Ort und rechtssicheren Autoankauf.",
      },
    ],
  },
];

export default function Home() {
  return (
    <>
      <Helmet>
  {/* 🔹 Title (stärkstes Ranking-Signal) */}
  <title>Auto verkaufen Dortmund – Autoankauf schnell & fair | Fairankauf</title>

  {/* 🔹 Meta Description */}
  <meta
    name="description"
    content="Auto verkaufen in Dortmund leicht gemacht ✓ Fairer Autoankauf für Gebrauchtwagen, Unfallwagen & Autos ohne TÜV. Kostenlos bewerten & sofort Geld erhalten."
  />

  {/* 🔹 Canonical */}
  <link rel="canonical" href="https://fairankauf.de/autoankauf-dortmund" />

  {/* 🔹 Open Graph */}
  <meta property="og:title" content="Auto verkaufen Dortmund – Schnell & fair | Fairankauf" />
  <meta
    property="og:description"
    content="Auto verkaufen in Dortmund ✓ Autoankauf für Gebrauchtwagen, Unfallwagen & Autos ohne TÜV. Kostenlos & fair."
  />
  <meta property="og:image" content="https://fairankauf.de/images/autoankauf-dortmund.jpg" />
  <meta property="og:url" content="https://fairankauf.de/autoankauf-dortmund" />
  <meta property="og:type" content="website" />

  {/* 🔹 Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Auto verkaufen Dortmund – Schnell & fair" />
  <meta
    name="twitter:description"
    content="Auto verkaufen in Dortmund ✓ Autoankauf für Gebrauchtwagen & Unfallwagen. Kostenlos bewerten & sofort Geld erhalten."
  />
  <meta name="twitter:image" content="https://fairankauf.de/images/autoankauf-dortmund.jpg" />

  {/* 🔹 LocalBusiness / AutoDealer Schema */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "AutoDealer",
      "@id": "https://fairankauf.de/autoankauf-dortmund#autoankauf",
      "name": "Fairankauf – Auto verkaufen Dortmund",
      "url": "https://fairankauf.de/autoankauf-dortmund",
      "logo": "https://fairankauf.de/logo.png",
      "image": "https://fairankauf.de/images/autoankauf-dortmund.jpg",
      "description": "Auto verkaufen in Dortmund – fairer Autoankauf für Gebrauchtwagen, Unfallwagen & Autos ohne TÜV.",
      "telephone": "+49 780 943984",
      "email": "contact@fairankauf.de",
      "priceRange": "€€",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dortmund",
        "addressRegion": "NRW",
        "addressCountry": "DE"
      },
      "areaServed": {
        "@type": "City",
        "name": "Dortmund"
      },
      "serviceOffered": {
        "@type": "Service",
        "name": "Auto verkaufen Dortmund",
        "areaServed": "Dortmund"
      },
      "hasMap": "https://www.google.com/maps/search/Autoankauf+Dortmund"
    })}
  </script>

  {/* 🔹 FAQ Schema (wichtig für Rich Results) */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqGroups.flatMap(group =>
        group.items.map(item => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.a
          }
        }))
      )
    })}
  </script>
</Helmet>


      {/* ================= PAGE SECTIONS ================= */}
      <Header />
      <Herodortmund />
      <WhyChooseUsdortmund />
      <StadtteileDortmund />
      <AblaufSectiondortmund />
      <FeatureItemdortmund />
      <AutoankaufFAQSectionDortmund />
      <AutoBrandsSectiondortmund />
      <LocationsSectiondortmund />
      <Footer />
    </>
  );
}
