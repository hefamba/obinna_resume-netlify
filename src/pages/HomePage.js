import React from 'react'
import '../App.css';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import IntroCard from '../components/IntroCard';



function HomePage() {
  return (
    <div className="App">
     
     <Container sx={{ marginY: 12 }}>
        <Grid container spacing={1}>
          <IntroCard />
        </Grid>
      </Container>
    </div>
  )
}

export default HomePage