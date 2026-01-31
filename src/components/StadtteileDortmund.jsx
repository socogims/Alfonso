import {
  Box,
  Container,
  Typography,
  Grid,
  Chip,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function StadtteileDortmund() {
  const stadtteile = [
    "Innenstadt",
    "Hörde",
    "Aplerbeck",
    "Hombruch",
    "Eving",
    "Mengede",
    "Scharnhorst",
    "Huckarde",
    "Lütgendortmund",
    "Brackel",
    "Wambel",
    "Kirchhörde",
  ];

  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
        background: "#0f1020",
      }}
    >
      <Container maxWidth="lg">
        {/* Heading */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            component="h2"
            sx={{
              color: "#fff",
              fontWeight: 900,
              fontSize: { xs: "2.1rem", md: "2.6rem" },
              mb: 2,
            }}
          >
            Autoankauf in allen{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              Stadtteilen von Dortmund
            </Box>
          </Typography>

          <Typography
            sx={{
              color: "rgba(255,255,255,0.75)",
              fontSize: "1.05rem",
              maxWidth: 860,
              mx: "auto",
              lineHeight: 1.8,
            }}
          >
            Unser <strong>Autoankauf in Dortmund</strong> ist in allen Stadtteilen
            für Sie verfügbar. Ganz gleich, ob Sie Ihr Auto in der Innenstadt,
            in Hörde, Aplerbeck oder Hombruch verkaufen möchten – wir holen Ihr
            Fahrzeug direkt bei Ihnen ab und zahlen den Kaufpreis sofort aus.
          </Typography>
        </Box>

        {/* Stadtteile Grid */}
        <Grid container spacing={2} justifyContent="center">
          {stadtteile.map((stadtteil, index) => (
            <Grid item key={index}>
     <Chip
  icon={<LocationOnIcon />}
  label={`Autoankauf Dortmund ${stadtteil}`}
  sx={{
    px: 2,
    py: 2.4,
    fontSize: "0.95rem",
    fontWeight: 700,
    color: "#fff",
    bgcolor: "rgba(255,255,255,0.08)",
    borderRadius: 999,
    cursor: "default",            // 👈 kein Pointer
    transition: "all 0.3s ease",
    "&:hover": {
      bgcolor: "rgba(255,255,255,0.12)", // nur optischer Hover
      transform: "translateY(-2px)",
    },
  }}
/>

            </Grid>
          ))}
        </Grid>

        {/* Erweiterter SEO-Text */}
        <Box sx={{ mt: 8, textAlign: "center" }}>
          <Typography
            sx={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "0.95rem",
              maxWidth: 920,
              mx: "auto",
              lineHeight: 1.85,
            }}
          >
            Egal in welchem Stadtteil Sie wohnen: Unser Service für den{" "}
            <strong>Autoankauf in Dortmund</strong> richtet sich an Privat- und
            Geschäftskunden. Wir kaufen Gebrauchtwagen, Unfallwagen, Fahrzeuge
            ohne TÜV sowie Autos mit Motorschaden an. Wenn Sie Ihr{" "}
            <strong>Auto in Dortmund schnell verkaufen</strong> möchten,
            profitieren Sie von unserer kostenlosen Abholung, fairen Preisen
            und einer sofortigen Auszahlung – direkt bei Ihnen vor Ort.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
