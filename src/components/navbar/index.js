import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useNavigate } from "react-router-dom";

import { red } from "@mui/material/colors";
import theme from "../theme";

const pages = [
  { title: "Home", url: "home" },
  { title: "About Us", url: "about-us" },
  { title: "Services", url: "services" },
  { title: "Magazine", url: "magazine" },
  { title: "Contact Us", url: "contact-us" },
];

export const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  let navigate = useNavigate();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (event) => {
    setAnchorElNav(null);
    console.log(event);
  };

  //sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "white",
        color: "inherit",
        top: 0,
        borderRadius: 2,
      }}
    >
      <Container>
        <Toolbar disableGutters>
          <Box
            component="img"
            sx={{ display: { xs: "none", md: "flex" }, mr: 1, maxWidth: 200 }}
            alt="Manvantar-Logo"
            src="/assets/navbar-logo.png"
          />

          <Typography
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              color: "inherit",
            }}
          ></Typography>

          <Box sx={{ display: { xs: "none", md: "flex" }, ml: 10 }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                onClick={() => {
                  handleCloseNavMenu();
                  navigate("../" + page.url, { replace: true });
                }}
                sx={{
                  fontWeight: 500,
                  fontSize: "15px",
                  m: 1,
                }}
              >
                {page.title}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={() => {
                handleCloseNavMenu();
              }}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.title}
                  onClick={() => {
                    handleCloseNavMenu();
                    navigate("../" + page.url, { replace: true });
                  }}
                >
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            component="img"
            sx={{
              display: { xs: "flex", md: "none" },
              ml: "auto",
              mr: "auto",
              maxWidth: 200,
            }}
            alt="Manvantar-Logo"
            src="/assets/navbar-logo.png"
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
