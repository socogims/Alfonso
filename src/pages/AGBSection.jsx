import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AGBSection from "../components/AGBSection";

export default function AGBPage() {
  return (
    <>
      <Helmet>
        <title>AGB – Ember & Smoke Grill‑Auto</title>
        <meta
          name="description"
          content="Allgemeine Geschäftsbedingungen für Catering und Events mit dem Ember & Smoke Grill‑Auto."
        />
        <meta property="og:title" content="AGB – Ember & Smoke Grill‑Auto" />
        <meta
          property="og:description"
          content="AGB für Catering, Gruppen und Events."
        />
        <meta property="og:url" content="https://ember-smoke.de/agb" />
        <meta property="og:type" content="website" />
      </Helmet>

      <Header />
      <AGBSection />
      <Footer />
    </>
  );
}
