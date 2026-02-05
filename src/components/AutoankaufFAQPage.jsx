import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqSections = [
  {
    id: "allgemein",
    section: "Allgemeine Fragen zum Autoankauf",
    intro:
      "Diese Fragen beantworten grundlegende Themen rund um Autoankauf, Ablauf, Bewertung und Sicherheit – ideal für einen schnellen Überblick.",
    items: [
      {
        q: "Was bedeutet Autoankauf?",
        a: "Autoankauf bezeichnet den direkten Verkauf eines Fahrzeugs an einen gewerblichen Händler. Im Gegensatz zum Privatverkauf übernimmt der Händler Bewertung, Abholung, Bezahlung und rechtliche Abwicklung vollständig.",
      },
      {
        q: "Wie funktioniert der Autoankauf?",
        a: "Beim Autoankauf geben Sie zunächst Ihre Fahrzeugdaten an. Anschließend erfolgt eine marktgerechte Bewertung unter Berücksichtigung von Zustand, Ausstattung und Nachfrage. Nach Angebotsannahme wird das Fahrzeug abgeholt und sofort bezahlt.",
      },
      {
        q: "Wo kann ich mein Auto verkaufen?",
        a: "Sie können Ihr Auto privat, bei einem Händler oder über einen professionellen Autoankauf verkaufen. Der Händlerankauf ist die schnellste und sicherste Lösung ohne Gewährleistungsrisiko.",
      },
    ],
  },
  {
    id: "ablauf",
    section: "Autoankauf – Ablauf, Preis & Bezahlung",
    intro:
      "Hier erfahren Sie, wie der Verkaufsprozess abläuft, wie der Preis ermittelt wird und wann Sie Ihr Geld erhalten.",
    items: [
      {
        q: "Wie schnell kann ich mein Auto verkaufen?",
        a: "Der Verkauf kann häufig innerhalb von 24 Stunden abgeschlossen werden, da keine Inserate, Besichtigungstermine oder Preisverhandlungen notwendig sind.",
      },
      {
        q: "Was ist mein Auto aktuell wert?",
        a: "Der Wert Ihres Autos hängt von Marke, Modell, Baujahr, Kilometerstand, Zustand, Ausstattung sowie der aktuellen Markt- und Exportnachfrage ab.",
      },
      {
        q: "Wie wird der Autoankauf-Preis berechnet?",
        a: "Die Preisermittlung basiert auf realen Marktpreisen, Wiederverkaufschancen, Exportfähigkeit und möglichen Reparaturkosten – nicht auf pauschalen Online-Rechnern.",
      },
    ],
  },
  {
    id: "sonderfaelle",
    section: "Fahrzeugzustand & Sonderfälle",
    intro:
      "Auch Fahrzeuge mit Mängeln oder Besonderheiten lassen sich problemlos verkaufen.",
    items: [
      {
        q: "Kann ich ein Auto mit Motorschaden verkaufen?",
        a: "Auch Fahrzeuge mit Motor- oder Getriebeschaden können verkauft werden. Der Preis richtet sich nach Schaden, Fahrzeugtyp und Ersatzteilwert.",
      },
      {
        q: "Kaufen Sie Unfallwagen an?",
        a: "Ja. Unfallwagen – auch mit starken Schäden oder Totalschaden – werden angekauft. Nicht fahrbereite Fahrzeuge holen wir kostenlos ab.",
      },
      {
        q: "Kann ich mein Auto ohne TÜV verkaufen?",
        a: "Ja. Autos ohne TÜV sind besonders für den Autoexport geeignet, da Reparaturen im Ausland günstiger durchgeführt werden können.",
      },
    ],
  },
  {
    id: "service",
    section: "Unsere Services",
    intro:
      "Neben dem klassischen Autoankauf bieten wir folgende Services für Sie an – direkt online oder vor Ort:",
    items: [
      {
        q: "Online Fahrzeugbewertung",
        a: "Schnell, kostenlos und unverbindlich – ermitteln Sie online den Wert Ihres Autos und erhalten direkt ein faires Angebot.",
      },
      {
        q: "Unfallwagen Ankauf",
        a: "Wir kaufen Fahrzeuge mit Unfallschäden, egal wie stark der Schaden ist. Abholung kostenlos, Zahlung sofort.",
      },
      {
        q: "Motorschaden Ankauf",
        a: "Auch Autos mit Motorschaden oder Getriebeschaden werden bewertet und angekauft. Faire Preise garantiert.",
      },
      {
        q: "Autohändler / Firmenfahrzeuge",
        a: "Wir kaufen auch Firmenfahrzeuge, Flotten oder Leasingrückläufer zu marktgerechten Preisen an.",
      },
      {
        q: "Autoexport & Recycling",
        a: "Fahrzeuge, die nicht mehr weiterverkauft werden, recyceln wir fachgerecht oder exportieren sie legal ins Ausland.",
      },
    ],
  },
  {
    id: "vorteile-haendler",
    section: "Warum Sie Ihr Auto beim professionellen Händler verkaufen sollten",
    intro:
      "Viele Verkäufer überlegen, ob sie ihr Auto privat oder über einen Händler verkaufen sollen. Hier zeigen wir die Vorteile eines professionellen Autoankaufs – transparent, schnell und fair.",
    items: [
      {
        q: "Warum ist der Verkauf an einen Händler sicherer als privat?",
        a: "Beim Privatverkauf tragen Sie alle Risiken selbst: Betrug, Nichtzahlung, falsche Angaben des Käufers oder später auftretende Schadensersatzforderungen. Ein professioneller Händler arbeitet mit rechtssicheren Kaufverträgen, überprüft die Fahrzeugdaten genau und sorgt für eine sofortige Auszahlung, sodass Sie absolut keine Nachforderungen oder Unsicherheiten haben.",
      },
      {
        q: "Bekomme ich beim Händler einen besseren Preis als privat?",
        a: "Oft ja – insbesondere bei Fahrzeugen mit hohem Exportpotenzial oder speziellen Ausstattungen. Händler berücksichtigen Marktnachfrage, Exportmöglichkeiten und Wiederverkaufswert, während private Käufer häufig niedriger bieten oder lange Verhandlungen notwendig machen.",
      },
      {
        q: "Warum ist die Abwicklung schneller?",
        a: "Ein Händler übernimmt alles aus einer Hand: Fahrzeugbewertung, Abmeldung, Kaufvertrag, Bezahlung und Abholung. Im Gegensatz zum Privatverkauf sparen Sie so mehrere Tage bis Wochen an Aufwand.",
      },
      {
        q: "Welche Fahrzeuge werden besonders gerne gekauft?",
        a: "Händler kaufen nahezu alle Fahrzeuge – vom Gebrauchtwagen bis zum Unfallfahrzeug oder Autos ohne TÜV. Selbst Fahrzeuge mit Motor- oder Getriebeschaden, hohen Kilometerständen oder speziellen Modellen können einen fairen Preis erzielen.",
      },
      {
        q: "Wie hebt sich fairankauf.de von anderen Händlern ab?",
        a: "Wir bieten transparente Preise, sofortige Auszahlung, kostenlose Abholung und individuelle Beratung – alles aus einer Hand. Viele Mitbewerber machen versteckte Gebühren, bieten keine Abholung oder bewerten Fahrzeuge pauschal. Bei uns wissen Sie sofort, was Ihr Auto wert ist und bekommen es ohne Aufwand verkauft.",
      },
    ],
  },
  {
    id: "regional",
    section: "Autoankauf in Ihrer Nähe & regionaler Verkauf",
    intro:
      "Viele Verkäufer suchen gezielt nach einem Autoankauf in ihrer Nähe.",
    items: [
      {
        q: "Gibt es Autoankauf in meiner Nähe?",
        a: "Ja. Der Autoankauf erfolgt deutschlandweit. Die Abholung Ihres Fahrzeugs ist unabhängig vom Standort kostenlos möglich.",
      },
      {
        q: "Ist Autoankauf auch in größeren Städten möglich?",
        a: "Ja. Autoankauf ist unter anderem in Städten wie Köln, Düsseldorf, Dortmund, Essen und vielen weiteren Regionen verfügbar.",
      },
    ],
  },
];

export default function AutoankaufFAQPage() {
  return (
    <Box sx={{ py: { xs: 8, md: 16 }, background: "#0f1020" }}>
      <Container maxWidth="md">
        {/* Haupttitel */}
        <Typography
          variant="h1"
          sx={{
            textAlign: "center",
            fontWeight: 900,
            color: "#fff",
            mb: { xs: 6, md: 10 },
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem", lg: "3.5rem" },
          }}
        >
          Häufige Fragen zum Autoankauf
        </Typography>

        {/* FAQ-Abschnitte */}
        {faqSections.map((section, i) => (
          <Box key={i} id={section.id} sx={{ mb: { xs: 6, md: 10 } }}>
            <Typography
              variant="h2"
              sx={{
                textAlign: "center",
                fontWeight: 800,
                color: "#A91C1A",
                mb: 2,
                fontSize: { xs: "1.25rem", sm: "1.5rem", md: "2rem", lg: "2.25rem" },
              }}
            >
              {section.section}
            </Typography>

            <Typography
              sx={{
                textAlign: "center",
                color: "rgba(255,255,255,0.7)",
                mb: 4,
                fontSize: { xs: "0.875rem", sm: "0.9rem", md: "1rem" },
              }}
            >
              {section.intro}
            </Typography>

            {section.items.map((item, index) => (
              <Accordion
                key={index}
                sx={{
                  mb: 2,
                  background: "rgba(255,255,255,0.05)",
                  color: "#fff",
                  borderRadius: 2,
                  "&:before": { display: "none" },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#A91C1A" }} />}
                >
                  <Typography sx={{ fontWeight: 600, fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" } }}>
                    {item.q}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ color: "rgba(255,255,255,0.75)", fontSize: { xs: "0.875rem", sm: "0.9rem", md: "1rem" } }}>
                    {item.a}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        ))}
      </Container>
    </Box>
  );
}

