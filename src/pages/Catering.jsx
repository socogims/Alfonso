import { Helmet } from "react-helmet";
import { Box, Container, Typography, Button } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Catering() {
  const metaTitle = "Catering für Events & Feiern | Philly Cheesesteak & Smashburger";
  const metaDescription =
    "Catering für Firmenfeiern, private Feiern, Abifeiern und größere Veranstaltungen. Menüs flexibel auf dein Event abgestimmt – Angebote auf Anfrage.";
  const metaUrl = "http://princeofphilly.com/catering";

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={metaUrl} />
        <meta property="og:type" content="website" />
      </Helmet>

      <Header />
      <Box
        component="main"
        sx={{
          py: { xs: 12, md: 16 },
          minHeight: "70vh",
          background: "radial-gradient(circle at top, rgba(122,31,27,0.12) 0%, #0b0a09 60%)",
          color: "#fff",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography variant="h2" sx={{ fontWeight: 900, mb: 2 }}>
            Catering für Events & Feiern
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.75)", mb: 3 }}>
            Für Veranstaltungen bieten wir individuelles Catering an. Ob Firmenfeiern,
            private Feiern, Abifeiern oder größere Veranstaltungen – wir bringen unser
            Essen direkt zu euch. Menüs werden flexibel auf dein Event abgestimmt.
            Angebote auf Anfrage.
          </Typography>
          <Button variant="contained" color="primary" href="/kontakt">
            Catering anfragen
          </Button>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
