import { Box, Container, Typography, Stack } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";

const cities = [
  "Köln",
  "Düsseldorf",
  "Essen",
  "Bochum",
  "Bonn",
  "Wuppertal",
  "Bielefeld",
  "Münster",
  "Aachen",
];

export default function NRWLocationsSection() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        background: "linear-gradient(180deg, #0f1020, #14162e)",
        color: "#fff",
      }}
    >
      <Container maxWidth="md">
        {/* SECTION TITLE */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: 900,
              fontSize: { xs: "2.2rem", md: "2.8rem" },
            }}
          >
            Autoankauf in{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              Dortmund & Umgebung
            </Box>
          </Typography>

          <Typography
            sx={{
              mt: 2,
              color: "rgba(255,255,255,0.75)",
              maxWidth: 720,
              mx: "auto",
              lineHeight: 1.7,
            }}
          >
            Wir kaufen Ihr Auto direkt in Dortmund – schnell, fair und unkompliziert. 
            Unser mobiler Autoankauf-Service kommt zu Ihnen in alle Stadtteile wie Innenstadt, Hörde, Hombruch oder Aplerbeck. 
            Kostenlose Fahrzeugbewertung und Abholung inklusive – so einfach verkaufen Sie Ihr Auto in Dortmund.
          </Typography>
        </Box>

        {/* SERVICE MESSAGE */}
        <Box
          sx={{
            mb: 6,
            p: 3.5,
            borderRadius: 3,
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.12)",
            textAlign: "center",
          }}
        >
          <DirectionsCarIcon
            sx={{
              fontSize: 42,
              color: "primary.main",
              mb: 1,
            }}
          />

          <Typography
            component="h3"
            sx={{ fontWeight: 800, fontSize: "1.2rem" }}
          >
            Mobiler Autoankauf – wir kommen zu Ihnen nach Dortmund
          </Typography>

          <Typography
            sx={{
              mt: 1,
              color: "rgba(255,255,255,0.8)",
            }}
          >
            Profitieren Sie von kostenloser Fahrzeugbewertung, Sofortzahlung und Abholung direkt vor Ort in Dortmund. 
            Auch in weiteren Städten im Ruhrgebiet wie {cities.join(", ")} sind wir flexibel für Sie unterwegs.
          </Typography>
        </Box>

        {/* CITY TAGS (ohne Links für SEO-Fokus Dortmund) */}
        <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={1.5}>
          <Box
            sx={{
              px: 2.5,
              py: 1.2,
              borderRadius: 2,
              background: "rgba(169,28,26,0.15)",
              border: "1px solid rgba(255,255,255,0.1)",
              display: "flex",
              alignItems: "center",
              gap: 1,
              fontWeight: 600,
              color: "#fff",
            }}
          >
            <LocationOnIcon sx={{ fontSize: 18, color: "primary.main" }} />
            Dortmund
          </Box>
          {cities.map((city) => (
            <Box
              key={city}
              sx={{
                px: 2.5,
                py: 1.2,
                borderRadius: 2,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                display: "flex",
                alignItems: "center",
                gap: 1,
                fontWeight: 600,
                color: "#fff",
              }}
            >
              <LocationOnIcon sx={{ fontSize: 18, color: "primary.main" }} />
              {city}
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

