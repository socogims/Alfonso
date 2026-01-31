import { Helmet } from "react-helmet";
import Header from "../components/Header";
import AutoExportSection from "../components/AutoExportSection";
import AblaufSection from "../components/AblaufSection";
import LocationsSection from "../components/LocationsSection";
import Footer from "../components/Footer";

export default function AutoExport() {
  return (
    <>
      {/* ================= SEO META TAGS ================= */}
      <Helmet>
        <title>Autoexport NRW – Auto schnell & sicher ins Ausland verkaufen</title>
        <meta
          name="description"
          content="Autoexport NRW: Wir kaufen Fahrzeuge für den Export – Unfallwagen, Autos ohne TÜV oder Motorschaden. Schnell, fair & kostenlos."
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="Autoexport NRW – Schnell & Sicher | Fairankauf" />
        <meta
          property="og:description"
          content="Autoexport in NRW: Verkaufen Sie Ihr Fahrzeug für den Export – auch ohne TÜV oder mit Schaden. Jetzt kostenlos bewerten."
        />
        <meta property="og:url" content="https://fairankauf.de/auto-export" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />

        {/* ================= SERVICE SCHEMA ================= */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://fairankauf.de/auto-export#service",
            "name": "Autoexport NRW",
            "description":
              "Professioneller Autoexport in NRW – Ankauf von Gebrauchtwagen, Unfallwagen und Fahrzeugen ohne TÜV für den Export.",
            "provider": {
              "@type": "Organization",
              "name": "Fairankauf",
              "url": "https://fairankauf.de",
              "logo": {
                "@type": "ImageObject",
                "url": "https://fairankauf.de/logo.png"
              }
            },
            "areaServed": {
              "@type": "AdministrativeArea",
              "name": "Nordrhein-Westfalen"
            },
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceLocation": {
                "@type": "Place",
                "name": "NRW"
              }
            }
          })}
        </script>
      </Helmet>

      {/* ================= PAGE CONTENT ================= */}
      <Header />
      <AutoExportSection />
      <AblaufSection />
      <LocationsSection />
      <Footer />
    </>
  );
}
