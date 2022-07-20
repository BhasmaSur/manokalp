import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { membersData } from "../../demo-data";
import { Box } from "@mui/system";

const boxColumn = {
  display: "flex",
  flexDirection: "column",
};

export default function Member1() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={3}>
        <Card sx={{ maxWidth: 1000,marginTop:2}}>
          <CardHeader title={membersData.title} />
          <CardContent align="left">
            <Typography variant="body2" color="text.secondary">
              Address : {membersData.address}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone : {membersData.phone}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email : {membersData.email}
            </Typography>
            <Box marginTop={3}>
              <Typography
                sx={{ textDecoration: "underline" }}
                variant="h6"
                color="#1978F1"
              >
                Personal Information
              </Typography>
              <Box sx={boxColumn} marginTop={3} marginLeft={1}>
                <Typography variant="subtitle" color="text.primary">
                  Date of birth : {membersData.personalInfo.dob}
                </Typography>
                <Typography variant="subtitle" color="text.primary">
                  Marital status : {membersData.personalInfo.maritalStatus}
                </Typography>
                <Typography variant="subtitle" color="text.primary">
                  Languages known: {membersData.personalInfo.languages}
                </Typography>
              </Box>
            </Box>
            <Box marginTop={3}>
              <Typography
                sx={{ textDecoration: "underline" }}
                variant="h6"
                color="#1978F1"
              >
                Education
              </Typography>
              <Box sx={boxColumn} marginTop={2}>
                <ul>
                  {membersData.eductaion.map((edu) => {
                    return (
                      <li>
                        <Typography variant="subtitle" color="text.primary">
                          {edu}
                        </Typography>
                      </li>
                    );
                  })}
                </ul>
              </Box>
            </Box>
            <Box marginTop={3}>
              <Typography
                sx={{ textDecoration: "underline" }}
                variant="h6"
                color="#1978F1"
              >
                Achievements
              </Typography>
              <Box sx={boxColumn} marginTop={2}>
                <ul>
                  {membersData.achievements.map((ach) => {
                    return (
                      <li>
                        <Typography variant="subtitle" color="text.primary">
                          {ach}
                        </Typography>
                      </li>
                    );
                  })}
                </ul>
              </Box>
            </Box>
            <Box marginTop={3}>
              <Typography
                sx={{ textDecoration: "underline" }}
                variant="h6"
                color="#1978F1"
              >
                Work Experience
              </Typography>
              <Box sx={boxColumn} marginTop={2}>
                <ul>
                  {membersData.workExperience.map((wExp) => {
                    return (
                      <li>
                        <Typography variant="subtitle" color="text.primary">
                          {wExp}
                        </Typography>
                      </li>
                    );
                  })}
                </ul>
              </Box>
            </Box>
            <Box marginTop={3}>
              <Typography
                sx={{ textDecoration: "underline" }}
                variant="h6"
                color="#1978F1"
              >
                Statistical Analysis Experience
              </Typography>
              <Box sx={boxColumn} marginTop={2}>
                <ul>
                  {membersData.statisticalAnalysisExperience.map((sExp) => {
                    return (
                      <li>
                        <Typography variant="subtitle" color="text.primary">
                          {sExp}
                        </Typography>
                      </li>
                    );
                  })}
                </ul>
              </Box>
            </Box>
            <Box marginTop={3}>
              <Typography
                sx={{ textDecoration: "underline" }}
                variant="h6"
                color="#1978F1"
              >
                Funded project
              </Typography>
              <Box sx={boxColumn} marginTop={2}>
                <Typography variant="subtitle" color="text.primary">
                  {membersData.fundedProject.title}
                </Typography>
                <Typography
                  marginTop={2}
                  variant="subtitle"
                  color="text.primary"
                >
                  Tool Construction :
                </Typography>
                <ul>
                  {membersData.fundedProject.toolConstruction.map((toolC) => {
                    return (
                      <li>
                        <Typography variant="subtitle" color="text.primary">
                          {toolC}
                        </Typography>
                      </li>
                    );
                  })}
                </ul>
              </Box>
            </Box>

            <Box marginTop={3}>
              <Typography
                sx={{ textDecoration: "underline" }}
                variant="h6"
                color="#1978F1"
              >
                Publications
              </Typography>
              <Box sx={boxColumn} marginTop={2}>
                <Typography variant="subtitle" color="text.primary">
                  International :
                </Typography>
                <ul>
                  {membersData.publications.international.map((pubInt) => {
                    return (
                      <li>
                        <Typography variant="subtitle" color="text.primary">
                          {pubInt}
                        </Typography>
                      </li>
                    );
                  })}
                </ul>
                <Typography
                  marginTop={2}
                  variant="subtitle"
                  color="text.primary"
                >
                  Indian :
                </Typography>
                <ul>
                  {membersData.publications.indian.map((pubInd) => {
                    return (
                      <li>
                        <Typography variant="subtitle" color="text.primary">
                          {pubInd}
                        </Typography>
                      </li>
                    );
                  })}
                </ul>
              </Box>
            </Box>
            <Box marginTop={3}>
              <Typography
                sx={{ textDecoration: "underline" }}
                variant="h6"
                color="#1978F1"
              >
                Conference Paper Presentations
              </Typography>
              <Box sx={boxColumn} marginTop={2}>
                <ul>
                  {membersData.publications.presentations.conferencePaper.map(
                    (paper) => {
                      return (
                        <li>
                          <Typography variant="subtitle" color="text.primary">
                            {paper}
                          </Typography>
                        </li>
                      );
                    }
                  )}
                </ul>
              </Box>
            </Box>
            <Box marginTop={3}>
              <Typography
                sx={{ textDecoration: "underline" }}
                variant="h6"
                color="#1978F1"
              >
                Conference Poster Presentations
              </Typography>
              <Box sx={boxColumn} marginTop={2}>
                <ul>
                  {membersData.publications.presentations.conferencePoster.map(
                    (poster) => {
                      return (
                        <li>
                          <Typography variant="subtitle" color="text.primary">
                            {poster}
                          </Typography>
                        </li>
                      );
                    }
                  )}
                </ul>
              </Box>
            </Box>
            <Box marginTop={3}>
              <Typography
                sx={{ textDecoration: "underline" }}
                variant="h6"
                color="#1978F1"
              >
                Other Activities
              </Typography>
              <Box sx={boxColumn} marginTop={2}>
                <ul>
                  {membersData.otherActivities.map((oA) => {
                    return (
                      <li>
                        <Typography variant="subtitle" color="text.primary">
                          {oA}
                        </Typography>
                      </li>
                    );
                  })}
                </ul>
              </Box>
            </Box>
            <Box marginTop={3}>
              <Typography
                sx={{ textDecoration: "underline" }}
                variant="h6"
                color="#1978F1"
              >
                Panel Member
              </Typography>
              <Box sx={boxColumn} marginTop={2}>
                <Typography variant="subtitle" color="text.primary">
                  Board of Studies (Psychology subject):
                </Typography>
                <Typography variant="subtitle" color="text.primary">
                  {membersData.panelMember.boardOfStudies}
                </Typography>
                <Typography
                  marginTop={2}
                  variant="subtitle"
                  color="text.primary"
                >
                  Paper Setting (Psychology subject):
                </Typography>
                <Typography variant="subtitle" color="text.primary">
                  {membersData.panelMember.paperSetting}
                </Typography>
              </Box>
            </Box>
            <Box marginTop={3}>
              <Typography
                sx={{ textDecoration: "underline" }}
                variant="h6"
                color="#1978F1"
              >
                Present Status
              </Typography>
              <Box sx={boxColumn} marginTop={2}>
                {membersData.presentStatus.map((pA) => {
                  return (
                    <>
                      <Typography variant="subtitle" color="text.primary">
                        {pA.heading}
                      </Typography>
                      {pA.content.map((pC)=>{
                        return(
                          <ul>
                          <li>
                            <Typography variant="subtitle" color="text.primary">
                              {pC}
                            </Typography>
                          </li>
                        </ul>
                        )
                      })}
                    </>
                  );
                })}
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
