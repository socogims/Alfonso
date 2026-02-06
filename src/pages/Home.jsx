import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import EventsSection from "../components/EventsSection";
import CateringHintSection from "../components/CateringHintSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import LocationsSection from "../components/LocationsSection";
import Footer from "../components/Footer";

export default function Home() {
  const metaTitle =
    "PHILLY CHEESESTEAK & SMASHBURGER | Foodtruck & Catering aus Castrop-Rauxel";
  const metaDescription =
    "Foodtruck in Castrop-Rauxel: Philly Cheesesteaks, Smashburger und Beilagen – frisch vom Grill. Buchbar für Events, Festivals und Feiern.";
  const metaImage = "/grill-1.jpg";
  const metaUrl = "http://princeofphilly.com";

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
            name: "PHILLY CHEESESTEAK & SMASHBURGER",
            url: metaUrl,
            image: metaImage,
            servesCuisine: ["Streetfood", "Cheesesteak", "Burger"],
            priceRange: "€€",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Kupferstraße 3",
              addressLocality: "Castrop-Rauxel",
              postalCode: "44577",
              addressCountry: "DE",
            },
            areaServed: ["Castrop-Rauxel", "Ruhrgebiet", "NRW"],
          })}
        </script>
      </Helmet>

      <Header />
      <Hero />
      <LocationsSection />
      <WhyChooseUs />
      <EventsSection />
      <CateringHintSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </>
  );
}
