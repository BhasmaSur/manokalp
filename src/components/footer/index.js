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
      mt={3}
      container
      rowSpacing={1}
      direction="column"
      sx={{
        position: "static",
        left: 0,
        bottom: 0,
        paddingBottom: 2,
        right: 0,
        backgroundColor: "#97BFB4",
        color: "black",
        fontWeight: 100,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
      }}
    >
      <Grid item sx={{ paddingBottom: 1 }}>
        <Grid
          container
          justifyContent="center"
          component="img"
          sx={{
            mt: 3,
            ml: "auto",
            mr: "auto",
            maxWidth: "150px",
          }}
          alt="Manvantar-Logo"
          src="/assets/footer-logo.png"
        />
        <Typography align="center" variant="h4">
          Ek Disha Manvantar
        </Typography>
      </Grid>

      <Grid item>
        <Grid
          container
          justifyContent="center"
          columnSpacing={1}
          rowSpacing={1}
        >
          <Grid item xs={2} sm={1} md={0.5}>
            <IconButton color="inherit">
              <FacebookIcon sx={{fill:"inherit"}}/>
            </IconButton>
          </Grid>
          <Grid item xs={2} sm={1} md={0.5}>
            <IconButton color="inherit" >
              <TwitterIcon sx={{fill:"inherit"}} />
            </IconButton>
          </Grid>
          
          <Grid item xs={2} sm={1} md={0.5}>
          <a rel="noopener noreferrer" target="_blank" href="https://instagram.com/ek_disha_manvantar?igshid=MDE2OWE1N2Q=" >
            <IconButton color="inherit">
              
                <InstagramIcon sx={{fill:"inherit"}}/>
              
            </IconButton>
            </a>
          </Grid>
          <Grid item xs={2} sm={1} md={0.5}>
            <IconButton color="inherit">
              <LinkedInIcon sx={{fill:"inherit"}}/>
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
