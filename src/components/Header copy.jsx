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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = ["Accueil", "Services", "Contact", "Blog"];

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: "rgba(15,16,32,0.75)",
          backdropFilter: "blur(10px)",
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
          {/* LOGO */}
          <Box
            sx={{
              width: 90,
              height: 50,
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              overflow: "visible",
              mr: 3,
            }}
          >
            <Box
              component="img"
              src="/logo.png"
              alt="Fairankauf"
              sx={{
                height: "100%",
                transform: "scale(2.4)",
                transformOrigin: "left center",
              }}
            />
          </Box>

          {/* DESKTOP NAV */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              gap: 3,
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  color: "#fff",
                  textTransform: "none",
                  fontSize: "0.95rem",
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
                  "&:hover:after": {
                    width: "100%",
                  },
                }}
              >
                {item}
              </Button>
            ))}
          </Box>

          {/* CTA + BURGER */}
         <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              ml: "auto", // 👉 schiebt CTA + Burger ganz nach rechts (Mobile & Desktop)
            }}
          >

            <Button
              variant="contained"
              color="primary"
              sx={{
                borderRadius: 999,
                fontWeight: 800,
                textTransform: "none",
                fontSize: "0.95rem",
                px: 3.5,
                py: 1.2,
                boxShadow: "0 8px 25px rgba(169,28,26,0.45)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-1px)",
                  boxShadow: "0 12px 35px rgba(169,28,26,0.65)",
                },
              }}
            >
              Estimer en ligne
            </Button>

            {/* Burger nur Mobile */}
            <IconButton
              onClick={() => setMobileOpen(true)}
              sx={{
                display: { xs: "flex", md: "none" },
                color: "#fff",
                ml: 0.5,
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: 260,
            background:
              "linear-gradient(180deg, #1c1d3a 0%, #0f1020 100%)",
            color: "#fff",
            pt: 4,
          },
        }}
      >
        <List>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton
                onClick={() => setMobileOpen(false)}
                sx={{
                  textAlign: "center",
                  py: 1.8,
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.06)",
                  },
                }}
              >
                <ListItemText
                  primary={item}
                  primaryTypographyProps={{
                    fontWeight: 700,
                    fontSize: "1.1rem",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Abstand für fixed Header */}
      <Box sx={{ height: { xs: 64, md: 72 } }} />
    </>
  );
}

