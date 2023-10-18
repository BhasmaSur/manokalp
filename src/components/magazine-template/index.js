import { Box, Button, Grid, ImageList, ImageListItem, ImageListItemBar, Typography } from "@mui/material";
import React,{useState} from "react";
import { magazineGallery, magazineContent, MAGAZINE_DETAILS } from "../../demo-data";
import LatestMagazine from "../magazine-latest";
import MagazinePreviewModal from "../magazine-preview-modal";
import "./index.css";
import useMediaQuery from '@mui/material/useMediaQuery';
import { sendEmail } from "../../utility/emailService";
import OrderNowModal from "../order-now-modal";

const MagazineTemplate = () => {
  const matches = useMediaQuery('(max-width:600px)');
  const [orderNowModalOpen, setOrderNowModalOpen] = useState(false)

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
  }
  const handleClose = () =>{
    setOpen(false)
  }

  const sendDetails = (details)=>{
    console.log(details)
    sendEmail(details)
    setOrderNowModalOpen(false)
    alert("Your order request is sent to admin successfully, our team will contact you as soon as possible.")
  }
  return (
    <div className="magazine-box">
      <Box
        sx={{
          marginTop:10,
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
            <Typography fontSize={subHeadingStyle.fontSize} m={2}  align="center" variant="h6">
              <Button onClick={()=>setOrderNowModalOpen(!orderNowModalOpen)} sx={{marginTop:"10px", marginLeft:"15px", width:"fit-content"}} variant="contained">Order Now</Button>
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
        {MAGAZINE_DETAILS.map((item) => (
          <ImageListItem key={item.magazineName} sx={{ color : "white" }} onClick={()=>showPreviewOfMagazine(item)}>
            <img
              src={`${item.magazineCover}`}
              srcSet={`${item.magazineCover}`}     
              alt={item.magazineName}
              loading="lazy"
            />
             <ImageListItemBar
            title={item.magazineName}
            position="below"
          />
          </ImageListItem>
        ))}
      </ImageList>
      <MagazinePreviewModal open={open} handleClose={handleClose} magazineSelected={magazineSelected}/>
      <OrderNowModal open={orderNowModalOpen} handleClose={setOrderNowModalOpen} sendDetails={sendDetails}/>
    </div>
  );
};

export default MagazineTemplate;
