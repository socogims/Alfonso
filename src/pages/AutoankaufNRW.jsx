import { Helmet } from "react-helmet"; 
import Header from "../components/Header";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import FeatureItem from "../components/FeatureItem";
import AblaufSection from "../components/AblaufSection";
import LocationsSection from "../components/LocationsSection";
import AutoBrandsSection from "../components/AutoBrandsSection";
import AutoankaufFAQSection from "../components/AutoankaufFAQSection";
import Footer from "../components/Footer";
import AutobertungNRW from "../components/Autobertungnrw";

// ✅ FAQ für NRW
const faqGroups = [
  {
    title: "Auto verkaufen – Ablauf & Bezahlung",
    items: [
      {
        q: "Wie funktioniert der Autoankauf bei fairankauf.de?",
        a: "Der Autoankauf bei fairankauf.de ist einfach, sicher und transparent. Sie geben Ihre Fahrzeugdaten online ein, erhalten eine kostenlose Bewertung und ein faires Angebot. Nach Annahme holen wir Ihr Auto kostenlos ab und zahlen den Kaufpreis sofort aus.",
      },
      {
        q: "Wie kann ich mein Auto schnell verkaufen?",
        a: "Wenn Sie Ihr Auto schnell verkaufen möchten, ist ein professioneller Autoankauf die beste Lösung. Kein Inserieren, keine Verhandlungen und kein Risiko – oft ist der Verkauf innerhalb von 24 Stunden abgeschlossen.",
      },
      {
        q: "Was ist mein Auto aktuell wert?",
        a: "Der Wert Ihres Autos hängt von Marke, Modell, Baujahr, Kilometerstand, Zustand und Marktnachfrage ab. Bei fairankauf.de erhalten Sie eine realistische Marktpreiseinschätzung – kostenlos und unverbindlich.",
      },
      {
        q: "Wie schnell erhalte ich mein Geld?",
        a: "Die Auszahlung erfolgt sofort bei Fahrzeugübergabe – per Sofortüberweisung oder auf Wunsch bar.",
      },
      {
        q: "Welche Unterlagen benötige ich für den Autoverkauf?",
        a: "In der Regel benötigen Sie Fahrzeugschein, Fahrzeugbrief und einen gültigen Ausweis. Sollten Unterlagen fehlen, finden wir meist eine Lösung.",
      },
    ],
  },
  {
    title: "Fahrzeugzustand & Sonderfälle",
    items: [
      {
        q: "Kaufen Sie auch Unfallwagen?",
        a: "Ja, wir kaufen Unfallwagen jeder Art – auch mit schweren Schäden oder Totalschaden. Nicht fahrbereite Fahrzeuge holen wir kostenlos ab.",
      },
      {
        q: "Kann ich mein Auto ohne TÜV verkaufen?",
        a: "Ja, Autos ohne TÜV oder mit abgelaufener HU kaufen wir problemlos an. Diese Fahrzeuge eignen sich ideal für Export oder Weiterverwertung.",
      },
      {
        q: "Kaufen Sie alte Autos mit hoher Laufleistung?",
        a: "Ja. Auch Fahrzeuge mit sehr hoher Kilometerleistung oder hohem Alter können Sie bei uns verkaufen – oft zu besseren Preisen als beim Privatverkauf.",
      },
      {
        q: "Kaufen Sie alle Automarken an?",
        a: "Ja. Wir kaufen alle Automarken und Modelle – vom Kleinwagen über SUVs bis hin zu Premiumfahrzeugen.",
      },
      {
        q: "Kaufen Sie auch Firmenwagen oder Leasingfahrzeuge?",
        a: "Ja. Wir kaufen Firmenfahrzeuge, Leasingrückläufer und Flottenfahrzeuge zu fairen Marktpreisen an.",
      },
    ],
  },
  {
    title: "Autoexport & Umwelt",
    items: [
      {
        q: "Was passiert mit meinem Auto nach dem Verkauf?",
        a: "Je nach Zustand wird Ihr Auto weiterverkauft, exportiert, als Ersatzteilspender genutzt oder fachgerecht recycelt.",
      },
      {
        q: "Was bedeutet Autoexport?",
        a: "Beim Autoexport werden Fahrzeuge in Länder gebracht, in denen sie weiter genutzt oder repariert werden. Das ist wirtschaftlich sinnvoll und ressourcenschonend.",
      },
      {
        q: "Ist Autoexport legal?",
        a: "Ja. Unser Autoexport erfolgt vollständig legal, dokumentiert und gesetzeskonform. Für Sie entstehen keinerlei Risiken.",
      },
      {
        q: "Warum ist Autoexport gut für die Umwelt?",
        a: "Autoexport reduziert Verschrottung, spart Rohstoffe und verlängert den Lebenszyklus eines Fahrzeugs – ein wichtiger Beitrag zur nachhaltigen Kreislaufwirtschaft.",
      },
      {
        q: "Warum erhalte ich durch Autoexport oft einen besseren Preis?",
        a: "Viele Fahrzeuge – z. B. Diesel, Unfallwagen oder Autos ohne TÜV – sind im Ausland stärker nachgefragt. Dadurch können wir oft höhere Ankaufspreise anbieten.",
      },
    ],
  },
  {
    title: "Sicherheit & Vertrauen",
    items: [
      {
        q: "Ist der Händlerankauf sicherer als der Privatverkauf?",
        a: "Ja. Beim Händlerankauf tragen Sie kein Gewährleistungsrisiko, vermeiden Betrug und sparen Zeit. Der Verkauf erfolgt rechtssicher mit Kaufvertrag.",
      },
      {
        q: "Warum fairankauf.de?",
        a: "Wir stehen für faire Preise, schnelle Abwicklung, nachhaltigen Autoankauf, legalen Export und persönliche Beratung – deutschlandweit.",
      },
    ],
  },
];

export default function Home() {
  const city = "NRW"; // für die NRW-Seite
  const metaTitle = `Autoankauf ${city} – Schnell, Fair & Kostenlos | Fairankauf`;
  const metaDescription = `Schneller Autoankauf in ${city}. Unfallwagen, Autos ohne TÜV oder alte Fahrzeuge verkaufen. Kostenlos bewerten & sofort Geld erhalten.`;
  const metaImage = `https://fairankauf.de/images/autoankauf-${city.toLowerCase()}.jpg`;
  const metaUrl = `https://fairankauf.de/autoankauf-nrw`;

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />

        {/* Open Graph */}
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={metaImage} />
        <meta property="og:url" content={metaUrl} />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={metaImage} />

        {/* AutoDealer Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoDealer",
            "@id": metaUrl + "#autoankauf",
            "name": "Fairankauf – Autoankauf NRW",
            "url": metaUrl,
            "logo": "https://fairankauf.de/logo.png",
            "image": metaImage,
            "description":
              "Autoankauf in ganz Nordrhein-Westfalen. Wir kaufen Gebrauchtwagen, Unfallwagen und Fahrzeuge ohne TÜV schnell, fair und unkompliziert.",
            "telephone": "+49 780 943984",
            "email": "contact@fairankauf.de",
            "priceRange": "€€",
            "areaServed": [
              { "@type": "AdministrativeArea", "name": "Nordrhein-Westfalen" },
              { "@type": "City", "name": "Dortmund" },
              { "@type": "City", "name": "Köln" },
              { "@type": "City", "name": "Düsseldorf" },
              { "@type": "City", "name": "Essen" },
              { "@type": "City", "name": "Bochum" },
              { "@type": "City", "name": "Bonn" }
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Autoankauf Leistungen",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Kostenlose Fahrzeugbewertung" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Auto Abholung vor Ort" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sofortzahlung beim Autoankauf" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Autoankauf ohne TÜV" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Unfallwagen Ankauf" } }
              ]
            }
          })}
        </script>

        {/* FAQPage Schema */}
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

      {/* ================= PAGE CONTENT ================= */}
      <Header />
      <Hero />
      <WhyChooseUs />

      <FeatureItem />
      <AblaufSection />
      <LocationsSection />
      <AutoBrandsSection />
      <AutoankaufFAQSection />
      <Footer />
    </>
  );
}
