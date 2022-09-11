import { Grid, Typography } from "@mui/material";
import React from "react";

const AboutAprna = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={0} sm={1}></Grid>
        <Grid item xs={12} sm={4}>
          <img src="/assets/aparna.jpeg" width={"100%"} height={600} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h3">Aparna Chavan</Typography>
          <Typography variant="h5">
            Mrs Aparna is Ek Disha Manvantar- Psychological Consultancy's
            founder. She is an RCI-certified Clinical Psychologist. After
            finishing her master's in clinical psychology from Pune University,
            She also pursued Post-Graduation Diploma in Rehabilitation
            Psychology. Her education qualifications include a Diploma in
            Electronics & Tele-Com, a Diploma in 'Early childhood education, a
            diploma in & as a 'Craft Teacher', and a Diploma in 'Pre-Primary
            Teacher.
          </Typography>
          <Typography variant="h5">
            Mrs Aparna has undergone intensive training such as; Rational
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
          <Typography variant="h4">
            She was associated with the following schools as visiting
            psychologist:
          </Typography>
          <ul>
            <li>
              <Typography variant="h5">
                Dnyansampada English Medium School, Ahmednagar.
              </Typography>
            </li>
            <li>
              <Typography variant="h5">
                Dr V.Vikhe. Patil Foundations' English Medium School, Ahmednagar
              </Typography>
            </li>
            <li>
              <Typography variant="h5">
                Samata International School, Kopargaon.
              </Typography>
            </li>
            <li>
              <Typography variant="h5">
                Silver Oak Academy English Medium School, Shirdi.
              </Typography>
            </li>
            <li>
              <Typography variant="h5">
                Sri Sri Ravishankar VidyaMandir, Sangamner
              </Typography>
            </li>
            <li>
              <Typography variant="h5">
                Dahanukar English Medium School, Shrirampur.
              </Typography>
            </li>
            <li>
              <Typography variant="h5">
                Vidya International School, Yeola, Nasik.
              </Typography>
            </li>
          </ul>
          <Typography variant="h4">
            She has been associated as a Visiting Psychologist with the
            following Hospitals/Associated Care Centres:
          </Typography>
          <ul>
            <li>
              <Typography variant="h5">
                KelkarJarhadManas Hospital, Karvenagar Pune (July 2014 – July
                2017)
              </Typography>
            </li>
            <li>
              <Typography variant="h5">
                Savali' Association for Mentally Retired and Cerebral Palsy
                Children, Kothrud, Pune. (Oct 2015 – Oct 2016 )
              </Typography>
            </li>
            <li>
              <Typography variant="h5">
                Medi Point Hospitals Pvt. Ltd. Aundh, Pune (April 2015 – April
                2018)
              </Typography>
            </li>
            <li>
              <Typography variant="h5">
                Sai Polyclinic and Endoscopy centre, Kopargaon (May 2018 – Mar
                2020)
              </Typography>
            </li>
            <li>
              <Typography variant="h5">
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
