import { Box, Grid, ImageList, ImageListItem, Typography } from "@mui/material";
import React from "react";
import { magazineGallery, magazineContent } from "../../demo-data";
import LatestMagazine from "../magazine-latest";
import "./index.css";

const bgPhilosophy = {};
const MagazineTemplate = () => {
  return (
    <div className="magazine-box">
      <Box
        sx={{
          paddingTop: 5,
          paddingBottom: 7,
          backgroundSize: "cover",
          backgroundImage: `url(${magazineContent.phillosophy.imageUrl})`
        }}
      >
        <Grid container>
          <Grid item xs={0} sm={1}></Grid>
          <Grid item xs={12} sm={7}>
            <Typography align="center" variant="h3">
              {magazineContent.phillosophy.title}
            </Typography>
            <Typography mt={2} align="center" variant="h6">
              {magazineContent.phillosophy.desc}
            </Typography>
          </Grid>
          <Grid item xs={0} sm={4}></Grid>
        </Grid>
      </Box>
      <LatestMagazine/>
      <ImageList
        sx={{ width: "100%", height: "fit-content" }}
        variant="woven"
        cols={1}
        gap={2}
      >
        {magazineGallery.map((item) => (
          <ImageListItem key={item.id}>
            <img
              src={`${item.magazinePath}?w=161&fit=crop&auto=format`}
              srcSet={`${item.magazinePath}?w=161&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default MagazineTemplate;
