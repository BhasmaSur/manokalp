import { Avatar, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

const AboutUsTemplate = () => {
  const bgUrl = "/assets/abtbg.jpg";
  const matches = useMediaQuery("(max-width:600px)");
  const headingStyle = {
    fontSize: matches ? "20px" : "40px",
  };

  const subHeadingStyle = {
    fontSize: matches ? "14px" : "20px",
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid mb={matches ? 10 : 20} item xs={12} sm={1}></Grid>
        <Grid
          paddingBottom={matches ? 0 : 10}
          item
          xs={12}
          sm={4}
          display={"flex"}
          direction="column"
          justifyContent="center"
        >
          <Box
            sx={{
              marginTop: matches ? 0 : 10,
              paddingTop: 5,
              paddingBottom: 7,
              backgroundSize: "cover",
              backgroundImage: `url(${bgUrl})`,
            }}
          >
            <Typography
              fontSize={subHeadingStyle.fontSize}
              align="center"
              variant="h4"
            >
              Welcome to
            </Typography>
            <Typography
              fontSize={headingStyle.fontSize}
              align="center"
              variant="h3"
            >
              Ek Disha Manvantar
            </Typography>
          </Box>
        </Grid>
        <Grid
          mt={"10%"}
          item
          xs={12}
          sm={5}
          display={"flex"}
          direction="column"
          justifyContent="center"
        >
          <Typography
            fontSize={headingStyle.fontSize}
            align="center"
            variant="h3"
            padding={2}
          >
            About Us
          </Typography>
          <Typography
            fontSize={subHeadingStyle.fontSize}
            variant="h6"
            padding={2}
          >
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
