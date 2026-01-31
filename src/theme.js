import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#c85b4a",
    },
    secondary: {
      main: "#3e2b28",
    },
    background: {
      default: "#0b0a09",
      paper: "#15110f",
    },
    text: {
      primary: "#f7f2ea",
      secondary: "#d6cfc4",
    },
  },
  typography: {
    fontFamily: "'Source Sans 3', 'Segoe UI', sans-serif",
    h1: { fontWeight: 800, letterSpacing: "-0.5px", fontFamily: "'Oswald', sans-serif" },
    h2: { fontWeight: 800, letterSpacing: "-0.5px", fontFamily: "'Oswald', sans-serif" },
    h3: { fontWeight: 700, fontFamily: "'Oswald', sans-serif" },
  },
});

export default theme;
