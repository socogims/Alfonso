import {
  Box,
  Container,
  Typography,
  Grid,
} from "@mui/material";

import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import CarCrashIcon from "@mui/icons-material/CarCrash";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import BuildIcon from "@mui/icons-material/Build";
import BusinessIcon from "@mui/icons-material/Business";
import PublicIcon from "@mui/icons-material/Public";

function FeatureItem({ icon, title, desc }) {
  return (
    <Box sx={{ mb: 6, textAlign: "center" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 1.5,
          gap: 1.5,
          color: "#A91C1A",
        }}
      >
        {icon}
        <Typography sx={{ fontWeight: 700, color: "#fff" }}>
          {title}
        </Typography>
      </Box>

      <Typography
        sx={{
          color: "rgba(255,255,255,0.65)",
          fontSize: "0.95rem",
          maxWidth: 420,
          mx: "auto",
          lineHeight: 1.7,
        }}
      >
        {desc}
      </Typography>
    </Box>
  );
}

export default function VorteileTimeline() {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 16 },
        background:
          "radial-gradient(circle at top, #1c1d3a 0%, #0f1020 70%)",
      }}
    >
      <Container maxWidth="xl">
        {/* Titel */}
        <Box sx={{ textAlign: "center", mb: 12 }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              color: "#fff",
              fontWeight: 800,
              fontSize: { xs: "2rem", md: "2.6rem" },
            }}
          >
            Welche Fahrzeuge wir in{" "}
            <Box component="span" sx={{ color: "#A91C1A" }}>
              Dortmund & Umgebung
            </Box>{" "}
            ankaufen
          </Typography>

          <Typography
            sx={{
              mt: 2,
              color: "rgba(255,255,255,0.7)",
              maxWidth: 760,
              mx: "auto",
              lineHeight: 1.7,
            }}
          >
            Ob Sie Ihr Auto in Dortmund Innenstadt, Hörde, Aplerbeck, Hombruch oder einem anderen Dortmunder Stadtteil verkaufen möchten – wir kaufen Gebrauchtwagen, Unfallwagen, Fahrzeuge ohne TÜV, Autos mit Motorschaden, Firmenfahrzeuge und Exportfahrzeuge direkt vor Ort in Dortmund an. 
            Unser Service ist schnell, fair und zuverlässig, inklusive kostenloser Abholung, sofortiger Auszahlung und transparenter Abwicklung. So erhalten Sie den besten Preis für Ihr Fahrzeug in Dortmund und Umgebung.
          </Typography>
        </Box>

        <Grid container spacing={4} alignItems="center" justifyContent="center">
          {/* LINKS */}
          <Grid item xs={12} md={5}>
            <FeatureItem
              icon={<DirectionsCarIcon />}
              title="Gebrauchtwagen in Dortmund verkaufen"
              desc="Verkaufen Sie Ihren Gebrauchtwagen in Dortmund unkompliziert, fair und schnell. Unsere Experten bewerten Ihr Fahrzeug nach aktuellen Marktpreisen in Dortmund, Hörde, Aplerbeck, Hombruch und allen Stadtteilen. Kostenlose Abholung inklusive."
            />
            <FeatureItem
              icon={<CarCrashIcon />}
              title="Unfallwagen in Dortmund verkaufen"
              desc="Auch Unfallwagen kaufen wir in Dortmund direkt vor Ort. Egal ob kleinere Schäden oder Totalschaden – wir garantieren eine faire Bewertung, sofortige Auszahlung und unkomplizierte Abholung in allen Dortmunder Stadtteilen."
            />
            <FeatureItem
              icon={<ReportProblemIcon />}
              title="Auto ohne TÜV in Dortmund verkaufen"
              desc="Ihr Fahrzeug hat keinen TÜV oder eine abgelaufene HU/AU? Kein Problem – wir kaufen Autos ohne TÜV in Dortmund und Umgebung unkompliziert an. Schnell, transparent und mit sofortiger Auszahlung direkt vor Ort."
            />
          </Grid>

          {/* MITTE – Auto Bild */}
          <Grid item xs={12} md={2}>
            <Box
              sx={{
                position: "relative",
                height: { xs: 250, md: 420 },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  width: "2px",
                  borderLeft: "2px dashed rgba(255,255,255,0.2)",
                }}
              />

              <Box
                component="img"
                src="/car-center.png"
                alt="Autoankauf Dortmund – wir kaufen Ihr Auto direkt vor Ort"
                sx={{
                  width: { xs: 100, md: 150 },
                  zIndex: 2,
                }}
              />
            </Box>
          </Grid>

          {/* RECHTS */}
          <Grid item xs={12} md={5}>
            <FeatureItem
              icon={<BuildIcon />}
              title="Auto mit Motorschaden in Dortmund"
              desc="Motorschaden, Getriebeschaden oder andere technische Defekte? Wir kaufen defekte Autos in Dortmund und allen Stadtteilen fair an, inklusive kostenloser Abholung und direkter Auszahlung."
            />
            <FeatureItem
              icon={<BusinessIcon />}
              title="Firmenwagen in Dortmund verkaufen"
              desc="Leasingrückläufer, Firmenfahrzeuge oder Fuhrparkautos? Wir kaufen Ihre Firmenfahrzeuge direkt in Dortmund an, mit sicherer, schneller und professioneller Abwicklung für Unternehmen jeder Größe."
            />
            <FeatureItem
              icon={<PublicIcon />}
              title="Exportfahrzeuge aus Dortmund"
              desc="Fahrzeuge, die nicht mehr fahrbereit oder wirtschaftlich sind, kaufen wir in Dortmund auch für den Export an. Unser Service deckt alle Stadtteile ab und garantiert eine unkomplizierte Abwicklung und faire Preise."
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

