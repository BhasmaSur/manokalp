import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import "./index.css";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useNavigate } from "react-router-dom";

const HomeAbout = () => {
  let navigate = useNavigate();
  const matches = useMediaQuery('(max-width:600px)');
  const headingStyle = {
    fontSize : matches ? "30px" : "40px"
  }

  const subHeadingStyle = {
    fontSize : matches ? "20px" : "20px"
  }

  const subHeadingStyle2 = {
    fontSize : matches ? "20px" : "30px"
  }
  const homebg = matches ? "/assets/homebg2.jpg" : "/assets/homebg5.jpg";
  
  const redirectToServicesPage = () =>{
    navigate("/services")
  }
  return (
    <div className="magazine-box">
      <Box
        sx={{
          // marginTop: 10,
          height:400,
        //   width:"900px",
          backgroundSize: "cover",
          backgroundImage: `url(${homebg})`,
        }}
      >
        <Grid container>
          <Grid item xs={0} sm={3}>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography fontSize={subHeadingStyle.fontSize} align="center" mt={20} variant="h4">
              Welcome to 
            </Typography>
            <Typography fontSize={headingStyle.fontSize} align="center" variant="h4">
              Ek Disha Manvantar
            </Typography>
            <Typography fontSize={subHeadingStyle2.fontSize} align="center" mt={3} variant="h4">
              A Psychological Counseling, Testing, Training and Research Center
            </Typography>
            <Typography align="center" mt={2}>
            <Button variant="contained" onClick={redirectToServicesPage}>
              Checkout our services
            </Button>
            </Typography>
          </Grid>
          <Grid item xs={0} sm={3}>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default HomeAbout;
