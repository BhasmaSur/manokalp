import {
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, {useState} from "react";
import Footer from "../../components/footer";
import { Navbar } from "../../components/navbar";
import EmailIcon from "@mui/icons-material/Email";
import Link from "@mui/material/Link";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import { sendEmail } from "../../utility/emailService";

const ContactUs = () => {

  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [contactNumber, setContactNumber] = useState();
  const [message, setMessage] = useState();

  const sendDetails = ()=>{
    let heading = username + " wants to contact you";
    let subject = "ENQUIRY";
    let info = `
        username : ${username},
        email : ${email},
        contact number : ${contactNumber},
        message : ${message}
    `
        const detailsPayload = {
            subject,
            username : "Aparna",
            heading,
            message : info
        }
    sendEmail(detailsPayload)
    alert("Your message is sent successfully, our team will contact you as soon as possible.")
  }
  return (
    <div>
      <Navbar />

      <Grid
        container
        mt={13}
        pt={3}
        justifyContent="center"
        sx={{
          ml: "auto",
          mr: "auto",
          paddingBottom: 5,
          backgroundColor: "#FBEAE7",
          color: "#B2456E",
          borderRadius: 7,
        }}
      >
        <Grid
          item
          mt={7}
          sm={12}
          xs={12}
          md={5}
          xl={5}
          justifyContent="center"
          sx={{ md: { mt: 20 }, xl: { mt: 20 } }}
        >
          <Typography align="center" variant="h3">
            Get In Touch
          </Typography>

          <Grid
            container
            sm={11}
            xs={11}
            md={11}
            xl={10}
            flexDirection="column"
            mt={2}
            justifyContent="left"
            sx={{ ml: "auto", mr: "auto", p: 3 }}
          >
            <Grid item pl={3}>
              <Link
                
                underline="none"
                color="inherit"
                sx={{ ":hover": { color: "green" } }}
              >
                <EmailIcon /> info.manvantar@gmail.com
              </Link>
            </Grid>

            <Grid item pl={3} sx={{ mt: 2 }}>
              <Link
                
                underline="none"
                color="inherit"
                sx={{ ":hover": { color: "green" } }}
              >
                <LocationOnIcon /> Ganesh Mandir, Plot No. 29, Vijay Sadan, Niranjan Housing Society, Katraj - Kondhwa Rd, near Rajas Society, Katraj, Pune, Maharashtra 411046
              </Link>
            </Grid>

            <Grid item pl={3} sx={{ mt: 2 }}>
              <Link
              
                underline="none"
                color="inherit"
                sx={{ ":hover": { color: "green" } }}
              >
                <PhoneInTalkIcon /> +91 8805531139
              </Link>
            </Grid>
          </Grid>
        </Grid>

        <Grid item sm={11} xs={11} md={6} xl={6} justifyContent="center">
        <a
        rel="noopener noreferrer"
        target="_blank"
                href="https://www.google.com/maps/place/Ek+Disha+Manvantar+psychology+consultancy%2Fpublication%2Fmanokalp+magazine/@18.4515257,73.8627672,17z/data=!3m1!4b1!4m5!3m4!1s0x3bc2eb454b825619:0xf4086afdd6d58a0c!8m2!3d18.4515257!4d73.8649559">
          <Grid
            container
            sm={12}
            xs={12}
            md={12}
            xl={12}
            justifyContent="center"
            component="img"
            sx={{
              mt: 4,
              ml: "auto",
              mr: "auto",
              borderRadius: 0,
              width: "70%",
              border:"3px solid #B2456E"
            }}
            
            alt="Map"
            src="/assets/test-map.png"
            //<img src="https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284&key=AIzaSyAgPgFbAg_yGS3OzYE5CnHkJWk9le77gZY"/>
          />
          </a>
        </Grid>

        <Grid
          item
          mt={7}
          justifyContent="center"
          sx={{ width: "90%", md: { mt: 20 }, xl: { mt: 20 } }}
        >
          <Typography align="center" variant="h5">
            Any questions or remarks? Just write us a message!
          </Typography>

          <Grid
            container
            sm={10}
            xs={12}
            md={7}
            xl={5}
            flexDirection="column"
            mt={2}
            sx={{ ml: "auto", mr: "auto", p: 3 }}
          >
            <Grid item pl={3}>
              <TextField
                id="fullName"
                label="Full Name"
                variant="outlined"
                size="small"
                required="true"
                value={username}
                onChange={(event)=> setUsername(event.target.value)}
                sx={{ width: "90%", fontSize: "2px" }}
              />
            </Grid>

            <Grid item pl={3} sx={{ mt: 3 }}>
              <TextField
                id="email"
                label="E-mail"
                variant="outlined"
                size="small"
                value={email}
                onChange={(event)=> setEmail(event.target.value)}
                sx={{ width: "90%" }}
                required="true"
              />
            </Grid>

            <Grid item pl={3} sx={{ mt: 3 }}>
              <TextField
                id="contact"
                label="Contact Number"
                variant="outlined"
                size="small"
                value={contactNumber}
                onChange={(event)=> setContactNumber(event.target.value)}
                sx={{ width: "90%" }}
                required="true"
              />
            </Grid>

            <Grid item pl={3} sx={{ mt: 3 }}>
              <TextField
                id="msg"
                label="Message"
                placeholder="Placeholder"
                multiline
                rows={3}
                maxRows={4}
                size="small"
                required="true"
                value={message}
                onChange={(event)=> setMessage(event.target.value)}
                sx={{ width: "90%", input: { color: "red" } }}
              />
            </Grid>

            <Grid item pl={3} sx={{ mt: 3 }}>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#B2456E", color: "#FBEAE7" }}
                onClick={sendDetails}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Footer />
    </div>
  );
};

export default ContactUs;
