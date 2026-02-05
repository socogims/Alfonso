import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { Instagram, MusicNote } from "@mui/icons-material"; // TikTok ≈ MusicNote als Platzhalter
import {


  Zoom,
  Tooltip,
} from "@mui/material";

import LanguageIcon from "@mui/icons-material/Language";
import ShareIcon from "@mui/icons-material/Share";

import CloseIcon from "@mui/icons-material/Close";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Container,
  Typography,
  Grid,
  Button,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Fab,
  CircularProgress,
} from "@mui/material";
import {
  TextField,
  Divider,
} from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MenuIcon from "@mui/icons-material/Menu";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

// 🎨 Hauptthema
const theme = createTheme({
  palette: {
    primary: { main: "#25D366" },
    secondary: { main: "#1e88e5" },
    background: { default: "#f7f7f7" },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 600 },
    body1: { color: "#555" },
  },
});

export default function App() {
    const images = ["/hero.jpg", "/hero1.jpg", "/hero2.jpg"];
  const [current, setCurrent] = useState(0);
  const [showIntro, setShowIntro] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  // 🔽 States für das mobile Menü
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenu = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);
 const [open, setOpen] = useState(false);
  // 🔽 Sanfter Scroll zu Sektionen
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    handleClose();
  };

  
  // Alle 5 Sekunden zum nächsten Bild wechseln
 useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);


  // Intro nach 5s automatisch schließen
  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* 🌟 Intro-Bildschirm mit Video */}
      {showIntro && (
        <Box
          sx={{
            position: "fixed",
            inset: 0,
            bgcolor: "black",
            zIndex: 2000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              width: { xs: "90%", sm: "70%", md: "50%" },
              aspectRatio: "16/9",
              borderRadius: 3,
              overflow: "hidden",
              boxShadow: "0 0 40px rgba(0,0,0,0.6)",
            }}
          >
            <ReactPlayer
              url="/intro.mp4" // 🎥 lokales Video unter /public
              playing
              muted
              width="100%"
              height="100%"
              onReady={() => setVideoReady(true)}
              onEnded={() => {
                const fade = document.getElementById("intro-screen");
                if (fade) {
                  fade.style.opacity = 0;
                  setTimeout(() => setShowIntro(false), 800);
                } else {
                  setShowIntro(false);
                }
              }}
            />
          </Box>

          {!videoReady && (
            <CircularProgress sx={{ color: "white", mt: 3 }} />
          )}

          {/* Button "Video überspringen" */}
          <Button
            variant="outlined"
            sx={{
              color: "white",
              borderColor: "white",
              mt: 3,
              textTransform: "none",
              borderRadius: "20px",
              px: 3,
              py: 0.8,
              "&:hover": { bgcolor: "rgba(255,255,255,0.1)" },
            }}
            onClick={() => setShowIntro(false)}
          >
            Video überspringen
          </Button>
        </Box>
      )}

      {/* 🌐 Hauptinhalt (sichtbar nach dem Video) */}
      {!showIntro && (
        <>
          {/* 🔝 HEADER — nur sichtbar, wenn das mobile Menü nicht offen ist */}
{!anchorEl && (
  <AppBar
    position="fixed"
    elevation={0}
    sx={{
      bgcolor: "#FDF8F3", // heller Sandton – edler als Beige
      color: "#3E2C1C", // warmes Dunkelbraun
      px: { xs: 2, md: 8 },
      py: 1.2,
      boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
      borderBottom: "3px solid #C99846", // Goldrand – marokkanischer Akzent
      borderTopLeftRadius: "20px",
      borderTopRightRadius: "20px",
      zIndex: 120,
      backdropFilter: "blur(8px)",
    }}
  >
    <Toolbar
      sx={{
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
{/* 🕌 Logo-Bereich – edel und harmonisch */}
<Box
  sx={{
    display: "flex",
    alignItems: "center",
    gap: 1.5,
    position: "relative",
    pl: { xs: 1, md: 2 },
  }}
>
  {/* 🌙 Goldene Verzierung (linker Akzent) */}
  <Box
    sx={{
      width: 10,
      height: 40,
      borderRadius: "3px",
      bgcolor: "#C99846",
      boxShadow: "0 0 10px rgba(201,152,70,0.6)",
      animation: "glowBar 3s ease-in-out infinite",
      "@keyframes glowBar": {
        "0%,100%": { opacity: 0.6, transform: "scaleY(1)" },
        "50%": { opacity: 1, transform: "scaleY(1.2)" },
      },
    }}
  />

  {/* 🕌 Logo selbst */}
  <Box
    component="img"
    src="/logo.png"
    alt="Restaurant Marrakesch Dortmund"
    sx={{
      height: { xs: 60, sm: 75 },
      width: "auto",
      cursor: "pointer",
      borderRadius: "12px",
      p: 0.5,
      bgcolor: "rgba(255,255,255,0.7)",
      backdropFilter: "blur(4px)",
      boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
      transition: "all 0.4s ease",
      "&:hover": {
        transform: "scale(1.06) rotate(-1deg)",
        boxShadow: "0 6px 20px rgba(201,152,70,0.5)",
        bgcolor: "rgba(255,255,255,0.9)",
      },
      filter:
        "drop-shadow(0 2px 4px rgba(0,0,0,0.25)) brightness(1.1)",
    }}
  />


</Box>



   {/* 📋 Menü rechts (Desktop) */}
<Box
  sx={{
    display: "flex",
    alignItems: "center",
    gap: 3,
  }}
>
  {/* Menü-Buttons */}
  <Button
    href="https://www.lieferando.de/speisekarte/marrakesch-restaurant-44145-dortmund"
    sx={{
      display: { xs: "none", md: "inline-flex" },
      color: "#3E2C1C",
      fontWeight: 600,
      textTransform: "none",
      fontSize: "1rem",
      "&:hover": { color: "#C99846" },
    }}
  >
    Speisekarte
  </Button>

<Button
  component="a"
  href="#opening-hours"
  sx={{
    display: { xs: "none", md: "inline-flex" },
    color: "#3E2C1C",
    fontWeight: 600,
    textTransform: "none",
    fontSize: "1rem",
    scrollBehavior: "smooth",
    "&:hover": { color: "#C99846" },
  }}
>
  Öffnungszeiten
</Button>


  <Button
   href="#about"
    sx={{
      display: { xs: "none", md: "inline-flex" },
      color: "#3E2C1C",
      fontWeight: 600,
      textTransform: "none",
      fontSize: "1rem",
      "&:hover": { color: "#C99846" },
    }}
  >
    Über uns
  </Button>



  {/* 🍴 CTA bleibt auf Mobile sichtbar */}
  <Button
    variant="contained"
    sx={{
      bgcolor: "#C99846",
      color: "white",
      fontWeight: 700,
      borderRadius: "999px",
      px: { xs: 3.8, md: 5 },
      py: { xs: 1.3, md: 1.5 },
      fontSize: { xs: "1rem", md: "1.1rem" },
      textTransform: "none",
      boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
      "&:hover": {
        bgcolor: "#b78c3d",
        transform: "scale(1.06)",
        boxShadow: "0px 5px 15px rgba(0,0,0,0.25)",
      },
      transition: "all 0.25s ease-in-out",
    }}
    href="https://www.lieferando.de/speisekarte/marrakesch-restaurant-44145-dortmund"
    target="_blank"
  >
    🍽 Jetzt bestellen
  </Button>
</Box>

    </Toolbar>

    {/* Unteres Ornamentband (nur Desktop) */}
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#C99846",
        py: 0.8,
        gap: 3,
        fontWeight: 600,
        color: "white",
        fontSize: "1rem",
        letterSpacing: "0.5px",
        borderBottomLeftRadius: "20px",
        borderBottomRightRadius: "20px",
        boxShadow: "inset 0 0 8px rgba(0,0,0,0.15)",
      }}
    >
      <Typography
        sx={{
          cursor: "pointer",
          "&:hover": { opacity: 0.85 },
        }}
      >
        Tajines
      </Typography>
      <Typography
        sx={{
          cursor: "pointer",
          "&:hover": { opacity: 0.85 },
        }}
      >
        Couscous
      </Typography>
      <Typography
        sx={{
          cursor: "pointer",
          "&:hover": { opacity: 0.85 },
        }}
      >
        Grillgerichte
      </Typography>
      <Typography
        sx={{
          cursor: "pointer",
          "&:hover": { opacity: 0.85 },
        }}
      >
        Desserts & Tee
      </Typography>
    </Box>
  </AppBar>
)}



          {/* 🩺 HERO SECTION — Text links, Bild rechts, Buttons (gleiches Layout) */}
          {/* HERO SECTION mit Hintergrundbild */}
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        height: { xs: "90vh", md: "95vh" },
        borderRadius: "30px",
        boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
        mx: { xs: 2, md: 8 },
        mt: { xs: 3, md: 5 },
      }}
    >
      {/* Fade Images mit leichtem Zoom */}
      {images.map((img, index) => (
        <Box
          key={img}
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: index === current ? 1 : 0,
            transform: index === current ? "scale(1)" : "scale(1.1)",
            transition: "opacity 2s ease-in-out, transform 6s ease-in-out",
          }}
        />
      ))}

      {/* Goldener Farbverlauf-Overlay für Wärme */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom right, rgba(0,0,0,0.6), rgba(0,0,0,0.3))",
          zIndex: 1,
        }}
      />

      {/* Inhalt */}
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: { xs: "center", md: "flex-start" },
          textAlign: { xs: "center", md: "left" },
          color: "white",
          px: { xs: 3, md: 8 },
        }}
      >
        <Typography
          variant="overline"
          sx={{
            color: "#F8C471",
            fontWeight: 700,
            letterSpacing: 2,
            mb: 2,
            textTransform: "uppercase",
          }}
        >
          Authentische marokkanische Küche
        </Typography>

      <Typography
        variant="h2"
        sx={{
          fontWeight: 900,
          fontSize: { xs: "2.8rem", md: "4.5rem" },
          mb: 3,
          lineHeight: 1.1,
          textShadow: "3px 3px 12px rgba(0,0,0,0.6)",
        }}
      >
        Restaurant<br />Marrakech Dortmund
      </Typography>

      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: "1.1rem", md: "1.3rem" },
          maxWidth: 600,
          mb: 5,
          color: "rgba(255,255,255,0.95)",
          textShadow: "1px 1px 5px rgba(0,0,0,0.4)",
        }}
      >
        authentische marokkanische Küche mit Tajine, Couscous, Grillgerichten und frisch gebackenem Brot. Wir kochen mit traditionellen Gewürzen, frisch und hausgemacht. Ob Mittagessen, Abendessen mit Freunden oder Familienessen: Bei uns erleben Sie echte marokkanische Gastfreundschaft.
Halal • frisch • hausgemacht
      </Typography>


        <Button
          variant="contained"
          sx={{
            bgcolor: "#F8C471",
            color: "black",
            fontWeight: 700,
            fontSize: "1.2rem",
            borderRadius: "50px",
            px: 5,
            py: 1.8,
            textTransform: "none",
            boxShadow: "0 4px 15px rgba(0,0,0,0.25)",
            "&:hover": {
              bgcolor: "#A91C1A",
              transform: "scale(1.05)",
              transition: "all 0.3s ease",
            },
          }}
          href="https://www.lieferando.de/speisekarte/marrakesch-restaurant-44145-dortmund"
        >
          🍕 Jetzt bestellen
        </Button>
      </Container>
    </Box>
         
        </>
      )}


      
     {/* 🍴 SECTION — Top Gerichte von Restaurant Marrakesch */}
<Box
  id="top-dishes"
  sx={{
    py: { xs: 10, md: 16 },
    bgcolor: "#F9F5EE",
  }}
>
  <Container
    maxWidth="xl"
    disableGutters
    sx={{
      px: { xs: 1, md: 6 }, // 👉 Weniger Padding auf Mobile
    }}
  >
    {/* 🕌 Titelbereich */}
    <Box sx={{ textAlign: "center", mb: { xs: 8, md: 10 }, px: { xs: 2, md: 0 } }}>
      <Typography
        variant="overline"
        sx={{
          color: "#C99846",
          fontWeight: 700,
          letterSpacing: 1,
          textTransform: "uppercase",
          mb: 1,
        }}
      >
        Vielfältige Geschmackserlebnisse der marokkanischen Küche
      </Typography>

      <Typography
        variant="h3"
        sx={{
          fontWeight: 800,
          color: "#2C2C2C",
          mb: 2,
          fontSize: { xs: "2rem", md: "2.8rem" },
        }}
      >
        Top Gerichte von Restaurant Marrakesch Dortmund
      </Typography>
    </Box>

    {/* 🍛 Grid – 3 auf groß, 1 auf klein */}
    <Grid
      container
      spacing={4}
      sx={{
        justifyContent: "center",
      }}
    >
      {[
  {
    title: "Tajine – Marokkanische Spezialität",
    desc: "Traditionelle marokkanische Tajine im Restaurant Marrakech Dortmund: zart geschmortes Lamm, Hühnchen oder Gemüse mit Safran, Oliven und eingelegten Zitronen – langsam gegart für intensive Aromen.",
    img: "/tajine.jpg",
  },
  {
    title: "Gegrillte Fischgerichte – Marokkanische Küche",
    desc: "Frisch gegrillter Fisch im marokkanischen Restaurant in Dortmund, verfeinert mit Kräutern, Zitronen und Olivenöl. Leicht, aromatisch und typisch marokkanisch.",
    img: "/gegrilltefischgerichte.jpg",
  },
  {
    title: "Grillgerichte – Orientalische Klassiker",
    desc: "Marokkanische Grillgerichte im Restaurant Marrakech Dortmund: saftige Spieße aus Lamm, Hähnchen oder Rindfleisch, mariniert mit orientalischen Gewürzen und serviert mit Brot oder Couscous.",
    img: "/grillgerichte.jpg",
  },
].map((dish, i) => (
        <Grid
          key={i}
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              bgcolor: "white",
              borderRadius: "30px",
              overflow: "hidden",
              width: "100%",
              maxWidth: { xs: "95%", md: 450 }, // 👉 Auf Mobile fast volle Breite
              boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
              transition: "transform 0.4s ease, box-shadow 0.4s ease",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: "0 12px 40px rgba(201,152,70,0.3)",
              },
            }}
          >
            {/* 🖼️ Bild */}
            <Box
              component="img"
              src={dish.img}
              alt={dish.title}
              sx={{
                width: "100%",
                height: { xs: 240, md: 280 },
                objectFit: "cover",
                borderTopLeftRadius: "30px",
                borderTopRightRadius: "30px",
                transition: "transform 0.4s ease",
                "&:hover": { transform: "scale(1.05)" },
              }}
            />

            {/* 📋 Textbereich */}
            <Box sx={{ p: { xs: 3, md: 4 }, textAlign: "center" }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 800,
                  color: "#3E2C1C",
                  mb: 1.5,
                }}
              >
                {dish.title}
              </Typography>

              <Typography
                sx={{
                  color: "#5a4b3c",
                  fontSize: { xs: "0.95rem", md: "1rem" },
                  lineHeight: 1.7,
                  mb: 3,
                }}
              >
                {dish.desc}
              </Typography>

              <Button
                variant="contained"
                sx={{
                  bgcolor: "#C99846",
                  color: "white",
                  fontWeight: 700,
                  borderRadius: "999px",
                  px: { xs: 3.5, md: 4 },
                  py: { xs: 1.1, md: 1.2 },
                  fontSize: { xs: "1rem", md: "1rem" },
                  textTransform: "none",
                  "&:hover": { bgcolor: "#b6873e" },
                }}
                href="https://www.lieferando.de/speisekarte/marrakesch-restaurant-44145-dortmund"
                target="_blank"
              >
                ➜ Jetzt bestellen
              </Button>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  </Container>
</Box>

  {/* 🍽️ SECTION — Über Restaurant Marrakesch */}
<Box
  id="about"
  sx={{
    bgcolor: "#F9F5EE",
    py: { xs: 10, md: 14 },
    px: { xs: 2, md: 8 },
  }}
>
  {/* 📦 Flex-Container für Bild + Text */}
  <Box
    sx={{
      display: "flex",
      flexDirection: { xs: "column", md: "row" }, // mobile = untereinander, desktop = nebeneinander
      alignItems: "center", // vertikal zentriert auf Desktop
      justifyContent: "center",
      gap: { xs: 6, md: 10 },
    }}
  >
    {/* 🖼️ Bild links */}
    <Box
      component="img"
      src="/grillgerichte.jpg"
      alt="Traditionelle marokkanische Küche"
      sx={{
        width: { xs: "100%", md: "50%" }, // Hälfte auf Desktop
        height: { xs: 280, md: 480 },
        objectFit: "cover",
        borderRadius: "30px",
        boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
      }}
    />

    {/* 📄 Text rechts */}
    <Box
      sx={{
        width: { xs: "100%", md: "50%" },
        textAlign: { xs: "center", md: "left" },
      }}
    >
  <Typography
  variant="overline"
  sx={{
    color: "#C99846",
    fontWeight: 700,
    letterSpacing: 1,
    textTransform: "uppercase",
    mb: 2,
    display: "block",
  }}
>
  Echte marokkanische Tradition
</Typography>

<Typography
  variant="h4"
  component="h2"
  sx={{
    fontWeight: 900,
    color: "#2C2C2C",
    mb: 3,
    fontSize: { xs: "2rem", md: "2.6rem" },
    lineHeight: 1.2,
  }}
>
  Marokkanisches Restaurant in Dortmund – Restaurant Marrakech
</Typography>

<Typography
  component="p"
  sx={{
    color: "#4B3A28",
    fontSize: { xs: "1rem", md: "1.1rem" },
    lineHeight: 1.8,
    mb: 3,
  }}
>
  Das <strong>Restaurant Marrakech Dortmund</strong> steht für höchste Qualität
  und Leidenschaft in der marokkanischen Küche in Dortmund.
  Wir verwenden nur die frischesten Zutaten, um traditionelle Gerichte wie
  <strong> Tajine</strong>, <strong>Couscous</strong> und
  <strong> Grillgerichte</strong> authentisch und hausgemacht zuzubereiten.
</Typography>


      <Typography
        sx={{
          color: "#4B3A28",
          fontSize: { xs: "1rem", md: "1.1rem" },
          lineHeight: 1.8,
          mb: 4,
        }}
      >
        Unsere <strong>Küche</strong> bringt dir ein Stück Marokko auf den Teller:
        authentisch, aromatisch und mit Liebe zubereitet. Genieße den Duft
        orientalischer Gewürze und die Wärme marokkanischer Gastfreundschaft –
        direkt hier in deinem Lieblingsrestaurant.
      </Typography>

      <Button
        variant="contained"
        sx={{
          bgcolor: "#C99846",
          color: "white",
          fontWeight: 700,
          borderRadius: "999px",
          px: { xs: 4, md: 5 },
          py: { xs: 1.2, md: 1.4 },
          fontSize: { xs: "1rem", md: "1.1rem" },
          textTransform: "none",
          "&:hover": { bgcolor: "#b6873e" },
        }}
        href="https://www.lieferando.de/speisekarte/marrakesch-restaurant-44145-dortmund"
        target="_blank"
      >
        ➜ Jetzt reservieren
      </Button>
    </Box>
  </Box>
</Box>

{/* 🕒 SECTION — Öffnungszeiten */}
<Box
  id="opening-hours"
  sx={{
    position: "relative",
    bgcolor: "linear-gradient(180deg, #FCF7EF 0%, #F5E7D0 100%)",
    py: { xs: 10, md: 14 },
    px: { xs: 3, md: 8 },
    overflow: "hidden",
  }}
>
  {/* 🌿 Hintergrundornamente */}
  <Box
    sx={{
      position: "absolute",
      inset: 0,
      backgroundImage: "url('/pattern-gold.png')",
      opacity: 0.05,
      backgroundRepeat: "repeat",
      backgroundSize: "200px",
      pointerEvents: "none",
    }}
  />

  {/* 📦 Flex-Container */}
  <Box
    sx={{
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      alignItems: "center",
      justifyContent: "center",
      gap: { xs: 8, md: 10 },
      position: "relative",
      zIndex: 1,
    }}
  >
    {/* 🗺️ Karte (linke Hälfte auf Desktop) */}
    <Box
      sx={{
        width: { xs: "100%", md: "50%" },
        height: { xs: 280, md: 420 },
        borderRadius: "25px",
        overflow: "hidden",
        boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
        transform: { md: "rotate(-1deg)" },
        transition: "transform 0.4s ease",
        "&:hover": { transform: { md: "rotate(0deg) scale(1.02)" } },
      }}
    >
     <iframe
  src="https://www.google.com/maps?q=M%C3%BCnsterstra%C3%9Fe%2099%2C%2044145%20Dortmund&output=embed"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Restaurant Marrakesch Dortmund - Münsterstraße 99"
></iframe>

    </Box>

    {/* 📄 Öffnungszeiten rechts */}
    <Box
      sx={{
        width: { xs: "100%", md: "50%" },
        textAlign: { xs: "center", md: "left" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        px: { xs: 1, md: 4 },
      }}
    >
      <Typography
        variant="overline"
        sx={{
          color: "#C99846",
          fontWeight: 700,
          letterSpacing: 1.5,
          textTransform: "uppercase",
          mb: 1,
          display: "block",
        }}
      >
        Immer für dich da!
      </Typography>

      <Typography
        variant="h4"
        sx={{
          fontWeight: 900,
          color: "#2C2C2C",
          mb: 3,
          fontSize: { xs: "2rem", md: "2.5rem" },
          lineHeight: 1.3,
          textShadow: "2px 2px 6px rgba(0,0,0,0.1)",
        }}
      >
        Öffnungszeiten Restaurant Marrakesch Dortmund
      </Typography>

      {/* 📍 Adresse */}
      <Typography
        sx={{
          color: "#4B3A28",
          fontWeight: 600,
          mb: 3,
          fontSize: { xs: "1rem", md: "1.1rem" },
        }}
      >
        📍 Münsterstraße 99, 44145 Dortmund  
        📞 015770181567
      </Typography>

      {/* 🗓️ Öffnungszeiten-Liste */}
     {/* 🕒 Öffnungszeiten-Box */}
<Box
  sx={{
    display: "flex",
    alignItems: "stretch",
    gap: 3,
    justifyContent: { xs: "center", md: "flex-start" },
    background: "rgba(255,255,255,0.65)",
    borderRadius: "25px",
    p: { xs: 3, md: 4 },
    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
    backdropFilter: "blur(6px)",
    width: "100%",
    maxWidth: 450,
    mx: { xs: "auto", md: 0 },
  }}
>
  {/* ⏰ Icon in goldener Kugel */}
  <Box
    sx={{
      bgcolor: "#C99846",
      width: 60,
      height: 60,
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontSize: "1.8rem",
      flexShrink: 0,
      animation: "pulseClock 2s infinite ease-in-out",
      boxShadow: "0 0 15px rgba(201,152,70,0.5)",
      "@keyframes pulseClock": {
        "0%,100%": { transform: "scale(1)" },
        "50%": { transform: "scale(1.15)" },
      },
    }}
  >
    🕒
  </Box>

  {/* 📅 Zeiten – linksbündig, mit gleichmäßigem Abstand */}
  <Box
    sx={{
      flexGrow: 1,
      display: "grid",
      gridTemplateColumns: "1fr auto",
      rowGap: 1,
      columnGap: 2,
      alignItems: "center",
      color: "#3E2C1C",
      fontSize: { xs: "1rem", md: "1.05rem" },
    }}
  >
    <Typography sx={{ fontWeight: 600 }}>Montag</Typography>
     <Typography>Geschlossen</Typography>

    <Typography sx={{ fontWeight: 600 }}>Dienstag</Typography>
    <Typography>12:00 – 22:30 Uhr</Typography>

    <Typography sx={{ fontWeight: 600 }}>Mittwoch</Typography>
    <Typography>12:00 – 22:30 Uhr</Typography>

    <Typography sx={{ fontWeight: 600 }}>Donnerstag</Typography>
    <Typography>12:00 – 22:30 Uhr</Typography>

    <Typography sx={{ fontWeight: 600 }}>Freitag</Typography>
    <Typography>12:00 – 22:30 Uhr</Typography>

    <Typography sx={{ fontWeight: 600 }}>Samstag</Typography>
    <Typography>12:00 – 22:30 Uhr</Typography>

    <Typography sx={{ fontWeight: 600 }}>Sonntag</Typography>
    <Typography>12:00 – 22:30 Uhr</Typography>
  </Box>
</Box>

    </Box>
  </Box>
</Box>


  {/* 🌙 FOOTER SECTION */}
          <Box
        sx={{
          bgcolor: "#0B2341",
          color: "white",
          py: { xs: 6, md: 10 },
          textAlign: "center",
          mt: 8,
          position: "relative",
        }}
      >
        <Container maxWidth="lg">
          {/* 📍 Adresse */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: "#C99846",
              mb: 2,
              fontSize: { xs: "1.1rem", md: "1.3rem" },
            }}
          >
            📍 Restaurant Marrakesch Dortmund
          </Typography>
          <Typography sx={{ mb: 1 }}>
            Münsterstraße 99, 44145 Dortmund
          </Typography>
          <Typography sx={{ mb: 4 }}>📞 015770181567</Typography>

          {/* ✨ Trennlinie */}
          <Box
            sx={{
              width: 80,
              height: 3,
              bgcolor: "#C99846",
              borderRadius: "10px",
              mx: "auto",
              mb: 3,
            }}
          />

          {/* 🧡 Copyright */}
          <Typography
            variant="body2"
            sx={{
              opacity: 0.8,
              fontSize: "0.9rem",
            }}
          >
            © {new Date().getFullYear()} Restaurant Marrakesch Dortmund — Alle Rechte vorbehalten.
          </Typography>
        </Container>
      </Box>

      {/* 💬 SCHWEBENDER SOCIAL BUTTON — mittig rechts */}
      <Box
        sx={{
          position: "fixed",
          top: "50%",
          right: 24,
          transform: "translateY(-50%)",
          zIndex: 1500,
          display: "flex",
          alignItems: "center",
          gap: 1.5,
        }}
      >
        {/* 💬 Textfeld „Fragen?“ links vom Button */}
        {!open && (
   <Box
  onClick={() => setOpen(!open)}
  sx={{
    position: "relative",
    bgcolor: "rgba(255, 255, 255, 0.2)", // halbtransparent
    color: "black",
    backdropFilter: "blur(6px)", // weicher Glas-Effekt
    border: "1.5px solid rgba(255, 255, 255, 0.4)",
    px: 3,
    py: 1.3,
    borderRadius: "30px",
    fontWeight: 600,
    fontSize: "1rem",
    textShadow: "0 0 8px rgba(255,255,255,0.6)", // leichter Glanz
    boxShadow: "0 6px 20px rgba(201,152,70,0.3)", // goldener Schatten
    cursor: "pointer",
    overflow: "hidden",
    transition: "all 0.4s ease",
    animation: "floatText 3s ease-in-out infinite",
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: "0 8px 25px rgba(201,152,70,0.5)",
      background: "rgba(255, 255, 255, 0.3)",
    },

    // ✨ sanftes Schweben
    "@keyframes floatText": {
      "0%, 100%": { transform: "translateX(0)" },
      "50%": { transform: "translateX(-6px)" },
    },

    // 🌈 Schimmernder Lichteffekt (mit pseudo-Element)
    "&::after": {
      content: '""',
      position: "absolute",
      top: 0,
      left: "-100%",
      width: "100%",
      height: "100%",
      background:
        "linear-gradient(120deg, transparent, rgba(255,255,255,0.6), transparent)",
      animation: "shine 3s infinite",
    },
    "@keyframes shine": {
      "0%": { left: "-100%" },
      "50%": { left: "100%" },
      "100%": { left: "100%" },
    },
  }}
>
  🌟 Social Media
</Box>

        )}

        {/* 🌍 Haupt-Button mit Glow & Pulse */}
        <Box
          sx={{
            position: "relative",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Halo-Effekt */}
          <Box
            sx={{
              position: "absolute",
              width: 70,
              height: 70,
              borderRadius: "50%",
              bgcolor: "rgba(201, 152, 70, 0.35)",
              animation: "pulseGold 2s infinite ease-out",
              zIndex: 0,
              "@keyframes pulseGold": {
                "0%": { transform: "scale(0.9)", opacity: 1 },
                "70%": { transform: "scale(1.6)", opacity: 0 },
                "100%": { transform: "scale(0.9)", opacity: 0 },
              },
            }}
          />

          <Fab
            onClick={() => setOpen(!open)}
            sx={{
              bgcolor: "#C99846",
              color: "white",
              "&:hover": { bgcolor: "#b6873e" },
              boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
              zIndex: 1,
              transform: open ? "rotate(45deg)" : "scale(1)",
              transition: "all 0.4s ease",
              animation: !open ? "floatBtn 3s ease-in-out infinite" : "none",
              "@keyframes floatBtn": {
                "0%, 100%": { transform: "translateY(0)" },
                "50%": { transform: "translateY(-4px)" },
              },
            }}
          >
            {open ? <CloseIcon /> : <ShareIcon sx={{ fontSize: 28 }} />}
          </Fab>
        </Box>

        {/* ✨ Social Media Buttons — horizontal nach links */}
        <Box
          sx={{
            position: "absolute",
            right: 80,
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: 2,
          }}
        >
          <Zoom in={open}>
            <Tooltip title="Instagram" placement="top">
              <Fab
                size="medium"
                sx={{
                  bgcolor: "white",
                  border: "2px solid #C99846",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
                  "&:hover": {
                    transform: "scale(1.15)",
                    boxShadow: "0 10px 25px rgba(201,152,70,0.5)",
                  },
                  transition: "all 0.3s ease",
                }}
                href="https://www.instagram.com/marrakesch_restaurant/"
                target="_blank"
              >
                <Box
                  component="img"
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                  alt="Instagram"
                  sx={{ width: 30, height: 30 }}
                />
              </Fab>
            </Tooltip>
          </Zoom>

          <Zoom in={open}>
            <Tooltip title="TikTok" placement="top">
              <Fab
                size="medium"
                sx={{
                  bgcolor: "white",
                  border: "2px solid #C99846",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
                  "&:hover": {
                    transform: "scale(1.15)",
                    boxShadow: "0 10px 25px rgba(201,152,70,0.5)",
                  },
                  transition: "all 0.3s ease",
                }}
                href="https://www.tiktok.com/discover/marrakesch-restaurant-dortmund"
                target="_blank"
              >
                <Box
                  component="img"
                  src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tiktok.svg"
                  alt="TikTok"
                  sx={{
                    width: 28,
                    height: 28,
                    filter:
                      "invert(12%) sepia(92%) saturate(7481%) hue-rotate(340deg) brightness(90%) contrast(107%)",
                  }}
                />
              </Fab>
            </Tooltip>
          </Zoom>

          <Zoom in={open}>
            <Tooltip title="WhatsApp" placement="top">
              <Fab
                size="medium"
                sx={{
                  bgcolor: "#25D366",
                  color: "white",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.25)",
                  "&:hover": { bgcolor: "#1ebe5d", transform: "scale(1.15)" },
                  transition: "all 0.3s ease",
                }}
                href="https://wa.me/49123456789?text=Hallo%20Restaurant%20Marrakech!"
                target="_blank"
              >
                <WhatsAppIcon sx={{ fontSize: 28 }} />
              </Fab>
            </Tooltip>
          </Zoom>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
