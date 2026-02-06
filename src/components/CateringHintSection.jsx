import { Box, Container, Typography, Button } from "@mui/material";

export default function CateringHintSection() {
  return (
    <Box
      id="catering-hinweis"
      sx={{
        py: { xs: 8, md: 10 },
        background: "radial-gradient(circle at top, rgba(122,31,27,0.12) 0%, #0b0a09 60%)",
        color: "#fff",
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>
          Catering für Veranstaltungen
        </Typography>
        <Typography sx={{ color: "rgba(255,255,255,0.75)", mb: 3 }}>
          Wir bieten auch Catering für Veranstaltungen an.
        </Typography>
        <Button variant="contained" color="primary" href="/catering">
          Mehr erfahren → Catering-Seite
        </Button>
      </Container>
    </Box>
  );
}
