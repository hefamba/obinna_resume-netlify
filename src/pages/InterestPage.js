import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ImageCollage from '../components/ImageCollage';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typewriter from 'typewriter-effect';
import './ImageBox.css';

function InterestPage() {
  return (
    <Container sx={{ marginY: 3 }}>
      <Box padding={3} display="flex" bgcolor="white" fontSize="40px">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString('INTEREST').start();
          }}></Typewriter>
      </Box>
      <Grid item xs={12}>
        <Paper elevation={16} sx={{ padding: 5 }}>
          <Box
            marginTop={3}
            sx={{ display: 'flex', justifyContent: 'center' }}
            className="imgBox">
            <img
              height={'60%'}
              width={'60%'}
              src="https://higherlogicdownload.s3.amazonaws.com/SRAINTERNATIONAL/UploadedImages/167e255a-8759-4a2f-92f6-591d6d8f7afb/Catalyst-pictures/Text-body-images/april2021/Picture_2_Travel.jpeg"
              alt=""></img>
          </Box>
          <Box>
            <Typography variant="h6" component="h4" marginTop={3}>
              About Me:
            </Typography>
            <Typography variant="paragragh" component="p" marginTop={3}>
              Let me share with you some of my cherished interests and hobbies,
              each of which adds a distinct hue to the canvas of my life.
              Firstly, there's pickleball, a game that combines the joys of
              tennis, badminton, and ping pong. It's not just about the sport
              itself; it's about the camaraderie and laughter shared on the
              court under the sun's warm embrace. Then, there's video gaming, a
              world where I can be a hero, a strategist, or an explorer, all
              from the comfort of my own space. It's a form of escapism that
              keeps my mind sharp and my imagination vivid. Another passion of
              mine is reading fantasy literature. The pages of a good fantasy
              novel transport me to magical realms, where I can accompany brave
              heroes on epic quests and unravel the mysteries of enchanting
              worlds. Finally, there's traveling, which is like opening a
              treasure chest of experiences. Exploring new cultures, savoring
              exotic cuisine, and witnessing breathtaking landscapes are all
              part of the adventure. These diverse interests and hobbies paint a
              vibrant picture of my life, each one contributing to my personal
              growth and the richness of my experiences.
            </Typography>
          </Box>
        </Paper>
      </Grid>
    </Container>
  );
}

export default InterestPage;
