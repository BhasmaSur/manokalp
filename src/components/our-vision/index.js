import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const OurVision = () => {
  return (
    <Box mt={15} sx={{ width: "60%" }}>
      <Paper elevation={3}>
        <Typography variant="h3">Our Vission</Typography>
        <Typography variant="h6">
          The consultancy aims to establish a network of nationwide counselling
          centres for people with various psychological issues. The first step
          is to build a rapport, win their trust and start the treatment. While
          this process continues, increasing their self-esteem and confidence is
          of utmost importance by giving them positive strokes along the way.
          About Mrs Aparna Chavan
        </Typography>
      </Paper>
    </Box>
  );
};

export default OurVision;
