import { Box, Button, Grid, Typography } from "@mui/material";
import React, {useState} from "react";
import { ourServices } from "../../demo-data";
import { sendEmail } from "../../utility/emailService";
import BookAppointment from "../book-appointment-modal";

const LeftImageTemplate = (props) => {
  const { service } = props;
  const [bookAppointment, setBookAppointment] = useState(false);
  const [serviceChoosen, setServiceChoosen] = useState()
  const openAppointmentPage = (serviceSelected) => {
    setServiceChoosen(serviceSelected)
    setBookAppointment(true)
  } 

  const sendDetails = (details)=>{
    console.log(details)
    sendEmail(details)
    setBookAppointment(false)
    alert("Your appointment is booked successfully, our team will contact you as soon as possible.")
  }

  return (
    <Grid container spacing={3} mt={5}>
      <Grid item xs={0} sm={2}></Grid>
      <Grid item xs={12} sm={4} display={"flex"} justifyContent={"center"}>
        <img src={service.url} width={"100%"} height={"400px"} />
      </Grid>
      <Grid item xs={12} sm={4} display={"flex"} flexDirection="column">
        <Typography ml={2} mr={2} variant="h4">
          {service.title}
        </Typography>
        <Typography ml={2} mr={2} variant="h5">
          {service.desc}
        </Typography>
        <Button onClick={()=>openAppointmentPage(service)} sx={{marginTop:"10px", marginLeft:"15px", width:"fit-content"}} variant="contained">
            Book an appointment
        </Button>
        <BookAppointment open = {bookAppointment} handleClose={setBookAppointment} sendDetails={sendDetails} serviceSelected = {serviceChoosen}/>
      </Grid>
      <Grid item xs={0} sm={2}></Grid>
    </Grid>
  );
};

const RightImageTemplate = (props) => {
  const { service } = props;
  const [bookAppointment, setBookAppointment] = useState(false);
  const [serviceChoosen, setServiceChoosen] = useState()
  const openAppointmentPage = (serviceSelected) => {
    setServiceChoosen(serviceSelected)
    setBookAppointment(true)
  } 

  const sendDetails = (details)=>{
    console.log(details)
    sendEmail(details)
    setBookAppointment(false)
    alert("Your appointment is booked successfully, our team will contact you as soon as possible.")
  }
  return (
    <Grid container spacing={3} mt={5}>
      <Grid item xs={0} sm={2} order={{ xs: 1, sm: 1 }}></Grid>
      <Grid
        item
        xs={12}
        sm={4}
        display={"flex"}
        flexDirection="column"
        order={{ xs: 3, sm: 2 }}
      >
        <Typography ml={2} mr={2} variant="h4">
          {service.title}
        </Typography>
        <Typography ml={2} mr={2} variant="h5">
          {service.desc}
        </Typography>
        <Button onClick={()=>openAppointmentPage(service)} sx={{marginTop:"10px", marginLeft:"15px", width:"fit-content"}} variant="contained">
            Book an appointment
        </Button>
        <BookAppointment open = {bookAppointment} handleClose={setBookAppointment} sendDetails={sendDetails} serviceSelected = {serviceChoosen}/>
      </Grid>
      <Grid
        item
        xs={12}
        sm={4}
        display={"flex"}
        justifyContent={"center"}
        order={{ xs: 2, sm: 3 }}
      >
        <img src={service.url} width={"100%"} height={"400px"} />
      </Grid>
      <Grid item xs={0} sm={2} order={{ xs: 4, sm: 4 }}></Grid>
    </Grid>
  );
};
const chooseServiceTemplate = (index, service) => {
  if (index % 2 === 0) {
    return <RightImageTemplate service={service} />;
  } else {
    return <LeftImageTemplate service={service} />;
  }
};
const ServiceTemplate = () => {
  return(
    <Box mt={15}>
    {ourServices.map((service, index) => {
      return chooseServiceTemplate(index, service);
    })}
  </Box>
  )
};

export default ServiceTemplate;
