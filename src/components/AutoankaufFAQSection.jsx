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
    title: "Reservierung & Besuch",
    items: [
      {
        q: "Brauche ich eine Reservierung?",
        a: "Wir empfehlen eine Reservierung – besonders am Wochenende. Spontan vorbeikommen ist möglich, je nach Auslastung.",
      },
      {
        q: "Gibt es Plätze draußen?",
        a: "Ja, wir haben eine überdachte Terrasse mit Grillblick.",
      },
      {
        q: "Wie lange kann ich den Tisch behalten?",
        a: "Standard sind 2 Stunden. Für größere Gruppen planen wir gern länger ein.",
      },
    ],
  },
  {
    title: "Speisen & Allergene",
    items: [
      {
        q: "Gibt es vegetarische Optionen?",
        a: "Ja – u. a. Grillgemüse, Veggie Bowl und saisonale Specials.",
      },
      {
        q: "Wie geht ihr mit Allergenen um?",
        a: "Wir kennzeichnen Allergene auf der Speisekarte und beraten dich gern persönlich.",
      },
      {
        q: "Kann ich Steaks in einem bestimmten Gargrad bestellen?",
        a: "Natürlich. Unsere Grillmeister beraten dich und treffen den Wunschgargrad.",
      },
    ],
  },
  {
    title: "Events & Gruppen",
    items: [
      {
        q: "Bietet ihr Catering oder private Events an?",
        a: "Ja, wir bieten Grill-Catering und Private Dining für Firmen und Feiern.",
      },
      {
        q: "Gibt es Menüs für Gruppen?",
        a: "Ja, ab 8 Personen stellen wir passende Sharing-Menüs zusammen.",
      },
    ],
  },
];

export default function FAQSection() {
  return (
    <Box
      id="faq"
      component="section"
      sx={{
        py: { xs: 10, md: 16 },
        background: "linear-gradient(180deg, #15110f 0%, #0b0a09 100%)",
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: "center", mb: 10 }}>
          <Typography variant="h2" component="h2" sx={{ fontWeight: 900, color: "#fff", mb: 2 }}>
            Häufige Fragen zum <Box component="span" sx={{ color: "primary.main" }}>Grillhaus</Box>
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.75)" }}>
            Alles Wichtige zu Reservierungen, Speisen und Events.
          </Typography>
        </Box>

        {faqGroups.map((group) => (
          <Box key={group.title} sx={{ mb: 8 }}>
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

            {group.items.map((item) => (
              <Accordion
                key={item.q}
                sx={{
                  mb: 2,
                  background: "rgba(255,255,255,0.05)",
                  color: "#fff",
                  borderRadius: 2,
                  "&:before": { display: "none" },
                }}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "primary.main" }} />}>
                  <Typography component="h4" sx={{ fontWeight: 600 }}>
                    {item.q}
                  </Typography>
                </AccordionSummary>

                <AccordionDetails>
                  <Typography sx={{ color: "rgba(255,255,255,0.75)" }}>
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
