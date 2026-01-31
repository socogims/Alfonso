import { Helmet } from "react-helmet";
import Header from "../components/Header";
import AutoankaufRatgeberSection from "../components/AutoankaufRatgeberSection";
import AblaufSection from "../components/AblaufSection";
import LocationsSection from "../components/LocationsSection";
import Footer from "../components/Footer";

export default function Blog() {
  return (
    <>
      {/* ================= SEO META TAGS ================= */}
      <Helmet>
        <title>Autoankauf Ratgeber & Blog | Tipps rund ums Auto verkaufen</title>
        <meta
          name="description"
          content="Autoankauf Ratgeber von Fairankauf: Tipps zum Autoverkauf, Fahrzeugbewertung, Unfallwagen, Autos ohne TÜV & mehr. Jetzt informieren!"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="Autoankauf Ratgeber & Blog | Fairankauf" />
        <meta
          property="og:description"
          content="Hilfreiche Ratgeber & Tipps rund um den Autoankauf. So verkaufen Sie Ihr Auto schnell, sicher & zum fairen Preis."
        />
        <meta property="og:url" content="https://fairankauf.de/blog-autoankauf" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />

        {/* ================= BLOG SCHEMA ================= */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "@id": "https://fairankauf.de/blog-autoankauf#blog",
            "name": "Autoankauf Ratgeber",
            "url": "https://fairankauf.de/blog-autoankauf",
            "description":
              "Ratgeber & Blog von Fairankauf mit Tipps rund um Autoankauf, Fahrzeugbewertung und Autoverkauf in NRW.",
            "publisher": {
              "@type": "Organization",
              "name": "Fairankauf",
              "url": "https://fairankauf.de",
              "logo": {
                "@type": "ImageObject",
                "url": "https://fairankauf.de/logo.png"
              }
            },
            "inLanguage": "de-DE"
          })}
        </script>
      </Helmet>

      {/* ================= PAGE CONTENT ================= */}
      <Header />
      <AutoankaufRatgeberSection />
      <AblaufSection />
      <LocationsSection />
      <Footer />
    </>
  );
}
