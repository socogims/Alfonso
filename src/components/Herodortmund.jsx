import { Box, Container, Typography, Button, Stack } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function HeroDortmund() {
    const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        color: "#fff",
        background: "radial-gradient(circle at right top, #23245a 0%, #0f1020 65%)",
        pt: { xs: 9, md: 2 },
      }}
    >
      {/* Background Glow */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at left, rgba(169,28,26,0.18), transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1400px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 6, md: 4 }}
          alignItems="center"
        >
          {/* ================= LEFT ================= */}
          <Box sx={{ width: { xs: "100%", md: "50%" }, pr: { md: 6 } }}>
            {/* H1 */}
         <Typography
  component="h1"
  sx={{
    fontWeight: 900,
    lineHeight: 1.15,
    mb: 3,
    fontSize: { xs: "2.1rem", md: "3rem" },
  }}
>
  Auto verkaufen{" "}
  <Box component="span" sx={{ color: "primary.main" }}>
    in Dortmund – schnell & fair
  </Box>
</Typography>


            {/* Beschreibung */}
            <Typography
              sx={{
                color: "rgba(255,255,255,0.85)",
                mb: 4,
                fontSize: { xs: "1.05rem", md: "1.15rem" },
                lineHeight: 1.75,
              }}
            >
             Sie möchten Ihr <strong>Auto verkaufen in Dortmund</strong>?
  Fairankauf.de ist Ihr erfahrener Ansprechpartner für den
  <strong>Autoankauf in Dortmund</strong>.
  Egal ob Gebrauchtwagen, Unfallwagen oder Fahrzeug ohne TÜV –
  bei uns können Sie Ihr <strong>Auto schnell verkaufen in Dortmund</strong>,
  inklusive <strong>Sofortauszahlung</strong> und kostenloser Abholung.
            </Typography>

            {/* PRIMARY CTA */}
            <Button
                  component="a"
                  href="/autobewertung-nrw-umgebung"
                  variant="contained"
                  color="primary"
                  sx={{
                    width: "100%",
                    py: { xs: 1.8, md: 2.6 },
                    borderRadius: 999,
                    fontSize: { xs: "1rem", md: "1.2rem" },
                    fontWeight: 800,
                    textTransform: "none",
                    boxShadow: {
                      xs: "0 8px 22px rgba(169,28,26,0.45)",
                      md: "0 14px 40px rgba(169,28,26,0.5)",
                    },
                    "&:hover": {
                      transform: { md: "translateY(-2px)" },
                      boxShadow: "0 20px 55px rgba(169,28,26,0.7)",
                    },
                  }}
                >
                  {isMobile
                    ? "Jetzt Auto bewerten in Dortmund"
                    : "Jetzt Auto bewerten in Dortmund & Angebot erhalten"}
                </Button>

            {/* WhatsApp CTA */}
            <Button
              href="https://wa.me/491622982160"
              target="_blank"
              rel="noopener"
              startIcon={
                <Box component="span" sx={{ fontSize: 22, lineHeight: 1 }}>
                  💬
                </Box>
              }
              sx={{
                mt: 2.2,
                width: "100%",
                py: 1.4,
                borderRadius: 999,
                fontSize: "0.95rem",
                fontWeight: 700,
                textTransform: "none",
                color: "#fff",
                background: "linear-gradient(135deg, #25D366 0%, #1ebe5d 100%)",
                boxShadow: "0 8px 22px rgba(37,211,102,0.35)",
                "&:hover": {
                  background:
                    "linear-gradient(135deg, #1ebe5d 0%, #25D366 100%)",
                  boxShadow: "0 12px 30px rgba(37,211,102,0.55)",
                },
              }}
            >
              WhatsApp Kontakt
            </Button>

            {/* Trust Line */}
            <Typography
              sx={{
                mt: 3,
                fontSize: "0.9rem",
                color: "rgba(255,255,255,0.75)",
              }}
            >
              ✔ Autoankauf Dortmund • ✔ Auto sofort verkaufen • ✔ Barzahlung & Abholung vor Ort
            </Typography>
          </Box>

          {/* ================= RIGHT ================= */}
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              position: "relative",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            {/* SEO H2 */}
            <Typography component="h2" sx={{ position: "absolute", top: -9999 }}>
              Autoankauf Dortmund – Wir kaufen Ihr Auto fair & schnell
            </Typography>

            {/* Glow */}
            <Box
              sx={{
                position: "absolute",
                right: "-15%",
                top: "20%",
                width: 360,
                height: 360,
                background:
                  "radial-gradient(circle, rgba(169,28,26,0.25), transparent 70%)",
                filter: "blur(60px)",
                zIndex: -1,
              }}
            />

            <Box
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: 650,
                transform: { md: "translateX(40px)" },
                borderRadius: 5,
                overflow: "hidden",
                boxShadow: "0 25px 60px rgba(0,0,0,0.6)",
                transition: "transform 0.5s ease",
                "&:hover": {
                  transform: { md: "translateX(40px) scale(1.02)" },
                },
              }}
            >
              {/* Image */}
              <Box
                component="img"
                src="/autoankauf-dortmund-angebot.png"
                alt="Auto verkaufen Dortmund – fairer Autoankauf mit Sofortauszahlung"
                title="Autoankauf Dortmund – Auto verkaufen Dortmund"
                sx={{ width: "100%", display: "block" }}
              />

              {/* Overlay */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.15), rgba(0,0,0,0.65))",
                }}
              />

              {/* Bild-H2 */}
              <Box
                sx={{
                  position: "absolute",
                  top: { xs: 16, md: 24 },
                  left: { xs: 16, md: 24 },
                  zIndex: 10,
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 900,
                    lineHeight: { xs: 1.2, md: 1 },
                    fontSize: { xs: "1.4rem", sm: "1.6rem", md: "2.4rem" },
                    textTransform: "uppercase",
                    color: "#fff",
                  }}
                >
                  Auto verkaufen <br />
                  Dortmund
                </Typography>
              </Box>

              {/* Branding */}
              <Typography
                sx={{
                  position: "absolute",
                  top: 24,
                  right: 24,
                  fontWeight: 700,
                  fontSize: "1.1rem",
                }}
              >
                <Box component="span" sx={{ color: "primary.main" }}>
                  Fair
                </Box>
                <Box component="span" sx={{ color: "#fff" }}>
                  ankauf.de
                </Box>
              </Typography>

              {/* CTA im Bild */}
              <Button
                component="a"
                href="/autobewertung-nrw-umgebung"
                variant="contained"
                color="primary"
                sx={{
                  display: { xs: "none", md: "inline-flex" },
                  position: "absolute",
                  bottom: 24,
                  right: 24,
                  borderRadius: 3,
                  px: 4,
                  py: 1.7,
                  fontWeight: 800,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.45)",
                }}
              >
                Angebot sichern
              </Button>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
