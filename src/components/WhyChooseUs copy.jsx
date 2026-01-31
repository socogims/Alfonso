import {
  Box,
  Container,
  Typography,
  Grid,
} from "@mui/material";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CreditCardIcon from "@mui/icons-material/CreditCard";

export default function PourquoiChoisir() {
  const items = [
    {
      title: "Rachat cash de votre Véhicule",
      desc: "Nous assurons un rachat rapide de votre voiture à Paris avec un paiement cash immédiat. Estimation 100% gratuite et sans engagement.",
      img: "/car.png",
      icon: <ReceiptLongIcon />,
    },
    {
      title: "Retrait du véhicule à Paris",
      desc: "Un expert automobile se déplace directement chez vous à Paris. Nous prenons en charge l’enlèvement même pour les véhicules non roulants.",
      img: "/car.png",
      icon: <AccessTimeIcon />,
    },
    {
      title: "Paiement Sécurisé et Immédiat",
      desc: "Transaction sécurisée par virement bancaire ou chèque certifié avec gestion complète des démarches administratives.",
      img: "/car.png",
      icon: <CreditCardIcon />,
    },
  ];

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
        <Box sx={{ textAlign: "center", mb: { xs: 8, md: 10 } }}>
          <Typography
            variant="h3"
            sx={{
              color: "#fff",
              fontWeight: 800,
              fontSize: { xs: "2rem", md: "2.6rem" },
            }}
          >
            Pourquoi choisir notre service de rachat auto à Paris ?
          </Typography>
        </Box>

        {/* Grid */}
        <Grid container spacing={4} justifyContent="center">
          {items.map((item, i) => (
            <Grid key={i} item xs={12} md={4} display="flex" justifyContent="center">
              <Box
                sx={{
                  bgcolor: "rgba(255,255,255,0.04)",
                  borderRadius: "26px",
                  overflow: "hidden",
                  width: "100%",
                  maxWidth: 420,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
                  transition: "all 0.4s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 18px 50px rgba(255,106,33,0.35)",
                  },
                }}
              >
                {/* Bild */}
                <Box
                  component="img"
                  src={item.img}
                  alt={item.title}
                  sx={{
                    width: "100%",
                    height: 230,
                    objectFit: "cover",
                  }}
                />

                {/* Content */}
                <Box sx={{ p: 4, textAlign: "center" }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      mx: "auto",
                      mb: 2,
                      borderRadius: "50%",
                      bgcolor: "rgba(255,106,33,0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#ff6a21",
                      fontSize: 28,
                    }}
                  >
                    {item.icon}
                  </Box>

                  <Typography
                    variant="h6"
                    sx={{
                      color: "#fff",
                      fontWeight: 800,
                      mb: 1.5,
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.75)",
                      fontSize: "1rem",
                      lineHeight: 1.7,
                    }}
                  >
                    {item.desc}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Footer Hinweis */}
        <Typography
          sx={{
            textAlign: "center",
            mt: 8,
            color: "rgba(255,255,255,0.6)",
            fontSize: "0.95rem",
          }}
        >
          ⓘ Service disponible dans toute la région de Paris (75000) et ses environs
        </Typography>
      </Container>
    </Box>
  );
}
