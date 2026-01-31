import { Box, Container, Typography, Grid } from "@mui/material";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import WineBarIcon from "@mui/icons-material/WineBar";
import IcecreamIcon from "@mui/icons-material/Icecream";

function StepCard({ number, icon, title, desc }) {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        p: 3.5,
        height: "100%",
        borderRadius: 4,
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        transition: "all .25s ease",
        overflow: "hidden",
        "&:hover": {
          transform: "translateY(-6px)",
          background: "rgba(255,107,45,0.08)",
          borderColor: "primary.main",
        },
      }}
    >
      <Typography
        sx={{
          position: "absolute",
          top: 12,
          right: 16,
          fontSize: "3.5rem",
          fontWeight: 900,
          color: "rgba(255,255,255,0.06)",
          pointerEvents: "none",
        }}
      >
        {number}
      </Typography>

      <Box sx={{ color: "primary.main", mb: 2 }}>{icon}</Box>
      <Typography sx={{ fontWeight: 700, color: "#fff", mb: 1, fontSize: "1.05rem" }}>
        {title}
      </Typography>
      <Typography sx={{ color: "rgba(255,255,255,0.65)", fontSize: "0.95rem", lineHeight: 1.6 }}>
        {desc}
      </Typography>
    </Box>
  );
}

export default function AblaufCardsSection() {
  return (
    <Box
      id="flow"
      component="section"
      sx={{
        py: { xs: 8, md: 14 },
        background: "linear-gradient(180deg, #15110f 0%, #0b0a09 100%)",
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 10 } }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              color: "#fff",
              fontWeight: 800,
              fontSize: { xs: "1.9rem", md: "2.6rem" },
            }}
          >
            Dein Abend im <Box component="span" sx={{ color: "primary.main" }}>Grillhaus</Box>
          </Typography>

          <Typography sx={{ mt: 2, color: "rgba(255,255,255,0.7)", maxWidth: 760, mx: "auto" }}>
            Von der Reservierung bis zum letzten Bissen – entspannt, genussvoll, unkompliziert.
          </Typography>
        </Box>

        <Grid container spacing={3} alignItems="stretch">
          {[
            {
              number: "01",
              icon: <EventAvailableIcon />,
              title: "Reservieren",
              desc: "Wunschtermin sichern – online, telefonisch oder per Nachricht.",
            },
            {
              number: "02",
              icon: <LocalDiningIcon />,
              title: "Ankommen & Anstoßen",
              desc: "Entspannt starten mit Aperitif, hausgemachter Limo oder Craft-Bier.",
            },
            {
              number: "03",
              icon: <LocalFireDepartmentIcon />,
              title: "Grillgenuss",
              desc: "Feuerküche, Signature Cuts und saisonale Beilagen frisch vom Grill.",
            },
            {
              number: "04",
              icon: <WineBarIcon />,
              title: "Pairing",
              desc: "Perfekte Begleitung: Weine, Whiskey oder alkoholfreie Highlights.",
            },
            {
              number: "05",
              icon: <IcecreamIcon />,
              title: "Dessert vom Feuer",
              desc: "Süßer Abschluss mit gegrillter Frucht und hausgemachten Desserts.",
            },
          ].map((step) => (
            <Grid item xs={12} sm={6} md={4} lg={2.4} key={step.number}>
              <StepCard {...step} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
