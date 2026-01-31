import { useState } from "react";
import { Box, Container, Typography, TextField, Button, Stack, Chip } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import SendIcon from "@mui/icons-material/Send";

export default function ContactSection() {
  const [showForm, setShowForm] = useState(false);

  return (
    <Box
      id="reservation"
      sx={{
        py: { xs: 10, md: 16 },
        background: "linear-gradient(180deg, #0b0a09 0%, #15110f 100%)",
        color: "#fff",
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Chip
            label="Catering & Stand"
            sx={{
              mb: 2,
              color: "primary.main",
              bgcolor: "rgba(122,31,27,0.12)",
              fontWeight: 700,
            }}
          />
          <Typography variant="h3" sx={{ fontWeight: 900, mb: 2 }}>
            Buch uns für dein Event
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.75)", maxWidth: 680, mx: "auto" }}>
            Festival, Firmenfeier oder private Runde – wir kommen mit dem Grill‑Auto.
            Für den festen Stand in Bochum kannst du ebenfalls anfragen oder reservieren.
          </Typography>
        </Box>

        <Stack direction={{ xs: "column", sm: "row" }} spacing={3} justifyContent="center" mb={6}>
          <Button
            startIcon={<PhoneIcon />}
            variant="contained"
            color="primary"
            href="tel:+492311234567"
          >
            Anrufen
          </Button>
          <Button
            startIcon={<EmailIcon />}
            variant="contained"
            color="secondary"
            href="mailto:hallo@ember-smoke.de"
          >
            E‑Mail
          </Button>
          <Button
            startIcon={<EventAvailableIcon />}
            variant="outlined"
            sx={{ color: "#fff", borderColor: "rgba(255,255,255,0.4)" }}
            onClick={() => setShowForm((prev) => !prev)}
          >
            Anfrageformular
          </Button>
        </Stack>

        {showForm && (
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              mb: 6,
            }}
          >
            <TextField label="Name" variant="filled" fullWidth InputProps={{ sx: { color: "#fff" } }} />
            <TextField label="E-Mail" variant="filled" fullWidth InputProps={{ sx: { color: "#fff" } }} />
            <TextField label="Datum & Uhrzeit" variant="filled" fullWidth InputProps={{ sx: { color: "#fff" } }} />
            <TextField label="Ort / Festival" variant="filled" fullWidth InputProps={{ sx: { color: "#fff" } }} />
            <TextField
              label="Nachricht"
              variant="filled"
              multiline
              rows={4}
              fullWidth
              InputProps={{ sx: { color: "#fff" } }}
            />
            <Button variant="contained" endIcon={<SendIcon />} color="primary">
              Anfrage senden
            </Button>
          </Box>
        )}
      </Container>
    </Box>
  );
}
