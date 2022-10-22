import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { magazineContent } from "../../demo-data";
import useMediaQuery from '@mui/material/useMediaQuery';
const LatestMagazine = () => {
  const matches = useMediaQuery('(max-width:600px)');
  const headingStyle = {
    fontSize : matches ? "20px" : "40px"
  }

  const subHeadingStyle = {
    fontSize : matches ? "14px" : "20px"
  }
  return (
    <>
      <Typography mb={5} fontSize={headingStyle.fontSize} mt={10} align="center" variant="h3">Latest Magazine</Typography>
      <Grid container>
        <Grid  item xs={12} sm={7}>
            <Box m={"10%"} mt={0} display={"flex"} justifyContent="center">
               <img alt="bh" src="/assets/magazine/magazine1.png" width={"80%"} />
            </Box>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Typography fontSize={headingStyle.fontSize} ml={2} mb={3} variant="h4">Index</Typography>
          {magazineContent.latestMagazine.anukram.map((anukram,index)=>{
                return(
                    <Typography fontSize={subHeadingStyle.fontSize} mb={3} ml={2} variant="h6">
                        {index+1 + ". " +anukram}
                    </Typography>
                )
            })}
        </Grid>
      </Grid>
    </>
  );
};

export default LatestMagazine;
