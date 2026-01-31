import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqGroups = [
  {
    title: "Auto verkaufen in Dortmund – Ablauf & Bezahlung",
    items: [
      {
        q: "Wie funktioniert der Autoankauf in Dortmund bei fairankauf.de?",
        a: "Der Autoankauf in Dortmund ist einfach, transparent und schnell. Sie übermitteln Ihre Fahrzeugdaten online, erhalten ein kostenloses Angebot und vereinbaren einen Termin. Wir kommen direkt zu Ihnen nach Dortmund – egal ob Innenstadt, Hörde, Aplerbeck oder Hombruch – holen Ihr Auto ab und zahlen den Kaufpreis sofort und zuverlässig aus. So können Sie Ihr Auto stressfrei in Dortmund verkaufen.",
      },
      {
        q: "Wie kann ich mein Auto in Dortmund schnell verkaufen?",
        a: "Wenn Sie Ihr Auto in Dortmund schnell verkaufen möchten, ist der Händlerankauf bei fairankauf.de die beste Lösung. Kein Inserieren, keine Probefahrten – oft ist der gesamte Verkaufsprozess innerhalb von 24 Stunden abgeschlossen. Besonders praktisch für Verkäufer aus Hörde, Innenstadt oder Hombruch.",
      },
      {
        q: "Was ist mein Auto in Dortmund aktuell wert?",
        a: "Der Wert Ihres Fahrzeugs in Dortmund hängt von Marke, Modell, Zustand, Kilometerstand und aktueller Marktnachfrage ab. Bei fairankauf.de erhalten Sie eine realistische und kostenlose Preiseinschätzung für Ihr Auto, Unfallwagen, Gebrauchtwagen oder Auto ohne TÜV – individuell für Dortmund und alle Stadtteile.",
      },
      {
        q: "Wie schnell erhalte ich mein Geld beim Autoankauf in Dortmund?",
        a: "Die Auszahlung erfolgt direkt bei der Fahrzeugübergabe in Dortmund – wahlweise per Echtzeitüberweisung oder bar. So können Sie Ihr Auto noch am selben Tag verkaufen und sofort über den Kaufpreis verfügen.",
      },
      {
        q: "Welche Unterlagen benötige ich für den Autoverkauf in Dortmund?",
        a: "Für den Autoverkauf in Dortmund benötigen Sie in der Regel Fahrzeugschein, Fahrzeugbrief und einen gültigen Ausweis. Sollten Unterlagen fehlen, klären wir dies unkompliziert vor Ort. So können Sie Ihr Auto in Dortmund schnell und sicher verkaufen.",
      },
    ],
  },
  {
    title: "Fahrzeugzustand & Sonderfälle in Dortmund",
    items: [
      {
        q: "Kaufen Sie auch Unfallwagen in Dortmund?",
        a: "Ja, wir kaufen Unfallwagen jeder Art in Dortmund, egal ob leichte Schäden oder Totalschaden. Auch nicht fahrbereite Autos holen wir kostenlos in allen Stadtteilen Dortmunds ab und zahlen sofort aus.",
      },
      {
        q: "Kann ich mein Auto ohne TÜV in Dortmund verkaufen?",
        a: "Ja. Autos ohne TÜV, mit abgelaufener HU/AU oder defekten Fahrzeugen kaufen wir in Dortmund unkompliziert an. Besonders für Export oder Weiterverwertung sind diese Fahrzeuge interessant. Unser Team bewertet Ihr Auto fair vor Ort in Dortmund.",
      },
      {
        q: "Kaufen Sie alte Autos mit hoher Laufleistung in Dortmund?",
        a: "Auch sehr alte Fahrzeuge oder Autos mit hoher Kilometerleistung kaufen wir in Dortmund an. Oft zu besseren Konditionen als beim Privatverkauf. Unser Autoankauf gilt für alle Stadtteile, von Innenstadt über Hörde bis Hombruch.",
      },
      {
        q: "Kaufen Sie alle Automarken in Dortmund an?",
        a: "Ja. Wir kaufen alle Marken und Modelle in Dortmund – vom Kleinwagen, SUV, Kombi bis hin zu Premiumfahrzeugen. So können Sie Ihr Auto jeder Art in Dortmund verkaufen.",
      },
      {
        q: "Kaufen Sie Firmenwagen oder Leasingfahrzeuge in Dortmund?",
        a: "Ja. Firmenfahrzeuge, Leasingrückläufer oder Flottenfahrzeuge kaufen wir direkt in Dortmund zu fairen Marktpreisen an. Unser Service ist schnell, zuverlässig und inklusive kostenloser Abholung in allen Dortmunder Stadtteilen.",
      },
    ],
  },
  {
    title: "Autoexport & Umwelt – Dortmund",
    items: [
      {
        q: "Was passiert mit meinem Auto nach dem Verkauf in Dortmund?",
        a: "Je nach Zustand wird Ihr Fahrzeug aus Dortmund weiterverkauft, exportiert, als Ersatzteilspender genutzt oder fachgerecht recycelt. So leisten Sie einen Beitrag zur Nachhaltigkeit und erhalten gleichzeitig einen fairen Preis.",
      },
      {
        q: "Was bedeutet Autoexport in Dortmund?",
        a: "Beim Autoexport werden Fahrzeuge aus Dortmund in Länder mit hoher Nachfrage gebracht, wo sie weiter genutzt oder repariert werden. Auch Autos ohne TÜV, Unfallwagen oder ältere Gebrauchtwagen werden so bestmöglich verwertet.",
      },
      {
        q: "Ist Autoexport aus Dortmund legal?",
        a: "Ja. Unser Autoexport erfolgt vollständig legal, dokumentiert und gesetzeskonform. Für Verkäufer aus Dortmund entstehen keinerlei Risiken – inklusive Kaufvertrag und offizieller Abmeldung.",
      },
      {
        q: "Warum ist Autoexport auch aus Dortmund gut für die Umwelt?",
        a: "Autoexport reduziert Verschrottung, spart Ressourcen und verlängert den Lebenszyklus eines Fahrzeugs. So tragen Sie aktiv zur Nachhaltigkeit bei und verkaufen Ihr Auto in Dortmund umweltbewusst.",
      },
      {
        q: "Warum erhalte ich beim Autoexport aus Dortmund oft einen besseren Preis?",
        a: "Fahrzeuge wie Dieselautos, Unfallwagen oder Autos ohne TÜV sind international stark gefragt. Dadurch können wir in Dortmund oft höhere Ankaufspreise anbieten, besonders für Export oder Weiterverwertung.",
      },
    ],
  },
  {
    title: "Sicherheit & Vertrauen beim Autoankauf in Dortmund",
    items: [
      {
        q: "Ist der Händlerankauf in Dortmund sicherer als der Privatverkauf?",
        a: "Ja. Beim Händlerankauf in Dortmund vermeiden Sie Betrug, Gewährleistungsrisiken und Zeitverlust. Der Verkauf erfolgt rechtssicher mit Kaufvertrag und direkter Auszahlung – egal in welchem Stadtteil Dortmunds.",
      },
      {
        q: "Warum fairankauf.de für den Autoankauf in Dortmund?",
        a: "fairankauf.de steht in Dortmund für faire Preise, schnelle Abwicklung, persönliche Beratung, kostenlosen Service vor Ort und rechtssicheren Autoankauf in allen Stadtteilen – von Innenstadt über Hörde bis Hombruch.",
      },
    ],
  },
];

export default function AutoankaufFAQSection() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 10, md: 16 },
        background: "linear-gradient(180deg, #14162e 0%, #0f1020 100%)",
      }}
    >
      <Container maxWidth="md">
        {/* SECTION HEADER */}
        <Box sx={{ textAlign: "center", mb: 10 }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{ fontWeight: 900, color: "#fff", mb: 2 }}
          >
            Häufige Fragen zum{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              Autoankauf in Dortmund
            </Box>
          </Typography>

          <Typography sx={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.7 }}>
            Antworten rund um Auto verkaufen in Dortmund, Auszahlung, Fahrzeugbewertung, Autoexport, Unfallwagen, Gebrauchtwagen und Sicherheit in allen Stadtteilen.
          </Typography>
        </Box>

        {/* FAQ GROUPS */}
        {faqGroups.map((group, gi) => (
          <Box key={gi} sx={{ mb: 8 }}>
            <Typography
              variant="h4"
              component="h3"
              sx={{
                textAlign: "center",
                color: "primary.main",
                fontWeight: 800,
                mb: 4,
              }}
            >
              {group.title}
            </Typography>

            {group.items.map((item, index) => (
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
                  expandIcon={
                    <ExpandMoreIcon sx={{ color: "primary.main" }} />
                  }
                >
                  <Typography component="h4" sx={{ fontWeight: 600 }}>
                    {item.q}
                  </Typography>
                </AccordionSummary>

                <AccordionDetails>
                  <Typography sx={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.7 }}>
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
