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
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import CameraRollIcon from "@mui/icons-material/CameraRoll";
import CallIcon from "@mui/icons-material/Call";
import WidgetsIcon from '@mui/icons-material/Widgets';

const pages = [
  {
    title: "Home",
    url: "home",
    icon: <HomeIcon sx={{ pr:"2px", width: "25px", height: "25px" }} />,
  },
  {
    title: "About Us",
    url: "about-us",
    icon: <PeopleIcon sx={{ width: "25px", height: "25px" }} />,
  },
  {
    title: "Services",
    url: "services",
    icon: <MiscellaneousServicesIcon sx={{ width: "25px", height: "25px" }} />,
  },
  {
    title: "Magazine",
    url: "magazine",
    icon: <CameraRollIcon sx={{ width: "25px", height: "25px" }} />,
  },
  {
    title: "Contact Us",
    url: "contact-us",
    icon: <CallIcon sx={{ width: "25px", height: "25px" }} />,
  },
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
        color: "green",
        top: 0,
        boxShadow: 1,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,

      }}
    >
      <Container>
        <Toolbar disableGutters>
          <Box
            component="img"
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 4,
              maxWidth: 170,
              height: "auto",
            }}
            alt="Manvantar-Logo"
            src="/assets/navbar-logo.png"
          />

          <Box sx={{ display: { xs: "none", md: "flex" }, ml: 4 }}>
            {pages.map((page) => (
              <Button
              //disableRipple="true"
              disableElevation="true"
                startIcon={page.icon}
                key={page.title}
                onClick={() => {
                  handleCloseNavMenu();
                  navigate("../" + page.url, { replace: true });
                }}
                sx={{
                  fontWeight: 450,
                  fontSize: "15px",
                  pt: 4,
                  pb: 4,
                  pl: 1,
                  pr: 2,

                  borderRadius: 0,
                }}
              >
                {page.title}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" }, color: "green" }}>
            <IconButton size="large" onClick={handleOpenNavMenu} color="primary">
              <WidgetsIcon />
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
                  <IconButton color="primary">{page.icon}</IconButton>
                  <Typography textAlign="center" color="primary">{page.title}</Typography>
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
              maxWidth: 170,
            }}
            alt="Manvantar-Logo"
            src="/assets/navbar-logo.png"
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
