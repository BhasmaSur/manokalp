import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { magazineContent } from "../../demo-data";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./index.css";

const TABS = {
  tab1: "TAB_1",
  tab2: "TAB_2",
};
const LatestMagazine = () => {
  const [tabSelected, setTabSelected] = useState(TABS.tab1);

  const tabSelectedStyle = {
    backgroundColor: "green",
    color: "white",
    marginTop: "0px",
    borderTopRightRadius: tabSelected === TABS.tab1 ? "0px" : "20px",
    borderTopLeftRadius: tabSelected === TABS.tab1 ? "20px" : "0px",
    borderBottomRightRadius: tabSelected === TABS.tab1 ? "0px" : "20px",
    borderBottomLeftRadius: tabSelected === TABS.tab1 ? "20px" : "0px",
  };
  const matches = useMediaQuery("(max-width:600px)");
  const headingStyle = {
    fontSize: matches ? "20px" : "40px",
  };

  const subHeadingStyle = {
    fontSize: matches ? "14px" : "20px",
  };
  return (
    <>
      <Typography
        mb={5}
        fontSize={headingStyle.fontSize}
        mt={10}
        align="center"
        variant="h3"
      >
        Latest Magazine
      </Typography>
      <Grid container>
        <Grid item xs={12} sm={7}>
          <Box mt={matches ? 0 : 9} display={"flex"} justifyContent="center">
            <img alt="bh" src="/assets/magazine/m1/first.jpg" width={"70%"} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className="tabs">
            <div
              className="tab1"
              style={tabSelected === TABS.tab1 ? tabSelectedStyle : {}}
              onClick={() => setTabSelected(TABS.tab1)}
            >
              <p>Index</p>
            </div>
            <div
              className="tab2"
              style={tabSelected === TABS.tab2 ? tabSelectedStyle : {}}
              onClick={() => setTabSelected(TABS.tab2)}
            >
              <p>About</p>
            </div>
          </div>
          {tabSelected === TABS.tab1 && (
           <Box display={"flex"} justifyContent="center">
           <img
             alt="bh"
             src="/assets/magazine/m1/indexM.jpg"
             width={"100%"}
           />
         </Box>
          )}
          {tabSelected === TABS.tab2 && (
            <Box display={"flex"} justifyContent="center">
            <img
              alt="bh"
              src="/assets/magazine/m1/detailsM.jpg"
              width={"100%"}
            />
          </Box>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default LatestMagazine;
