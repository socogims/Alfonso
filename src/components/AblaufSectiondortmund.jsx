import {
  Box,
  Container,
  Typography,
  Grid,
} from "@mui/material";

import AssignmentIcon from "@mui/icons-material/Assignment";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import HandshakeIcon from "@mui/icons-material/Handshake";
import PaymentsIcon from "@mui/icons-material/Payments";
import VerifiedIcon from "@mui/icons-material/Verified";

function StepCard({ number, icon, title, desc }) {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        textAlign: "center",
        p: 4,
        flexGrow: 1,
        minHeight: 280,
        borderRadius: 4,
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        transition: "all .25s ease",
        overflow: "hidden",
        "&:hover": {
          transform: "translateY(-6px)",
          background: "rgba(169,28,26,0.08)",
          borderColor: "#A91C1A",
        },
      }}
    >
      <Typography
        sx={{
          position: "absolute",
          top: 12,
          right: 16,
          fontSize: "4rem",
          fontWeight: 900,
          color: "rgba(255,255,255,0.06)",
          pointerEvents: "none",
        }}
      >
        {number}
      </Typography>

      <Box sx={{ color: "#A91C1A", mb: 2, fontSize: 32 }}>
        {icon}
      </Box>

      <Typography
        sx={{
          fontWeight: 700,
          color: "#fff",
          mb: 2,
          fontSize: "1.05rem",
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          color: "rgba(255,255,255,0.75)",
          fontSize: "0.95rem",
          lineHeight: 1.7,
          whiteSpace: "pre-line",
          wordBreak: "break-word",
        }}
      >
        {desc}
      </Typography>
    </Box>
  );
}

export default function AblaufCardsSection() {
  const steps = [
    {
      number: "01",
      icon: <AssignmentIcon />,
      title: "Auto in Dortmund bewerten lassen",
      desc: `
Fordern Sie noch heute Ihr kostenloses und unverbindliches Angebot für den 
Autoankauf in Dortmund an. Unsere Experten prüfen Ihr Fahrzeug individuell 
nach den aktuellen Marktpreisen in Dortmund, Hörde, Aplerbeck, Hombruch 
und allen weiteren Stadtteilen. So erhalten Sie einen fairen, transparenten 
Preis für Ihren Gebrauchtwagen, Unfallwagen oder Ihr Auto ohne TÜV.
      `,
    },
    {
      number: "02",
      icon: <EventAvailableIcon />,
      title: "Termin in Dortmund vereinbaren",
      desc: `
Vereinbaren Sie bequem einen Termin direkt bei Ihnen vor Ort in Dortmund 
egal ob Innenstadt, Hörde, Hombruch, Aplerbeck oder anderen Stadtteilen. 
Unser Service umfasst die Fahrzeugprüfung und Abholung in ganz Dortmund 
unkompliziert, schnell und für Sie völlig kostenlos. So sparen Sie Zeit und 
Aufwand beim Auto verkaufen in Dortmund.
      `,
    },
    {
      number: "03",
      icon: <HandshakeIcon />,
      title: "Festen Preis vor Ort erhalten",
      desc: `
Nach der Besichtigung Ihres Fahrzeugs vor Ort in Dortmund erhalten Sie 
ein verbindliches Angebot zum Autoankauf. Wir garantieren einen fairen  
Festpreis für Ihr Auto 
in Dortmund, Hörde, Aplerbeck, Hombruch und Umgebung – transparent, 
ohne Nachverhandlungen und direkt vor Ort.
      `,
    },
    {
      number: "04",
      icon: <PaymentsIcon />,
      title: "Sofortige Auszahlung",
      desc: `
Beim Autoankauf in Dortmund erhalten Sie die Auszahlung sofort, 
wahlweise per Echtzeitüberweisung oder bar vor Ort. So können 
Sie Ihr Auto in Dortmund stressfrei verkaufen und direkt von unserem 
schnellen, sicheren Service profitieren 
– auch in allen Stadtteilen wie Hörde, Hombruch oder Aplerbeck.
      `,
    },
    {
      number: "05",
      icon: <VerifiedIcon />,
      title: "Abmeldung in Dortmund",
      desc: `
Auf Wunsch übernehmen wir die komplette Abmeldung Ihres Fahrzeugs bei der Zulassungsstelle in Dortmund. 
Sie erhalten eine offizielle Bestätigung, sodass Ihr Auto vollständig abgemeldet ist. 
Unser Service deckt alle Stadtteile Dortmunds ab – von der Innenstadt über Hörde und Aplerbeck bis Hombruch.
      `,
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 14 },
        background:
          "linear-gradient(180deg, #0f1020 0%, #14162e 100%)",
      }}
    >
      <Container maxWidth="xl">
        {/* Titel */}
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
            Auto verkaufen in{" "}
            <Box component="span" sx={{ color: "#A91C1A" }}>
              Dortmund
            </Box>{" "}
            – so einfach geht’s
          </Typography>

          <Typography
            sx={{
              mt: 3,
              color: "rgba(255,255,255,0.7)",
              maxWidth: 760,
              mx: "auto",
              fontSize: "1.05rem",
              lineHeight: 1.8,
            }}
          >
            Mit unserem einfachen Ablauf für den Autoankauf in Dortmund und Umgebung, inklusive Hörde, Hombruch, Aplerbeck und allen Stadtteilen, verkaufen Sie Ihr Auto schnell, fair und zuverlässig. Von der kostenlosen Bewertung über die Abholung bis hin zur sofortigen Auszahlung – wir sind Ihr regionaler Partner für den Autoankauf Dortmund.
          </Typography>
        </Box>

        {/* Steps */}
        <Grid
          container
          spacing={4}
          alignItems="stretch"
          justifyContent="center"
        >
          {steps.map((step) => (
            <Grid
              item
              xs={12}      // Mobile: 1 pro Reihe
              sm={6}       // Tablet: 2 pro Reihe
              md={6}       // Desktop: 2 pro Reihe
              key={step.number}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <StepCard {...step} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

