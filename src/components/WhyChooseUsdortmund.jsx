import {
  Box,
  Container,
  Typography,
  Grid,
} from "@mui/material";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SecurityIcon from "@mui/icons-material/Security";
import GppGoodIcon from "@mui/icons-material/GppGood";

export default function VorteileWarumWirDortmund() {
  const items = [
    {
      title: "Kostenlose Fahrzeugbewertung",
      desc: "Lassen Sie Ihr Auto in Dortmund kostenlos bewerten. Unsere Bewertung ist unverbindlich, transparent und basiert auf dem aktuellen Markt für den Autoankauf in Dortmund und Umgebung.",
      img: "/autoankauf-dortmund-kostenlose-fahrzeugbewertung.jpg",
      icon: <ReceiptLongIcon />,
    },
    {
      title: "Kostenlose Abholung vor Ort",
      desc: "Wir holen Ihr Fahrzeug direkt bei Ihnen in Dortmund ab – ob Innenstadt, Hörde, Aplerbeck, Hombruch oder Mengede. Auch Unfallwagen oder Autos ohne TÜV.",
      img: "/autoankauf-dortmund-kostenlose-fahrzeugbewertung.jpg",
      icon: <LocalShippingIcon />,
    },
    {
      title: "Sofortige & sichere Auszahlung",
      desc: "Beim Autoankauf in Dortmund erhalten Sie Ihr Geld sofort per Barzahlung oder Echtzeitüberweisung – sicher, transparent und ohne Nachverhandlungen.",
      img: "/autoankauf-dortmund-sichere-bezahlung.jpg",
      icon: <SecurityIcon />,
    },
    {
      title: "Abmeldung in Dortmund inklusive",
      desc: "Auf Wunsch übernehmen wir die komplette Abmeldung Ihres Fahrzeugs bei der Zulassungsstelle Dortmund – selbstverständlich inklusive Abmeldebestätigung.",
      img: "/autoankauf-dortmund-fahrzeug-abmeldung.jpg",
      icon: <GppGoodIcon />,
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
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              color: "#fff",
              fontWeight: 800,
              fontSize: { xs: "2.2rem", md: "2.8rem" },
            }}
          >
            Warum Autoankauf in{" "}
            <Box component="span" sx={{ color: "#ff6a21" }}>
              Dortmund
            </Box>{" "}
            mit Fairankauf.de?
          </Typography>

          <Typography
            sx={{
              mt: 2,
              color: "rgba(255,255,255,0.7)",
              fontSize: "1.05rem",
            }}
          >
            Ihr zuverlässiger Ansprechpartner für einen schnellen, sicheren und fairen
            Autoankauf in Dortmund und Umgebung.
          </Typography>
        </Box>

        {/* SEO Zusatztext */}
        <Typography
          sx={{
            mb: { xs: 6, md: 8 },
            maxWidth: 900,
            mx: "auto",
            color: "rgba(255,255,255,0.8)",
            fontSize: "1.05rem",
            lineHeight: 1.8,
            textAlign: "center",
          }}
        >
          Als regionaler Anbieter für den <strong>Autoankauf in Dortmund</strong> kennen wir
          den lokalen Fahrzeugmarkt genau. Ganz gleich, ob Sie Ihr Auto in der Dortmunder
          Innenstadt, in Hörde, Aplerbeck oder einem anderen Stadtteil verkaufen möchten –
          wir ermöglichen Ihnen einen <strong>schnellen, sicheren und fairen Autoverkauf</strong>.
          Von der kostenlosen Bewertung bis zur sofortigen Auszahlung begleiten wir Sie
          persönlich beim <strong>Auto verkaufen in Dortmund</strong>.
        </Typography>

        {/* Cards */}
        <Grid container spacing={2} justifyContent="center">
          {items.map((item, i) => (
            <Grid
              key={i}
              item
              xs={12}
              sm={6}
              lg={3}
              display="flex"
              justifyContent="center"
            >
              <Box
                sx={{
                  bgcolor: "rgba(255,255,255,0.04)",
                  borderRadius: "26px",
                  overflow: "hidden",
                  width: "100%",
                  maxWidth: 350,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
                  transition: "all 0.4s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 18px 50px rgba(255,106,33,0.35)",
                  },
                }}
              >
                {/* Bild */}
                <Box sx={{ position: "relative" }}>
                  <Box
                    component="img"
                    src={item.img}
                    alt={`${item.title} – Autoankauf Dortmund & Auto verkaufen vor Ort`}
                    sx={{
                      width: "100%",
                      height: 230,
                      objectFit: "cover",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0))",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      bgcolor: "#ff6a21",
                      py: 1.6,
                      px: 2,
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#fff",
                        fontWeight: 800,
                        fontSize: "1.05rem",
                        textAlign: "center",
                      }}
                    >
                      {item.title} in Dortmund
                    </Typography>
                  </Box>
                </Box>

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
      </Container>
    </Box>
  );
}
