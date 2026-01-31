import { Box, Container, Typography, Grid, Chip } from "@mui/material";

const classics = [
  {
    title: "Steakhouse Platte",
    desc: "Ribeye, Filetspitzen, Rinderwurst und Chili-Butter.",
  },
  {
    title: "BBQ Burger Deluxe",
    desc: "Dry-Aged Patty, rauchige Mayo, karamellisierte Zwiebeln.",
  },
  {
    title: "Smoked Brisket Sandwich",
    desc: "Zartes Brisket, Pickles, hausgemachte BBQ-Sauce.",
  },
  {
    title: "Grillgemüse Bowl",
    desc: "Saisonales Gemüse, Feta, Zitronenöl, Crunch.",
  },
  {
    title: "Ribs & Corn",
    desc: "Baby-Back Ribs mit Maiskolben und Kräuterbutter.",
  },
  {
    title: "Dessert vom Feuer",
    desc: "Grill-Ananas, Vanilleeis, Espresso-Karamell.",
  },
];

export default function ClassicsSection() {
  return (
    <Box
      id="highlights"
      sx={{
        position: "relative",
        py: { xs: 12, md: 16 },
        background: "linear-gradient(180deg, #15110f 0%, #0b0a09 100%)",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "15%",
          left: "-10%",
          width: 420,
          height: 420,
          background: "radial-gradient(circle, rgba(255,107,45,0.2), transparent 70%)",
          filter: "blur(90px)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          right: "-10%",
          width: 520,
          height: 520,
          background: "radial-gradient(circle, rgba(255,107,45,0.18), transparent 70%)",
          filter: "blur(120px)",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Box sx={{ textAlign: "center", mb: 9 }}>
          <Chip
            label="Unsere Klassiker"
            sx={{
              mb: 2,
              color: "primary.main",
              bgcolor: "rgba(255,107,45,0.12)",
              fontWeight: 700,
            }}
          />
          <Typography variant="h2" sx={{ fontWeight: 900, color: "#fff", mb: 2 }}>
            Signature <Box component="span" sx={{ color: "primary.main" }}>Plates</Box>
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.75)", maxWidth: 680, mx: "auto" }}>
            Für alle, die das Feuer lieben: saftig, rauchig und mit echten Lieblingskombis.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {classics.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.title}>
              <Box
                sx={{
                  p: 3,
                  height: "100%",
                  borderRadius: 3,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    borderColor: "primary.main",
                    background: "rgba(255,107,45,0.08)",
                  },
                }}
              >
                <Typography sx={{ fontWeight: 700, mb: 1 }}>{item.title}</Typography>
                <Typography sx={{ color: "rgba(255,255,255,0.7)" }}>{item.desc}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
