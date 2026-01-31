import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DatenschutzSection from "../components/DatenschutzSection";

export default function Datenschutz() {
  return (
    <>
      <Helmet>
        <title>Datenschutz – Ember & Smoke Grill‑Auto</title>
        <meta
          name="description"
          content="Datenschutzerklärung des Ember & Smoke Grill‑Auto."
        />
        <meta property="og:title" content="Datenschutz – Ember & Smoke Grill‑Auto" />
        <meta property="og:description" content="Datenschutzerklärung für Catering‑ und Eventanfragen." />
        <meta property="og:url" content="https://ember-smoke.de/datenschutz" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Header />
      <DatenschutzSection />
      <Footer />
    </>
  );
}
