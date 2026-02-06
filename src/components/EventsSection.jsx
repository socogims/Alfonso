import { Box, Container, Typography, Grid, Chip, Button } from "@mui/material";
import CelebrationIcon from "@mui/icons-material/Celebration";
import GroupsIcon from "@mui/icons-material/Groups";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import FestivalIcon from "@mui/icons-material/Festival";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";

const events = [
  {
    icon: <CelebrationIcon />,
    title: "Geburtstage",
    desc: "Mit Truck und Grill direkt zur Feier.",
  },
  {
    icon: <WorkIcon />,
    title: "Firmenfeiern",
    desc: "Schnell, direkt, unkompliziert – gutes Essen fürs Team.",
  },
  {
    icon: <GroupsIcon />,
    title: "Private Feiern",
    desc: "Ob klein oder groß, wir bringen den Wagen zu euch.",
  },
  {
    icon: <SchoolIcon />,
    title: "Abifeiern",
    desc: "Streetfood für lange Nächte.",
  },
  {
    icon: <FestivalIcon />,
    title: "Festivals & Food-Events",
    desc: "Unterwegs auf Events in der Region.",
  },
  {
    icon: <LocalFireDepartmentIcon />,
    title: "Vor Ort in Castrop-Rauxel",
    desc: "Wenn wir unterwegs sind, ist der Standort geschlossen.",
  },
];

export default function EventsSection() {
  return (
    <Box
      id="events"
      sx={{
        py: { xs: 10, md: 16 },
        background: "linear-gradient(180deg, #0b0a09 0%, #15110f 100%)",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Chip
            label="Events & Buchung"
            sx={{
              mb: 2,
              color: "primary.main",
              bgcolor: "rgba(122,31,27,0.12)",
              fontWeight: 700,
            }}
          />
          <Typography variant="h2" component="h2" sx={{ fontWeight: 800, color: "#fff" }}>
            Foodtruck für dein <Box component="span" sx={{ color: "primary.main" }}>Event</Box>
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.7)", mt: 2, maxWidth: 760, mx: "auto" }}>
            Du kannst unseren Truck buchen für Geburtstage, Firmenfeiern, private Feiern,
            Abifeiern, Festivals & Food-Events. Wir kommen mit dem Wagen zu euch oder
            stehen auf Veranstaltungen.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {events.map((item) => (
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

        <Box sx={{ textAlign: "center", mt: 6 }}>
          <Button variant="contained" color="primary" href="#kontakt">
            Anfrage senden
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
