import { Box, Grid, ImageList, ImageListItem, ImageListItemBar, Typography } from "@mui/material";
import React,{useState} from "react";
import { magazineGallery, magazineContent } from "../../demo-data";
import LatestMagazine from "../magazine-latest";
import MagazinePreviewModal from "../magazine-preview-modal";
import "./index.css";
import useMediaQuery from '@mui/material/useMediaQuery';

const MagazineTemplate = () => {
  const matches = useMediaQuery('(max-width:400px)');

  const headingStyle = {
    fontSize : matches ? "20px" : "40px"
  }

  const subHeadingStyle = {
    fontSize : matches ? "14px" : "20px"
  }
  const [open, setOpen] = useState(false)
  const [magazineSelected, setMagazineSelected] = useState({})
  const showPreviewOfMagazine = (item)=>{
    setMagazineSelected(item)
    setOpen(true)
    console.log("item",item)
  }
  const handleClose = () =>{
    console.log("handled close")
    setOpen(false)
  }
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
            <Typography fontSize={headingStyle.fontSize} align="center" variant="h3">
              {magazineContent.phillosophy.title}
            </Typography>
            <Typography fontSize={subHeadingStyle.fontSize} m={2}  align="center" variant="h6">
              {magazineContent.phillosophy.desc}
            </Typography>
          </Grid>
          <Grid item xs={0} sm={4}></Grid>
        </Grid>
      </Box>
      <LatestMagazine/>
      <Typography fontSize={headingStyle.fontSize} mt={10} mb={5} align="center" variant="h3">
        Old Magazines
      </Typography>
      <ImageList
        sx={{ width: matches ? "90%" : "70%", ml: "auto", mr: "auto", p:3, backgroundColor: "green"}}
        cols={3}      
      >
        {magazineGallery.map((item) => (
          <ImageListItem key={item.id} sx={{ color : "white" }} onClick={()=>showPreviewOfMagazine(item)}>
            <img
              src={`${item.magazinePath}`}
              srcSet={`${item.magazinePath}`}     
              alt={item.title}
              loading="lazy"
            />
             <ImageListItemBar
            title={item.title}
            position="below"
          />
          </ImageListItem>
        ))}
      </ImageList>
      <MagazinePreviewModal open={open} handleClose={handleClose} magazineSelected={magazineSelected}/>
    </div>
  );
};

export default MagazineTemplate;
