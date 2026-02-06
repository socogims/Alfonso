import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import AGBSection from "./pages/AGBSection";
import ContactSection from "./pages/ContactSection";
import Catering from "./pages/Catering";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/agb" element={<AGBSection />} />
          <Route path="/kontakt" element={<ContactSection />} />
          <Route path="/catering" element={<Catering />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
