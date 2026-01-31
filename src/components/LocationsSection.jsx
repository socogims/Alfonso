import { Box, Container, Typography, Grid, Stack, Chip } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import TrainIcon from "@mui/icons-material/Train";

export default function LocationSection() {
  return (
    <Box
      id="standort"
      component="section"
      sx={{
        py: { xs: 10, md: 16 },
        background: "linear-gradient(180deg, #0b0a09 0%, #15110f 100%)",
        color: "#fff",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Chip
            label="Anfahrt & Öffnungszeiten"
            sx={{
              mb: 2,
              color: "primary.main",
              bgcolor: "rgba(122,31,27,0.12)",
              fontWeight: 700,
            }}
          />
          <Typography variant="h2" component="h2" sx={{ fontWeight: 800 }}>
            Fester Stand in <Box component="span" sx={{ color: "primary.main" }}>Bochum</Box>
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.7)", mt: 2, maxWidth: 720, mx: "auto" }}>
            Unser Basis‑Stand ist in Bochum. Von hier aus starten wir auch zu Festivals
            und Events in der Region.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                p: 4,
                height: "100%",
                borderRadius: 3,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <Typography sx={{ fontWeight: 700, mb: 2 }}>
                Ember & Smoke Grill‑Auto – Bochum
              </Typography>
              <Stack spacing={2}>
                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                  <LocationOnIcon sx={{ color: "primary.main" }} />
                  <Typography>
                    Beispielstraße 12, 44787 Bochum
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                  <AccessTimeIcon sx={{ color: "primary.main" }} />
                  <Box>
                    <Typography>Mo–Do: 16:00–22:00</Typography>
                    <Typography>Fr–Sa: 16:00–23:30</Typography>
                    <Typography>So: 12:00–21:30</Typography>
                  </Box>
                </Box>
              </Stack>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                p: 4,
                height: "100%",
                borderRadius: 3,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <Typography sx={{ fontWeight: 700, mb: 2 }}>
                Anfahrt & Tipps
              </Typography>
              <Stack spacing={2}>
                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                  <LocalParkingIcon sx={{ color: "primary.main" }} />
                  <Typography>
                    Parkplätze im Innenhof und Parkhaus 150m entfernt.
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                  <TrainIcon sx={{ color: "primary.main" }} />
                  <Typography>
                    Haltestelle „Stadtmitte“ in 3 Minuten zu Fuß erreichbar.
                  </Typography>
                </Box>
                <Typography sx={{ color: "rgba(255,255,255,0.7)" }}>
                  Gruppen ab 8 Personen? Ruf uns kurz an – wir reservieren die passende
                  Tafel.
                </Typography>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
