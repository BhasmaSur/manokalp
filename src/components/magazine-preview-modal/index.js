import { Box, Grid, IconButton, Modal, Typography } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./index.css";
import useMediaQuery from '@mui/material/useMediaQuery';


const MagazinePreviewModal = ({ open, handleClose, magazineSelected }) => {
    const matches = useMediaQuery('(max-width:400px)');
    const headingStyle = {
        fontSize : matches ? "20px" : "40px"
      }
    
      const subHeadingStyle = {
        fontSize : matches ? "14px" : "20px"
      }
    console.log(matches)
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "90%",
        bgcolor: "background.paper",
        border: "2px solid green",
        borderRadius: "10px",
        boxShadow: 24,
        p: 4,
        overflow: "scroll",
        height: matches ? "100%" : "fit-content",
    };
  return (
    <Modal
      open={open}
      onClose={() => handleClose(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} p={4}>
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
        <Typography align="center" fontSize={headingStyle.fontSize} ml={2} mb={5} variant="h4">
              {magazineSelected.title}
            </Typography>
        <Grid container>
          <Grid item xs={12} sm={6} display={"flex"} justifyContent={"center"}>
            <img alt="" src={magazineSelected.magazinePath} height="400wh" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography fontSize={headingStyle.fontSize} ml={2} mb={3} variant="h4">Index</Typography>
            <ul>
              {magazineSelected?.anukram?.map((anu) => {
                return <li><Typography fontSize={subHeadingStyle.fontSize} variant="h4">
                {anu}
              </Typography></li>;
              })}
            </ul>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default MagazinePreviewModal;
