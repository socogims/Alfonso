export default function SchemaMarkup() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    "name": "Fairankauf",
    "url": "https://fairankauf.de",
    "logo": "https://fairankauf.de/logo192.png",
    "description": "Fairankauf – Ihr zuverlässiger Autoankauf in NRW. Schnell, fair und unkompliziert.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Musterstraße 1",
      "addressLocality": "NRW",
      "postalCode": "12345",
      "addressCountry": "DE"
    },
    "telephone": "+49 123 4567890",
    "sameAs": [
      "https://www.facebook.com/fairankauf",
      "https://www.instagram.com/fairankauf",
      "https://twitter.com/fairankauf"
    ]
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schemaData)}
    </script>
  );
}
