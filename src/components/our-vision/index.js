import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const OurVision = () => {
  return (
    <Grid container >
      <Grid item xs={0}
          sm={1}
          >
          </Grid>
      <Grid item xs={12}
          sm={5}
          >
        <Box mt={0}>
            <Typography  variant="h3" paddingLeft={"10%"}>Our Vision</Typography>
            <Typography variant="h6" padding={"10%"}>
              The consultancy aims to establish a network of nationwide
              counselling centres for people with various psychological issues.
              The first step is to build a rapport, win their trust and start
              the treatment. While this process continues, increasing their
              self-esteem and confidence is of utmost importance by giving them
              positive strokes along the way.
            </Typography>
        </Box>
      </Grid>
      <Grid item xs={12}
          sm={5}>
      <Box mt={0} >
          <img
            className="imgHeight"
            src="/assets/vision.jpg"
            width={600}
            height={600}
            />
        </Box>
      </Grid>
      <Grid item xs={0}
          sm={1}
          >
            
          </Grid>
    </Grid>
  );
};

export default OurVision;
