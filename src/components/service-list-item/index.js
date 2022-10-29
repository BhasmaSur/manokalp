import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import { Divider, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
const ServiceListItem = ({ content }) => {
  return (
    <>
    <Box sx={{display:"flex", flexDirection:"row"}}>
      <IconButton color="primary" size="small">
        <CheckIcon />
      </IconButton>
      <Typography mt={0.5} fontSize="20px" variant="subtitle1">{content}</Typography>
    </Box>
    <Divider sx={{marginLeft:"12px", marginTop:"10px"}}/>
    </>
    
  );
};

export default ServiceListItem;
