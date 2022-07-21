import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { membersData2 } from "../../demo-data";
import { Box } from "@mui/system";
import { editorialInfo } from "../../demo-data";
import Divider from "@mui/material/Divider";
const boxColumn = {
  display: "flex",
  flexDirection: "column",
};

const EditorialBoard = () => {
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
        <Card sx={{ maxWidth: 1000, marginTop: 2 }}>
          <CardHeader align="center" title="Publisher" />
          <CardContent align="left">
            <Box sx={boxColumn} marginTop={3} marginBottom={4}>
              <Typography variant="h6" color="text.primary">
                Name : {editorialInfo.publisherInfo.name}
              </Typography>
              <Typography variant="subtitle" color="text.primary">
                Designation : {editorialInfo.publisherInfo.designation}
              </Typography>
              <Typography variant="subtitle" color="text.primary">
                Address : {editorialInfo.publisherInfo.address}
              </Typography>
              <Typography variant="subtitle" color="text.primary">
                Email : {editorialInfo.publisherInfo.email}
              </Typography>
              <Typography variant="subtitle" color="text.primary">
                Place of Publication : :{" "}
                {editorialInfo.publisherInfo.placeOfPublication}
              </Typography>
            </Box>
            <Divider />
            <Typography
              sx={{ textDecoration: "underline" }}
              variant="h6"
              color="#1978F1"
              align="center"
              marginTop={3}
            >
              EDITORIAL BOARD
            </Typography>
            <Box sx={boxColumn} marginTop={3} marginBottom={2}>
              <Typography variant="h5" color="text.primary">
                CHIEF EDITOR
              </Typography>
              {editorialInfo.editorialBoard.chiefEditor.map((editor,index) => {
                return (
                  <Box sx={boxColumn} marginTop={3}>
                    <Typography variant="h6" color="text.primary">
                        {index+1}) Name : {editor.name}
                    </Typography>
                    <Typography variant="subtitle" color="text.primary">
                        Designation : {editor.designation}
                    </Typography>
                    <Typography variant="subtitle" color="text.primary">
                        Department : {editor.department}
                    </Typography>
                    <Typography variant="subtitle" color="text.primary">
                        Address : {editor.address}
                    </Typography>
                    <Typography variant="subtitle" color="text.primary">
                        Email : {editor.email}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default EditorialBoard;
