import { Avatar, Box, Grid, ListItemButton, Typography } from "@mui/material";
import React from "react";
import useMediaQuery from '@mui/material/useMediaQuery';

const AboutAprna = () => {
  const matches = useMediaQuery('(max-width:400px)');
  const headingStyle = {
    fontSize : matches ? "20px" : "40px"
  }

  const subHeadingStyle = {
    fontSize : matches ? "14px" : "20px"
  }
  return (
    <>
      <Grid container mt={5}>
        <Grid item xs={0} sm={1}></Grid>
        <Grid item xs={12} sm={4} sx={{ justifyContent: "center"}}>
          <Box display={"flex"} mt={matches ? 5 : 15} justifyContent={"center"}>
          <Avatar
            alt="Aparna Chanvan"
            src="/assets/aparna.jpeg"
            sx={{ width: 200, height: 200 }}
          />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography fontSize={headingStyle.fontSize} padding={2} mb={matches ? 0 : 0} align="center" variant="h3">Aparna Chavan</Typography>
          <Typography fontSize={subHeadingStyle.fontSize} padding={2} variant="h6">
          <span style={{ fontWeight: "bold" }}>Aparna Chavan</span> is <span style={{ fontWeight: "bold" }}>Ek Disha Manvantar- Psychological Consultancy's founder</span>
            . She is an <span style={{ fontWeight: "bold" }}>RCI-certified Clinical Psychologist</span>. After
            finishing her master's in clinical psychology from Pune University,
            She also pursued Post-Graduation Diploma in Rehabilitation
            Psychology. Her education qualifications include a Diploma in
            Electronics & Tele-Com, a Diploma in 'Early childhood education, a
            diploma in & as a 'Craft Teacher', and a Diploma in 'Pre-Primary
            Teacher.
          </Typography>
          <Typography fontSize={subHeadingStyle.fontSize} padding={2} mt={matches ? 0 : 5} variant="h6">
          <span style={{ fontWeight: "bold" }}>Aparna Chavan</span> has undergone intensive training such as; Rational
            Emotive Behaviour Therapy (REBT)' level I & II and 'Cognitive
            Behaviour Therapy (CBT)' level I. She has successively completed a
            Workshop on 'Psychometric Assessment in Adults using the Rorschach
            Ink Blot Test and Skill Training Workshop on child assessment-LD,
            ADHD & Autism: History taking, Symptom identification, Diagnosis,
            Psychometric assessment, Report writing, Report explanations &
            interventions for Patient Management from 'The Institute of  
            Psychological Health, Thane. Mrs Aparna has always been interested
            in teaching; she has also worked as a visiting faculty member at
            different colleges. Mrs Aparna's workshops have been widespread
            across various populations.
          </Typography>
          <Typography fontSize={subHeadingStyle.fontSize} padding={2} mt={matches ? 0 : 10} variant="h5">
          <span style={{ fontWeight: "bold" }}>She was associated with the following schools as visiting
            psychologist:</span>
          </Typography>
          <ul>
            <li>
              <Typography fontSize={subHeadingStyle.fontSize} padding={1} variant="h6">
                Dnyansampada English Medium School, Ahmednagar.
              </Typography>
            </li>
            <li>
              <Typography fontSize={subHeadingStyle.fontSize} padding={1} variant="h6">
                Dr V.Vikhe. Patil Foundations' English Medium School, Ahmednagar
              </Typography>
            </li>
            <li>
              <Typography fontSize={subHeadingStyle.fontSize} padding={1} variant="h6">
                Samata International School, Kopargaon.
              </Typography>
            </li>
            <li>
              <Typography fontSize={subHeadingStyle.fontSize} padding={1} variant="h6">
                Silver Oak Academy English Medium School, Shirdi.
              </Typography>
            </li>
            <li>
              <Typography fontSize={subHeadingStyle.fontSize} padding={1} variant="h6">
                Sri Sri Ravishankar VidyaMandir, Sangamner
              </Typography>
            </li>
            <li>
              <Typography fontSize={subHeadingStyle.fontSize} padding={1} variant="h6">
                Dahanukar English Medium School, Shrirampur.
              </Typography>
            </li>
            <li>
              <Typography fontSize={subHeadingStyle.fontSize} padding={1} variant="h6">
                Vidya International School, Yeola, Nasik.
              </Typography>
            </li>
          </ul>
          <Typography fontSize={headingStyle.fontSize} padding={2} mt={matches ? 0 : 10} variant="h5">
          <span style={{ fontSize:subHeadingStyle.fontSize, fontWeight: "bold" }}>She has been associated as a Visiting Psychologist with the
            following Hospitals/Associated Care Centres:</span>
          </Typography>
          <ul>
            <li>
              <Typography fontSize={subHeadingStyle.fontSize} padding={1} variant="h6">
                KelkarJarhadManas Hospital, Karvenagar Pune (July 2014 – July
                2017)
              </Typography>
            </li>
            <li>
              <Typography fontSize={subHeadingStyle.fontSize}  padding={1} variant="h6">
                Savali' Association for Mentally Retired and Cerebral Palsy
                Children, Kothrud, Pune. (Oct 2015 – Oct 2016 )
              </Typography>
            </li>
            <li>
              <Typography fontSize={subHeadingStyle.fontSize}  padding={1} variant="h6">
                Medi Point Hospitals Pvt. Ltd. Aundh, Pune (April 2015 – April
                2018)
              </Typography>
            </li>
            <li>
              <Typography fontSize={subHeadingStyle.fontSize} padding={1} variant="h6">
                Sai Polyclinic and Endoscopy centre, Kopargaon (May 2018 – Mar
                2020)
              </Typography>
            </li>
            <li>
              <Typography fontSize={subHeadingStyle.fontSize} padding={1} variant="h6">
                Namrata Neuropsychiatric Hospital, Belapur Road, Shrirampur (May
                2018 – Mar 2020).
              </Typography>
            </li>
          </ul>
        </Grid>
        <Grid item xs={0} sm={1}></Grid>
      </Grid>
    </>
  );
};

export default AboutAprna;
