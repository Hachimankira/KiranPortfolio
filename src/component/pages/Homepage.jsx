import React from 'react'
import Sidebar from '../Sidebar';
import HomepageCard from '../HomepageCard';
import { Grid } from '@mui/material';


const Homepage = () => {

  return (
    <Grid container spacing = {2}>
        <Grid item xs={4} className='App' style={{display: 'flex'}}>
            <Sidebar/>
        </Grid>
        <Grid >
            <HomepageCard />
        </Grid>
    </Grid>
  )
}

export default Homepage