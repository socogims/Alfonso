import { Box, Container, Typography, Grid, Chip } from "@mui/material";
import OutdoorGrillIcon from "@mui/icons-material/OutdoorGrill";
import SetMealIcon from "@mui/icons-material/SetMeal";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import IcecreamIcon from "@mui/icons-material/Icecream";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";

const leftItems = [
  {
    icon: <OutdoorGrillIcon />,
    title: "Fire Steak",
    desc: "Saftig vom Rost, mit Kräuterbutter und rauchigem Aroma.",
  },
  {
    icon: <SetMealIcon />,
    title: "BBQ Ribs",
    desc: "Langsam gegart, karamellisiert, dazu hausgemachte Sauce.",
  },
  {
    icon: <LocalDiningIcon />,
    title: "Grill‑Teller",
    desc: "Steak, Bratwurst, Maiskolben und Rösti – perfekt zum Teilen.",
  },
];

const rightItems = [
  {
    icon: <RamenDiningIcon />,
    title: "Smoked Brisket",
    desc: "Low & slow gegart, mit Coleslaw und eingelegten Zwiebeln.",
  },
  {
    icon: <LocalPizzaIcon />,
    title: "Veggie Fire Bowl",
    desc: "Gegrilltes Gemüse, Feta, Zitronenöl und Nuss‑Crunch.",
  },
  {
    icon: <IcecreamIcon />,
    title: "Dessert vom Feuer",
    desc: "Grill‑Ananas, Vanilleeis, karamellisierte Nüsse.",
  },
];

function MenuItem({ icon, title, desc }) {
  return (
    <Box sx={{ mb: 5, textAlign: "left" }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1 }}>
        <Box sx={{ color: "primary.main" }}>{icon}</Box>
        <Typography sx={{ fontWeight: 700 }}>{title}</Typography>
      </Box>
      <Typography sx={{ color: "rgba(255,255,255,0.7)", maxWidth: 420 }}>
        {desc}
      </Typography>
    </Box>
  );
}

export default function MenuHighlightsSection() {
  return (
    <Box
      id="menu"
      sx={{
        py: { xs: 10, md: 16 },
        background: "linear-gradient(180deg, #0b0a09 0%, #15110f 100%)",
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ textAlign: "center", mb: 12 }}>
          <Chip
            label="Speisekarte"
            sx={{
              mb: 2,
              color: "primary.main",
              bgcolor: "rgba(122,31,27,0.12)",
              fontWeight: 700,
            }}
          />
          <Typography variant="h2" component="h2" sx={{ color: "#fff", fontWeight: 800 }}>
            Unsere <Box component="span" sx={{ color: "primary.main" }}>Streetfood‑Highlights</Box>
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.7)", mt: 2, maxWidth: 760, mx: "auto" }}>
            Rauchige Klassiker, kreative Beilagen und Desserts vom Feuer – frisch,
            handgemacht und perfekt fürs Festival‑Feeling.
          </Typography>
        </Box>

        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={4}>
            {leftItems.map((item) => (
              <MenuItem key={item.title} {...item} />
            ))}
          </Grid>

          <Grid item xs={12} md={4}>
            <Box
              sx={{
                position: "relative",
                height: { xs: 260, md: 420 },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(122,31,27,0.25), transparent 65%)",
                  filter: "blur(15px)",
                }}
              />
              <Box
                component="img"
                src="/gill1.png"
                alt="Grill Spezialität"
                sx={{
                  width: { xs: 160, md: 220 },
                  zIndex: 2,
                  filter: "drop-shadow(0 12px 30px rgba(0,0,0,0.6))",
                }}
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            {rightItems.map((item) => (
              <MenuItem key={item.title} {...item} />
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
