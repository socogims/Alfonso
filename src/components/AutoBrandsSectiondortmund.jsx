import { Box, Container, Typography } from "@mui/material";

const brands = [
  "/brands/opel.svg",
  "/brands/audi.svg",
  "/brands/mercedes.svg",
  "/brands/toyota.svg",
  "/brands/mazda.svg",
  "/brands/nissan.svg",
  "/brands/hyundai.svg",
  "/brands/peugeot.svg",
  "/brands/honda.svg",
  "/brands/renault.svg",
  "/brands/citroen.svg",
  "/brands/mitsubishi.svg",
];

export default function AutoBrandsSection() {
  return (
    <Box
      sx={{
        position: "relative",
        py: { xs: 12, md: 16 },
        background: "linear-gradient(180deg, #0f1020 0%, #14162e 100%)",
        overflow: "hidden",
      }}
    >
      {/* ORANGE LIGHT LEFT */}
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          left: "-10%",
          width: 400,
          height: 400,
          background:
            "radial-gradient(circle, rgba(255,106,33,0.25), transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      {/* ORANGE LIGHT RIGHT */}
      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          right: "-10%",
          width: 500,
          height: 500,
          background:
            "radial-gradient(circle, rgba(255,106,33,0.18), transparent 70%)",
          filter: "blur(120px)",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        {/* TITLE */}
        <Box sx={{ textAlign: "center", mb: 9 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 900,
              letterSpacing: "-0.5px",
              color: "#fff",
              mb: 2,
            }}
          >
            In Dortmund kaufen wir{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              alle Automarken
            </Box>
          </Typography>

          <Typography
            sx={{
              color: "rgba(255,255,255,0.75)",
              maxWidth: 680,
              mx: "auto",
              fontSize: "1.1rem",
              lineHeight: 1.7,
            }}
          >
            Ob Gebrauchtwagen, Unfallwagen, Auto ohne TÜV oder Firmenwagen – wir
            kaufen Fahrzeuge aller Marken und Modelle direkt in Dortmund. Unser
            Autoankauf-Service gilt für die ganze Stadt, inklusive Innenstadt,
            Hörde, Hombruch, Aplerbeck und allen weiteren Stadtteilen. Vom
            Kleinwagen bis zum Premiumfahrzeug – Marke, Modell oder Zustand
            spielen keine Rolle.
          </Typography>
        </Box>

        {/* BRAND GRID */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(3, 1fr)",
              sm: "repeat(4, 1fr)",
              md: "repeat(6, 1fr)",
            },
            gap: { xs: 4, md: 6 },
          }}
        >
          {brands.map((logo, index) => (
            <Box
              key={index}
              sx={{
                position: "relative",
                height: 80,
                borderRadius: 4,
                background:
                  "linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.4s ease",
                boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  inset: 0,
                  borderRadius: 4,
                  background:
                    "linear-gradient(135deg, rgba(255,106,33,0.35), transparent 60%)",
                  opacity: 0,
                  transition: "opacity 0.4s ease",
                },
                "&:hover::after": {
                  opacity: 1,
                },
                "&:hover": {
                  transform: "translateY(-8px) scale(1.08)",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
                },
                img: {
                  maxHeight: 40,
                  opacity: 0.7,
                  transition: "opacity 0.3s ease",
                },
                "&:hover img": {
                  opacity: 1,
                },
              }}
            >
              <img src={logo} alt="Automarke in Dortmund" />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
