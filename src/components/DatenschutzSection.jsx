import { Box, Container, Typography } from "@mui/material";

export default function DatenschutzSection() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 10, md: 16 },
        background: "linear-gradient(180deg, #15110f 0%, #0b0a09 100%)",
        color: "#fff",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h3" sx={{ fontWeight: 900, mb: 6, textAlign: "center" }}>
          Datenschutz
        </Typography>

        <Typography sx={{ mb: 3 }}>
          Der Schutz Ihrer Daten ist uns wichtig. Wir verarbeiten personenbezogene Daten
          ausschließlich im Rahmen der DSGVO und nur für die Bearbeitung Ihrer Reservierung
          oder Anfrage.
        </Typography>

        <Typography sx={{ mb: 2, fontWeight: 600 }}>
          Erhebung und Verwendung von Daten
        </Typography>
        <Typography sx={{ mb: 2 }}>
          Wir speichern nur die Daten, die Sie uns freiwillig übermitteln – z. B. Name,
          E-Mail, Telefonnummer sowie gewünschtes Datum und Uhrzeit der Reservierung.
        </Typography>

        <Typography sx={{ mb: 2, fontWeight: 600 }}>
          Kontaktformular und E-Mail
        </Typography>
        <Typography sx={{ mb: 2 }}>
          Die über das Formular übermittelten Daten werden ausschließlich zur Beantwortung
          Ihrer Anfrage verwendet und nicht an Dritte weitergegeben.
        </Typography>

        <Typography sx={{ mb: 2, fontWeight: 600 }}>
          Ihre Rechte
        </Typography>
        <Typography>
          Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung oder
          Einschränkung der Verarbeitung Ihrer Daten. Kontakt: hallo@ember-smoke.de.
        </Typography>
      </Container>
    </Box>
  );
}
