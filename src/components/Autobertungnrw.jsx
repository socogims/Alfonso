import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  MenuItem,
  Button,
  Paper,
  
} from "@mui/material";
import emailjs from "@emailjs/browser";
import React from "react"; // <-- Dieser Import fehlt!
const herstellerOptions = [
  "Alfa Romeo",
  "Audi",
  "BMW",
  "Mercedes",
  "Volkswagen",
];

const modellOptions = {
  "Alfa Romeo": ["4C", "Giulia", "Stelvio"],
  Audi: ["A3", "A4", "Q5"],
  BMW: ["X3", "X5", "M3"],
  Mercedes: ["A-Klasse", "C-Klasse", "GLE"],
  Volkswagen: ["Golf", "Passat", "Tiguan"],
};

const monatOptions = [
  "Januar","Februar","März","April","Mai","Juni",
  "Juli","August","September","Oktober","November","Dezember",
];

const jahrOptions = Array.from({ length: 30 }, (_, i) => 2026 - i);

const kmOptions = [
  "Bis zu 50.000 km",
  "Bis zu 100.000 km",
  "Bis zu 150.000 km",
  "Bis zu 225.000 km",
  "Mehr als 225.000 km",
];

const karosserieOptions = [
  "Limousine",
  "Kombi",
  "Coupé",
  "SUV",
  "Cabriolet",
];

const kraftstoffOptions = [
  "Benzin",
  "Diesel",
  "Elektro",
  "Hybrid",
];

const leistungOptions = [
  "100 PS (74 kW)",
  "150 PS (110 kW)",
  "241 PS (177 kW)",
  "300 PS (221 kW)",
  "400 PS (294 kW)",
];

const getriebeOptions = [
  "Manuell",
  "Automatik",
  "Halbautomatik",
];

const tuerenOptions = ["2", "4", "5"];

const farbenOptions = [
  "Schwarz",
  "Weiß",
  "Silber",
  "Blau",
  "Violett",
];

const zustandOptions = [
  "Neuwertig",
  "Guter Zustand",
  "Gebraucht",
  "Defekt",
];

export default function FahrzeugBewertungSection() {
  const [hersteller, setHersteller] = React.useState("Alfa Romeo");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_i4h1imr",
        "template_ygaskzp",
        e.target,
        "3kDBi76cGiJP0MT89"
      )
      .then(() => {
        alert("Anfrage erfolgreich versendet!");
        e.target.reset();
        setHersteller("Alfa Romeo");
      })
      .catch(() => {
        alert("Fehler beim Senden der Anfrage.");
      });
  };

  return (
    <Box
      sx={{
        py: { xs: 6, md: 12 },
        background: "linear-gradient(135deg, #0b0f2a 0%, #14162e 100%)",
      }}
    >
      <Container maxWidth="md">
        {/* Headline */}
        <Typography
          variant="h4"
          sx={{
            color: "#fff",
            fontWeight: 900,
            mb: 2,
            textAlign: "center",
          }}
        >
          Fahrzeugbewertung in NRW & Umgebung anfordern
        </Typography>

        <Typography
          sx={{
            color: "rgba(255,255,255,0.75)",
            textAlign: "center",
            mb: 6,
            fontSize: "1.05rem",
          }}
        >
          Erhalten Sie schnell & unverbindlich eine professionelle Bewertung überall in NRW
        </Typography>

        {/* Form Card */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 6 },
            borderRadius: 6,
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(14px)",
            border: "1px solid rgba(255,255,255,0.18)",
            boxShadow: "0 30px 70px rgba(0,0,0,0.75)",
          }}
        >
          <Box component="form" onSubmit={sendEmail}>
            {/* Fahrzeug */}
            <FormSection
              title="Fahrzeug"
              subtitle="Grundinformationen zu Ihrem Fahrzeug"
            >
              <Grid item xs={12} sm={6}>
                <StyledSelect
                  label="Hersteller"
                  name="hersteller"
                  value={hersteller}
                  onChange={(e) => setHersteller(e.target.value)}
                  options={herstellerOptions}
                />
              </Grid>

                    <Grid
                        item
                        xs={12}
                        sm={6}
                        sx={{
                            minWidth: 150, // 👈 Mindestbreite
                        }}
                        >
                        <StyledSelect
                            label="Modell"
                            name="modell"
                            options={modellOptions[hersteller] || []}
                        />
                        </Grid>


                        <Grid  
                        item
                        xs={12}
                        sm={6}
                        sx={{
                            minWidth: 100, // 👈 Mindestbreite
                        }}
                        >
                <StyledSelect
                  label="Monat"
                  name="erstzulassung_monat"
                  options={monatOptions}
                />
              </Grid>

              <Grid  item
                        xs={12}
                        sm={6}
                        sx={{
                            minWidth: 100, // 👈 Mindestbreite
                        }}
                        >
                <StyledSelect
                  label="Jahr"
                  name="erstzulassung_jahr"
                  options={jahrOptions}
                />
              </Grid>
            </FormSection>

            {/* Technik */}
            <FormSection
              title="Technische Daten"
              subtitle="Motor, Laufleistung & Ausstattung"
            >
              <Grid  item
                        xs={12}
                        sm={6}
                        sx={{
                            minWidth: 160, // 👈 Mindestbreite
                        }}
                        >
                <StyledSelect
                  label="Kilometerstand"
                  name="kilometerstand"
                  options={kmOptions}
                />
              </Grid>

              <Grid  item
                        xs={12}
                        sm={6}
                        sx={{
                            minWidth: 120, // 👈 Mindestbreite
                        }}
                        >
                <StyledSelect
                  label="Leistung"
                  name="leistung"
                  options={leistungOptions}
                />
              </Grid>

              <Grid  item
                        xs={12}
                        sm={6}
                        sx={{
                            minWidth: 120, // 👈 Mindestbreite
                        }}
                        >
                <StyledSelect
                  label="Kraftstoff"
                  name="kraftstoff"
                  options={kraftstoffOptions}
                />
              </Grid>

              <Grid  item
                        xs={12}
                        sm={6}
                        sx={{
                            minWidth: 120, // 👈 Mindestbreite
                        }}
                        >
                <StyledSelect
                  label="Getriebe"
                  name="getriebe"
                  options={getriebeOptions}
                />
              </Grid>
            </FormSection>

            {/* Zustand */}
            <FormSection
              title="Zustand & Standort"
              subtitle="Letzte Angaben für die Bewertung"
            >
              <Grid  item
                        xs={12}
                        sm={6}
                        sx={{
                            minWidth: 120, // 👈 Mindestbreite
                        }}
                        >
                <StyledSelect
                  label="Zustand"
                  name="zustand"
                  options={zustandOptions}
                />
              </Grid>

              <Grid  item
                        xs={12}
                        sm={6}
                        sx={{
                            minWidth: 100, // 👈 Mindestbreite
                        }}
                        >
                <StyledTextField label="PLZ" name="plz" />
              </Grid>
            </FormSection>

            {/* Kontaktdaten */}
<FormSection
  title="Kontaktdaten"
  subtitle="Damit wir Ihnen Ihr Angebot zusenden können"
>
  <Grid item xs={12} sm={6}>
    <StyledTextField
      label="Ihr Name"
      name="name"
      placeholder="Max Mustermann"
    />
  </Grid>

  <Grid item xs={12} sm={6}>
    <StyledTextField
      label="Telefonnummer"
      name="telefon"
      placeholder="+49 170 1234567"
    />
  </Grid>


</FormSection>


            {/* CTA */}
            <Box sx={{ textAlign: "center", mt: 6 }}>
              <Button
                type="submit"
                size="large"
                variant="contained"
                sx={{
                  px: 10,
                  py: 2.3,
                  fontWeight: 800,
                  fontSize: "1.15rem",
                  borderRadius: 6,
                  background:
                    "linear-gradient(135deg, #5c6bc0 0%, #ab47bc 100%)",
                  boxShadow: "0 25px 60px rgba(92,107,192,0.6)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-3px)",
                    boxShadow: "0 35px 90px rgba(171,71,188,0.85)",
                  },
                }}
              >
                🚗 Bewertung jetzt anfordern
              </Button>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

// -----------------------------
// Section Wrapper
// -----------------------------
function FormSection({ title, subtitle, children }) {
  return (
    <Box
      sx={{
        mb: 6,
        p: { xs: 3, md: 4 },
        borderRadius: 4,
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.15)",
      }}
    >
      <Typography
        sx={{
          color: "#fff",
          fontWeight: 800,
          fontSize: "1.2rem",
          mb: 0.5,
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          color: "rgba(255,255,255,0.7)",
          fontSize: "0.95rem",
          mb: 3,
        }}
      >
        {subtitle}
      </Typography>

      <Grid container spacing={3}>
        {children}
      </Grid>
    </Box>
  );
}

// -----------------------------
// Styled Inputs
// -----------------------------
function StyledSelect({ label, options, value, onChange, ...props }) {
  return (
    <TextField
      select
      fullWidth
      required
      label={label}
      value={value || ""}
      onChange={onChange}
      sx={inputStyle}
      {...props}
    >
      <MenuItem value="">
        <em>Bitte auswählen</em>
      </MenuItem>
      {options.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>
  );
}

function StyledTextField(props) {
  return <TextField fullWidth required sx={inputStyle} {...props} />;
}

// -----------------------------
// Shared Input Style
// -----------------------------
const inputStyle = {
  backgroundColor: "rgba(255,255,255,0.12)",
  borderRadius: 3,
  "& .MuiOutlinedInput-root": {
    color: "#fff",
    fontSize: "1.05rem",
    "& fieldset": {
      borderColor: "rgba(255,255,255,0.5)",
    },
    "&:hover fieldset": {
      borderColor: "primary.main",
    },
    "&.Mui-focused fieldset": {
      borderColor: "primary.main",
      borderWidth: 2,
    },
  },
  "& label": {
    color: "rgba(255,255,255,0.8)",
    fontWeight: 600,
  },
  "& label.Mui-focused": {
    color: "primary.main",
  },
};