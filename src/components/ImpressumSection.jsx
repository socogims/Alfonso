import { Box, Container, Typography } from "@mui/material";

export default function ImpressumSection() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 10, md: 16 },
        background: "linear-gradient(180deg, #0b0a09 0%, #15110f 100%)",
        color: "#fff",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h3" sx={{ fontWeight: 900, mb: 6, textAlign: "center" }}>
          Impressum
        </Typography>

        <Typography sx={{ mb: 3, fontWeight: 600 }}>
          Ember & Smoke Grill‑Auto
        </Typography>
        <Typography sx={{ mb: 1 }}>Ember & Smoke GmbH</Typography>
        <Typography sx={{ mb: 1 }}>Beispielstraße 12</Typography>
        <Typography sx={{ mb: 1 }}>44787 Bochum</Typography>
        <Typography sx={{ mb: 1 }}>Telefon: +49 231 1234567</Typography>
        <Typography sx={{ mb: 1 }}>E-Mail: hallo@ember-smoke.de</Typography>
        <Typography sx={{ mb: 3 }}>Geschäftsführung: Max Beispiel</Typography>

        <Typography sx={{ mb: 2, fontWeight: 600 }}>
          Handelsregister & Steuern
        </Typography>
        <Typography sx={{ mb: 1 }}>Amtsgericht Dortmund HRB 000000</Typography>
        <Typography sx={{ mb: 1 }}>Umsatzsteuer-ID: DE000000000</Typography>

        <Typography sx={{ mt: 4, color: "rgba(255,255,255,0.7)" }}>
          Hinweis: Bitte ersetzen Sie die Beispielangaben durch Ihre echten Unternehmensdaten.
        </Typography>
      </Container>
    </Box>
  );
}
