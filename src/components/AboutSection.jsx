import { Box, Container, Typography, Grid, Chip } from "@mui/material";

const images = [
  { src: "/grill-1.jpg", alt: "Team und Foodtruck Platzhalter" },
  { src: "/grill-2.jpg", alt: "Anhänger Platzhalter" },
  { src: "/grill-3.jpg", alt: "Streetfood Platzhalter" },
];

export default function AboutSection() {
  return (
    <Box
      id="ueber-uns"
      sx={{
        py: { xs: 10, md: 16 },
        background: "linear-gradient(180deg, #0b0a09 0%, #15110f 100%)",
        color: "#fff",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Chip
              label="Über uns"
              sx={{
                mb: 2,
                color: "primary.main",
                bgcolor: "rgba(122,31,27,0.12)",
                fontWeight: 700,
              }}
            />
            <Typography variant="h3" sx={{ fontWeight: 900, mb: 2 }}>
              Idee hinter dem Truck
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.78)", mb: 2 }}>
              Nach fünf Jahren als Restaurantbetreiber wollte ich nochmal etwas Neues
              machen. Weg vom festen Laden – raus zu den Leuten. Letztes Jahr war ich in
              den USA unterwegs. Streetfood, Philly Cheesesteaks, einfache Konzepte –
              direkt, ehrlich, auf den Punkt.
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.78)", mb: 2 }}>
              Ein Foodtruck gibt mir die Freiheit, unterwegs zu sein, auf Events zu
              kochen und trotzdem einen festen Anlaufpunkt in Castrop-Rauxel zu haben.
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.78)" }}>
              Gutes Essen, kein Theater – dafür stehen wir.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              {images.map((img) => (
                <Grid item xs={12} sm={4} key={img.src}>
                  <Box
                    component="img"
                    src={img.src}
                    alt={img.alt}
                    sx={{
                      width: "100%",
                      height: { xs: 180, md: 220 },
                      objectFit: "cover",
                      borderRadius: 3,
                      border: "1px solid rgba(255,255,255,0.12)",
                      boxShadow: "0 18px 40px rgba(0,0,0,0.45)",
                    }}
                  />
                </Grid>
              ))}
            </Grid>
            <Typography sx={{ mt: 2, color: "rgba(255,255,255,0.6)", fontSize: "0.9rem" }}>
              Platzhalter: Bitte Fotos von euch beiden und dem Anhänger ersetzen.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
