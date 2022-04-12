import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ImageCollage from '../components/ImageCollage';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typewriter from 'typewriter-effect';

function InterestPage() {
  return (
    <Container sx={{ marginY: 3, width: 900 }}>
      <Box padding={3} display="flex" bgcolor="white" fontSize="50px">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString('INTEREST').start();
          }}
        >
        </Typewriter>
      </Box>
      <Grid container spacing={1} item xs={12}>

        <Paper elevation={16} sx={{ padding: 5 }}>
          <Box marginTop={3} sx={{ display: "flex" }}>
            <img height={325} width={500} src='https://higherlogicdownload.s3.amazonaws.com/SRAINTERNATIONAL/UploadedImages/167e255a-8759-4a2f-92f6-591d6d8f7afb/Catalyst-pictures/Text-body-images/april2021/Picture_2_Travel.jpeg' alt=''></img>
            <ImageCollage />
          </Box>
          <Box>
            <Typography variant='h6' component='h4' marginTop={3}>
              About Me:
            </Typography>
            <Typography variant='paragragh' component='p' marginTop={3}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
              sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </Typography>
          </Box>
        </Paper>
      </Grid>

    </Container>

  );
}

export default InterestPage;