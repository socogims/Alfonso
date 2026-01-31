import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Hero from "../components/Hero";
import CateringPDFSection from "../components/CateringPDFSection";
import WhyChooseUs from "../components/WhyChooseUs";
import FeatureItem from "../components/FeatureItem";
import EventsSection from "../components/EventsSection";
import ContactSection from "../components/ContactSection";
import LocationsSection from "../components/LocationsSection";
import Footer from "../components/Footer";

export default function Home() {
  const metaTitle = "Ember & Smoke Grill‑Auto – Mobile Feuerküche in Bochum";
  const metaDescription =
    "Mobile Grillküche für Festivals, Firmenfeiern und private Events – plus fester Stand in Bochum. Feuer, Rauch und Streetfood vom Feinsten.";
  const metaImage = "https://ember-smoke.de/images/grillhaus.jpg";
  const metaUrl = "https://ember-smoke.de";

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />

        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={metaImage} />
        <meta property="og:url" content={metaUrl} />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={metaImage} />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FoodTruck",
            "@id": metaUrl + "#restaurant",
            name: "Ember & Smoke Grill‑Auto",
            url: metaUrl,
            image: metaImage,
            servesCuisine: ["Grill", "BBQ", "Streetfood"],
            priceRange: "€€",
            telephone: "+49 231 1234567",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Beispielstraße 12",
              addressLocality: "Bochum",
              postalCode: "44787",
              addressCountry: "DE",
            },
            areaServed: ["Bochum", "Ruhrgebiet", "NRW"],
            openingHours: ["Do-Sa 16:00-22:00", "So 12:00-20:00"],
          })}
        </script>
      </Helmet>

      <Header />
      <Hero />
      <CateringPDFSection />
      <WhyChooseUs />
      <FeatureItem />
      <EventsSection />
      <ContactSection />
      <LocationsSection />
      <Footer />
    </>
  );
}
