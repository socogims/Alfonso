import { Box, Container, Typography, Grid, Chip } from "@mui/material";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import EventIcon from "@mui/icons-material/Event";

const offers = [
  {
    icon: <LunchDiningIcon />,
    title: "Philly Cheesesteaks",
    desc: "Klassiker mit heißem Fleisch, Käse und weichem Brot.",
  },
  {
    icon: <RestaurantIcon />,
    title: "Smashburger",
    desc: "Kross, saftig, heiß vom Grill – ohne Umwege.",
  },
  {
    icon: <LocalDiningIcon />,
    title: "Beilagen",
    desc: "Einfach, ehrlich, genau das, was dazu passt.",
  },
  {
    icon: <DeliveryDiningIcon />,
    title: "Lieferung",
    desc: "Lieferung aus Castrop-Rauxel – je nach Verfügbarkeit.",
  },
  {
    icon: <EventIcon />,
    title: "Buchbar für Events",
    desc: "Für Feiern, Firmen und Food-Events.",
  },
];

export default function WhyChooseUs() {
  return (
    <Box
      id="angebot"
      component="section"
      sx={{
        py: { xs: 10, md: 16 },
        background:
          "radial-gradient(circle at top, rgba(122,31,27,0.08) 0%, #0b0a09 55%)",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Chip
            label="Unser Angebot"
            sx={{
              mb: 2,
              color: "primary.main",
              bgcolor: "rgba(122,31,27,0.12)",
              fontWeight: 700,
            }}
          />
          <Typography
            variant="h2"
            component="h2"
            sx={{ fontWeight: 800, color: "#fff", mb: 2 }}
          >
            Streetfood ohne <Box component="span" sx={{ color: "primary.main" }}>Schnickschnack</Box>
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.7)", maxWidth: 720, mx: "auto" }}>
            Gutes Streetfood, frisch gemacht. Kein Theater – dafür stehen wir.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {offers.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.title}>
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
