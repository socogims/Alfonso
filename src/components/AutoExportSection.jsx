import { Box, Container, Typography, Divider } from "@mui/material";

export default function AutoExportSection() {
  return (
    <Box sx={{ py: { xs: 8, sm: 10, md: 16 }, backgroundColor: "#0f1020" }}>
      <Container maxWidth="md">
        {/* Header */}
        <Typography
          variant="h2"
          sx={{
            color: "#ff6a21",
            fontWeight: 900,
            mb: { xs: 3, sm: 4, md: 5 },
            textAlign: "center",
            fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.6rem" },
            lineHeight: { xs: 1.3, sm: 1.2, md: 1.1 },
          }}
        >
          Autoexport – Geben Sie Ihrem Fahrzeug eine zweite Chance
        </Typography>

        {/* Einleitung */}
        <Typography
          sx={{
            color: "rgba(255,255,255,0.85)",
            fontSize: { xs: "0.95rem", sm: "1.05rem", md: "1.15rem" },
            lineHeight: { xs: 1.6, sm: 1.8, md: 1.9 },
            mb: { xs: 4, sm: 5, md: 6 },
            textAlign: "center",
          }}
        >
          Der Autoexport bietet Ihnen die Möglichkeit, Ihr gebrauchtes Auto umweltfreundlich weiterzuverwenden, anstatt es verschrotten zu lassen. Jedes Fahrzeug verdient eine zweite Chance – und der Export ins Ausland ermöglicht es, Ressourcen zu schonen und gleichzeitig fairen Verkaufserlös zu erzielen.
        </Typography>

        <Divider sx={{ my: { xs: 4, sm: 5, md: 6 }, borderColor: "rgba(255,255,255,0.1)" }} />

        {/* Vorteile Abschnitt */}
        <Typography variant="h3" sx={h3Responsive}>
          Vorteile des Autoexports für Umwelt und Geldbeutel
        </Typography>

        <Typography sx={pResponsive}>
          <strong>1. Umweltfreundlich:</strong> Durch Autoexport werden noch funktionsfähige Fahrzeuge weiter genutzt, anstatt verschrottet zu werden. Dies reduziert unnötige Rohstoffverschwendung und die Umweltbelastung durch Neuproduktion.
        </Typography>

        <Typography sx={pResponsive}>
          <strong>2. Zweite Chance für Ihr Auto:</strong> Fahrzeuge, die in Deutschland vielleicht nicht mehr gebraucht werden, finden im Ausland neue Besitzer. So bleiben Autos länger im Verkehr und leisten weiterhin ihren Zweck.
        </Typography>

        <Typography sx={pResponsive}>
          <strong>3. Kein Zwang zum Neukauf:</strong> Statt sofort ein neues Auto zu kaufen, können Sie Ihr altes Fahrzeug verkaufen und exportieren lassen. Das spart Geld und schont natürliche Ressourcen.
        </Typography>

        <Typography sx={pResponsive}>
          <strong>4. Faire Preise:</strong> Exportmärkte zahlen oft gute Preise für Fahrzeuge, die hierzulande weniger gefragt sind. Unser Autoexport-Service bewertet Ihr Auto professionell und sorgt für einen transparenten Verkauf.
        </Typography>

        <Typography sx={pResponsive}>
          <strong>5. Unterstützung der Kreislaufwirtschaft:</strong> Durch Wiederverwendung im Ausland wird der Lebenszyklus Ihres Fahrzeugs verlängert. Das schont die Umwelt und fördert nachhaltige Nutzung von Ressourcen.
        </Typography>

        <Divider sx={{ my: { xs: 4, sm: 5, md: 6 }, borderColor: "rgba(255,255,255,0.1)" }} />

        {/* Experten Hinweis */}
        <Typography variant="h3" sx={h3Responsive}>
          Unser Autoexport-Service in NRW
        </Typography>

        <Typography sx={pResponsive}>
          Wir unterstützen Sie professionell beim Autoexport in NRW. Von der Fahrzeugbewertung über die Exportabwicklung bis zur sicheren Abholung – unser Service macht den Verkauf Ihres Autos einfach, transparent und umweltbewusst. Vertrauen Sie auf unsere Expertise im Autoexport und geben Sie Ihrem Fahrzeug eine zweite Chance.
        </Typography>
      </Container>
    </Box>
  );
}

const h3Responsive = {
  color: "#ff6a21",
  fontWeight: 800,
  mt: { xs: 5, sm: 6, md: 7 },
  mb: { xs: 2, sm: 3, md: 3 },
  fontSize: { xs: "1.3rem", sm: "1.6rem", md: "1.8rem" },
};

const pResponsive = {
  color: "rgba(255,255,255,0.75)",
  fontSize: { xs: "0.95rem", sm: "1.05rem", md: "1.1rem" },
  lineHeight: { xs: 1.6, sm: 1.8, md: 1.9 },
  mb: 3,
};
