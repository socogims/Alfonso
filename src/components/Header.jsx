import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { name: "Start", href: "#start" },
    { name: "Standort", href: "#standort" },
    { name: "Angebot", href: "#angebot" },
    { name: "Events", href: "#events" },
    { name: "Über uns", href: "#ueber-uns" },
    { name: "Kontakt", href: "#kontakt" },
    { name: "Catering", href: "/catering" },
  ];

  return (
    <>
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
              component="img"
              src="/logo4.png"
              alt="Philly Cheesesteak & Smashburger"
              sx={{
                height: { xs: 64, md: 76 },
                width: "auto",
                display: "block",
                filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.55))",
              }}
            />
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              gap: 3,
              ml: { md: 3 },
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.name}
                href={item.href}
                sx={{ color: "#fff", textTransform: "none", fontWeight: 600 }}
              >
                {item.name}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1, ml: "auto" }}>
            <Button
              variant="contained"
              color="primary"
              href="#kontakt"
              sx={{
                display: { xs: "none", md: "inline-flex" },
                borderRadius: 999,
                fontWeight: 800,
                textTransform: "none",
                fontSize: "0.95rem",
                px: 3.5,
                py: 1.2,
                boxShadow: "0 8px 25px rgba(169,28,26,0.45)",
                "&:hover": {
                  transform: "translateY(-1px)",
                  boxShadow: "0 12px 35px rgba(169,28,26,0.65)",
                },
              }}
            >
              Anfrage senden
            </Button>

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
        <Box sx={{ mb: 4 }}>
          <Typography sx={{ fontWeight: 800, color: "primary.main", mb: 2 }}>
            Philly Cheesesteak & Smashburger
          </Typography>
          <List>
            {navItems.map((item) => (
              <ListItemButton
                key={item.name}
                component="a"
                href={item.href}
                sx={{ py: 1.2 }}
                onClick={() => setMobileOpen(false)}
              >
                <ListItemText primary={item.name} primaryTypographyProps={{ fontWeight: 700 }} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>

      <Box sx={{ height: { xs: 64, md: 72 } }} />
    </>
  );
}
