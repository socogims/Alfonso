import { Helmet } from "react-helmet";
import Header from "../components/Header";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Kontakt() {
  return (
    <>
      <Helmet>
        <title>Anfrage | Philly Cheesesteak & Smashburger</title>
        <meta
          name="description"
          content="Anfrage für Foodtruck, Catering und Events. Kontakt per Formular oder E-Mail."
        />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="Anfrage | Philly Cheesesteak & Smashburger" />
        <meta
          property="og:description"
          content="Foodtruck & Catering aus Castrop-Rauxel – sichere dir deinen Termin."
        />
        <meta property="og:url" content="http://princeofphilly.com/kontakt" />
        <meta property="og:type" content="website" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "@id": "http://princeofphilly.com/kontakt#contactpage",
            url: "http://princeofphilly.com/kontakt",
            name: "Anfrage | Philly Cheesesteak & Smashburger",
            description: "Kontaktseite für Foodtruck- und Catering-Anfragen.",
            mainEntity: {
              "@type": "FoodTruck",
              name: "Philly Cheesesteak & Smashburger",
              url: "http://princeofphilly.com",
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
