import { Box, Grid, IconButton, Modal, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./index.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
const MagazinePreviewModal = ({ open, handleClose, magazineSelected }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const matches = useMediaQuery("(max-width:600px)");
  const headingStyle = {
    fontSize: matches ? "20px" : "40px",
  };

  const disabledStyle = {
    color: "#d3d3d3",
  };
  const movePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const moveNext = () => {
    if (currentPage < magazineSelected.allMagazinePages.length - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  useEffect(()=>{
    setCurrentPage(0)
  },[magazineSelected])
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: matches ? "90%" : "70%",
    bgcolor: "background.paper",
    border: "2px solid green",
    borderRadius: "10px",
    boxShadow: 24,
    p: 2,
    overflow: "scroll",
    height: matches ? "95%" : "fit-content",
  };
  return (
    <>
      {magazineSelected.allMagazinePages && (
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
            <Typography
              align="center"
              fontSize={headingStyle.fontSize}
              ml={2}
              variant="h4"
            >
              {magazineSelected.magazineName}
            </Typography>
            <Grid container>
              <Grid
                item
                xs={12}
                sm={12}
                display={"flex"}
                justifyContent={"center"}
              >
                <img
                  alt=""
                  src={magazineSelected.allMagazinePages[currentPage]}
                  width={matches ? "350wh" : "300wh"}
                  height={matches ? "500wh" : "720wh"}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                display={"flex"}
                justifyContent={"center"}
              >
                <ArrowBackIosNewIcon
                  onClick={movePrevious}
                  className="left-right-arrow"
                  style={currentPage > 0 ? {} : disabledStyle}
                />
                <ArrowForwardIosIcon
                  onClick={moveNext}
                  className="left-right-arrow"
                  style={
                    currentPage < magazineSelected.allMagazinePages.length - 1
                      ? {}
                      : disabledStyle
                  }
                />
              </Grid>
            </Grid>
          </Box>
        </Modal>
      )}
    </>
  );
};

export default MagazinePreviewModal;
