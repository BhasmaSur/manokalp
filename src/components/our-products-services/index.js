import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { servicesList } from "../../demo-data";
import ServiceListItem from "../service-list-item";
import "./index.css";
import useMediaQuery from "@mui/material/useMediaQuery";

const ProductsServices = () => {
const matches = useMediaQuery("(max-width:600px)");
  return (
    <div className="bg-box">
      <Typography align="center" variant="h3" mt={"70px"} mb={"40px"}>
        Products & Services
      </Typography>
      <Grid container gap={4}>
        <Grid item xs={0} sm={2}></Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" ml={2} mb={2}>
            We provide following services :
          </Typography>
          {servicesList.map((service) => {
            return <ServiceListItem content={service} />;
          })}
          <Button
            sx={{ marginTop: "10px", marginLeft: "10px" }}
            variant="contained"
          >
            Book an Appointment
          </Button>
        </Grid>
        {!matches && <Grid item xs={0} sm={4}>
          <Typography align="center" variant="h6">
            Manokalp
          </Typography>
          <Typography mt={3} ml={2} mr={2} variant="h6">
            Due to less focus and lack of awareness, some stigma is attached to
            mental health in society. People still are not open to approaching
            psychologists. 'Manokalp' intends to improve mental health with
            self–help for such people by publishing relevant articles. Mrs
            Aparna Chavan, the editor, decides on a subject for all age groups.
            Consult the experts from these fields. They write articles related
            to a particular topic, which are published to help the readers.
          </Typography>
          <img
            src="/assets/magazine/magazineIcon.png"
            height={400}
            width={400}
            alt=""
          />
        </Grid>}
        <Grid item xs={0} sm={2}></Grid>
      </Grid>
    </div>
  );
};

export default ProductsServices;
