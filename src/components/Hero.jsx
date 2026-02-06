import { useEffect, useState } from "react";
import { Box, Container, Typography, Button, Stack } from "@mui/material";

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
          alt="Streetfood vom Grill"
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
      id="start"
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
            width: { xs: "100%", md: "60%" },
            textAlign: "center",
          }}
        >
          <Typography
            component="h1"
            sx={{
              fontWeight: 900,
              lineHeight: 1.1,
              mb: 2,
              fontSize: { xs: "2.1rem", md: "3.2rem" },
              textTransform: "uppercase",
              letterSpacing: "0.5px",
              fontFamily: "'Oswald', sans-serif",
            }}
          >
            PHILLY CHEESESTEAK & SMASHBURGER
          </Typography>

          <Typography
            sx={{
              color: "primary.main",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 1,
              mb: 3,
            }}
          >
            Foodtruck & Catering aus Castrop-Rauxel
          </Typography>

          <Typography
            sx={{
              color: "rgba(255,255,255,0.85)",
              mb: 4,
              fontSize: { xs: "1.05rem", md: "1.15rem" },
              lineHeight: 1.75,
            }}
          >
            Unser Foodtruck steht aktuell in Castrop-Rauxel. Von hier aus verkaufen wir
            Philly Cheesesteaks, Smashburger und Beilagen – frisch vom Grill,
            unkompliziert und auf die Hand. Wenn wir nicht am Standort sind, sind wir
            unterwegs auf Events, Festivals oder privaten Feiern.
          </Typography>

          <Stack spacing={2}>
            <Button
              variant="contained"
              color="primary"
              href="#kontakt"
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
              Jetzt bestellen oder anfragen
            </Button>
            <Button
              href="#standort"
              sx={{
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
              Standort & Öffnungszeiten
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
