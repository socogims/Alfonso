import { Box, Container, Typography, Grid, Stack, Chip } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InfoIcon from "@mui/icons-material/Info";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

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
            label="Standort & Öffnungszeiten"
            sx={{
              mb: 2,
              color: "primary.main",
              bgcolor: "rgba(122,31,27,0.12)",
              fontWeight: 700,
            }}
          />
          <Typography variant="h2" component="h2" sx={{ fontWeight: 800 }}>
            Kupferstraße 3 <Box component="span" sx={{ color: "primary.main" }}>Castrop-Rauxel</Box>
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.7)", mt: 2, maxWidth: 760, mx: "auto" }}>
            Der Wagen steht hier, wenn wir nicht auf Veranstaltungen unterwegs sind.
            Feste Tage und Zeiten geben wir regelmäßig online bekannt.
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
                Standort
              </Typography>
              <Stack spacing={2}>
                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                  <LocationOnIcon sx={{ color: "primary.main" }} />
                  <Typography>Kupferstraße 3, 44577 Castrop-Rauxel</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                  <InfoIcon sx={{ color: "primary.main" }} />
                  <Typography>
                    Der Wagen steht hier, wenn wir nicht auf Veranstaltungen sind.
                  </Typography>
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
                Angebot vor Ort
              </Typography>
              <Stack spacing={2}>
                {[
                  "Abholung",
                  "Lieferung aus Castrop-Rauxel",
                  "Events & Festivals",
                ].map((item) => (
                  <Box
                    key={item}
                    sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}
                  >
                    <CheckCircleIcon sx={{ color: "primary.main" }} />
                    <Typography>{item}</Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
