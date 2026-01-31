import { Box, Container, Typography, Grid, Chip, Button } from "@mui/material";
import CelebrationIcon from "@mui/icons-material/Celebration";
import GroupsIcon from "@mui/icons-material/Groups";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";

const events = [
  {
    icon: <LocalFireDepartmentIcon />,
    title: "Festival‑Stops",
    desc: "Wir sind auf Streetfood‑Festivals und Stadtfesten unterwegs – mit vollem Grill‑Setup.",
  },
  {
    icon: <GroupsIcon />,
    title: "Firmen & Feiern",
    desc: "Catering für Teams, Hochzeiten und private Events – mobil und flexibel.",
  },
  {
    icon: <CelebrationIcon />,
    title: "Stand in Bochum",
    desc: "Regelmäßige Öffnungszeiten am festen Standort – für alle, die uns vor Ort besuchen.",
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
            label="Events & Gruppen"
            sx={{
              mb: 2,
              color: "primary.main",
              bgcolor: "rgba(122,31,27,0.12)",
              fontWeight: 700,
            }}
          />
          <Typography variant="h2" component="h2" sx={{ fontWeight: 800, color: "#fff" }}>
            Überall dort, wo <Box component="span" sx={{ color: "primary.main" }}>Feuer brennt</Box>
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.7)", mt: 2, maxWidth: 760, mx: "auto" }}>
            Festival, Firmenfeier oder fester Stand in Bochum – wir bringen Grillgenuss
            mit Charakter und Tempo.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {events.map((item) => (
            <Grid item xs={12} md={4} key={item.title}>
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
          <Button variant="contained" color="primary" href="#reservation">
            Event anfragen
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
