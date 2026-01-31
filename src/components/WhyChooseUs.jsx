import { Box, Container, Typography, Grid } from "@mui/material";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import GrassIcon from "@mui/icons-material/Grass";
import LocalBarIcon from "@mui/icons-material/LocalBar";

const highlights = [
  {
    icon: <LocalFireDepartmentIcon />,
    title: "Mobile Feuerküche",
    desc: "Unser Grill‑Auto bringt echtes Feuer auf Festivals, Firmenfeiern und Privatevents.",
  },
  {
    icon: <RestaurantMenuIcon />,
    title: "Handwerk am Grill",
    desc: "Scharf angebratene Cuts, Rauch und Glut – alles live und frisch vor Ort.",
  },
  {
    icon: <GrassIcon />,
    title: "Regional & ehrlich",
    desc: "Zutaten aus der Region, saisonale Beilagen und hausgemachte Saucen.",
  },
  {
    icon: <LocalBarIcon />,
    title: "Fester Stand in Bochum",
    desc: "Wer uns nicht auf Tour trifft, findet uns am festen Standort in Bochum.",
  },
];

export default function WhyChooseUs() {
  return (
    <Box
      id="experience"
      component="section"
      sx={{
        py: { xs: 10, md: 16 },
        background:
          "radial-gradient(circle at top, rgba(122,31,27,0.08) 0%, #0b0a09 55%)",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{ fontWeight: 800, color: "#fff", mb: 2 }}
          >
            Warum unser <Box component="span" sx={{ color: "primary.main" }}>Grill‑Auto</Box>?
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.7)", maxWidth: 720, mx: "auto" }}>
            Feuer, Qualität und echtes Handwerk. Ob Festival, Event oder fester Stand
            in Bochum – wir bringen Grillgenuss mit Charakter.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {highlights.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.title}>
              <Box
                sx={{
                  height: "100%",
                  p: 3,
                  borderRadius: 3,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  textAlign: "left",
                  transition: "all .25s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    borderColor: "primary.main",
                  background: "rgba(122,31,27,0.08)",
                  },
                }}
              >
                <Box sx={{ color: "primary.main", mb: 2 }}>{item.icon}</Box>
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
