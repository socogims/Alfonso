import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Stack,
  Chip,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import SendIcon from "@mui/icons-material/Send";

export default function ContactSection() {
  const [showForm, setShowForm] = useState(false);
  const phone = "0176311298926";
  const email = "alfonso.jordao.pinto@googlemail.com";

  return (
    <Box
      id="kontakt"
      sx={{
        py: { xs: 10, md: 16 },
        background: "linear-gradient(180deg, #0b0a09 0%, #15110f 100%)",
        color: "#fff",
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Chip
            label="Kontakt & Buchung"
            sx={{
              mb: 2,
              color: "primary.main",
              bgcolor: "rgba(122,31,27,0.12)",
              fontWeight: 700,
            }}
          />
          <Typography variant="h3" sx={{ fontWeight: 900, mb: 2 }}>
            Foodtruck buchen oder Catering anfragen
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.75)", maxWidth: 680, mx: "auto" }}>
            Castrop-Rauxel. Anfrage per Formular oder Mail – und natürlich per Telefon.
          </Typography>
        </Box>

        <Stack spacing={2} sx={{ mb: 5 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, justifyContent: "center" }}>
            <PhoneIcon sx={{ color: "primary.main" }} />
            <Typography>{phone}</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, justifyContent: "center" }}>
            <EmailIcon sx={{ color: "primary.main" }} />
            <Typography>{email}</Typography>
          </Box>
        </Stack>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={3}
          justifyContent="center"
          mb={6}
        >
          <Button
            startIcon={<EmailIcon />}
            variant="contained"
            color="primary"
            href={`mailto:${email}`}
          >
            Anfrage per Mail
          </Button>
          <Button
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
            <TextField label="Ort / Veranstaltung" variant="filled" fullWidth InputProps={{ sx: { color: "#fff" } }} />
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
