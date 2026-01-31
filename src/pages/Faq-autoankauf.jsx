import { Helmet } from "react-helmet";
import Header from "../components/Header";
import AutoankaufFAQPage from "../components/AutoankaufFAQPage";
import AblaufSection from "../components/AblaufSection";
import LocationsSection from "../components/LocationsSection";
import Footer from "../components/Footer";

// Die FAQ-Daten importieren oder direkt hier einfügen
const faqSections = [
  {
    id: "allgemein",
    section: "Allgemeine Fragen zum Autoankauf",
    intro:
      "Diese Fragen beantworten grundlegende Themen rund um Autoankauf, Ablauf, Bewertung und Sicherheit – ideal für einen schnellen Überblick.",
    items: [
      {
        q: "Was bedeutet Autoankauf?",
        a: "Autoankauf bezeichnet den direkten Verkauf eines Fahrzeugs an einen gewerblichen Händler. Im Gegensatz zum Privatverkauf übernimmt der Händler Bewertung, Abholung, Bezahlung und rechtliche Abwicklung vollständig.",
      },
      {
        q: "Wie funktioniert der Autoankauf?",
        a: "Beim Autoankauf geben Sie zunächst Ihre Fahrzeugdaten an. Anschließend erfolgt eine marktgerechte Bewertung unter Berücksichtigung von Zustand, Ausstattung und Nachfrage. Nach Angebotsannahme wird das Fahrzeug abgeholt und sofort bezahlt.",
      },
      {
        q: "Wo kann ich mein Auto verkaufen?",
        a: "Sie können Ihr Auto privat, bei einem Händler oder über einen professionellen Autoankauf verkaufen. Der Händlerankauf ist die schnellste und sicherste Lösung ohne Gewährleistungsrisiko.",
      },
    ],
  },
  {
    id: "ablauf",
    section: "Autoankauf – Ablauf, Preis & Bezahlung",
    intro:
      "Hier erfahren Sie, wie der Verkaufsprozess abläuft, wie der Preis ermittelt wird und wann Sie Ihr Geld erhalten.",
    items: [
      {
        q: "Wie schnell kann ich mein Auto verkaufen?",
        a: "Der Verkauf kann häufig innerhalb von 24 Stunden abgeschlossen werden, da keine Inserate, Besichtigungstermine oder Preisverhandlungen notwendig sind.",
      },
      {
        q: "Was ist mein Auto aktuell wert?",
        a: "Der Wert Ihres Autos hängt von Marke, Modell, Baujahr, Kilometerstand, Zustand, Ausstattung sowie der aktuellen Markt- und Exportnachfrage ab.",
      },
      {
        q: "Wie wird der Autoankauf-Preis berechnet?",
        a: "Die Preisermittlung basiert auf realen Marktpreisen, Wiederverkaufschancen, Exportfähigkeit und möglichen Reparaturkosten – nicht auf pauschalen Online-Rechnern.",
      },
    ],
  },
  {
    id: "sonderfaelle",
    section: "Fahrzeugzustand & Sonderfälle",
    intro:
      "Auch Fahrzeuge mit Mängeln oder Besonderheiten lassen sich problemlos verkaufen.",
    items: [
      {
        q: "Kann ich ein Auto mit Motorschaden verkaufen?",
        a: "Auch Fahrzeuge mit Motor- oder Getriebeschaden können verkauft werden. Der Preis richtet sich nach Schaden, Fahrzeugtyp und Ersatzteilwert.",
      },
      {
        q: "Kaufen Sie Unfallwagen an?",
        a: "Ja. Unfallwagen – auch mit starken Schäden oder Totalschaden – werden angekauft. Nicht fahrbereite Fahrzeuge holen wir kostenlos ab.",
      },
      {
        q: "Kann ich mein Auto ohne TÜV verkaufen?",
        a: "Ja. Autos ohne TÜV sind besonders für den Autoexport geeignet, da Reparaturen im Ausland günstiger durchgeführt werden können.",
      },
    ],
  },
  {
    id: "service",
    section: "Unsere Services",
    intro:
      "Neben dem klassischen Autoankauf bieten wir folgende Services für Sie an – direkt online oder vor Ort:",
    items: [
      {
        q: "Online Fahrzeugbewertung",
        a: "Schnell, kostenlos und unverbindlich – ermitteln Sie online den Wert Ihres Autos und erhalten direkt ein faires Angebot.",
      },
      {
        q: "Unfallwagen Ankauf",
        a: "Wir kaufen Fahrzeuge mit Unfallschäden, egal wie stark der Schaden ist. Abholung kostenlos, Zahlung sofort.",
      },
      {
        q: "Motorschaden Ankauf",
        a: "Auch Autos mit Motorschaden oder Getriebeschaden werden bewertet und angekauft. Faire Preise garantiert.",
      },
      {
        q: "Autohändler / Firmenfahrzeuge",
        a: "Wir kaufen auch Firmenfahrzeuge, Flotten oder Leasingrückläufer zu marktgerechten Preisen an.",
      },
      {
        q: "Autoexport & Recycling",
        a: "Fahrzeuge, die nicht mehr weiterverkauft werden, recyceln wir fachgerecht oder exportieren sie legal ins Ausland.",
      },
    ],
  },
  {
    id: "vorteile-haendler",
    section: "Warum Sie Ihr Auto beim professionellen Händler verkaufen sollten",
    intro:
      "Viele Verkäufer überlegen, ob sie ihr Auto privat oder über einen Händler verkaufen sollen. Hier zeigen wir die Vorteile eines professionellen Autoankaufs – transparent, schnell und fair.",
    items: [
      {
        q: "Warum ist der Verkauf an einen Händler sicherer als privat?",
        a: "Beim Privatverkauf tragen Sie alle Risiken selbst: Betrug, Nichtzahlung, falsche Angaben des Käufers oder später auftretende Schadensersatzforderungen. Ein professioneller Händler arbeitet mit rechtssicheren Kaufverträgen, überprüft die Fahrzeugdaten genau und sorgt für eine sofortige Auszahlung, sodass Sie absolut keine Nachforderungen oder Unsicherheiten haben.",
      },
      {
        q: "Bekomme ich beim Händler einen besseren Preis als privat?",
        a: "Oft ja – insbesondere bei Fahrzeugen mit hohem Exportpotenzial oder speziellen Ausstattungen. Händler berücksichtigen Marktnachfrage, Exportmöglichkeiten und Wiederverkaufswert, während private Käufer häufig niedriger bieten oder lange Verhandlungen notwendig machen.",
      },
      {
        q: "Warum ist die Abwicklung schneller?",
        a: "Ein Händler übernimmt alles aus einer Hand: Fahrzeugbewertung, Abmeldung, Kaufvertrag, Bezahlung und Abholung. Im Gegensatz zum Privatverkauf sparen Sie so mehrere Tage bis Wochen an Aufwand.",
      },
      {
        q: "Welche Fahrzeuge werden besonders gerne gekauft?",
        a: "Händler kaufen nahezu alle Fahrzeuge – vom Gebrauchtwagen bis zum Unfallfahrzeug oder Autos ohne TÜV. Selbst Fahrzeuge mit Motor- oder Getriebeschaden, hohen Kilometerständen oder speziellen Modellen können einen fairen Preis erzielen.",
      },
      {
        q: "Wie hebt sich fairankauf.de von anderen Händlern ab?",
        a: "Wir bieten transparente Preise, sofortige Auszahlung, kostenlose Abholung und individuelle Beratung – alles aus einer Hand. Viele Mitbewerber machen versteckte Gebühren, bieten keine Abholung oder bewerten Fahrzeuge pauschal. Bei uns wissen Sie sofort, was Ihr Auto wert ist und bekommen es ohne Aufwand verkauft.",
      },
    ],
  },
  {
    id: "regional",
    section: "Autoankauf in Ihrer Nähe & regionaler Verkauf",
    intro:
      "Viele Verkäufer suchen gezielt nach einem Autoankauf in ihrer Nähe.",
    items: [
      {
        q: "Gibt es Autoankauf in meiner Nähe?",
        a: "Ja. Der Autoankauf erfolgt deutschlandweit. Die Abholung Ihres Fahrzeugs ist unabhängig vom Standort kostenlos möglich.",
      },
      {
        q: "Ist Autoankauf auch in größeren Städten möglich?",
        a: "Ja. Autoankauf ist unter anderem in Städten wie Köln, Düsseldorf, Dortmund, Essen und vielen weiteren Regionen verfügbar.",
      },
    ],
  },
];

export default function FAQ() {
  // Alle Fragen für Schema zusammenfassen
  const faqItems = faqSections.flatMap(section => section.items);

  return (
    <>
      {/* ================= SEO META TAGS ================= */}
      <Helmet>
        <title>FAQ Autoankauf – Häufige Fragen & Antworten | Fairankauf</title>
        <meta
          name="description"
          content="Antworten auf die häufigsten Fragen zum Autoankauf: Ablauf, Bezahlung, Unfallwagen, Autoexport & mehr."
        />

        {/* Open Graph */}
        <meta property="og:title" content="FAQ Autoankauf | Fairankauf" />
        <meta
          property="og:description"
          content="Alle wichtigen Fragen rund um den Autoankauf verständlich erklärt."
        />
        <meta property="og:url" content="https://fairankauf.de/faq-autoankauf" />
        <meta property="og:type" content="website" />

        {/* ================= FAQ SCHEMA ================= */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map(item => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.a,
              },
            })),
          })}
        </script>
      </Helmet>

      {/* ================= CONTENT ================= */}
      <Header />
      <AutoankaufFAQPage />
      <AblaufSection />
      <LocationsSection />
      <Footer />
    </>
  );
}
