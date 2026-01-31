import { Box, Container, Typography, Grid, Chip } from "@mui/material";

const images = [
  "/grill-1.jpg",
  "/grill-2.jpg",
  "/grill-3.jpg",
];

export default function GallerySection() {
  return (
    <Box
      id="gallery"
      sx={{
        py: { xs: 10, md: 16 },
        background: "radial-gradient(circle at top, rgba(122,31,27,0.08) 0%, #0b0a09 60%)",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Chip
            label="Atmosphäre"
            sx={{
              mb: 2,
              color: "primary.main",
              bgcolor: "rgba(122,31,27,0.12)",
              fontWeight: 700,
            }}
          />
          <Typography variant="h2" component="h2" sx={{ fontWeight: 800, color: "#fff" }}>
            Grillküche zum <Box component="span" sx={{ color: "primary.main" }}>Anfassen</Box>
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.7)", mt: 2, maxWidth: 760, mx: "auto" }}>
            Offene Feuerstelle, warmes Licht und der Duft von Rauch – hier fühlt sich jeder
            Abend besonders an.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {images.map((src) => (
            <Grid item xs={12} md={4} key={src}>
              <Box
                component="img"
                src={src}
                alt="Grillhaus Atmosphäre"
                sx={{
                  width: "100%",
                  height: { xs: 220, md: 260 },
                  objectFit: "cover",
                  borderRadius: 3,
                  border: "1px solid rgba(255,255,255,0.12)",
                  boxShadow: "0 18px 40px rgba(0,0,0,0.45)",
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
