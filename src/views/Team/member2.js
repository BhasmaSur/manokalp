import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { membersData2 } from "../../demo-data";
import { Box } from "@mui/system";

const boxColumn = {
  display: "flex",
  flexDirection: "column",
};

const member2 = `प्रा.डॉ. सौ. मेधा माधव कुमठेकर`;
export default function Member2() {
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
        <Card sx={{ maxWidth: 1000,marginTop:2 }}>
          <CardHeader align="center" title={member2} />
          <CardContent align="left">
            <ul>
              {membersData2.map((mem2) => {
                return (
                  <li>
                    <Typography variant="subtitle" color="text.primary">
                      {mem2}
                    </Typography>
                  </li>
                );
              })}
            </ul>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
