import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ImpressumSection from "../components/ImpressumSection";

export default function Impressum() {
  return (
    <>
      <Helmet>
        <title>Impressum – Ember & Smoke Grill‑Auto</title>
        <meta
          name="description"
          content="Impressum des Ember & Smoke Grill‑Auto mit allen Unternehmensangaben."
        />
        <meta property="og:title" content="Impressum – Ember & Smoke Grill‑Auto" />
        <meta
          property="og:description"
          content="Impressum mit Kontakt- und Unternehmensdaten."
        />
        <meta property="og:url" content="https://ember-smoke.de/impressum" />
        <meta property="og:type" content="website" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FoodTruck",
            name: "Ember & Smoke Grill‑Auto",
            url: "https://ember-smoke.de",
            telephone: "+49 231 1234567",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Beispielstraße 12",
              addressLocality: "Bochum",
              postalCode: "44787",
              addressCountry: "DE",
            },
          })}
        </script>
      </Helmet>

      <Header />
      <ImpressumSection />
      <Footer />
    </>
  );
}
