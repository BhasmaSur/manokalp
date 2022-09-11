import { Grid, IconButton, ListItemButton, Typography } from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CopyrightIcon from "@mui/icons-material/Copyright";
import theme from "../theme";
import { Button } from "bootstrap";

const Footer = () => {
  return (
    <Grid
      mt={20}
      container
      rowSpacing={1}
      direction="column"
      sx={{
      position: "static",
        left: 0,
        bottom: 0,
        paddingBottom: 2,
        right: 0,
        backgroundColor: "#F1948A",
        color: "green",

        boxShadow: 4,
        borderRadius: 2,
      }}
    >
    <Grid item sx={{  paddingBottom: 1 }}>
      <Grid
        container
        justifyContent="center"
        component="img"
        sx={{
          mt: 1,
          ml: "auto",
          mr: "auto",
          maxWidth: "100px",
        }}
        alt="Manvantar-Logo"
        src="/assets/footer-logo.png"
      />
        </Grid>
      <Grid item sx={{  alignItems: "center" }} >
        <Grid
          container
          columnSpacing={1}
          justifyContent="center"
          alignItems="center"
        
        >
          <Grid item xs={6} sm={3} md={2} >
            <ListItemButton sx={{ justifyContent: "center" }}>First Link</ListItemButton>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
          <ListItemButton sx={{ justifyContent: "center" }}>Second Link</ListItemButton>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
          <ListItemButton sx={{ justifyContent: "center" }}>Third Link</ListItemButton>
          </Grid>
          <Grid item xs={6} sm={3} md={2}>
          <ListItemButton sx={{ justifyContent: "center" }}>Fourth Link</ListItemButton>
          </Grid>
        </Grid>
      </Grid>

      <Grid item >
        <Grid
          container
          justifyContent="center"
          columnSpacing={1}
          rowSpacing={1}
        >
          <Grid item xs={2} sm={1} md={0.5}>
            <IconButton color="inherit">
              <FacebookIcon />
            </IconButton>
          </Grid>
          <Grid item xs={2} sm={1} md={0.5}>
            <IconButton color="inherit">
              <TwitterIcon />
            </IconButton>
          </Grid>
          <Grid item xs={2} sm={1} md={0.5}>
            <IconButton color="inherit">
              <InstagramIcon />
            </IconButton>
          </Grid>
          <Grid item xs={2} sm={1} md={0.5}>
            <IconButton color="inherit">
              <LinkedInIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} md={12}>
        <Grid
          container
          justifyContent="center"
          columnSpacing={1}
          rowSpacing={1}
        >
          <Typography variant="body2" fontSize="10px">
            <CopyrightIcon fontSize="1px" /> 2022 EkDishaManvantar. All Rights
            Reserved.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;