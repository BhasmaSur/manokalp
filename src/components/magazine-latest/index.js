import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { magazineContent } from "../../demo-data";

const LatestMagazine = () => {
  return (
    <>
      <Typography mt={10} align="center" variant="h3">Latest Magazine</Typography>
      <Grid container>
        <Grid  item xs={12} sm={7}>
            <Box m={"10%"} mt={0} display={"flex"} justifyContent="center">
                <img alt="bh" src="/assets/magazine/magazine1.png" width={"70%"} />
            </Box>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Typography ml={2} mt={15} mb={5} variant="h4">Index</Typography>
          {magazineContent.latestMagazine.anukram.map((anukram,index)=>{
                return(
                    <Typography mb={3} ml={2} variant="h6">
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
