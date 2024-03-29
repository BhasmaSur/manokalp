import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { whyUs } from "../../demo-data";
import "./index.css";

const WhyUs = () => {
  return (
    <div>
      <Typography align="center" variant="h3" mt={"70px"}>
        Why choose us
      </Typography>
      <Grid container spacing={0}>
        <Grid item xs={0} sm={1}></Grid>
        <Grid item xs={12} sm={2}>
          <Box mt={5}>
            <Paper
              elevation={3}
              sx={{margin: "10px", padding: "10px", bgcolor: "#FC2D47"}}
            >
              <Typography color="#FFFFFF" align="center" variant="h5">
                Focus
              </Typography>
            </Paper>
            <Paper elevation={3} sx={{margin: "10px", height: "200px", bgcolor: "#FE7888" }}>
              <Typography color="#FFFFFF" align="center" variant="h6">
                {whyUs[0]}
              </Typography>
            </Paper>
          </Box>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Box mt={5}>
            <Paper
              elevation={3}
              sx={{margin: "10px", padding: "10px", bgcolor: "#7D3C98", marginBottom: "2px" }}
            >
              <Typography color="#FFFFFF" align="center" variant="h5">
                Caring
              </Typography>
            </Paper>
            <Paper elevation={3} sx={{margin: "10px", height: "200px", bgcolor: "#A569BD" }}>
              <Typography color="#FFFFFF" align="center" variant="h6">
                {whyUs[1]}
              </Typography>
            </Paper>
          </Box>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Box mt={5}>
            <Paper
              elevation={3}
              sx={{margin: "10px", padding: "10px", bgcolor: "#2E86C1", marginBottom: "2px" }}
            >
              <Typography color="#FFFFFF" align="center" variant="h5">
                Responsiveness
              </Typography>
            </Paper>
            <Paper elevation={3} sx={{margin: "10px", height: "200px", bgcolor: "#5DADE2" }}>
              <Typography color="#FFFFFF" align="center" variant="h6">
                {whyUs[2]}
              </Typography>
            </Paper>
          </Box>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Box mt={5}>
            <Paper
              elevation={3}
              sx={{margin: "10px", padding: "10px", bgcolor: "#229954", marginBottom: "2px" }}
            >
              <Typography color="#FFFFFF" align="center" variant="h5">
                Enthusiasm
              </Typography>
            </Paper>
            <Paper elevation={3} sx={{margin: "10px", height: "200px", bgcolor: "#52BE80" }}>
              <Typography color="#FFFFFF" align="center" variant="h6">
                {whyUs[3]}
              </Typography>
            </Paper>
          </Box>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Box mt={5}>
            <Paper
              elevation={3}
              sx={{margin: "10px", padding: "10px", bgcolor: "#BA4A00", marginBottom: "2px" }}
            >
              <Typography color="#FFFFFF" align="center" variant="h5">
                Service
              </Typography>
            </Paper>
            <Paper elevation={3} sx={{margin: "10px", height: "200px", bgcolor: "#DC7633" }}>
              <Typography color="#FFFFFF" align="center" variant="h6">
                {whyUs[4]}
              </Typography>
            </Paper>
          </Box>
        </Grid>
        <Grid item xs={0} sm={1}></Grid>
      </Grid>
    </div>
  );
};

export default WhyUs;
