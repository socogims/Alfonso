import { Helmet } from "react-helmet";
import Header from "../components/Header";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Kontakt() {
  return (
    <>
      <Helmet>
        <title>Anfrage – Ember & Smoke Grill‑Auto</title>
        <meta
          name="description"
          content="Catering und Festival‑Anfragen für das Ember & Smoke Grill‑Auto. Telefonisch, per E‑Mail oder Formular."
        />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="Anfrage – Ember & Smoke Grill‑Auto" />
        <meta
          property="og:description"
          content="Catering, Festivals und Events: sichere dir dein Grill‑Auto."
        />
        <meta property="og:url" content="https://ember-smoke.de/kontakt" />
        <meta property="og:type" content="website" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "@id": "https://ember-smoke.de/kontakt#contactpage",
            url: "https://ember-smoke.de/kontakt",
            name: "Anfrage – Ember & Smoke Grill‑Auto",
            description: "Kontaktseite für Catering, Events und Festival‑Anfragen.",
            mainEntity: {
              "@type": "FoodTruck",
              name: "Ember & Smoke Grill‑Auto",
              url: "https://ember-smoke.de",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+49 231 1234567",
                contactType: "catering",
                areaServed: "DE",
                availableLanguage: ["de"],
              },
            },
          })}
        </script>
      </Helmet>

      <Header />
      <ContactSection />
      <Footer />
    </>
  );
}
