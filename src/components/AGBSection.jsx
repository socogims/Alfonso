import { Box, Container, Typography, List, ListItem, ListItemText } from "@mui/material";

export default function AGBSection() {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 16 },
        background: "linear-gradient(180deg, #0b0a09 0%, #15110f 100%)",
        color: "#fff",
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography variant="h3" sx={{ fontWeight: 900, mb: 2 }}>
            Allgemeine Geschäftsbedingungen (AGB)
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.75)" }}>
            Für Catering und Veranstaltungen mit dem Ember & Smoke Grill‑Auto.
          </Typography>
        </Box>

        <List sx={{ color: "rgba(255,255,255,0.85)", fontSize: "1rem", lineHeight: 1.7 }}>
          <ListItem>
            <ListItemText primary="1. Reservierungen: Eine Reservierung ist bis 24 Stunden vorher kostenfrei stornierbar." />
          </ListItem>
          <ListItem>
            <ListItemText primary="2. Gruppen & Events: Für Gruppen ab 8 Personen gelten individuell vereinbarte Menüs und Zeiten." />
          </ListItem>
          <ListItem>
            <ListItemText primary="3. No-Show: Bei Nichterscheinen behalten wir uns vor, eine Ausfallpauschale zu berechnen." />
          </ListItem>
          <ListItem>
            <ListItemText primary="4. Allergene: Allergene sind in der Karte gekennzeichnet. Bitte informieren Sie uns vorab." />
          </ListItem>
          <ListItem>
            <ListItemText primary="5. Datenschutz: Personenbezogene Daten werden gemäß unserer Datenschutzerklärung verarbeitet." />
          </ListItem>
        </List>
      </Container>
    </Box>
  );
}
