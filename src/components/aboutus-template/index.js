import { Avatar, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const AboutUsTemplate = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={10}>
        <Grid 
            item
            xs={12}
            sm={1}
            mb={10}
        >

        </Grid>
        <Grid
          mt={-10}
          paddingTop={0}
          paddingBottom={10}
          item
          xs={12}
          sm={4}
          display={"flex"}
          direction="column"
          justifyContent="center"
        >
          <Typography align="center" variant="h4">
            Welcome to
          </Typography>
          <Typography align="center" variant="h3">
            Ek Disha Manvantar
          </Typography>
        </Grid>
        <Grid
          mt={10}
          item
          xs={12}
          sm={5}
          display={"flex"}
          direction="column"
          justifyContent="center"
        >
          <Typography align="center" variant="h3" padding={2}>
            About Us
          </Typography>
          <Typography variant="h6" padding={2}>
            Unfortunately, mental health and Psychological issues have always
            been given a second preference in our society. Mental Health
            includes our emotional, psychological and social well-being.{" "}
            <span style={{ fontWeight: "bold" }}>
              'Ek Disha Manvantar- Psychological Consultancy'
            </span>{" "}
            works for the psychological needs of various age groups.{" "}
            <span style={{ fontWeight: "bold" }}>
              'Ek Disha Manvantar-Psychological Consultancy'
            </span>{" "}
            has contributed to psychology and counselling since 2012.{" "}
            <span style={{ fontWeight: "bold" }}>
              'Ek Disha Manvantar-Psychological Consultancy'
            </span>{" "}
            was founded by{" "}
            <span style={{ fontWeight: "bold" }}>Mrs Aparna Chavan</span>. Being
            an RCIcertified Clinical Psychologist, her vision is to provide
            culturally competent, holistic, and wellness-focused services. Such
            services can promote everyone's social-emotional development,
            prevent the development of mental health challenges, and address
            current social-emotional problems.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUsTemplate;
