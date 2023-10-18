import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { MAGAZINE_LATEST, magazineContent } from "../../demo-data";
import useMediaQuery from "@mui/material/useMediaQuery";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import "./index.css";

const TABS = {
  tab1: "TAB_1",
  tab2: "TAB_2",
};
const LatestMagazine = () => {
  const [tabSelected, setTabSelected] = useState(TABS.tab1);
  const [currentIndexPage, setCurrentIndexPage] = useState(0);
  const [currentOtherPage, setCurrentOtherPage] = useState(0);

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

  const moveIndexPrevious = () => {
    if (currentIndexPage > 0) {
      setCurrentIndexPage((prev) => prev - 1);
    }
  };

  const moveOtherNext = () => {
    if (currentIndexPage < MAGAZINE_LATEST.otherPages.length - 1) {
      setCurrentIndexPage((prev) => prev + 1);
    }
  };

  const moveIndexNext = () => {
    if (currentIndexPage < MAGAZINE_LATEST.indexPages.length - 1) {
      setCurrentIndexPage((prev) => prev + 1);
    }
  };

  const disabledStyle = {
    color: "#d3d3d3",
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
              onClick={() => {
                setTabSelected(TABS.tab1)
                setCurrentIndexPage(0)
              }}
            >
              <p>Index</p>
            </div>
            <div
              className="tab2"
              style={tabSelected === TABS.tab2 ? tabSelectedStyle : {}}
              onClick={() => {
                setTabSelected(TABS.tab2)
                setCurrentIndexPage(0)
              }}
            >
              <p>About</p>
            </div>
          </div>

          {tabSelected === TABS.tab1 && (
           <Box p={4}>
            <Typography
              align="center"
              fontSize={headingStyle.fontSize}
              ml={2}
              variant="h4"
            >
              {MAGAZINE_LATEST.magazineName}
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
                  src={MAGAZINE_LATEST.indexPages[currentIndexPage]}
                  width={matches ? "350wh" : "700wh"}
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
                  onClick={moveIndexPrevious}
                  className="left-right-arrow"
                  style={currentIndexPage > 0 ? {} : disabledStyle}
                />
                <ArrowForwardIosIcon
                  onClick={moveIndexNext}
                  className="left-right-arrow"
                  style={
                    currentIndexPage < MAGAZINE_LATEST.indexPages.length - 1
                      ? {}
                      : disabledStyle
                  }
                />
              </Grid>
            </Grid>
          </Box>
          )}
          {tabSelected === TABS.tab2 && (
            <Box p={4}>
            <Typography
              align="center"
              fontSize={headingStyle.fontSize}
              ml={2}
              variant="h4"
            >
              {MAGAZINE_LATEST.magazineName}
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
                  src={MAGAZINE_LATEST.otherPages[currentIndexPage]}
                  width={matches ? "350wh" : "700wh"}
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
                  onClick={moveIndexPrevious}
                  className="left-right-arrow"
                  style={currentIndexPage > 0 ? {} : disabledStyle}
                />
                <ArrowForwardIosIcon
                  onClick={moveOtherNext}
                  className="left-right-arrow"
                  style={
                    currentIndexPage < MAGAZINE_LATEST.otherPages.length - 1
                      ? {}
                      : disabledStyle
                  }
                />
              </Grid>
            </Grid>
          </Box>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default LatestMagazine;
