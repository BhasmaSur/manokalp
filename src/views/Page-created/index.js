import { Grid, Typography } from '@mui/material';
import React from 'react'
import { useLocation } from 'react-router-dom';
import { humanDate } from '../../utility/dateUtility';

const PageCreated = () => {
    const { state } = useLocation();
    const currentDate = humanDate();
    const printingObjects = []
    for (let index = state.startNumber; index < state.lastNumber; index++) {
        printingObjects.push(index)
    }
    console.log(state)
  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
  {printingObjects.map((index) => (
    <Grid item md={2} key={index} align="center">
      <Typography>
        {index}
      </Typography>
      <Typography>
        {currentDate}
      </Typography>
      <img
      width={100}
      height={40}
        src='/assets/signature.png'
      />
      
    </Grid>
  ))}
</Grid>
  )
}

export default PageCreated