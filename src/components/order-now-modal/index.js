import { Box, Button, Grid, IconButton, Modal, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
const OrderNowModal = ({ open, handleClose, sendDetails }) => {
  const [username, setUsername] = useState();
  const [contactNumber, setContactNumber] = useState();
  const [email, setEmail] = useState();
  const [info, setInfo] = useState();
  const [magazine, setMagazine] = useState();

  const orderRequest = () => {
    let heading = "Order request from " + username;
    let subject = "Magazine Order";
    let message = `
            username : ${username},
            email : ${email},
            contact number : ${contactNumber},
            message : ${info},
            Magazine Needed : ${magazine}
        `;
    const detailsPayload = {
      subject,
      username: "Aparna",
      heading,
      message,
    };
    sendDetails(detailsPayload);
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid green",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={open}
      onClose={() => handleClose(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Grid container>
          <Grid xs={12} item display={"flex"} justifyContent={"right"}>
            <IconButton
              onClick={() => handleClose(false)}
              color="primary"
              aria-label="upload picture"
              component="label"
            >
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Order the magazine of your choice
        </Typography>
        <TextField
          id="fullName"
          label="Full Name"
          variant="outlined"
          size="small"
          required="true"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          sx={{ width: "90%", fontSize: "2px", marginTop: "40px" }}
        />
        <TextField
          id="contactNumber"
          label="Contact Number"
          variant="outlined"
          size="small"
          required="true"
          value={contactNumber}
          onChange={(event) => setContactNumber(event.target.value)}
          sx={{ width: "90%", fontSize: "2px", marginTop: "40px" }}
        />
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          size="small"
          required="true"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          sx={{ width: "90%", fontSize: "2px", marginTop: "40px" }}
        />
        <TextField
          id="info"
          label="Enter Magazine Name or About"
          variant="outlined"
          size="small"
          multiline
          rows={4}
          required="true"
          value={info}
          onChange={(event) => setInfo(event.target.value)}
          sx={{ width: "90%", fontSize: "2px", marginTop: "40px" }}
        />
        <Button
          onClick={orderRequest}
          sx={{ marginTop: "40px" }}
          variant="contained"
        >
          Send
        </Button>
      </Box>
    </Modal>
  );
};

export default OrderNowModal;
