import { useEffect, useState } from "react";
import { Box, Container, Typography, Button } from "@mui/material";

const images = ["/grill-1.jpg", "/grill-2.jpg", "/grill-3.jpg"];

function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        overflow: "hidden",
      }}
    >
      {images.map((src, i) => (
        <Box
          key={src}
          component="img"
          src={src}
          alt="Grill Spezialitäten"
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: i === index ? 1 : 0,
            transition: "opacity 1.2s ease-in-out",
          }}
        />
      ))}

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(8,6,5,0.85), rgba(8,6,5,0.35), rgba(8,6,5,0.85))",
        }}
      />
    </Box>
  );
}

export default function Hero() {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        overflow: "hidden",
      }}
    >
      <HeroSlider />

      <Container
        maxWidth={false}
        sx={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1200px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "55%" },
            textAlign: "center",
          }}
        >
          <Typography
            component="h1"
            sx={{
              fontWeight: 900,
              lineHeight: 1.1,
              mb: 3,
              fontSize: { xs: "2.2rem", md: "3.2rem" },
              textTransform: "uppercase",
              letterSpacing: "0.5px",
              fontFamily: "'Oswald', sans-serif",
            }}
          >
            Feuer. Rauch. Streetfood.
            <Box component="span" sx={{ color: "primary.main", display: "block" }}>
              Grill‑Auto & fester Stand in Bochum
            </Box>
          </Typography>

          <Typography
            sx={{
              color: "rgba(255,255,255,0.85)",
              mb: 4,
              fontSize: { xs: "1.05rem", md: "1.15rem" },
              lineHeight: 1.75,
            }}
          >
            Wir grillen mobil auf Festivals, Firmenfeiern und privaten Events – und
            haben zugleich unseren festen Stand in Bochum. Saftige Cuts, rauchige
            Aromen und hausgemachte Beilagen, frisch vom Feuer.
          </Typography>

          <Button
            variant="contained"
            color="primary"
            href="#standort"
            sx={{
              width: "100%",
              py: { xs: 1.8, md: 2.4 },
              borderRadius: 999,
              fontSize: { xs: "1rem", md: "1.15rem" },
              fontWeight: 800,
              textTransform: "none",
              boxShadow: {
                xs: "0 8px 22px rgba(122,31,27,0.45)",
                md: "0 14px 40px rgba(122,31,27,0.55)",
              },
              "&:hover": {
                transform: { md: "translateY(-2px)" },
                boxShadow: "0 20px 55px rgba(122,31,27,0.7)",
              },
            }}
          >
            Stand besuchen
          </Button>

          <Button
            href="#reservation"
            sx={{
              mt: 2,
              width: "100%",
              py: 1.4,
              borderRadius: 999,
              fontSize: "0.95rem",
              fontWeight: 700,
              textTransform: "none",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.4)",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.08)",
              },
            }}
          >
            Catering anfragen
          </Button>

          <Typography
            sx={{
              mt: 3,
              fontSize: "0.9rem",
              color: "rgba(255,255,255,0.75)",
            }}
          >
            ✔ Mobile Feuerküche • ✔ Bochum • ✔ Festivals & Events
          </Typography>
        </Box>
      </Container>

      <Typography
        sx={{
          position: "absolute",
          top: 32,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 3,
          fontWeight: 900,
          fontSize: { xs: "0.9rem", md: "1.1rem" },
          color: "#fff",
          letterSpacing: 1,
          background: "rgba(0,0,0,0.55)",
          px: 3,
          py: 1,
          borderRadius: 999,
          textTransform: "uppercase",
        }}
      >
        Prince of Philly 
      </Typography>
    </Box>
  );
}
