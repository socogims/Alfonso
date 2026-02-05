import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";


export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);


  const navItems = [
    { name: "Catering", href: "#catering" },
    { name: "Speisekarte", href: "#menu" },
    { name: "Grill‑Auto", href: "#experience" },
    { name: "Events", href: "#events" },
    { name: "Anfrage", href: "#reservation" },
    { name: "Standort", href: "#standort" },
  ];

  return (
    <>
      {/* APPBAR */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: "rgba(11,10,9,0.85)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <Toolbar
          sx={{
            maxWidth: 1200,
            width: "100%",
            mx: "auto",
            px: 2,
            minHeight: { xs: 64, md: 72 },
          }}
        >
         {/* LOGO mit Navigation */}
<Box
  onClick={() => (window.location.href = "/")}
  sx={{
    display: "flex",
    alignItems: "center",
    mr: { xs: 1.5, md: 4 },
    cursor: "pointer",
  }}
>
  <Box
    sx={{
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      bgcolor: "transparent",
      border: "none",
      borderRadius: 0,
      px: { xs: 0.6, md: 0.8 },
      py: { xs: 0.4, md: 0.5 },
      boxShadow: "none",
      transition: "transform 0.3s ease",
      "&:hover": { transform: "translateY(-1px) scale(1.02)" },
    }}
  >
    <Box
      component="img"
      src="/logo4.png"
      alt="Ember & Smoke Grill‑Auto"
      sx={{
        height: { xs: 80, md: 96 },
        width: "auto",
        display: "block",
        transform: "scale(2)",
        transformOrigin: "center",
        filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.55))",
      }}
    />
  </Box>
</Box>



          {/* DESKTOP NAV */}
{/* DESKTOP NAV */}
<Box 
  sx={{ 
    flexGrow: 1, 
    display: { xs: "none", md: "flex" }, 
    gap: 3, 
    ml: { md: 5 } // <-- Abstand zwischen Logo und Navigation
  }}
>
  {navItems.map((item, idx) => {
    if (item.dropdown) {
      return (
        <Box
          key={idx}
          sx={{
            position: "relative",
            "&:hover .dropdown-menu": { display: "flex" },
          }}
        >
          <Button
            endIcon={<ExpandMoreIcon sx={{ fontSize: 20, color: "#fff" }} />}
            sx={{
              color: "#fff",
              textTransform: "none",
              fontWeight: 600,
              position: "relative",
              "&:after": {
                content: '""',
                position: "absolute",
                left: 0,
                bottom: -4,
                width: "0%",
                height: 2,
                bgcolor: "primary.main",
                transition: "width 0.3s ease",
              },
              "&:hover:after": { width: "100%" },
            }}
          >
            {item.name}
          </Button>

          {/* Dropdown Menu */}
          <Box
            className="dropdown-menu"
            sx={{
              position: "absolute",
              top: "100%",
              left: 0,
              display: "none",
              flexDirection: item.name === "Einsatzgebiete" ? "row" : "column",
              flexWrap: item.name === "Einsatzgebiete" ? "wrap" : "nowrap",
              minWidth: item.name === "Einsatzgebiete" ? 400 : 180,
              p: 2,
              bgcolor: "#14162e",
              borderRadius: 1,
              zIndex: 10,
              boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
            }}
          >
            {item.name === "Einsatzgebiete" ? (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {item.dropdown.map((subItem, i) => (
                  <Button
                    key={i}
                    href={subItem.href}
                    sx={{
                      textTransform: "none",
                      color: "#fff",
                      bgcolor: "rgba(255,255,255,0.05)",
                      px: 2,
                      py: 1,
                      borderRadius: 1,
                      fontWeight: 600,
                      "&:hover": { bgcolor: "rgba(169,28,26,0.15)" },
                    }}
                  >
                    {subItem.name}
                  </Button>
                ))}
              </Box>
            ) : (
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                {item.dropdown.map((subItem, i) => (
                  <Button
                    key={i}
                    href={subItem.href}
                    sx={{
                      justifyContent: "flex-start",
                      textTransform: "none",
                      color: "#fff",
                      px: 2,
                      py: 1,
                      "&:hover": { bgcolor: "rgba(169,28,26,0.1)" },
                    }}
                  >
                    {subItem.name}
                  </Button>
                ))}
              </Box>
            )}
          </Box>
        </Box>
      );
    } else {
      return (
        <Button
          key={idx}
          href={item.href}
          sx={{ color: "#fff", textTransform: "none", fontWeight: 600 }}
        >
          {item.name}
        </Button>
      );
    }
  })}
</Box>





          {/* CTA + BURGER */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, ml: "auto" }}>
            {/* Desktop CTA */}
            <Button
              variant="contained"
              color="primary"
              href="#reservation"
              sx={{
                display: { xs: "none", md: "inline-flex" },
                borderRadius: 999,
                fontWeight: 800,
                textTransform: "none",
                fontSize: "0.95rem",
                px: 3.5,
                py: 1.2,
                boxShadow: "0 8px 25px rgba(169,28,26,0.45)",
                "&:hover": { transform: "translateY(-1px)", boxShadow: "0 12px 35px rgba(169,28,26,0.65)" },
              }}
            >
              Anfrage senden
            </Button>

            {/* Mobile WhatsApp 
            <IconButton
              component="a"
              href="https://wa.me/491622982160?text=Hallo,%20je%20souhaite%20vendre%20ma%20voiture"
              target="_blank"
              sx={{
                display: { xs: "flex", md: "none" },
                width: 46,
                height: 46,
                bgcolor: "#25D366",
                color: "#fff",
                animation: "pulse 2.2s infinite",
                "&:hover": { bgcolor: "#1ebe5d", transform: "scale(1.08)" },
                "@keyframes pulse": {
                  "0%": { boxShadow: "0 0 0 0 rgba(37, 211, 102, 0.6)" },
                  "70%": { boxShadow: "0 0 0 10px rgba(37, 211, 102, 0)" },
                  "100%": { boxShadow: "0 0 0 0 rgba(37, 211, 102, 0)" },
                },
              }}
            >
              <WhatsAppIcon sx={{ fontSize: 26 }} />
            </IconButton>
*/}
            {/* Mobile Menu */}
            <IconButton
              onClick={() => setMobileOpen(true)}
              sx={{
                width: 50,
                height: 50,
                borderRadius: "50%",
                bgcolor: "rgba(255,255,255,0.08)",
                transition: "all 0.3s",
                "&:hover": { bgcolor: "rgba(255,255,255,0.15)", transform: "scale(1.05)" },
              }}
            >
              <MenuIcon sx={{ fontSize: 32 }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      

      {/* MOBILE DRAWER mit stylischem Header */}
<Drawer
  anchor="right"
  open={mobileOpen}
  onClose={() => setMobileOpen(false)}
  sx={{
    "& .MuiDrawer-paper": {
      width: 280,
      background: "linear-gradient(180deg, #1a1411 0%, #0b0a09 100%)",
      color: "#fff",
      pt: 5,
      px: 3,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
  }}
>
  {/* HEADER: Logo + Sprache */}
  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 6 }}>
  <Box
    onClick={() => window.location.href = "/"}
    sx={{
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      bgcolor: "transparent",
      border: "none",
      borderRadius: 0,
      px: 0.8,
      py: 0.6,
      boxShadow: "none",
      cursor: "pointer",
      transition: "transform 0.3s",
      "&:hover": { transform: "translateY(-1px) scale(1.02)" },
    }}
  >
    <Box
      component="img"
      src="/logo4.png"
      alt="Ember & Smoke Grill‑Auto"
      sx={{
        height: 80,
        width: "auto",
        display: "block",
        transform: "scale(1.15)",
        transformOrigin: "center",
        filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.55))",
      }}
    />
  </Box>

  </Box>

  {/* MENU LINKS */}
  <Box sx={{ flexGrow: 1 }}>
    {navItems.map((item, idx) => item.dropdown ? (
      <Accordion
        key={idx}
        sx={{ width: "100%", bgcolor: "transparent", "&:before": { display: "none" }, mb: 1 }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "primary.main" }} />}>
          <Typography sx={{ fontWeight: 700 }}>{item.name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            {item.dropdown.map((subItem, i) => (
              <ListItem key={i} disablePadding>
                <ListItemButton
                  component="a"
                  href={subItem.href}
                  sx={{ pl: 3 }}
                  onClick={() => setMobileOpen(false)}
                >
                  <ListItemText primary={subItem.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>
    ) : (
      <ListItemButton
        key={idx}
        component="a"
        href={item.href}
        sx={{ py: 1.5 }}
        onClick={() => setMobileOpen(false)}
      >
        <ListItemText primary={item.name} primaryTypographyProps={{ fontWeight: 700 }} />
      </ListItemButton>
    ))}
  </Box>


</Drawer>


      {/* SPACING */}
      <Box sx={{ height: { xs: 64, md: 72 } }} />
    </>
  );
}

