import { Box, Container, Grid, Typography, Stack, Link } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

export default function Footer() {
  const quickLinks = [
    { name: "Standort", href: "#standort" },
    { name: "Angebot", href: "#angebot" },
    { name: "Events", href: "#events" },
    { name: "Über uns", href: "#ueber-uns" },
    { name: "Kontakt", href: "#kontakt" },
    { name: "Catering", href: "/catering" },
  ];

  const infoLinks = [
    { name: "Impressum", href: "/impressum" },
    { name: "Datenschutz", href: "/datenschutz" },
    { name: "AGB", href: "/agb" },
  ];

  const phone = "0176311298926";
  const email = "alfonso.jordao.pinto@googlemail.com";

  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(180deg, #15110f 0%, #0b0a09 100%)",
        color: "#fff",
        pt: 8,
        pb: 4,
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
      itemScope
      itemType="https://schema.org/FoodTruck"
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={6}
          justifyContent="center"
          textAlign={{ xs: "center", md: "left" }}
        >
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            <Typography sx={{ fontWeight: 800, mb: 2, color: "primary.main" }}>
              Philly Cheesesteak & Smashburger
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.7)" }}>
              Foodtruck & Catering aus Castrop-Rauxel. Philly Cheesesteaks, Smashburger
              und Beilagen – frisch vom Grill.
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            md={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            <Typography sx={{ fontWeight: 800, mb: 2, color: "primary.main" }}>
              Schnellzugriff
            </Typography>
            <Stack spacing={1}>
              {quickLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  underline="none"
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </Stack>
          </Grid>

          <Grid
            item
            xs={12}
            md={3}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Stack spacing={2} alignItems={{ xs: "center", md: "flex-start" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <PhoneIcon sx={{ color: "primary.main" }} />
                <Typography itemProp="telephone">{phone}</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <EmailIcon sx={{ color: "primary.main" }} />
                <Typography itemProp="email">{email}</Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 6,
            pt: 3,
            borderTop: "1px solid rgba(255,255,255,0.08)",
            textAlign: "center",
            color: "rgba(255,255,255,0.6)",
            fontSize: "0.9rem",
          }}
        >
          <Typography component="p" sx={{ mb: 1 }}>
            © {new Date().getFullYear()} Philly Cheesesteak & Smashburger. Alle Rechte vorbehalten.
          </Typography>

          <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap">
            {infoLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                underline="hover"
                sx={{ color: "rgba(255,255,255,0.6)" }}
              >
                {item.name}
              </Link>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
